import { getCollection } from 'astro:content';
import { getCaseStudiesFromSanity, imageUrlFor } from './sanity-pages';

export type CaseStudySummary = {
  slug: string;
  title: string;
  company: string;
  outcome: string;
  role: string;
  image?: string;
  problem?: string;
  impactCategories?: string[];
  featured: boolean;
  sortOrder?: number;
  template?: string;
  source: 'content' | 'sanity';
};

export async function getCaseStudySummaries(): Promise<CaseStudySummary[]> {
  const summaries = new Map<string, CaseStudySummary>();

  const contentStudies = await getCollection('case-studies');
  for (const study of contentStudies) {
    summaries.set(study.slug, {
      slug: study.slug,
      title: study.data.title,
      company: study.data.company,
      outcome: study.data.outcome,
      role: study.data.role,
      image: study.data.image,
      problem: study.data.problem,
      impactCategories: study.data.impactCategories,
      featured: study.data.featured ?? false,
      sortOrder: study.data.sortOrder,
      template: study.data.template,
      source: 'content',
    });
  }

  const sanityStudies = await getCaseStudiesFromSanity();
  for (const study of sanityStudies) {
    if (summaries.has(study.slug)) continue;

    summaries.set(study.slug, {
      slug: study.slug,
      title: study.title,
      company: study.company,
      outcome: study.outcome,
      role: study.role,
      image: study.coverImage ? imageUrlFor(study.coverImage) : undefined,
      problem: study.problem,
      impactCategories: study.impactCategories,
      featured: study.featured ?? false,
      source: 'sanity',
    });
  }

  return Array.from(summaries.values());
}
