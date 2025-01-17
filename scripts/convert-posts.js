const fs = require('fs').promises;
const path = require('path');
const matter = require('gray-matter');
const MarkdownIt = require('markdown-it');

const POSTS_DIR = path.join(__dirname, '../src/components/blog/posts');
const OUTPUT_FILE = path.join(__dirname, '../src/components/blog/blogData.js');
const ASSETS_DIR = path.join(__dirname, '../src/components/blog/assets/img');

async function convertPosts() {
  try {
    const files = await fs.readdir(POSTS_DIR);
    const markdownFiles = files.filter(file => file.endsWith('.md'));

    const md = new MarkdownIt({
      html: true,
      linkify: true,
      typographer: true
    });

    // Convert each file
    const posts = await Promise.all(markdownFiles.map(async file => {
      const content = await fs.readFile(path.join(POSTS_DIR, file), 'utf8');
      const { data: frontmatter, content: markdownContent } = matter(content);

      // Convert markdown to HTML, and collect image references
      const imageReferences = [];
      
      // Handle markdown-style images with dimensions and alignment
      // Format: ![alt|width=300,height=200,align=center](image.jpg)
      const dimensionedContent = markdownContent.replace(
        /!\[(.*?)(?:\|(.*?))?\]\((.*?)\)/g, 
        (match, alt, options, src) => {
          const imageName = path.basename(src);
          imageReferences.push(imageName);
          
          if (!options) {
            return `<img src="${imageName}" alt="${alt}">`;
          }

          // Parse options
          const attrs = {};
          options.split(',').forEach(opt => {
            const [key, value] = opt.trim().split('=');
            if (value) attrs[key] = value;
          });

          // Build style attribute for alignment
          let style = '';
          if (attrs.align) {
            switch(attrs.align) {
              case 'left':
                style = 'style="float: left; margin-right: 1em;"';
                break;
              case 'right':
                style = 'style="float: right; margin-left: 1em;"';
                break;
              case 'center':
                style = 'style="display: block; margin: 0 auto;"';
                break;
            }
          }

          // Build dimension attributes
          const dimensions = [];
          if (attrs.width) dimensions.push(`width="${attrs.width}"`);
          if (attrs.height) dimensions.push(`height="${attrs.height}"`);
          
          return `<img src="${imageName}" alt="${alt}" ${dimensions.join(' ')} ${style}`.trim() + '>';
        }
      );

      const htmlContent = md.render(dimensionedContent);

      // Generate import statements for the referenced images
      const imageImports = imageReferences.map(imageName => {
        const importName = `img_${path.basename(imageName, path.extname(imageName))}`;
        return `import ${importName} from './assets/${path.basename(file, '.md')}/${imageName}';`;
      });

      return {
        id: path.basename(file, '.md'),
        title: frontmatter.title,
        date: frontmatter.date,
        author: frontmatter.author,
        tags: frontmatter.tags || [],
        excerpt: frontmatter.excerpt || '',
        content: `${htmlContent.replace(/src="(.*?)"/g, (match, src) => {
          const imageName = path.basename(src, path.extname(src));
          return `src=\${img_${imageName}}`;
        })}`,
        imageImports: imageImports.join('\n')
      };
    }));

    // Sort posts by date
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Generate JavaScript file
    const output = `// This file is auto-generated. Do not edit directly.
${posts.map(post => post.imageImports).join('\n')}

export const blogPosts = ${JSON.stringify(posts, null, 2).replace(/"content": "(.+?)\\n"/gs, (match, content) => `"content": \`${content}\``)};
`;

    // Write to blogData.js
    await fs.writeFile(OUTPUT_FILE, output);
    console.log(`✅ Successfully converted ${posts.length} posts`);

  } catch (error) {
    console.error('Error converting posts:', error);
    process.exit(1);
  }
}

convertPosts();
