import { defineField, defineType } from 'sanity';

export const caseStudyType = defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
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
      name: 'company',
      type: 'string',
      title: 'Company',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'outcome',
      type: 'string',
      title: 'Outcome',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'role',
      type: 'string',
      title: 'Role',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'teamSize',
      type: 'string',
      title: 'Team size',
    }),
    defineField({
      name: 'problem',
      type: 'string',
      title: 'Problem statement',
    }),
    defineField({
      name: 'impactCategories',
      type: 'array',
      title: 'Impact categories',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Strategy', value: 'Strategy' },
          { title: 'Team Enablement', value: 'Team Enablement' },
          { title: 'Execution', value: 'Execution' },
        ],
      },
    }),
    defineField({
      name: 'featured',
      type: 'boolean',
      title: 'Featured',
      initialValue: false,
    }),
    defineField({
      name: 'coverImage',
      type: 'image',
      title: 'Cover image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'body',
      type: 'array',
      title: 'Body content',
      of: [{ type: 'block' }],
    }),
  ],
});
