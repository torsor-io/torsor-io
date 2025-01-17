const wrapTerminalText = (text, maxWidth = 90) => {
  // Handle empty or null input
  if (!text) return '';
  
  // Split into lines, preserving existing line breaks
  const lines = text.split('\n');
  
  return lines.map(line => {
    // If line is shorter than maxWidth, return as is
    if (line.length <= maxWidth) return line;
    
    // Find indentation if any
    const indentMatch = line.match(/^(\s+)/);
    const indent = indentMatch ? indentMatch[0] : '';
    const indentWidth = indent.length;
    
    // Initialize variables for word wrapping
    const words = line.split(' ');
    let currentLine = '';
    const wrappedLines = [];
    
    // Process each word
    words.forEach(word => {
      // Check if adding this word would exceed maxWidth
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      
      if (testLine.length > maxWidth) {
        // If we have a current line, push it and start new line
        if (currentLine) {
          wrappedLines.push(currentLine);
          // Add indentation to new line if there was any
          currentLine = indent + word;
        } else {
          // If word itself is longer than maxWidth, force break it
          wrappedLines.push(word.slice(0, maxWidth));
          currentLine = indent + word.slice(maxWidth);
        }
      } else {
        // Add word to current line
        currentLine = testLine;
      }
    });
    
    // Add final line if any
    if (currentLine) {
      wrappedLines.push(currentLine);
    }
    
    return wrappedLines.join('\n');
  }).join('\n');
};

// Helper to wrap arrays of strings
export const wrapTerminalLines = (lines, maxWidth = 90) => {
  if (!Array.isArray(lines)) return [];
  return lines.flatMap(line => wrapTerminalText(line, maxWidth).split('\n'));
};

export default wrapTerminalText;
