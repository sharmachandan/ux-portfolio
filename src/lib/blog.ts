import { getCollection } from 'astro:content';
import { urlFor } from './sanity';

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: Date;
  coverImage?: string;
};

type SanityPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  coverImage?: { asset: { _ref: string } };
};

const SANITY_API = 'https://{projectId}.api.sanity.io/v2024-01-01/data/query/{dataset}';

async function fetchFromSanityAPI(projectId: string, dataset: string): Promise<SanityPost[]> {
  const query = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc){
    "slug": slug.current,
    title,
    excerpt,
    publishedAt,
    coverImage
  }`;
  const url = SANITY_API.replace('{projectId}', projectId).replace('{dataset}', dataset) +
    `?query=${encodeURIComponent(query)}`;
  const res = await fetch(url);
  const json = await res.json();
  return json.result ?? [];
}

export async function getSanityPostSlugs(projectId: string, dataset: string): Promise<string[]> {
  const posts = await fetchFromSanityAPI(projectId, dataset);
  return posts.map((p) => p.slug);
}

export async function fetchSanityPostBySlug(
  projectId: string,
  dataset: string,
  slug: string
): Promise<{ title: string; excerpt: string; publishedAt: string; body: any[]; tags?: string[] } | null> {
  const query = `*[_type == "post" && slug.current == $slug][0]{ title, excerpt, publishedAt, body, tags }`;
  const url = SANITY_API.replace('{projectId}', projectId).replace('{dataset}', dataset) +
    `?query=${encodeURIComponent(query)}&$slug=${encodeURIComponent('"' + slug + '"')}`;
  const res = await fetch(url);
  const json = await res.json();
  return json.result;
}

export async function getBlogPosts(limit?: number): Promise<BlogPost[]> {
  const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
  const dataset = import.meta.env.PUBLIC_SANITY_DATASET ?? 'production';
  const hasSanity = projectId && projectId !== 'placeholder';
  let posts: BlogPost[] = [];

  if (hasSanity) {
    try {
      const sanityPosts = await fetchFromSanityAPI(projectId, dataset);
      posts = sanityPosts.map((p) => ({
        slug: p.slug,
        title: p.title,
        excerpt: p.excerpt,
        date: new Date(p.publishedAt),
        coverImage: p.coverImage ? urlFor(p.coverImage.asset) : undefined,
      }));
    } catch (_e) {
      // Fall through
    }
  }

  if (posts.length === 0) {
    const blogPosts = await getCollection('blog');
    posts = blogPosts
      .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
      .map((p) => ({
        slug: p.slug,
        title: p.data.title,
        excerpt: p.data.excerpt,
        date: p.data.date,
        coverImage: p.data.coverImage,
      }));
  }

  return limit ? posts.slice(0, limit) : posts;
}
