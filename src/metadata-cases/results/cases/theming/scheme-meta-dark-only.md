# theming / scheme-meta-dark-only

What happens when the page declares support for dark alone?

Test on: Browser.

## Browser results

This control has one color-scheme meta tag with `content="dark"` and no author
CSS. Compare with `scheme-meta-dark-first`, which also supports light. Record
the actual page and native control appearance, including any light result in Tor.
Keep OS/browser mode, DevTools emulation and reported media-query values separate.

This restricts the declared schemes rather than expressing a preference order.
It does not add CSS `only dark`, a theme switcher or a privacy-setting change.
User-agent capabilities and overriding preferences can affect the outcome; see
[CSS color scheme resolution](https://drafts.csswg.org/css-color-adjust-1/#used-color-scheme).
Follow-up observations appear below.

| Run | Browser / device | Mode | Page background / text | Native controls | Chrome / initial paint | Status / notes |
| --- | --- | --- | --- | --- | --- | --- |
| B008 | Tor Browser Alpha / Android 17 | not reconfirmed | dark appearance; exact colors unreported | dark; input and button match the page | not reported | reported; Tor follow-up; mode, emulation and tested deployment not supplied; see test-run registry |
| B009 | Brave Origin / Arch Linux | not reconfirmed | dark appearance; exact colors unreported | not reported separately | not reported | reported; five-case follow-up; client setup inherited from B003; mode and tested deployment not supplied |
| B010 | Firefox / Arch Linux | not reconfirmed | dark appearance; exact colors unreported | not reported separately | not reported | reported; five-case follow-up; client setup inherited from B004; mode and tested deployment not supplied |
| B011 | Vanadium / Android 17 | not reconfirmed | dark appearance; exact colors unreported | not reported separately | not reported | reported; five-case follow-up; client setup inherited from B005; mode and tested deployment not supplied |
| B012 | Firefox / Arch Linux | requested light-mode follow-up; exact settings not restated | dark appearance; exact colors unreported | not reported separately | not reported | reported; client setup inherited from B004; tested URL/build and emulation not restated |
| B013 | Vanadium / Android 17 | requested light-mode follow-up; exact settings not restated | dark appearance; exact colors unreported | not reported separately | not reported | reported; client setup inherited from B005; tested URL/build and emulation not restated |
