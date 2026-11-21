# Starter design direction

This file records the direction discussed so far. The complete written design,
scope boundaries, acceptance criteria and incremental implementation plan still
need to be settled before implementing the starter.

## Intended users and first scope

Assume familiarity with Astro's documentation, project setup, layouts and props.
The first starter should add a small set of useful essentials to Astro, strict
TypeScript and vanilla CSS. Separate i18n, blog and portfolio starters are options
to assess after that foundation, rather than requirements for the first one.

Keep developer convenience, visitor performance, build time and maintenance cost
as separate criteria. An extra metadata tag costs HTML bytes; an image renderer
also adds build work and dependencies. Removing a feature should leave a clear
Astro project with a documented way to remove its configuration and packages.

## Directions already discussed

- Keep the project portable, without personal branding assets, filesystem paths,
  external local repositories or a mandatory branding pipeline.
- Use system-controlled color scheme without a theme switcher or saved preference.
- Include no service worker, offline page or offline caching.
- Keep installation metadata optional, with an explicit configuration switch.
- Support manual social images. The proposed automatic generator is enabled by
  default, has an editable design source and can be disabled with a boolean.
- Keep social-image content and layout project-dependent. The editable design
  source can use existing page metadata; neither title-only nor title plus
  description is a universal requirement.
- Derive generation inputs from emitted page metadata. Avoid a separate page
  registry; generate during the build for prerendered pages.
- Skip automatic generation for disabled pages, page-level noindex, manual image
  overrides, errors, redirects and unpublished pages. Preview-deployment noindex
  should not suppress generation for otherwise indexable pages.
- Keep runtime generation outside the first starter. On-demand pages can provide
  manual images; SSR adapters belong in host-specific guidance.
- Assess production origin, previews and base paths explicitly. Astro's production
  mode alone does not identify a production deployment.

The static fixtures exercise HTML and client behavior; they do not implement the
generator or prove its skip policy. Fixed PNGs keep preview experiments independent
of renderer choices.

## Finding from the local icon cases

With Astro 7.4.2, forcing `trailingSlash: 'always'` made the extensionless
`[asset].ts` route reject file URLs such as `/cases/assets/icon-blue.svg` in dev,
although the static build emitted the correct files. The lab now uses `ignore`;
its page links still include trailing slashes. A regression check uses Astro's
dev route builder to check asset URLs and icon case URLs at root and a subpath.
For the starter design, assess assets in `public/` or endpoints with literal file
extensions before choosing a strict slash policy. Build checks alone missed this.

## Metadata baseline review — 2026-10-24

I accepted the metadata baseline, then chose ICO-only as the default, with
SVG documented as an alternative, and then one 48×48 entry generated with
favcon. It does not remove lab fixtures or implement the complete starter.

The accepted head grouping is encoding/viewport/color scheme, page identity,
conditional indexing directives, OG metadata, Twitter card hint, icons, optional
project metadata and Astro-managed styles/scripts. Derive repeated text and URL
values from shared inputs. Keep optional article/language/installation metadata
conditional, and do not emit empty image fields or an image-less large-card hint.
Meaningful social-image alt belongs with the image; its project-specific input
and default still need design. Production-origin handling still needs validation.

ICO-only was chosen to reduce maintained assets. The recorded
ICO-only case showed red in Brave, Firefox and Vanadium, but an unidentified
blue square with “1” in Tor. The combined svg-any case showed the blue SVG in all
four. A single ICO is therefore a simplicity choice, not an observed
compatibility improvement. Use one explicit icon link with sizes omitted and
document SVG as an alternative. I chose a single 48×48 entry instead of
the proposed multi-size file. This keeps the output small and leaves scaling
to consumers. Existing 32px and multi-size comparison fixtures remain unchanged.
[Google's current favicon guidance](https://developers.google.com/search/docs/appearance/favicon-in-search)
recommends larger than 48×48, but that is a recommendation, not a minimum
eligibility requirement. No Google Search rendering was tested.

The generated [48px blue-circle ICO](assets/icon-blue48.ico) is a lab asset using
the existing icon-blue.svg artwork, not branding selected for the starter. It
was produced with favcon's optimiseSvg, squareIconSvg, loadEngine and icoWrap
functions, rendering at 48px with 256 colors and 120 finishing iterations.
Favcon's APIs already accept this size; its global ICO_SIZE=32 default and source
were not changed. The exported file needs no favcon installation to be served.
No 48px browser result has been recorded yet.

## Metadata recommendations and evidence from the lab

The metadata baseline and single-entry 48px ICO default were accepted on
2026-10-24. Detailed configuration and generation design remain open.
These decisions do not approve the complete starter design or its implementation. The available-client
evidence is in [the run registry](results/sessions.md), with
per-case records and H004's current response headers. X and Facebook
Messenger could not be tested this round. LinkedIn Inspector results do not establish DM
or post-composer behavior; those had their own unsuccessful reports.

| Area | Preliminary recommendation | Evidence and remaining limits |
| --- | --- | --- |
| Text inputs | Supply title/description once and emit HTML plus OG text from those values; offer overrides only for intentional differences | Discord did not visibly fall back in the OG-only omissions. Other clients' fallbacks differed. |
| OG identity (agreed 2026-10-24) | Keep og:type=website and og:url for the ordinary website defaults; share the canonical URL input | Omitting either individually caused no reported visible change in Molly, Instagram, WhatsApp, Discord or LinkedIn Inspector (S022–S026). They stay for OG protocol conformance, not an observed preview improvement. X/Facebook were unavailable. Two output tags need no duplicated developer input. |
| Canonical | Emit one deliberate absolute canonical for ordinary indexable content from an explicit production origin; handle exceptional pages separately | Preview cards did not establish canonical selection. Google describes rel=canonical as a canonicalization signal and recommends absolute URLs; search behavior needs its own validation. |
| Social image | Prefer an absolute PNG URL as the default supported image path; retain explicit manual-image support | Root-relative/SVG behavior varied; a missing image yielded absence, placeholders or different favicon behavior. The SVG control also differs in size/artwork, so negative results do not isolate format. |
| Card hint | Keep twitter:card=summary_large_image for pages with an intended large image; avoid repeating Twitter title/description/image unless needed for an override | The tested Discord layout changed; other reported layouts did not. X remains untested; this is an empirical recommendation, not a promise of identical layouts. |
| OG dimension tags (agreed 2026-10-24) | Omit og:image:width and og:image:height by default, including when the generator knows the dimensions; require no manual dimensions or probing solely for these tags | S022–S026 reported no visible regression from omission. These OG properties are optional. This decision concerns head metadata, not the actual output image size or visible HTML image layout. |
| Generated image output (agreed 2026-10-24) | Generate 1200×630 PNG images by default. Manual image overrides remain supported without requiring this exact size | This is the tested default canvas/format, not a universal dimension mandated by Open Graph. LinkedIn specifies at least 1200×627 and approximately 1.91:1. Clients can crop or fail to fetch; X/Facebook are untested. This does not re-enable the omitted OG dimension tags. |
| Image alt (proposal) | Keep meaningful social-image alt in scope, with its inputs and defaults still to decide | OG recommends alt when an image is specified. Accessibility exposure in actual clients remains unmeasured. |
| Text length | Preserve full escaped strings; provide writing guidance rather than a universal hard limit or silent truncation | Clients cut title/description differently. The Discord example is not a cross-client limit; literal character audits were not recorded. |
| Noindex and generation | Retain the prior preference to skip automatic generation on page-level noindex as an explicit starter policy | Noindex did not suppress available-client cards. This does not approve a policy change, test search exclusion or implement generation. |
| Errors and redirects | Retain correct error titles and host statuses; skip generated social identity as previously proposed | H004 confirms actual 302/404; Instagram still produced a 404 title/description card. Omitting OG cannot guarantee no preview. |
| Authored content | Keep author/publication-date fields optional and tied to truthful content | Inspector guidance and absent author/date fields are not universal requirements. Article behavior needs its own recipe/design. |

For the eventual starter documentation, state the OG identity result explicitly:

> The starter includes og:type and og:url to follow the Open Graph protocol. In the lab's available-client tests, removing either individually caused no reported visible preview change. Those observations do not establish behavior on untested platforms.

The decision includes keeping that distinction visible in the
explanation, rather than presenting these tags as fixes demonstrated by the lab.

I chose omission of OG dimension tags rather than the earlier proposal
to emit them whenever known. Keep that decision explicit. Image sizing remains
an independent design choice: the actual image can have a consistent canvas
without serializing its dimensions in OG metadata. Matching a recommended size
reduces one compatibility variable; it does not guarantee every platform will
fetch, show or crop the image identically. Do not extend this omission rule to
visible page images, which still need reserved layout space.

Sources for this distinction: [optional OG image properties](https://ogp.me/),
[LinkedIn sharing image guidance](https://www.linkedin.com/help/linkedin/answer/a521928/making-your-website-shareable-on-linkedin?lang=en)
and [reserving space for visible images](https://web.dev/articles/optimize-cls).

I confirmed 1200×630 PNG as the generated-image output default. Keep
this agreed output contract separate from the project-dependent image content
and layout. What belongs on the image depends on the
project. The editable design source should control that choice, using existing
page metadata as needed. A title-only or title-plus-description layout is not
universally agreed. The concrete sample design, font strategy, renderer and
dependency choice, and build-performance acceptance criteria remain to design
and measure. No generator implementation is approved by these decisions alone.

The principal trade-off is small developer configuration with predictable output,
rather than the fewest HTML tags that happened to work in the observed clients.
The proposed static text/identity tags add HTML bytes without requiring client
JavaScript or new packages. Social crawlers still fetch pages and images. The
proposed image generator has separate build/dependency costs that still need
measurement before its implementation design is accepted.

Sources for the contract and search distinctions:
[Open Graph protocol](https://ogp.me/) and
[Google canonical guidance](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls).
Keep documented contracts and observed compatibility as separate evidence.

## Decisions and experiments still needed

Use browser/mobile/DM observations to choose the metadata and icon defaults.
Keep documented platform contracts alongside observations. A canonical URL does
not by itself establish that a social client will use it for `og:url`, and an HTML
title/description does not establish an OG fallback on each target client.

Then compare a single minimal starter plus recipes with a family of focused
starters. For each capability, choose default, optional integration, documented
recipe or unsupported scope, and explain the removal path.

The broader review still includes layouts/CSS/tokens, SEO/indexing/sitemaps,
partially translated content, content validation and publishing, progressive
enhancement/accessibility, image/font/layout budgets, forms/backend boundaries,
host behavior, fresh-project checks/CI, updates and portable image/icon tooling.
Use small measured spikes where a build or dependency cost could change the choice.

Inspect any extraction source at reuse time and remove project-specific assumptions.
