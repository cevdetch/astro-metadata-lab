# Test results

Tell me the browser or app and device once, then send case IDs and observations.
I will register the test run and update the tables. You can report one case or a
batch; you do not need to edit files or JSON.

## Fill-in matrices

For hand entry, fill these files and return them:

- [browser-test-table.md](browser-test-table.md): browser rows and case columns,
  with separate light/dark theming matrices.
- [link-preview-test-table.md](link-preview-test-table.md): platform rows and
  case columns for direct-message previews.
- [http-test-table.md](http-test-table.md): response fields and request columns
  for host checks.

Names appear once in each file's key; the matrices use short IDs. Full browser
versions and shared deployment details stay in `sessions.md`. Empty input/result
cells contain exactly two spaces. Fill these worksheets once; when you return
them, I will update the detailed records without asking you to copy values into
each case file too. Preserve earlier observations when a rerun differs.

Each worksheet proposes a reporting standard beside its groups: what to observe,
which fields/values to write and a clearly marked example. Examples describe
format only. Use the suggested labels when they fit; describe unexpected behavior
in `note=...` rather than forcing it into an expected result. Blank means no
report yet, `none` means checked but not visible, `not tested` means unperformed,
and `unknown` means inconclusive. HTTP headers use `absent` only after a complete
header capture. We can refine these conventions after the first filled batch.

[Reporting shortcuts](reporting.md) defines the icon labels and copyable formats
for each test group. Use `astro`, `blue-circle` or `red-square` for the first icon
batch; later controls also use green/blue squares and a yellow circle. These
names describe appearance, not the selected file or format.

## Next deployment and test batch

Push the current lab changes before mobile testing. In Cloudflare Pages, wait
for the production deployment to succeed and check that its commit matches
`git rev-parse HEAD`. Use the stable production alias, not localhost on the phone.
Run `bash scripts/probe-deployment.sh` again and confirm that the three new
color-scheme URLs return their own pages rather than the custom 404.

Keep B003–B006 and their recorded observations attached to their existing context.
For this deployment, add a temporary row such as `B006/<new-short-SHA>` in the
relevant worksheet table, reference B006's client setup and supply the full
commit once. I will assign a new run ID when reconciling that batch. State any
profile, version or device changes; do not relabel an earlier result as a retest.

Start with these five controls in Tor, then repeat in Brave, Firefox and Vanadium:

| Case in `theming/` | What to compare |
| --- | --- |
| `scheme-meta-only` | Single `light dark` declaration; current-deployment reference |
| `scheme-meta-dark-first` | Same two words in reverse order: `dark light` |
| `scheme-meta-dark-only` | Single `dark` declaration |
| `scheme-duplicate` | Existing invalid control: `light dark`, then a separate `dark` tag |
| `scheme-duplicate-dark-first` | Same two tags in reverse order |

Use each browser's usual settings first, with DevTools emulation off. Record
overall appearance, native input/button appearance and any visible toolbar
change separately. Include media-query matches only when inspected. Repeat with
a real light setting where available; label DevTools overrides as separate
emulated rows. Keep the new results in the browser worksheet and retain its
earlier rows. The hosted testing guide links to all five controls.

The remaining coverage is:

| Group | Already reported | What remains / how to test |
| --- | --- | --- |
| Icons | Twenty tab/tab-switcher results in each of four browsers, in the dark-environment batch | Check `svg-responsive` in real light mode; repeat surprising Tor controls in a new tab/profile where available, retaining initial and after-reload results. Saved/bookmark/home-screen icons need separate actions; an Apple home-screen result remains unobserved. |
| Theming | Seven original cases in the dark-environment batch; Tor stayed light | Test the three new controls, repeat the two references above, then complete real-light observations. Exact palettes, native control details and first paint remain unreported where absent from the cells. |
| Head / viewport | No complete browser reports | Compare the three charset pages; inspect response charset and `document.characterSet`. Check parsed DOM for the invalid-head case, scripting on/off for noscript, and both viewport pages on a phone in a stated orientation. |
| Language | No browser reports | Check four pages for visible characters and direction; inspect document/passage language where available. Record screen-reader/keyboard checks only when performed, with their settings. |
| Manifest / saved icons | No installation or launch reports | Try bookmark, add-to-home-screen or install actions where offered; launch the saved entry. Record icon, name, URL, display mode and prior installations. Use separate rows per action; these are online checks. |
| JSON-LD | No browser inspection reports | On a desktop browser, parse each script's text as JSON and inspect the extra image, its Network request and `window.fixtureInjection` separately. Start with scripting on; leave unavailable checks untested. |
| Link previews | Theme-color accent-change observation in Signal, WhatsApp, Discord and Instagram only | Begin with the five precedence controls in each available target app. Record title, description, image, layout and tapped URL independently; keep composer/sent/received views separate. Then expand to omissions, image failures, canonical/language and indexing controls. |
| HTTP / hosting | Eight requests reported on the earlier deployment | Rerun those after deployment, then check the nine additional request variants in the HTTP worksheet. Capture complete GET headers without following redirects, especially raw Location and X-Robots-Tag. |

The three worksheets hold the field formats; `manual-tests.md` explains the
actions. Return the filled sections or raw HTTP output once. A blank does not
require an immediate exhaustive run: finish the color-scheme comparison first,
then take one remaining group at a time. Signal currently adds only its reported
theme-color case; the full preview checklist still targets the original six apps.

After collecting enough evidence for the intended clients, the starter still
needs its agreed design, scope boundaries, acceptance criteria and incremental
implementation plan. Lab fixture behavior is evidence for those decisions.

Each of the 121 fixtures has a record under `cases/<group>/<id>.md`. The
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
on Android 17). Full versions live in `sessions.md`.
The worksheet contains icon and initial theming observations;
blank cells remain unreported. Start with the four icon controls in B003, then
repeat the same controls in the other three browsers. Report the mode and visible
icon surface with each batch;
for Tor include the security level if known. On mobile, use a tab switcher or
other surface that exposes the icon and name that surface in the report.

1. Icons: start with `icon-svg-only`, `icon-ico-only`, `ico32-svg` and `svg-ico32`.
   Then test the remaining icon cases in that browser. Open the fixture in its
   own top-level tab. Report the icon you see and where you see it; if the UI
   has no visible icon, say so.
2. Theming: test all ten cases in system light and dark mode. Report page
   background/text, native controls, toolbar color and first-paint changes
   separately. Include the dark-first, dark-only and reversed-duplicate controls.
   Keep DevTools emulation separate from OS/browser settings. Test
   `icons/svg-responsive` in both modes too.
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
The records assign 47 cases to browser observation. Metadata-only comparisons
belong in the social-DM phase, so they do not require repetitive browser checks.

## Then test website links in direct messages

Start a separate `S...` run for each platform, app version and device/surface:
LinkedIn, Discord, X, WhatsApp, Instagram and Facebook Messenger. A web client
also needs the browser/version. Record sender and receiver environments
separately when they differ.

Signal has an additional reported theme-color observation. S001–S004 record that
accent-change report for Signal, WhatsApp, Discord and Instagram only; the other
metadata and layout fields remain unreported.

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
