## Test runs

Register shared details once per browser/app, device, deployment and test session.
Case tables reference these IDs. Use `B...` for browsers, `S...` for messaging
and `H...` for HTTP checks. Unknown values stay unknown until recorded.

| Run | Reported date | Client / version | Device / OS | Deployment | Conditions / evidence |
| --- | --- | --- | --- | --- | --- |
| B001 | 2026-10-23 | Brave; version unknown | unknown | unknown | Early manual report: blue tab icons for ico32-svg and svg-ico32. Mode/profile unknown. |
| B002 | 2026-10-23 | Firefox; version unknown | unknown | unknown | Early manual report: blue tab icons for ico32-svg and svg-ico32. Mode/profile unknown. |
| B003 | 2026-10-24 | Brave Origin 1.97.59; Chromium 155.0.8059.85 (Official Build), x86_64 | Arch Linux; hardware unknown | Planned target: production alias, 886fe8b | Version recorded manually. Worksheet settings: dark, private, tab. Icon and initial theming observations transcribed into case records; exact deployment unconfirmed. |
| B004 | 2026-10-24 | Firefox 160.0a1 (2026-10-20), 64-bit | Arch Linux; hardware unknown | Planned target: production alias, 886fe8b | Version recorded manually. Worksheet settings: dark, private, tab. Icon and initial theming observations transcribed into case records; exact deployment unconfirmed. |
| B005 | 2026-10-24 | Vanadium 156.0.8078.47.0 | Android 17; device model unknown | Planned target: production alias, 886fe8b | Version recorded manually. Worksheet settings: dark, private, tab-switcher. Icon and initial theming observations transcribed into case records; exact deployment unconfirmed. |
| B006 | 2026-10-24 | Tor Browser Alpha 16.0a14 (153.5.0esr) | Android 17; device model unknown | Planned target: production alias, 886fe8b | Version recorded manually. Worksheet settings: dark, private, tab-switcher; Tor security level unknown. The last icon row was confirmed as Tor. Icon and initial theming observations transcribed into case records; exact deployment unconfirmed. |
| B008 | 2026-10-24 | Tor Browser Alpha 16.0a14 (153.5.0esr); inherited from B006 | Android 17; device model unknown; inherited from B006 | Tested URL / build not recorded; local reference ab2f459 | Follow-up on five color-scheme controls. Input and button appearance matched each reported page. Mode, profile, emulation, Tor security level and media-query values not reconfirmed. |
| B009 | 2026-10-24 | Brave Origin 1.97.59; Chromium 155.0.8059.85; inherited from B003 | Arch Linux; hardware unknown; inherited from B003 | Tested URL / build not recorded; local reference ab2f459 | Dark appearance recorded in all five follow-up cases. Mode, profile, emulation and media-query values not reconfirmed; native controls not reported separately. |
| B010 | 2026-10-24 | Firefox 160.0a1 (2026-10-20); inherited from B004 | Arch Linux; hardware unknown; inherited from B004 | Tested URL / build not recorded; local reference ab2f459 | Dark appearance recorded in all five follow-up cases. Mode, profile, emulation and media-query values not reconfirmed; native controls not reported separately. |
| B011 | 2026-10-24 | Vanadium 156.0.8078.47.0; inherited from B005 | Android 17; device model unknown; inherited from B005 | Tested URL / build not recorded; local reference ab2f459 | Dark appearance recorded in all five follow-up cases. Mode, profile, emulation and media-query values not reconfirmed; native controls not reported separately. |
| B012 | 2026-10-24 | Firefox 160.0a1 (2026-10-20); inherited from B004 | Arch Linux; hardware unknown; inherited from B004 | Tested URL / build not recorded | Light-mode follow-up: meta-only light; dark-first light; dark-only dark. Responsive SVG stayed yellow-circle with no change reported. Exact OS/browser settings, profile, emulation, icon surface and native controls not recorded. |
| B013 | 2026-10-24 | Vanadium 156.0.8078.47.0; inherited from B005 | Android 17; device model unknown; inherited from B005 | Tested URL / build not recorded | Light-mode follow-up: meta-only light; dark-first light; dark-only dark. Responsive SVG stayed yellow-circle with no change reported. Exact OS/browser settings, profile, emulation, icon surface and native controls not recorded. |
| B014 | 2026-10-24 | Vanadium 156.0.8078.47.0; inherited from B005 | Android 17; device model unknown; inherited context | Tested URL / build not recorded | Vanadium viewport batch on mobile. Viewport absent: desktop-like small text, pinch zoom works. Width-only reference and initial-scale page looked normal. Browser, orientation, zoom settings and horizontal overflow not recorded; pinch behavior on the other two pages not separately reported. |
| B015 | 2026-10-24 | Brave Origin 1.97.59; Chromium 155.0.8059.85; inherited from B003 | Arch Linux; hardware unknown; inherited from B003 | Tested URL / build not recorded | All three charset pages recorded in all four registered browsers: normal text, document encoding UTF-8, Content-Type text/html; charset=utf-8. Mode, profile, scripting and inspection method not recorded. |
| B016 | 2026-10-24 | Firefox 160.0a1 (2026-10-20); inherited from B004 | Arch Linux; hardware unknown; inherited from B004 | Tested URL / build not recorded | All three charset pages recorded in all four registered browsers: normal text, document encoding UTF-8, Content-Type text/html; charset=utf-8. Mode, profile, scripting and inspection method not recorded. |
| B017 | 2026-10-24 | Vanadium 156.0.8078.47.0; inherited from B005 | Android 17; device model unknown; inherited from B005 | Tested URL / build not recorded | All three charset pages recorded in all four registered browsers: normal text, document encoding UTF-8, Content-Type text/html; charset=utf-8. Mode, profile, scripting and inspection method not recorded. |
| B018 | 2026-10-24 | Tor Browser Alpha 16.0a14 (153.5.0esr); inherited from B006 | Android 17; device model unknown; inherited from B006 | Tested URL / build not recorded | All three charset pages recorded in all four registered browsers: normal text, document encoding UTF-8, Content-Type text/html; charset=utf-8. Mode, profile, scripting and inspection method not recorded. |
| B019 | 2026-10-24 | Firefox 160.0a1 (2026-10-20); inherited from B004 | Arch Linux; hardware unknown; inherited from B004 | Tested URL / build not recorded | Manual Console JSON: document.title is HTML title — metadata-after-invalid-head-element; title, description, canonical and OG title each have body as direct parent. Settings and separate visual tab-title observation not recorded. |
| B020 | 2026-10-24 | Brave Origin 1.97.59; Chromium 155.0.8059.85; inherited from B003 | Arch Linux; hardware unknown; inherited from B003 | Tested URL / build not recorded | Manual Console JSON: document.title is HTML title — metadata-after-invalid-head-element; title, description, canonical and OG title each have body as direct parent. Settings and separate visual tab-title observation not recorded. |
| B021 | 2026-10-24 | Firefox 160.0a1 (2026-10-20); inherited from B004 | Arch Linux; hardware unknown; inherited from B004 | Enabled tab label: production-alias case URL; disabled canonical: https://37d5d3ff.astro-metadata-lab.pages.dev/cases/head/metadata-in-noscript/; deployed commit unconfirmed | Noscript comparison with scripting on/off. On: tab shows URL; element parents unreported. Off: expected title; title/description/canonical recorded as direct children of head. Recorded parent fields contained element values, preserved in case record. |
| B022 | 2026-10-24 | Firefox 160.0a1 (2026-10-20); inherited from B004 | Arch Linux; hardware unknown; inherited context | Tested URL / build not recorded | Four language pages: normal text; Console JSON retained per case. Arabic case: English text appeared on right. Browser context inherited from the Firefox batch; settings and assistive technology not reported. |
| B023 | 2026-10-24 | Firefox 160.0a1 (2026-10-20); inherited from B004 | Arch Linux; hardware unknown; inherited context | Tested URL / build not recorded | Ran a JavaScript-enabled JSON-LD comparison. Unsafe: JSON SyntaxError, extra image true, flag true; leading 404 interpreted as image request status. Escaped: JSON parsed, no matching Network request, extra image false, flag undefined. Exact output kept per case; settings not recorded. |
| B024 | 2026-10-24 | Firefox 160.0a1 (2026-10-20); inherited from B004 | Arch Linux; hardware unknown; inherited context | Observed page: production alias /cases/precedence/all-fields/; metadata host: 37d5d3ff.astro-metadata-lab.pages.dev; full commit unconfirmed | Pasted Console JSON confirms canonical, og:url and both social image URLs use the deployment-specific host. Browser context inherited; no HTTP statuses or image fetches inspected. |
| S001 | 2026-10-24 | Signal; version unknown | unknown | Exact shared URL / build unknown | No visible theme-color accent change was observed. Native/web client, message view, appearance, comparison reference and cache conditions unknown. |
| S002 | 2026-10-24 | WhatsApp; version unknown | unknown | Exact shared URL / build unknown | No visible theme-color accent change was observed. Native/web client, message view, appearance, comparison reference and cache conditions unknown. |
| S003 | 2026-10-24 | Discord; version unknown | unknown | Exact shared URL / build unknown | No visible theme-color accent change was observed. Native/web client, message view, appearance, comparison reference and cache conditions unknown. |
| S004 | 2026-10-24 | Instagram; version unknown | unknown | Exact shared URL / build unknown | No visible theme-color accent change was observed. Native/web client, message view, appearance, comparison reference and cache conditions unknown. |
| S005 | 2026-10-24 | WhatsApp 2.26.40.77 | unknown | Current-deployment batch; exact build unconfirmed; B024 metadata-host context retained | Five precedence cases in the listed order; matching title/description markers confirmed; all image-bearing cards reported large-image. Displayed domain astro-metadata-lab.pages.dev and bottom-right favicon in each; body D observed on pages. Planned sent view; not confirmed. |
| S006 | 2026-10-24 | im.molly.app v8.19.2-4 | unknown | Current-deployment batch; exact build unconfirmed; B024 metadata-host context retained | Five precedence cases in the listed order; matching title/description markers confirmed; all image-bearing cards reported large-image. Displayed domain astro-metadata-lab.pages.dev; surface not recorded. Separate client from earlier Signal report. |
| S007 | 2026-10-24 | discord.com; version unknown | unknown | Current-deployment batch; exact build unconfirmed; B024 metadata-host context retained | Five precedence cases in the listed order; matching title/description markers confirmed; all image-bearing cards reported large-image. Surface and native/web client not reconfirmed. |
| S008 | 2026-10-24 | linkedin.com; version unknown | unknown | Current-deployment batch; exact build unconfirmed; B024 metadata-host context retained | Same preview error in all five cases; exact wording saved; post-composer surface while waiting for link preview later confirmed; not a DM test. |
| S009 | 2026-10-24 | instagram.com; version unknown | unknown | Current-deployment batch; exact build unconfirmed; B024 metadata-host context retained | Five precedence cases in the listed order; matching title/description markers confirmed; all image-bearing cards reported large-image. Surface and native/web client not reconfirmed. |
| S010 | 2026-10-24 | LinkedIn Post Inspector; web | unknown | Fetched stable-alias all-fields; canonical at 37d5d3ff deployment host; full commit unconfirmed | Successful inspector preview; title and extracted description B; proxied image present, color/layout not reported; card description absent, clarified afterwards. Reported trail 200; description-length warning; exact output retained in all-fields record. Separate from S008 post-composer errors. |
| S011 | 2026-10-24 | LinkedIn Post Inspector /inspect/; web | unknown | Five stable-alias precedence cases; displayed deployment domain 37d5d3ff.astro-metadata-lab.pages.dev; full commit unconfirmed | Visible titles A/B/A/B/B; images none/red/none/red/red; no card descriptions in all five, including earlier Inspector result, clarified afterwards. Image layout unreported; length-warning causal hypothesis untested. |
| S012 | 2026-10-24 | linkedin.com; version unknown; inherited from S008 | unknown | Stable-alias all-fields retry; full commit unconfirmed | Post composer retry after Inspector success still returned: Cannot display preview. You can post as is, or try another link. No new metadata, network or DM observation; settings not recorded. |
| S013 | 2026-10-24 | LinkedIn; version unknown; inherited from S008 | unknown | Stable-alias all-fields DM; additional control deadhead.cevdet.ch, exact shared URL unreported | No preview in DMs for the lab and deadhead control. Sent/received/draft surface and wait not recorded. Cause unresolved; do not infer metadata rejection or a global LinkedIn limitation. |
| S014 | 2026-10-24 | discord.com; version unknown; inherited from S007 | unknown | Current omission cases; exact URL/build unconfirmed | Three OG-only omission cases: title omission removed visible title and description; description omission removed description only; image omission removed image only. Layout/settings not reported. |
| S015 | 2026-10-24 | Molly; v8.19.2-4 inherited from S006 | unknown | Current omission cases; exact URL/build unconfirmed | Three OG-only omission cases; separate title/description/image results. Unchanged fields confirmed in a later note. Layout/settings not reported. |
| S016 | 2026-10-24 | WhatsApp; 2.26.40.77 inherited from S005 | unknown | Current omission cases; exact URL/build unconfirmed | Three OG-only omission cases; separate title/description/image results. Unchanged fields confirmed in a later note. Layout/settings not reported. |
| S017 | 2026-10-24 | LinkedIn Post Inspector; web | unknown | Current omission cases; exact URL/build unconfirmed | Three OG-only omission cases; separate title/description/image results. Unchanged fields confirmed in a later note. Layout/settings not reported. Later correction: no visible LinkedIn description; initial grouped description claim retracted; title/image retained. |
| S018 | 2026-10-24 | Discord; version unknown; inherited S007 | unknown | Current card controls; exact URL/build unconfirmed | Three twitter:card controls: reported layout summary in each. Geometry not separately described. All three had title B, description B and red image. |
| S019 | 2026-10-24 | Molly; v8.19.2-4 inherited S006 | unknown | Current card controls; exact URL/build unconfirmed | Three twitter:card controls: reported layout summary_large_image in each. Geometry not separately described. Signal label explicitly confirmed as the same Molly app; other fields not recorded separately. |
| S020 | 2026-10-24 | LinkedIn; Inspector context inherited from S017 | unknown | Current card controls; exact URL/build unconfirmed | Three twitter:card controls: reported layout summary_large_image in each. Geometry not separately described. Correction: no visible description; title/image not recorded separately. |
| S021 | 2026-10-24 | Instagram; version unknown; inherited S009 | unknown | Current card controls; exact URL/build unconfirmed | Three twitter:card controls: reported layout summary_large_image in each. Geometry not separately described. Title/description/image not recorded separately. |
| S022 | 2026-10-24 | Molly; v8.19.2-4 inherited S006 | unknown | Current metadata comparison; exact URL/build unconfirmed | All four comparison pages reported without problems, fixture text where visible, and summary_large_image layout. Image color/domain not recorded separately; no fallback-source inference. |
| S023 | 2026-10-24 | Instagram; version unknown; inherited S009 | unknown | Current metadata comparison; exact URL/build unconfirmed | All four comparison pages reported without problems, fixture text where visible, and summary_large_image layout. Image color/domain not recorded separately; no fallback-source inference. |
| S024 | 2026-10-24 | WhatsApp; 2.26.40.77 inherited S005 | unknown | Current metadata comparison; exact URL/build unconfirmed | All four comparison pages reported without problems, fixture text where visible, and summary_large_image layout. Image color/domain not recorded separately; no fallback-source inference. |
| S025 | 2026-10-24 | discord.com; version unknown; inherited S007 | unknown | Current metadata comparison; exact URL/build unconfirmed | All four comparison pages reported without problems, fixture text where visible, and summary_large_image layout. Image color/domain not recorded separately; no fallback-source inference. |
| S026 | 2026-10-24 | LinkedIn Post Inspector; web | unknown | Current metadata comparison; exact URL/build unconfirmed | All four comparison pages reported without problems, fixture text where visible, and summary_large_image layout. Image color/domain not recorded separately; no fallback-source inference. Retain prior explicit correction: LinkedIn has no visible card description; generic success report does not retract it. |
| S027 | 2026-10-24 | LinkedIn Post Inspector; web | unknown | Current image cases; exact URL/build unconfirmed | Image URL/format/failure batch; actual shared URLs, cache/settings, layout and other text not recorded. Grouped note: still no descriptions, so absent descriptions are recorded for this batch. |
| S028 | 2026-10-24 | Molly; v8.19.2-4 inherited S006 | unknown | Current image cases; exact URL/build unconfirmed | Image URL/format/failure batch; actual shared URLs, cache/settings, layout and other text not recorded. Grouped note: still no descriptions, so absent descriptions are recorded for this batch. |
| S029 | 2026-10-24 | Discord; version unknown; inherited S007 | unknown | Current image cases; exact URL/build unconfirmed | Image URL/format/failure batch; actual shared URLs, cache/settings, layout and other text not recorded. |
| S030 | 2026-10-24 | Instagram; version unknown; inherited S009 | unknown | Current image cases; exact URL/build unconfirmed | Image URL/format/failure batch; actual shared URLs, cache/settings, layout and other text not recorded. |
| S031 | 2026-10-24 | WhatsApp; 2.26.40.77 inherited S005 | unknown | Current image cases; exact URL/build unconfirmed | Image URL/format/failure batch; actual shared URLs, cache/settings, layout and other text not recorded. Clarified: all three cards appeared with no main images. Favicon bottom right only in SVG case. |
| S032 | 2026-10-24 | LinkedIn Post Inspector; web; inherited S027 | unknown | Current text cases; exact URL/build unconfirmed | Five-client text batch: all worked fine; different title/description cutoffs. Exact characters, individual cutoffs and settings not recorded. Prior explicit LinkedIn no-description correction retained. |
| S033 | 2026-10-24 | Molly; v8.19.2-4 inherited S006 | unknown | Current text cases; exact URL/build unconfirmed | Five-client text batch: all worked fine; different title/description cutoffs. Exact characters, individual cutoffs and settings not recorded. |
| S034 | 2026-10-24 | discord.com; version unknown; inherited S007 | unknown | Current text cases; exact URL/build unconfirmed | Five-client text batch: all worked fine; different title/description cutoffs. Exact characters, individual cutoffs and settings not recorded. Discord example preserved as reported shortest/minimum visible title, not a universal character limit. |
| S035 | 2026-10-24 | Instagram; version unknown; inherited S009 | unknown | Current text cases; exact URL/build unconfirmed | Five-client text batch: all worked fine; different title/description cutoffs. Exact characters, individual cutoffs and settings not recorded. |
| S036 | 2026-10-24 | WhatsApp; 2.26.40.77 inherited S005 | unknown | Current text cases; exact URL/build unconfirmed | Five-client text batch: all worked fine; different title/description cutoffs. Exact characters, individual cutoffs and settings not recorded. |
| S037 | 2026-10-24 | LinkedIn Post Inspector; web; inherited S032 | unknown | Current noindex cases; exact URL/build unconfirmed | Both noindex cases still showed cards: with-preview appeared the same as reference; no-image had no image. Text, image color and exact geometry not recorded separately. No search indexing or HTTP verification. Prior explicit LinkedIn visible-description absence retained. |
| S038 | 2026-10-24 | Molly; v8.19.2-4 inherited S006 | unknown | Current noindex cases; exact URL/build unconfirmed | Both noindex cases still showed cards: with-preview appeared the same as reference; no-image had no image. Text, image color and exact geometry not recorded separately. No search indexing or HTTP verification. |
| S039 | 2026-10-24 | discord.com; version unknown; inherited S007 | unknown | Current noindex cases; exact URL/build unconfirmed | Both noindex cases still showed cards: with-preview appeared the same as reference; no-image had no image. Text, image color and exact geometry not recorded separately. No search indexing or HTTP verification. |
| S040 | 2026-10-24 | Instagram; version unknown; inherited S009 | unknown | Current noindex cases; exact URL/build unconfirmed | Both noindex cases still showed cards: with-preview appeared the same as reference; no-image had no image. Text, image color and exact geometry not recorded separately. No search indexing or HTTP verification. |
| S041 | 2026-10-24 | WhatsApp; 2.26.40.77 inherited S005 | unknown | Current noindex cases; exact URL/build unconfirmed | Both noindex cases still showed cards: with-preview appeared the same as reference; no-image had no image. Text, image color and exact geometry not recorded separately. No search indexing or HTTP verification. |
| S042 | 2026-10-24 | LinkedIn; inherited Inspector context from S037 | unknown | Current canonical variants; exact URL/build unconfirmed | Three canonical variants: cards reported fine; displayed domain 37d5d3ff.astro-metadata-lab.pages.dev. Click destinations and Inspector fetched/canonical fields not recorded; no search-canonical inference. Prior visible-description absence retained. |
| S043 | 2026-10-24 | Molly; v8.19.2-4 inherited S006 | unknown | Current canonical variants; exact URL/build unconfirmed | Three canonical variants: cards reported fine; displayed domain astro-metadata-lab.pages.dev. Click destinations and Inspector fetched/canonical fields not recorded; no search-canonical inference. |
| S044 | 2026-10-24 | WhatsApp; 2.26.40.77 inherited S005 | unknown | Current canonical variants; exact URL/build unconfirmed | Three canonical variants: cards reported fine; displayed domain astro-metadata-lab.pages.dev. Click destinations and Inspector fetched/canonical fields not recorded; no search-canonical inference. |
| S045 | 2026-10-24 | Discord; version unknown; inherited S007 | unknown | Current canonical variants; exact URL/build unconfirmed | Three canonical variants: cards reported fine; displayed domain none shown. Click destinations and Inspector fetched/canonical fields not recorded; no search-canonical inference. |
| S046 | 2026-10-24 | Instagram; version unknown; inherited S009 | unknown | Current canonical variants; exact URL/build unconfirmed | Three canonical variants: cards reported fine; displayed domain none shown. Click destinations and Inspector fetched/canonical fields not recorded; no search-canonical inference. |
| S047 | 2026-10-24 | LinkedIn; inherited Inspector context from S042 | unknown | Current redirect/404; exact build unconfirmed; paired with H004 HTTP evidence | Redirect preview matched explicit-og; clicked destination not recorded. 404 produced no card. |
| S048 | 2026-10-24 | Molly; v8.19.2-4 inherited S006 | unknown | Current redirect/404; exact build unconfirmed; paired with H004 HTTP evidence | Redirect preview matched explicit-og; clicked destination not recorded. 404 produced no card. |
| S049 | 2026-10-24 | Discord; version unknown; inherited S007 | unknown | Current redirect/404; exact build unconfirmed; paired with H004 HTTP evidence | Redirect preview matched explicit-og; clicked destination not recorded. 404 produced no card. |
| S050 | 2026-10-24 | Instagram; version unknown; inherited S009 | unknown | Current redirect/404; exact build unconfirmed; paired with H004 HTTP evidence | Redirect preview matched explicit-og; clicked destination not recorded. 404 showed a card with title and description; strings/image/layout not recorded. |
| S051 | 2026-10-24 | WhatsApp; 2.26.40.77 inherited S005 | unknown | Current redirect/404; exact build unconfirmed; paired with H004 HTTP evidence | Redirect preview matched explicit-og; clicked destination not recorded. 404 produced no card. |
| H001 | 2026-10-24 | curl; version unknown | unknown | Production alias; commit unknown | Manual GET request for exact .txt source returned 404. Server Date: 2026-10-24 00:14:17 UTC. |
| H002 | 2026-10-24 | curl; version unknown | unknown | Production alias; commit unknown | Manual eight-URL probe. GET without following redirects. Exact .txt source returned 200. |
| H003 | 2026-10-24 | curl; version unknown | unknown | Production alias; reported commit 886fe8b | New manual eight-URL probe after the push. GET without following redirects; expected 200/404/302 responses. Build URL not recorded. |
| H004 | 2026-10-24 | curl; version unknown | unknown | Production alias redirect/error-404; deployed commit unconfirmed | Two GET header captures without following redirects. Server Date: 2026-10-24 15:35:15 GMT. 302 with raw relative Location; 404 HTML with no-store. X-Robots-Tag absent from both captured blocks; evidence http/h004-headers.txt. |

S001–S004 register the reported theme-color preview observation only; they do
not establish other preview fields or a complete client setup. B001/B002 are
historical reports, not newly executed tests or complete browser coverage.
H001 and H002 used
`https://astro-metadata-lab.pages.dev`; the earlier 404's cause remains unknown.
B003–B006 register four browser environments. The browser worksheet contains icon
and initial theming observations; blank cells remain unreported. The per-case
records now contain those observations. The last
icon row was confirmed as Tor (B006).
The earlier B001/B002 reports keep their unknown versions; the new environment
list does not establish the versions used then.

The original target recorded for B003–B006 and H003 was
`https://astro-metadata-lab.pages.dev` with reported commit
`886fe8b63c31fe1915d1f9d7efbd90a0b50527f0`. The local checkout matched that commit
when H003 was recorded. The response-only probe and browser worksheet do not
independently identify the deployed commit. Preserve that historical context
after a push; a follow-up batch needs its own deployment reference.

### Theming batch — 2026-10-24

The seven original theming cases were observed across B003–B006 in the
existing dark-environment batch. B003–B005 showed light browser defaults without
a declaration, dark appearance with the meta declaration alone or with matching
CSS, white background/black text with hardcoded body colors and differently
styled native controls, dark system colors, and dark appearance in the duplicate
case. Tor (B006) was the exception: light appearance across those cases.
The worksheets and per-case records retain that exception. Exact control colors,
first paint and most individual text/background colors were not recorded.

The batch also recorded successful prefers-color-scheme emulation for the system
colors case and a switch to light in the duplicate case. The browser(s), exact
emulation setup and complete light-mode results were not identified. These
observations remain at batch level; they do not populate four light-mode rows.

For theme-color-media, no browser UI or link-preview color change was observed.
The preview clients were Signal, WhatsApp, Discord and Instagram (S001–S004).
App versions, native/web client, device/OS, surface, appearance,
comparison reference and cache conditions were not recorded. Those details
remain unknown. The original gray hint colors remain unchanged.

Tor's privacy protection is the stated explanation for its light appearance,
rather than a measured setting or media-query result in this run. Mozilla
documents light-preference spoofing in its fingerprinting protection discussion;
this supports the hypothesis without establishing the cause in this Tor build.
See [Mozilla's issue and developer explanation](https://bugzilla.mozilla.org/show_bug.cgi?id=1732114).
The follow-up runs below cover all five controls in the four available
browser environments. They do not establish complete real-light-mode coverage.

### Tor color-scheme follow-up — 2026-10-24

B008 keeps the new five-case run separate from B006. It
records light appearance for both `light dark` and `dark light`, dark for the
single `dark` declaration, and appearance matching the first declaration in the
two duplicate controls. The input and button matched each page's appearance.
This establishes that the tested Tor setup can render the dark native scheme;
the preference values and the cause of its light selection remain
unmeasured. The observed duplicate-order pattern is consistent with the
[HTML processing rules](https://html.spec.whatwg.org/multipage/semantics.html#meta-color-scheme).

When I recorded this run, local HEAD was
`ab2f459828fb61aff7541da0ad9600fe09c2a314`, which contains these controls. I did
not record the exact tested URL or deployed commit, so B008 does not assert
that deployment identity. Client details carry over from B006; this run does
not establish a new light-mode or emulated-mode run.

### Brave, Firefox and Vanadium follow-up — 2026-10-24

Dark appearance was recorded in all five comparison cases in Brave,
Firefox and Vanadium. B009–B011 keep those runs separate from the earlier
ones and inherit their client descriptions. I did not reconfirm OS/browser mode,
profile, emulation, media-query matches, exact colors or native controls.
These runs therefore record overall appearance without treating it as a
completed real-light-mode test. The tested URL/build remains unconfirmed.

### Firefox and Vanadium light-mode follow-up — 2026-10-24

B012 and B013 record the light-mode batch.
Both browsers showed light for `scheme-meta-only` and `scheme-meta-dark-first`,
dark for `scheme-meta-dark-only`, and an always-yellow responsive SVG favicon
with no change reported. I did not note native input/button appearance separately, or
the exact OS/browser settings, emulation, icon surface and tested deployment;
the light-mode label identifies the intended test context. I have no matching
Brave light-mode run.

Keep the unchanged yellow icon as an unresolved observation, separate from the
page's reported color scheme. Its cause was not investigated. Head/viewport
checks came next; further theming/icon diagnosis is deferred.

### Mobile viewport batch — 2026-10-24

B014 records the Vanadium portrait batch.
`viewport-absent` had a desktop-like layout with small text, and pinch zoom
worked. The width-only reference (`charset-first`) and
`viewport-with-initial-scale` looked normal. I did not record horizontal
overflow, pinch behavior on those two pages, browser identity, orientation or
exact settings separately; the client description carries over from B005.
I did not inspect charset fallback or the parsed DOM.

### Charset batch — 2026-10-24

B015–B018 record all three charset controls in all four registered
browsers. `charset-first`, `charset-after-ascii-padding` and
`charset-after-unicode-padding` each showed normal text, encoding `UTF-8`, and
response Content-Type `text/html; charset=utf-8`. Client descriptions carry over
from B003–B006; current settings, inspection method and tested deployment were
not recorded. The response header explicitly declares UTF-8, so this batch does
not isolate the effect of HTML charset position or establish fallback behavior
without an HTTP charset. Parsed-DOM placement and noscript remain unreported.

### Invalid-head DOM batch — 2026-10-24

B019 (Firefox) and B020 (Brave Origin) keep the Console JSON.
Both returned `HTML title — metadata-after-invalid-head-element` for
`document.title`. The inspected title, description, canonical and OG title each
had `body` as their direct parent. This records four selected elements, not an
inspection of every metadata tag or proof that social crawlers consume them.
Client versions and OS carry over from B004/B003; settings, exact tested
URL/build and a separate visual tab-title observation were not recorded.
Noscript with scripting enabled/disabled remains the next browser check.

### Noscript batch — 2026-10-24

B021 records Firefox with scripting enabled and disabled as separate conditions.
Enabled: the tab label was the production-alias case URL; the three parent fields
were left as placeholders and remain unreported. Disabled: the tab label was
`HTML title — metadata-in-noscript`. The parent fields held the title text, description
content and canonical href instead, with an explicit note that the elements
moved out of noscript to become direct children of head. The saved parent
locations use that explanation; the raw output is kept in the case record.

The reported canonical href uses the `37d5d3ff.astro-metadata-lab.pages.dev` host,
whereas the enabled tab label uses the stable production alias. Preserve both
values: the actual disabled document URL, redirect behavior and deployed commit
were not recorded. Review canonical-origin configuration during hosting checks;
this batch does not identify the cause of the differing hosts. No other browser
has a recorded noscript scripting-on/off comparison.

### Language batch — 2026-10-24

B022 records the Firefox desktop batch. All
four cases had normal-looking text. Console output showed document languages
`en`, `fr`, `ar` and `en`, respectively. Only the Arabic case had a `dir`
attribute (`rtl`) and computed RTL direction; the other three had no `dir`
attribute (`null`) and computed LTR direction. In the Arabic case, English text was
specifically observed on the right side of the page.

The mixed page retained its marked French passage (`Texte original en français.`)
with `lang=fr`; the other inspected pages had no `main [lang]` matches. Exact
Console JSON is kept per case. Browser/OS details carry over from the B004
Firefox setup; the exact deployment and settings were not recorded. These
observations do not test translation quality, screen-reader pronunciation,
keyboard behavior or complete bidirectional-text handling.

### JSON-LD batch — 2026-10-24

B023 records the Firefox JavaScript-enabled batch.
The unsafe case threw `SyntaxError: JSON.parse: unterminated string literal at
line 1 column 60 of the JSON data`. Its Console state was `extraImage=true` and
`flag="true"`. My output began with `json=404`; because the JSON parse result
showed separately as a SyntaxError, 404 is recorded as the interpreted image
request status, not a JSON result or the HTML page's status.

The escaped case parsed to an object with the complete name string containing
the script-end/image markup as data. No `unintended-request.png` appeared
in Network, `extraImage=false` and `flag="undefined"`. Preserve these as separate
parsing, DOM, Network and runtime observations. The client context carries over
from B004; exact deployment and settings were not recorded. No other browser or
scripting-disabled JSON-LD result is recorded.

### Production-alias metadata origin — 2026-10-24

B024 keeps the manual Console inspection of `precedence/all-fields` at the
stable production alias. The canonical, OG URL and both social image URLs all
used `37d5d3ff.astro-metadata-lab.pages.dev`. Exact JSON is kept in the case
record. This confirms differing document and metadata hosts; it does not inspect
HTTP redirects, image reachability, response headers or the build environment.
The deployment hostname is not asserted to be the full Git commit.

In the repository, `CASE_ORIGIN` overrides `CF_PAGES_URL`; when it is absent,
the latter provides the deployment origin. The observed output is consistent
with that fallback, but I did not record the live environment-variable values.
The fix is to set production `CASE_ORIGIN=https://astro-metadata-lab.pages.dev`
and rebuild, then repeat the live inspection before social-DM tests.
This record update makes no production dashboard change or deployment.

### Next batch decision — 2026-10-24

I went ahead with message-preview tests directly, deferring the origin
change/redeployment. Keep the current deployment and retain B024's observed
metadata host as context. The first batch is the five precedence controls in
WhatsApp's sent view; that is a plan, not a recorded platform result. Each new
S run still needs its actual app/client/version/device/surface and observations.

### First message-preview batch — 2026-10-24

S005–S009 record WhatsApp, Molly, Discord, LinkedIn and Instagram in this
order: html-only, og-vs-html, twitter-vs-html, all-fields, twitter-first. I noted
one A/B/C marker plus image per case, and a later note explicitly confirmed that each marker
applies to both title and description. Each case record therefore stores the
same marker in those two separate fields.

| Run / platform (title and description / image) | html-only | og-vs-html | twitter-vs-html | all-fields | twitter-first |
| --- | --- | --- | --- | --- | --- |
| S005 / WhatsApp | A / none | B / red | C / green | B / red | B / red |
| S006 / Molly | A / none | B / red | A / none | B / red | B / red |
| S007 / Discord | A / none | B / red | C / green | B / red | C / red |
| S008 / LinkedIn | error | error | error | error | error |
| S009 / Instagram | A / none | B / red | A / none | B / red | B / red |

Every reported image-bearing card had a large-image layout. I did not note the layout of
cards without images. WhatsApp displayed the stable domain and a bottom-right
favicon; the icon appearance/file was not identified. Body marker D was also
observed on the pages in that WhatsApp run; this is not a preview-description
observation. Molly displayed the same stable domain; do not
merge it with the older Signal theme-color run.

LinkedIn's exact message was `Cannot display preview. You can post as is, or try
another link.` The surface was not identified; do not label this a sent DM or
infer a crawler failure reason from the wording. Devices, browser versions for
web clients, caching conditions and destinations after tapping were not recorded.
Keep the known B024 metadata-host difference as context, not as the cause.

Next diagnostic: inspect the stable-alias all-fields URL in LinkedIn Post
Inspector and record the result separately from a DM or post-composer preview.
[LinkedIn documents Post Inspector](https://www.linkedin.com/help/linkedin/answer/a6233775)
for refreshing previews, and its
[sharing guidance](https://www.linkedin.com/help/linkedin/answer/a521928/making-your-website-shareable-on-linkedin?lang=en)
mentions access problems when fetching otherwise suitable images. Neither source
establishes the cause of this run's error.

That later note explicitly confirmed that the A/B/C letters apply to both
preview title and description. In S007's twitter-first case both fields were C while the image
stayed red; this is a field-specific observation for that run, not a general
claim about Discord's parsing implementation.

### LinkedIn Inspector follow-up — 2026-10-24

I clarified S008 afterwards: all five earlier errors occurred while composing a
post and waiting for its preview. The case surface is post composer; these are not DM
results. Preserve the errors when recording the separate
Inspector result S010 or a future composer retry.

S010 successfully generated an all-fields preview. It showed `OG TITLE B` and
the deployment-specific domain. Gathered metadata included `OG DESCRIPTION B`
and a LinkedIn-hosted image URL. I did not note the image's color or layout;
do not import the earlier batch's red/large observations into this run.
The Inspector trail showed the stable-alias URL with 200 Success, while the
canonical it showed kept the deployment-specific host. HTTP response headers and
image-origin fetch status were not recorded.

The Inspector warned that the description should be at least 100 characters,
but still produced the preview. Keep this as a tool recommendation rather than
a minimum-length requirement for the template or evidence of the earlier error's
cause. Inspector also reported Type Article; the local fixture declares OG type
website, so retain both facts without claiming how LinkedIn chose its type.
Author and publish-date fields reported no values found; do not add article
metadata to this generic fixture merely to fill those fields.

This successful scrape shows the differing canonical host did not prevent this
Inspector preview. It does not establish the cause of S008 or a successful DM or
post-composer retry. Next: try just all-fields again in the same post composer
after inspection, without publishing; record the outcome as a fresh run.

### LinkedIn five-case Inspector batch and correction — 2026-10-24

S011 records the expanded Inspector batch, separately from S008's post-composer
errors and S010's detailed all-fields ingestion result.

| Case | Visible title | Visible description | Image |
| --- | --- | --- | --- |
| html-only | A | none | none |
| og-vs-html | B | none | red |
| twitter-vs-html | A | none | none |
| all-fields | B | none | red |
| twitter-first | B | none | red |

The displayed domain was `37d5d3ff.astro-metadata-lab.pages.dev` in all five.
Layout, exact URLs fetched for the other four controls and extracted metadata
for those controls were not recorded. Do not reuse the earlier note
that letters applied to both fields: this Inspector batch explicitly had no
visible descriptions, so its letters identify titles only.

A later correction covers the earlier Inspector description observation: no description
appeared in LinkedIn's preview, including the earlier inspection. S010's copied
metadata table contains `Description: OG DESCRIPTION B`; retain this as extracted
data, separate from the now-confirmed absence on the preview card. No
claim that a description appeared on the card is warranted.

The 100-character warning might explain the missing descriptions.
Record this as an untested causal hypothesis. Successful card generation and
no visible description do not isolate description length; keep the test markers
short until a controlled description-length experiment is agreed.

The Inspector also made an author suggestion:
`<meta name="author" content="[Author name here]">`. It did not provide an
alternative/tag suggestion for publication date. These are tool guidance, not
new fixture metadata or approved starter requirements. The starter should offer
optional, truthful author/date fields for content that has them; avoid invented authors
or build timestamps. Open Graph defines `article:published_time` for article
publication dates ([specification](https://ogp.me/#type_article)); Schema.org
`datePublished` describes first publication ([definition](https://schema.org/datePublished)).
Neither source establishes which date markup this LinkedIn Inspector consumes.

Next remains one fresh all-fields retry in the original LinkedIn post composer,
after Inspector, without publishing. No source or Cloudflare setting changed.

### LinkedIn post-composer retry — 2026-10-24

S012 records an all-fields retry in the same post composer after the
successful Inspector observations. It returned the same
error: `Cannot display preview. You can post as is, or try another link.` Keep
this failed retest separate from S008's first batch and S010/S011's Inspector
successes. This is still a post-composer result, not a DM test; the cause remains
unidentified. There was no new HTTP evidence, configuration change or
publication. Do not infer an author/date requirement or attribute the failure to
the canonical host or short description from this message alone.

Next, test just all-fields in a LinkedIn direct-message test conversation and
observe the sent card. This addresses the original DM scope without requiring
further post-composer debugging or a Cloudflare configuration change. Register
the actual surface with the next observation; no DM outcome is assumed.

### LinkedIn DM and external control — 2026-10-24

S013 records the all-fields DM check: no preview in LinkedIn direct messages.
I also tried `deadhead.cevdet.ch`, which showed no preview there either, and on
that basis I disputed the earlier origin-change explanation. Preserve that control as
observed; the exact deadhead URL/path, metadata, response headers, wait and
client settings were not recorded, nor whether the observation was in a draft,
sent message or received message.

Together with Inspector successes, this weakens a lab-specific hostname
explanation; it does not establish the cause, prove that LinkedIn never creates
DM previews or diagnose a setting on this account. Defer further LinkedIn
retries and continue with the OG-only omission controls in the other clients.
No fixture or Cloudflare setting changed.

### OG-only omission batch — 2026-10-24

S014–S017 record Discord, Molly, WhatsApp and LinkedIn Inspector for the three
OG-only omissions. A later note confirmed the otherwise unchanged fields in all
three grouped clients, and a further note retracted the description part for
LinkedIn: it still showed no description. Molly/WhatsApp retained description
B/red in no-title and title B/red in no-description. Title, description and image
are stored independently.

| Run / client | og-no-title (title / description / image) | og-no-description | og-no-image |
| --- | --- | --- | --- |
| S014 / Discord | none / none / red | B / none / red | B / B / none |
| S015 / Molly | A / B / red | B / A / red | B / B / none |
| S016 / WhatsApp | A / B / red | B / A / red | B / B / none |
| S017 / LinkedIn Inspector | A / none / red | B / none / red | B / none / none |

These compare against og-vs-html without a competing Twitter title, description
or image. Discord did not visibly fall back to HTML title/description in these
runs. Its no-title result does not establish whether it parsed and discarded the
remaining OG description or followed another rendering rule.

S017's initially grouped description values were later corrected to none.
Its titles and images remain; this now matches the earlier absence of visible
Inspector descriptions. Preserve the correction history without treating the
retracted values as another observed behavior. The warning's cause is untested.
The exact client view for the other apps, build, cache conditions and layouts
were not recorded. Instagram's omission batch remains unreported.

Design implication to review: explicit OG title/description improve the observed
Discord behavior. A starter can accept title/description once and emit HTML and
OG tags from those values, with overrides only when needed. This is a design
recommendation, not an implementation or a final scope agreement.

Next, compare og-without-twitter, no-card and summary-card against the existing
og-vs-html/all-fields references to examine whether twitter:card buys anything
in the tested surfaces. No fixture change or redeployment is needed.

### Card-layout batch and LinkedIn correction — 2026-10-24

A later note confirmed that LinkedIn still showed no description. S017's three
visible description fields are corrected to none; its A/B/B titles and
red/red/none images remain. This retracts my mistaken grouped description note
rather than establishing a different rendering or a metadata-extraction failure.

S018–S021 cover og-without-twitter, no-card and summary-card. Discord showed
`summary` layout in all three, with title B, description B and red image. Molly,
LinkedIn and Instagram showed the same `summary_large_image` appearance across
these controls. My Signal label here meant the earlier Molly app; do not create
an official Signal run. I did not record other text/image fields for those three
clients, except the LinkedIn no-description correction.

Retain summary/summary_large_image as the observed visual labels. Exact thumbnail
geometry, cache/settings and client view were not described. Do not equate a
visual label with proof of which tag the platform parsed. LinkedIn inherits the
Inspector context; it is not a successful DM or post-composer result.
WhatsApp's card-layout batch remains unreported.

Compared with the earlier large-image Discord references, this supports keeping
summary_large_image as a default image-card hint for that client, while the
reported Molly/LinkedIn/Instagram layout did not change. This recommendation
still needs the broader scope/design agreement; X has not been tested.

Next, compare metadata/explicit-og with no-og-type, no-og-url and
image-without-dimensions in the same clients/views. Those raw fixture titles are
case-specific; record the actual visible text rather than A/B/C/D markers.

### OG type/URL/dimensions comparison — 2026-10-24

S022–S026 record Molly, Instagram, WhatsApp, Discord and LinkedIn Inspector for
metadata/explicit-og, no-og-type, no-og-url and image-without-dimensions. I noted
no problems in any case, the fixture texts and summary_large_image
appearance. Save this as a successful reference comparison,
not independently measured dimensions or proof of which fallback tags were read.
Image colors, displayed domains, destinations and exact client settings were
not recorded separately.

The earlier repeated correction that LinkedIn shows no description stays
in force; this generic successful comparison is not an explicit reversal.
Its title matches the fixture where shown, with description none. For other
clients I noted the fixture texts without quoting them. These cases have equal
HTML and OG text, so a matching card cannot identify which source the client used.

The tested consumers showed no reported visual regression when OG type, OG URL
or image dimensions were omitted. This does not prove equivalence on X/Facebook,
OG protocol conformance, canonical substitution or crawler fetch efficiency.
No starter design decision or fixture change is implied by these observations.

Next, compare root-relative image, SVG image and missing-image cases against the
recorded explicit-og reference. The SVG fixture also uses a small square icon
rather than the large red PNG and omits dimensions; do not attribute a failure
to SVG format alone without controlling those other differences.

### Image URL/format/failure batch — 2026-10-24

S027–S031 record LinkedIn Inspector, Molly, Discord, Instagram and WhatsApp.
My notes labelled the missing-image control `image-missing-missing`; it maps to
the intended `metadata/image-missing`, and the label is kept here. The exact
shared URL was not recorded, so a different actual URL is not ruled out.

| Run / client | Root-relative image | SVG image | Missing image |
| --- | --- | --- | --- |
| S027 / LinkedIn Inspector | works | none | none |
| S028 / Molly | works | none | none |
| S029 / Discord | works | none | placeholder: Image failed to load |
| S030 / Instagram | works | blue-circle SVG | placeholder; text unreported |
| S031 / WhatsApp | none; card present | none; card present | none; card present |

The LinkedIn/Molly grouped note says still no descriptions; retain that
absence in these new runs rather than changing earlier Molly runs. For
Discord/Instagram, title/description values and layouts were not recorded.
Root-relative success is not an image-color measurement or proof of which URL
was fetched. SVG is a small square blue icon rather than the red PNG; the other
input differences prevent attributing a failure to file format alone.

I later clarified WhatsApp's all-do-not-work note: all three cards appeared,
but none had a main image. A bottom-right favicon was explicitly observed only
in image-svg. Record this separately from the main social image; it does not
establish main SVG image support. I did not record title/description values in
that clarification.

The different missing-image behaviors demonstrate why absent, placeholder and
whole-card failure need separate result fields. An absolute PNG remains the
best-supported candidate default from these runs, without declaring other
formats universally unsupported or claiming a cause for WhatsApp's failures.

Next, use escaped-text, unicode-text and long-title on the same clients/views.
Record literal characters and truncation without a build-time character limit.

### Escaping, Unicode and truncation batch — 2026-10-24

S032–S036 record escaped-text, unicode-text and long-title in the same five
clients: all worked fine. Save normal reported appearance, not an exact
character-by-character audit, screen-reader test or font coverage claim. I did
not copy titles/descriptions literally in this batch; keep the prior explicit
LinkedIn no-visible-description correction in force. Other clients' description
presence was not reconfirmed independently of this general result, including
Molly's preceding image-batch absence.

Title/description cutoffs differed across clients. My notes describe this
Discord example as the shortest/minimum visible title:

```text
A long but valid descriptive title A long but valid descriptive tit...
```

Do not count that example as a universal supported length, assume identical
cutoffs in another viewport or invent the other clients' visible endings. Exact
layout/viewport, clipping mechanism, image details and cache conditions remain
unreported. General description truncation was not mapped to individual cases.

Design recommendation: preserve complete metadata strings, escape them correctly
and offer concise-writing guidance rather than silently clipping them to an
arbitrary shared character limit. This remains a recommendation for the future
starter, not a code change.

Next, compare indexing/noindex-with-preview and noindex-no-image against the
recorded ordinary reference in the same clients/views. They separate indexing
and social-preview inputs. The no-image variant also omits twitter:card; do not
interpret layout differences as an image-only controlled comparison.

### Noindex sharing batch — 2026-10-24

S037–S041 record the same five clients.
Both cases showed cards. noindex-with-preview retained the reported reference
appearance; noindex-no-image showed a card without an image. Actual title and
description strings, image color, layout geometry, cache/settings and exact
build were not recorded. Keep LinkedIn's explicit visible-description absence
rather than interpreting same-way as a reversal.

These preview observations do not test whether a search engine indexed the URL,
measure HTTP X-Robots-Tag handling or make noindex a mechanism for preventing
previews. The no-image fixture also removes twitter:card, so its layout is not
an image-only controlled result. Header-only noindex is a separate unmeasured
case until the actual response headers are captured.

The prior preference to skip automatic image generation on noindex pages remains
recorded design context; this batch does not change that preference or implement
it. The observations show it would be an explicit starter policy rather than a
requirement demonstrated by these client preview behaviors. No image generator,
fixture metadata or Cloudflare setting changed.

Next, examine canonical-absent, canonical-relative and canonical-cross-origin in
the same clients/views. Record card fields, displayed domain and actual target
where observed, without equating preview identity with search-engine canonical
selection or treating Inspector as a DM.

### Canonical preview batch — 2026-10-24

S042–S046 record canonical-absent, canonical-relative and
canonical-cross-origin across the same five clients. All three cards were
reported fine in each client. LinkedIn showed the deployment-specific domain;
Molly/WhatsApp showed the stable production alias; Discord/Instagram showed no
domain. The last observation is a checked absence in this batch, not a reason
to fill every earlier unreported domain field.

Actual title/description strings, image color and layout were not recorded
separately. Retain LinkedIn's explicit no-visible-description correction. Clicked
destinations and Inspector's fetched/canonical URL details were not recorded;
a displayed domain does not identify which tag a client read or prove that a
canonical was followed, ignored or chosen by a search engine.

The cross-origin fixture points its HTML canonical at an intentionally
unavailable .invalid origin while OG URL and other identity inputs remain.
The successful cards do not isolate those inputs or justify removing canonical
support from the starter. No origin configuration or fixture was changed.

Next, observe redirect and error-404 after capturing their current HTTP headers.
The fixtures expect 302 and 404; browser/card appearance alone does not verify
those statuses. Compare redirect preview with explicit-og, record any final URL,
and keep a missing card separate from an error-page card.

### Redirect/404 headers and previews — 2026-10-24

H004 contains the captured HTTP/2 headers, mapped in command order.
Redirect returned 302 with raw Location `/cases/metadata/explicit-og/` and
Content-Type `text/plain;charset=UTF-8`; the error route returned 404 with
`text/html; charset=utf-8` and `Cache-Control: no-store`. Both show server Date
2026-10-24 15:35:15 GMT. No X-Robots-Tag appears in either captured header block.
No body was captured and these commands did not follow the redirect. Keep the
relative raw Location separate from the absolute target derived using the
probed production origin.

S047–S051 record preview outcomes: redirect matched explicit-og in all five
clients; 404 produced no card except Instagram, which showed title/description.
The Instagram strings, image and layout were not recorded, and neither was a
clicked final URL. Inspector remains distinct from LinkedIn DMs or composer.
A 404 status and omission of OG identity did not suppress Instagram's card in
this run; these results do not establish a general guarantee for other clients.

X and Facebook Messenger cannot be tested now because those accounts are
unavailable. Mark them untested/unavailable for this round; do not claim coverage
or make their absence a reason to repeat other clients' tests. Advanced negative
controls, installation/accessibility surfaces, header-only noindex and remaining
host variants remain separate coverage gaps. The core available-client preview
round now supports a preliminary design review, not universal compatibility.

### Agreed OG identity default — 2026-10-24

og:type and og:url are retained by default, and the docs state explicitly
that their omission did not change the observed previews. S022–S026
reported no visible difference for the individual omissions across Molly,
Instagram, WhatsApp, Discord and LinkedIn Inspector. Retention is for protocol
conformance, not an experimentally demonstrated preview improvement. X/Facebook
were unavailable. This agreement does not approve the complete starter design,
change any historical result or authorize starter implementation.

### Agreed omission of OG dimension tags — 2026-10-24

The chosen default omits og:image:width and og:image:height, rather
than emitting them whenever known. Keep the actual social image at a useful
recommended size; the proposed concrete generator default is the already tested
1200×630 PNG and remains to confirm. S022–S026 reported no visible regression
without dimension tags. The source protocol defines them as optional.

Do not turn an expectation of compatibility into a guarantee: matching
image dimensions does not establish all-client fetching/cropping behavior, and
X/Facebook were unavailable. This head-metadata decision also does not remove
layout sizing from visible HTML images. No fixture, generator or starter code
changed; the complete design and implementation remain unapproved.

### Agreed generated-image output — 2026-10-24

The generator's default output is confirmed as 1200×630 PNG. This settles
actual image dimensions and file format, while OG width/height tags remain
omitted by the separate agreed policy. Manual image overrides remain supported
without requiring this exact canvas. Image content/layout, fonts, renderer,
build cost and the complete starter design remain to agree. No source fixture,
asset, dependency or generator implementation changed.

### Project-dependent social-image content — 2026-10-24

Whether the default image should contain only a title or also a
description depends on the project. Keep that
choice in the editable design source already discussed. Existing page metadata
can supply its content without requiring duplicate text configuration. Neither
layout is a universal requirement; the concrete sample design and rendering
implementation remain undecided. The agreed 1200×630 PNG output and omission
of OG dimension tags are unchanged. No fixture, observation or generator code
changed.

### Metadata baseline review and favicon alternative — 2026-10-24

I accepted the proposed metadata baseline, which left the question of whether
the first starter should use only ICO. Keep this favicon choice open. ICO-only has recorded
success in Brave, Firefox and Vanadium and an unidentified Tor icon; svg-any
showed the expected SVG in all four recorded environments. Choosing one ICO
would reduce maintained assets but is not a compatibility improvement established
by these observations. No new browser test was run, and no fixture or asset
was removed. Complete starter design and implementation approval remain pending.

### Agreed ICO-only default — 2026-10-24

I chose ICO-only as the default, with SVG as a documented alternative;
the open question was whether the ICO should be 48×48 or 32×32. Embedded sizes remain open.
The recommendation is one file containing 16/32/48/64px entries, with one explicit
icon link and no sizes attribute. Google currently recommends larger than 48×48;
the lab's existing multi-size fixture covers 16/32/48px, not the proposed 64px
addition. This is a design recommendation, not a new browser observation. No
fixture or asset changed.

### Single-entry 48px ICO and favcon generation — 2026-10-24

I chose a single 48×48 entry, generated using favcon, instead of the
proposed multi-size ICO. Added assets/icon-blue48.ico using the existing icon-blue.svg
lab artwork. The root favicon and all existing comparison fixtures/results are
preserved; this asset is not yet referenced by a browser case.

Generation used favcon commit 88c85d84db84ab65a9fe0c2fdb88d9f5f762c6a5,
whose working tree was clean, through its SVG optimization, square normalization,
renderer, PNG encoding/finishing and ICO packing functions. The render and pack
size was 48, palette ceiling 256, finishing iterations 120. Engine versions were
@napi-rs/image 1.15.0 and @gfx/zopfli 1.0.15. No favcon source or default changed;
its existing lower-level functions accept 48px directly.

The 48px export is 424 bytes; a same-source, same-settings 32px comparison was
331 bytes, a 93-byte increase for this artwork only. Verified one ICO entry,
48×48 directory dimensions, a matching 48×48 embedded PNG, payload length and
offset. This is structural verification, not a browser or Google Search result.
