# DEEP QA PASS — Navigation + Sidebar / Treasures Panel Scroll
## straw-hat-dev-portfolio

Handoff document. Produced by Codex (DeepSeek) after hands-on browser testing
against a locally served build (http://127.0.0.1:8099). No fixes applied — this
is the brief for Claude Code.

Test environment: local `python -m http.server`, Chrome, desktop viewport
(~1280x720 → #projects-content clientHeight 568 / scrollHeight 8207) and
mobile-width code paths reviewed. Console clean (0 JS errors) throughout —
every issue below is a behavioural/logic bug, not an exception.

---

## Architecture context (read this first)

This is NOT a conventional page. It is a 4-section FULL-VIEWPORT 3D experience:

- `.section-content` panels (Home / Journey / Treasures / Contact) are
  `position:absolute` full-screen layers. Exactly ONE has `.active` at a time.
- `#ui-overlay` (index.html:87) wraps the 4 panels.
- `#projects-content` (the "sidebar" / project gallery) is an inner scroll
  container: `overflow-y:auto`, `scroll-behavior:smooth` (style.css:762-770),
  holds `#projects-grid` with 44 `.treasure-card`s (scrollHeight 8207 vs
  clientHeight 568 — massively scrollable).
- Section switching is driven BOTH by the top nav links (script.js:510-515)
  and a global `wheel` handler (script.js:478-495) + `touchend` handler
  (script.js:503-508).
- Card reveal animations: `revealOnScroll(grid)` in js/projects.js:668-719,
  with a MutationObserver added in commit 206b501 to defer reveal until the
  projects panel is `.active`.
- Background: Three.js camera + ship animate over `ANIMATION_DURATION = 2000`
  ms (script.js:2). Content panels crossfade over **800ms** (style.css:519).

---

## ISSUE 1 — [JANKY] Nav clicks are silently DROPPED during the 2s transition
Severity: janky (works but feels broken / unresponsive)
File: js/script.js:39 (`navigateToSection` guard) + :510-515 (nav links)

Reproduction:
1. Load the site (Home active).
2. Click "TREASURES" then, within the next ~2.2s, click "JOURNEY".
3. Observe: the second click is ignored entirely. The active section does not
   change; there is no error and no visual feedback. The user must wait for the
   2.2s window to elapse and click again.

Root cause:
`navigateToSection` starts with `if(index<0||index>=totalSections||isTransitioning) return;`.
`isTransitioning` is set true on every navigation and held for
`ANIMATION_DURATION(2000) + TRANSITION_BUFFER(200)` = **2200ms** (script.js:46).
Any nav click during that window is silently swallowed. Repeated or impatient
nav clicks (very common in the owner's browsing) read as "navigation feels not
smooth / unresponsive."

Confirmed in the live browser: clicked HOME, then immediately JOURNEY in the
same frame → section stayed `home-content`; the JOURNEY click was dropped.

Expected: a click made mid-transition should queue and land on the target
section, or be handled immediately (interrupt), not be lost.

---

## ISSUE 2 — [BROKEN on touch] Treasures panel cannot be scrolled with a swipe
### THE "sidebar up/down scroll doesn't work" bug (mobile/touch)
Severity: broken
File: js/script.js:503-508 (touchstart / touchend)

Reproduction (touch device or dev-tools device mode):
1. Navigate to TREASURES (the project gallery panel).
2. Try to swipe UP (finger up) to scroll through the 44 project cards.
3. Observe: instead of scrolling the gallery, the swipe flips to the next
   section (Contact), or flips back to the previous (Journey) on a downward
   swipe. The gallery content can never be browsed vertically by touch.

Root cause:
The `touchend` handler fires on EVERY vertical swipe of >50px, anywhere on the
window, and unconditionally calls `navigateToSection(...)`. It has NO check for
whether `#projects-content` is the active section, NO check for whether the
panel can/should scroll, and no `touchmove`/`preventDefault` that would let the
panel's own native touch scroll take over. On touch devices the panel is
effectively unscrollable — this is almost certainly the concrete thing the
owner means by "the sidebar up/down scroll doesn't work."

The desktop `wheel` handler (script.js:478-495) DOES have correct boundary logic
(lets the panel scroll when not at top/bottom; only navigates away when hitting
the panel boundaries) — which is why desktop scrolling works in the middle but
touch scrolling is fully broken.

Expected: swiping up/down should scroll the gallery while the cursor/finger is
over it; only overscroll past top/bottom should switch sections.

---

## ISSUE 3 — [JANKY] Content fades in (800ms) while the 3D world takes 2s → torn "not smooth" feel
Severity: janky
File: css/style.css:519 (.section-content transition) vs js/script.js:2
      (ANIMATION_DURATION=2000)

Reproduction: click any nav link. The text/content of the target section fades
to full opacity in **800ms**, but the Three.js camera + ship are still animating
for a full **2000ms**. The content "pops" in and sits still over a background
that is still gliding → visibly disjointed, reads as un-polished / not smooth.

Root cause: mismatch between the panel crossfade (0.8s) and the camera
animation (2s). There is also NO movement/parallax on the `.section-content`
panel itself — it is a static layer that only crossfades, while the world moves
beneath it, which amplifies the jarring cut.

Expected: coordinate the two timings (content should arrive ~when the camera
settles, e.g. a fade+settle that completes near the 2s mark) and/or add a
subtle translate/parallax so the panel doesn't feel like a flat pop-in.

---

## ISSUE 4 — [JANKY] Reveal regression: cards left permanently hidden (opacity 0) after leaving & returning to Treasures
Severity: janky (shows broken/empty gallery)
File: js/projects.js:668-719 (revealOnScroll), css/projects.css:236-239

Reproduction:
1. Go to TREASURES. Scroll (or fast-scroll) so many cards reveal.
2. Leave to another section, then return to TREASURES (panel keeps its prior
   scroll position — scrollTop persists across section switches).
3. Observe: some in-viewport cards stay at `opacity: 0` (class
   `treasure-card reveal` but WITHOUT `revealed`). They never become visible.
   Confirmed live: at panel scrollTop 7639 near the bottom, one card in view was
   stuck `op` 0 while its immediate neighbours were `op` 1.

Root cause: the IntersectionObserver `unobserve()`s each card the first time it
reveals, and the `started` flag prevents re-observation. When the panel's scroll
position survives across section switches, cards whose intersection fired (or
was missed) outside the observer's active window are left in the
`.reveal:not(.revealed)` CSS state (opacity 0 / translateY 24px) with no
fallback that re-reveals them on re-entry. The hard-cut section visibility
toggle (`.section-content` visibility) races the reveal callback.

This is the "scroll-reveal from the last update breaking something" the owner's
QA brief suspected — it interacts with the panel scroll to make the gallery look
broken after a round-trip, but it is NOT the cause of Issue 2 (that is the touch
handler). No need to remove the reveal; it needs a re-entry/re-observe fallback
(e.g. reveal any card already within the panel's current viewport when the panel
becomes active, not just on the first visit).

---

## ISSUE 5 — [janky, minor] No scroll-position reset entering Treasures
Severity: janky (minor)
File: js/script.js (navigateToSection / updateUI), js/projects.js

Reproduction:
1. Go to TREASURES, scroll to card #40.
2. Navigate away, navigate back to TREASURES.
3. Observe: you land mid-gallery (card #40 view) rather than at the top.
   Combined with Issue 4 this can present as an empty/broken panel.

Expected (recommended): reset `#projects-content.scrollTop = 0` each time the
panel becomes active (unless deliberate restore is wanted).

---

## Perf / CLS notes (checked, no action required)
- Reveal uses opacity + transform only → no layout shift (CLS-safe). ✓
- Modal open/close (`openProjectModal`/`closeProjectModal`, js/projects.js:639-664)
  verified working: `.active` + body `.modal-open` applied on open, both
  reverted on close. Modal/animation smooth (0.4s modalSlideIn). ✓
- `body.modal-open { overflow:hidden }` (style.css:85) does NOT lock the inner
  `#projects-content` scroll, but that panel is hidden behind the overlay, so no
  functional issue.
- No FOUC / flash observed on section switches (panels crossfade between
  visibility states).

---

## Fix scope guard (Claude Code must honour)
- Scope is STRICTLY navigation / sidebar / scroll smoothness. Do NOT touch the
  color scheme, the Three.js scene, dark mode, i18n, PWA/service-worker, or the
  audio player.
- Do NOT rip out the scroll-reveal animation; fix the interaction (re-entry
  re-observe) instead. Only if investigation proves the reveal is fundamentally
  incompatible with panel scrolling should you STOP and report back before
  removing it.
- Fix each issue at the root cause (queue/clamp nav clicks, give touch
  scrolling priority over section-switch inside the gallery, coordinate the
  content/camera timing or accept its size but at least make rapid nav not drop
  clicks, re-reveal on re-entry, reset scroll position on entry).

## Test matrix to re-verify AFTER the fix (real browser, not code review)
1. Nav: click each of HOME / JOURNEY / TREASURES / CONTACT, and a rapid
   double-click (should NOT drop the second).
2. Treasures panel scroll: desktop wheel mid-scroll, up to top, over bottom.
3. Treasures panel scroll: TOUCH swipe up/down over the gallery (must scroll
   the cards, not flip sections).
4. Treasures re-entry: leave to another section and return — all in-view cards
   visible, none stuck at opacity 0, panel at top.
5. Both desktop and mobile-width viewports.
6. Browser console clean (0 errors) through the whole pass.
