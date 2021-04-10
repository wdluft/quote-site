import React from 'react';
import styled from 'styled-components';
import { ImQuotesLeft } from '@react-icons/all-files/im/ImQuotesLeft';
import { ImQuotesRight } from '@react-icons/all-files/im/ImQuotesRight';

const QuoteWrapper = styled.article`
  background-color: var(--white);
  color: var(--whySoGrey);
  position: relative;
  box-shadow: var(--mdShadow);
  padding: 1rem;
  margin-bottom: 5rem;

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
  }
  .quote-right {
    fill: var(--secondary);
  }

  .line {
    display: block;
  }
`;

function Quote({ quote }) {
  console.log(quote);
  return (
    <QuoteWrapper>
      <blockquote>
        <ImQuotesLeft className="quote-left" />
        {quote.quote.map((line) => (
          <span className="line" key={line.children[0]._key}>
            {line.children[0].text}
          </span>
        ))}
        <ImQuotesRight className="quote-right" />
      </blockquote>
      <p>
        -{quote.author[0].name}
        {/* {Show source if available} */}
        {quote.source ? (
          <span className="source">
            , <em>{quote.source}</em>
          </span>
        ) : null}
      </p>

      {/* Twitter */}
      {quote.author[0].twitter ? (
        <a href={`https://www.twitter.com/${quote.author[0].twitter}`}>
          {`@${quote.author[0].twitter}`}
        </a>
      ) : null}

      {/* Tags */}
      <ul>
        {quote.tags.map((tag) => (
          <li>{tag.name}</li>
        ))}
      </ul>
    </QuoteWrapper>
  );
}

export default Quote;
