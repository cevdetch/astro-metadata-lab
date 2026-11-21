# precedence / og-no-title

Remove OG title from og-vs-html, without a competing Twitter title.

Test on: Social DM.

Record one row per run, mode and surface. Use the run ID from the results index.
Keep earlier rows when a rerun differs. Untested and no visible result are distinct.

## Social DM results

Send the fixture URL, one per message. Record composer, sent and received views
as separate rows. Copy title and description independently; record absent,
truncated or unknown values. Record image/color, card layout and the destination
after tapping. A missing preview does not identify an ignored field.

Candidates: HTML A; OG B/red image; Twitter C/green image; body D. These are
identification markers, not expected platform choices.

| Run | Platform | Surface | Title | Description | Image | Layout / destination | Status / notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| — | LinkedIn | — | — | — | — | — | not tested |
| — | X | — | — | — | — | — | not tested |
| — | Instagram | — | — | — | — | — | not tested |
| — | Facebook Messenger | — | — | — | — | — | not tested |
| S014 | Discord | not recorded | none | none | red | layout unreported / destination not tested | reported; title, description and image separately confirmed; exact URL/build and layout unreported |
| S015 | Molly | not recorded | A | B | red | layout unreported / destination not tested | reported; title, description and image separately confirmed; exact URL/build and layout unreported |
| S016 | WhatsApp | not recorded | A | B | red | layout unreported / destination not tested | reported; title, description and image separately confirmed; exact URL/build and layout unreported |
| S017 | LinkedIn | inspector | A | none | red | layout unreported / destination not tested | corrected: LinkedIn still shows no visible description; title/image retained; exact URL/build and layout unreported |

S017 correction: the grouped description claim for LinkedIn was retracted.
Its preview showed no visible description; the title and image observations
remain. Extracted metadata and visible card text are separate fields.
