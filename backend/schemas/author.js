import { IoPerson as icon } from 'react-icons/io5';

export default {
  // Computer name
  name: 'author',
  // visible title
  title: 'Author',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Author name',
      type: 'string',
      description: `The author's name`,
    },
  ],
};
