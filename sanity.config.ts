import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './sanity/schemas';

const projectId =
  (typeof process !== 'undefined' && process.env?.SANITY_STUDIO_PROJECT_ID) ||
  (typeof process !== 'undefined' && process.env?.PUBLIC_SANITY_PROJECT_ID) ||
  (import.meta as any).env?.PUBLIC_SANITY_PROJECT_ID ||
  '4u768eyg';
const dataset =
  (typeof process !== 'undefined' && process.env?.SANITY_STUDIO_DATASET) ||
  (typeof process !== 'undefined' && process.env?.PUBLIC_SANITY_DATASET) ||
  (import.meta as any).env?.PUBLIC_SANITY_DATASET ||
  'production';

export default defineConfig({
  name: 'ux-portfolio',
  title: 'UX Portfolio',
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) => {
        const singleton = (type: string, title: string) =>
          S.listItem()
            .title(title)
            .id(type)
            .child(S.document().schemaType(type).documentId(type));

        return S.list()
          .title('Content')
          .items([
            singleton('siteSettings', 'Site Settings'),
            S.divider(),
            singleton('homePage', 'Home Page'),
            singleton('aboutPage', 'About Page'),
            singleton('leadershipPage', 'Leadership Page'),
            singleton('awardsPage', 'Awards Page'),
            S.divider(),
            S.listItem()
              .title('Case Studies')
              .schemaType('caseStudy')
              .child(S.documentTypeList('caseStudy').title('Case Studies')),
            S.listItem()
              .title('Blog Posts')
              .schemaType('post')
              .child(S.documentTypeList('post').title('Blog Posts')),
          ]);
      },
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});
