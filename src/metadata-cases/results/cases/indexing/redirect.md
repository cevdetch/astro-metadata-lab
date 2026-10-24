# indexing / redirect

Real redirect rather than a 200 HTML page.

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

## HTTP results

Expected fixture response: 302. Use a GET without following redirects.
Record the exact requested URL and actual headers; the source panel shows a
control document and cannot verify this response.

| Run | Requested URL | Status | Content-Type | Robots / redirect | Notes / evidence |
| --- | --- | --- | --- | --- | --- |
| H002 | https://astro-metadata-lab.pages.dev/cases/indexing/redirect/ | 302 | text/plain;charset=UTF-8 | Resolved redirect URL: https://astro-metadata-lab.pages.dev/cases/metadata/explicit-og/ | User-pasted curl output, 2026-10-24; raw Location and robots headers not captured. |
| H003 | https://astro-metadata-lab.pages.dev/cases/indexing/redirect/ | 302 | text/plain;charset=UTF-8 | Resolved redirect URL: https://astro-metadata-lab.pages.dev/cases/metadata/explicit-og/ | User-pasted post-push probe, 2026-10-24; reported commit 886fe8b; raw Location and robots headers not captured. |
