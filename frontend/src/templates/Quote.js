import { graphql } from 'gatsby';
import React from 'react';
import QuoteCard from '../components/QuoteCard';

function SingleQuotePage({ data }) {
  const { quote } = data;
  return (
    <>
      <QuoteCard quote={quote} />
    </>
  );
}

export default SingleQuotePage;

// Needs to be dynamic based on slug passed in via context in gatsby-node.js
export const query = graphql`
  query($slug: String!) {
    quote: sanityQuote(slug: { current: { eq: $slug } }) {
      id
      quote {
        children {
          text
          marks
          _type
          _key
        }
      }
      source
      slug {
        current
      }
      tags {
        id
        name
        slug {
          current
        }
      }
      author {
        id
        name
        twitter
        slug {
          current
        }
      }
    }
  }
`;
