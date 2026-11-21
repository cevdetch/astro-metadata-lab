# metadata / long-title

What is truncated by each client, without an arbitrary build limit?

Test on: Social DM.

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
| S032 | LinkedIn | inspector | client-dependent truncation; exact cutoff unreported | none; prior explicit LinkedIn correction retained | unreported | layout unreported / destination not tested | all works fine group report; exact characters, client settings and build not independently inspected; do not infer a universal character limit |
| S033 | Molly | not recorded | client-dependent truncation; exact cutoff unreported | normal where displayed; literal text/presence not recorded separately | unreported | layout unreported / destination not tested | all works fine group report; exact characters, client settings and build not independently inspected; do not infer a universal character limit |
| S034 | Discord | not recorded | reported shortest/minimum example: `A long but valid descriptive title A long but valid descriptive tit...` | normal where displayed; literal text/presence not recorded separately | unreported | layout unreported / destination not tested | all works fine group report; exact characters, client settings and build not independently inspected; do not infer a universal character limit |
| S035 | Instagram | not recorded | client-dependent truncation; exact cutoff unreported | normal where displayed; literal text/presence not recorded separately | unreported | layout unreported / destination not tested | all works fine group report; exact characters, client settings and build not independently inspected; do not infer a universal character limit |
| S036 | WhatsApp | not recorded | client-dependent truncation; exact cutoff unreported | normal where displayed; literal text/presence not recorded separately | unreported | layout unreported / destination not tested | all works fine group report; exact characters, client settings and build not independently inspected; do not infer a universal character limit |
