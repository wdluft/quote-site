import { graphql } from 'gatsby';
import * as React from 'react';
import QuoteList from '../components/QuoteList';

function HomePage({ data }) {
  const quotes = data.quotes.nodes;

  return (
    <>
      <QuoteList quotes={quotes} />
    </>
  );
}

// Get five most recent quotes
export const query = graphql`
  query RecentQuotesQuery {
    quotes: allSanityQuote(
      limit: 5
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
        }
      }
    }
  }
`;

export default HomePage;
