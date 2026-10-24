# Browser test table

Fill this file and return it. Each empty input/result cell contains two spaces.
Shared versions and the target deployment live in [sessions.md](sessions.md);
labels and result formats live in [reporting.md](reporting.md). Use the
[catalogue](https://astro-metadata-lab.pages.dev/cases/) to open each test page.
Section names identify the case group; column names identify its case IDs.

After a deployment change, preserve the existing rows. Add a temporary row such
as `B006/<new-short-SHA>` for the new batch and give the full commit once;
I will register a new run ID using B006's client setup and any stated changes.
Do not overwrite an earlier deployment's observation. The
[next-batch checklist](README.md#next-deployment-and-test-batch) lists the priorities.

## Proposed output standard

Keep one observation per cell. Icons accept a visual label; other groups use
`key=value; key=value`. The fields and examples appear beside each group below.
All examples illustrate syntax only; they are not expected or recorded results.

- Blank: no result supplied yet. Keep an untouched cell's two spaces.
- `none`: you checked and the named surface/field showed nothing.
- `not tested`: you did not perform that particular check.
- `unknown`: you checked but cannot identify the value.
- `other:description`: a visible result outside the suggested vocabulary.
- `error:message`: loading or an action failed; include its message or URL.

Use relevant fields; omitted fields stay unreported. Add `note=...` for context.
Use a semicolon between fields, keep a cell on one line, and escape a literal
pipe as `\|`. Copy visible text exactly; quote text containing semicolons or a
literal word such as "none". Use inline code for literal HTML/entity text so
Markdown does not reinterpret it. Add `evidence=<file or reference>` for an
optional screenshot. We will record observations without turning a negative
control into a general pass/fail claim.

Define the browsers once; the matrices use only their run IDs:

| Run | Browser | OS |
| --- | --- | --- |
| B003 | Brave Origin | Arch Linux |
| B004 | Firefox | Arch Linux |
| B005 | Vanadium | Android 17 |
| B006 | Tor Browser Alpha | Android 17 |

## Batch settings

Record the shared conditions once. Note exceptions in the affected result cell.
For Tor, include its security level if known.

Write `light` or `dark` for mode; `tab`, `tab-switcher`, `bookmark` or `home-screen`
for icon surface. Describe the profile as normal, fresh or private, plus relevant
overrides. Leave details unknown when you cannot identify them. Per-cell settings
override this shared context; name the exception with `surface=...` or `note=...`.

| Run | Mode outside theming tests | Icon surface | Profile / settings |
|---|---|---|---|
| B003 | dark | tab | private |
| B004 | dark | tab | private |
| B005 | dark | tab-switcher | private |
| B006 | dark | tab-switcher | private |

For another surface, action or rerun, copy the affected row with a descriptive
suffix such as `B005/bookmark`. Keep the earlier observation. Paired light/dark
or scripting-on/off fields within a cell are described in the relevant groups.

## Icons

Group: `icons`.

**Write:** `astro`, `blue-circle`, `red-square`, `green-square`, `blue-square`,
`yellow-circle`, `none`, `unknown` or `other:description`. Observe the displayed
icon on the stated surface, independently of any downloaded file.

**Example cell:** `blue-circle`.

For `svg-responsive`, write both modes: `light=blue-circle; dark=yellow-circle`.
For a change during loading/reload, write
`initial=astro; after-reload=blue-circle`. These remain format examples.
For a home-screen check such as `apple-touch-icon`, name the action and result:
`surface=home-screen; offered=yes; icon=red-square`. If you did not save the page,
leave its home-screen result `not tested`. Appearance does not identify ICO/PNG
format, the selected URL or a bitmap size.

| Run | icon-none | icon-svg-only | icon-ico-only | ico-svg-no-sizes | svg-ico-no-sizes | ico32-svg | svg-ico32 | ico-any-svg | ico-false-size | ico-multiple | png-named-ico | svg-responsive | svg-missing-fallback | png32-png64 | svg-any | svg-type-omitted | ico-type-explicit | png-equal-red-green | png-equal-green-red | apple-touch-icon |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| B003 | astro | blue-circle | red-square | blue-circle | red-square | blue-circle | blue-circle | blue-circle | red-square | red-square | red-square | yellow-circle | red-square | green-square | blue-circle | blue-circle | blue-circle | green-square | red-square | blue-circle |
| B004 | astro | blue-circle | red-square | blue-circle | blue-circle | blue-circle | blue-circle | blue-circle | red-square | red-square | red-square | yellow-circle | none | green-square | blue-circle | blue-circle | blue-circle | green-square | red-square | blue-circle |
| B005 | astro | blue-circle | red-square | blue-circle | red-square | red-square | red-square | red-square | red-square | red-square | red-square | yellow-circle | red-square | blue-square | blue-circle | red-square | red-square | green-square | red-square | red-square |
| B006 | red-square | blue-circle | unknown:blue-square "1" written inside | blue-circle | blue-circle | red-square | red-square | red-square | red-square | red-square | blue-circle | red-square | blue-square | blue-square | blue-circle | red-square | red-square | green-square | green-square | red-square |

## Theming (light mode)

Group: `theming`.

### Theme cell format

Observe the page and native input/button separately from browser chrome.
Use `page-bg=<color>; text=<color>; controls=<appearance>; toolbar=<color>;
flash=<value>`. Plain color names or measured hex values are both useful.
Use `appearance=light` or `dark` for an overall impression when exact colors or
individual control details were not reported. Omitted fields stay unreported.
Controls can be `light`, `dark`, `mixed` or a short description. Use `none` for
an absent toolbar surface. For first paint, use `seen`, `not seen` or
`not tested`; add the transient color if you saw a flash. Use `unknown` when
the observation is inconclusive.

**Example cell:** `page-bg=white; text=black; controls=light; toolbar=none; flash=not tested`.
Record the light and dark tables independently. If you compare toolbar colors,
describe the actual color; use `unchanged` only after comparing a named reference.

The meta-only order controls are `scheme-meta-only` (`light dark`),
`scheme-meta-dark-first` (`dark light`) and `scheme-meta-dark-only` (`dark`).
Each has one declaration and no author CSS. Compare the first two to test order;
compare the last two to test offering dark alone. The
[CSS resolution rules](https://drafts.csswg.org/css-color-adjust-1/#used-color-scheme)
give a supported expressed preference priority over list order.

The invalid duplicate pair is `scheme-duplicate` (`light dark` then `dark`) and
`scheme-duplicate-dark-first` (`dark` then `light dark`). This reverses actual
meta tags; it is a separate comparison from ordering words in a single tag.

Keep DevTools emulation separate from the real OS/browser mode. Add
`emulation=light`, `dark`, `none` or `unknown` when relevant. If you inspect
media-query matches, record `mq-light=true/false; mq-dark=true/false` alongside
the observed appearance; leave them unreported when unmeasured. You can inspect
them in the Console without adding client JavaScript to the fixture:

```js
({
  light: matchMedia('(prefers-color-scheme: light)').matches,
  dark: matchMedia('(prefers-color-scheme: dark)').matches,
})
```

Take the first observation without emulation. Label any later emulated result
as a separate row, such as `B003/emulated-light`. A light page in Tor does not
alone establish its media-query results or why it chose that appearance.

| Run | scheme-absent | scheme-meta-only | scheme-meta-dark-first | scheme-meta-dark-only | scheme-meta-and-css | scheme-hardcoded-light | scheme-system-colors | scheme-duplicate | scheme-duplicate-dark-first | theme-color-media |
|---|---|---|---|---|---|---|---|---|---|---|
| B003 |  |  |  |  |  |  |  |  |  |  |
| B004 |  |  |  |  |  |  |  |  |  |  |
| B005 |  |  |  |  |  |  |  |  |  |  |
| B006 |  |  |  |  |  |  |  |  |  |  |

## Theming (dark mode)

Group: `theming`.

Use the [theme cell format](#theme-cell-format), with the OS/browser appearance
set to dark. Record the colors you see, including a light page if that occurs.

The seven original columns contain the user's 2026-10-24 group report. Tor's
light appearance is the stated exception to the other browsers. Exact palettes,
first paint and unreported control details remain unmeasured. The DevTools light
switch was not assigned to a browser, so it does not fill the light-mode table.
The three new control columns remain blank pending observations.

| Run | scheme-absent | scheme-meta-only | scheme-meta-dark-first | scheme-meta-dark-only | scheme-meta-and-css | scheme-hardcoded-light | scheme-system-colors | scheme-duplicate | scheme-duplicate-dark-first | theme-color-media |
|---|---|---|---|---|---|---|---|---|---|---|
| B003 | appearance=light; note=browser defaults | appearance=dark |  |  | appearance=dark; note=same as meta-only | page-bg=white; text=black; controls=not matching page | appearance=dark; note=follows preference | appearance=dark |  | appearance=dark; note=no visible browser UI color change; comparison reference unspecified |
| B004 | appearance=light; note=browser defaults | appearance=dark |  |  | appearance=dark; note=same as meta-only | page-bg=white; text=black; controls=not matching page | appearance=dark; note=follows preference | appearance=dark |  | appearance=dark; note=no visible browser UI color change; comparison reference unspecified |
| B005 | appearance=light; note=browser defaults | appearance=dark |  |  | appearance=dark; note=same as meta-only | page-bg=white; text=black; controls=not matching page | appearance=dark; note=follows preference | appearance=dark |  | appearance=dark; note=no visible browser UI color change; comparison reference unspecified |
| B006 | appearance=light | appearance=light |  |  | appearance=light | appearance=light; page-bg=white; text=black | appearance=light | appearance=light |  | appearance=light; note=no visible browser UI color change; comparison reference unspecified |

## Head and viewport

Group: `head`.

Use the fields relevant to the column:

- Charset cases: `text=normal`, `garbled` or `missing-glyphs`; `encoding=<inspected
  document encoding>`; `http-charset=<response charset>`. An HTTP charset can mask
  the effect of an HTML charset declaration; keep uninspected values `not tested`.
- Invalid head content: `title=<visible tab title>; metadata-location=<head/body/mixed>`.
  Inspect the parsed DOM for the latter and add `note=<which tags you checked>`.
  Raw source alone cannot establish their parsed location.
- Noscript: `on-title=<tab title with scripting on>; off-title=<tab title with
  scripting off>`. Use `not tested` for a setting you did not try.
- Viewport cases: `orientation=portrait` or `landscape`; `layout=<what fits,
  overflows or looks different>`; `zoom=<initial appearance or gesture result>`.
  Add `width=<CSS pixels>` only if measured.

**Example charset cell:** `text=normal; encoding=UTF-8; http-charset=not tested`.
**Example viewport cell:** `orientation=portrait; layout=tiny text; zoom=zoomed out; width=not tested`.

| Run | charset-first | charset-after-ascii-padding | charset-after-unicode-padding | metadata-after-invalid-head-element | metadata-in-noscript | viewport-absent | viewport-with-initial-scale |
|---|---|---|---|---|---|---|---|
| B003 |  |  |  |  |  |  |  |
| B004 |  |  |  |  |  |  |  |
| B005 |  |  |  |  |  |  |  |
| B006 |  |  |  |  |  |  |  |

## Language

Group: `language`.

Write `text=<normal/garbled/missing-glyphs>; direction=<ltr/rtl/mixed>;
document-lang=<inspected code>`. In `lang-mixed-content`, add
`passage-lang=<inspected code>` for the marked passage. Use `not tested` for
attributes you did not inspect; visual appearance does not identify them.

Accessibility is optional here: add `a11y=not tested`, or describe the keyboard
action or screen-reader announcement. Name the assistive technology/settings in
`note=...`; do not infer pronunciation from the language attribute.

**Example cell:** `text=normal; direction=rtl; document-lang=ar; a11y=not tested`.

| Run | lang-en | lang-fr-no-og-locale | lang-ar-rtl | lang-mixed-content |
|---|---|---|---|---|
| B003 |  |  |  |  |
| B004 |  |  |  |  |
| B005 |  |  |  |  |
| B006 |  |  |  |  |

## Manifest and installation

Group: `manifest`.

Write `action=<bookmark/add-home-screen/install/launch>; offered=<yes/no>;
result=<completed/cancelled/error>; icon=<visual label>; name=<visible name>;
launch-url=<actual URL>; display=<browser/standalone/unknown>;
prior-install=<yes/no/unknown>`. Use `not tested` for an action you did not try.
If no UI was offered, record `offered=no` and leave its launch details `not tested`.

**Example cell:** `action=install; offered=no; result=not tested; icon=not tested; launch-url=not tested; prior-install=unknown`.

For multiple actions, copy the browser row with a descriptive suffix such as
`B005/bookmark` or `B005/launch`; do not overwrite the earlier action. Installed
controls share an app ID/start URL, so record prior installations and profile
changes. These observations cover online launch.

| Run | manifest-disabled | manifest-enabled | manifest-relative | manifest-duplicate |
|---|---|---|---|---|
| B003 |  |  |  |  |
| B004 |  |  |  |  |
| B005 |  |  |  |  |
| B006 |  |  |  |  |

## JSON-LD

Group: `json-ld`.

These are DevTools checks. Write `js=<on/off>; json=<valid/invalid>;
extra-img=<present/absent>; request=<seen/not seen>; flag=<runtime value>`.
Inspect the JSON-LD parse result, the extra injected image in the DOM, its
Network request and the value of `window.fixtureInjection` independently.
Runtime flag values can be `true`, `false` or `undefined`; leave checks you did
not perform `not tested`, and use `unknown` for inconclusive observations.

**Example cell:** `js=on; json=valid; extra-img=absent; request=not tested; flag=undefined`.
An unset flag alone does not prove that JSON parsed or that no HTML was injected.

On a desktop browser, open each fixture itself and run these Console checks
separately:

- Parse its script text with
  `JSON.parse(document.querySelector('script[type="application/ld+json"]').textContent)`.
  Record `json=valid` for a successful parse or `json=invalid` for a JSON syntax
  error. Record a different error literally rather than calling it invalid JSON.
- Inspect `document.querySelector('img[src="/unintended-request.png"]')` for the
  extra element, and read `window.fixtureInjection` for the runtime flag.
- Open Network, filter for `unintended-request.png` and reload. Record whether
  the request appears. Keep this separate from the element and flag results.

Mobile browsers without inspection tools can leave this group `not tested`.

| Run | jsonld-unsafe | jsonld-escaped |
|---|---|---|
| B003 |  |  |
| B004 |  |  |
| B005 |  |  |
| B006 |  |  |

Edit these matrices once. When you return them, I will reconcile the observations
with the detailed case records; you do not need to copy results into both places.
