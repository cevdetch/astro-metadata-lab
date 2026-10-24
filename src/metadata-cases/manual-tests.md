# Client observation protocol

Use the published `/cases/` catalogue. Open the case itself for browser checks
and share that case's URL for social checks. Compare views are for inspecting
markup and layout. They carry their own noindex metadata and cannot substitute
for the case URL in a preview test.

## Start with one device

Use the stable production `/cases/` URL on the other device; localhost refers to
that device itself. After deploying the updated lab, `/cases/testing/` provides
clickable links for the first round. There is no need to test every combination
on every device at once.

1. Start with one available phone: Safari on iPhone/iPad or Chrome on Android.
   Record the device, OS and exact browser version. Later repeat on the other OS
   if available; leave unavailable combinations untested.
2. Open `icons/icon-svg-only`, `icons/icon-ico-only`, `icons/ico32-svg` and
   `icons/svg-ico32` as separate top-level pages. Record the icon in the tab
   switcher, bookmark or other visible surface. If that UI exposes no icon,
   record "not shown on this surface" rather than "unsupported".
3. Compare `theming/scheme-absent`, `theming/scheme-meta-only` and
   `theming/scheme-meta-and-css` in OS light mode, then dark mode. Reload after
   changing the OS setting. Record page background/text, input/button colors and
   browser toolbar color separately. Check `icons/svg-responsive` in both modes.
4. Treat saving a bookmark, adding to the home screen and launching an installed
   shortcut as separate actions. Use `icons/apple-touch-icon` and the manifest
   group for those checks after the first round. Record what the UI actually
   offers; the lab makes no offline-support claim.

## First social-DM round

For each of LinkedIn, Discord, X, WhatsApp, Instagram and Facebook Messenger,
send these five **case URLs**, one per message, to a consenting recipient or a
self-chat if the app provides one. Do not send the catalogue, Compare or HTML
source URL. Keep link-preview settings consistent and note if previews are disabled.

| Case under `/cases/precedence/` | What it distinguishes |
| --- | --- |
| `html-only/` | HTML metadata versus scraped body, without social tags |
| `og-vs-html/` | OG versus HTML; only the Twitter card type is also set |
| `twitter-vs-html/` | Twitter versus HTML, with no OG tags |
| `all-fields/` | HTML, OG and Twitter all compete |
| `twitter-first/` | Same competing fields, with Twitter before OG |

Record the composer preview before sending and the sent/received preview
separately. If only one side is available, say which one. Allow the app to finish
loading the preview and record the wait if it changes the result. A browser's
share sheet is another surface; it is not evidence of the receiving app's card.

The new precedence controls keep the candidate values fixed across URLs:

| Source | Title | Description | Image |
| --- | --- | --- | --- |
| HTML metadata | `HTML TITLE A` | `HTML DESCRIPTION A` | None |
| Open Graph | `OG TITLE B` | `OG DESCRIPTION B` | Red PNG |
| Twitter tags | `TWITTER TITLE C` | `TWITTER DESCRIPTION C` | Green PNG |
| Page body | `BODY HEADING D` | `BODY TEXT D` | None |

Copy the actual displayed values rather than assuming one source supplies the
whole card: a client may mix sources or omit the description. For truncation,
record the visible portion. If the image source cannot be distinguished, use
"unknown". The browser tab should still use the HTML title; this is a different
consumer from a messaging preview.

When the first round shows a preview, continue with the matching pairs:

- `all-fields` against `no-twitter-title`, `no-twitter-description` and
  `no-twitter-image`, then the corresponding `no-og-*` controls.
- `og-vs-html` against `og-no-title`, `og-no-description` and `og-no-image`.
  These test OG-to-HTML fallback without competing Twitter values.
- `twitter-vs-html` against `twitter-no-title`, `twitter-no-description` and
  `twitter-no-image`. These isolate Twitter fields when OG is absent.
- `no-social-title`, `no-social-description` and `no-social-image` remove the
  matching field from both social formats.
- Compare `empty-twitter-*` and `missing-twitter-image` with the absent-field
  controls. Compare `empty-og-description` with `og-no-description`, and
  `missing-og-image` with `no-og-image`. Empty and unavailable are different inputs.
- Compare `og-vs-html` with `og-without-twitter`, and `all-fields` with `no-card`
  and `summary-card`, to separate field selection from card layout.

The Open Graph protocol defines its own fields and array ordering:
[protocol](https://ogp.me/). Platform DM observations must be recorded separately;
the protocol does not promise how every messaging app renders a card. The former
X Cards markup documentation URL redirected to the general developer overview
when checked on 2026-10-24, so it is not current proof of X DM fallback behavior.

## Record evidence

For each observation, record:

- Group/ID, exact URL including query, deployment commit/build and date/time.
- Browser or app name and version, OS/version, device, light/dark preference,
  and desktop/mobile/web app surface.
- What you saw, a screenshot, and the HTTP response if it affects the result.
- Cache/profile conditions and whether you opened a fresh URL or reused one.

Send the browser/app and device details once, then case IDs and observations.
I will register the run in `results/sessions.md` and append rows to the per-case
tables in `results/cases/<group>/<id>.md`. The website publishes those tables at
`/cases/results/`; every catalogue entry has a Results link. The results folder's
README explains the testing order. `results/reporting.md` supplies icon labels
and copyable formats for each group; both hosted guides include those shortcuts.
For the first icon batch, use `astro`, `blue-circle` or `red-square` when you see
those appearances. Report a color without a shape if you cannot identify it.

Keep unknown details marked unknown. Record DM surface, displayed title,
description, image, card layout and click target separately. Keep an absent
preview as an observation; it does not prove the client ignored a particular tag.
The older browser/social JSON files remain initial snapshots; new reports go in
the result tables.

For a quick report, copy this for each case (or group cases with the same device
and app details):

```text
Device / OS version:
Browser or app / version:
Surface: browser tab / composer / sent DM / received DM / other
Date and deployment commit or build URL:
Case and exact shared URL:
Displayed title:
Displayed description:
Image: red / green / none / unknown
Card layout or visible icon:
Where tapping the link lands:
Light/dark setting and cache/retest notes:
Screenshot or other evidence:
```

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

The user-reported route probe on 2026-10-24 returned 200 for the explicit-OG page,
its exact `.txt` source, SVG, PNG and manifest, with the appropriate Content-Types.
The extensionless and slash-suffixed source variants returned 404; the redirect
returned 302 to the explicit-OG page. An earlier request to the exact `.txt` URL
returned the custom 404; its cause remains unknown and it was not reproduced in
the later probe. This verifies those reported responses, not all hosted cases or
client previews. Rerun `bash scripts/probe-deployment.sh` after a deployment.

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
