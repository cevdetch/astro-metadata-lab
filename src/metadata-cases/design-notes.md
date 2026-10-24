# Starter design direction

This file records the direction discussed so far. We still need to agree on the
complete written design, scope boundaries, acceptance criteria and incremental
implementation plan before implementing the starter.

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
