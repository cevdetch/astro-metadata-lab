# canonical / canonical-cross-origin

Does a different canonical origin affect card identity or click target?

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
| S042 | LinkedIn | requested inspector; not restated | no reported problem; text not quoted | none; prior explicit LinkedIn correction retained | no reported problem; not separately described | layout unreported / destination unreported | preview=card; displayed domain=37d5d3ff.astro-metadata-lab.pages.dev; exact build/settings and URL-selection mechanism unreported |
| S043 | Molly | not restated | no reported problem; text not quoted | not separately restated | no reported problem; not separately described | layout unreported / destination unreported | preview=card; displayed domain=astro-metadata-lab.pages.dev; exact build/settings and URL-selection mechanism unreported |
| S044 | WhatsApp | not restated | no reported problem; text not quoted | not separately restated | no reported problem; not separately described | layout unreported / destination unreported | preview=card; displayed domain=astro-metadata-lab.pages.dev; exact build/settings and URL-selection mechanism unreported |
| S045 | Discord | not restated | no reported problem; text not quoted | not separately restated | no reported problem; not separately described | layout unreported / destination unreported | preview=card; displayed domain=none shown; exact build/settings and URL-selection mechanism unreported |
| S046 | Instagram | not restated | no reported problem; text not quoted | not separately restated | no reported problem; not separately described | layout unreported / destination unreported | preview=card; displayed domain=none shown; exact build/settings and URL-selection mechanism unreported |
