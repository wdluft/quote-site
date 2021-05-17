import { convertQuoteToText } from './convertQuoteToText';

// Function returns the quote and author encoded as a URI
export function composeTweetURI(quote, author) {
  const tweetContent = `${convertQuoteToText(quote)}
-${author}`; // quote author should be on separate line

  console.log(encodeURIComponent(tweetContent));

  return encodeURIComponent(tweetContent);
}
