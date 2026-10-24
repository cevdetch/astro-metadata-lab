# theming / theme-color-media

Do browser selection and social-preview accent selection differ?

The existing hint colors are light gray (`#eeeeee`) and dark gray (`#222222`).
The user reported no visible browser UI or link-preview color change. Exact
browser chrome colors and a comparison reference were not supplied. The
reported preview clients are Signal, WhatsApp, Discord and Instagram; versions,
device/OS, appearance and message views remain unknown. The social rows record
only the reported lack of a visible accent change. Page color-scheme behavior
and theme-color UI use remain separate observations. HTML defines theme-color as a
UI color suggestion; see the [HTML definition](https://html.spec.whatwg.org/multipage/semantics.html#meta-theme-color).

Test on: Browser, Social DM.

Record one row per run, mode and surface. Use the run ID from the results index.
Keep earlier rows when a rerun differs. Untested and no visible result are distinct.

## Browser results

Test OS light and dark mode as separate rows. Record page background/text,
native input/button colors, toolbar color and initial paint separately. Keep
forced-dark extensions or browser overrides in the run conditions.

| Run | Browser / device | Mode | Page background / text | Native controls | Chrome / initial paint | Status / notes |
| --- | --- | --- | --- | --- | --- | --- |
| B003 | Brave Origin / Arch Linux | dark environment; no emulation identified | dark appearance; exact colors not reported | not reported separately | no visible browser UI color change reported; comparison reference unspecified; first paint unreported | reported; shared user report, 2026-10-24; see test-run registry for limits |
| B004 | Firefox / Arch Linux | dark environment; no emulation identified | dark appearance; exact colors not reported | not reported separately | no visible browser UI color change reported; comparison reference unspecified; first paint unreported | reported; shared user report, 2026-10-24; see test-run registry for limits |
| B005 | Vanadium / Android 17 | dark environment; no emulation identified | dark appearance; exact colors not reported | not reported separately | no visible browser UI color change reported; comparison reference unspecified; first paint unreported | reported; shared user report, 2026-10-24; see test-run registry for limits |
| B006 | Tor Browser Alpha / Android 17 | dark environment; no emulation identified | light appearance; exact colors not reported | not reported separately | no visible browser UI color change reported; comparison reference unspecified; first paint unreported | reported; shared user report, 2026-10-24; see test-run registry for limits; user reported Tor as light across these cases |


## Social DM results

Send the fixture URL, one per message. Record composer, sent and received views
as separate rows. Copy title and description independently; record absent,
truncated or unknown values. Record image/color, card layout and the destination
after tapping. A missing preview does not identify an ignored field.

Also record any card accent color and the app appearance setting.

| Run | Platform | Surface | Title | Description | Image | Layout / destination | Status / notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| — | LinkedIn | — | — | — | — | — | not tested |
| S003 | Discord | unknown | — | — | — | — | reported; no visible theme-color accent change; see test-run registry for missing context |
| — | X | — | — | — | — | — | not tested |
| S002 | WhatsApp | unknown | — | — | — | — | reported; no visible theme-color accent change; see test-run registry for missing context |
| S004 | Instagram | unknown | — | — | — | — | reported; no visible theme-color accent change; see test-run registry for missing context |
| — | Facebook Messenger | — | — | — | — | — | not tested |
| S001 | Signal | unknown | — | — | — | — | reported; no visible theme-color accent change; see test-run registry for missing context |
