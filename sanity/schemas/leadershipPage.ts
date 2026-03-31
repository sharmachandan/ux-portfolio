import { defineField, defineType } from 'sanity';

export const leadershipPageType = defineType({
  name: 'leadershipPage',
  title: 'Leadership Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Page title',
      initialValue: 'Leadership Principles',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Page description',
    }),
    defineField({
      name: 'principles',
      type: 'array',
      title: 'Leadership Principles',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Principle title' },
            { name: 'description', type: 'text', title: 'Description' },
            { name: 'example', type: 'text', title: 'Example' },
          ],
        },
      ],
    }),
  ],
});
