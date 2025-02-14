import { defineField } from 'sanity';

export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    defineField({
      name: 'profile_picture',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
};
