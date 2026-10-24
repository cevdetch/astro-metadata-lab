# HTTP test table

Use this file for one deployment/probe batch, independently of browser UI tests.
Each empty input/result cell contains two spaces. Keep prior recorded probes in
[hosting.md](hosting.md). Shared deployment details live in
[sessions.md](sessions.md). A new probe can receive a new H run ID after you return
it; do not overwrite the historical H001-H003 records.

## Probe context

Reference shared details by run ID when available; fill an unknown/new context
once here. Use GET without following redirects so the first response is visible.

- Run ID: an assigned `H...` ID; leave blank for a new batch.
- Origin: scheme and hostname, such as `https://astro-metadata-lab.pages.dev`.
- Deployment: full commit SHA and build/deployment URL when known. Say
  `user-reported commit` if the response itself does not identify the build.
- Date/time: include a timezone, such as `2026-10-24T14:30:00+02:00`.
- Command/client: the exact command or script and client version. For curl,
  the first line of `curl --version` is enough. Include relevant options.

These are format examples, not an observation for a new run. Shared details can
be referenced rather than copied; unavailable context stays `unknown`.

| Field | Value |
|---|---|
| Run ID, if assigned |  |
| Origin, if not in the run registry |  |
| Deployment commit / build, if not in the run registry |  |
| Date / time |  |
| Command / client version |  |

## Request names

Append these paths to the test origin. The first eight are the existing probe
script requests; the other paths extend the host-control checks.

| Column | Requested path |
| --- | --- |
| explicit-og | /cases/metadata/explicit-og/ |
| source-txt | /cases/source/metadata/explicit-og.txt |
| source-no-extension | /cases/source/metadata/explicit-og |
| source-extra-slash | /cases/source/metadata/explicit-og.txt/ |
| icon-svg | /cases/assets/icon-blue.svg |
| social-png | /cases/assets/social-red.png |
| manifest | /cases/assets/app.webmanifest |
| redirect | /cases/indexing/redirect/ |
| redirect-no-slash | /cases/indexing/redirect |
| redirect-index | /cases/indexing/redirect/index.html |
| noindex-with-image | /cases/indexing/noindex-with-preview/ |
| noindex-without-image | /cases/indexing/noindex-no-image/ |
| http-noindex | /cases/indexing/http-noindex/ |
| http-noindex-no-slash | /cases/indexing/http-noindex |
| http-noindex-index | /cases/indexing/http-noindex/index.html |
| error-404 | /cases/indexing/error-404/ |
| missing-page | /cases/http-probe-missing-page/ |

## Responses

### Proposed output standard

Fill each row with its actual value, without a `key=` prefix. Blank means no
result supplied yet; preserve its two spaces. Use `not tested` for an unperformed
check, `unknown` for a value the output does not establish, and `absent` for a
header confirmed missing from a complete header capture. A short probe omitting
a header does not establish absence. Examples below illustrate format only.

- **HTTP status:** the observed three-digit status, such as `200`, `302` or
  `404`. A curl `000` after a transfer failure is not an HTTP status: write
  `unknown` and put the curl error/output in Notes. A page body does not establish
  the status.
- **Content-Type:** copy the complete observed value, including charset when
  present, such as `text/html; charset=utf-8` or `image/svg+xml`.
- **X-Robots-Tag:** copy the raw header value, such as `noindex`. Preserve
  repeated values in the evidence; use `absent` only after inspecting all headers.
- **Location:** copy the raw response header exactly, whether relative or
  absolute. The existing short probe does not capture this header; write
  `unknown` when using that output alone.
- **Resolved redirect URL:** copy the probe's `Redirect:` value. For a completed
  request whose redirect output is empty, write `none`; this alone does not
  establish that a raw Location header was absent.
- **Notes/evidence:** describe a body identity, an interstitial or an error;
  include an evidence filename/reference if available. Use `error:<message>`
  for transfer failures. Keep raw output when possible, without forcing it all
  into one matrix cell.

The probe uses curl's `%{redirect_url}`, which reports the destination it would
follow, rather than copying the raw Location header. Keep these two rows
separate; see the [curl write-out documentation](https://curl.se/docs/manpage.html#-w).
For example, a response could have `Location: /cases/metadata/explicit-og/` and
a resolved destination of
`https://astro-metadata-lab.pages.dev/cases/metadata/explicit-og/`.

To inspect raw headers for one URL, use a GET without `-L`:

```sh
curl -sS --connect-timeout 10 --max-time 20 -D - -o /dev/null \
  'https://astro-metadata-lab.pages.dev/cases/indexing/redirect/'
```

Keep each cell on one line. Separate extra notes with semicolons and escape any
literal pipe as `\|`. Record observations rather than assigning pass/fail to a
status such as the deliberate 404 controls.

| Field | explicit-og | source-txt | source-no-extension | source-extra-slash | icon-svg | social-png | manifest | redirect | redirect-no-slash | redirect-index | noindex-with-image | noindex-without-image | http-noindex | http-noindex-no-slash | http-noindex-index | error-404 | missing-page |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| HTTP status |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Content-Type |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| X-Robots-Tag |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Location |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Resolved redirect URL |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| Notes / evidence |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

Return this file or paste raw probe output. I will reconcile it with the HTTP
records, so you do not need to maintain both formats manually.
