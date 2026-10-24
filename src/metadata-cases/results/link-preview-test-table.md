# Link preview test table

Fill this file for direct-message previews. Each empty input/result cell contains
two spaces. Use the fixture's Open link from the
[catalogue](https://astro-metadata-lab.pages.dev/cases/), one URL per message.
The tracking-query case includes its intended query string in that link.
Shared target details live in [sessions.md](sessions.md); formats and source
markers live in [reporting.md](reporting.md#direct-message-preview-reports).

Define platform labels once; these are not assigned S test-run IDs:

| Label | Platform |
| --- | --- |
| LI | LinkedIn |
| DC | Discord |
| X | X |
| WA | WhatsApp |
| IG | Instagram |
| FB | Facebook Messenger |
| SG | Signal |

Signal is an additional reported client for the theme-color case; the other
matrices retain the original six-platform checklist.

## Client settings

Use one client/device/surface per row. To test another client or surface, add a
new row label here and in the relevant matrices. Keep composer, sent and received
observations separate. We will assign S run IDs when recording the results.

Write the app version and device/OS literally, or reference a known browser run.
Use `composer`, `sent` or `received` for surface. For a native app, write `none`
in the browser column. Describe preview settings as `on`, `off` or `unknown`,
and note `first share` or `retest`, any cache-reset action and app light/dark
appearance when relevant. A query-string change does not establish a fresh scrape.
For another surface, use a row label such as `WA/received`; keep its settings
and results separate from `WA/sent`.

| Platform | App / version | Device / OS | Surface | Browser / run for web client | Preview setting / cache conditions |
|---|---|---|---|---|---|
| LI |  |  |  |  |  |
| DC |  |  |  |  |  |
| X |  |  |  |  |  |
| WA |  |  |  |  |  |
| IG |  |  |  |  |  |
| FB |  |  |  |  |  |
| SG |  |  |  |  |  |

## Proposed output standard

Use `key=value; key=value` in one line per cell. These are the shared fields;
each group below adds only the details it needs:

- `preview=card`, `none` or `error`. For no card, `preview=none` is enough;
  add `note=...` for a delay or message. For an error, copy its message.
- `title=<visible text>; description=<visible text>`. Copy each independently.
  Use `none` when a card has no such field, and `unknown` when you cannot read it.
- `image=red`, `green`, `none`, `unknown` or `other:description`. These describe
  the social image, separately from the favicon labels.
- `layout=large-image`, `thumbnail`, `text-only` or `other:description`.
  Describe unfamiliar layouts rather than forcing a match.
- `destination=<URL after tapping>` or `not tested`. Use `unknown` if the action
  ran but the client hides the final URL. Add `note=...` for an error or interstitial.

Blank means no result supplied yet; preserve its two spaces. `not tested` means
you did not perform a check; `unknown` means you tried but cannot identify the
value. Omitted fields stay unreported. Add `note=...` for context and
`evidence=<file or reference>` for an optional screenshot. Examples below are
syntax examples, not expected or recorded results.

Copy visible text exactly, including truncation; add `truncated=title`,
`description`, `both` or `none` when checked. Quote text containing semicolons
or a literal word such as "none". Use inline code for literal HTML/entity text;
escape a pipe as `\|` so it stays inside the Markdown cell. If you share a URL
other than the catalogue's Open link, add `shared-url=<exact URL>`.

**Example cell:** `preview=card; title=Example title; description=none; image=red; layout=thumbnail; destination=not tested`.

Start with the five precedence controls html-only, og-vs-html, twitter-vs-html,
all-fields and twitter-first, then expand to the remaining columns.

## Field precedence

Group: `precedence`.

Use the shared fields. For title/description, `A` means the visible HTML marker,
`B` the OG marker, `C` the Twitter marker and `D` the body marker. Use these
shortcuts only when that field's visible text identifies the marker; otherwise
copy its text. Keep image color and layout independent of title/description.
Matching or missing text alone does not establish which metadata was used.

**Example cell:** `preview=card; title=B; description=C; image=red; layout=large-image; destination=not tested`.

| Platform | html-only | og-vs-html | og-without-twitter | twitter-vs-html | all-fields | twitter-first | no-twitter-title | no-twitter-description | no-twitter-image | no-og-title | no-og-description | no-og-image | no-social-title | no-social-description | no-social-image | og-no-title | og-no-description | og-no-image | twitter-no-title | twitter-no-description | twitter-no-image | empty-twitter-title | empty-twitter-description | empty-twitter-image | missing-twitter-image | missing-og-image | empty-og-description | no-card | summary-card |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| LI |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| DC |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| X |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| WA |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| IG |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| FB |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

## Metadata

Group: `metadata`.

Use the shared fields and copy the actual text. In `escaped-text`, `unicode-text`
and `long-title`, preserve punctuation, characters and the visible truncated
portion; add `note=garbled text` or `note=missing glyphs` if that is what you see.
For image cases, report the displayed color or missing image; color does not
universally identify OG versus Twitter. Some cases have two OG candidates.

For `image-without-alt` and `image-alt-twitter`, add `alt=<actual announcement>`
only after an assistive-technology check; use `alt=not tested` otherwise.
Name the screen reader/settings in the shared client settings or `note=...`.
A field absent from the card does not prove that the platform ignored its tag.

**Example cell:** `preview=card; title=Example…; description=none; image=green; layout=thumbnail; destination=not tested; truncated=title; alt=not tested`.

| Platform | html-only | html-plus-og-image | explicit-og | no-og-type | no-og-url | no-og-title | no-og-description | no-description | no-image | empty-og-title | whitespace-og-title | conflicting-titles | duplicate-og-title | twitter-before-og | twitter-after-og | duplicate-twitter-values | no-twitter-card | summary-card | image-without-dimensions | image-relative | image-svg | image-missing | escaped-text | unicode-text | long-title | image-without-alt | image-alt-twitter | image-secure-url-duplicate | image-two-candidates | image-fallback-candidate | title-with-site-suffix | og-locale-fr | redundant-index-follow |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| LI |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| DC |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| X |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| WA |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| IG |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| FB |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

## Canonical URLs

Group: `canonical`.

Use the shared fields and add `displayed-url=<visible URL or domain>`, or `none`
if the card shows neither. Keep this separate from `destination`, the URL after
tapping. Copy the full destination if accessible, including query and fragment.
If an interstitial or error stops navigation, name it and record the last visible
URL in `note=...`. Do not infer the canonical selected by a crawler from the card.
Use the catalogue's query-bearing Open link for `tracking-query`.

**Example cell:** `preview=card; title=Example title; image=none; layout=text-only; displayed-url=example.com; destination=not tested`.

| Platform | canonical-absent | canonical-relative | canonical-cross-origin | canonical-duplicate | base-element | tracking-query | canonical-clean |
|---|---|---|---|---|---|---|---|
| LI |  |  |  |  |  |  |  |
| DC |  |  |  |  |  |  |  |
| X |  |  |  |  |  |  |  |
| WA |  |  |  |  |  |  |  |
| IG |  |  |  |  |  |  |  |
| FB |  |  |  |  |  |  |  |

## Head parsing

Group: `head`.

Use the shared fields. Copy the actual title and description, especially accented
or non-Latin characters. Add `text=normal`, `garbled` or `missing-glyphs` for the
visible text. Browser DOM and scripting settings do not establish how the
platform's crawler parsed the head or noscript content. Record the card rather
than assigning a parsing rule from its presence or absence.

**Example cell:** `preview=card; title=Example title; description=none; image=red; layout=thumbnail; destination=not tested; text=normal`.

| Platform | charset-first | charset-after-ascii-padding | charset-after-unicode-padding | metadata-after-invalid-head-element | metadata-in-noscript |
|---|---|---|---|---|---|
| LI |  |  |  |  |  |
| DC |  |  |  |  |  |
| X |  |  |  |  |  |
| WA |  |  |  |  |  |
| IG |  |  |  |  |  |
| FB |  |  |  |  |  |

## Language

Group: `language`.

Use the shared fields and add `direction=ltr`, `rtl` or `mixed` for the card's
visible text. Copy the actual title/description rather than guessing their
language from `lang` or `og:locale`. Note any translation UI and whether you used
it. Add `a11y=<action and actual announcement>` only if tested, otherwise
`a11y=not tested`; identify the assistive technology/settings once.

**Example cell:** `preview=card; title=عنوان مثال; description=none; image=red; layout=thumbnail; destination=not tested; direction=rtl; a11y=not tested`.

| Platform | lang-en | lang-fr-no-og-locale | lang-ar-rtl | lang-mixed-content |
|---|---|---|---|---|
| LI |  |  |  |  |
| DC |  |  |  |  |
| X |  |  |  |  |
| WA |  |  |  |  |
| IG |  |  |  |  |
| FB |  |  |  |  |

## Preview accent color

Group: `theming`.

Use the shared fields and add `accent=<visible card accent color>`, `none` if
there is no visible accent, or `unknown` if you cannot distinguish it. Record
`appearance=light` or `dark` in the cell unless already in client settings.
Observe the messaging card's accent separately from browser toolbar color.
For a second appearance, copy the platform row with a mode suffix.

Recorded runs: SG/S001, WA/S002, DC/S003 and IG/S004. The user reported no
visible theme-color accent change in those clients; versions, device/OS,
appearance, comparison reference and message views remain unknown. This does
not establish that a card has no accent, nor does it report title/image/layout
behavior. Shared run details live in `sessions.md`.

**Example cell:** `preview=card; title=Example title; image=red; layout=thumbnail; destination=not tested; appearance=dark; accent=none`.

| Platform | theme-color-media |
|---|---|
| LI |  |
| DC | note=no visible theme-color accent change reported; surface unreported |
| X |  |
| WA | note=no visible theme-color accent change reported; surface unreported |
| IG | note=no visible theme-color accent change reported; surface unreported |
| FB |  |
| SG | note=no visible theme-color accent change reported; surface unreported |

## Indexing and HTTP responses

Group: `indexing`.

Use the shared fields; report whether a card appears and where tapping leads.
For a redirect, distinguish the exact shared URL from the eventual destination.
Copy a displayed error title/message if one appears. Keep HTTP status and robots
headers in [http-test-table.md](http-test-table.md) when measured: neither a
missing preview nor a visible error page establishes the response status or
indexing behavior.

**Example cell:** `preview=none; destination=not tested; note=no card in sent message`.

| Platform | noindex-with-preview | noindex-no-image | http-noindex | error-404 | redirect |
|---|---|---|---|---|---|
| LI |  |  |  |  |  |
| DC |  |  |  |  |  |
| X |  |  |  |  |  |
| WA |  |  |  |  |  |
| IG |  |  |  |  |  |
| FB |  |  |  |  |  |

Return this file after a batch. I will update the detailed records; you only
need to enter each observation here once.
