import { defineField, defineType } from 'sanity';

export const awardsPageType = defineType({
  name: 'awardsPage',
  title: 'Awards Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Page title',
      initialValue: 'Awards & Recognition',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Page description',
    }),
    defineField({
      name: 'awards',
      type: 'array',
      title: 'Awards',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Award name' },
            { name: 'year', type: 'number', title: 'Year' },
            { name: 'category', type: 'string', title: 'Category' },
            { name: 'project', type: 'string', title: 'Project' },
            { name: 'org', type: 'string', title: 'Organization' },
            { name: 'link', type: 'url', title: 'Link' },
          ],
        },
      ],
    }),
  ],
});
