# SPEC-DRIVEN ARCHITECTURE (IMMERSIVE PERSONAL PORTFOLIO)

## 1. Narrative & Interactive Architecture (Humanistic & Real)
The portfolio is a single continuous vertical scroll experience (`Lenis` smooth inertia scrolling) unified by a persistent living 3D/WebGL atmosphere. Top navigation jumps smoothly to any section:
**`Home` → `About` → `Projects` → `Vision` → `Contact`**

### Global Persistent Layers (Mounted in `App.tsx`)
1. `LivingSpaceBackdrop.tsx`: Fixed full-screen (`z-index: -2`) animated deep-obsidian cosmic & liquid-caustic shader field (never static).
2. `CursorTrailCanvas.tsx`: Fixed pointer-tracking canvas (`z-index: 40`, `pointer-events: none`) rendering a silky, tapering luminous ribbon line that trails pointer movement smoothly and dissipates naturally.
3. `FloatingHeader.tsx`:
   - **Left:** `RotatingOrbEmblem.tsx` — Small, continuously rotating intricate 3D/SVG geometric astrolabe/ring in the top-left corner (no text clutter).
   - **Center:** `ScrambleNavPill.tsx` — Glass pill housing `Home`, `About`, `Projects`, `Vision`. Pointer enter triggers `useTextFlipFlop` (rapid character scramble sweeping right-to-left then left-to-right before locking back into the label).
   - **Right:** `Contact` magnetic glass CTA jumping to `#contact`.
4. `AmbientSoundToggle.tsx`: Fixed bottom-right (`bottom-6 right-6`, `z-index: 50`) glass pill toggling ambient background music on/off with smooth volume ramping and animated wave bars.

---

### Section 1: `Home` (`#home` — Multi-Beat Human Arrival)
Spans ~2.2 viewport heights of fluid scroll choreography so visitors feel a genuine sense of presence before entering `About`:
- **Beat 1 — The Personal Welcome (Viewport 1):**
  * **Left/Center Editorial:** Warm, authentic introduction to **Biniyam Kibru Heramo**—a university student and self-taught software builder in Addis Ababa, Ethiopia, who cares deeply about building meaningful, well-crafted software. Includes subtle live Addis Ababa time and availability status.
  * **Upper-Right Portrait Zone:** `PortraitGlassFrame.tsx` (positioned below the top-right nav) displaying Biniyam's portrait photography with subtle pointer tilt, floating directly over `FluidCloudOrb.tsx` (the organic morphing blackish-blue breathing fluid cloud).
  * **3D Rotating Earth Globe (`AdventurousGlobe.tsx`):** Bright, stylized, non-stop rotating 3D Earth globe in Three.js with glowing atmospheric rim light, illuminated landmasses/meridian arcs, and orbital rings—evoking curiosity, exploration, and global ambition.
- **Beat 2 — The Human Voice / Scroll-Reveal Lines (Viewport 2):**
  * As the visitor scrolls gently through the lower half of `Home`, plainspoken, heartfelt statements illuminate line-by-line against the moving 3D backdrop—expressing why Biniyam loves turning raw ideas into living interfaces, his belief in patience and daily discipline, and what he hopes his work means to people.

### Section 2: `About` (`#about` — Real Story, Inner Drive & Craft)
A rich, multi-layered narrative section designed to feel like an honest conversation rather than a corporate resume:
1. **Layer 1 — My Story & Where I Come From:**
   * Authentic narrative covering Biniyam's journey in Addis Ababa: teaching himself full-stack web development out of pure curiosity, building early tools from scratch, completing Grade 12 and the *5 Million Ethiopian Coders* certification, and entering university to deepen his Computer Science foundations.
2. **Layer 2 — What Is Inside Me (Values & Daily Discipline):**
   * Humanistic glass cards reflecting Biniyam's character:
     * *Curiosity & First-Principles Thinking:* Understanding how things actually work beneath the surface rather than taking shortcuts.
     * *Quiet Discipline & Composure:* Grounded in Stoic philosophy and endurance mindset—showing up consistently, staying calm under pressure, and finishing what he starts.
     * *Empathy for the User:* Building software that feels intuitive, fast, and respectful of the person using it.
3. **Layer 3 — How I Build (Interactive Craft Explorer):**
   * Clean, conversational tabs (`Crafting Interfaces`, `Backend & Real-Time`, `Data & Cloud`) showing the tools Biniyam works with every day (React, TypeScript, Tailwind CSS, Three.js, Node.js, Express, MongoDB, Firebase, Git, Render) and the real products he built with them.
4. **Layer 4 — Moments Along the Way (Human Journey Timeline):**
   * A scroll-lit vertical thread highlighting real milestones—from his very first web project and database builds to shipping full-stack PWAs and starting university.

### Section 3: `Projects` (`#projects` — Auto-Gliding Horizontal Showcase & Wheel Scrubber)
- **Horizontal Auto-Drifting Track (`HorizontalProjectMarquee.tsx`):**
  * Displays projects in a horizontal row that glides automatically on its own without vertical scrolling. Moving the cursor left or right steers and accelerates/reverses the horizontal drift hands-free; hovering a card slows drift for clicking.
- **Interactive Project Cards (`ProjectShowcaseCard.tsx`):**
  * **Emotional Surface Shift:** Hovering warms and shifts the card's glass tint emotionally.
  * **Lap-Runner Animated Border:** On hover, a luminous line races continuously around the card's rounded border like a runner completing a lap.
  * Actions: **Live Preview** (deployed Render link) & **Explore Project** (opens `ProjectDetailDrawer.tsx` with story, architecture, and interactive mini-demo).
- **Rotary Wheel / Windlass Scrubber (`RotaryWheelScrubber.tsx`):**
  * Located at the bottom center of `#projects`: an interactive circular wheel that rotates smoothly when dragged, hovered, or scrolled—winding the horizontal project track left or right.

### Section 4: `Vision` (`#vision` — Where I Am Going & Open Doors)
- Communicates honest future direction without hype:
  1. **Today (University & Deepening Foundations):** Growing stronger in Computer Science, algorithms, and software architecture.
  2. **Tomorrow (AI & Agriculture):** Combining software engineering with Artificial Intelligence to build practical, life-improving tools for agriculture and real-world infrastructure.
  3. **Opportunities I Welcome:** Clear, approachable cards for *Software Engineering Internships*, *Startup Co-Building*, *Research & AI Collaborations*, and *Meaningful Product Builds*.

### Section 5: `Contact` (`#contact` — Warm, Frictionless Connection)
- Inviting closing section with one-tap links and one-click clipboard copy (`CopyPill.tsx`) for:
  * **Email / Google:** `biniyamkibruheramo@gmail.com`
  * **GitHub:** `github.com/biniyamkibruheramo-boop`
  * **LinkedIn**
  * **Telegram**
  * **Phone**
- Simple, friendly 3-field message box (*Your Name, Your Email, What would you like to talk about or build together?*).

---

## 2. Data Models (Mongoose & TypeScript Schemas)

### Project Schema (`Project`)
- `_id`: String / ObjectId
- `title`: String
- `tagline`: String
- `description`: String
- `category`: String (`'Full-Stack Systems' | 'PWAs & Productivity' | 'AI & Civic Tech'`)
- `accentColor`: String (`'cyan' | 'amber' | 'emerald' | 'violet'`)
- `orderIndex`: Number
- `techStack`: String[]
- `highlights`: String[]
- `previewType`: String (`'cafeteria-demo' | 'expense-chart' | 'habit-grid' | 'markdown-live' | 'static-gallery'`)
- `thumbnailUrl`: String
- `liveUrl`: String
- `githubUrl`: String
- `metrics`: Array of `{ label: string, value: string }`

### ProfileConfig Schema (`ProfileConfig` — Singleton Document)
- `_id`: ObjectId
- `fullName`: String (`"Biniyam Kibru Heramo"`)
- `portraitUrl`: String (`"/images/biniyam-portrait.jpg"`)
- `headline`: String
- `subheadline`: String
- `scrollManifestoLines`: String[] (Humanistic lines revealed during Home Beat 2)
- `aboutStory`: String[] (Multi-paragraph personal story for About Layer 1)
- `innerValues`: Array of `{ title: string, description: string }`
- `journeyMilestones`: Array of `{ year: string, title: string, story: string }`
- `location`: String (`"Addis Ababa, Ethiopia"`)
- `timezone`: String (`"Africa/Addis_Ababa"`)
- `availabilityStatus`: String
- `visionPillars`: Array of `{ phase: string, title: string, description: string }`
- `opportunities`: Array of `{ title: string, description: string, active: boolean }`
- `socials`: `{ github: string, linkedin: string, telegram: string, email: string, phone: string }`
- `updatedAt`: Date / ISO string

### ContactMessage Schema (`ContactMessage`)
- `_id`: ObjectId
- `senderName`: String
- `senderEmail`: String
- `opportunityType`: String
- `message`: String
- `isRead`: Boolean (Default: `false`)
- `createdAt`: Date / ISO string

---

## 3. API Contracts (Phase 2 Backend)
1. `GET /api/portfolio` (Public) $\rightarrow$ `{ profile: ProfileConfig, projects: Project[] }`
2. `POST /api/contact` (Public, Rate-Limited) $\rightarrow$ `{ success: true, messageId: string }`
3. `POST /api/projects` (Owner Only) $\rightarrow$ `{ success: true, project: Project }`
4. `PATCH /api/projects/:id` (Owner Only) $\rightarrow$ `{ success: true, project: Project }`
5. `DELETE /api/projects/:id` (Owner Only) $\rightarrow$ `{ success: true }`
6. `PATCH /api/profile` (Owner Only) $\rightarrow$ `{ success: true, profile: ProfileConfig }`
7. `GET /api/messages` (Owner Only) $\rightarrow$ `{ messages: ContactMessage[] }`

---

## 4. Step-by-Step Implementation Sequence (Frontend-First)

### Phase 1: Design System, Living Backdrop, Cursor Ribbon, Header & Audio
- Step 1.1: `client/tailwind.config.js` & `client/index.html` (Obsidian/cyan/amber palette, fonts *Syne*, *Inter*, *JetBrains Mono*, lap-runner border keyframes)
- Step 1.2: `client/src/types/portfolio.ts` & `client/src/data/fallbackData.ts` (Warm, authentic copy for Biniyam's Home lines, About story, inner values, milestones, vision, opportunities, and flagship projects)
- Step 1.3: `client/src/components/canvas/LivingSpaceBackdrop.tsx` & `CursorTrailCanvas.tsx` (Animated dark cosmic/liquid background + glowing cursor ribbon trail)
- Step 1.4: `client/src/hooks/useTextFlipFlop.ts` & `client/src/components/layout/FloatingHeader.tsx` (Top-left rotating emblem, center flip-flop nav `Home | About | Projects | Vision`, top-right `Contact`)
- Step 1.5: `client/src/lib/ambientAudio.ts`, `client/src/components/ui/AmbientSoundToggle.tsx` (bottom-right Sound On/Off), & `SmoothScrollProvider.tsx` (`Lenis`)

### Phase 2: Multi-Beat Hero & Deep Humanistic About Section
- Step 2.1: `client/src/components/canvas/FluidCloudOrb.tsx` & `AdventurousGlobe.tsx` (Morphing blackish-blue fluid cloud + continuous bright 3D rotating Earth globe)
- Step 2.2: `client/src/sections/HeroSection.tsx` (Beat 1 personal arrival + upper-right portrait frame backed by fluid cloud + 3D globe + Beat 2 scroll-reveal human manifesto lines)
- Step 2.3: `client/src/sections/AboutSection.tsx` (4-layer human narrative: personal origin story, inner values/discipline cards, interactive craft explorer, and milestone timeline)

### Phase 3: Auto-Gliding Projects, Runner Borders, Rotary Wheel & Drawer
- Step 3.1: `client/src/components/project/ProjectShowcaseCard.tsx` (Emotional hover surface shift + lap-runner animated border)
- Step 3.2: `client/src/components/project/RotaryWheelScrubber.tsx` (Interactive rotating windlass/wheel controller)
- Step 3.3: `client/src/sections/ProjectsSection.tsx`, `ProjectDetailDrawer.tsx`, & `InteractiveDemoSandbox.tsx` (Auto-gliding horizontal track with cursor-velocity steering + wheel coupling + slide-over drawer with live mini-demos)

### Phase 4: Vision, Contact & API Hydration
- Step 4.1: `client/src/sections/VisionSection.tsx` (Honest trajectory arc + AI-in-agriculture vision + Open Opportunities)
- Step 4.2: `client/src/sections/ContactSection.tsx` & `CopyPill.tsx` (GitHub, LinkedIn, Telegram, Email, Phone + friendly message form)
- Step 4.3: `client/src/lib/api.ts` & `client/src/hooks/usePortfolioData.ts` (Fetches `/api/portfolio` with seamless fallback to `fallbackData.ts`)

### Phase 5: Backend API, Owner CMS & Render Deployment
- Step 5.1: `server/src/config/db.ts`, `middleware/requireOwnerAuth.ts`, and Mongoose models (`Project`, `ProfileConfig`, `ContactMessage`)
- Step 5.2: Express routes (`/api/portfolio`, `/api/contact`, `/api/projects`, `/api/profile`, `/api/messages`), `seedPortfolio.ts`, and `render.yaml` deployment config.