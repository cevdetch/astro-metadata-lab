# Client observation protocol

Use the published `/cases/` catalogue. Open the case itself for browser checks
and share that case's URL for social checks. Compare views are for inspecting
markup and layout. They carry their own noindex metadata and cannot substitute
for the case URL in a preview test.

## Record evidence

For each observation, record:

- Group/ID, exact URL including query, deployment commit/build and date/time.
- Browser or app name and version, OS/version, device, light/dark preference,
  and desktop/mobile/web app surface.
- What you saw, a screenshot, and the HTTP response if it affects the result.
- Cache/profile conditions and whether you opened a fresh URL or reused one.

Use `browser-observations.json` for browser reports. For social reports, create a
separate `social-observations.json` with the same evidence fields plus platform,
DM surface, displayed title, description, image, card layout and click target.
Leave unknown fields null. Keep an absent preview as an observation; it does not
prove the client ignored a particular tag.

## Browser and mobile checks

Start with Brave and Firefox on desktop, Safari on iOS and Chrome on Android.
Add other available browser/OS combinations and record their versions rather
than assuming they share behavior.

1. Compare `icons/ico32-svg` with `icons/svg-ico32`, then the omitted-size pairs.
   Observe the displayed tab icon, not only a fetched file in the Network panel.
2. Test `ico-any-svg`, `ico-false-size`, `ico-multiple`, `png-named-ico`,
   `svg-any`, `svg-type-omitted`, `svg-missing-fallback` and the reversed equal-PNG
   pairs. Keep invalid size/type controls separate from conforming candidates.
3. Test `icon-none` for implicit root discovery, `apple-touch-icon` for saved/home
   screen surfaces where available, and manifest enabled/disabled for installation
   or launch behavior that the browser exposes. No case promises offline access.
4. Test the theming group in OS light and dark mode. Record page background,
   text, native controls, initial paint and browser chrome separately. Test the
   responsive SVG icon in both modes too.
5. Inspect the head and viewport groups on mobile. For charset cases, record
   response Content-Type/charset as well: HTTP encoding information can affect the
   result. The late-Unicode control crosses 1024 UTF-8 bytes despite fewer than
   1024 JavaScript string characters.
6. Inspect language/RTL rendering and the declared document language. An OG locale
   value and HTML `lang` serve different consumers; neither translates content.

Browser favicon caches can survive reloads. Repeat surprising results in a clean
test profile or after clearing that site's icon cache, and record that change.
Do not treat two blue icons as proof that SVG wins regardless of sizes or order.
The HTML standard defines suitability by type, media and size, with order breaking
equal suitability: [icon selection](https://html.spec.whatwg.org/multipage/links.html#rel-icon).

## Social previews in direct messages

Test LinkedIn, Discord, X, WhatsApp, Instagram and Facebook direct messages
separately. Record the app/web surface and recipient view where available.
Acceptance means observing the supported preview surface, including clients that
choose to show no preview. Documentation alone cannot establish DM behavior.

1. Send `metadata/explicit-og` as the reference. Confirm the hosted image loads
   without authentication and the receiver can follow the link.
2. Send `html-only`, `html-plus-og-image`, `no-og-title`, `no-og-description`,
   `no-og-url` and `no-og-type`. Record which values and image, if any, appear.
3. Send conflicting/duplicate/empty titles and the Twitter-before/after cases to
   distinguish fallback rules from precedence. Test `no-twitter-card`,
   `summary-card`, and `duplicate-twitter-values` for layout and field differences.
4. Test missing images, relative URLs, SVG images, multiple image candidates,
   image dimensions/alt, escaped text, Unicode and long titles. Record truncation
   separately from value selection.
5. Test the canonical group, including the tracking-query link supplied by the
   catalogue. Record both the preview's displayed identity and its click target.
6. Test noindex cases, the HTTP-only noindex case, redirect and missing-page case
   after confirming their hosted status/headers.

Clients may cache both HTML and images. A query suffix is an attempted refresh,
not proof of a fresh scrape. For a decisive rerun, add a new case ID/image filename,
rebuild and record the new URL. Keep canonical/cache experiments identifiable as
such. Preserve evidence from both successful and failed previews.

## Hosted HTTP checks

Run these against the production deployment after replacing the example origin:

```sh
curl -sS -o /dev/null -D - https://example.com/cases/indexing/http-noindex/
curl -sS -o /dev/null -D - https://example.com/cases/indexing/error-404/
curl -sS -o /dev/null -D - https://example.com/cases/indexing/redirect/
curl -sS -o /dev/null -D - https://example.com/cases/metadata/explicit-og/
curl -sS -o /dev/null -D - https://example.com/cases/assets/social-red.png
```

Expect noindex on the first control, status 404 on the second, status 302 plus
Location on the third, and successful HTML/image responses for the references.
These commands use GET without following redirects. Also test an arbitrary missing
URL: it should return the custom 404 rather than the homepage with status 200.

Cloudflare preview deployments add noindex independently of the fixture. Use the
production URL for isolated indexing checks. Neither the private source repository
nor noindex provides access control for the published test pages.

## Decide from results

Mark each case as prepared, structurally checked, observed on a named client, or
unresolved. Do not label a field redundant because one client omits it, or an icon
unnecessary because one browser chose another candidate.

Once observations cover the intended clients, compare the same page with and
without each candidate field. Measure raw/gzip/Brotli bytes on identical content,
then weigh the measured saving against lost preview behavior, documented contracts
and the cost of keeping the field. Current different case IDs/titles are useful for
identification; their whole-file size difference is not a controlled field-size
measurement.
