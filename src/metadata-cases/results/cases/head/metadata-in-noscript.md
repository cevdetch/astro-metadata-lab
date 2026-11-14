# head / metadata-in-noscript

How do scripting-enabled and scripting-disabled HTML parsers differ?

Test on: Browser, Social DM.

Record one row per run, mode and surface. Use the run ID from the results index.
Keep earlier rows when a rerun differs. Untested and no visible result are distinct.

## Browser results

Record the relevant rendered text/encoding, mobile layout viewport or parsed
DOM placement. For charset tests include the HTTP Content-Type/charset: it can
mask the effect of the HTML declaration. For noscript, record scripting enabled
and disabled separately. A normal-looking page does not establish conformance.

| Run | Browser / device | Scripting / viewport conditions | Displayed text / layout | Parsed DOM / encoding | Status / notes |
| --- | --- | --- | --- | --- | --- |
| B003 | Brave Origin / Arch Linux | unknown | — | — | not tested |
| B004 | Firefox / Arch Linux | unknown | — | — | not tested |
| B005 | Vanadium / Android 17 | unknown | — | — | not tested |
| B006 | Tor Browser Alpha / Android 17 | unknown | — | — | not tested |
| B021 | Firefox / Arch Linux; inherited from B004 | scripting enabled | tab label: https://astro-metadata-lab.pages.dev/cases/head/metadata-in-noscript/ | title/description/canonical parents unreported | reported; submitted parent fields were placeholders; missing DOM elements not established |
| B021 | Firefox / Arch Linux; inherited from B004 | scripting disabled | tab label: HTML title — metadata-in-noscript | title=head; description=head; canonical=head (direct parents, per the recorded explanation) | reported; submitted parent fields contained values; canonical href: https://37d5d3ff.astro-metadata-lab.pages.dev/cases/head/metadata-in-noscript/; exact disabled document URL/build unconfirmed |


### Raw report and interpretation

```text
Firefox / js=on: tab-label=https://astro-metadata-lab.pages.dev/cases/head/metadata-in-noscript/; title-parent=...; description-parent=...; canonical-parent=...
Firefox / js=off: tab-label=HTML title — metadata-in-noscript; title-parent=HTML title — metadata-in-noscript; description-parent=HTML description — metadata-in-noscript; canonical-parent=https://37d5d3ff.astro-metadata-lab.pages.dev/cases/head/metadata-in-noscript/
```

A clarification followed: with JavaScript disabled, the elements leave noscript and
are directly under head. The disabled row's parent locations come from that
explicit explanation, not from treating the entered text/content/href as parent
names. The enabled placeholders do not establish that elements are missing.
The canonical host differs from the enabled tab URL; its cause is unconfirmed.

## Social DM results

Send the fixture URL, one per message. Record composer, sent and received views
as separate rows. Copy title and description independently; record absent,
truncated or unknown values. Record image/color, card layout and the destination
after tapping. A missing preview does not identify an ignored field.

| Run | Platform | Surface | Title | Description | Image | Layout / destination | Status / notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| — | LinkedIn | — | — | — | — | — | not tested |
| — | Discord | — | — | — | — | — | not tested |
| — | X | — | — | — | — | — | not tested |
| — | WhatsApp | — | — | — | — | — | not tested |
| — | Instagram | — | — | — | — | — | not tested |
| — | Facebook Messenger | — | — | — | — | — | not tested |
