import { graphql } from 'gatsby';
import React from 'react';

function QuotePage({ data }) {
  console.log(data);
  return (
    <>
      <p>Quote Page</p>
    </>
  );
}

// Get all quotes
export const query = graphql`
  query QuoteQuery {
    quotes: allSanityQuote {
      nodes {
        id
        _rawQuote
        slug {
          current
        }
        author {
          name
          twitter
          slug {
            current
          }
        }
        tags {
          name
          slug {
            current
          }
        }
      }
    }
  }
`;

export default QuotePage;
