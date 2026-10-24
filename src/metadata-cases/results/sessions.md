## Test runs

Register shared details once per browser/app, device, deployment and test session.
Case tables reference these IDs. Use `B...` for browsers, `S...` for messaging
and `H...` for HTTP checks. Unknown values stay unknown until supplied.

| Run | Reported date | Client / version | Device / OS | Deployment | Conditions / evidence |
| --- | --- | --- | --- | --- | --- |
| B001 | 2026-10-23 | Brave; version unknown | unknown | unknown | Early user report: blue tab icons for ico32-svg and svg-ico32. Mode/profile unknown. |
| B002 | 2026-10-23 | Firefox; version unknown | unknown | unknown | Early user report: blue tab icons for ico32-svg and svg-ico32. Mode/profile unknown. |
| B003 | 2026-10-24 | Brave Origin 1.97.59; Chromium 155.0.8059.85 (Official Build), x86_64 | Arch Linux; hardware unknown | Planned target: production alias, 886fe8b | User-supplied version. Worksheet settings: dark, private, tab. Icon and initial theming observations transcribed into case records; exact deployment unconfirmed. |
| B004 | 2026-10-24 | Firefox 160.0a1 (2026-10-20), 64-bit | Arch Linux; hardware unknown | Planned target: production alias, 886fe8b | User-supplied version. Worksheet settings: dark, private, tab. Icon and initial theming observations transcribed into case records; exact deployment unconfirmed. |
| B005 | 2026-10-24 | Vanadium 156.0.8078.47.0 | Android 17; device model unknown | Planned target: production alias, 886fe8b | User-supplied version. Worksheet settings: dark, private, tab-switcher. Icon and initial theming observations transcribed into case records; exact deployment unconfirmed. |
| B006 | 2026-10-24 | Tor Browser Alpha 16.0a14 (153.5.0esr) | Android 17; device model unknown | Planned target: production alias, 886fe8b | User-supplied version. Worksheet settings: dark, private, tab-switcher; Tor security level unknown. User confirmed the last icon row belongs to Tor. Icon and initial theming observations transcribed into case records; exact deployment unconfirmed. |
| S001 | 2026-10-24 | Signal; version unknown | unknown | Exact shared URL / build unknown | User reported no visible theme-color accent change. Native/web client, message view, appearance, comparison reference and cache conditions unknown. |
| S002 | 2026-10-24 | WhatsApp; version unknown | unknown | Exact shared URL / build unknown | User reported no visible theme-color accent change. Native/web client, message view, appearance, comparison reference and cache conditions unknown. |
| S003 | 2026-10-24 | Discord; version unknown | unknown | Exact shared URL / build unknown | User reported no visible theme-color accent change. Native/web client, message view, appearance, comparison reference and cache conditions unknown. |
| S004 | 2026-10-24 | Instagram; version unknown | unknown | Exact shared URL / build unknown | User reported no visible theme-color accent change. Native/web client, message view, appearance, comparison reference and cache conditions unknown. |
| H001 | 2026-10-24 | curl; version unknown | unknown | Production alias; commit unknown | User-pasted GET response for exact .txt source returned 404. Server Date: 2026-10-24 00:14:17 UTC. |
| H002 | 2026-10-24 | curl; version unknown | unknown | Production alias; commit unknown | User-pasted eight-URL probe. GET without following redirects. Exact .txt source returned 200. |
| H003 | 2026-10-24 | curl; version unknown | unknown | Production alias; user-reported commit 886fe8b | New user-pasted eight-URL probe after the push. GET without following redirects; expected 200/404/302 responses. Build URL not supplied. |

S001–S004 register the reported theme-color preview observation only; they do
not establish other preview fields or a complete client setup. B001/B002 are
historical reports, not newly executed tests or complete browser coverage.
H001 and H002 used
`https://astro-metadata-lab.pages.dev`; the earlier 404's cause remains unknown.
B003–B006 register four browser environments. The browser worksheet contains icon
and initial theming observations; blank cells remain unreported. The per-case
records now contain those observations. The user
confirmed the last icon row as Tor (B006).
The earlier B001/B002 reports keep their unknown versions; the new environment
list does not establish the versions used then.

The original target recorded for B003–B006 and H003 was
`https://astro-metadata-lab.pages.dev` with user-reported commit
`886fe8b63c31fe1915d1f9d7efbd90a0b50527f0`. The local checkout matched that commit
when H003 was recorded. The response-only probe and browser worksheet do not
independently identify the deployed commit. Preserve that historical context
after a push; a follow-up batch needs its own deployment reference.

### Theming batch — 2026-10-24

The user reported the seven original theming cases across B003–B006 in the
existing dark-environment batch. B003–B005 showed light browser defaults without
a declaration, dark appearance with the meta declaration alone or with matching
CSS, white background/black text with hardcoded body colors and differently
styled native controls, dark system colors, and dark appearance in the duplicate
case. Tor (B006) was the stated exception: light appearance across those cases.
The worksheets and per-case records retain that exception. Exact control colors,
first paint and most individual text/background colors were not supplied.

The user also reported successful prefers-color-scheme emulation for the system
colors case and a switch to light in the duplicate case. The browser(s), exact
emulation setup and complete light-mode results were not identified. These
observations remain at batch level; they do not populate four light-mode rows.

For theme-color-media, the user saw no browser UI or link-preview color change.
The user identified Signal, WhatsApp, Discord and Instagram (S001–S004) as the
preview clients. App versions, native/web client, device/OS, surface, appearance,
comparison reference and cache conditions were not supplied. Those details
remain unknown. The original gray hint colors remain unchanged.

Tor's privacy protection is the user's explanation for its light appearance,
rather than a measured setting or media-query result in this run. Mozilla
documents light-preference spoofing in its fingerprinting protection discussion;
this supports the hypothesis without establishing the cause in this Tor build.
See [Mozilla's issue and developer explanation](https://bugzilla.mozilla.org/show_bug.cgi?id=1732114).
The three new color-scheme controls have no client observations yet.
