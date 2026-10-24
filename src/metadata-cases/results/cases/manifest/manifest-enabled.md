# manifest / manifest-enabled

Online-only manifest discovery and launch settings.

Test on: Browser.

Record one row per run, mode and surface. Use the run ID from the results index.
Keep earlier rows when a rerun differs. Untested and no visible result are distinct.

## Browser results

Record bookmark/home-screen/install actions separately, including no offered
install UI. Record an existing installation and profile. Enabled manifests share
one app ID and start URL, so later cases can reuse an existing installation.
Record launch URL/display mode and icon/name; no offline test is required.

| Run | Browser / device | Profile / prior install | Save or install UI | Icon / name | Launch URL / display | Status / notes |
| --- | --- | --- | --- | --- | --- | --- |
| B003 | Brave Origin / Arch Linux | unknown | — | — | — | not tested |
| B004 | Firefox / Arch Linux | unknown | — | — | — | not tested |
| B005 | Vanadium / Android 17 | unknown | — | — | — | not tested |
| B006 | Tor Browser Alpha / Android 17 | unknown | — | — | — | not tested |
