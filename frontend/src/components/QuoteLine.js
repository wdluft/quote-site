import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const QuoteLineWrapper = styled.figure`
  a {
    color: var(--white);
    text-decoration: underline;
    text-decoration-color: var(--primary);
  }

  ul {
    display: flex;
    list-style: none;
  }

  .tag {
    font-size: var(--smallText);
    color: var(--black);
    background-color: var(--primary);
    border-radius: 1rem;
    padding: 0.25rem 0.75rem;
  }
`;

function QuoteLine({ quote }) {
  return (
    <QuoteLineWrapper>
      <blockquote>
        {quote.quote.map((line, index) => (
          <Link to={`/quote/${quote.slug.current}`}>
            <span key={line.children[0]._key}>
              {index === 0 ? `"` : null}
              {line.children[0].text}
              {index === quote.quote.length - 1 ? `"` : null}
            </span>
          </Link>
        ))}
      </blockquote>
      <figcaption>
        {quote.author[0].name}
        {quote.source ? (
          <span className="source">
            , <cite>{quote.source}</cite>
          </span>
        ) : null}
      </figcaption>
      <ul>
        {quote.tags.map((tag) => (
          <Link to={`/tag/${tag.name}`} className="tag" key={tag.id}>
            <li>{tag.name}</li>
          </Link>
        ))}
      </ul>
    </QuoteLineWrapper>
  );
}

export default QuoteLine;
