# Astro Metadata Lab

Compare HTML metadata, social previews, favicons, native theming and related edge
cases before deciding what the first minimal Astro starter should include.

Open **[/cases/](http://localhost:4321/cases/)** on the running dev server. The
homepage preserves the existing head draft as the comparison baseline. Its
original source is backed up in
[`src/metadata-cases/original-index.astro.txt`](src/metadata-cases/original-index.astro.txt).

This repository contains the research site. The production starter and possible
i18n, blog or portfolio variants still need their agreed design. The social images
here are fixed local PNG fixtures; the automatic image generator is future work.

## Cases

Each definition has an independent page, a side-by-side comparison with the
homepage, and a plain-text HTML source. Open a page in its own tab for favicon,
initial paint and mobile viewport observations; an iframe cannot show those.

| Group | Cases | Comparisons |
| --- | ---: | --- |
| Metadata | 33 | HTML fallbacks; individual OG omissions; Twitter card fields and ordering; conflicting, empty, escaped and long text; missing, relative, SVG and multiple social images |
| Precedence | 29 | Distinct HTML A, OG B/red, Twitter C/green and body D; per-field omissions; absent/empty/broken inputs; complete block ordering; card layout |
| Canonical URLs | 7 | Omitted, relative, cross-origin and duplicate canonicals; HTML base; tracking queries |
| Icons | 20 | SVG/ICO ordering; omitted, `32x32` and `any` sizes; real multi-size ICO; PNG bytes under an ICO name; broken SVG fallback; equal PNG candidates; Apple touch icon |
| Head parsing | 7 | Charset position and UTF-8 byte boundaries; invalid head content; noscript; viewport variants |
| Theming | 7 | Absent/meta/CSS color scheme; hardcoded light colors; system colors; duplicate scheme; media-qualified theme color |
| Manifest | 4 | Disabled, enabled, relative and duplicate manifests, with online-only launch settings |
| JSON-LD | 2 | Literal script-end injection versus escaped data |
| Language | 4 | English, French, Arabic/RTL and mixed-language text |
| Indexing / HTTP | 5 | Noindex with and without an image; HTTP-only noindex; real 404; 302 redirect |
| **Total** | **118** | |

The fixtures include invalid controls to expose failure modes. They are trusted
research inputs. Do not use the raw renderer for external or user-provided HTML.

## Run and check

Use Node **24** (`.node-version`) and pnpm. The locked Astro version is 7.4.2;
its engine minimum is Node 22.23.4. The checks use Node built-ins and Astro, with
no browser-testing dependency.

```sh
pnpm install --frozen-lockfile
pnpm verify
```

`verify` runs 19 Node tests, including Astro dev route matching, builds Astro,
then checks all case/source/comparison
outputs, exact fixture HTML, asset bytes, manifest paths, host rules and absence
of a client JS bundle. A production build does not replace a TypeScript checker,
a browser accessibility review or live client testing.

For development, follow `AGENTS.md`:

```sh
pnpm astro dev --background
pnpm astro dev status
pnpm astro dev logs
pnpm astro dev stop
```

Keep the existing server running when one is already available.

To repeat the artifact check under a mount point:

```sh
pnpm astro build --base /project --outDir /tmp/astro-case-subpath
pnpm verify:build --out-dir /tmp/astro-case-subpath --base /project
```

The host must mount that output at `/project/`. Cloudflare Pages instructions below
use the default `/` base.

## Cloudflare Pages through GitHub

After pushing this source to GitHub, use the Cloudflare dashboard to create a **Pages** project and connect that repository. Choose:

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
2. Cloudflare's `CF_PAGES_URL`, which identifies the current deployment.
3. Astro's local default when neither exists.

For a custom domain or stable production alias, set `CASE_ORIGIN` in the
**production** environment. Leave it unset in previews to test each preview's own
origin. Paths belong in Astro's `base`, not in `CASE_ORIGIN`. Cloudflare documents
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
production deployment URL when isolating indexing-header behavior. A private
GitHub repository does not make the resulting website private; social clients
need to reach the published URLs without authentication.

## Test on actual clients

Follow [`src/metadata-cases/manual-tests.md`](src/metadata-cases/manual-tests.md)
for the browser/mobile and social-DM protocol, HTTP checks and evidence format.
The same guide is published at `/cases/testing/`, linked from the catalogue, with
clickable cases for the first round. Start with one available phone and five
precedence cases per messaging app before expanding the matrix.

[`src/metadata-cases/results/`](src/metadata-cases/results/README.md) contains a
result record for each of the 118 fixtures, a shared test-run registry and the
reported HTTP probes. The catalogue and comparison views link to each case's
Results page at `/cases/results/`. Report the browser/app and device once, then
send case IDs and observations; we can fill the tables without editing the raw
fixtures. Records separate 44 browser-observation cases, 84 social-relevant cases
and six HTTP controls, with overlap where appropriate. Start with browser icons
and theming, then move to messaging previews.
The shared [reporting shortcuts](src/metadata-cases/results/reporting.md) define
visual icon labels and copyable formats for all groups. The hosted guides link
to them under `#reporting-shortcuts`.

The precedence group uses different values in each source: HTML title/description
end in A, OG values in B with a red image, and Twitter values in C with a green
image. Body text uses D so content scraping is distinguishable from metadata
selection. Test title, description, image and card layout separately; one client
may combine sources. No actual messaging results have been recorded yet. New
observations go into the result tables; the older browser/social JSON files
remain initial snapshots.

Recorded reports: blue tab icons in Brave and Firefox for both
`ico32-svg` and `svg-ico32`. Browser versions and operating systems were not
recorded. That observation does not settle other icon combinations or mobile
behavior. The catalogue displays these reports from
[`browser-observations.json`](src/metadata-cases/browser-observations.json).

The user-reported production route probe on 2026-10-24 confirmed the explicit-OG
page, exact `.txt` source, SVG, PNG and manifest return 200 with the appropriate
Content-Types, and the redirect returns 302 to the reference page. The two
nonexistent source URL variants return 404. An earlier 404 at the exact source
URL was not reproduced; its cause remains unknown. Run
`bash scripts/probe-deployment.sh` to repeat these GET checks without following
redirects; an optional first argument selects another origin.

The full hosted HTTP matrix, mobile browser checks and previews in LinkedIn,
Discord, X, WhatsApp, Instagram and Facebook direct messages remain unverified. The coding
sandbox cannot reach the user-run localhost server or run the required browser UI.
A clean dependency install also remains unverified here because npm DNS is blocked;
the build and output checks have run with the existing installed dependencies.

Keep the explicit-OG case as the reference until client results justify removing
fields. Matching text in HTML and OG metadata does not establish that a client
will use the HTML value as a fallback. The [Open Graph protocol](https://ogp.me/)
defines its own required fields.

## Edit and preserve

- Edit [`src/metadata-cases/cases.json`](src/metadata-cases/cases.json) for case options.
  Keep group/ID pairs unique and update the expected count in `cases.test.mjs`
  when adding definitions.
- Put controlled assets in `src/metadata-cases/assets/`; the static endpoint emits
  them under `/cases/assets/`. Edit `cases.ts` only when a new fixture option is needed.
- Routes live in `src/pages/cases/`. `ui.css` styles the catalogue and comparisons;
  raw cases keep their own controlled styles.
- The existing scaffold `public/favicon.ico` contains PNG bytes. It remains the
  root-discovery control. The explicit ICO fixtures contain real ICO directories.
- `.gitignore` excludes build output, dependencies, environment files, and the
  local `research/` and `deploy/` archives. Those archives remain on disk; a fresh
  clone needs only the source and lockfile. No personal repositories or branding
  pipeline are required.

There is no service worker or offline support. See
[`design-notes.md`](src/metadata-cases/design-notes.md) for the current design
direction and the work that these experiments do not yet verify.
