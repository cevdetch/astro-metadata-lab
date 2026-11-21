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
| MO | Molly |

Signal is an additional reported client for the theme-color case. Molly has its
own first-round precedence report and is not merged with Signal. Unreported
matrices retain the original six-platform checklist.

## Client settings

Use one client/device/surface per row. To test another client or surface, add a
new row label here and in the relevant matrices. Keep composer, sent and received
observations separate. Assign S run IDs when recording the results.

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
| WA/S005 | WhatsApp 2.26.40.77 | unknown | sent (planned); not confirmed | unknown | cache/settings unknown; current deployment; B024 context |
| MO/S006 | im.molly.app v8.19.2-4 | unknown | unreported | unknown | cache/settings unknown; current deployment; B024 context |
| DC/S007 | discord.com; version unknown | unknown | unreported | unknown | cache/settings unknown; current deployment; B024 context |
| LI/S008 | linkedin.com; version unknown | unknown | post composer; confirmed | unknown | cache/settings unknown; current deployment; B024 context |
| IG/S009 | instagram.com; version unknown | unknown | unreported | unknown | cache/settings unknown; current deployment; B024 context |
| LI/S010 | LinkedIn Post Inspector; web | unknown | inspector | unknown | fresh scrape reported; other cache/settings unknown; see all-fields record |
| LI/S011 | LinkedIn Post Inspector /inspect/; web | unknown | inspector | unknown | five-case report; no card descriptions; other cache/settings unknown |
| LI/S012 | linkedin.com; version unknown; inherited S008 | unknown | post composer | unknown | retry after Inspector success; other cache/settings unknown |
| LI/S013 | LinkedIn; version unknown | unknown | DM; sent/received/draft not recorded | unknown | no preview for lab or deadhead control; wait/settings unknown |
| DC/S014 | discord.com; version unknown; inherited from S007 | unknown | not recorded | unknown | omission batch; unchanged fields confirmed; cache/settings unknown |
| MO/S015 | Molly; v8.19.2-4 inherited from S006 | unknown | not recorded | unknown | omission batch; unchanged fields confirmed; cache/settings unknown |
| WA/S016 | WhatsApp; 2.26.40.77 inherited from S005 | unknown | not recorded | unknown | omission batch; unchanged fields confirmed; cache/settings unknown |
| LI/S017 | LinkedIn Post Inspector; web | unknown | inspector | unknown | omission batch; unchanged fields confirmed; cache/settings unknown |
| DC/S018 | Discord; version unknown; inherited S007 | unknown | not recorded | unknown | card-layout batch; cache/settings unknown |
| MO/S019 | Molly; v8.19.2-4 inherited S006 | unknown | not recorded | unknown | card-layout batch; cache/settings unknown |
| LI/S020 | LinkedIn; Inspector context inherited from S017 | unknown | inspector | unknown | card-layout batch; cache/settings unknown |
| IG/S021 | Instagram; version unknown; inherited S009 | unknown | not recorded | unknown | card-layout batch; cache/settings unknown |
| MO/S022 | Molly; v8.19.2-4 inherited S006 | unknown | not recorded | unknown | metadata type/URL/dimensions comparison; settings/cache unknown |
| IG/S023 | Instagram; version unknown; inherited S009 | unknown | not recorded | unknown | metadata type/URL/dimensions comparison; settings/cache unknown |
| WA/S024 | WhatsApp; 2.26.40.77 inherited S005 | unknown | not recorded | unknown | metadata type/URL/dimensions comparison; settings/cache unknown |
| DC/S025 | discord.com; version unknown; inherited S007 | unknown | not recorded | unknown | metadata type/URL/dimensions comparison; settings/cache unknown |
| LI/S026 | LinkedIn Post Inspector; web | unknown | inspector | unknown | metadata type/URL/dimensions comparison; settings/cache unknown |
| LI/S027 | LinkedIn Post Inspector; web | unknown | inspector | unknown | image-case batch; actual URL/cache/settings unknown |
| MO/S028 | Molly; v8.19.2-4 inherited S006 | unknown | not recorded | unknown | image-case batch; actual URL/cache/settings unknown |
| DC/S029 | Discord; version unknown; inherited S007 | unknown | not recorded | unknown | image-case batch; actual URL/cache/settings unknown |
| IG/S030 | Instagram; version unknown; inherited S009 | unknown | not recorded | unknown | image-case batch; actual URL/cache/settings unknown |
| WA/S031 | WhatsApp; 2.26.40.77 inherited S005 | unknown | not recorded | unknown | image-case batch; actual URL/cache/settings unknown |
| LI/S032 | LinkedIn Post Inspector; web; inherited S027 | unknown | inspector | unknown | text batch; individual cutoffs, settings/cache unknown |
| MO/S033 | Molly; v8.19.2-4 inherited S006 | unknown | not recorded | unknown | text batch; individual cutoffs, settings/cache unknown |
| DC/S034 | discord.com; version unknown; inherited S007 | unknown | not recorded | unknown | text batch; individual cutoffs, settings/cache unknown |
| IG/S035 | Instagram; version unknown; inherited S009 | unknown | not recorded | unknown | text batch; individual cutoffs, settings/cache unknown |
| WA/S036 | WhatsApp; 2.26.40.77 inherited S005 | unknown | not recorded | unknown | text batch; individual cutoffs, settings/cache unknown |
| LI/S037 | LinkedIn Post Inspector; web; inherited S032 | unknown | inspector | unknown | noindex sharing batch; exact text/layout/cache/settings unknown |
| MO/S038 | Molly; v8.19.2-4 inherited S006 | unknown | not recorded | unknown | noindex sharing batch; exact text/layout/cache/settings unknown |
| DC/S039 | discord.com; version unknown; inherited S007 | unknown | not recorded | unknown | noindex sharing batch; exact text/layout/cache/settings unknown |
| IG/S040 | Instagram; version unknown; inherited S009 | unknown | not recorded | unknown | noindex sharing batch; exact text/layout/cache/settings unknown |
| WA/S041 | WhatsApp; 2.26.40.77 inherited S005 | unknown | not recorded | unknown | noindex sharing batch; exact text/layout/cache/settings unknown |
| LI/S042 | LinkedIn; inherited Inspector context from S037 | unknown | inspector | unknown | canonical batch; domains recorded, destinations/settings/cache unknown |
| MO/S043 | Molly; v8.19.2-4 inherited S006 | unknown | not recorded | unknown | canonical batch; domains recorded, destinations/settings/cache unknown |
| WA/S044 | WhatsApp; 2.26.40.77 inherited S005 | unknown | not recorded | unknown | canonical batch; domains recorded, destinations/settings/cache unknown |
| DC/S045 | Discord; version unknown; inherited S007 | unknown | not recorded | unknown | canonical batch; domains recorded, destinations/settings/cache unknown |
| IG/S046 | Instagram; version unknown; inherited S009 | unknown | not recorded | unknown | canonical batch; domains recorded, destinations/settings/cache unknown |
| LI/S047 | LinkedIn; inherited Inspector context from S042 | unknown | inspector | unknown | redirect/404 batch; H004 header evidence separate; settings/cache unknown |
| MO/S048 | Molly; v8.19.2-4 inherited S006 | unknown | not recorded | unknown | redirect/404 batch; H004 header evidence separate; settings/cache unknown |
| DC/S049 | Discord; version unknown; inherited S007 | unknown | not recorded | unknown | redirect/404 batch; H004 header evidence separate; settings/cache unknown |
| IG/S050 | Instagram; version unknown; inherited S009 | unknown | not recorded | unknown | redirect/404 batch; H004 header evidence separate; settings/cache unknown |
| WA/S051 | WhatsApp; 2.26.40.77 inherited S005 | unknown | not recorded | unknown | redirect/404 batch; H004 header evidence separate; settings/cache unknown |

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

Blank means no result recorded yet; preserve its two spaces. `not tested` means
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

First-round results are now recorded as WA/S005, MO/S006, DC/S007, LI/S008
and IG/S009 in Field precedence. All reported image-bearing cards were large.
A later note confirmed that each letter applies to both title and description;
both fields are recorded independently with the same marker. Earlier theme-color
runs and unfilled rows keep their own context. I later clarified that LinkedIn's
S008 errors were in the post composer, not a DM. S010 is the detailed successful Inspector result;
S011 covers all five Inspector previews. Their descriptions were absent from
the cards, including S010 per the later correction. Extracted metadata and
visible card text are recorded separately.

The post-composer retry still failed (S012). The DM check also showed no card
(S013), including a deadhead.cevdet.ch control; precise DM surface and wait were
not recorded. Defer further LinkedIn retries and keep the cause unresolved.

The OG-only omission results are now recorded as DC/S014, MO/S015, WA/S016 and
LI/S017. A later note confirmed both text fields and images. Instagram's omission
results remain unreported. LI/S017's grouped description values were later retracted
and corrected to none; titles/images remain. Keep the correction
history and the distinction between extraction and visible card fields.

The card-layout batch is recorded as DC/S018, MO/S019, LI/S020 and IG/S021.
Discord reported summary with B/B/red; the others reported unchanged large-card
appearance, with other fields left unreported except LinkedIn's absent
description. The Signal label was confirmed to mean Molly. WhatsApp's card batch
remains unreported.

The metadata comparison is recorded as MO/S022, IG/S023, WA/S024, DC/S025 and
LI/S026: no reported problem in reference/type/URL/dimension variants, fixture
texts and reported large layout. LinkedIn's earlier no-description correction
remains in force. These equal-text controls do not identify a fallback source.

The image cases are recorded as LI/S027, MO/S028, DC/S029, IG/S030 and WA/S031.
LinkedIn/Molly had no SVG/missing main images; Instagram displayed the blue SVG;
Discord and Instagram used missing-image placeholders. WhatsApp's clarified
result is a card with no main image in all three cases; its SVG-only favicon is
separate from the main image.
My notes label the missing-image control image-missing-missing; it maps to
image-missing, but I did not record the exact shared URLs.

The text batch is recorded as LI/S032, MO/S033, DC/S034, IG/S035 and WA/S036:
all worked fine, with different truncation lengths. The reported Discord example
is saved in its long-title record; other cutoffs and exact character audits were
not recorded. LinkedIn's explicit description absence remains in force.

The noindex sharing batch is recorded as LI/S037, MO/S038, DC/S039, IG/S040 and
WA/S041. Both cases still showed cards; the with-preview case matched reference
appearance, and noindex-no-image had no image. This gives no search-indexing
or header-only noindex result. The earlier noindex/generation preference remains
a design policy, unchanged by this test.

The canonical batch is recorded as LI/S042, MO/S043, WA/S044, DC/S045 and IG/S046.
Cards were fine in all three variants. LinkedIn displayed the deployment host;
Molly/WhatsApp displayed the stable alias; Discord/Instagram displayed no domain.
Destinations and Inspector URL details remain unreported.

The redirect/404 batch is recorded as LI/S047, MO/S048, DC/S049, IG/S050 and
WA/S051, paired with H004 headers. Redirect matched explicit-og in all five;
404 produced no card except Instagram, which showed title and description.
Clicked destinations remain unreported.

X and Facebook Messenger were unavailable for this round and remain
untested. The current next step is a preliminary metadata design review; the
remaining blank cells are not an instruction to test every negative control
before that review.

This round ran on the current deployment without changing origin
configuration. B024 observed all-fields on the stable alias with metadata URLs
at `37d5d3ff.astro-metadata-lab.pages.dev`; retain that context. A missing card or
image alone does not identify field selection or its cause.

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
| WA/S005 | preview=card; title=A; description=A; image=none | preview=card; title=B; description=B; image=red; layout=large-image |  | preview=card; title=C; description=C; image=green; layout=large-image | preview=card; title=B; description=B; image=red; layout=large-image | preview=card; title=B; description=B; image=red; layout=large-image |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| MO/S006 | preview=card; title=A; description=A; image=none | preview=card; title=B; description=B; image=red; layout=large-image |  | preview=card; title=A; description=A; image=none | preview=card; title=B; description=B; image=red; layout=large-image | preview=card; title=B; description=B; image=red; layout=large-image |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| DC/S007 | preview=card; title=A; description=A; image=none | preview=card; title=B; description=B; image=red; layout=large-image |  | preview=card; title=C; description=C; image=green; layout=large-image | preview=card; title=B; description=B; image=red; layout=large-image | preview=card; title=C; description=C; image=red; layout=large-image |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| LI/S008 | preview=error; note=Cannot display preview. You can post as is, or try another link. | preview=error; note=Cannot display preview. You can post as is, or try another link. |  | preview=error; note=Cannot display preview. You can post as is, or try another link. | preview=error; note=Cannot display preview. You can post as is, or try another link. | preview=error; note=Cannot display preview. You can post as is, or try another link. |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| IG/S009 | preview=card; title=A; description=A; image=none | preview=card; title=B; description=B; image=red; layout=large-image |  | preview=card; title=A; description=A; image=none | preview=card; title=B; description=B; image=red; layout=large-image | preview=card; title=B; description=B; image=red; layout=large-image |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| LI/S010 |  |  |  |  | preview=card; title=B; description=none; extracted-description=B; image=LinkedIn proxy, color unreported; note=description length warning; inspector surface |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| LI/S011 | preview=card; title=A; description=none; image=none; note=inspector; displayed domain 37d5d3ff.astro-metadata-lab.pages.dev | preview=card; title=B; description=none; image=red; note=inspector; displayed domain 37d5d3ff.astro-metadata-lab.pages.dev |  | preview=card; title=A; description=none; image=none; note=inspector; displayed domain 37d5d3ff.astro-metadata-lab.pages.dev | preview=card; title=B; description=none; image=red; note=inspector; displayed domain 37d5d3ff.astro-metadata-lab.pages.dev | preview=card; title=B; description=none; image=red; note=inspector; displayed domain 37d5d3ff.astro-metadata-lab.pages.dev |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| LI/S012 |  |  |  |  | preview=error; note=Cannot display preview. You can post as is, or try another link.; surface=post-composer; retry after Inspector |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| LI/S013 |  |  |  |  | preview=none; note=DM; exact surface/wait unreported; deadhead control also no preview |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| DC/S014 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | preview=card; title=none; description=none; image=red | preview=card; title=B; description=none; image=red | preview=card; title=B; description=B; image=none |  |  |  |  |  |  |  |  |  |  |  |
| MO/S015 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | preview=card; title=A; description=B; image=red | preview=card; title=B; description=A; image=red | preview=card; title=B; description=B; image=none |  |  |  |  |  |  |  |  |  |  |  |
| WA/S016 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | preview=card; title=A; description=B; image=red | preview=card; title=B; description=A; image=red | preview=card; title=B; description=B; image=none |  |  |  |  |  |  |  |  |  |  |  |
| LI/S017 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | preview=card; title=A; description=none; image=red | preview=card; title=B; description=none; image=red | preview=card; title=B; description=none; image=none |  |  |  |  |  |  |  |  |  |  |  |
| DC/S018 |  |  | preview=card; layout=reported summary; title=B; description=B; image=red |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | preview=card; layout=reported summary; title=B; description=B; image=red | preview=card; layout=reported summary; title=B; description=B; image=red |
| MO/S019 |  |  | preview=card; layout=reported summary_large_image |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | preview=card; layout=reported summary_large_image | preview=card; layout=reported summary_large_image |
| LI/S020 |  |  | preview=card; layout=reported summary_large_image; description=none |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | preview=card; layout=reported summary_large_image; description=none | preview=card; layout=reported summary_large_image; description=none |
| IG/S021 |  |  | preview=card; layout=reported summary_large_image |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | preview=card; layout=reported summary_large_image | preview=card; layout=reported summary_large_image |

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
| MO/S022 |  |  | preview=card; title=fixture text; description=fixture text; image=reference appearance, color not recorded; layout=reported summary_large_image; note=no reported problem | preview=card; title=fixture text; description=fixture text; image=reference appearance, color not recorded; layout=reported summary_large_image; note=no reported problem | preview=card; title=fixture text; description=fixture text; image=reference appearance, color not recorded; layout=reported summary_large_image; note=no reported problem |  |  |  |  |  |  |  |  |  |  |  |  |  | preview=card; title=fixture text; description=fixture text; image=reference appearance, color not recorded; layout=reported summary_large_image; note=no reported problem |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| IG/S023 |  |  | preview=card; title=fixture text; description=fixture text; image=reference appearance, color not recorded; layout=reported summary_large_image; note=no reported problem | preview=card; title=fixture text; description=fixture text; image=reference appearance, color not recorded; layout=reported summary_large_image; note=no reported problem | preview=card; title=fixture text; description=fixture text; image=reference appearance, color not recorded; layout=reported summary_large_image; note=no reported problem |  |  |  |  |  |  |  |  |  |  |  |  |  | preview=card; title=fixture text; description=fixture text; image=reference appearance, color not recorded; layout=reported summary_large_image; note=no reported problem |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| WA/S024 |  |  | preview=card; title=fixture text; description=fixture text; image=reference appearance, color not recorded; layout=reported summary_large_image; note=no reported problem | preview=card; title=fixture text; description=fixture text; image=reference appearance, color not recorded; layout=reported summary_large_image; note=no reported problem | preview=card; title=fixture text; description=fixture text; image=reference appearance, color not recorded; layout=reported summary_large_image; note=no reported problem |  |  |  |  |  |  |  |  |  |  |  |  |  | preview=card; title=fixture text; description=fixture text; image=reference appearance, color not recorded; layout=reported summary_large_image; note=no reported problem |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| DC/S025 |  |  | preview=card; title=fixture text; description=fixture text; image=reference appearance, color not recorded; layout=reported summary_large_image; note=no reported problem | preview=card; title=fixture text; description=fixture text; image=reference appearance, color not recorded; layout=reported summary_large_image; note=no reported problem | preview=card; title=fixture text; description=fixture text; image=reference appearance, color not recorded; layout=reported summary_large_image; note=no reported problem |  |  |  |  |  |  |  |  |  |  |  |  |  | preview=card; title=fixture text; description=fixture text; image=reference appearance, color not recorded; layout=reported summary_large_image; note=no reported problem |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| LI/S026 |  |  | preview=card; title=fixture text; description=none (prior explicit correction); image=reference appearance, color not recorded; layout=reported summary_large_image; note=no reported problem | preview=card; title=fixture text; description=none (prior explicit correction); image=reference appearance, color not recorded; layout=reported summary_large_image; note=no reported problem | preview=card; title=fixture text; description=none (prior explicit correction); image=reference appearance, color not recorded; layout=reported summary_large_image; note=no reported problem |  |  |  |  |  |  |  |  |  |  |  |  |  | preview=card; title=fixture text; description=none (prior explicit correction); image=reference appearance, color not recorded; layout=reported summary_large_image; note=no reported problem |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| LI/S027 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | image=works; color not recorded; description=none (group report) | image=none; description=none (group report) | image=none; description=none (group report) |  |  |  |  |  |  |  |  |  |  |  |
| MO/S028 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | image=works; color not recorded; description=none (group report) | image=none; description=none (group report) | image=none; description=none (group report) |  |  |  |  |  |  |  |  |  |  |  |
| DC/S029 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | image=works; color not recorded | image=none | image=placeholder: Image failed to load |  |  |  |  |  |  |  |  |  |  |  |
| IG/S030 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | image=works; color not recorded | image=blue-circle SVG | image=placeholder; text not reported |  |  |  |  |  |  |  |  |  |  |  |
| WA/S031 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | preview=card; image=none; favicon=not shown | preview=card; image=none; favicon=bottom right | preview=card; image=none; favicon=not shown |  |  |  |  |  |  |  |  |  |  |  |
| LI/S032 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | text=normal appearance reported; note=general success, literal characters not recorded; description=none (prior explicit correction) | text=normal appearance reported; note=general success, literal characters not recorded; description=none (prior explicit correction) | text=normal appearance reported; note=general success, literal characters not recorded; description=none (prior explicit correction); truncation=client-dependent, cutoff unreported |  |  |  |  |  |  |  |  |
| MO/S033 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | text=normal appearance reported; note=general success, literal characters not recorded | text=normal appearance reported; note=general success, literal characters not recorded | text=normal appearance reported; note=general success, literal characters not recorded; truncation=client-dependent, cutoff unreported |  |  |  |  |  |  |  |  |
| DC/S034 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | text=normal appearance reported; note=general success, literal characters not recorded | text=normal appearance reported; note=general success, literal characters not recorded | text=normal appearance reported; note=general success, literal characters not recorded; truncation=client-dependent, cutoff unreported; example=`A long but valid descriptive title A long but valid descriptive tit...` (reported shortest/minimum) |  |  |  |  |  |  |  |  |
| IG/S035 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | text=normal appearance reported; note=general success, literal characters not recorded | text=normal appearance reported; note=general success, literal characters not recorded | text=normal appearance reported; note=general success, literal characters not recorded; truncation=client-dependent, cutoff unreported |  |  |  |  |  |  |  |  |
| WA/S036 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | text=normal appearance reported; note=general success, literal characters not recorded | text=normal appearance reported; note=general success, literal characters not recorded | text=normal appearance reported; note=general success, literal characters not recorded; truncation=client-dependent, cutoff unreported |  |  |  |  |  |  |  |  |

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
| LI/S042 | preview=card; note=no reported problem; displayed-domain=37d5d3ff.astro-metadata-lab.pages.dev; destination=unreported; description=none (prior explicit correction) | preview=card; note=no reported problem; displayed-domain=37d5d3ff.astro-metadata-lab.pages.dev; destination=unreported; description=none (prior explicit correction) | preview=card; note=no reported problem; displayed-domain=37d5d3ff.astro-metadata-lab.pages.dev; destination=unreported; description=none (prior explicit correction) |  |  |  |  |
| MO/S043 | preview=card; note=no reported problem; displayed-domain=astro-metadata-lab.pages.dev; destination=unreported | preview=card; note=no reported problem; displayed-domain=astro-metadata-lab.pages.dev; destination=unreported | preview=card; note=no reported problem; displayed-domain=astro-metadata-lab.pages.dev; destination=unreported |  |  |  |  |
| WA/S044 | preview=card; note=no reported problem; displayed-domain=astro-metadata-lab.pages.dev; destination=unreported | preview=card; note=no reported problem; displayed-domain=astro-metadata-lab.pages.dev; destination=unreported | preview=card; note=no reported problem; displayed-domain=astro-metadata-lab.pages.dev; destination=unreported |  |  |  |  |
| DC/S045 | preview=card; note=no reported problem; displayed-domain=none shown; destination=unreported | preview=card; note=no reported problem; displayed-domain=none shown; destination=unreported | preview=card; note=no reported problem; displayed-domain=none shown; destination=unreported |  |  |  |  |
| IG/S046 | preview=card; note=no reported problem; displayed-domain=none shown; destination=unreported | preview=card; note=no reported problem; displayed-domain=none shown; destination=unreported | preview=card; note=no reported problem; displayed-domain=none shown; destination=unreported |  |  |  |  |

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

Recorded runs: SG/S001, WA/S002, DC/S003 and IG/S004. No visible
theme-color accent change was observed in those clients; versions, device/OS,
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
| LI/S037 | preview=card; image=reference appearance, color not recorded; layout=same as reference; description=none (prior explicit correction) | preview=card; image=none; layout=not recorded separately; description=none (prior explicit correction) |  |  |  |
| MO/S038 | preview=card; image=reference appearance, color not recorded; layout=same as reference | preview=card; image=none; layout=not recorded separately |  |  |  |
| DC/S039 | preview=card; image=reference appearance, color not recorded; layout=same as reference | preview=card; image=none; layout=not recorded separately |  |  |  |
| IG/S040 | preview=card; image=reference appearance, color not recorded; layout=same as reference | preview=card; image=none; layout=not recorded separately |  |  |  |
| WA/S041 | preview=card; image=reference appearance, color not recorded; layout=same as reference | preview=card; image=none; layout=not recorded separately |  |  |  |
| LI/S047 |  |  |  | preview=none | preview=card; note=same as explicit-og; destination=unreported |
| MO/S048 |  |  |  | preview=none | preview=card; note=same as explicit-og; destination=unreported |
| DC/S049 |  |  |  | preview=none | preview=card; note=same as explicit-og; destination=unreported |
| IG/S050 |  |  |  | preview=card; title=present, not quoted; description=present, not quoted; image=unreported | preview=card; note=same as explicit-og; destination=unreported |
| WA/S051 |  |  |  | preview=none | preview=card; note=same as explicit-og; destination=unreported |

After a batch, copy each observation into the detailed records once.
