# json-ld / jsonld-unsafe

Negative control: literal script end tag terminates raw JSON-LD.

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
| B023 | Firefox / Arch Linux; inherited from B004 | enabled (planned); not confirmed | invalid; SyntaxError: JSON.parse: unterminated string literal at line 1 column 60 of the JSON data | extra image: present (true); request: 404 interpreted from leading report field; fixtureInjection: true (probe string "true") | reported; exact URL/build unconfirmed; 404 is not the JSON parse result or an established HTML page status |

### Raw reported output

```text
jsonld-unsafe: json=404; ncaught SyntaxError: JSON.parse: unterminated string literal at line 1 column 60 of the JSON data
    <anonymous> debugger eval code:1

debugger eval code:1:6
    <anonymous> debugger eval code:1
'{"extraImage":true,"flag":"true"}'
```

The leading 404 is interpreted as the unintended image request's status in the
Network check. The separate SyntaxError establishes the parse failure.
