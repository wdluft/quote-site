import { FiMessageCircle as icon } from 'react-icons/fi';

export default {
  // Computer name
  name: 'quote',
  // visible title
  title: 'Quotes',
  type: 'document',
  icon,
  fields: [
    {
      name: 'quote',
      title: 'Quote',
      description: 'The body of the quote',
      type: 'array',
      of: [{ type: 'block' }, { type: 'author' }],
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (doc) => `${doc.quote[0].children[0].text}`,
        maxLength: 100,
      },
    },
    {
      name: 'source',
      title: 'Source',
      type: 'string',
      description: 'The source of the quote',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'tag' }] }],
      options: { layout: 'tags' },
    },
    // TODO: add author of quote
    {
      name: 'author',
      title: 'Author',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'author' }],
          title: 'Find existing author',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'quote',
      author: 'author.0.name',
      tag0: 'tags.0.name',
      tag1: 'tags.1.name',
      tag2: 'tags.2.name',
      tag3: 'tags.3.name',
    },
    prepare: ({ title, author, ...tags }) => {
      // 1. Filter undefined tags out
      const shortTags = Object.values(tags).filter(Boolean);
      // 2. Trim length of title
      const shortTitle = `${title[0].children[0].text.slice(0, 15)}...`;
      // 3. Return the preview object for the quote
      return {
        title: shortTitle,
        subtitle: `${author} - ${shortTags.join(', ')}`,
      };
    },
  },
};
