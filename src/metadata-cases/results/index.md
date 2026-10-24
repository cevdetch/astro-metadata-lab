# Result record index

One record per fixture. Open the test URL from the website catalogue; these links
open the editable Markdown records in the repository.

| Case record | Where to test | Question |
| --- | --- | --- |
| [metadata/html-only](cases/metadata/html-only.md) | Social DM | Which consumers use HTML title, description and canonical without Open Graph? |
| [metadata/html-plus-og-image](cases/metadata/html-plus-og-image.md) | Social DM | Does adding only og:image preserve the desired preview? |
| [metadata/explicit-og](cases/metadata/explicit-og.md) | Social DM, HTTP | Reference: explicit Open Graph values equal HTML metadata. |
| [metadata/no-og-type](cases/metadata/no-og-type.md) | Social DM | Does removing og:type affect the chosen clients? |
| [metadata/no-og-url](cases/metadata/no-og-url.md) | Social DM | Does canonical substitute for og:url on each client? |
| [metadata/no-og-title](cases/metadata/no-og-title.md) | Social DM | Does HTML title substitute for og:title on each client? |
| [metadata/no-og-description](cases/metadata/no-og-description.md) | Social DM | Does HTML description substitute for og:description on each client? |
| [metadata/no-description](cases/metadata/no-description.md) | Social DM | How does an absent description behave? |
| [metadata/no-image](cases/metadata/no-image.md) | Social DM | What remains without any image metadata? |
| [metadata/empty-og-title](cases/metadata/empty-og-title.md) | Social DM | Does empty OG title prevent HTML title fallback? |
| [metadata/whitespace-og-title](cases/metadata/whitespace-og-title.md) | Social DM | Does whitespace OG title prevent fallback? |
| [metadata/conflicting-titles](cases/metadata/conflicting-titles.md) | Social DM | Which distinct HTML and OG title is selected? |
| [metadata/duplicate-og-title](cases/metadata/duplicate-og-title.md) | Social DM | Which duplicate OG title is selected? |
| [metadata/twitter-before-og](cases/metadata/twitter-before-og.md) | Social DM | Does a conflicting Twitter title before OG change selection? |
| [metadata/twitter-after-og](cases/metadata/twitter-after-og.md) | Social DM | Does a conflicting Twitter title after OG change selection? |
| [metadata/duplicate-twitter-values](cases/metadata/duplicate-twitter-values.md) | Social DM | Can identical Twitter fields be omitted? |
| [metadata/no-twitter-card](cases/metadata/no-twitter-card.md) | Social DM | What layout results without twitter:card? |
| [metadata/summary-card](cases/metadata/summary-card.md) | Social DM | How does summary differ from summary_large_image? |
| [metadata/image-without-dimensions](cases/metadata/image-without-dimensions.md) | Social DM | Can image dimensions be omitted without changing the result? |
| [metadata/image-relative](cases/metadata/image-relative.md) | Social DM | Which clients accept root-relative OG images? |
| [metadata/image-svg](cases/metadata/image-svg.md) | Social DM | Which clients accept an SVG social image? |
| [metadata/image-missing](cases/metadata/image-missing.md) | Social DM | How does an unavailable social image fail? |
| [metadata/escaped-text](cases/metadata/escaped-text.md) | Social DM | Are literal entities, quotes and angle brackets preserved? |
| [metadata/unicode-text](cases/metadata/unicode-text.md) | Social DM | Are accented, Greek, Cyrillic, CJK, Arabic and emoji text preserved? |
| [metadata/long-title](cases/metadata/long-title.md) | Social DM | What is truncated by each client, without an arbitrary build limit? |
| [metadata/image-without-alt](cases/metadata/image-without-alt.md) | Social DM | Is image alternative text exposed by the chosen clients? |
| [metadata/image-alt-twitter](cases/metadata/image-alt-twitter.md) | Social DM | Does Twitter image alternative text change accessibility in the X client? |
| [metadata/image-secure-url-duplicate](cases/metadata/image-secure-url-duplicate.md) | Social DM | Does repeating an HTTPS image as secure_url change anything? |
| [metadata/image-two-candidates](cases/metadata/image-two-candidates.md) | Social DM | Which image is chosen when two different OG images are advertised? |
| [metadata/image-fallback-candidate](cases/metadata/image-fallback-candidate.md) | Social DM | Does a valid second image rescue a missing first image? |
| [metadata/title-with-site-suffix](cases/metadata/title-with-site-suffix.md) | Social DM | Can a page title and a document title intentionally differ? |
| [metadata/og-locale-fr](cases/metadata/og-locale-fr.md) | Social DM | Does og:locale add useful client behavior beyond an explicit French document language? |
| [metadata/redundant-index-follow](cases/metadata/redundant-index-follow.md) | Social DM | Does explicitly advertising the default index,follow change anything? |
| [precedence/html-only](cases/precedence/html-only.md) | Social DM | HTML reference: A metadata and D body, without OG or Twitter tags. |
| [precedence/og-vs-html](cases/precedence/og-vs-html.md) | Social DM | Do clients choose OG B or HTML A? Red OG image; Twitter card type only. |
| [precedence/og-without-twitter](cases/precedence/og-without-twitter.md) | Social DM | Same OG B versus HTML A control, with no Twitter tags at all. |
| [precedence/twitter-vs-html](cases/precedence/twitter-vs-html.md) | Social DM | Do clients use Twitter C and its green image without any OG tags? |
| [precedence/all-fields](cases/precedence/all-fields.md) | Social DM | Which title, description and image win: HTML A, OG B/red, Twitter C/green, or body D? |
| [precedence/twitter-first](cases/precedence/twitter-first.md) | Social DM | Same conflicting fields as all-fields, with the complete Twitter block before OG. |
| [precedence/no-twitter-title](cases/precedence/no-twitter-title.md) | Social DM | Remove only Twitter title from all-fields. Does OG B or HTML A replace it? |
| [precedence/no-twitter-description](cases/precedence/no-twitter-description.md) | Social DM | Remove only Twitter description from all-fields. Does OG B, HTML A or body D replace it? |
| [precedence/no-twitter-image](cases/precedence/no-twitter-image.md) | Social DM | Remove only Twitter image from all-fields. Does the red OG image replace green? |
| [precedence/no-og-title](cases/precedence/no-og-title.md) | Social DM | Remove only OG title from all-fields; Twitter C and HTML A remain distinct. |
| [precedence/no-og-description](cases/precedence/no-og-description.md) | Social DM | Remove only OG description from all-fields; Twitter C, HTML A and body D remain distinct. |
| [precedence/no-og-image](cases/precedence/no-og-image.md) | Social DM | Remove the OG image and its structured properties; the green Twitter image remains. |
| [precedence/no-social-title](cases/precedence/no-social-title.md) | Social DM | Remove both social titles. Does the client use HTML A, body D or no title? |
| [precedence/no-social-description](cases/precedence/no-social-description.md) | Social DM | Remove both social descriptions. Does the client use HTML A, body D or no description? |
| [precedence/no-social-image](cases/precedence/no-social-image.md) | Social DM | Remove both social images and OG image properties; this page has no body image. |
| [precedence/og-no-title](cases/precedence/og-no-title.md) | Social DM | Remove OG title from og-vs-html, without a competing Twitter title. |
| [precedence/og-no-description](cases/precedence/og-no-description.md) | Social DM | Remove OG description from og-vs-html, without a competing Twitter description. |
| [precedence/og-no-image](cases/precedence/og-no-image.md) | Social DM | Remove the OG image and its properties from og-vs-html, without a Twitter image. |
| [precedence/twitter-no-title](cases/precedence/twitter-no-title.md) | Social DM | Remove Twitter title from twitter-vs-html. OG is absent; HTML A and body D remain. |
| [precedence/twitter-no-description](cases/precedence/twitter-no-description.md) | Social DM | Remove Twitter description from twitter-vs-html. OG is absent; HTML A and body D remain. |
| [precedence/twitter-no-image](cases/precedence/twitter-no-image.md) | Social DM | Remove Twitter image from twitter-vs-html. No OG or body image remains. |
| [precedence/empty-twitter-title](cases/precedence/empty-twitter-title.md) | Social DM | Is an empty Twitter title treated differently from an absent one? |
| [precedence/empty-twitter-description](cases/precedence/empty-twitter-description.md) | Social DM | Is an empty Twitter description treated differently from an absent one? |
| [precedence/empty-twitter-image](cases/precedence/empty-twitter-image.md) | Social DM | Is an empty Twitter image treated differently from an absent one? |
| [precedence/missing-twitter-image](cases/precedence/missing-twitter-image.md) | Social DM | Does a Twitter image returning 404 fall back to the valid red OG image? |
| [precedence/missing-og-image](cases/precedence/missing-og-image.md) | Social DM | Does a missing OG image fall back to the valid green Twitter image? |
| [precedence/empty-og-description](cases/precedence/empty-og-description.md) | Social DM | An empty OG description, without a Twitter description: HTML A, body D or empty? |
| [precedence/no-card](cases/precedence/no-card.md) | Social DM | All conflicting fields remain; only twitter:card is absent. |
| [precedence/summary-card](cases/precedence/summary-card.md) | Social DM | All conflicting fields remain; only the card type changes to summary. |
| [canonical/canonical-absent](cases/canonical/canonical-absent.md) | Social DM | Does a missing canonical affect social previews? |
| [canonical/canonical-relative](cases/canonical/canonical-relative.md) | Social DM | How is a relative canonical resolved? |
| [canonical/canonical-cross-origin](cases/canonical/canonical-cross-origin.md) | Social DM | Does a different canonical origin affect card identity or click target? |
| [canonical/canonical-duplicate](cases/canonical/canonical-duplicate.md) | Social DM | How do consumers resolve conflicting canonical links? |
| [canonical/base-element](cases/canonical/base-element.md) | Social DM | How does an HTML base element affect relative metadata URLs? |
| [canonical/tracking-query](cases/canonical/tracking-query.md) | Social DM | Does a tracking query reuse the canonical preview? |
| [canonical/canonical-clean](cases/canonical/canonical-clean.md) | Social DM | Reference for the intentional tracking-query alias. |
| [icons/icon-none](cases/icons/icon-none.md) | Browser | Is an implicit origin-root favicon requested? |
| [icons/icon-svg-only](cases/icons/icon-svg-only.md) | Browser | Does SVG alone work in tabs and bookmarks? |
| [icons/icon-ico-only](cases/icons/icon-ico-only.md) | Browser | Does a real single-entry ICO work alone? |
| [icons/ico-svg-no-sizes](cases/icons/ico-svg-no-sizes.md) | Browser | ICO before SVG without sizes. |
| [icons/svg-ico-no-sizes](cases/icons/svg-ico-no-sizes.md) | Browser | SVG before ICO without sizes. |
| [icons/ico32-svg](cases/icons/ico32-svg.md) | Browser | Accurate ICO sizes before SVG. |
| [icons/svg-ico32](cases/icons/svg-ico32.md) | Browser | Accurate ICO sizes after SVG. |
| [icons/ico-any-svg](cases/icons/ico-any-svg.md) | Browser | Negative conformance control: bitmap ICO advertised as scalable. |
| [icons/ico-false-size](cases/icons/ico-false-size.md) | Browser | Negative conformance control: single 32px ICO advertised as 16px. |
| [icons/ico-multiple](cases/icons/ico-multiple.md) | Browser | Real 16, 32 and 48px ICO entries with accurate sizes. |
| [icons/png-named-ico](cases/icons/png-named-ico.md) | Browser | PNG bytes with an .ico name, as found in the scaffold. |
| [icons/svg-responsive](cases/icons/svg-responsive.md) | Browser | Does an SVG favicon change with system light/dark preference? |
| [icons/svg-missing-fallback](cases/icons/svg-missing-fallback.md) | Browser | Does an unavailable preferred SVG fall back to ICO? |
| [icons/png32-png64](cases/icons/png32-png64.md) | Browser | Which bitmap size is used at different display densities? |
| [icons/svg-any](cases/icons/svg-any.md) | Browser | Does an accurate sizes=any on SVG change selection? |
| [icons/svg-type-omitted](cases/icons/svg-type-omitted.md) | Browser | Does omitting the correct SVG type hint change selection? |
| [icons/ico-type-explicit](cases/icons/ico-type-explicit.md) | Browser | Does adding the ICO type hint change selection? |
| [icons/png-equal-red-green](cases/icons/png-equal-red-green.md) | Browser | Tie control: two accurately described 32px PNGs, red then green. |
| [icons/png-equal-green-red](cases/icons/png-equal-green-red.md) | Browser | Tie control: the same equally suitable PNGs in reverse order. |
| [icons/apple-touch-icon](cases/icons/apple-touch-icon.md) | Browser | Which image is used when explicitly adding this page to an Apple home screen? |
| [head/charset-first](cases/head/charset-first.md) | Browser, Social DM | Reference: charset is serialized first. |
| [head/charset-after-ascii-padding](cases/head/charset-after-ascii-padding.md) | Browser, Social DM | Negative control: charset after the first 1024 bytes. |
| [head/charset-after-unicode-padding](cases/head/charset-after-unicode-padding.md) | Browser, Social DM | Negative control: character count under 1024 but byte count over it. |
| [head/metadata-after-invalid-head-element](cases/head/metadata-after-invalid-head-element.md) | Browser, Social DM | Does invalid head content move following metadata into body? |
| [head/metadata-in-noscript](cases/head/metadata-in-noscript.md) | Browser, Social DM | How do scripting-enabled and scripting-disabled HTML parsers differ? |
| [head/viewport-absent](cases/head/viewport-absent.md) | Browser | What layout viewport results on a mobile browser? |
| [head/viewport-with-initial-scale](cases/head/viewport-with-initial-scale.md) | Browser | Is initial-scale=1 observably different from width=device-width alone? |
| [theming/scheme-absent](cases/theming/scheme-absent.md) | Browser | Reference browser defaults without color-scheme. |
| [theming/scheme-meta-only](cases/theming/scheme-meta-only.md) | Browser | Does the meta declaration suffice for browser-native colors? |
| [theming/scheme-meta-and-css](cases/theming/scheme-meta-and-css.md) | Browser | Does repeating the declaration in CSS add useful behavior? |
| [theming/scheme-hardcoded-light](cases/theming/scheme-hardcoded-light.md) | Browser | Negative control: meta does not adapt hardcoded light CSS. |
| [theming/scheme-system-colors](cases/theming/scheme-system-colors.md) | Browser | Do Canvas and CanvasText follow system preference? |
| [theming/scheme-duplicate](cases/theming/scheme-duplicate.md) | Browser | Negative conformance control: duplicate color-scheme metadata. |
| [theming/theme-color-media](cases/theming/theme-color-media.md) | Browser, Social DM | Do browser selection and social-preview accent selection differ? |
| [manifest/manifest-disabled](cases/manifest/manifest-disabled.md) | Browser | No manifest link, despite static icon assets being available. |
| [manifest/manifest-enabled](cases/manifest/manifest-enabled.md) | Browser | Online-only manifest discovery and launch settings. |
| [manifest/manifest-relative](cases/manifest/manifest-relative.md) | Browser | Does a path-relative manifest resolve incorrectly on nested pages? |
| [manifest/manifest-duplicate](cases/manifest/manifest-duplicate.md) | Browser | Negative conformance control: multiple manifest links. |
| [json-ld/jsonld-unsafe](cases/json-ld/jsonld-unsafe.md) | Browser | Negative control: literal script end tag terminates raw JSON-LD. |
| [json-ld/jsonld-escaped](cases/json-ld/jsonld-escaped.md) | Browser | Does escaping less-than preserve JSON while preventing extra HTML? |
| [language/lang-en](cases/language/lang-en.md) | Browser, Social DM | Reference explicit document language. |
| [language/lang-fr-no-og-locale](cases/language/lang-fr-no-og-locale.md) | Browser, Social DM | French document without an extra og:locale declaration. |
| [language/lang-ar-rtl](cases/language/lang-ar-rtl.md) | Browser, Social DM | Explicit Arabic document language and direction. |
| [language/lang-mixed-content](cases/language/lang-mixed-content.md) | Browser, Social DM | Does an explicit language on an untranslated passage remain in the DOM? |
| [indexing/noindex-with-preview](cases/indexing/noindex-with-preview.md) | Social DM, HTTP | Search exclusion and social metadata are separate inputs. |
| [indexing/noindex-no-image](cases/indexing/noindex-no-image.md) | Social DM, HTTP | Noindex page without auto-generated image metadata. |
| [indexing/http-noindex](cases/indexing/http-noindex.md) | Social DM, HTTP | Can indexing protection be delivered as an HTTP header? |
| [indexing/error-404](cases/indexing/error-404.md) | Social DM, HTTP | Real 404 response without canonical or social image identity. |
| [indexing/redirect](cases/indexing/redirect.md) | Social DM, HTTP | Real redirect rather than a 200 HTML page. |
