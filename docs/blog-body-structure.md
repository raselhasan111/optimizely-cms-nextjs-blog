# BlogPost `body` rich-text structure (Phase 0 findings)

Queried 2026-08-10 via preview-auth Content Graph (`Authorization: Basic $OPTIMIZELY_PREVIEW_SECRET`). Ground truth for Phase 3's renderer.

## 1. Draft posts confirmed

All 4 posts exist as `DRAFT` (`_metadata.status: "Draft"`), visible only with preview auth.

| Title | `_metadata.url.default` | `publishedDate` (raw string) |
|---|---|---|
| JavaScript Garbage Collection: A Complete Interview Guide | `/en/javascript-garbage-collection-interview-guide/` | `Dec 20, 2025` |
| Notes from an AI-First Interview... | `/en/ai-first-interview-optimizely/` | `May 11, 2026` |
| 'use server' Doesn't Mean Private | `/en/use-server-doesnt-mean-private/` | `May 14, 2026` |
| Stop Trusting Your LLM's Markdown... | `/en/llm-markdown-prompt-injection-xss/` | `May 15, 2026` |

**Important — no `/blog/` parent.** URLs are flat, one segment under the locale root (`/en/<slug>/`), not `/en/blog/<slug>/`. To get `/blog/<slug>` routes as the plan's IA wants, Phase 3's `app/(site)/[locale]/blog/[slug]/page.tsx` must construct the Graph query URL as `/{locale}/{slug}/` from the route param — it does **not** match the CMS hierarchical path 1:1 the way the existing `[slug]/page.tsx` (CMSPage/SEOExperience) does. This is a routing-layer decision, not a CMS content issue.

**`publishedDate` is a human-formatted string** (`"May 15, 2026"`), not ISO — e.g. `"Dec 20, 2025"` vs `"May 11, 2026"` happens to string-sort correctly here, but the format (`MMM D, YYYY`, year last) does not sort correctly in general. Per the plan: **sort in code** (`Date.parse` or a small month-name lookup) — do not rely on Graph `orderBy: { publishedDate: DESC }`.

## 2. Rich-text schema

`body.json` is a Slate-style tree: `{ type: "richText", children: [...] }`. Node types observed across all 4 posts:

- Block nodes: `paragraph`, `heading-two`, `heading-three`, `quote`, `code`, `bulleted-list`, `numbered-list`, `list-item`
- Inline: `link` (`{ type: "link", url, children }`)
- Text leaves: `{ text: string, bold?: true, code?: true }` (inline-code mark, distinct from the block-level `code` node)

No `heading-one`, `image`, or `table` nodes appear anywhere. No dedicated blockquote-with-attribution shape — `quote` is just a block wrapping marked text runs.

`body.html` is a server-rendered mirror of the same tree (e.g. `heading-two` → `<h2>`, `code` node → `<pre><code>`) — it has the *identical* content issues described below (same source), so there's no fidelity advantage to the HTML fallback except that link nodes are already flattened to `<a href>`. **Decision: render from `body.json`.** It preserves structured `link` nodes (url + text) that are easy to turn into safe React `<a>` elements, and text leaves render as auto-escaped React text nodes with no sanitizer needed. Reserve the `body.html` + `sanitize-html` path per the plan only as a last-resort fallback if a future post's JSON shape is unusable.

## 3. Per-post condition — 2 clean, 2 damaged by the Medium migration

### Clean: "Notes from an AI-First Interview" and "Stop Trusting Your LLM's Markdown"

Structure round-tripped correctly: proper `heading-two`/`heading-three`, `quote`, `bulleted-list`/`numbered-list` → `list-item`, and (in the XSS post) **two separate, distinct `code` nodes** — one per ❌/✅ example, not merged. These will render well with a straightforward node-type → component mapper.

One real issue in the XSS post's `code` nodes: their text has already been **HTML-entity-escaped** (e.g. `&lt;div dangerouslySetInnerHTML={{ __html: html }} /&gt;` instead of `<div ... />`). Phase 3's code renderer must HTML-decode the node's `text` before handing it to shiki, or the highlighted output will literally show `&lt;`/`&gt;` instead of the intended JSX. This is a frontend fix (decode before highlight), not a content fix.

### Damaged: "JavaScript Garbage Collection" and "'use server' Doesn't Mean Private"

The migration flattened structure and, worse, **stripped newlines inside code content**, changing code semantics. Concretely:

- **GC guide:** the entire post is only `heading-three` / `quote` / `paragraph` nodes — no `code` block, no lists. Markdown syntax that should have become structure survived as literal characters instead: e.g. one paragraph's text is literally `"#### Code Snippet: `javascript let wm = new WeakMap(); let user = { name: "Rasel" };"` — the fenced code block, its language tag, and the following lines were all collapsed into one paragraph with the markdown fence/heading markers left in as plain text. The 10-question quiz is intact as a single long `heading-three` text run (acceptable per the plan — quiz stays prose).
- **'use server' post:** 5 distinct source code snippets (2 vulnerable/secure pairs plus a schema snippet) were **merged into a single `code` node**, along with the next section's `---` divider and `## The Fix` heading, all run together with no newlines: `"...await db.users.delete(userId)}```---## The FixSession, role..."`. The "One Rule To Remember" pull-quote also lost its `quote` node — it's now plain text (with a literal `>` prefix) glued onto the `heading-two` text: `"One Rule To Remember> *Hiding a button is not access control...*"`.
- Net effect: even a perfect renderer can't recover correct code formatting here, because the newlines that separated lines (including comment-terminating newlines) are gone from the stored data — in the 'use server' example, `// Parsing markdown to raw HTML` followed directly by `const html = ...` with no line break would silently comment out the next statement if run through a naive line-comment reader.

**Per the plan's own instruction, this is a CMS-content fix, not a frontend workaround:** *"If code blocks were flattened to plain paragraphs, fix them in the CMS editor (re-apply code-block formatting) rather than heuristically detecting code in the frontend."* Action for Rasel, in the CMS UI, before Phase 6 QA: re-split these two posts' merged/flattened sections back into proper `code`/`quote`/heading nodes with real line breaks. Not a blocker for Phases 1–3 — the renderer will be built generically from node type and will render these two posts' current (messy) text faithfully and safely; it will just look visibly wrong until the CMS content is fixed. Flagging here so it isn't lost.

## 4. Decisions this locks in for Phase 3

1. Route `/blog/[slug]` queries Graph by constructing `/{locale}/{slug}/`, not by matching a stored hierarchical `/blog/` path.
2. Sort the listing by parsing `publishedDate` in code (not Graph `orderBy`).
3. Render from `body.json` via a `type` → component map (`paragraph`, `heading-two`→h2, `heading-three`→h3, `quote`, `code`, `bulleted-list`/`numbered-list`→`list-item`, `link`); HTML-decode entities in `code` node text before shiki; text leaves rendered as plain React children (React auto-escapes — no sanitizer needed on this path).
4. `body.html` + `sanitize-html` fallback is not needed for these 4 posts; keep the code path available per the plan for future posts only.
5. Two posts (GC guide, 'use server') need manual CMS content repair for their code/quote sections — tracked here, not a Phase 3 code task.
