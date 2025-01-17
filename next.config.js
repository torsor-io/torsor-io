const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      require('remark-math'),
      require('remark-gfm')
    ],
    rehypePlugins: [
      require('rehype-katex')
    ],
  },
});

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx'],
});

const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: require.resolve('path-browserify'),
      };
    }
    return config;
  },
};

module.exports = nextConfig;
