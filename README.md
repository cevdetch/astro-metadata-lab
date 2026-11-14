# Astro Metadata Lab

A set of static test pages that each change one thing in an HTML head: a title, an
Open Graph or Twitter tag, a favicon link, a canonical URL, a colour-scheme
declaration or an HTTP response. Opening them in real browsers, sharing them in
messaging apps and requesting them from a real host shows what those clients do
with the markup. The results feed the metadata defaults of a minimal Astro starter.

The site is live at <https://astro-metadata-lab.cevdet.ch/>. The landing page
summarises the findings; every case has its own page, a comparison view, its
fixture HTML as plain text and a result record.

**Status: ongoing.** The first round of observations is recorded, for the
browsers and messaging apps that were available, and the coverage below is
computed from the result records. X and Facebook Messenger have not been tested.

## Coverage

<!-- coverage:start -->
71 of 121 cases have at least one recorded observation; 50 have none yet.
The run registry holds 23 browser, 51 link-preview and 4 HTTP runs, recorded on 2026-10-23 and 2026-10-24.

- Browsers: Brave, Brave Origin, Firefox, Tor Browser Alpha and Vanadium.
- Link previews: Discord, Instagram, LinkedIn, LinkedIn Post Inspector, Molly, Signal and WhatsApp.
- HTTP: curl.

| Group | Cases | Observed | Clients with observations |
| --- | ---: | ---: | --- |
| metadata | 33 | 10 | Discord, Instagram, LinkedIn Post Inspector, Molly, WhatsApp, curl |
| precedence | 29 | 11 | Discord, Instagram, LinkedIn, LinkedIn Post Inspector, Molly, WhatsApp |
| canonical | 7 | 3 | Discord, Instagram, LinkedIn Post Inspector, Molly, WhatsApp |
| icons | 20 | 20 | Brave, Brave Origin, Firefox, Tor Browser Alpha, Vanadium |
| head | 7 | 7 | Brave Origin, Firefox, Tor Browser Alpha, Vanadium |
| theming | 10 | 10 | Brave Origin, Firefox, Tor Browser Alpha, Vanadium, Discord, Instagram, Signal, WhatsApp |
| manifest | 4 | 0 | — |
| json-ld | 2 | 2 | Firefox |
| language | 4 | 4 | Firefox |
| indexing | 5 | 4 | Discord, Instagram, LinkedIn Post Inspector, Molly, WhatsApp, curl |
| **Total** | **121** | **71** | |

Cases with no recorded observation yet:

- metadata: `html-only`, `html-plus-og-image`, `no-og-title`, `no-og-description`, `no-description`, `no-image`, `empty-og-title`, `whitespace-og-title`, `conflicting-titles`, `duplicate-og-title`, `twitter-before-og`, `twitter-after-og`, `duplicate-twitter-values`, `no-twitter-card`, `summary-card`, `image-without-alt`, `image-alt-twitter`, `image-secure-url-duplicate`, `image-two-candidates`, `image-fallback-candidate`, `title-with-site-suffix`, `og-locale-fr`, `redundant-index-follow`
- precedence: `no-twitter-title`, `no-twitter-description`, `no-twitter-image`, `no-og-title`, `no-og-description`, `no-og-image`, `no-social-title`, `no-social-description`, `no-social-image`, `twitter-no-title`, `twitter-no-description`, `twitter-no-image`, `empty-twitter-title`, `empty-twitter-description`, `empty-twitter-image`, `missing-twitter-image`, `missing-og-image`, `empty-og-description`
- canonical: `canonical-duplicate`, `base-element`, `tracking-query`, `canonical-clean`
- manifest: `manifest-disabled`, `manifest-enabled`, `manifest-relative`, `manifest-duplicate`
- indexing: `http-noindex`
<!-- coverage:end -->

`pnpm coverage` rewrites this block from the records, and `pnpm verify` fails
when it is out of date.

## Cases

| Group | Comparisons |
| --- | --- |
| Metadata | HTML fallbacks; individual OG omissions; Twitter card fields and ordering; conflicting, empty, escaped and long text; missing, relative, SVG and multiple social images |
| Precedence | Distinct HTML A, OG B/red, Twitter C/green and body D; per-field omissions; absent/empty/broken inputs; complete block ordering; card layout |
| Canonical URLs | Omitted, relative, cross-origin and duplicate canonicals; HTML base; tracking queries |
| Icons | SVG/ICO ordering; omitted, `32x32` and `any` sizes; real multi-size ICO; PNG bytes under an ICO name; broken SVG fallback; equal PNG candidates; Apple touch icon |
| Head parsing | Charset position and UTF-8 byte boundaries; invalid head content; noscript; viewport variants |
| Theming | Absent/meta/CSS color scheme; reversed order and dark-only declarations; hardcoded light colors; system colors; duplicate tags in both orders; media-qualified theme color |
| Manifest | Disabled, enabled, relative and duplicate manifests, with online-only launch settings |
| JSON-LD | Literal script-end injection versus escaped data |
| Language | English, French, Arabic/RTL and mixed-language text |
| Indexing / HTTP | Noindex with and without an image; HTTP-only noindex; real 404; 302 redirect |

Each case is an independent page. Open it in its own tab for favicon, first-paint
and mobile viewport observations; the comparison view's iframe cannot show those.
The precedence cases give each source a different marker, so a preview shows
where each field came from: HTML text ends in A, Open Graph in B with a red image,
Twitter in C with a green image, and body text in D.

The fixtures include invalid controls to expose failure modes. They are trusted
research inputs. Do not use the raw renderer for external or user-provided HTML,
and do not copy the negative controls into a real site.

## How to read the results

- [`src/metadata-cases/results/cases/`](src/metadata-cases/results/index.md) holds
  one Markdown record per case, published at `/cases/results/<group>/<id>/`.
  Each row cites a run ID.
- [`results/sessions.md`](src/metadata-cases/results/sessions.md) is the run
  registry. `B…` runs are browsers, `S…` runs are link previews and `H…` runs are
  HTTP checks. Each run records the date, the client and version, the device and
  the conditions; details that were not recorded stay `unknown`.
- Rows whose run is `—` are a checklist of the platforms a case targets. A
  `not tested` status on such a row does not override a recorded run for the same
  platform further down the table. The coverage above counts a case once any row
  cites a run with a status other than `not tested`.
- `none` means checked and not visible, `unknown` means inconclusive, and a blank
  cell means nothing was reported. A rerun that disagrees is added beside the
  earlier row rather than replacing it.
- [`results/README.md`](src/metadata-cases/results/README.md) summarises each
  batch, and [`results/hosting.md`](src/metadata-cases/results/hosting.md) and
  [`results/http/`](src/metadata-cases/results/http/) hold the HTTP evidence.
- [`design-notes.md`](src/metadata-cases/design-notes.md) separates the starter
  defaults chosen from these results from documented platform contracts, and
  lists what the experiments do not verify.

Each observation comes from one version of one client on one device, so the
results are observations rather than rules.

## Run it

Use Node **24** (`.node-version`) and pnpm. The locked Astro version is 7.4.2.

```sh
pnpm install --frozen-lockfile
pnpm verify
```

`pnpm verify` runs the Node tests (including a check of Astro's dev route
matching), checks the README coverage block, builds the site, then checks every
case, source and comparison output, the exact fixture HTML, asset bytes, manifest
paths, host rules and the absence of a client JS bundle, and finally lints the
lab's own pages with [deadhead](https://deadhead.cevdet.ch/). A production build
does not replace a TypeScript checker, a browser accessibility review or live
client testing.

For development, run the dev server in the background:

```sh
pnpm astro dev --background
pnpm astro dev status
pnpm astro dev logs
pnpm astro dev stop
```

To repeat the artifact check under a mount point:

```sh
pnpm astro build --base /project --outDir /tmp/astro-case-subpath
pnpm verify:build --out-dir /tmp/astro-case-subpath --base /project
```

The host must mount that output at `/project/`. The Cloudflare Pages instructions
below use the default `/` base.

`scripts/probe-deployment.sh` repeats the hosted GET checks without following
redirects; an optional first argument selects another origin.

## Deploy to Cloudflare Pages

In the Cloudflare dashboard, create a **Pages** project connected to this
repository and choose:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Root directory | Repository root |
| Build command | `pnpm verify` |
| Build output directory | `dist` |
| Node | `24`, from `.node-version` |
| `PNPM_VERSION` environment variable | `10.11.1`, the documented Pages default; pin it for repeatable builds |

Use the static build. The project needs no adapter, Wrangler, Pages Functions or
deployment credentials. See Cloudflare's [Astro Pages guide](https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/)
and [build image configuration](https://developers.cloudflare.com/pages/configuration/build-image/).

`astro.config.mjs` selects absolute metadata URLs in this order:

1. `CASE_ORIGIN`, if you set it to an HTTP(S) origin such as `https://example.com`.
2. Cloudflare's `CF_PAGES_URL` on preview deployments (any branch other than
   `main`), so social clients fetch that preview's own fixtures and images.
3. The custom domain `https://astro-metadata-lab.cevdet.ch` everywhere else,
   including production and local builds.

Leave `CASE_ORIGIN` unset in previews to test each preview's own origin. Paths
belong in Astro's `base`, not in `CASE_ORIGIN`. Cloudflare documents
`CF_PAGES_URL` in its [build configuration](https://developers.cloudflare.com/pages/configuration/build-configuration/).

The build writes `_headers` for the HTTP-only noindex control and `_redirects`
for the 302 control. It also writes `404.html` and leaves the 404 case URL absent,
so Pages can return its missing-page response. Astro's static redirect HTML stays
as a fallback for generic static hosts. Check the actual hosted status and headers
after deployment; an artifact check cannot establish how the host served them.
See [Pages headers](https://developers.cloudflare.com/pages/configuration/headers/),
[redirects](https://developers.cloudflare.com/pages/configuration/redirects/), and
[404 behavior](https://developers.cloudflare.com/pages/configuration/serving-pages/).

Pages adds `X-Robots-Tag: noindex` to preview deployment responses. Use the
production deployment URL when isolating indexing-header behavior. Social
clients need to reach the published URLs without authentication.

## Add an observation

1. Register the run once in [`results/sessions.md`](src/metadata-cases/results/sessions.md)
   with the next free ID, the date, the client and version, the device and the
   conditions. Leave unknown values as `unknown`.
2. Add a row citing that run to each case record in
   `src/metadata-cases/results/cases/<group>/<id>.md`. Keep title, description,
   image and layout in separate cells, and keep earlier rows when a rerun differs.
   The [reporting shortcuts](src/metadata-cases/results/reporting.md) define the
   labels and formats for each group.
3. For hand entry in bulk, fill the
   [browser](src/metadata-cases/results/browser-test-table.md),
   [link-preview](src/metadata-cases/results/link-preview-test-table.md) or
   [HTTP](src/metadata-cases/results/http-test-table.md) worksheet, then copy the
   rows into the case records.
4. Run `pnpm coverage` to refresh the README block, then `pnpm verify`.

[`manual-tests.md`](src/metadata-cases/manual-tests.md), published at
`/cases/testing/`, describes the browser, mobile, messaging and HTTP protocols.

To add a case, edit [`cases.json`](src/metadata-cases/cases.json) and add its
result record. Keep group/ID pairs unique and update the expected count in
`cases.test.mjs`. Put controlled assets in `src/metadata-cases/assets/`; the
static endpoint emits them under `/cases/assets/`. Edit `cases.ts` only when a new
fixture option is needed. The scaffold `public/favicon.ico` contains PNG bytes on
purpose: it is the root-discovery control, while the explicit ICO fixtures contain
real ICO directories. The pre-lab head draft that the `/cases/current/` baseline
reproduces is kept in
[`original-index.astro.txt`](src/metadata-cases/original-index.astro.txt).

## Licence

The research data and write-ups are licensed under
[CC BY 4.0](LICENSE-DATA):

- `src/metadata-cases/results/`: the result records, run registry, worksheets,
  hosting notes and captured HTTP headers;
- `src/metadata-cases/browser-observations.json`;
- `src/metadata-cases/design-notes.md` and `src/metadata-cases/manual-tests.md`.

Everything else, including the case definitions, fixtures and assets, the
renderer and pages under `src/`, `scripts/` and the configuration, is licensed
under the [MIT License](LICENSE).
