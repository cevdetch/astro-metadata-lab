# theming / scheme-meta-only

Does the meta declaration suffice for browser-native colors?

Test on: Browser.

Record one row per run, mode and surface. Use the run ID from the results index.
Keep earlier rows when a rerun differs. Untested and no visible result are distinct.

## Browser results

Test OS light and dark mode as separate rows. Record page background/text,
native input/button colors, toolbar color and initial paint separately. Keep
forced-dark extensions or browser overrides in the run conditions.

| Run | Browser / device | Mode | Page background / text | Native controls | Chrome / initial paint | Status / notes |
| --- | --- | --- | --- | --- | --- | --- |
| B003 | Brave Origin / Arch Linux | dark environment; no emulation identified | dark appearance; exact colors not reported | not reported separately | not reported | reported; manual observation, 2026-10-24; see test-run registry for limits |
| B004 | Firefox / Arch Linux | dark environment; no emulation identified | dark appearance; exact colors not reported | not reported separately | not reported | reported; manual observation, 2026-10-24; see test-run registry for limits |
| B005 | Vanadium / Android 17 | dark environment; no emulation identified | dark appearance; exact colors not reported | not reported separately | not reported | reported; manual observation, 2026-10-24; see test-run registry for limits |
| B006 | Tor Browser Alpha / Android 17 | dark environment; no emulation identified | light appearance; exact colors not reported | not reported separately | not reported | reported; manual observation, 2026-10-24; see test-run registry for limits; Tor recorded as light across these cases |
| B008 | Tor Browser Alpha / Android 17 | not reconfirmed | light appearance; exact colors unreported | light; input and button match the page | not reported | reported; Tor follow-up; mode, emulation and tested deployment not supplied; see test-run registry |
| B009 | Brave Origin / Arch Linux | not reconfirmed | dark appearance; exact colors unreported | not reported separately | not reported | reported; five-case follow-up; client setup inherited from B003; mode and tested deployment not supplied |
| B010 | Firefox / Arch Linux | not reconfirmed | dark appearance; exact colors unreported | not reported separately | not reported | reported; five-case follow-up; client setup inherited from B004; mode and tested deployment not supplied |
| B011 | Vanadium / Android 17 | not reconfirmed | dark appearance; exact colors unreported | not reported separately | not reported | reported; five-case follow-up; client setup inherited from B005; mode and tested deployment not supplied |
| B012 | Firefox / Arch Linux | requested light-mode follow-up; exact settings not restated | light appearance; exact colors unreported | not reported separately | not reported | reported; client setup inherited from B004; tested URL/build and emulation not restated |
| B013 | Vanadium / Android 17 | requested light-mode follow-up; exact settings not restated | light appearance; exact colors unreported | not reported separately | not reported | reported; client setup inherited from B005; tested URL/build and emulation not restated |
