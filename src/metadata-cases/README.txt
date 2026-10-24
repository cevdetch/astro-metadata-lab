Metadata comparisons

Open /cases/ in this Astro project. Each of the 121 cases has its own page,
a comparison view beside the current homepage, and a plain-text HTML source.
Edit cases.json; these options are controlled research inputs, not the starter's
proposed metadata API. The fixtures include invalid HTML and an injection control.
Do not pass external or user-provided HTML into this renderer.

Routes live in src/pages/cases/. Assets live in assets/ and build under
/cases/assets/. Paths respect Astro base. Optional manifests have no service worker
or offline support. The scaffold's PNG-in-favicon.ico remains the origin-root
discovery control; explicit ICO cases use real ICO files from assets/.

Run pnpm verify for Node tests, the Astro build and output checks. Start a new dev
server only if needed, with pnpm astro dev --background. Do not interrupt an
existing user-run server. See the root README.md for commands and Pages settings.

The build emits Cloudflare _headers and _redirects. The error case URL stays absent
so the host can serve the fixture through 404.html. Static redirect HTML is the
fallback on hosts that ignore _redirects. Live HTTP behavior needs verification
after deployment. Other hosts must configure their own headers/redirects/404s.

The HTML/source panels show the controlled fixture, before dev-server additions.
The redirect's source panel is its control document, not its redirect response.
Comparison iframes cannot establish tab icons, first paint or installed-app UI.

manual-tests.md describes actual browser, mobile and social-DM checks and is
published at /cases/testing/ with links for the first round. The 29 precedence
cases distinguish HTML A, OG B/red, Twitter C/green and body D values.
browser-observations.json contains the reported Brave/Firefox observations.
social-observations.json retains the initial empty snapshot.
New reports belong in results/cases/<group>/<id>.md, with shared run details in
results/sessions.md. The older JSON files retain the initial reports. The website
publishes per-case tables at /cases/results/, linked beside each catalogue case.
results/reporting.md defines visual labels and reporting formats; the testing
and results index pages render the same guide under #reporting-shortcuts.
For hand entry, fill results/browser-test-table.md,
results/link-preview-test-table.md or results/http-test-table.md and return it.
The matrices use short row IDs; detailed case records can be updated from them.
design-notes.md separates the spike from the future starter design.
The old research/ and deploy/ archives remain local and are excluded from Git.
