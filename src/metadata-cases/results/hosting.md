## Hosted HTTP results

Origin: `https://astro-metadata-lab.pages.dev`. Dates, client details and known
limits live in `sessions.md`. These observations come from user-pasted curl
output. Keep the earlier result when a later probe differs.

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
| H002 | /cases/indexing/redirect/ | 302 | text/plain;charset=UTF-8 | Location: https://astro-metadata-lab.pages.dev/cases/metadata/explicit-og/ |

The HTTP-only noindex fixture, its three URL variants, the dedicated missing-page
URL and an arbitrary unknown URL still need their own recorded checks. A browser
showing the error page or the source panel does not establish an HTTP status.

Run `bash scripts/probe-deployment.sh` from the repository to repeat the eight-URL
probe; pass another origin as the optional first argument. Paste the output and
identify the deployment if known. The probe prints responses; it does not assert
that every 404 is a failure or automatically add observations to these tables.
