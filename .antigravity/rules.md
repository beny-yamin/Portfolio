# SYSTEM CONSTRAINTS, CODING STANDARDS & AGENT DIRECTIVES (IMMERSIVE PORTFOLIO)

## 1. Environment & Technology Stack
- Node.js Runtime: Node 20+ with ES Module resolution (`"type": "module"` in `package.json`)
- Client Stack: React 18+, Vite, TypeScript, Tailwind CSS, Lucide React
- 3D, Shaders & Spatial Motion: `three`, `@types/three`, `framer-motion` (spring physics, drawers), `lenis` (smooth inertia scrolling)
- Local Fallback Layer: Typed local data (`client/src/data/fallbackData.ts`) so the frontend renders at 100% fidelity before backend APIs are connected
- Server Stack (Phase 2 Build): Express 4, TypeScript, `tsx watch` (dev), Helmet, CORS, `express-rate-limit`, `express-validator`, `dotenv`
- Authentication (Owner CMS Only): Firebase Authentication (Client SDK) + Firebase Admin SDK (Server token verification)
- Database & ORM (Phase 2 Build): MongoDB Atlas with Mongoose 8+
- Deployment Target: Render (Static Site for `/client`, Web Service for `/server`)

## 2. Structural & Architectural Boundaries
- Frontend-First Execution Rule: Complete all 5 scroll sections (`Home`, `About`, `Projects`, `Vision`, `Contact`), 3D elements, cursor ribbon trail, horizontal auto-drifting project carousel, rotary wheel scrubber, and sound toggle using local fallback data BEFORE writing any `/server` code.
- Absolute Isolation: Never import server-side packages (`mongoose`, `firebase-admin`, `express`) into `/client`.
- Zero Direct Database Access: Client code must NEVER connect directly to MongoDB Atlas. All persistence calls route through Express REST endpoints (`/api/*`).
- Secret Hygiene: Never commit `.env` or write credentials into client bundles. Client accesses exclusively `import.meta.env.VITE_*` keys; server accesses `process.env.*`.

## 3. Non-Negotiable Visual, Spatial & Interactive Standards
- **Creative Direction ("Submerged Horizon" + Spatial 3D):**
  * Palette: Deep-space obsidian (`#05080F`), refractive frosted glass (`bg-white/[0.03] backdrop-blur-xl border-white/10`), bioluminescent cyan (`#38BDF8`), and warm amber (`#F59E0B`).
  * Typography: *Syne* or *Plus Jakarta Sans* (display headings), *Inter* (narrative copy), *JetBrains Mono* (technical metadata, live Addis Ababa clock, stack tags).
- **Minimal Floating Header (Strict Layout):**
  * Top-Left: A small, continuously rotating 3D/geometric astrolabe emblem (clean visual motion, no text clutter).
  * Top-Center: Floating glass pill containing exact items: `Home`, `About`, `Projects`, `Vision`. Hovering any item triggers a kinetic **right-to-left then left-to-right character flip-flop scramble animation** before snapping crisply back to the word.
  * Top-Right: Magnetic `Contact` glass button that glides smoothly to `#contact`.
- **Living Background & Luminous Cursor Ribbon:**
  * Full-viewport animated dark cosmic/liquid shader background (never a flat solid color) that evolves subtly with scroll depth.
  * Smooth, tapering **luminous ribbon/line trail** (`CursorTrailCanvas.tsx`) follows pointer movement across the screen like drawing with light in mid-air, fading organically.
- **Hero Composition (`#home`):**
  * Upper-right reserved portrait frame (`PortraitGlassFrame.tsx`, positioned below the top-right nav) showcasing Biniyam's photography, backed by an organic, morphing **blackish-blue breathing fluid cloud/orb** (`FluidCloudOrb.tsx`).
  * Bright, adventurous, stylized **3D rotating Earth globe** (`AdventurousGlobe.tsx`) rendered in Three.js with glowing atmospheric rim light, illuminated landmasses/meridian arcs, and orbital rings—rotating continuously (never a flat 2D map).
- **Horizontal Auto-Drifting Projects & Rotary Wheel Scrubber (`#projects`):**
  * Projects sit inside an **auto-gliding horizontal track** moving smoothly on its own without vertical scrolling. Moving the cursor left or right dynamically steers and accelerates/reverses the horizontal drift; hovering a card slows drift for clicking.
  * Hovering a project card shifts its glass surface tint warmly/emotionally and triggers an **animated luminous border trace** racing continuously around the card's perimeter like a runner completing a lap.
  * At the bottom center of `#projects` sits an interactive **rotary wheel / windlass crank scrubber** (`RotaryWheelScrubber.tsx`)—dragging, hovering, or scrolling over the wheel rotates its spokes smoothly and winds the horizontal project track left or right.
- **Bottom-Right Ambient Sound Toggle:**
  * Fixed bottom-right glass pill (`Sound On / Off`) with animated wave bars controlling background ambient sound with smooth fade-in/fade-out.
- **Performance & Mobile Ergonomics:**
  * Component Line-Count Budget: Target under 140 lines per `.tsx` component.
  * 60fps GPU Rule: Clamp delta-time (`Math.min(dt, 0.05)`), pause loops on `document.hidden`, and respect `prefers-reduced-motion`.
  * Minimum `44x44px` tap targets; touch-drag support on both the horizontal project track and rotary wheel scrubber.

## 4. Backend Implementation Standards (Phase 2)
- Security Enforcement: `GET /api/portfolio` and `POST /api/contact` are public (`POST /api/contact` enforces rate limiting and `express-validator`). All mutating routes (`POST/PATCH/DELETE /api/projects`, `PATCH /api/profile`, `GET /api/messages`) must pass through `requireOwnerAuth`.
- Defensive Payload Validation: Use `express-validator` to sanitize strings, validate email syntax, and enforce max character lengths.

## 5. Antigravity Agent Behavioral Directives (Autonomous Guardrails)
1. PLAN-FIRST PROTOCOL: For every feature prompt, output an Implementation Plan artifact first detailing file paths, exported types, and shader/API contracts. Do NOT write code until authorized.
2. STEPWISE WRITING: Create or edit a maximum of 2 files per execution turn (up to 3 only for small type/data definitions).
3. NO PLACEHOLDERS: Output complete, production-ready code. Never write `// ... existing code`, `// TODO`, or `/* insert handlers here */`.
4. GIT CHECKPOINTING: Verify `npx tsc --noEmit` and `npm run build` pass before marking any milestone complete.
5. ERROR RECOVERY: If a compilation or runtime error occurs, output the exact error message and provide a single-file diff repair. Do not attempt multi-file rewrites.