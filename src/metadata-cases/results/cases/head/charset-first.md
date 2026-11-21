# head / charset-first

Reference: charset is serialized first.

Test on: Browser, Social DM.

Record one row per run, mode and surface. Use the run ID from the results index.
Keep earlier rows when a rerun differs. Untested and no visible result are distinct.

## Browser results

Record the relevant rendered text/encoding, mobile layout viewport or parsed
DOM placement. For charset tests include the HTTP Content-Type/charset: it can
mask the effect of the HTML declaration. For noscript, record scripting enabled
and disabled separately. A normal-looking page does not establish conformance.

| Run | Browser / device | Scripting / viewport conditions | Displayed text / layout | Parsed DOM / encoding | Status / notes |
| --- | --- | --- | --- | --- | --- |
| B014 | Vanadium / Android 17; inherited requested context | mobile viewport batch; orientation and settings not restated | normal appearance; zoom: not reported; horizontal overflow unreported | not inspected | reported; mobile response to the requested Vanadium batch; viewport comparison only; tested URL/build unconfirmed |
| B015 | Brave Origin / Arch Linux; inherited from B003 | settings not restated; HTTP Content-Type: text/html; charset=utf-8 | normal text | document encoding: UTF-8; DOM placement not inspected | reported; all-browser charset batch; tested URL/build unconfirmed; HTTP charset prevents isolating HTML declaration position |
| B016 | Firefox / Arch Linux; inherited from B004 | settings not restated; HTTP Content-Type: text/html; charset=utf-8 | normal text | document encoding: UTF-8; DOM placement not inspected | reported; all-browser charset batch; tested URL/build unconfirmed; HTTP charset prevents isolating HTML declaration position |
| B017 | Vanadium / Android 17; inherited from B005 | settings not restated; HTTP Content-Type: text/html; charset=utf-8 | normal text | document encoding: UTF-8; DOM placement not inspected | reported; all-browser charset batch; tested URL/build unconfirmed; HTTP charset prevents isolating HTML declaration position |
| B018 | Tor Browser Alpha / Android 17; inherited from B006 | settings not restated; HTTP Content-Type: text/html; charset=utf-8 | normal text | document encoding: UTF-8; DOM placement not inspected | reported; all-browser charset batch; tested URL/build unconfirmed; HTTP charset prevents isolating HTML declaration position |


## Social DM results

Send the fixture URL, one per message. Record composer, sent and received views
as separate rows. Copy title and description independently; record absent,
truncated or unknown values. Record image/color, card layout and the destination
after tapping. A missing preview does not identify an ignored field.

| Run | Platform | Surface | Title | Description | Image | Layout / destination | Status / notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| — | LinkedIn | — | — | — | — | — | not tested |
| — | Discord | — | — | — | — | — | not tested |
| — | X | — | — | — | — | — | not tested |
| — | WhatsApp | — | — | — | — | — | not tested |
| — | Instagram | — | — | — | — | — | not tested |
| — | Facebook Messenger | — | — | — | — | — | not tested |
