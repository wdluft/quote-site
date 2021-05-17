export function convertQuoteToText(quoteArr) {
  // Tweet - quote /br author /br quoteurl
  let quoteBlock = ``;
  quoteArr.forEach((line, index) => {
    const currentLine = line.children[0].text;
    if (index === 0) {
      quoteBlock += currentLine;
    } else {
      quoteBlock = `${quoteBlock}
${currentLine}`;
    }
  });
  return quoteBlock;
}
