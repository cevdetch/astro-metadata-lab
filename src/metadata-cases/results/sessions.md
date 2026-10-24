## Test runs

Register shared details once per browser/app, device, deployment and test session.
Case tables reference these IDs. Use `B...` for browsers, `S...` for messaging
and `H...` for HTTP checks. Unknown values stay unknown until supplied.

| Run | Reported date | Client / version | Device / OS | Deployment | Conditions / evidence |
| --- | --- | --- | --- | --- | --- |
| B001 | 2026-10-23 | Brave; version unknown | unknown | unknown | Early user report: blue tab icons for ico32-svg and svg-ico32. Mode/profile unknown. |
| B002 | 2026-10-23 | Firefox; version unknown | unknown | unknown | Early user report: blue tab icons for ico32-svg and svg-ico32. Mode/profile unknown. |
| B003 | 2026-10-24 | Brave Origin 1.97.59; Chromium 155.0.8059.85 (Official Build), x86_64 | Arch Linux; hardware unknown | unknown | Planned run; version supplied by user. Appearance, profile and surface not supplied; no results yet. |
| B004 | 2026-10-24 | Firefox 160.0a1 (2026-10-20), 64-bit | Arch Linux; hardware unknown | unknown | Planned run; version supplied by user. Appearance, profile and surface not supplied; no results yet. |
| B005 | 2026-10-24 | Vanadium 156.0.8078.47.0 | Android 17; device model unknown | unknown | Planned run; version supplied by user. Appearance, profile and surface not supplied; no results yet. |
| B006 | 2026-10-24 | Tor Browser Alpha 16.0a14 (153.5.0esr) | Android 17; device model unknown | unknown | Planned run; version supplied by user. Appearance, profile, surface and Tor security level not supplied; no results yet. |
| H001 | 2026-10-24 | curl; version unknown | unknown | Production alias; commit unknown | User-pasted GET response for exact .txt source returned 404. Server Date: 2026-10-24 00:14:17 UTC. |
| H002 | 2026-10-24 | curl; version unknown | unknown | Production alias; commit unknown | User-pasted eight-URL probe. GET without following redirects. Exact .txt source returned 200. |

No social-DM run has been reported yet. B001/B002 are historical reports, not
newly executed tests or complete browser coverage. H001 and H002 used
`https://astro-metadata-lab.pages.dev`; the earlier 404's cause remains unknown.
B003–B006 register the four planned browser environments. Their case rows remain
not tested until results arrive. The earlier B001/B002 reports keep their unknown
versions; the new environment list does not establish the versions used then.
