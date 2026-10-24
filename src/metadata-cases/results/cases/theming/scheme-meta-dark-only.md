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
The table remains untested until client observations arrive.

| Run | Browser / device | Mode | Page background / text | Native controls | Chrome / initial paint | Status / notes |
| --- | --- | --- | --- | --- | --- | --- |
| B003 | Brave Origin / Arch Linux | unknown | — | — | — | not tested |
| B004 | Firefox / Arch Linux | unknown | — | — | — | not tested |
| B005 | Vanadium / Android 17 | unknown | — | — | — | not tested |
| B006 | Tor Browser Alpha / Android 17 | unknown | — | — | — | not tested |
