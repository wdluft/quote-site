import React from 'react';
import styled from 'styled-components';
import { ImQuotesLeft } from '@react-icons/all-files/im/ImQuotesLeft';
import { ImQuotesRight } from '@react-icons/all-files/im/ImQuotesRight';
import { Link } from 'gatsby';
import { convertQuoteToText } from '../utils/quoteToText';
import { composeTweet } from '../utils/composeTweet';

const QuoteWrapper = styled.figure`
  background-color: var(--white);
  color: var(--whySoGrey);
  position: relative;
  box-shadow: var(--mdShadow);
  padding: 1rem;
  margin: 0 auto 5rem;
  max-width: 40rem;

  /* Undercard */
  &::before {
    content: '';
    width: 100%;
    height: 100%;
    background-color: var(--primary);
    background-image: var(--gradient);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -10;
    transform: rotate(3deg);
  }

  .quote-left {
    fill: var(--primary);
    margin-right: 0.5rem;
    font-size: 1em;
  }
  .quote-right {
    fill: var(--secondary);
    margin-left: 0.5rem;
    font-size: 1em;
  }

  .line {
    display: block;
  }

  p {
    font-size: var(--h5);
  }

  ul {
    list-style: none;
    display: flex;
  }

  .tag {
    --bgColor: var(--primary);
    background-color: var(--bgColor);
    padding: 0.25rem 0.5rem;
    border-radius: 1rem;
    margin-right: 1rem;
  }

  a {
    color: var(--black);
  }

  blockquote {
    font-size: var(--h5);
  }

  @media screen and (min-width: 40rem) {
    blockquote {
      font-size: var(--h4);
    }
  }
`;

function Quote({ quote }) {
  const quoteText = convertQuoteToText(quote.quote);
  const tweetContent = composeTweet(quoteText, quote.author[0].name);
  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${tweetContent}&via=IAmWillDL&url=`;
  return (
    <QuoteWrapper>
      <blockquote>
        {quote.quote.map((line, index) => (
          <span className="line" key={line.children[0]._key}>
            {index === 0 ? <ImQuotesLeft className="quote-left" /> : null}
            {line.children[0].text}
            {index === quote.quote.length - 1 ? (
              <ImQuotesRight className="quote-right" />
            ) : null}
          </span>
        ))}
      </blockquote>
      <figcaption className="author">
        -{quote.author[0].name}
        {/* {Show source if available} */}
        {quote.source ? (
          <span className="source">
            , <cite>{quote.source}</cite>
          </span>
        ) : null}
      </figcaption>

      {/* Share on Twitter */}
      <a href={twitterShareUrl}>Share on Twitter</a>

      {/* Tags */}
      <ul>
        {quote.tags.map((tag) => (
          <Link to={`/tag/${tag.name}`} className="tag" key={tag.id}>
            <li>{tag.name}</li>
          </Link>
        ))}
      </ul>
    </QuoteWrapper>
  );
}

export default Quote;
