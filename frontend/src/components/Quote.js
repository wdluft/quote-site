import React from 'react';
import styled from 'styled-components';
import { ImQuotesLeft } from '@react-icons/all-files/im/ImQuotesLeft';
import { ImQuotesRight } from '@react-icons/all-files/im/ImQuotesRight';
import { Link } from 'gatsby';

const QuoteWrapper = styled.article`
  background-color: var(--white);
  color: var(--whySoGrey);
  position: relative;
  box-shadow: var(--mdShadow);
  padding: 1rem;
  margin: 0 auto 5rem;
  max-width: 40rem;

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
    font-size: 1.5em;
  }
  .quote-right {
    fill: var(--secondary);
    margin-left: 0.5rem;
    font-size: 1.5em;
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
    font-size: var(--h4);
  }
`;

function Quote({ quote }) {
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
      <p className="author">
        -{quote.author[0].name}
        {/* {Show source if available} */}
        {quote.source ? (
          <span className="source">
            , <em>{quote.source}</em>
          </span>
        ) : null}
      </p>

      {/* Twitter */}
      {/* Removing author twitter */}
      {/* {quote.author[0].twitter ? (
        <a href={`https://www.twitter.com/${quote.author[0].twitter}`}>
          {`@${quote.author[0].twitter}`}
        </a>
      ) : null} */}
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
