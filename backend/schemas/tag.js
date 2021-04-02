import { FiTag as icon } from 'react-icons/fi';

export default {
  // Computer name
  name: 'tag',
  // visible title
  title: 'Tags',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Tag name',
      type: 'string',
      description: `What is the tag?`,
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 50,
      },
    },
  ],
};
