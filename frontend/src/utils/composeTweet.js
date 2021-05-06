// Function returns the quote and author encoded as a URI
export function composeTweet(quote, author) {
  const tweetContent = `${quote}
  -${author}`; // quote author should be on separate line

  return encodeURIComponent(tweetContent);
}
