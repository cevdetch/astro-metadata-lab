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
control. The table does not predict or record a browser outcome yet.

| Run | Browser / device | Mode | Page background / text | Native controls | Chrome / initial paint | Status / notes |
| --- | --- | --- | --- | --- | --- | --- |
| B003 | Brave Origin / Arch Linux | unknown | — | — | — | not tested |
| B004 | Firefox / Arch Linux | unknown | — | — | — | not tested |
| B005 | Vanadium / Android 17 | unknown | — | — | — | not tested |
| B006 | Tor Browser Alpha / Android 17 | unknown | — | — | — | not tested |
