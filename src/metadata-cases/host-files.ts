import { cases, caseHref, normalizeBase } from './cases.ts';

// Link-preview fetchers for the target messaging platforms. Those that honour
// robots.txt must still reach every case, or the social tests would fail.
export const previewFetchers = ['Twitterbot', 'facebookexternalhit', 'LinkedInBot', 'Discordbot', 'WhatsApp'];

// Host-specific files for the research site, not defaults for the future starter.
export function hostFiles(base = '/', origin?: string) {
  const headers: string[] = [];
  const redirects: string[] = [];
  for (const definition of cases) {
    const path = caseHref(definition, base);
    const options = definition.options;
    if (options.headers) {
      const values = Object.entries(options.headers).map(([key, value]) => `  ${key}: ${value}`).join('\n');
      // Cover both the friendly URL and direct-file requests.
      for (const url of [path, path.slice(0, -1), `${path}index.html`]) headers.push(`${url}\n${values}`);
    }
    if (options.redirect) {
      const [group, id] = options.redirect.split('/');
      const target = caseHref({ group: group!, id: id! }, base);
      for (const url of [path, path.slice(0, -1), `${path}index.html`]) redirects.push(`${url} ${target} ${options.status ?? 302}`);
    }
  }
  // Every case, comparison, source, result and asset lives under /cases/. A
  // robots.txt rule keeps them out of search indexes without touching the
  // fixtures' own HTML or headers. Only the landing page is indexable.
  const home = normalizeBase(base);
  const robots = [
    'User-agent: *',
    `Disallow: ${home}cases/`,
    '',
    ...previewFetchers.map(agent => `User-agent: ${agent}`),
    'Allow: /',
    ...(origin ? ['', `Sitemap: ${new URL(`${home}sitemap.xml`, origin).href}`] : []),
  ];
  const sitemap = origin && [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    `  <url><loc>${new URL(home, origin).href}</loc></url>`,
    '</urlset>',
  ];
  return {
    headers: `${headers.join('\n\n')}\n`,
    redirects: `${redirects.join('\n')}\n`,
    robots: `${robots.join('\n')}\n`,
    sitemap: sitemap ? `${sitemap.join('\n')}\n` : undefined,
  };
}
