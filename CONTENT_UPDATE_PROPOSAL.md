# Content Update — Evidence-Based Skills + Bio Drafts (FOR REVIEW, NOT IMPLEMENTED)
## straw-hat-dev-portfolio — prepared by Codex, pending owner approval

---

## Scope status (flagged per request)
The nav/scroll fix from the previous task is STILL UNCOMMITTED in the working tree
(4 modified files + untracked QA_BUG_REPORT.md, on top of HEAD 206b501). It has
NOT been touched by this content task and will not be, unless separately told to
commit it. Keep an eye on it so it isn't lost when this content work eventually
commits.

Evidence base: 24 repos actually cloned at C:\Users\Yahya\Desktop\GIT_projects.
23 are Python (requirements.txt); 1 static frontend (la-bonta-ristorante).
Only these 24 could be inspected — the 17 private repos referenced by the site's
projects data are NOT present locally, so this profile is evidence-based on what
is on disk. If the owner wants the missing 17 included, clone them first and I'll
re-run the scan. Noted here for accuracy.

---

## PART 1 — Proposed skills list (evidence-based)

Site structure: skills render as `.fruit-tag` spans from `skills:{...}` in
js/i18n.js (currently: React, JavaScript, Node.js, TailwindCSS, GSAP, Three.js,
Python). The section is a TRANSLATED area (7 languages). Proposed replacement,
grouped — each line: proposed tag + the concrete evidence backing it.

### Languages
- Python — 21/24 repos run FastAPI; requirements.txt everywhere; sole real
  language of the portfolio.
- JavaScript — real but MINOR: only the 2 static frontends (la-bonta-ristorante,
  doctor-website) + vanilla chat-widget.js. No framework.

### Backend / API
- FastAPI — 21/24 repos; every API surface.
- SQLAlchemy — 20 repos; 111 files; SQLite (21) + Postgres (4) both used.
- REST API design — consistent `/api` + uvicorn (21) + Pydantic validation (21).
- Asynchronous Python — aiosqlite (12), asyncpg, httpx (21), pytest-asyncio (15).

### AI / Automation (the genuine core)
- LLM integration — 14 repos with real inference code; multi-provider:
  DeepSeek (7), OpenAI (6), Anthropic (6) — often 2-3 in one app
  (agent-orchestrator, ai-agent-dashboard, chatbot-builder-pro, n8n-workflow-agent).
- AI agent / orchestration — agent-orchestrator, ai-lead-scoring, brand-voice-system.
- Business-automation integrations — the largest cluster: GoHighLevel (4),
  Make.com (4), n8n (3), HubSpot (1), CRM enrichment. 12+ repos of
  agency-style client automation.
- Chatbots / conversational AI — ai-chatbot-builder(-pro), whatsapp-sales-agent,
  doctor-website, n8n-support-inbox.
- WhatsApp / SMS (Twilio) — whatsapp-sales-agent, ghl-missed-call-textback.

### Data & Documents
- Document processing — invoice-extractor: pdfplumber + OCR + regex, typer CLI,
  gradio UI, openpyxl (Excel).
- SQL databases — SQLAlchemy ORM, SQLite (21), Postgres (4), Alembic migrations (5).

### Desktop & Tooling
- Flet desktop apps — n8n-workflow-agent (7 files), ai-chatbot-builder-pro (9 files).
- CLI tooling — typer/rich (invoice-extractor).
- Docker — Dockerfile in 19 repos, docker-compose in 7.
- Testing — pytest (18) + pytest-asyncio (15).

### ⚠️ Skills REMOVED because the evidence does NOT support them
- React — 0 real usages. Only aspirational/README mentions.
- Node.js — 0 real usages as a backend. The site itself is vanilla JS.
- TailwindCSS — 0 real usages.
- GSAP — 0 real usages.
- Three.js — used ONLY inside this portfolio site's own welcome background, not
  as a shipping skill for client work. Keep only if presenting this site itself
  as a piece; it is not repeated anywhere else.

Recommendation: a TRUE skills list focused on Python/FastAPI, LLM integration,
and business automation. Proposed final tag set (to be entered into the same
`skills:` key structure):

  python, fastapi, sqlalchemy, mysql/postgres → postgres,
  llm-integration, ai-agents, chatbots,
  automation-integrations (GHL/Make/n8n/HubSpot),
  whatsapp-sms (Twilio),
  document-processing, async-python,
  docker, pytest, flet, cli-tooling

Keep it tight — roughly 14 tags instead of 7, matching what's real.

---

## PART 2 (REVISED) — Merged bio draft (single version, per owner decision)

Owner merged the strongest elements of A/B/C into one draft: lead with
automation/AI-agent depth, keep honest full-stack breadth, add a light
client-agency touch. 14-tag skills list kept as-is.

### Proposed final bio — Home tagline (replaces current home.tagline)

"I build AI-powered automation that runs real businesses. FastAPI backends
that talk to GoHighLevel, Make, n8n, and HubSpot; LLM agents that qualify
leads, book calls, and answer customers over WhatsApp; Python tools that
turn invoices, documents, and spreadsheets into clean data. Full-stack when
the job needs it, Docker-included so every ship deploys anywhere — the same
kind of system that quietly powers a growing agency's clients."

### Proposed final bio — Captain's Log (Journey section, 3 entries)

1. East Blue — "Learned to build. Python, APIs, and the discipline of code
   that doesn't break."
2. Grand Line — "Shipped for real people: client automations for GoHighLevel,
   HubSpot, Make, and n8n. Every deadline a boss fight won."
3. New World — "Now: AI agents that work an inbox, book a call, and write a
   report — a 40+ project treasure vault to prove it."

### Final skills tag set (14, unchanged from Part 1)
Python, FastAPI, SQLAlchemy, Postgres/SQLite, Async Python, LLM Integration,
AI Agents, Chatbots, Business Automation (GHL/Make/n8n/HubSpot), WhatsApp/SMS,
Document Processing, Docker, pytest, Flet.

### Register note
Kept the pirate/sea metaphor but anchored every claim to evidence — no
"passionate" / "self-taught ninja" filler. The home.tagline lead sentence and
the "every deadline a boss fight" / "treasure vault" lines carry the One Piece
tone that already exists on the site.

---

## Implementation map (translations-included decision)
Configuration confirmed: js/i18n.js has EXACTLY 7 language blocks
(lines en:117, fr:186, it:255, de:324, ru:393, ja:462, ar:531), each with its
own `skills:{}`, `home:{}`, `about:{}`. User decision: implement English + all
6 translations.

Files/targets to touch on approval (nothing done yet):
  js/i18n.js  — 7 blocks × (skills:, home:, about:) = 21 sub-blocks
  index.html  — fallback text only: the 7 .fruit-tag spans (lines ~125-131),
                home.tagline (~93), about section (label/title + 3 voyage
                entries, ~108-121). Untranslated fallback stays English.
Text to be translated programmatically into: fr, de, it, ru, ja, ar.
The 6 non-English translations will be generated and reviewed against the
approved English before being slotted into the 6 dedicated blocks.

## Next step
Owner reviews Parts 1 & 2, gives edits/approval. Once approved, exact English
text + 6 translations are handed to Claude Code to implement into
js/i18n.js + index.html (preserving structure), browser-verified, then
security/attribution gate, commit under Yahya Jarray, push.
