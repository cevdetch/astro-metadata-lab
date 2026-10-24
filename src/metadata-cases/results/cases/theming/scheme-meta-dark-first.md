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
This describes the experiment, not a recorded browser outcome.

| Run | Browser / device | Mode | Page background / text | Native controls | Chrome / initial paint | Status / notes |
| --- | --- | --- | --- | --- | --- | --- |
| B003 | Brave Origin / Arch Linux | unknown | — | — | — | not tested |
| B004 | Firefox / Arch Linux | unknown | — | — | — | not tested |
| B005 | Vanadium / Android 17 | unknown | — | — | — | not tested |
| B006 | Tor Browser Alpha / Android 17 | unknown | — | — | — | not tested |
