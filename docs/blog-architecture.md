# Blog architecture

How the blog feature is built, end to end. See [blog-body-structure.md](blog-body-structure.md) first — it documents the actual CMS schema and content quirks this architecture works around.

## Information architecture

```
/                      → blog listing (all published BlogPost, newest first)
/blog/<slug>           → article page
/about                 → optional, reuses the existing CMSPage/[slug] route
/feed.xml, /sitemap.xml, /robots.txt → generated from the same published-posts list
```

## Why the frontend route doesn't match the CMS URL

`BlogPost._metadata.url.default` is `/{locale}/{slug}/` — flat, no `/blog/` segment, no trailing-slash-free `hierarchical` distinction (`default` and `hierarchical` are identical for these items, since they were created directly under the locale root, not nested under a section page). The frontend route is `/blog/{slug}` by choice, matching the target IA. `lib/blog/slug.ts` bridges the two directions:

- `buildBlogPostGraphUrl(locale, slug)` → `/{locale}/{slug}/`, used to query Graph from a route param.
- `extractSlugFromContentUrl(url)` → last path segment, used to build a `/blog/{slug}` link from a Graph response.

Every place that talks to Graph about a specific post goes through one of these two helpers — never construct the URL string inline.

## Data layer

`lib/optimizely/queries/GetAllBlogPosts.graphql` and `GetBlogPostByURL.graphql` (plus draft variants in `queries/draft/`) are the only two BlogPost query shapes. Fields are limited to what the schema actually has: `title`, `subheading`, `author`, `publishedDate`, `body { html json }`, `_metadata`. Don't add fields to these queries that aren't in the verified schema — codegen will fail. If Rasel adds `tags`/`canonicalUrl`/`readingTime` to the CMS type later, extend the queries then, not before.

`lib/blog/posts.ts`'s `getAllPublishedPosts()` is the single source of truth for "all published posts, sorted, with slugs extracted" — the homepage, `generateStaticParams`, `sitemap.ts`, and `feed.xml` all call it instead of repeating the fetch/sort/extract steps. It always tags its fetch `optimizely-blog`, so all four surfaces revalidate together.

**Sorting happens in code, not in Graph.** `publishedDate` is a human-formatted string (`"May 15, 2026"`), and `BlogPostOrderByInput` doesn't expose it as an orderable field anyway (confirmed against the live schema — it only exposes `_modified`, `_ranking`, `body`, `_metadata`). `lib/blog/dates.ts`'s `parsePublishedDate()` / `sortByPublishedDateDesc()` handle this; `new Date("May 15, 2026")` parses correctly in V8, but don't assume that generalizes to every date-string format a future post might use.

## A Content Graph quirk that looks like a bug in your own code

Every query that selects `BlogPost { item { ... } }` (singular) — as opposed to `items` (plural) — returns a **non-null object with all-null fields** when zero rows match, not `null`. Verified directly against the API:

```graphql
{ BlogPost(where: { _metadata: { url: { default: { eq: "/en/nonexistent/" } } } }) {
  total   # 0
  item { title }   # { "title": null } — NOT null
} }
```

`items` (plural) does return a real empty array `[]` for zero matches — only the singular `item` accessor has this stub-object behavior. Every BlogPost query in this codebase that uses `item` (`GetBlogPostByURL`, `GetPreviewBlogPostByURL`, and — since it shares the same fallback route — `GetPreviewPageByUrl` for CMSPage) now also selects `total` and checks `total > 0` instead of checking the item's truthiness. If you add a new singular-item query, do the same, or `notFound()`/404 logic will silently never fire.

## Rendering the body

`body.json` is a Slate-style tree (`lib/blog/richtext.ts` has the types): block nodes (`paragraph`, `heading-two`, `heading-three`, `quote`, `code`, `bulleted-list`/`numbered-list`/`list-item`), inline `link` nodes, and text leaves with `{ bold?, code? }` marks. `components/blog/rich-text.tsx` maps node `type` to a component recursively. Text leaves render as plain React children — never concatenated into an HTML string — so there is no XSS surface from post content in the normal path; `body.html` + a sanitizer is documented in the plan as a fallback for a future post whose JSON shape turns out to be unusable, but none of the current 4 posts need it, so it isn't wired up. Don't add it speculatively.

**Code blocks** (`components/blog/code-block.tsx`) run through `shiki`'s `codeToHtml()` server-side; the resulting HTML is the *only* `dangerouslySetInnerHTML` sink in the body-rendering tree (`ArticleJsonLd`'s script tag is a separate, unrelated sink — see below). Language comes from a `lang`/`language` node attribute if present, checked against an allowlist, falling back to plain text. **None of the 4 migrated posts have that attribute** — the Medium→CMS migration didn't preserve it — so today every code block renders unhighlighted. This is intentional per the plan (don't heuristically guess a language from content), not a bug to "fix" by adding detection logic. If Rasel adds a language marker in the CMS editor, it'll pick it up automatically.

Both block-level `code` nodes and inline `code`-marked text leaves have their text **HTML-entity-escaped** in the stored data (e.g. `&lt;div&gt;` instead of `<div>`) — an artifact of the migration pipeline. `decodeHtmlEntities()` in `lib/blog/richtext.ts` undoes this before display; skipping it for either path will visibly show literal `&lt;`/`&gt;` in the rendered page.

## Two posts need a CMS content fix, not a frontend one

`javascript-garbage-collection-interview-guide` and `use-server-doesnt-mean-private` had their code blocks, blockquotes, and section structure flattened during migration — markdown syntax (` ``` `, `---`, `####`, `>`) survived as literal text inside merged paragraph/heading nodes instead of becoming real `code`/`quote`/heading nodes, and in one case the newlines that separated lines of code were dropped entirely, changing what the code actually does (a `//` comment now swallows the following statement). Full detail in [blog-body-structure.md](blog-body-structure.md#3-per-post-condition--2-clean-2-damaged-by-the-medium-migration). The renderer handles this correctly — it renders whatever structure actually exists, safely — but no amount of frontend logic can recover data that isn't there. This needs Rasel to re-split those sections in the CMS rich-text editor before Phase 6 publish; it's tracked here so it doesn't get lost, not something to work around with heuristics.

## Draft mode

Two branches, mirroring the pre-existing CMSPage pattern exactly:

1. **`/blog/[slug]` with the draft-mode cookie set** (e.g. arrived via Visual Builder) → `components/draft/draft-mode-blog-post.tsx`, which fetches all versions via `GetAllBlogPostVersionsByURL` (plural `items` — no stub-object issue) and picks the highest `_metadata.version`. Mirrors `draft-mode-cms-page.tsx`.
2. **CMS "Preview" button** → `/api/draft` redirects to `/{locale}/draft/{version}/{slug}` (the pre-existing generic preview route). That route tried only `CMSPage` before; it now falls back to `BlogPost` (via `GetPreviewBlogPostByURL`, using the `total`-based match check above) when no `CMSPage` matches, mirroring the existing `CMSPage → SEOExperience` fallback chain in the public `[slug]` route. Without this, a CMS preview click on a blog post would have 404'd or rendered blank, since the pre-existing route only knew about CMSPage.

## Revalidation

`app/api/revalidate/route.ts`'s webhook handler branches on `content.__typename === 'BlogPost'` (needed `__typename` added to `GetContentByGuid.graphql`, which didn't select it before) before falling into the CMSPage/StartPage path-normalization logic, since that logic assumes a URL shape BlogPost doesn't have. It revalidates `/{locale}/blog/{slug}` plus the `optimizely-blog` tag — the same tag `getAllPublishedPosts()` uses, so the homepage, sitemap, and feed all refresh together with the one publish event.

The webhook secret check uses `crypto.timingSafeEqual` over sha256 hashes of both the provided and expected secret (not the raw strings — `timingSafeEqual` throws on a length mismatch, which itself leaks the expected secret's length through the exception path; hashing first fixes both the length-leak and the throw), the request body is validated with `zod`, and error responses don't echo internal details.

## Security headers and the CSP trade-off

Security headers live in `middleware.ts`, not `next.config.ts` — see [Module 3 in the README](../README.md#module-3--localization-middleware--security-headers) for why (two `next.config.ts` `headers()` entries matching the same path would each add their own `Content-Security-Policy` header, and browsers intersect multiple CSP headers into the most restrictive one).

The CSP currently ships as `Content-Security-Policy-Report-Only`, not enforcing. This was a deliberate, tested trade-off, not an oversight: a strict `script-src 'self'` blocks Next.js App Router's own inline RSC hydration scripts and renders a blank page — confirmed against both `next dev` and a production `next build && next start`. Adding a per-request nonce plus `'strict-dynamic'`, following Next's own documented CSP pattern, didn't get picked up by Next's renderer for its own scripts in this setup either. Report-only mode gives real visibility (violations show in the browser console and would show in a reporting endpoint if one were configured) without risking that regression. `X-Content-Type-Options`, `Referrer-Policy`, `Strict-Transport-Security`, and `X-Frame-Options` (skipped on `/​{locale}/draft/*` routes, where the CSP's `frame-ancestors` already permits the CMS to embed the page) are fully enforced — none of them carry that risk.

If a future session wants to move script-src to enforcing, start by verifying the nonce round-trip in isolation (a minimal page with one inline script, confirmed to execute) before doing it under this app's full RSC tree — do not just flip `-Report-Only` off and assume it'll work, since that was tried and failed to render the site at all.
