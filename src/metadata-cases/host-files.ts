import { cases, caseHref, normalizeBase } from './cases.ts';

// Link-preview fetchers for the target messaging platforms. Those that honour
// robots.txt must still reach every case, or the social tests would fail.
export const previewFetchers = ['Twitterbot', 'facebookexternalhit', 'LinkedInBot', 'Discordbot', 'WhatsApp'];

/**
 * robots.txt body, without the Sitemap line. Every case, comparison, source,
 * result and asset lives under /cases/, kept out of search indexes without
 * touching the fixtures' own HTML or headers; only the landing page is
 * indexable. Preview fetchers that honour robots.txt still need the cases,
 * so they get their own Allow group. src/pages/robots.txt.ts serves this and
 * appends the sitemap once Astro.site is known.
 */
export function robotsRules(base = '/') {
  const home = normalizeBase(base);
  const groups = [
    `User-agent: *\nDisallow: ${home}cases/`,
    `${previewFetchers.map(agent => `User-agent: ${agent}`).join('\n')}\nAllow: /`,
  ];
  return `${groups.join('\n\n')}\n`;
}

// Host-specific files for the research site, not defaults for the future starter.
export function hostFiles(base = '/') {
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
  return {
    headers: `${headers.join('\n\n')}\n`,
    redirects: `${redirects.join('\n')}\n`,
  };
}
