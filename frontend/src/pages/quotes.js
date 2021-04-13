import { graphql } from 'gatsby';
import React from 'react';
import QuoteList from '../components/QuoteList';

function QuotePage({ data }) {
  const quotes = data.quotes.nodes;

  return (
    <>
      <QuoteList quotes={quotes} />
    </>
  );
}

// Get all quotes
export const query = graphql`
  query QuoteQuery {
    quotes: allSanityQuote(sort: { fields: _createdAt, order: DESC }) {
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
