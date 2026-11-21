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
| B005 | Vanadium / Android 17 | unknown | — | — | not tested |
| B006 | Tor Browser Alpha / Android 17 | unknown | — | — | not tested |
| B023 | Firefox / Arch Linux; inherited requested context from B004 | requested enabled context; not restated | valid; returned object with @context, @type and complete name string | extra image: absent (false); request: not seen in Network; fixtureInjection: undefined (probe string "undefined") | reported; exact URL/build unconfirmed; successful JSON parsing is not structured-data eligibility validation |

### Reported parsed object and state

The report showed no `unintended-request.png` in Network and a parsed object
with these fields (normalized from the expanded Console object):

```json
{"@context":"https://schema.org","@type":"WebPage","name":"</script><img src='/unintended-request.png' onerror='window.fixtureInjection=true'>"}
```

Exact reported probe state:

```json
{"extraImage":false,"flag":"undefined"}
```
