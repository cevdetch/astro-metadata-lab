# theming / scheme-meta-dark-first

Does reversing the supported schemes to dark light change the selected appearance?

Test on: Browser.

## Browser results

This control has one color-scheme meta tag with `content="dark light"` and no
author CSS. Compare with `scheme-meta-only` (`light dark`) and
`scheme-meta-dark-only` (`dark`). Record the actual page and native control
appearance, the OS/browser mode and any DevTools emulation separately.

The first supported value is the fallback when no preference is available; a
supported expressed preference takes priority over list order. Tor's light
appearance alone does not establish which preference it exposes. See
[CSS color scheme resolution](https://drafts.csswg.org/css-color-adjust-1/#used-color-scheme).
Follow-up observations appear below; exposed media-query values remain
unmeasured.

| Run | Browser / device | Mode | Page background / text | Native controls | Chrome / initial paint | Status / notes |
| --- | --- | --- | --- | --- | --- | --- |
| B003 | Brave Origin / Arch Linux | unknown | — | — | — | not tested |
| B004 | Firefox / Arch Linux | unknown | — | — | — | not tested |
| B005 | Vanadium / Android 17 | unknown | — | — | — | not tested |
| B006 | Tor Browser Alpha / Android 17 | unknown | — | — | — | not tested |
| B008 | Tor Browser Alpha / Android 17 | not reconfirmed | light appearance; exact colors unreported | light; input and button match the page | not reported | reported; Tor follow-up; mode, emulation and tested deployment not supplied; see test-run registry |
| B009 | Brave Origin / Arch Linux | not reconfirmed | dark appearance; exact colors unreported | not reported separately | not reported | reported; five-case follow-up; client setup inherited from B003; mode and tested deployment not supplied |
| B010 | Firefox / Arch Linux | not reconfirmed | dark appearance; exact colors unreported | not reported separately | not reported | reported; five-case follow-up; client setup inherited from B004; mode and tested deployment not supplied |
| B011 | Vanadium / Android 17 | not reconfirmed | dark appearance; exact colors unreported | not reported separately | not reported | reported; five-case follow-up; client setup inherited from B005; mode and tested deployment not supplied |
| B012 | Firefox / Arch Linux | requested light-mode follow-up; exact settings not restated | light appearance; exact colors unreported | not reported separately | not reported | reported; client setup inherited from B004; tested URL/build and emulation not restated |
| B013 | Vanadium / Android 17 | requested light-mode follow-up; exact settings not restated | light appearance; exact colors unreported | not reported separately | not reported | reported; client setup inherited from B005; tested URL/build and emulation not restated |
