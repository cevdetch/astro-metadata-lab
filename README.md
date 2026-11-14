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
| Theming | 10 | Absent/meta/CSS color scheme; reversed order and dark-only declarations; hardcoded light colors; system colors; duplicate tags in both orders; media-qualified theme color |
| Manifest | 4 | Disabled, enabled, relative and duplicate manifests, with online-only launch settings |
| JSON-LD | 2 | Literal script-end injection versus escaped data |
| Language | 4 | English, French, Arabic/RTL and mixed-language text |
| Indexing / HTTP | 5 | Noindex with and without an image; HTTP-only noindex; real 404; 302 redirect |
| **Total** | **121** | |

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

For development, run the dev server in the background:

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

For hand entry, use the separate
[browser](src/metadata-cases/results/browser-test-table.md),
[link-preview](src/metadata-cases/results/link-preview-test-table.md), and
[HTTP](src/metadata-cases/results/http-test-table.md) matrices. They define names
once, use short row IDs and leave two spaces in empty input/result cells. Return
the filled worksheets; the detailed records can be updated from them. Each group
includes the fields to observe, suggested values and a syntax example. This is
the proposed reporting standard; examples stay outside the result cells.

The [next-deployment checklist](src/metadata-cases/results/README.md#next-deployment-and-test-batch)
lists what is already reported, what remains and how to run the next batch.

Follow [`src/metadata-cases/manual-tests.md`](src/metadata-cases/manual-tests.md)
for the browser/mobile and social-DM protocol, HTTP checks and evidence format.
The same guide is published at `/cases/testing/`, linked from the catalogue, with
clickable cases for the first round. Start with one available phone and five
precedence cases per messaging app before expanding the matrix.

[`src/metadata-cases/results/`](src/metadata-cases/results/README.md) contains a
result record for each of the 121 fixtures, a shared test-run registry and the
reported HTTP probes. The catalogue and comparison views link to each case's
Results page at `/cases/results/`. Report the browser/app and device once, then
send case IDs and observations; I can fill the tables without editing the raw
fixtures. Records separate 47 browser-observation cases, 84 social-relevant cases
and six HTTP controls, with overlap where appropriate. Start with browser icons
and theming, then move to messaging previews.
The shared [reporting shortcuts](src/metadata-cases/results/reporting.md) define
visual icon labels and copyable formats for all groups. The hosted guides link
to them under `#reporting-shortcuts`.

The precedence group uses different values in each source: HTML title/description
end in A, OG values in B with a red image, and Twitter values in C with a green
image. Body text uses D so content scraping is distinguishable from metadata
selection. Test title, description, image and card layout separately; one client
may combine sources. The registered messaging observations cover only the lack
of a visible theme-color accent change in Signal, WhatsApp, Discord and Instagram;
client versions and message views remain unknown. The first five precedence cases now have observations in S005–S009; omission
and failure controls still need separate reports.
New observations go into the result tables; the older browser/social JSON files
remain initial snapshots.

Initial historical reports: blue tab icons in Brave and Firefox for both
`ico32-svg` and `svg-ico32`. Browser versions and operating systems were not
recorded. That observation does not settle other icon combinations or mobile
behavior. The catalogue displays these reports from
[`browser-observations.json`](src/metadata-cases/browser-observations.json).

The browser worksheet now also contains icon observations for B003–B006 and the
seven original theming cases in a dark-environment batch. Tor showed light
appearance throughout that initial theming report. Tor's separate five-case
follow-up covers the new controls and reports matching native controls: the
dual-scheme lists showed light, the dark-only case showed dark, and the two
duplicate cases matched their first declaration. Brave, Firefox and Vanadium
then reported dark appearance in all five cases. In the requested light-mode
follow-up, Firefox and Vanadium reported light for both dual-scheme orders and
dark for the dark-only case. Their responsive SVG icon stayed yellow-circle with
no change reported. Exact settings were not restated; the icon behavior remains
unresolved. No matching Brave light-mode result has been reported.

In the mobile viewport report, the page without a viewport declaration showed
desktop-like small text and allowed pinch zoom. The width-only reference and
width-plus-initial-scale page looked normal. Horizontal overflow and the other
pages' pinch behavior were not separately reported. All three charset controls
then showed normal text and UTF-8 document encoding in all four browsers, with
response Content-Type `text/html; charset=utf-8`. That HTTP charset prevents
isolating HTML declaration position. Firefox and Brave then returned the expected
`document.title` on the invalid-head case, with title, description, canonical and
OG title all direct children of `body`. Other metadata and social-crawler behavior
were not established. In Firefox's noscript comparison, the tab showed the URL
with scripting enabled; with scripting disabled, the expected title appeared
and title/description/canonical were recorded directly under head. Enabled
parent locations remain unreported. The reported canonical uses the `37d5d3ff`
deployment host rather than the enabled tab label's stable production alias;
retain this for hosting review.

The Firefox language batch reported normal text in all four cases. The Arabic
page had explicit and computed RTL direction, with English text appearing on
the right. The other pages computed LTR direction without a dir attribute;
the mixed page retained the marked French passage's language. This batch did
not test assistive technology or full bidirectional-text handling.

In the Firefox JSON-LD report, the unsafe control produced a JSON SyntaxError,
an extra image and a true runtime flag. Its leading 404 is interpreted as the
image request status. The escaped control parsed successfully, retaining the
markup-like text as a string; no extra image or matching Network request was
reported, and the flag was undefined. Other browser environments remain untested.

A subsequent all-fields Console report confirmed the document at the stable
production alias but canonical, OG URL and both social image URLs at the
`37d5d3ff` deployment host. B024 preserves that output. The production-origin
change was deferred in favour of message previews on the current
deployment. Retain that metadata-host context when recording results. The
existing `CASE_ORIGIN` override remains available for a later hosting change.

The first social-preview batch covers five precedence cases in WhatsApp, Molly,
Discord, LinkedIn and Instagram. WhatsApp/Discord reported C with a green image
without OG; Molly/Instagram reported A without an image. All four reported B/red
with all fields present. Moving Twitter first changed Discord's text marker to
C while its image remained red. Each letter was confirmed to apply to both
title and description. LinkedIn returned an error for all five in its post
composer; the cause remains unknown. Every image-bearing card in that first
batch was large-image. A later Inspector run (S010) successfully extracted OG
title/description B and a proxied image despite the differing canonical host.
Its description-length warning did not prevent that preview. The expanded
Inspector batch (S011) showed titles A/B/A/B/B, images none/red/none/red/red and
no visible card descriptions, including the earlier inspection per a later
correction. The pasted metadata panel's extracted description is separate from
card visibility. The post-composer retry still failed (S012), so its cause
remains unresolved. The LinkedIn DM follow-up also showed no preview for the lab
or a deadhead.cevdet.ch control (S013). This weakens a lab-specific
hostname explanation without identifying a cause. Defer LinkedIn diagnosis and
continue with OG omission cases in the other clients.

The OG-only omission batch (S014–S017) showed no HTML title/description fallback
in Discord: no OG title produced no visible title or description, while no OG
description removed the visible description. Molly and WhatsApp reported HTML
A for the omitted text field and OG B for the retained field. A later correction
covers LinkedIn Inspector's grouped description report: it still showed none, with
A/B/B titles and red/red/no-image results. S017 records that correction.
This supports explicit OG text tags generated from shared title/description
inputs; it does not require duplicate developer configuration.

The card-layout batch (S018–S021) reported summary layout in Discord for all three
controls, with B/B text and red images. Molly, LinkedIn and Instagram retained
the reported summary_large_image appearance. The Signal label was explicitly
confirmed as Molly. Other fields and exact geometry remain unreported where
not supplied; no official Signal result is inferred from this batch.

The metadata comparison (S022–S026) reported no problems across Molly, Instagram,
WhatsApp, Discord and LinkedIn Inspector for explicit OG, no OG type, no OG URL
and no image dimensions, with fixture text and reported large-image layout.
LinkedIn's earlier explicit no-description correction remains in force. This
is a visual comparison, not proof of tag-source selection or behavior on
untested consumers.

The image batch (S027–S031) reported root-relative image success in four clients;
WhatsApp cards appeared without main images in all three cases. Instagram showed
the blue SVG, while LinkedIn/Molly/Discord did not show it as a main image.
Missing-image results differed between absence and placeholders; Discord's
placeholder said Image failed to load. WhatsApp showed a bottom-right favicon
only for the SVG case; that is separate from the main image. The SVG fixture's
size/artwork also differ from the reference, limiting format-only conclusions.

The text batch (S032–S036) reported normal appearance across the five requested
clients, with different title/description truncation. The Discord shortest/minimum
example is saved without converting it into a global length limit. Exact
character audits and other client cutoffs were not supplied. Preserve full input
metadata with escaping and writing guidance rather than silent clipping.

The noindex batch (S037–S041) retained cards across the five requested clients.
With social-image metadata the reference appearance stayed; without it the
cards had no images. This does not test search indexing or header-only rules.
The earlier preference to skip automatic generation on noindex remains a design
policy rather than a client-preview requirement established by these results.

The canonical batch (S042–S046) reported fine cards for absent, relative and
cross-origin canonicals in all five clients. LinkedIn displayed the deployment
host; Molly/WhatsApp displayed the stable alias; Discord/Instagram displayed no
domain. Destinations and Inspector URL fields remain unreported, so these cards
do not establish a consumer's canonical-selection rule or search-engine behavior.

H004 confirms the current redirect returns 302 with raw relative Location and
the error route returns real 404 HTML with no-store. In S047–S051 redirect
previews matched explicit-og; only Instagram showed a 404 title/description
card. Raw headers are retained in results/http/h004-headers.txt. X and Facebook
Messenger could not be tested this round; they remain untested, and the next
step is a preliminary metadata design review with explicit coverage limits.

A manual production route probe on 2026-10-24 confirmed the explicit-OG page,
exact `.txt` source, SVG, PNG and manifest return 200 with the appropriate
Content-Types, and the redirect returns 302 to the reference page. The two
nonexistent source URL variants return 404. An earlier 404 at the exact source
URL was not reproduced; its cause remains unknown. Run
`bash scripts/probe-deployment.sh` to repeat these GET checks without following
redirects; an optional first argument selects another origin.

Extended hosted HTTP checks, remaining browser combinations and additional
client-specific controls remain unmeasured. X/Facebook are unavailable this round.
They need manual testing in a real browser or app.
A clean dependency install has not been verified yet; the build and output
checks have run with previously installed dependencies.

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
