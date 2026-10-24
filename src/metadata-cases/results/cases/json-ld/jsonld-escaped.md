# json-ld / jsonld-escaped

Does escaping less-than preserve JSON while preventing extra HTML?

Test on: Browser.

Record one row per run, mode and surface. Use the run ID from the results index.
Keep earlier rows when a rerun differs. Untested and no visible result are distinct.

## Browser results

Developer inspection: record whether the JSON-LD parses and whether the
script-end control creates an extra image/request or sets window.fixtureInjection.
Record scripting settings. These observations do not establish search rich-result
eligibility or full site security.

| Run | Browser / device | Scripting | JSON parses | Extra image / request / fixtureInjection | Status / notes |
| --- | --- | --- | --- | --- | --- |
| B003 | Brave Origin / Arch Linux | unknown | — | — | not tested |
| B004 | Firefox / Arch Linux | unknown | — | — | not tested |
| B005 | Vanadium / Android 17 | unknown | — | — | not tested |
| B006 | Tor Browser Alpha / Android 17 | unknown | — | — | not tested |
