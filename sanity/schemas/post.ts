import { defineField, defineType } from 'sanity';

export const postType = defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: { source: 'title' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'excerpt',
      type: 'text',
      title: 'Excerpt',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'coverImage',
      type: 'image',
      title: 'Cover image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'body',
      type: 'array',
      title: 'Body',
      of: [{ type: 'block' }],
    }),
  ],
});
