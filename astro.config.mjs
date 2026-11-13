// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { buildEnvironment, writeText } from './src/metadata-cases/node-io.mjs';
import { buildOrigin } from './src/metadata-cases/build-origin.mjs';
import { hostFiles } from './src/metadata-cases/host-files.ts';

const site = buildOrigin(buildEnvironment);
let base = '/';

export default defineConfig({
  ...(site ? { site } : {}),
  // The research endpoint captures filenames with several extensions.
  // Match those exact file URLs as well as directory-style case page URLs.
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      // Every case, comparison, source and result page is deliberately
      // broken metadata; only the landing page belongs in search indexes.
      filter: (page) => new URL(page).pathname === base,
    }),
    {
      name: 'metadata-case-host-files',
      hooks: {
        'astro:config:done': ({ config }) => { base = config.base; },
        'astro:build:done': async ({ dir }) => {
          const files = hostFiles(base);
          await writeText(new URL('_headers', dir), files.headers);
          await writeText(new URL('_redirects', dir), files.redirects);
        },
      },
    },
  ],
});
