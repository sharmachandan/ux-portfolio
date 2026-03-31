import { createImageUrlBuilder } from '@sanity/image-url';
import { getSanityConfig } from './sanity-config';

// Use explicit projectId/dataset so image URLs work in Astro build (sanity:client can have wrong config)
function getBuilder() {
  const { projectId, dataset } = getSanityConfig();
  return createImageUrlBuilder({ projectId, dataset });
}

export function urlFor(
  source:
    | { _ref?: string; _id?: string }
    | { asset?: { _ref?: string }; _type?: string }
    | undefined,
  options?: { width?: number; height?: number }
) {
  if (!source) return '';
  const { projectId } = getSanityConfig();
  if (!projectId || projectId === 'placeholder') return '';
  let builder = getBuilder().image(source as { _ref: string });
  if (options?.width) builder = builder.width(options.width);
  if (options?.height) builder = builder.height(options.height);
  return builder.url();
}
