# indexing / error-404

Real 404 response without canonical or social image identity.

Test on: Social DM, HTTP.

Record one row per run, mode and surface. Use the run ID from the results index.
Keep earlier rows when a rerun differs. Untested and no visible result are distinct.

## Social DM results

Send the fixture URL, one per message. Record composer, sent and received views
as separate rows. Copy title and description independently; record absent,
truncated or unknown values. Record image/color, card layout and the destination
after tapping. A missing preview does not identify an ignored field.

| Run | Platform | Surface | Title | Description | Image | Layout / destination | Status / notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| — | LinkedIn | — | — | — | — | — | not tested |
| — | X | — | — | — | — | — | not tested |
| — | Facebook Messenger | — | — | — | — | — | not tested |
| S047 | LinkedIn | inspector | no card | no card | no card | no card / destination unreported | preview=none; H004 separately confirms 404; reason for missing card not established |
| S048 | Molly | not recorded | no card | no card | no card | no card / destination unreported | preview=none; H004 separately confirms 404; reason for missing card not established |
| S049 | Discord | not recorded | no card | no card | no card | no card / destination unreported | preview=none; H004 separately confirms 404; reason for missing card not established |
| S050 | Instagram | not recorded | present; not quoted | present; not quoted | unreported | layout unreported / destination unreported | preview=card; H004 separately confirms 404; displayed strings/image not recorded |
| S051 | WhatsApp | not recorded | no card | no card | no card | no card / destination unreported | preview=none; H004 separately confirms 404; reason for missing card not established |


## HTTP results

Expected fixture response: 404. Use a GET without following redirects.
Record the exact requested URL and actual headers; the source panel shows a
control document and cannot verify this response.

| Run | Requested URL | Status | Content-Type | Robots / Location | Notes / evidence |
| --- | --- | --- | --- | --- | --- |
| H004 | https://astro-metadata-lab.pages.dev/cases/indexing/error-404/ | 404 | text/html; charset=utf-8 | Location and X-Robots-Tag absent in captured headers | Cache-Control no-store; Date 2026-10-24 15:35:15 GMT; body not captured; evidence http/h004-headers.txt |
