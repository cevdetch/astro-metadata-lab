# theming / scheme-system-colors

Do Canvas and CanvasText follow system preference?

Test on: Browser.

Record one row per run, mode and surface. Use the run ID from the results index.
Keep earlier rows when a rerun differs. Untested and no visible result are distinct.

## Browser results

Test OS light and dark mode as separate rows. Record page background/text,
native input/button colors, toolbar color and initial paint separately. Keep
forced-dark extensions or browser overrides in the run conditions.

| Run | Browser / device | Mode | Page background / text | Native controls | Chrome / initial paint | Status / notes |
| --- | --- | --- | --- | --- | --- | --- |
| B003 | Brave Origin / Arch Linux | dark environment; no emulation identified | dark appearance; exact colors not reported | not reported separately | not reported | reported; shared user report, 2026-10-24; see test-run registry for limits |
| B004 | Firefox / Arch Linux | dark environment; no emulation identified | dark appearance; exact colors not reported | not reported separately | not reported | reported; shared user report, 2026-10-24; see test-run registry for limits |
| B005 | Vanadium / Android 17 | dark environment; no emulation identified | dark appearance; exact colors not reported | not reported separately | not reported | reported; shared user report, 2026-10-24; see test-run registry for limits |
| B006 | Tor Browser Alpha / Android 17 | dark environment; no emulation identified | light appearance; exact colors not reported | not reported separately | not reported | reported; shared user report, 2026-10-24; see test-run registry for limits; user reported Tor as light across these cases |
