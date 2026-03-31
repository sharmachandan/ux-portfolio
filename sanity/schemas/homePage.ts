import { defineField, defineType } from 'sanity';

export const homePageType = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroHeadline',
      type: 'string',
      title: 'Hero headline',
      initialValue: 'Design Leader',
    }),
    defineField({
      name: 'heroSubtitle',
      type: 'string',
      title: 'Hero subtitle',
      initialValue: 'Fortune 1 Retailer',
    }),
    defineField({
      name: 'heroDescription',
      type: 'text',
      title: 'Hero description',
      rows: 4,
    }),
    defineField({
      name: 'heroImage',
      type: 'image',
      title: 'Hero POV image',
    }),
    defineField({
      name: 'ctaPrimaryLabel',
      type: 'string',
      title: 'Primary CTA label',
      initialValue: 'View Case Studies',
    }),
    defineField({
      name: 'ctaPrimaryHref',
      type: 'string',
      title: 'Primary CTA link',
      initialValue: '/case-studies/',
    }),
    defineField({
      name: 'ctaSecondaryLabel',
      type: 'string',
      title: 'Secondary CTA label',
      initialValue: 'About Me',
    }),
    defineField({
      name: 'ctaSecondaryHref',
      type: 'string',
      title: 'Secondary CTA link',
      initialValue: '/about/',
    }),
    defineField({
      name: 'featuredWorkTitle',
      type: 'string',
      title: 'Featured Work section title',
      initialValue: 'Featured Work',
    }),
    defineField({
      name: 'featuredWorkDescription',
      type: 'text',
      title: 'Featured Work description',
    }),
    defineField({
      name: 'featuredWorkLinkLabel',
      type: 'string',
      title: 'Featured Work link label',
      initialValue: 'View all case studies',
    }),
    defineField({
      name: 'awardsTitle',
      type: 'string',
      title: 'Awards section title',
      initialValue: 'International Design Awards',
    }),
    defineField({
      name: 'awardsDescription',
      type: 'text',
      title: 'Awards section description',
    }),
    defineField({
      name: 'awardsLinkLabel',
      type: 'string',
      title: 'Awards link label',
      initialValue: 'View all awards',
    }),
    defineField({
      name: 'leadershipTitle',
      type: 'string',
      title: 'Leadership section title',
      initialValue: 'Leadership Principles',
    }),
    defineField({
      name: 'leadershipDescription',
      type: 'text',
      title: 'Leadership section description',
    }),
    defineField({
      name: 'leadershipLinkLabel',
      type: 'string',
      title: 'Leadership link label',
      initialValue: 'View all principles',
    }),
    defineField({
      name: 'blogTitle',
      type: 'string',
      title: 'Blog section title',
      initialValue: 'Blog',
    }),
    defineField({
      name: 'blogDescription',
      type: 'text',
      title: 'Blog section description',
    }),
    defineField({
      name: 'blogEmptyMessage',
      type: 'text',
      title: 'Blog empty state message',
    }),
    defineField({
      name: 'contactTitle',
      type: 'string',
      title: 'Contact section title',
      initialValue: "Let's Connect",
    }),
    defineField({
      name: 'contactDescription',
      type: 'text',
      title: 'Contact section description',
    }),
    defineField({
      name: 'contactButtonLabel',
      type: 'string',
      title: 'Contact button label',
      initialValue: 'Get in Touch',
    }),
    defineField({
      name: 'contactEmail',
      type: 'string',
      title: 'Contact email',
      initialValue: 'hello@example.com',
    }),
  ],
});
