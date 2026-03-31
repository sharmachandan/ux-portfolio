/**
 * Shared Sanity config for API fetch and image URL building.
 * Uses import.meta.env so it works in Astro/Vite build.
 */
export function getSanityConfig() {
  const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
  const dataset = import.meta.env.PUBLIC_SANITY_DATASET ?? 'production';
  const hasSanity = typeof projectId === 'string' && projectId.length > 0 && projectId !== 'placeholder';
  return { projectId: projectId ?? '', dataset, hasSanity };
}
