## Reporting shortcuts

Give the run ID once per batch, followed by the case and what you saw. We will
fill the result tables; you do not need to edit files. The snippets below are
reporting formats, not expected outcomes or recorded observations.

### Icon labels

| Write | What you see |
| --- | --- |
| `astro` | The Astro logo, such as the root favicon |
| `blue-circle` | A blue dot/circle; includes the manifest's blue circle on a light tile |
| `red-square` | A solid red square |
| `green-square` | A solid green square |
| `blue-square` | A solid blue square |
| `yellow-circle` | A yellow circle, provided by the responsive SVG's dark variant |
| `none` | No icon visible on the surface you checked |
| `other: ...` | Another appearance; describe it, such as a generic globe |
| `unknown` | You cannot identify what the surface shows |

Use `astro`, `blue-circle` and `red-square` for the first four icon controls when
those appearances occur. Extra labels cover the later cases. You can write
spaces instead of hyphens. If you report only a color, we will keep the shape
unknown unless you define the shorthand for that batch.

These are visual labels. Several fixtures share the red-square appearance, and
the SVG and manifest images both include blue circles. Appearance alone does not
identify a file format, URL or selected bitmap size. The responsive SVG contains
blue and yellow variants; record what the tested browser shows in each mode.

### Header for a batch

Your registered browsers are B003 (Brave Origin / Arch Linux), B004 (Firefox /
Arch Linux), B005 (Vanadium / Android 17) and B006 (Tor Browser Alpha / Android 17).
Versions live in the test-run registry. Use a new run when the client version,
device or deployment changes.

```text
B003 | mode=[light/dark] | surface=[tab/tab-switcher/bookmark/home-screen]
Site/deployment: [URL or build, once when known]
Profile/settings: [normal/fresh/private, overrides if relevant; unknown is OK]
```

Report Tor's security level if known. Name the actual visible surface on Android.
Within one unchanged run, you can send just `B003` and the case results. State
mode or surface changes with the next batch. The run ID preserves the supplied
setup; missing details stay unknown.

### Icon reports

```text
B003 | mode=[light/dark] | surface=tab
icons/icon-svg-only = [label]
icons/icon-ico-only = [label]
icons/ico32-svg = [label]
icons/svg-ico32 = [label]
```

For example, if you see the blue circle, write `icons/ico32-svg = blue-circle`.
During an icon batch you may omit `icons/`. Use the full `group/id` for other
groups because names such as `html-only` occur in more than one group.
You can group identical results, for example
`ico32-svg, svg-ico32 = blue-circle`. You can also report an entire named batch
at once and list exceptions; identify the batch so its scope stays clear.

Record changes as a sequence, for example `astro -> blue-circle after reload`.
We will keep the initial appearance and rerun rather than replacing one with the
other. A downloaded image is a separate observation from a displayed tab icon.

### Theme reports

```text
B003 | mode=[light/dark]
theming/scheme-meta-only:
page-bg=[color]; text=[color]; controls=[appearance]
toolbar=[color/not shown]; flash=[seen/not seen/unknown]
```

Use separate light/dark rows. Plain descriptions such as dark background, light
text or unchanged toolbar are enough. Record initial paint after a reload if you
observe it; leave it unknown otherwise.

### Head and viewport reports

```text
B005 | orientation=[portrait/landscape] | scripting=[on/off/unknown]
head/viewport-absent:
layout=[what changed]; zoom=[what you did or observed]; text=[normal/garbled/...]
DOM/encoding/HTTP charset=[value if inspected, otherwise unknown]
```

Record visible behavior first. Inspection details are optional. A normal-looking
page does not establish where the parser placed a tag or which encoding input
it used. Report scripting-on/off tests separately for the noscript case.

### Language and accessibility reports

```text
B005
language/[case]:
text=[what appears]; direction=[LTR/RTL/mixed]
document-lang=[if inspected, otherwise unknown]
keyboard/screen-reader=[action and result, or not tested]
```

For an accessibility report, name the keyboard action or assistive technology
and settings. Describe focus, announcement or other observed behavior rather
than assigning a general accessibility pass/fail.

### Bookmark and installation reports

```text
B005
manifest/manifest-enabled:
action=[bookmark/add-home-screen/install/launch]
UI-offered=[yes/no]; icon=[label]; name=[visible name]
launch-URL=[URL]; display=[browser/standalone/unknown]
prior-install=[yes/no/unknown]; result=[what happened]
```

Use a separate row for each action. Record existing installations because the
manifest controls share an app ID and start URL. These are online launch tests.
Use the same format for the apple-touch-icon case where relevant.

### JSON-LD checks

```text
B003 | scripting=[on/off/unknown]
json-ld/[case]:
JSON-parses=[yes/no/not tested]
extra-image/request=[what DevTools shows, or not tested]
window.fixtureInjection=[observed value, or not tested]
```

These are developer inspection cases. Leave checks you did not perform as not
tested. An unset runtime flag alone does not establish that the JSON parsed.

### Direct-message preview reports

Register the platform, app version, device/OS and surface once; we will assign
an S run ID. The targets are LinkedIn, Discord, X, WhatsApp, Instagram and
Facebook Messenger. A web app also needs the browser/run ID. Record the preview
setting when known and identify first share versus retest.

```text
Run: [S ID, or platform/app/device details for a new run]
Surface: [composer/sent/received]
URL: [exact shared fixture URL]
Case: precedence/all-fields
title=[visible text]; description=[visible text/none]
image=[red/green/none/other/unknown]; layout=[what it looks like]
destination=[URL after tapping, or not tested]
```

In precedence cases, you may use `html`/`A`, `og`/`B`, `twitter`/`C` or `body`/`D`
for a title or description only when its visible marker identifies that value.
Keep title and description independent. Record truncation, and copy actual text
for other cases or uncertain source selection. Matching HTML/OG text cannot tell
us which field supplied it.

Use `image=red` and `image=green` for the large social images; those are separate
from the favicon labels. Color alone does not identify the metadata format: some
non-precedence cases advertise green as another OG candidate. If the app shows
no card, write `preview=none`; an existing card with no description or image
gets `description=none` or `image=none`. Composer, sent and received views each
get their own row. Share the fixture URL, not the results or comparison page.

### HTTP reports

```text
Site/deployment: [origin and build if known]
Command or script: [what you ran]
[paste complete status/header or probe output]
```

We will register an H run and extract status, Content-Type, robots headers and
redirect destination where the output supplies them. Missing headers in a short
probe stay unknown. HTTP status is a separate observation from the page body.

### Result words

| Write | Meaning |
| --- | --- |
| `none` | You checked the named surface/field and it showed no value |
| `not tested` | You have not performed that check |
| `unknown` | The observation does not identify the value |
| `other: ...` | You saw something outside the suggested labels |
| `error: ...` | The page, image or action failed; include the visible message/URL |

You can report one case, a batch, a change after reload or a screenshot. Include
the run/case when it is not already clear. We will ask one focused follow-up if
a result needs clarification and keep the original observation alongside reruns.
