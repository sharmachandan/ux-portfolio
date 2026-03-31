import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import sanity from '@sanity/astro';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [
    tailwind(),
    sanity({
      projectId: process.env.PUBLIC_SANITY_PROJECT_ID || 'placeholder',
      dataset: process.env.PUBLIC_SANITY_DATASET ?? 'production',
      useCdn: false,
    }),
    react(),
  ],
});