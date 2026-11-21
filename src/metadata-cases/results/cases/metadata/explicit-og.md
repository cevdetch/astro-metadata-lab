# metadata / explicit-og

Reference: explicit Open Graph values equal HTML metadata.

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
| S022 | Molly | not restated | matches fixture text; not quoted | matches fixture text; not quoted | reference appearance; color not restated | reported summary_large_image / destination not tested | no problems reported relative to reference; image color/domain not restated; text source not identified |
| S023 | Instagram | not restated | matches fixture text; not quoted | matches fixture text; not quoted | reference appearance; color not restated | reported summary_large_image / destination not tested | no problems reported relative to reference; image color/domain not restated; text source not identified |
| S024 | WhatsApp | not restated | matches fixture text; not quoted | matches fixture text; not quoted | reference appearance; color not restated | reported summary_large_image / destination not tested | no problems reported relative to reference; image color/domain not restated; text source not identified |
| S025 | Discord | not restated | matches fixture text; not quoted | matches fixture text; not quoted | reference appearance; color not restated | reported summary_large_image / destination not tested | no problems reported relative to reference; image color/domain not restated; text source not identified |
| S026 | LinkedIn | inspector | matches fixture text; not quoted | none; prior explicit LinkedIn correction retained | reference appearance; color not restated | reported summary_large_image / destination not tested | no problems reported relative to reference; image color/domain not restated; text source not identified |


## HTTP results

Expected fixture response: 200. Use a GET without following redirects.
Record the exact requested URL and actual headers; the source panel shows a
control document and cannot verify this response.

| Run | Requested URL | Status | Content-Type | Robots / Location | Notes / evidence |
| --- | --- | --- | --- | --- | --- |
| H002 | https://astro-metadata-lab.pages.dev/cases/metadata/explicit-og/ | 200 | text/html; charset=utf-8 | not captured by probe | Manual curl output, 2026-10-24. |
| H003 | https://astro-metadata-lab.pages.dev/cases/metadata/explicit-og/ | 200 | text/html; charset=utf-8 | not captured by probe | Manual post-push probe, 2026-10-24; reported commit 886fe8b. |
