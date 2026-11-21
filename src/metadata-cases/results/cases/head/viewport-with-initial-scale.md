# head / viewport-with-initial-scale

Is initial-scale=1 observably different from width=device-width alone?

Test on: Browser.

Record one row per run, mode and surface. Use the run ID from the results index.
Keep earlier rows when a rerun differs. Untested and no visible result are distinct.

## Browser results

Record the relevant rendered text/encoding, mobile layout viewport or parsed
DOM placement. For charset tests include the HTTP Content-Type/charset: it can
mask the effect of the HTML declaration. For noscript, record scripting enabled
and disabled separately. A normal-looking page does not establish conformance.

| Run | Browser / device | Scripting / viewport conditions | Displayed text / layout | Parsed DOM / encoding | Status / notes |
| --- | --- | --- | --- | --- | --- |
| B003 | Brave Origin / Arch Linux | unknown | — | — | not tested |
| B004 | Firefox / Arch Linux | unknown | — | — | not tested |
| B006 | Tor Browser Alpha / Android 17 | unknown | — | — | not tested |
| B014 | Vanadium / Android 17; inherited requested context | mobile viewport batch; orientation and settings not restated | normal appearance; zoom: not reported; horizontal overflow unreported | not inspected | reported; mobile response to the requested Vanadium batch; viewport comparison only; tested URL/build unconfirmed |
