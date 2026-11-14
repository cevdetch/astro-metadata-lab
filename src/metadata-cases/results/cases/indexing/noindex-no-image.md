# indexing / noindex-no-image

Noindex page without auto-generated image metadata.

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
| — | Discord | — | — | — | — | — | not tested |
| — | X | — | — | — | — | — | not tested |
| — | WhatsApp | — | — | — | — | — | not tested |
| — | Instagram | — | — | — | — | — | not tested |
| — | Facebook Messenger | — | — | — | — | — | not tested |
| S037 | LinkedIn | requested inspector; not restated | not separately restated | none; prior explicit LinkedIn correction retained | none | card present; exact layout unreported / destination not tested | preview=card; grouped manual report; no search-indexing or HTTP-header conclusion |
| S038 | Molly | not restated | not separately restated | not separately restated | none | card present; exact layout unreported / destination not tested | preview=card; grouped manual report; no search-indexing or HTTP-header conclusion |
| S039 | Discord | not restated | not separately restated | not separately restated | none | card present; exact layout unreported / destination not tested | preview=card; grouped manual report; no search-indexing or HTTP-header conclusion |
| S040 | Instagram | not restated | not separately restated | not separately restated | none | card present; exact layout unreported / destination not tested | preview=card; grouped manual report; no search-indexing or HTTP-header conclusion |
| S041 | WhatsApp | not restated | not separately restated | not separately restated | none | card present; exact layout unreported / destination not tested | preview=card; grouped manual report; no search-indexing or HTTP-header conclusion |


## HTTP results

Expected fixture response: 200. Use a GET without following redirects.
Record the exact requested URL and actual headers; the source panel shows a
control document and cannot verify this response.

| Run | Requested URL | Status | Content-Type | Robots / Location | Notes / evidence |
| --- | --- | --- | --- | --- | --- |
| — | — | — | — | — | not tested |
