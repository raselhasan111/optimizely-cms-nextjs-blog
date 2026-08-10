# Blog Site Implementation Plan — Next.js + Optimizely SaaS CMS

Implementation plan for converting this template into Rasel Hasan's personal blog. The 4 Medium posts have **already been migrated into the CMS** by Rasel — this plan builds the frontend against the schema that actually exists there (verified via Content Graph on 2026-08-10). Written to be executed by Claude Code phase by phase, in order.

## Decisions (already made — do not re-ask)

- **Scope:** Blog-only. The homepage IS the blog listing. Unused portfolio blocks get removed.
- **Locale:** English only (`en`). Keep the locale middleware/routing plumbing, reduce `LOCALES` to `['en']`.
- **Content:** Already migrated by Rasel into the CMS as `BlogPost` items. No import script. Build against the existing schema below.
- Draft mode, Visual Builder support, and the revalidation webhook stay functional.

## Verified CMS state (queried via Content Graph — treat as ground truth)

### BlogPost (page type — exists in the CMS)

| Field | Graph type | Notes |
|---|---|---|
| `title` | String | H1 |
| `subheading` | String | dek line — doubles as meta description |
| `author` | String | plain string, e.g. "Rasel Hasan" |
| `publishedDate` | String | sort key for the listing (ISO strings sort correctly; verify format on real data) |
| `body` | RichText (`{ html, json }`) | full article body as a single rich-text field |

Plus standard metadata (`_metadata { key, url, locale, status, version, ... }`, `_modified`, `_fulltext`).

### Content inventory (published index, all locales)

- **0 published `BlogPost` items.** The type exists but no instances are visible to the delivery key. The migrated posts are unpublished drafts (confirmed intent: Rasel wants to QA them in draft view first, then publish). Draft versions ARE queryable with preview auth (`Authorization: Basic $OPTIMIZELY_PREVIEW_SECRET` + version/status filters — the pattern in `lib/optimizely/queries/draft/`), so development proceeds draft-first; publishing happens at the end (Phase 6).
- Template content still published: `CMSPage` ×9, `SEOExperience` ×5, `StartPage` ×3, `Header`/`Footer` ×3, portfolio blocks (Hero/Profile/Story/Availability/Contact ×3).

### Schema gaps vs. an ideal blog model (accepted, not blockers)

The migrated model has no `tags`, `excerpt`, `readingTime`, `coverImage`, `canonicalUrl`, `isPinned`, or structured code/quiz blocks. **Work with what exists.** Consequences:

- Listing cards show title + subheading + date (no tags/reading time).
- Meta description = `subheading`.
- Code blocks, pull-quotes, and the GC guide's quiz live inside `body` rich text — rendering handles them from the rich-text structure (Phase 3), not from dedicated block types.
- Optional (nice-to-have, needs Rasel in the CMS UI, not Claude Code): add `tags` (string list), `canonicalUrl` (string), `readingTime` (int) to the BlogPost type later; the frontend should tolerate their absence and pick them up if added (query them only once they exist — Graph schema must contain them before codegen).

## The 4 migrated posts (originals on Medium, for content QA)

| # | Title | Published | Notable body content | Original |
|---|---|---|---|---|
| 1 | JavaScript Garbage Collection: A Complete Interview Guide | 2025-12-20 | nested H2→H3 headings, one code snippet, 10-question quiz + answer key | https://medium.com/@raselhasan11/javascript-garbage-collection-a-complete-interview-guide-93e50a2489cd |
| 2 | Notes from an AI-First Interview: How I Got Hired as a Demo Engineer II at Optimizely | 2026-05-12 | pure narrative, blockquote callouts, numbered lists | https://medium.com/@raselhasan11/notes-from-an-ai-first-interview-how-i-got-hired-as-a-demo-engineer-ii-at-optimizely-72a290232a9c |
| 3 | 'use server' Doesn't Mean Private (Frontend Security Essentials — Part 1) | 2026-05-14 | ❌/✅ code examples (ts), pull-quote rule | https://medium.com/@raselhasan11/use-server-doesn-t-mean-private-fbffbca20ea3 |
| 4 | Stop Trusting Your LLM's Markdown: Prompt Injection Is the New XSS (Frontend Security Essentials — Part 2) | 2026-05-15 | ❌/✅ code examples (tsx), pull-quote rule | https://medium.com/@raselhasan11/stop-trusting-your-llms-markdown-prompt-injection-is-the-new-xss-ecfaa4481780 |

## Current state of the repo (verified)

- Next.js 15 (App Router) + React 19 + Tailwind 3 + shadcn/ui, TypeScript strict.
- Locale-prefixed routing via `middleware.ts` rewrite (`en`/`pl`/`sv`, default `en`), locales in `lib/optimizely/utils/language.ts`.
- Content fetched from Optimizely Graph via typed SDK: `.graphql` files in `lib/optimizely/queries/` → `npm run gen-types` (graphql-codegen) → `lib/optimizely/types/generated.ts` → `optimizely` SDK in `lib/optimizely/fetch.ts` (force-cache + `optimizely-content` cache tag; `no-store` in preview).
- Routes: `app/(site)/[locale]/page.tsx` (start page), `app/(site)/[locale]/[slug]/page.tsx` (CMSPage + Visual Builder SEOExperience, single segment only), `app/(draft)/...`, `app/api/draft/`, `app/api/revalidate/route.ts` (Graph webhook → `revalidatePath`/`revalidateTag`).
- Block system: `components/content-area/mapper.tsx` → `components/content-area/block.tsx` (dynamic imports + `blocksMapperFactory`) → `components/block/*.tsx`; fragments in `lib/optimizely/queries/fragments/Block.graphql`. All portfolio-oriented.
- `docs/` explains fetch, draft mode, revalidation, Visual Builder — read before Phases 3 and 5.

## Target information architecture

```
/                      → blog listing (queries all BlogPost, newest first)
/blog/<slug>           → article page (BlogPost)
/about                 → optional about page (reuse existing CMSPage type)
/api/revalidate        → existing Graph webhook
/feed.xml, /sitemap.xml, /robots.txt → generated
```

---

## Phase 0 — Verify drafts & environment (do first; no publishing required)

Content stays in DRAFT throughout development — QA happens through draft mode; publish only in Phase 6.

1. ~~Fix `.env`~~ **Done (2026-08-10):** the leading tab in `OPTIMIZELY_SINGLE_KEY` has been removed and verified (48 chars, no whitespace). Nothing to do.
2. **Verify the 4 draft posts exist** with a preview-auth query (POST to `$OPTIMIZELY_API_URL` with header `Authorization: Basic $OPTIMIZELY_PREVIEW_SECRET` — same auth `optimizelyFetch` uses when `preview: true`):
   `{ BlogPost(where: { _metadata: { status: { eq: "DRAFT" } } }) { total items { title publishedDate _metadata { url { default hierarchical } status version } } } }` → expect 4 items with URL segments.
   Check slugs (suggested: `javascript-garbage-collection-interview-guide`, `ai-first-interview-demo-engineer-optimizely`, `use-server-doesnt-mean-private`, `prompt-injection-is-the-new-xss`) and whether they live under a `/blog/` parent so hierarchical URLs come out as `/blog/<slug>`. If they sit elsewhere, adapt the route in Phase 3 — decide from `_metadata.url.hierarchical` on the real data.
3. **Inspect real body content** from a draft version: query one post's `body { json html }` (preview auth) and document how Medium's code blocks, blockquotes, and the quiz survived migration (proper code-block nodes vs. flattened paragraphs). This decides the Phase 3 rendering details. If code blocks were flattened to plain paragraphs, fix them in the CMS editor (re-apply code-block formatting) rather than heuristically detecting code in the frontend.

**Acceptance:** 4 draft BlogPost items confirmed via preview auth; body JSON structure documented in a short note (`docs/blog-body-structure.md`) for Phase 3.

## Phase 1 — Simplify locales & prune portfolio UI

1. `lib/optimizely/utils/language.ts`: `LOCALES = ['en']`. Middleware keeps working (default-locale rewrite path).
2. Remove `components/layout/language-switcher.tsx` and its usage in `components/layout/header.tsx`.
3. Delete portfolio block components (`availability`, `logos`, `portfolio-grid`, `services`, `testimonials`, `story`, `profile`, `contact`, `hero`) with their registry entries in `components/content-area/block.tsx` and fragments in `lib/optimizely/queries/fragments/Block.graphql` — remove fragment + component together so `ItemsInContentArea` stays valid for codegen. Keep the mapper/factory infrastructure (still used by CMSPage/`/about` and Visual Builder).
   - The CMS still has these types published; deleting frontend code is safe. Rasel can clean up CMS content/types later.
4. Header/footer: reduce nav to Home / About / RSS; keep `GetHeader`/`GetFooter` queries and cache tags.

**Acceptance:** `npm run lint && npm run build` pass; no references to deleted blocks.

## Phase 2 — GraphQL layer for BlogPost

1. New queries in `lib/optimizely/queries/` — **fields limited to what the schema actually has** (title, subheading, author, publishedDate, body, _metadata):
   - `GetBlogPostByURL.graphql` — BlogPost by `_metadata: { url: { default: { eq: $slug } } }`, incl. `body { html json }`, `_modified`.
   - `GetAllBlogPosts.graphql` — all BlogPost: title, subheading, author, publishedDate, `_metadata { url { default hierarchical } }`; `orderBy: { publishedDate: DESC }` (verify string-date sort against real data; if the format doesn't sort chronologically, sort in code), `limit`/`skip`.
   - Draft variants under `lib/optimizely/queries/draft/` mirroring the existing `GetAllPagesVersionByURL` pattern so draft mode works for posts.
2. `npm run gen-types`; commit regenerated `lib/optimizely/types/generated.ts`.
3. Listing queries use cache tag `optimizely-blog` via `optimizelyFetch`.

**Acceptance:** `npm run gen-types` succeeds; typed SDK exposes the new operations.

## Phase 3 — Routes & rendering

1. **Listing (homepage):** rewrite `app/(site)/[locale]/page.tsx` — GetAllBlogPosts → intro header (hardcoded name/bio line, since no listing page type exists) + post cards (title, subheading, formatted date). Component: `components/blog/post-card.tsx`. Static + ISR via cache-tag revalidation.
2. **Article route:** new `app/(site)/[locale]/blog/[slug]/page.tsx`:
   - `generateStaticParams` from GetAllBlogPosts (derive slug from `_metadata.url`, per Phase 0 finding).
   - `generateMetadata`: title, description = subheading, `openGraph` type `article` + `publishedTime`, alternates via `lib/utils/metadata.ts`.
   - Draft-mode branch mirroring the existing `DraftModeCmsPage` pattern (new `components/draft/draft-mode-blog-post.tsx`).
   - `notFound()` when no match.
3. **Body rendering — `components/blog/post-body.tsx`:** render from `body.json` (structured rich text) with a node-type → component map; fall back to sanitized `body.html` only if the JSON shape is unusable (decided by Phase 0's inspection):
   - paragraphs/headings/lists/links/inline-code → semantic HTML with `prose` typography (`@tailwindcss/typography`, add to `tailwind.config.ts`); heading nodes get slugified `id`s.
   - code-block nodes → server-side `shiki` highlighting of the node's plain-text content (language from node attrs, allowlisted, fallback `text`) + copy button. Code never passes through an HTML parser.
   - blockquotes → styled callout component (covers the "One Rule To Remember" pull-quotes).
   - the GC guide's quiz remains prose (questions + answers section) — acceptable; an interactive quiz needs structured data the model doesn't have. Optional later enhancement, not this build.
   - **Text from rich-text JSON must be rendered as React text nodes (auto-escaped), never concatenated into HTML strings.** If the `body.html` fallback is used, sanitize server-side with `sanitize-html` (explicit tag/attr allowlist: `p, a, h2, h3, h4, pre, code, blockquote, strong, em, ul, ol, li, img, figure, figcaption, table, thead, tbody, tr, th, td, hr, br`; `a[href]` → `https:`/`mailto:` only; `img[src]` → `https:` only). CMS rich text is stored content served to every visitor — treat as untrusted (stored-XSS defense). Any `dangerouslySetInnerHTML` must be fed only by the sanitizer or shiki output.
4. **Post chrome:** `components/blog/post-meta.tsx` — author, formatted date, "Originally published on Medium" link (`rel="noopener noreferrer"`; static mapping slug→Medium URL in `lib/blog/medium-links.ts` since the CMS has no canonicalUrl field).
5. Keep `[slug]/page.tsx` (CMSPage/Visual Builder) for `/about`; don't break its fallback chain.

**Acceptance:** `/` lists 4 posts newest-first; each `/blog/<slug>` renders with highlighted code and correct typography; `grep -rn "dangerouslySetInnerHTML"` shows only sanitizer/shiki-fed sinks; build passes.

## Phase 4 — SEO & feeds

1. JSON-LD `Article` schema on post pages (headline, author, datePublished) — `JSON.stringify` with `<` escaped as `\u003c`.
2. Canonical: self-canonical by default with visible Medium attribution link; flip per post to Medium-canonical via the `lib/blog/medium-links.ts` map if Rasel prefers (one-line config).
3. `app/sitemap.ts`, `app/robots.ts` from GetAllBlogPosts.
4. `app/feed.xml/route.ts` — RSS 2.0; XML-escape all CMS-derived fields; `Content-Type: application/rss+xml`.

**Acceptance:** metadata correct in page source for all 4 posts; feed and sitemap parse.

## Phase 5 — Caching, revalidation, security hardening

1. `app/api/revalidate/route.ts`: BlogPost publish → revalidate `/en/blog/<slug>` + `optimizely-blog` tag; keep header/footer tag logic. Harden while touching it: `crypto.timingSafeEqual` for `cg_webhook_secret` (hash both sides to equal length first), `zod` validation of the webhook body shape, generic error responses.
2. Security headers in `next.config.ts` `headers()`:
   - CSP: `default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' https://miro.medium.com https://*.cms.optimizely.com data:; frame-ancestors 'none'` — draft-mode routes need the CMS communicationinjector script + iframe embedding, so scope a relaxed CSP/`frame-ancestors` to the `(draft)` route group only. Start `Report-Only` if anything breaks.
   - `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, HSTS (`max-age=31536000; includeSubDomains`).
3. `next.config.ts` images: `remotePatterns` allowlist only needed hosts (`miro.medium.com`, CMS asset domain) — no wildcards.
4. New deps pinned to exact versions (`shiki`, `@tailwindcss/typography`, `zod`, `sanitize-html` + types if the HTML fallback is used); lockfile committed; `npm audit` after install.
5. Confirm no server-only env var reaches client components: `grep -rn "OPTIMIZELY_" components app | grep -v NEXT_PUBLIC` on client files.

**Acceptance:** webhook rejects bad secrets/bodies (401/400, generic); headers present; build passes.

## Phase 6 — Draft QA → publish → public verification

Order matters: everything is QA'd in draft view first; publishing is the last gate.

1. **Draft QA (content still unpublished):** `npm run lint`, `npm run build`; review all 4 posts through draft mode (CMS preview → draft routes) against the Medium originals (table above): headings intact, code blocks highlighted with correct language, blockquote callouts styled, GC quiz readable, no mangled characters. Fix rendering or CMS content until right. Note: the public `/` listing and `/blog/<slug>` pages will be empty/404 until publish — that's expected; `generateStaticParams` returning no paths must not fail the build.
2. **Publish (Rasel, CMS UI):** once draft QA passes, publish the 4 posts.
3. **Public verification:** rebuild/revalidate; manual pass on `/` (4 posts, newest first), all 4 `/blog/<slug>`, `/feed.xml`, `/sitemap.xml`, 404 for unknown slug.
4. Revalidation smoke test: publish a small edit in CMS → webhook → page updates without redeploy.
5. Update `README.md` + add `docs/blog-architecture.md`; Lighthouse ≥90 performance/SEO/accessibility on an article page.

---

## Notes for the implementer

- **The verified schema section is ground truth** — do not query fields that aren't listed there; codegen will fail. If Rasel adds fields (tags, canonicalUrl, readingTime) later, extend queries then.
- Follow existing conventions exactly: `.graphql` files + codegen (never hand-write Graph types), `Suspense` around content areas, cache tags through `optimizelyFetch`.
- Content stays in DRAFT until Phase 6 — all development and QA runs through draft mode with preview auth. Only Phase 6's publish step (and any in-CMS content fixes from Phase 0 item 3) needs Rasel. Don't start Phase 3's body renderer until Phase 0's body-structure inspection is done.
- The public site being empty pre-publish is expected: listing renders an empty state, `generateStaticParams` may return `[]`, builds must not fail on zero published posts.
- Commit per phase; keep each phase's build green.
- Do not commit `.env`; never echo secret values while fixing the key.
