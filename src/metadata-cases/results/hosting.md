## Hosted HTTP results

Origin: `https://astro-metadata-lab.pages.dev`. Dates, client details and known
limits live in `sessions.md`. These observations come from manual curl
probes. Keep the earlier result when a later probe differs.

| Run | Requested path | HTTP | Content-Type | Redirect / notes |
| --- | --- | --- | --- | --- |
| H001 | /cases/source/metadata/explicit-og.txt | 404 | text/html; charset=utf-8 | Custom error-404 HTML; cause unknown. |
| H002 | /cases/metadata/explicit-og/ | 200 | text/html; charset=utf-8 | No redirect reported. |
| H002 | /cases/source/metadata/explicit-og.txt | 200 | text/plain; charset=utf-8 | Exact source URL now succeeds. |
| H002 | /cases/source/metadata/explicit-og | 404 | text/html; charset=utf-8 | Missing extension control. |
| H002 | /cases/source/metadata/explicit-og.txt/ | 404 | text/html; charset=utf-8 | Extra trailing-slash control. |
| H002 | /cases/assets/icon-blue.svg | 200 | image/svg+xml | No redirect reported. |
| H002 | /cases/assets/social-red.png | 200 | image/png | No redirect reported. |
| H002 | /cases/assets/app.webmanifest | 200 | application/manifest+json | No redirect reported. |
| H002 | /cases/indexing/redirect/ | 302 | text/plain;charset=UTF-8 | Resolved redirect URL: https://astro-metadata-lab.pages.dev/cases/metadata/explicit-og/ |
| H003 | /cases/metadata/explicit-og/ | 200 | text/html; charset=utf-8 | No redirect reported. |
| H003 | /cases/source/metadata/explicit-og.txt | 200 | text/plain; charset=utf-8 | Exact source URL succeeds. |
| H003 | /cases/source/metadata/explicit-og | 404 | text/html; charset=utf-8 | Missing extension control. |
| H003 | /cases/source/metadata/explicit-og.txt/ | 404 | text/html; charset=utf-8 | Extra trailing-slash control. |
| H003 | /cases/assets/icon-blue.svg | 200 | image/svg+xml | No redirect reported. |
| H003 | /cases/assets/social-red.png | 200 | image/png | No redirect reported. |
| H003 | /cases/assets/app.webmanifest | 200 | application/manifest+json | No redirect reported. |
| H003 | /cases/indexing/redirect/ | 302 | text/plain;charset=UTF-8 | Resolved redirect URL: https://astro-metadata-lab.pages.dev/cases/metadata/explicit-og/ |
| H004 | /cases/indexing/redirect/ | 302 | text/plain;charset=UTF-8 | Raw Location: /cases/metadata/explicit-og/; X-Robots-Tag absent from captured headers. |
| H004 | /cases/indexing/error-404/ | 404 | text/html; charset=utf-8 | Cache-Control no-store; Location and X-Robots-Tag absent from captured headers. |

H003 is the post-push probe associated with reported latest commit
`886fe8b63c31fe1915d1f9d7efbd90a0b50527f0`. It matches the eight H002 outcomes;
the exact-source H001 404 remains a separate historical observation.

The redirect URLs above come from the probe's `%{redirect_url}` output, rather
than raw Location headers. The probe did not capture Location or X-Robots-Tag;
those header values remain unknown for H002 and H003. The
[HTTP worksheet](https://github.com/cevdetch/astro-metadata-lab/blob/main/src/metadata-cases/results/http-test-table.md)
keeps raw and resolved redirect values separate.

The HTTP-only noindex fixture, its three URL variants, the dedicated missing-page
URL and an arbitrary unknown URL still need their own recorded checks. A browser
showing the error page or the source panel does not establish an HTTP status.

Run `bash scripts/probe-deployment.sh` from the repository to repeat the eight-URL
probe; pass another origin as the optional first argument. Paste the output and
identify the deployment if known. The probe prints responses; it does not assert
that every 404 is a failure or automatically add observations to these tables.

### Browser metadata-origin inspection (B024)

This is Console evidence rather than an HTTP probe. At
`https://astro-metadata-lab.pages.dev/cases/precedence/all-fields/`, the canonical
and OG URL used the `37d5d3ff.astro-metadata-lab.pages.dev` origin; the OG red and
Twitter green image URLs used that origin too. The exact output is saved in the
all-fields case record. No HTTP status, raw Location, X-Robots-Tag or image
reachability is established by these values.

Set production `CASE_ORIGIN` to `https://astro-metadata-lab.cevdet.ch`, rebuild,
and repeat the Console inspection. The repository already supports this override;
previews can retain their own `CF_PAGES_URL` fallback. Record the follow-up as a
new run and preserve B024. A metadata-origin change does not invalidate the prior
reports of icons, rendering or parsing; social fetch behavior still needs testing.

This origin change was subsequently deferred in favour of proceeding directly to
message-preview testing on the current deployment. Keep B024's metadata-host
observation as test context; no dashboard change or redeployment is confirmed.

### LinkedIn Inspector evidence (S010)

A successful Inspector preview was recorded for stable-alias all-fields, with
a 200 Success entry in its URL trail, and the same deployment-specific canonical
seen in B024. Inspector extracted OG title/description B and returned a LinkedIn
image URL. This evidence is separate from curl probes and does not establish raw
headers or an HTTP status for the original image URL. It shows the differing
canonical did not block this Inspector run; S008's post-composer error cause
remains unknown. No origin change or redeployment is reported.

The expanded S011 Inspector batch displayed the deployment-specific domain in
all five previews and gave no new HTTP trail/header evidence. Keep the
single S010 200 entry scoped to its all-fields report. A later note
clarified that no Inspector card displayed a description, including the earlier S010 preview;
the pasted metadata extraction table and visible card are separate evidence.

### Header capture H004 — 2026-10-24

[Captured headers](http/h004-headers.txt) preserve both responses in command
order. Server Date is 2026-10-24 15:35:15 GMT. The raw redirect Location
is relative; resolving it against the probed production origin yields
`https://astro-metadata-lab.pages.dev/cases/metadata/explicit-og/`. That absolute
target is derived, not a followed-request or clicked-destination observation.
I did not capture a body or record the curl version. The deployed commit remains unconfirmed.
S047–S051 separately record previews; Instagram showed a 404 title/description
card despite the status, while the other four reported no card.
