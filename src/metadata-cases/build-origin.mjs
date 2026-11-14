// Pages sets CF_PAGES_URL to each deployment's hashed *.pages.dev host, so a
// production build would otherwise advertise it in canonical and og:url values.
export const PRODUCTION_ORIGIN = 'https://astro-metadata-lab.cevdet.ch';
export const PRODUCTION_BRANCH = 'main';

/**
 * Choose URLs for this research deployment, independently of Astro's dev/prod mode.
 * CASE_ORIGIN wins. Cloudflare preview deployments keep their own CF_PAGES_URL so
 * social clients fetch that preview's fixtures and images. Every other build,
 * including local ones, uses the custom domain.
 * @param {Record<string, string | undefined>} env
 * @returns {string}
 */
export function buildOrigin(env) {
  const explicit = env['CASE_ORIGIN']?.trim();
  if (explicit) return parseOrigin('CASE_ORIGIN', explicit);
  const preview = env['CF_PAGES_BRANCH'] !== PRODUCTION_BRANCH ? env['CF_PAGES_URL']?.trim() : undefined;
  if (preview) return parseOrigin('CF_PAGES_URL', preview);
  return PRODUCTION_ORIGIN;
}

/**
 * @param {string} key
 * @param {string} value
 */
function parseOrigin(key, value) {
  let url;
  try { url = new URL(value); }
  catch { throw new Error(`${key} must be an absolute HTTP(S) origin, such as https://project.pages.dev`); }
  if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password || url.pathname !== '/' || url.search || url.hash) {
    throw new Error(`${key} must contain only an HTTP(S) origin; configure Astro base separately`);
  }
  return url.origin;
}
