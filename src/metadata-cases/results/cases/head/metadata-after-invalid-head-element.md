# head / metadata-after-invalid-head-element

Does invalid head content move following metadata into body?

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
| B005 | Vanadium / Android 17 | unknown | — | — | not tested |
| B006 | Tor Browser Alpha / Android 17 | unknown | — | — | not tested |
| B019 | Firefox / Arch Linux; inherited from B004 | Console inspection; settings not recorded | document.title: HTML title — metadata-after-invalid-head-element; visual tab title not separately reported | title=body; description=body; canonical=body; og-title=body (direct parents) | reported; pasted Console JSON; tested URL/build unconfirmed; other metadata elements and crawler behavior not inspected |
| B020 | Brave Origin / Arch Linux; inherited from B003 | Console inspection; settings not recorded | document.title: HTML title — metadata-after-invalid-head-element; visual tab title not separately reported | title=body; description=body; canonical=body; og-title=body (direct parents) | reported; pasted Console JSON; tested URL/build unconfirmed; other metadata elements and crawler behavior not inspected |


### Reported Console output

Firefox (B019) and Brave Origin (B020) returned the same JSON:

```json
{"title":"HTML title — metadata-after-invalid-head-element","parents":{"title":"body","description":"body","canonical":"body","og-title":"body"}}
```

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
