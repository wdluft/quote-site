import { graphql } from 'gatsby';
import React from 'react';
import QuoteList from '../components/QuoteList';

function QuotePage({ data }) {
  const quotes = data.quotes.nodes;

  return (
    <>
      <h1>Quotes</h1>
      <QuoteList quotes={quotes} />
    </>
  );
}

// Get all quotes
export const query = graphql`
  query QuoteQuery($tagRegex: String) {
    quotes: allSanityQuote(
      filter: { tags: { elemMatch: { name: { regex: $tagRegex } } } }
      sort: { fields: _createdAt, order: DESC }
    ) {
      nodes {
        id
        quote {
          children {
            _key
            _type
            marks
            text
          }
        }
        _createdAt
        author {
          name
          twitter
          slug {
            current
          }
          _id
        }
        source
        slug {
          current
        }
        tags {
          slug {
            current
          }
          name
          id
        }
      }
    }
  }
`;

export default QuotePage;
