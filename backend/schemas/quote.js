import { FiMessageCircle as icon } from 'react-icons/fi';

export default {
  // Computer name
  name: 'quotes',
  // visible title
  title: 'Quotes',
  type: 'document',
  icon,
  fields: [
    {
      name: 'quote',
      title: 'Quote',
      type: 'string',
      description: 'The body of the quote',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'quote',
        maxLength: 100,
      },
    },
    {
      name: 'source',
      title: 'Source',
      type: 'string',
      description: 'The source of the quote',
    },
    // TODO: add author of quote
  ],
};
