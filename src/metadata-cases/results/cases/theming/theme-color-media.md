# theming / theme-color-media

Do browser selection and social-preview accent selection differ?

Test on: Browser, Social DM.

Record one row per run, mode and surface. Use the run ID from the results index.
Keep earlier rows when a rerun differs. Untested and no visible result are distinct.

## Browser results

Test OS light and dark mode as separate rows. Record page background/text,
native input/button colors, toolbar color and initial paint separately. Keep
forced-dark extensions or browser overrides in the run conditions.

| Run | Browser / device | Mode | Page background / text | Native controls | Chrome / initial paint | Status / notes |
| --- | --- | --- | --- | --- | --- | --- |
| B003 | Brave Origin / Arch Linux | unknown | — | — | — | not tested |
| B004 | Firefox / Arch Linux | unknown | — | — | — | not tested |
| B005 | Vanadium / Android 17 | unknown | — | — | — | not tested |
| B006 | Tor Browser Alpha / Android 17 | unknown | — | — | — | not tested |


## Social DM results

Send the fixture URL, one per message. Record composer, sent and received views
as separate rows. Copy title and description independently; record absent,
truncated or unknown values. Record image/color, card layout and the destination
after tapping. A missing preview does not identify an ignored field.

Also record any card accent color and the app appearance setting.

| Run | Platform | Surface | Title | Description | Image | Layout / destination | Status / notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| — | LinkedIn | — | — | — | — | — | not tested |
| — | Discord | — | — | — | — | — | not tested |
| — | X | — | — | — | — | — | not tested |
| — | WhatsApp | — | — | — | — | — | not tested |
| — | Instagram | — | — | — | — | — | not tested |
| — | Facebook Messenger | — | — | — | — | — | not tested |
