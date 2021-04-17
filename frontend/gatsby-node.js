import path from 'path';

async function turnQuotesIntoPages({ graphql, actions }) {
  // 1. Get a template for this page
  const quoteTemplate = path.resolve('./src/templates/Quote.js');
  // 2. Query all quotes
  const { data } = await graphql(`
    query {
      quotes: allSanityQuote {
        nodes {
          slug {
            current
          }
        }
      }
    }
  `);
  // 3. Loop over each quote and create a page for that quote
  data.quotes.nodes.forEach((quote) => {
    actions.createPage({
      // URL for new page
      path: `quote/${quote.slug.current}`,
      component: quoteTemplate,
      context: {
        slug: quote.slug.current,
      },
    });
  });
}

async function turnTagsIntoPages({ graphql, actions }) {
  // 1. Get a template for this page
  const tagTemplate = path.resolve('./src/pages/quotes.js');
  // 2. Query all tags
  const { data } = await graphql(`
    query {
      tags: allSanityTag {
        nodes {
          id
          name
        }
      }
    }
  `);
  // 3. Loop over each tag and create a page for that tag
  data.tags.nodes.forEach((tag) => {
    actions.createPage({
      path: `tag/${tag.name}`,
      component: tagTemplate,
      context: {
        tag: tag.name,
        // TODO Regex for tag
        tagRegex: `/${tag.name}/i`,
      },
    });
  });
}

export async function createPages(params) {
  // Create pages dynamically
  // 1. Quotes
  await turnQuotesIntoPages(params);
  // 2. Authors
  // 3. Tags
  await turnTagsIntoPages(params);

  // await Promise.all([
  //   turnQuotesIntoPages(params),
  //   turnTagsIntoPages(params),
  // ]);
}
