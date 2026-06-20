window.PROJECTS = [
  {
    id: "zoande-brokersim",
    title: "BrokerSIM",
    owner: "Pablo",
    repoUrl: "https://github.com/Zoande/BrokerSIM",
    localPath: "repos/Zoande__BrokerSIM",
    tech: ["TypeScript", "Vite", "Browser Game"],
    stage: "Playable prototype",
    summary:
      "A broker roleplay game with a 2D deal desk and a 3D warehouse. Source deals, negotiate with clients, then handle physical dispatch.",
    details: [
      "Daily cycle with supplier offers, client requests, and deal outcomes.",
      "Warehouse mode with keyboard controls for package handling.",
      "README lists clear next targets around persistence and negotiation depth."
    ],
    status:
      "Runs as a Vite app. The core loop works for one full in-game day. Long-term progression and deeper negotiation are still in progress.",
    deliverableSteps: [
      "Lock a stable loop for one full in-game day.",
      "Persist inventory, cash, and reputation to local storage.",
      "Add a balancing pass and issue tracking for the next milestone."
    ]
  },
  {
    id: "dh-polymarket-bot",
    title: "Polymarket-Bot",
    owner: "Dima",
    repoUrl: "https://github.com/DH4410/Polymarket-Bot",
    localPath: "repos/DH4410__Polymarket-Bot",
    tech: ["React", "Vite", "JavaScript"],
    stage: "Feature-rich frontend prototype",
    summary:
      "A trading assistant frontend with market scanning, signal logic, news sentiment hooks, and portfolio utilities.",
    details: [
      "Large App.jsx with API fetch layers and decision heuristics.",
      "CORS proxy fallback and multi-source data pulls.",
      "Code-heavy and ready to be split into smaller, focused modules."
    ],
    status:
      "Broad functionality in one large file. Works but could be cleaner.",
    deliverableSteps: [
      "Split API, strategy, and UI into separate modules.",
      "Move keys to environment variables.",
      "Add tests for the signal-confidence math."
    ]
  },
  {
    id: "dh-typing-platformer",
    title: "typing-platformer",
    owner: "Dima",
    repoUrl: "https://github.com/DH4410/typing-platformer",
    localPath: "repos/DH4410__typing-platformer",
    tech: ["Next.js", "TypeScript", "Canvas"],
    stage: "Playable concept",
    summary:
      "A typing-based action runner where typed commands control jump, crouch, and sprint - affecting score and combo.",
    details: [
      "Canvas loop and keyboard handling are working.",
      "Tutorial and restart behavior already in.",
      "Several systems are stubs for future expansion."
    ],
    status:
      "Good direction with clear mechanics. Not yet fully tuned for production.",
    deliverableSteps: [
      "Replace placeholder obstacle logic with full word/action generation.",
      "Finish collision and game-over balancing.",
      "Add a mobile-friendly input mode."
    ]
  },
  {
    id: "dh-brokersim",
    title: "BrokerSIM",
    owner: "Dima",
    repoUrl: "https://github.com/DH4410/BrokerSIM",
    localPath: "repos/DH4410__BrokerSIM",
    tech: ["React 19", "TypeScript", "Vite", "Three.js", "WebGL", "GLTF Assets"],
    stage: "Playable vertical slice (deal desk + 3D warehouse)",
    summary:
      "A broker simulation where you source luxury inventory each day, negotiate with personality-driven clients, then complete fulfillment in a 3D warehouse before dispatch.",
    details: [
      "Full simulation loop: browse supplier offers, negotiate a client deal, switch to the 3D warehouse, dispatch, and score the outcome.",
      "Supplier cards track list price, condition, inbound shipping, risk, and trust - all feeding into the final margin.",
      "Negotiation reads chat intent (discount, shipping, trust, walk-away, etc.) and adjusts mood and leverage based on client personality type.",
      "Day-level events like delay spikes and fraud pressure change demand and deal difficulty dynamically.",
      "React + Vite for state and UI, Three.js for the 3D warehouse scene with GLTF models.",
      "Built vertical-slice first: economy math, then negotiation logic, then 3D fulfillment and day-event layering."
    ],
    screenshots: [
      "Placeholder: Deal desk with supplier cards, client budget, and profit projection.",
      "Placeholder: Live negotiation chat across different client personalities.",
      "Placeholder: 3D warehouse phase carrying an item to dispatch.",
      "Placeholder: End-of-day summary with profit, disputes, and trust changes."
    ],
    status:
      "Playable end-to-end today. One full broker day works. Long-term persistence and content expansion are the main gaps.",
    deliverableSteps: [
      "Add persistent save for cash, trust, challenge streaks, and client history.",
      "Expand content pool with more categories, personas, and events.",
      "Add reputation consequences that carry across multiple days.",
      "Capture final screenshots to replace placeholders."
    ]
  },
  {
    id: "dh-citybuilder",
    title: "CityBuilder",
    owner: "Dima",
    repoUrl: "https://github.com/DH4410/CityBuilder",
    localPath: "repos/DH4410__CityBuilder",
    tech: ["Vanilla JS", "HTML5 Canvas", "CSS"],
    stage: "Browser prototype",
    summary:
      "A megacity simulation in the browser with terrain generation, building categories, and camera controls.",
    details: [
      "Plain HTML, CSS, and JS - no build step needed.",
      "README covers economy/service systems and controls.",
      "Good candidate for a standalone playable demo."
    ],
    status:
      "Simple static project. Easiest to package as a quick playable demo.",
    deliverableSteps: [
      "Add save/load via local storage.",
      "Add in-game onboarding for controls.",
      "Create performance presets for lower-end devices."
    ]
  },
  {
    id: "dh-task-sorter-app",
    title: "task-sorter-app",
    owner: "Dima",
    repoUrl: "https://github.com/DH4410/task-sorter-app",
    localPath: "repos/DH4410__task-sorter-app",
    tech: ["Next.js", "TypeScript", "Tailwind", "shadcn/ui"],
    stage: "Advanced UI prototype",
    summary:
      "A Planly-style productivity app with calendar, routines, file upload analysis, and task scheduling.",
    details: [
      "App shell and view system are structured.",
      "Upload flow hits an API endpoint for assignment analysis.",
      "Rich component set with a solid design-system foundation."
    ],
    status:
      "Frontend is strong. Backend hardening and deployment wiring are next for production.",
    deliverableSteps: [
      "Build out /api/analyze with proper validation.",
      "Add a persisted auth/user model if multi-user is needed.",
      "Add end-to-end tests for the scheduling flow."
    ]
  },
  {
    id: "dh-isrlo-ibdp-subject",
    title: "ISRLO-IBDP-subject",
    owner: "Dima",
    repoUrl: "https://github.com/DH4410/ISRLO-IBDP-subject",
    localPath: "repos/DH4410__ISRLO-IBDP-subject",
    tech: ["HTML", "CSS", "Vanilla JS"],
    stage: "Static tool",
    summary:
      "An IB Diploma subject selector with clash detection, grouped subjects, and visual validation summaries.",
    details: [
      "Single-page static app with polished styling.",
      "Built for practical subject-combination planning.",
      "Ready for direct static hosting."
    ],
    status:
      "Close to deployable as a static utility.",
    deliverableSteps: [
      "Add export/share for chosen subject packages.",
      "Persist selections in local storage.",
      "Add keyboard navigation accessibility pass."
    ]
  },
  {
    id: "dh-sticky-notes-app",
    title: "sticky-notes-app",
    owner: "Dima",
    repoUrl: "https://github.com/DH4410/sticky-notes-app",
    localPath: "repos/DH4410__sticky-notes-app",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    stage: "Collaborative app prototype",
    summary:
      "A collaborative sticky notes board with color-coded notes, optional lock codes, and a styled board interface.",
    details: [
      "Server actions and DB table init hooks are in place.",
      "Board UI and note creation panel are fully styled.",
      "Needs a production DB and env setup to host publicly."
    ],
    status:
      "Feature-rich frontend with server-side dependencies that need deployment-ready data configuration.",
    deliverableSteps: [
      "Switch to a managed database provider for Vercel deployment.",
      "Add note ownership and auth boundaries.",
      "Add rate-limiting and content validation."
    ]
  },
  {
    id: "dh-studymaster",
    title: "studymaster",
    owner: "Dima",
    repoUrl: "https://github.com/DH4410/studymaster",
    localPath: "repos/DH4410__studymaster",
    tech: ["React", "Vite", "Tailwind"],
    stage: "Multi-page frontend",
    summary:
      "A study efficiency app frontend with pages for dashboard, practice, pricing, analytics, and a support chat widget.",
    details: [
      "Router skeleton and key pages are wired up.",
      "Visual and navigation structure are in place.",
      "Can be connected to real data integrations."
    ],
    status:
      "Solid frontend shell with a clear path to a full product.",
    deliverableSteps: [
      "Connect dashboards to real analytics/state.",
      "Add auth and account-level persistence.",
      "Profile the bundle and lazy-load heavier views."
    ]
  },
  {
    id: "dh-swapspot",
    title: "Swapspot",
    owner: "Dima",
    repoUrl: "https://github.com/DH4410/Swapspot",
    localPath: "repos/DH4410__Swapspot",
    tech: ["React", "TypeScript", "Vite", "Tailwind"],
    stage: "Playable game prototype",
    summary:
      "A memory/swap game with difficulty progression, rounds, lives, scoring, settings, and audio feedback.",
    details: [
      "Typed game state and round verification are in place.",
      "Includes dark mode and modal overlays.",
      "Code comments show iterative fixes and UI improvements."
    ],
    status:
      "Most complete game architecture in the repo. Good candidate for polishing into a standout demo.",
    deliverableSteps: [
      "Add session persistence and a leaderboard.",
      "Finalize balancing across higher difficulty tiers.",
      "Add touch-first controls and mobile QA."
    ]
  },
  {
    id: "dima-tab-sorter-pro",
    title: "Tab Sorter Pro",
    owner: "Dima",
    extUrl: "https://chromewebstore.google.com/detail/tab-sorter-pro/iicmneboehhnamjbbnfblejfgemgihnd",
    edgeUrl: "https://microsoftedge.microsoft.com/addons/detail/tab-sorter-pro/knijhblmdgkokapjnghamplmlpmiohpm",
    chromeUrl: "https://chromewebstore.google.com/detail/tab-sorter-pro/iicmneboehhnamjbbnfblejfgemgihnd",
    tech: ["Browser Extension", "TypeScript", "Chrome", "Edge"],
    stage: "Published & Live",
    summary:
      "A Chrome and Edge extension that sorts and groups your tabs automatically. One click to organize a full window.",
    details: [
      "Auto-sorts by domain and creates color-coded tab groups.",
      "One-click duplicate cleanup and inactive tab removal.",
      "Active users in Australia, Brazil, Canada, China, Czechia, France, Germany, Hong Kong SAR, Hungary, India, Indonesia, Japan, Korea, Malaysia, Netherlands, Philippines, Singapore, Sweden, Switzerland, United Kingdom, United States, and Vietnam.",
      "125+ total installs.",
      "Single codebase running on both Chrome and Edge via the WebExtensions API."
    ],
    highlights: {
      activeUsers: "64+",
      totalInstalls: "125+",
      countries: 22,
      countryList: "Australia, Brazil, Canada, China, Czechia, France, Germany, Hong Kong SAR, Hungary, India, Indonesia, Japan, Korea, Malaysia, Netherlands, Philippines, Singapore, Sweden, Switzerland, United Kingdom, United States, Vietnam"
    },
    status:
      "Live on the Chrome Web Store and Edge Add-ons with steady user growth.",
    features: [
      "Auto-Sort: Sorts tabs by domain and groups them in one click",
      "Tab Groups: Color-coded groups created automatically",
      "Duplicate Cleanup: Finds and closes duplicate tabs",
      "Tab Search: Search all open tabs by title or URL",
      "Keyboard Shortcuts: Sort without opening the popup",
      "Ungroup All: Flatten back to ungrouped tabs anytime"
    ]
  },
  {
    id: "pablo-focus-blocker",
    title: "Focus Blocker",
    owner: "Pablo",
    extUrl: "https://chromewebstore.google.com/detail/focus-blocker-dnr-redirec/dlbjkoeipepfliekbhiojgalkbdhhogi",
    edgeUrl: "https://microsoftedge.microsoft.com/addons/detail/focus-blocker-dnr-redire/blbdfgcopalolnckkhfbdnnfpmaillpl",
    chromeUrl: "https://chromewebstore.google.com/detail/focus-blocker-dnr-redirec/dlbjkoeipepfliekbhiojgalkbdhhogi",
    tech: ["Browser Extension", "Declarative Net Request", "Chrome", "Edge"],
    stage: "Published & Live",
    summary:
      "A Chrome and Edge extension that blocks distracting websites. Uses the DNR API - no background snooping, no data collection.",
    details: [
      "Blocks sites at the network level using Chrome and Edge's DNR API.",
      "Custom blocklist you control. Add any domain and it's blocked immediately.",
      "Focus mode toggle - switch blocking on or off from the popup.",
      "Users across 22 countries.",
      "No tracking, no telemetry, no account required."
    ],
    highlights: {
      downloads: "50+",
      installations: "113+",
      countries: 22,
      countryList: "Australia, Brazil, Canada, China, Czechia, France, Germany, Hong Kong SAR, Hungary, India, Indonesia, Japan, Korea, Malaysia, Netherlands, Philippines, Singapore, Sweden, Switzerland, United Kingdom, United States, Vietnam"
    },
    status:
      "Live on Chrome and Edge stores. Used daily across 22 countries.",
    features: [
      "DNR Blocking: Network-level blocking with zero lag",
      "Custom Blocklist: Add any domain you want blocked",
      "Focus Mode Toggle: Switch blocking on and off easily",
      "No Data Collection: Nothing leaves your device",
      "Lightweight: No persistent background processes",
      "Manifest V3: Built on the current extension standard"
    ]
  },
  {
    id: "dima-human-doc-typer",
    title: "HumanDocTyper",
    owner: "Dima",
    extUrl: "https://chromewebstore.google.com/detail/human-doc-typer/jnogomlcblccgnpnodfgeecahhpcfaod",
    chromeUrl: "https://chromewebstore.google.com/detail/human-doc-typer/jnogomlcblccgnpnodfgeecahhpcfaod",
    tech: ["Browser Extension", "Chrome", "Google Docs"],
    stage: "Published & Live",
    summary:
      "A Chrome extension that types text into Google Docs at a natural, human-like pace. Variable WPM, realistic pauses, and in-doc playback controls.",
    details: [
      "Set a WPM range and the extension samples keystroke timing from within that range.",
      "Paste from clipboard or load a saved snippet, then play it back.",
      "Start, pause, resume, and stop from a widget inside the Google Doc.",
      "Manifest V3 with no external network calls. Everything runs locally in the tab."
    ],
    highlights: {
      platform: "Chrome Web Store",
      target: "Google Docs",
      privacy: "100% local"
    },
    status:
      "Live on the Chrome Web Store.",
    features: [
      "Variable WPM: Set min/max typing speed for a natural range",
      "Pause Patterns: Realistic pauses at punctuation and between words",
      "Speed Presets: Calm, Normal, and Fast profiles built in",
      "In-Doc Controls: Start and stop from inside the Google Doc",
      "Clipboard Input: Paste from clipboard with one click",
      "Local Only: No telemetry, no external requests, no account"
    ]
  },
  {
    id: "zoande-stellarfronts",
    title: "StellarFronts",
    owner: "Pablo",
    repoUrl: "https://github.com/Zoande/stellarfronts",
    localPath: "repos/Zoande__stellarfronts",
    tech: ["React 19", "Vite", "BabylonJS 7", "WebSocket", "TypeScript", "SQLite"],
    stage: "Real-time multiplayer prototype",
    summary:
      "A browser-based real-time space strategy game with a split client/server setup: React+BabylonJS frontend, WebSocket game server, HTTP auth server, and an orchestrator that runs multiple game versions in parallel.",
    details: [
      "Full real-time loop: login, claim a country, explore the galaxy, expand with starbases and districts, manage economy and research.",
      "Three account tiers (player, observer, admin) with map visibility scoped to role and in-game admin debug commands.",
      "BabylonJS 7 with a procedural skybox, loaded GLB ships and starbases, and HUD-style overlays.",
      "Auth server uses HttpOnly session cookies and PBKDF2-hashed passwords backed by SQLite.",
      "Game state persists per-game to JSON on a dirty-write timer. The orchestrator runs each game version as its own isolated server process so live games stay pinned to the code they started on.",
      "Built around logistics, expansion, economy, research, and market trading - not direct combat."
    ],
    status:
      "In active development. Local stack runs end-to-end with one command. Systems and balance are still a work in progress.",
    deliverableSteps: [
      "Wire up Google/Microsoft OAuth (endpoints stubbed but return 501).",
      "Balancing pass on economy, research, and market trading.",
      "Public hosted demo via the orchestrator gateway."
    ]
  }
];
