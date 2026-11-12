// @ts-check
import { defineConfig } from 'astro/config';
import { buildEnvironment, writeText } from './src/metadata-cases/node-io.mjs';
import { buildOrigin } from './src/metadata-cases/build-origin.mjs';
import { hostFiles } from './src/metadata-cases/host-files.ts';

const site = buildOrigin(buildEnvironment);
let base = '/';
/** @type {string | undefined} */
let origin;

export default defineConfig({
  ...(site ? { site } : {}),
  // The research endpoint captures filenames with several extensions.
  // Match those exact file URLs as well as directory-style case page URLs.
  trailingSlash: 'ignore',
  integrations: [{
    name: 'metadata-case-host-files',
    hooks: {
      'astro:config:done': ({ config }) => { base = config.base; origin = config.site; },
      'astro:build:done': async ({ dir }) => {
        const files = hostFiles(base, origin);
        await writeText(new URL('_headers', dir), files.headers);
        await writeText(new URL('_redirects', dir), files.redirects);
        await writeText(new URL('robots.txt', dir), files.robots);
        if (files.sitemap) await writeText(new URL('sitemap.xml', dir), files.sitemap);
      },
    },
  }],
});
