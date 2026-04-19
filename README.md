# yt-bypass.js

A lightweight script that spoofs the browser environment to satisfy the YouTube Game API, allowing Unity WebGL games to run outside of a YouTube iframe.

---

## Usage

Include it in your HTML **before** the YouTube Game API script:

```html
<script src="yt-bypass.js"></script>
<script src="https://www.youtube.com/game_api/v1"></script>
```

---

## What It Does

### Spoof 1 — Top-level window
Tricks the page into thinking it is not inside an iframe by overriding `window.parent` and `window.top` to point back to itself.

### Spoof 2 — Fake referrer
Overrides `document.referrer` to return `https://www.youtube.com/` so the API thinks the page was navigated to from YouTube.

### Spoof 3 — Fake ancestorOrigins
Overrides `window.location.ancestorOrigins` to appear as if the page is embedded inside a YouTube origin.

### Spoof 4 — Required hash
Sets the URL hash to the flags required by the YouTube Game API:
```
#flags={"enableServiceWorker":false}&origin=https://www.youtube.com
```

