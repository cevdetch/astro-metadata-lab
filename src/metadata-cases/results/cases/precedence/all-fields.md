# precedence / all-fields

Which title, description and image win: HTML A, OG B/red, Twitter C/green, or body D?

Test on: Social DM.

Record one row per run, mode and surface. Use the run ID from the results index.
Keep earlier rows when a rerun differs. Untested and no visible result are distinct.

## Social DM results

Send the fixture URL, one per message. Record composer, sent and received views
as separate rows. Copy title and description independently; record absent,
truncated or unknown values. Record image/color, card layout and the destination
after tapping. A missing preview does not identify an ignored field.

Candidates: HTML A; OG B/red image; Twitter C/green image; body D. These are
identification markers, not expected platform choices.

| Run | Platform | Surface | Title | Description | Image | Layout / destination | Status / notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| — | X | — | — | — | — | — | not tested |
| — | Facebook Messenger | — | — | — | — | — | not tested |
| S005 | WhatsApp | requested sent; not restated | B | B | red | large-image / destination not tested | reported; marker confirmed for both title and description; displayed domain astro-metadata-lab.pages.dev; favicon bottom right, appearance not identified |
| S006 | Molly | not reported | B | B | red | large-image / destination not tested | reported; marker confirmed for both title and description; displayed domain astro-metadata-lab.pages.dev |
| S007 | Discord | not reported | B | B | red | large-image / destination not tested | reported; marker confirmed for both title and description |
| S008 | LinkedIn | post composer; confirmed in follow-up | unreported | unreported | unreported | unreported / destination not tested | preview error: Cannot display preview. You can post as is, or try another link.; cause unknown |
| S009 | Instagram | not reported | B | B | red | large-image / destination not tested | reported; marker confirmed for both title and description |
| S012 | LinkedIn | post composer; retry after Inspector | unreported | unreported | unreported | unreported / destination not tested | preview error: Cannot display preview. You can post as is, or try another link.; cause unknown; requested all-fields retest |
| S013 | LinkedIn | direct message; sent/received/draft not restated | unreported | unreported | unreported | no card / destination not tested | preview=none; deadhead.cevdet.ch control also had no preview; wait/settings unknown; cause unresolved |

## Browser metadata inspection

B024 is a browser Console inspection, not a social-DM preview observation.
The requested Firefox check returned this exact JSON:

```json
{"page":"https://astro-metadata-lab.pages.dev/cases/precedence/all-fields/","canonical":"https://37d5d3ff.astro-metadata-lab.pages.dev/cases/precedence/all-fields/","ogUrl":"https://37d5d3ff.astro-metadata-lab.pages.dev/cases/precedence/all-fields/","ogImage":"https://37d5d3ff.astro-metadata-lab.pages.dev/cases/assets/social-red.png","twitterImage":"https://37d5d3ff.astro-metadata-lab.pages.dev/cases/assets/social-green.png"}
```

The document is on the stable production alias; canonical, OG URL and both image
URLs point to the deployment-specific host. Image requests, redirects, status
codes, social preview behavior and live build-variable values remain unreported.
Keep this observation when retesting after the production-origin setting changes.

## LinkedIn Post Inspector result (S010)

The report showed a successful preview and the following ingestion information.
This is a separate Inspector surface from S008's failed post-composer attempts.
Title B was visible in the preview; description B was extracted in the metadata
panel. A later clarification confirmed that the preview card showed no description,
including in this earlier inspection. The image URL was present; visual color
and card layout were not identified in the S010 report.

```json
{
  "previewTitle": "OG TITLE B",
  "displayedDomain": "37d5d3ff.astro-metadata-lab.pages.dev",
  "lastScraped": "a few seconds ago",
  "fetchedUrl": "https://astro-metadata-lab.pages.dev/cases/precedence/all-fields/",
  "canonicalUrl": "https://37d5d3ff.astro-metadata-lab.pages.dev/cases/precedence/all-fields/",
  "reportedTrail": [
    {
      "status": "200 Success",
      "url": "https://astro-metadata-lab.pages.dev/cases/precedence/all-fields/"
    }
  ],
  "warning": "The description should be at least 100 characters long.",
  "metadata": {
    "Title": "OG TITLE B",
    "Type": "Article",
    "Image": "https://media.licdn.com/dms/image/sync/v2/D4D27AQGx4IHbeCNrPQ/articleshare-shrink_1280_800/B4DaFuOU1WIMAg-/0/1792850612136?e=1793458800&v=beta&t=E0XAnzfo_QoK3QbLUIZuiWymHEqkmAbWW8ZOmLEGSW8",
    "Description": "OG DESCRIPTION B",
    "Author": "No author found",
    "Publish date": "No publication date found"
  }
}
```

The reported trail lists a 200 Success for the stable alias; it is not a raw
HTTP header capture. Inspector kept the deployment-specific canonical and still
produced a preview. The short-description warning did not prevent this result.
Keep it as an advisory rather than adding a 100-character minimum to the lab or
starter. Type Article is the Inspector's reported value; the local fixture's
OG type is website. No author/date or article feature is implied by those fields.

## LinkedIn Post Inspector batch (S011)

This is an Inspector result, separate from S008's post-composer errors.

| Run | Visible title | Visible description | Image | Displayed domain | Layout |
| --- | --- | --- | --- | --- | --- |
| S011 | B | none | red | 37d5d3ff.astro-metadata-lab.pages.dev | unreported |

The letter identifies the title only; no visible description was
explicitly reported in any Inspector preview. The suggested connection to the
100-character warning is untested; no length comparison was performed.

The Inspector also gave the author guidance
`<meta name="author" content="[Author name here]">` and no suggested alternative
or tag for the publication date. Preserve these as Inspector guidance, not a
requirement to add author/date metadata to this generic fixture. S010's pasted
metadata table listed OG DESCRIPTION B as extracted data; that description
did not appear on the preview card.
