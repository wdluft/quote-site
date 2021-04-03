import { IoPerson as icon } from 'react-icons/io5';

export default {
  // Computer name
  name: 'author',
  // visible title
  title: 'Authors',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: `Author's name`,
    },
    {
      name: 'twitter',
      title: 'Twitter handle',
      type: 'string',
      description: `Author's Twitter handle`,
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
