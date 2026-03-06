import { defineCollection, z } from 'astro:content';

const caseStudiesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    company: z.string(),
    outcome: z.string(),
    role: z.string(),
    teamSize: z.string().optional(),
    impactCategories: z.array(z.enum(['Strategy', 'Team Enablement', 'Execution'])).optional(),
    featured: z.boolean().default(false),
    image: z.string().optional(),
    problem: z.string().optional(),
  }),
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    coverImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  'case-studies': caseStudiesCollection,
  blog: blogCollection,
};
