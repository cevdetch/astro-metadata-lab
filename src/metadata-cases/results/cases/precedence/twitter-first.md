# precedence / twitter-first

Same conflicting fields as all-fields, with the complete Twitter block before OG.

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
| — | Discord | — | — | — | — | — | not tested |
| — | X | — | — | — | — | — | not tested |
| — | WhatsApp | — | — | — | — | — | not tested |
| — | Instagram | — | — | — | — | — | not tested |
| — | Facebook Messenger | — | — | — | — | — | not tested |
| S005 | WhatsApp | requested sent; not restated | B | B | red | large-image / destination not tested | reported; marker confirmed for both title and description; displayed domain astro-metadata-lab.pages.dev; favicon bottom right, appearance not identified |
| S006 | Molly | not reported | B | B | red | large-image / destination not tested | reported; marker confirmed for both title and description; displayed domain astro-metadata-lab.pages.dev |
| S007 | Discord | not reported | C | C | red | large-image / destination not tested | reported; marker confirmed for both title and description |
| S008 | LinkedIn | post composer; confirmed in follow-up | unreported | unreported | unreported | unreported / destination not tested | preview error: Cannot display preview. You can post as is, or try another link.; cause unknown |
| S009 | Instagram | not reported | B | B | red | large-image / destination not tested | reported; marker confirmed for both title and description |

## LinkedIn Post Inspector batch (S011)

This is an Inspector result, separate from S008's post-composer errors.

| Run | Visible title | Visible description | Image | Displayed domain | Layout |
| --- | --- | --- | --- | --- | --- |
| S011 | B | none | red | 37d5d3ff.astro-metadata-lab.pages.dev | unreported |

The letter identifies the title only; no visible description was
explicitly reported in any Inspector preview. The suggested connection to the
100-character warning is untested; no length comparison was performed.
