# Test results

Tell me the browser or app and device once, then send case IDs and observations.
I will register the test run and update the tables. You can report one case or a
batch; you do not need to edit files or JSON.

[Reporting shortcuts](reporting.md) defines the icon labels and copyable formats
for each test group. Use `astro`, `blue-circle` or `red-square` for the first icon
batch; later controls also use green/blue squares and a yellow circle. These
names describe appearance, not the selected file or format.

Each of the 118 fixtures has a record under `cases/<group>/<id>.md`. The
[record index](index.md) lists the cases and their test surfaces.
[Test runs](sessions.md) holds the shared browser/app version, device, OS,
deployment and conditions. [Hosting results](hosting.md) holds HTTP probes.
The website exposes the same per-case tables at `/cases/results/` after a build.

## Start a browser run

Send what you know; leave missing details unknown:

```text
Browser: Firefox, version ...
Device / OS: ...
Testing URL / deployment: ...
Appearance: system light / dark
Profile: normal / fresh / private; extensions or overrides if relevant
Surface: browser tab
```

Then send results like this. These are format examples, not recorded observations:

```text
icons/ico32-svg = blue-circle in the tab
icons/svg-ico32 = red-square in the tab
icons/svg-responsive = blue-circle in light mode; yellow-circle in dark mode
```

I will give the run a `B...` ID. You can use that ID in later messages instead of
repeating the details. When the device, browser version or deployment changes,
start a new run. Record light/dark modes and different UI surfaces as separate
rows within a run. Keep surprising reruns alongside the original observation.

## Browser testing order

The registered browser matrix is B003 (Brave Origin on Arch Linux), B004
(Firefox on Arch Linux), B005 (Vanadium on Android 17) and B006 (Tor Browser Alpha
on Android 17). Full versions live in `sessions.md`. Their rows remain not tested.
Start with the four icon controls in B003, then repeat the same controls in the
other three browsers. Report the mode and visible icon surface with each batch;
for Tor include the security level if known. On mobile, use a tab switcher or
other surface that exposes the icon and name that surface in the report.

1. Icons: start with `icon-svg-only`, `icon-ico-only`, `ico32-svg` and `svg-ico32`.
   Then test the remaining icon cases in that browser. Open the fixture in its
   own top-level tab. Report the icon you see and where you see it; if the UI
   has no visible icon, say so.
2. Theming: test all seven cases in system light and dark mode. Report page
   background/text, native controls, toolbar color and first-paint changes
   separately. Test `icons/svg-responsive` in both modes too.
3. Mobile head/viewport and language: use the head and language groups. Record
   orientation, scripting settings and HTTP charset where relevant. Separate
   rendered language/direction from assistive-technology behavior.
4. Bookmarks, home screen and manifests: record each action separately. Record
   existing installations and profiles; the enabled manifests share one app ID
   and start URL. These controls test online launch.
5. Developer checks: inspect the two JSON-LD script-end controls with DevTools
   where available. Their tables describe the parsing/request observations.

Repeat on available desktop and mobile browser/OS combinations. Browser identity
includes the OS; results from one device do not fill another device's rows.
The records assign 44 cases to browser observation. Metadata-only comparisons
belong in the social-DM phase, so they do not require repetitive browser checks.

## Then test website links in direct messages

Start a separate `S...` run for each platform, app version and device/surface:
LinkedIn, Discord, X, WhatsApp, Instagram and Facebook Messenger. A web client
also needs the browser/version. Record sender and receiver environments
separately when they differ.

```text
Platform / app version: WhatsApp ...
Device / OS: ...
Surface: received DM
Testing URL / deployment: ...
Link-preview setting and first share / retest: ...
```

Send one fixture URL per message. Begin with these five precedence cases:
`html-only`, `og-vs-html`, `twitter-vs-html`, `all-fields`, `twitter-first`.
Report composer, sent and received previews as separate observations.

```text
precedence/all-fields
Title: OG TITLE B
Description: not shown
Image: green
Layout: large image above title
Tap destination: ...
```

That is another format example. A client can combine sources, so copy the title,
description and image independently. The D marker identifies body text. After
the first round, use the omissions/empty/broken-image pairs from the testing
guide, then the other metadata, canonical, language and indexing cases.
The 84 social-relevant records include a row for each target platform. Those
rows are a coverage checklist; start with the five cases before expanding it.

## Record uncertainty

- `not tested`: nobody has reported this combination.
- `not shown`: the tested surface exposes no visible icon/field.
- `no preview`: the app showed no card for the tested URL.
- `unknown`: the supplied evidence does not identify a value or condition.
- `reported`: a user supplied the observation; describe any supporting evidence.

A missing card does not tell us which tag a platform ignored. Record the exact
shared URL, including query strings, and the deployment when known. A query
suffix does not prove that a platform scraped fresh HTML. Record cache/profile
changes and screenshots as evidence without turning them into universal rules.

## Files and updates

The Markdown tables in this folder hold new observations. The older
`browser-observations.json` and `social-observations.json` remain as the initial
snapshot files; the catalogue labels the former as early reports. The two early
Brave/Firefox reports and the supplied HTTP probe have been transcribed here
with their missing versions, devices and deployment commits marked unknown.

Keep observations in result pages rather than changing fixture HTML. Website
tables update after rebuilding and deploying the repository; they do not save
browser input. When adding a fixture, add its record and update `index.md` too.
Escape literal pipes and HTML characters when entering observed text in Markdown
tables so the displayed title/description stays intact.
