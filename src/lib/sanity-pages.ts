import { urlFor } from './sanity';
import { getSanityConfig } from './sanity-config';

const SANITY_API = 'https://{projectId}.api.sanity.io/v2024-01-01/data/query/{dataset}';

async function fetchFromSanity<T>(projectId: string, dataset: string, query: string, params?: Record<string, string>): Promise<T> {
  let url = SANITY_API.replace('{projectId}', projectId).replace('{dataset}', dataset) +
    `?query=${encodeURIComponent(query)}`;
  if (params) {
    for (const [k, v] of Object.entries(params)) {
      url += `&$${k}=${encodeURIComponent(JSON.stringify(v))}`;
    }
  }
  const res = await fetch(url);
  const json = await res.json();
  return json.result;
}

export async function getSiteSettings() {
  const { projectId, dataset, hasSanity } = getSanityConfig();
  if (!hasSanity) return null;
  try {
    return await fetchFromSanity<any>(
      projectId,
      dataset,
      `*[_type == "siteSettings"][0]{ logo, favicon }`
    );
  } catch {
    return null;
  }
}

export async function getHomePage() {
  const { projectId, dataset, hasSanity } = getSanityConfig();
  if (!hasSanity) return null;
  try {
    return await fetchFromSanity<any>(
      projectId,
      dataset,
      `*[_type == "homePage"][0]{
        heroHeadline, heroSubtitle, heroDescription, heroImage,
        ctaPrimaryLabel, ctaPrimaryHref, ctaSecondaryLabel, ctaSecondaryHref,
        featuredWorkTitle, featuredWorkDescription, featuredWorkLinkLabel,
        awardsTitle, awardsDescription, awardsLinkLabel,
        leadershipTitle, leadershipDescription, leadershipLinkLabel,
        blogTitle, blogDescription, blogEmptyMessage,
        contactTitle, contactDescription, contactButtonLabel, contactEmail
      }`
    );
  } catch {
    return null;
  }
}

export async function getAboutPage() {
  const { projectId, dataset, hasSanity } = getSanityConfig();
  if (!hasSanity) return null;
  try {
    return await fetchFromSanity<any>(
      projectId,
      dataset,
      `*[_type == "aboutPage"][0]{
        title, subtitle, photo, bio,
        experience, whatIDoTitle, whatIDo,
        contactTitle, contactDescription, contactButtonLabel, contactEmail
      }`
    );
  } catch {
    return null;
  }
}

export async function getLeadershipPage() {
  const { projectId, dataset, hasSanity } = getSanityConfig();
  if (!hasSanity) return null;
  try {
    return await fetchFromSanity<any>(
      projectId,
      dataset,
      `*[_type == "leadershipPage"][0]{ title, description, principles }`
    );
  } catch {
    return null;
  }
}

export async function getAwardsPage() {
  const { projectId, dataset, hasSanity } = getSanityConfig();
  if (!hasSanity) return null;
  try {
    return await fetchFromSanity<any>(
      projectId,
      dataset,
      `*[_type == "awardsPage"][0]{ title, description, awards }`
    );
  } catch {
    return null;
  }
}

export type CaseStudyFromSanity = {
  slug: string;
  title: string;
  company: string;
  outcome: string;
  role: string;
  teamSize?: string;
  problem?: string;
  impactCategories?: string[];
  featured: boolean;
  coverImage?: { asset: { _ref: string } };
};

export async function getCaseStudiesFromSanity(): Promise<CaseStudyFromSanity[]> {
  const { projectId, dataset, hasSanity } = getSanityConfig();
  if (!hasSanity) return [];
  try {
    const result = await fetchFromSanity<any[]>(
      projectId,
      dataset,
      `*[_type == "caseStudy" && defined(slug.current)] | order(title asc){
        "slug": slug.current,
        title,
        company,
        outcome,
        role,
        teamSize,
        problem,
        impactCategories,
        featured,
        coverImage
      }`
    );
    return result ?? [];
  } catch {
    return [];
  }
}

export async function getCaseStudyBySlugFromSanity(slug: string) {
  const { projectId, dataset, hasSanity } = getSanityConfig();
  if (!hasSanity) return null;
  try {
    return await fetchFromSanity<any>(
      projectId,
      dataset,
      `*[_type == "caseStudy" && slug.current == $slug][0]{ title, company, outcome, role, problem, impactCategories, coverImage, body }`,
      { slug }
    );
  } catch {
    return null;
  }
}

export function imageUrlFor(source: { _ref?: string; asset?: { _ref?: string } } | undefined): string {
  if (!source) return '';
  const ref = source._ref ?? source.asset?._ref;
  if (!ref) return '';
  // Pass full image object when available (preserves crop/hotspot); otherwise pass ref
  const imageSource = source.asset ? source : { _ref: ref };
  return urlFor(imageSource as Parameters<typeof urlFor>[0]);
}
