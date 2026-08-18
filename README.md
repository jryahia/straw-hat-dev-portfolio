# <svg style="display:inline-block;width:1em;height:1em;vertical-align:-0.125em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="10" r="8"/><circle cx="9" cy="9" r="1.5" fill="currentColor"/><circle cx="15" cy="9" r="1.5" fill="currentColor"/><path d="M9 17h6"/><line x1="9" y1="19" x2="12" y2="17"/><line x1="15" y1="19" x2="12" y2="17"/></svg> Straw Hat Dev — Portfolio

One Piece themed developer portfolio with 3D ocean scene (Three.js), 7-language i18n, PWA support, and dark mode.

## Stack

Vanilla HTML/CSS/JS + Three.js r128

## Run

```bash
# Serve locally with any static server
npx serve .
# Or just open index.html in a browser
```

## Features

- 3D Three.js scene with animated ship, islands, characters
- 4 sections: Home, Journey, Treasures (projects), Contact
- Project gallery with modal (tech stack, features, GitHub/demo links)
- 7 languages (EN, FR, IT, DE, RU, JA, AR)
- Dark mode toggle
- Audio player (One Piece OST)
- PWA offline support
- Responsive design
- Email protection (anti-scraper)

## Project Structure

```
├── index.html              # Single page, 4 sections
├── manifest.json           # PWA manifest
├── service-worker.js       # Offline caching
├── jolly-roger.svg         # SVG logo
├── css/
│   ├── style.css           # Core styles + layout + theming
│   ├── projects.css        # Project gallery + modal styles
│   └── mobile.css          # Responsive breakpoints
├── js/
│   ├── script.js           # Three.js scene + navigation + UI
│   ├── projects.js         # Project data + card rendering
│   ├── i18n.js             # 7-language translation system
│   ├── audio.js            # Background music player
│   └── contact.js          # Email obfuscation
└── audio/
    └── one-piece-overtaken.mp3
```
