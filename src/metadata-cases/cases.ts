// Research fixtures, not the starter's proposed metadata API.
import definitions from './cases.json' with { type: 'json' };

interface Icon { name: string; extra: string }
interface Options {
  og?: boolean | 'image-only';
  omit?: string[];
  description?: string | null;
  title?: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  twitterFirst?: boolean;
  bodyTitle?: string;
  bodyDescription?: string;
  beforeOg?: string;
  before?: string;
  extra?: string;
  card?: string | null;
  duplicateTwitter?: boolean;
  duplicateSecureImage?: boolean;
  secondImage?: boolean;
  socialImage?: string;
  relativeImage?: boolean;
  canonical?: string | null;
  canonicalAlias?: string;
  relativeCanonical?: boolean;
  sharedQuery?: string;
  icons?: Icon[];
  invalidSizes?: boolean;
  apple?: boolean;
  padding?: string;
  lateCharset?: boolean;
  viewport?: string | false;
  noscriptMetadata?: boolean;
  scheme?: string | null;
  style?: string;
  manifest?: string;
  extraManifest?: boolean;
  json?: string;
  lang?: string;
  dir?: string;
  mixedLanguage?: boolean;
  noindex?: boolean;
  headers?: Record<string, string>;
  status?: number;
  redirect?: string;
}
export interface MetadataCase { group: string; id: string; question: string; options: Options }
// JSON widens the literal "image-only" to string; these are the fixed fixtures.
export const cases = definitions as MetadataCase[];

export const normalizeBase = (base = '/') => '/' + base.split('/').filter(Boolean).join('/') + (base.split('/').some(Boolean) ? '/' : '');
export const caseHref = (c: Pick<MetadataCase, 'group' | 'id'>, base = '/') => `${normalizeBase(base)}cases/${c.group}/${c.id}/`;
export const openHref = (c: MetadataCase, base = '/') => caseHref(c, base) + (c.options.sharedQuery ?? '');
export const compareHref = (c: Pick<MetadataCase, 'group' | 'id'>, base = '/') => `${normalizeBase(base)}cases/compare/${c.group}/${c.id}/`;
export const sourceHref = (c: Pick<MetadataCase, 'group' | 'id'>, base = '/') => `${normalizeBase(base)}cases/source/${c.group}/${c.id}.txt`;
export const resultsHref = (c: Pick<MetadataCase, 'group' | 'id'>, base = '/') => `${normalizeBase(base)}cases/results/${c.group}/${c.id}/`;
export const assetHref = (name: string, base = '/') => `${normalizeBase(base)}cases/assets/${name}`;

const text = (value: string) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const attr = (value: string) => text(value).replaceAll('"', '&quot;');
const meta = (key: string, value: string | null, property = false) => value === null ? '' : `<meta ${property ? 'property' : 'name'}="${key}" content="${attr(value)}">`;
const link = (rel: string, href: string, extra = '') => `<link rel="${rel}" href="${attr(href)}"${extra}>`;

export function renderCase(c: MetadataCase, origin: string, base = '/') {
  const o = c.options;
  const path = caseHref(c, base), url = new URL(path, origin).href;
  const canonical = 'canonical' in o ? o.canonical! : o.canonicalAlias ? new URL(caseHref({ group: 'canonical', id: o.canonicalAlias }, base), origin).href : o.relativeCanonical ? './' : url;
  const title = o.title ?? `HTML title — ${c.id}`;
  const description = 'description' in o ? o.description! : `HTML description — ${c.id}`;
  const imagePath = assetHref(o.socialImage ?? 'social-red.png', base);
  const image = o.relativeImage ? imagePath : new URL(imagePath, origin).href;
  const fields: Record<string, string | null> = {
    'og:type': 'website', 'og:url': url, 'og:title': o.ogTitle ?? title,
    'og:description': o.ogDescription ?? description, 'og:image': image, 'og:image:alt': 'Red research image',
    'og:image:width': '1200', 'og:image:height': '630',
  };
  // Keep the serialized order, including deliberately invalid controls.
  let head = o.lateCharset ? '' : '<meta charset="utf-8">';
  if (o.padding) head += `<!--${o.padding}-->`;
  if (o.lateCharset) head += '<meta charset="utf-8">';
  head += o.before ?? '';
  if (o.viewport !== false) head += meta('viewport', typeof o.viewport === 'string' ? o.viewport : 'width=device-width');
  if (o.scheme !== null) head += meta('color-scheme', o.scheme ?? 'light dark');
  const ordinary = `<title>${text(title)}</title>${meta('description', description)}${canonical === null ? '' : link('canonical', canonical)}`;
  head += o.noscriptMetadata ? `<noscript>${ordinary}</noscript>` : ordinary;
  if (o.noindex) head += meta('robots', 'noindex');
  head += o.beforeOg ?? '';
  let og = '';
  if (o.og !== false) for (const [key, value] of Object.entries(fields)) {
    if (o.og === 'image-only' && key !== 'og:image') continue;
    if (!o.omit?.includes(key)) og += meta(key, value, true);
  }
  if (o.duplicateSecureImage) og += meta('og:image:secure_url', image, true);
  if (o.secondImage) og += meta('og:image', new URL(assetHref('social-green.png', base), origin).href, true) + meta('og:image:alt', 'Green second image', true);
  const card = 'card' in o ? o.card! : 'summary_large_image';
  const twitterImage = o.twitterImage ? new URL(assetHref(o.twitterImage, base), origin).href : o.twitterImage;
  const twitterFields: Record<string, string | null | undefined> = {
    'twitter:card': o.og !== false || 'card' in o ? card : null,
    'twitter:title': o.twitterTitle ?? (o.duplicateTwitter ? title : undefined),
    'twitter:description': o.twitterDescription ?? (o.duplicateTwitter ? description : undefined),
    'twitter:image': twitterImage ?? (o.duplicateTwitter ? image : undefined),
  };
  let twitter = '';
  for (const [key, value] of Object.entries(twitterFields)) {
    if (value !== undefined && !o.omit?.includes(key)) twitter += meta(key, value);
  }
  head += o.twitterFirst ? twitter + og : og + twitter;
  const icons = o.icons ?? [{ name: 'icon-red.ico', extra: ' sizes="32x32"' }, { name: 'icon-blue.svg', extra: ' type="image/svg+xml"' }];
  for (const i of icons) head += link('icon', assetHref(i.name, base), i.extra);
  if (o.apple) head += link('apple-touch-icon', assetHref('apple-touch-icon.png', base));
  if (o.manifest) head += link('manifest', o.manifest.startsWith('../') ? o.manifest : assetHref(o.manifest, base));
  if (o.extraManifest) head += link('manifest', assetHref('second.webmanifest', base));
  if (o.json) head += `<script type="application/ld+json">${o.json}</script>`;
  head += o.extra ?? '';
  if (o.style) head += `<style>${o.style}</style>`;
  const back = new URL(`${normalizeBase(base)}cases/`, origin).href;
  const body = `<main id="main"><h1>${text(o.bodyTitle ?? title)}</h1><p>${text(o.bodyDescription ?? description ?? '')}</p><p>${text(c.question)}</p><a href="#target">Keyboard target</a><p id="target">Target</p><label>Native input <input value="System colors"></label><button>Native button</button>${o.mixedLanguage ? '<p lang="fr">Texte original en français.</p>' : ''}<p><a href="${attr(back)}">All cases</a></p></main>`;
  const html = `<!doctype html><html lang="${o.lang ?? 'en'}"${o.dir ? ` dir="${o.dir}"` : ''}><head>${head}</head><body>${body}</body></html>`;
  return { html, head, title, description, url, path, image, canonical, status: o.status ?? 200, headers: { 'Content-Type': 'text/html; charset=utf-8', ...o.headers } };
}
