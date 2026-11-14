# theming / scheme-duplicate-dark-first

Negative control: reverse the duplicate tags to dark, then light dark.

Test on: Browser.

## Browser results

This reverses the two tags in `scheme-duplicate`: `dark` comes first and
`light dark` second. Compare with that case and `scheme-meta-dark-only`, which
has only the first tag. No author CSS is present. Record page appearance and
native controls independently, with actual OS/browser mode and any emulation.

The [HTML processing rules](https://html.spec.whatwg.org/multipage/semantics.html#meta-color-scheme)
select the first valid declaration. Duplicate tags remain an invalid authoring
control. Follow-up observations appear below; their OS/browser mode and emulation
were not reconfirmed.

| Run | Browser / device | Mode | Page background / text | Native controls | Chrome / initial paint | Status / notes |
| --- | --- | --- | --- | --- | --- | --- |
| B003 | Brave Origin / Arch Linux | unknown | — | — | — | not tested |
| B004 | Firefox / Arch Linux | unknown | — | — | — | not tested |
| B005 | Vanadium / Android 17 | unknown | — | — | — | not tested |
| B006 | Tor Browser Alpha / Android 17 | unknown | — | — | — | not tested |
| B008 | Tor Browser Alpha / Android 17 | not reconfirmed | dark appearance; exact colors unreported | dark; input and button match the page | not reported | reported; Tor follow-up; mode, emulation and tested deployment not supplied; see test-run registry |
| B009 | Brave Origin / Arch Linux | not reconfirmed | dark appearance; exact colors unreported | not reported separately | not reported | reported; five-case follow-up; client setup inherited from B003; mode and tested deployment not supplied |
| B010 | Firefox / Arch Linux | not reconfirmed | dark appearance; exact colors unreported | not reported separately | not reported | reported; five-case follow-up; client setup inherited from B004; mode and tested deployment not supplied |
| B011 | Vanadium / Android 17 | not reconfirmed | dark appearance; exact colors unreported | not reported separately | not reported | reported; five-case follow-up; client setup inherited from B005; mode and tested deployment not supplied |
