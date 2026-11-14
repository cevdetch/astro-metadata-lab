# Test results

Tell me the browser or app and device once, then send case IDs and observations.
I will register the test run and update the tables. You can report one case or a
batch; you do not need to edit files or JSON.

## Fill-in matrices

For hand entry, fill these files and return them:

- [browser-test-table.md](browser-test-table.md): browser rows and case columns,
  with separate light/dark theming matrices.
- [link-preview-test-table.md](link-preview-test-table.md): platform rows and
  case columns for direct-message previews.
- [http-test-table.md](http-test-table.md): response fields and request columns
  for host checks.

Names appear once in each file's key; the matrices use short IDs. Full browser
versions and shared deployment details stay in `sessions.md`. Empty input/result
cells contain exactly two spaces. Fill these worksheets once; when you return
them, I will update the detailed records without asking you to copy values into
each case file too. Preserve earlier observations when a rerun differs.

Each worksheet proposes a reporting standard beside its groups: what to observe,
which fields/values to write and a clearly marked example. Examples describe
format only. Use the suggested labels when they fit; describe unexpected behavior
in `note=...` rather than forcing it into an expected result. Blank means no
report yet, `none` means checked but not visible, `not tested` means unperformed,
and `unknown` means inconclusive. HTTP headers use `absent` only after a complete
header capture. I can refine these conventions after the first filled batch.

[Reporting shortcuts](reporting.md) defines the icon labels and copyable formats
for each test group. Use `astro`, `blue-circle` or `red-square` for the first icon
batch; later controls also use green/blue squares and a yellow circle. These
names describe appearance, not the selected file or format.

## Next deployment and test batch

The five-case appearance comparison is recorded for Tor (B008), Brave (B009),
Firefox (B010) and Vanadium (B011). The requested light-mode follow-up is recorded
for Firefox (B012) and Vanadium (B013): light for both dual-scheme orders, dark
for dark-only, and an unchanged yellow-circle responsive icon. A matching Brave
light-mode report is unreported. Keep the icon behavior unresolved and defer
further theme/icon diagnosis. Continue comparing the same fixture
version; saving observations does not change the fixture HTML.

The mobile viewport batch is recorded as B014. Without the declaration, the
page looked desktop-like with small text, and pinch zoom worked. The width-only
reference and width-plus-initial-scale page looked normal. Horizontal overflow
and pinch behavior on those two pages were not separately reported. This was
a viewport comparison, not an encoding or parsed-DOM test.

The three charset cases are recorded for all four browsers as B015–B018:
normal text, UTF-8 document encoding, and Content-Type
`text/html; charset=utf-8`. This confirms the reported deployed decoding; it does
not isolate a late declaration when the HTTP header already supplies UTF-8.

The invalid-head case is recorded for Firefox (B019) and Brave Origin (B020).
Both returned the expected `document.title`; the inspected title, description,
canonical and OG title were direct children of `body`. This does not establish
where every other metadata element landed or whether social crawlers use them.

The Firefox noscript comparison is recorded as B021. With scripting enabled,
the tab showed the production-alias URL; element parents were not reported.
With scripting disabled, the expected title appeared, and
title/description/canonical were recorded as direct children of head. The canonical
href used the `37d5d3ff` deployment host; retain that value for the hosting review
without assuming a redirect or a particular cause.

The four language pages are recorded as B022 in the requested Firefox context.
All text looked normal. Document languages and computed directions matched the
reported Console JSON, including the French passage in the mixed page. English
text appeared on the right in the Arabic RTL page. Assistive technology and full
bidirectional-text handling were not tested.

The JSON-LD comparison is recorded as B023 in the requested Firefox context.
Unsafe JSON failed to parse, created an image element and set the runtime flag.
The leading reported 404 is interpreted as the image request status. Escaped
JSON parsed with the full markup-like name retained as a string, with
no matching request, image element or runtime flag value. These are observed
fixture behaviors, not a general security or structured-data eligibility audit.

B024 confirms the live all-fields document uses the stable production alias,
while canonical, OG URL and both social image URLs use the `37d5d3ff` deployment
host. The exact JSON is retained in the case record; image reachability and HTTP
headers were not checked. Local origin selection explains how this can occur
when the build uses `CF_PAGES_URL`; the live variable values are unconfirmed.

Testing proceeded directly to message previews on the current
deployment, deferring the production-origin change and reinspection. B024's
metadata-host observation remains part of the test context. It is not a reason
to label a missing card or image as a field-precedence result.

The first five precedence cases are recorded for WhatsApp (S005), Molly
(S006), Discord (S007), LinkedIn (S008) and Instagram (S009). WhatsApp and
Discord reported C/green without OG tags; Molly and Instagram reported A/no
image there. With all fields present, all four returned B/red. Twitter-first
changed Discord's text marker to C while its image stayed red; the other three
returned B/red. A follow-up confirmed that each marker describes both title and
description. All image-bearing cards were large-image. LinkedIn returned the
same error for all five; these were confirmed as post-composer attempts.
The cause remains unconfirmed.

LinkedIn Post Inspector then succeeded for all-fields (S010): title B in the
preview, description B in extracted metadata, a LinkedIn-proxied image and the
deployment-specific canonical. The tool reported 200 Success for the fetched
stable-alias URL. It warned about a description shorter than 100 characters but
still produced the preview. A later correction confirmed that no description was
visible on the preview card, including this earlier inspection. S010's image
color/layout were not supplied. This does not reproduce or resolve the earlier composer
failure, nor establish a DM result.

The full Inspector batch (S011) returned visible titles A/B/A/B/B and images
none/red/none/red/red. All five displayed the deployment-specific domain and
none displayed a description. Letters identify titles only in this batch.
The warning's role in omitting descriptions is an untested hypothesis; extracted
metadata and visible card fields are separate observations.

The requested post-composer retry still failed (S012). LinkedIn DMs also
showed no preview (S013), including a deadhead.cevdet.ch control.
The precise DM surface, wait and settings were not restated. The control and
Inspector successes weaken a lab-specific hostname explanation without proving
a cause. Defer further LinkedIn retries and continue in the other clients.

The OG-only omission batch is recorded for Discord (S014), Molly (S015),
WhatsApp (S016) and LinkedIn Inspector (S017). Discord had no visible HTML text
fallback. Molly and WhatsApp fell back to A for each omitted text field. A later
correction for LinkedIn: it still had no visible descriptions; retain its A/B/B titles
and red/red/no-image results. This retracts the grouped description claim.

The card-layout batch is recorded as S018–S021. Discord reported summary layout
with B/B/red for og-without-twitter, no-card and summary-card. Molly (explicitly
confirmed as the Signal label), LinkedIn and Instagram reported unchanged
summary_large_image appearance. Geometry and their other text/image fields were
not restated, apart from the LinkedIn description correction. WhatsApp's layout
batch remains unreported. This supports explicit OG text and a large-image card
hint for the reported Discord behavior; it does not require duplicated inputs.

The next comparison is now recorded as S022–S026 for Molly, Instagram,
WhatsApp, Discord and LinkedIn Inspector. The reference and omissions of OG type,
OG URL and image dimensions had no reported problem, fixture text and large-card
appearance. Image color/domain were not separately restated. Keep LinkedIn's
explicit no-description correction; this general report does not reverse it.
These equal-text cases do not identify which fallback tags a client used or
establish equivalence on untested platforms.

The image batch is recorded as S027–S031. Root-relative images worked in
LinkedIn Inspector, Molly, Discord and Instagram; color was not restated. SVG
appeared as a blue circle in Instagram and not as a main image in LinkedIn,
Molly or Discord. Missing images were absent in LinkedIn/Molly and placeholders
in Discord/Instagram; Discord's literal message was Image failed to load.
LinkedIn/Molly's grouped report also states no descriptions. Other text/layout
fields remain unreported. The image-missing-missing report label is mapped to
the requested image-missing case; exact URLs were not restated.

A clarification of WhatsApp's result: all three cards appeared, with no main
images. A bottom-right favicon appeared only on the SVG case. Keep that favicon
separate from the main preview image. The SVG
control differs in artwork/size too, so its failures do not isolate format alone.
These observations favor an absolute PNG as a portable default candidate.

The text batch is now recorded as S032–S036. All cases were reported to work
fine, with different title/description cutoffs across clients. The Discord
long-title example is preserved as a reported shortest/minimum visible string;
it is not a fixed supported character limit. Exact cutoffs for the other clients
and literal character audits were not supplied. LinkedIn's earlier explicit
description absence remains in force.

This supports preserving full input text, correct escaping and concise-writing
guidance rather than automatic clipping to a universal title/description length.

The noindex batch is recorded as S037–S041. All five clients still showed
cards: noindex-with-preview retained the reference appearance, while
noindex-no-image had no image. Exact text, image color and layout details were
not separately restated. Search indexing and header-only noindex were not tested.
The earlier preference to skip automatic image generation for noindex remains
recorded; it is a starter policy choice, not a requirement observed here.
The no-image case also removes the card hint, so layout is not isolated to image
removal alone.

The canonical batch is recorded as S042–S046. All three cases produced cards
without reported problems. LinkedIn displayed the deployment-specific domain;
Molly/WhatsApp displayed the stable production alias; Discord/Instagram displayed
no domain. Clicked destinations and Inspector fetched/canonical URL details were
not supplied. These observations do not establish canonical selection, fallback
source or search-engine handling. Keep the earlier LinkedIn description absence.

The response batch is now recorded as H004 and S047–S051. Current supplied
headers confirm 302 with raw Location /cases/metadata/explicit-og/ and a real
404 HTML response with Cache-Control no-store. The server Date is 2026-10-24
15:35:15 GMT. Neither header block includes X-Robots-Tag. Raw evidence is saved
under http/h004-headers.txt; older probes retain their own contexts.

Redirect previews matched explicit-og in all five clients. The 404 produced no
card in LinkedIn Inspector, Molly, Discord or WhatsApp; Instagram still showed
a title/description card. Exact Instagram strings/image/layout and clicked final
destinations were not supplied. A status code and missing OG identity are not a
guarantee that every tested client will omit a card.

X and Facebook Messenger were unavailable for this round.
Keep them untested and retain the LinkedIn Inspector/composer/DM split.
The result is a useful core preview sample for the available clients, not
universal platform coverage.

og:type and og:url are retained, with the documented note that the individual
omissions caused no reported visible change in S022–S026. This is a protocol
conformance choice; it is not a preview improvement established by the tests.

OG image width/height tags are omitted by default, even when
known. The generated output is confirmed as 1200×630 PNG; image
canvas size and head metadata are separate. Do not promise universal fetching/cropping
or apply the omission rule to layout sizing for visible page images.

Next: review the preliminary metadata recommendations in ../design-notes.md.
The core preview round is enough to discuss practical defaults without making
every remaining negative-control cell a prerequisite. The complete starter
design, boundaries, acceptance criteria and implementation plan remain to agree.
No starter code, dependencies, generation or hosting settings have been changed.

The description-length warning is advisory in this observation: it did not
prevent S010's preview. Keep the short A/B/C/D markers and avoid imposing an
arbitrary 100-character minimum based on the warning. The author suggestion
(`<meta name="author" content="[Author name here]">`) and lack of a publication
date alternative are recorded as tool guidance. Recommend optional author/date
metadata for real authored content, without inventing values. Open Graph's
[article publication time](https://ogp.me/#type_article) and Schema.org's
[datePublished](https://schema.org/datePublished) are candidates for a later
article recipe; this does not establish LinkedIn's support or approve additions
to the minimal starter. The reported Article type remains tool output.

Continue with remaining omission/failure pairs after this batch. X/Facebook
first-round results remain unreported.

Builds on `main` now use `https://astro-metadata-lab.cevdet.ch` as their origin
without `CASE_ORIGIN` (see `build-origin.mjs`). B024 and the link-preview runs
above predate that change and keep their recorded deployment-host context. A
fresh all-fields inspection after the next production deployment would confirm
the live canonical, OG URL and image URLs.

When fixture HTML or assets change, push them before mobile testing. In
Cloudflare Pages, wait for the production deployment to succeed and record its
commit once for the batch. Use the stable production alias, not localhost on the
phone. Run `bash scripts/probe-deployment.sh` after a deployment and confirm that
the case URLs return their own pages rather than the custom 404.

Keep B003–B006 and their recorded observations attached to their existing context.
For this deployment, add a temporary row such as `B006/<new-short-SHA>` in the
relevant worksheet table, reference B006's client setup and supply the full
commit once. I will assign a new run ID when reconciling that batch. State any
profile, version or device changes; do not relabel an earlier result as a retest.

The completed five-case comparison uses these controls:

| Case in `theming/` | What to compare |
| --- | --- |
| `scheme-meta-only` | Single `light dark` declaration; current-deployment reference |
| `scheme-meta-dark-first` | Same two words in reverse order: `dark light` |
| `scheme-meta-dark-only` | Single `dark` declaration |
| `scheme-duplicate` | Existing invalid control: `light dark`, then a separate `dark` tag |
| `scheme-duplicate-dark-first` | Same two tags in reverse order |

Use each browser's usual settings first, with DevTools emulation off. Record
overall appearance, native input/button appearance and any visible toolbar
change separately. Include media-query matches only when inspected. Repeat with
a real light setting where available; label DevTools overrides as separate
emulated rows. Keep the new results in the browser worksheet and retain its
earlier rows. The hosted testing guide links to all five controls.

The remaining coverage is:

| Group | Already reported | What remains / how to test |
| --- | --- | --- |
| Icons | Twenty tab/tab-switcher results per browser; Firefox/Vanadium light-mode follow-up kept the responsive icon yellow-circle | Defer investigation of the unchanged icon and surprising Tor results. Saved/bookmark/home-screen icons need separate actions; an Apple home-screen result remains unobserved. |
| Theming | Initial cases, all four five-case comparisons, and the requested Firefox/Vanadium light-mode follow-up | Move to head/viewport checks. Brave light-mode coverage, exact palettes, native control details and first paint remain incomplete where unreported. |
| Head / viewport | Mobile viewport comparison recorded; all three charset controls showed normal text and UTF-8 encoding in all four browsers with an explicit UTF-8 HTTP charset | Invalid-head DOM placement recorded for Firefox/Brave: all four inspected elements were direct children of body. Firefox noscript comparison recorded: URL tab label with scripting on, expected title and three metadata elements under head with scripting off. Enabled parent locations and header-free charset behavior remain unreported. |
| Language | Four Firefox reports: normal text; document languages/directions and mixed French passage inspected; English text on right in RTL page | Other browser environments, screen readers, keyboard behavior and full bidirectional text were not reported. |
| Manifest / saved icons | No installation or launch reports | Try bookmark, add-to-home-screen or install actions where offered; launch the saved entry. Record icon, name, URL, display mode and prior installations. Use separate rows per action; these are online checks. |
| JSON-LD | Firefox: unsafe parse error, extra image and true flag; interpreted image status 404. Escaped JSON parsed, no extra image/request, flag undefined | Other browsers and scripting-disabled behavior unreported; successful parsing does not establish structured-data eligibility. |
| Link previews | Core available-client rounds recorded through S051, including Inspector/composer/DM differences, omissions, image failures, noindex, canonical and response cases | Review preliminary metadata recommendations. X/Facebook unavailable; advanced controls, exact client settings, clicked destinations and accessibility exposure remain gaps. |
| HTTP / hosting | Earlier eight-request probes plus H004 current redirect/404 headers | Header-only noindex, remaining URL variants, arbitrary missing-page response and production-origin refinement remain unmeasured or deferred. Do not attach H004 to a full commit without evidence. |

The three worksheets hold the field formats; `manual-tests.md` explains the
actions. Return the filled sections or raw HTTP output once. A blank does not
require an immediate exhaustive run: finish the color-scheme comparison first,
then take one remaining group at a time. Signal currently adds only its reported
theme-color case; the full preview checklist still targets the original six apps.

After collecting enough evidence for the intended clients, the starter still
needs its agreed design, scope boundaries, acceptance criteria and incremental
implementation plan. Lab fixture behavior is evidence for those decisions.

Each of the 121 fixtures has a record under `cases/<group>/<id>.md`. The
[record index](index.md) lists the cases and their test surfaces.
[Test runs](sessions.md) holds the shared browser/app version, device, OS,
deployment and conditions. [Hosting results](hosting.md) holds HTTP probes.
The website exposes the same per-case tables at `/cases/results/` after a build.

## Start a browser run

Send what you know; leave missing details unknown:

```text
Browser: Firefox, version ...
Device / OS: ...
Testing URL / deployment: ...
Appearance: system light / dark
Profile: normal / fresh / private; extensions or overrides if relevant
Surface: browser tab
```

Then send results like this. These are format examples, not recorded observations:

```text
icons/ico32-svg = blue-circle in the tab
icons/svg-ico32 = red-square in the tab
icons/svg-responsive = blue-circle in light mode; yellow-circle in dark mode
```

I will give the run a `B...` ID. You can use that ID in later messages instead of
repeating the details. When the device, browser version or deployment changes,
start a new run. Record light/dark modes and different UI surfaces as separate
rows within a run. Keep surprising reruns alongside the original observation.

## Browser testing order

The registered browser matrix is B003 (Brave Origin on Arch Linux), B004
(Firefox on Arch Linux), B005 (Vanadium on Android 17) and B006 (Tor Browser Alpha
on Android 17). Full versions live in `sessions.md`.
The worksheet contains icon and initial theming observations;
blank cells remain unreported. Start with the four icon controls in B003, then
repeat the same controls in the other three browsers. Report the mode and visible
icon surface with each batch;
for Tor include the security level if known. On mobile, use a tab switcher or
other surface that exposes the icon and name that surface in the report.

1. Icons: start with `icon-svg-only`, `icon-ico-only`, `ico32-svg` and `svg-ico32`.
   Then test the remaining icon cases in that browser. Open the fixture in its
   own top-level tab. Report the icon you see and where you see it; if the UI
   has no visible icon, say so.
2. Theming: test all ten cases in system light and dark mode. Report page
   background/text, native controls, toolbar color and first-paint changes
   separately. Include the dark-first, dark-only and reversed-duplicate controls.
   Keep DevTools emulation separate from OS/browser settings. Test
   `icons/svg-responsive` in both modes too.
3. Mobile head/viewport and language: use the head and language groups. Record
   orientation, scripting settings and HTTP charset where relevant. Separate
   rendered language/direction from assistive-technology behavior.
4. Bookmarks, home screen and manifests: record each action separately. Record
   existing installations and profiles; the enabled manifests share one app ID
   and start URL. These controls test online launch.
5. Developer checks: inspect the two JSON-LD script-end controls with DevTools
   where available. Their tables describe the parsing/request observations.

Repeat on available desktop and mobile browser/OS combinations. Browser identity
includes the OS; results from one device do not fill another device's rows.
The records assign 47 cases to browser observation. Metadata-only comparisons
belong in the social-DM phase, so they do not require repetitive browser checks.

## Then test website links in direct messages

Start a separate `S...` run for each platform, app version and device/surface:
LinkedIn, Discord, X, WhatsApp, Instagram and Facebook Messenger. A web client
also needs the browser/version. Record sender and receiver environments
separately when they differ.

Signal has an additional reported theme-color observation. S001–S004 record that
accent-change report for Signal, WhatsApp, Discord and Instagram only; the other
metadata and layout fields remain unreported.

```text
Platform / app version: WhatsApp ...
Device / OS: ...
Surface: received DM
Testing URL / deployment: ...
Link-preview setting and first share / retest: ...
```

Send one fixture URL per message. Begin with these five precedence cases:
`html-only`, `og-vs-html`, `twitter-vs-html`, `all-fields`, `twitter-first`.
Report composer, sent and received previews as separate observations.

```text
precedence/all-fields
Title: OG TITLE B
Description: not shown
Image: green
Layout: large image above title
Tap destination: ...
```

That is another format example. A client can combine sources, so copy the title,
description and image independently. The D marker identifies body text. After
the first round, use the omissions/empty/broken-image pairs from the testing
guide, then the other metadata, canonical, language and indexing cases.
The 84 social-relevant records include a row for each target platform. Those
rows are a coverage checklist; start with the five cases before expanding it.

## Record uncertainty

- `not tested`: nobody has reported this combination.
- `not shown`: the tested surface exposes no visible icon/field.
- `no preview`: the app showed no card for the tested URL.
- `unknown`: the supplied evidence does not identify a value or condition.
- `reported`: the observation was reported manually; describe any supporting evidence.

A missing card does not tell us which tag a platform ignored. Record the exact
shared URL, including query strings, and the deployment when known. A query
suffix does not prove that a platform scraped fresh HTML. Record cache/profile
changes and screenshots as evidence without turning them into universal rules.

## Files and updates

The Markdown tables in this folder hold new observations. The older
`browser-observations.json` and `social-observations.json` remain as the initial
snapshot files; the catalogue labels the former as early reports. The two early
Brave/Firefox reports and the supplied HTTP probe have been transcribed here
with their missing versions, devices and deployment commits marked unknown.

Keep observations in result pages rather than changing fixture HTML. Website
tables update after rebuilding and deploying the repository; they do not save
browser input. When adding a fixture, add its record and update `index.md` too.
Escape literal pipes and HTML characters when entering observed text in Markdown
tables so the displayed title/description stays intact.
