/**
 * Choose URLs for this research deployment, independently of Astro's dev/prod mode.
 * @param {Record<string, string | undefined>} env
 * @returns {string | undefined}
 */
export function buildOrigin(env) {
  const key = env['CASE_ORIGIN']?.trim() ? 'CASE_ORIGIN' : 'CF_PAGES_URL';
  const value = env[key]?.trim();
  if (!value) return undefined;
  let url;
  try { url = new URL(value); }
  catch { throw new Error(`${key} must be an absolute HTTP(S) origin, such as https://project.pages.dev`); }
  if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password || url.pathname !== '/' || url.search || url.hash) {
    throw new Error(`${key} must contain only an HTTP(S) origin; configure Astro base separately`);
  }
  return url.origin;
}
