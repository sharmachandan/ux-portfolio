import { defineField, defineType } from 'sanity';

export const aboutPageType = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Page title',
      initialValue: 'About Me',
    }),
    defineField({
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle',
      initialValue: 'Design Leader at a Fortune 1 Retailer',
    }),
    defineField({
      name: 'photo',
      type: 'image',
      title: 'Profile photo',
    }),
    defineField({
      name: 'bio',
      type: 'array',
      title: 'Bio',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'experience',
      type: 'array',
      title: 'Experience',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Job title' },
            { name: 'company', type: 'string', title: 'Company' },
            { name: 'period', type: 'string', title: 'Period (e.g. Present, 2020-2022)' },
            { name: 'highlight', type: 'boolean', title: 'Highlight (accent border)', initialValue: true },
          ],
        },
      ],
    }),
    defineField({
      name: 'whatIDoTitle',
      type: 'string',
      title: 'What I Do section title',
      initialValue: 'What I Do',
    }),
    defineField({
      name: 'whatIDo',
      type: 'array',
      title: 'What I Do items',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'description', type: 'text', title: 'Description' },
          ],
        },
      ],
    }),
    defineField({
      name: 'contactTitle',
      type: 'string',
      title: 'Contact section title',
      initialValue: 'Get in Touch',
    }),
    defineField({
      name: 'contactDescription',
      type: 'text',
      title: 'Contact description',
    }),
    defineField({
      name: 'contactButtonLabel',
      type: 'string',
      title: 'Contact button label',
      initialValue: 'Contact Me',
    }),
    defineField({
      name: 'contactEmail',
      type: 'string',
      title: 'Contact email',
      initialValue: 'hello@example.com',
    }),
  ],
});
