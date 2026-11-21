# icons / svg-responsive

Does an SVG favicon change with system light/dark preference?

Test on: Browser.

Record one row per run, mode and surface. Use the run ID from the results index.
Keep earlier rows when a rerun differs. Untested and no visible result are distinct.

## Browser results

Open the fixture as a top-level page. Record the displayed icon color/shape and
the UI surface: tab, tab switcher, bookmark or home screen. A network request alone
does not establish which icon the browser displayed. Record light/dark mode for
responsive icons; note a fresh profile or cache change.

| Run | Browser / device | Mode | Surface | Icon shown | Status | Notes / evidence |
| --- | --- | --- | --- | --- | --- | --- |
| B003 | Brave Origin / Arch Linux | dark environment | tab | yellow-circle | reported | Manually filled browser worksheet; private profile; exact deployment unconfirmed. One dark-environment observation; light-mode check unreported. |
| B004 | Firefox / Arch Linux | dark environment | tab | yellow-circle | reported | Manually filled browser worksheet; private profile; exact deployment unconfirmed. One dark-environment observation; light-mode check unreported. |
| B005 | Vanadium / Android 17 | dark environment | tab-switcher | yellow-circle | reported | Manually filled browser worksheet; private profile; exact deployment unconfirmed. One dark-environment observation; light-mode check unreported. |
| B006 | Tor Browser Alpha / Android 17 | dark environment | tab-switcher | red-square | reported | Manually filled browser worksheet; private profile; exact deployment unconfirmed. One dark-environment observation; light-mode check unreported. |
| B012 | Firefox / Arch Linux | light-mode follow-up; exact settings not recorded | not recorded | yellow-circle | reported | Recorded as always yellow-circle, no change. Client setup inherited from B004; cause and cache behavior uninvestigated; tested deployment unconfirmed. |
| B013 | Vanadium / Android 17 | light-mode follow-up; exact settings not recorded | not recorded | yellow-circle | reported | Recorded as always yellow-circle, no change. Client setup inherited from B005; cause and cache behavior uninvestigated; tested deployment unconfirmed. |
