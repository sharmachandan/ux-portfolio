import { defineField, defineType } from 'sanity';

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'logo',
      type: 'image',
      title: 'Logo',
      description: 'Logo displayed in the header. Recommended: transparent PNG or SVG for best results.',
    }),
    defineField({
      name: 'favicon',
      type: 'image',
      title: 'Favicon',
      description: 'Browser tab icon. Recommended: square image (e.g. 32×32 or 64×64).',
    }),
  ],
});
