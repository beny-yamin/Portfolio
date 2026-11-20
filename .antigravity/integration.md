# THIRD-PARTY INTEGRATION DIRECTIVES (IMMERSIVE PERSONAL PORTFOLIO)

## 1. Ambient Background Audio & Browser Autoplay Compliance
- Purpose: Provide a calm, atmospheric background soundscape controlled by the fixed bottom-right `Sound On / Off` toggle.
- Implementation:
  * Load an optimized ambient loop track from `client/public/audio/ambient-horizon.mp3` paired with a built-in Web Audio API harmonic synthesizer fallback (`client/src/lib/ambientAudio.ts`) so sound works immediately even before an external audio file is added.
  * Because browsers block unmuted autoplay before user interaction, initialize audio cleanly when the visitor clicks the bottom-right `Sound On` pill, applying a smooth 1.2-second volume fade-in/fade-out.

## 2. Direct Contact & Social Deep-Linking
- Purpose: Enable visitors, recruiters, and founders to connect effortlessly across every channel without friction.
- Configured Channels:
  * **GitHub:** `https://github.com/biniyamkibruheramo-boop`
  * **LinkedIn:** Configured via `ProfileConfig.socials.linkedin`
  * **Telegram:** Direct deep-link (`https://t.me/<username>`) for instant mobile/desktop messaging
  * **Email / Google Account:** `mailto:biniyamkibruheramo@gmail.com` paired with one-click clipboard copy (`CopyPill`)
  * **Phone:** `tel:+251...` paired with one-click clipboard copy and formatted display
- Rule: Every contact node must offer **both** a direct protocol launch (`mailto:`, `tel:`, `https://`) and a one-click clipboard copy action with toast confirmation.

## 3. Portrait Photography Integration
- Asset Path: `client/public/images/biniyam-portrait.jpg`
- Rendering Rule: Display inside `PortraitGlassFrame.tsx` in the upper-right zone of the Hero section (below the top navigation), layered directly in front of the organic morphing blackish-blue `FluidCloudOrb` shader with soft refractive edge blending and zero distorting beauty filters.

## 4. Firebase Authentication (Phase 2 Owner CMS Protection Only)
- Purpose: Secure login for Biniyam (`biniyamkibruheramo@gmail.com`) to access the hidden `/admin` Owner Studio to manage projects, update vision/opportunities, or read visitor messages.
- Client SDK: `client/src/config/firebase.ts` manages admin authentication state.
- Server Verification: `server/src/middleware/requireOwnerAuth.ts` verifies incoming Bearer tokens (`req.headers.authorization`) using Firebase Admin SDK and enforces `decodedToken.email === process.env.OWNER_EMAIL`.
- Rule: **Public visitors require zero authentication or login**. All portfolio browsing, 3D interactions, project sandboxes, and contact submissions are 100% open.

## 5. MongoDB Atlas & Mongoose (Phase 2 Backend)
- Purpose: Cloud document persistence for dynamic project case studies (`Project`), singleton profile/vision data (`ProfileConfig`), and incoming inquiries (`ContactMessage`).
- Connection: Managed in `server/src/config/db.ts` using `mongoose.connect(process.env.MONGODB_URI)`.
- Resilience Rule: Because Render free-tier web services sleep after inactivity, the client renders immediately from `client/src/data/fallbackData.ts` and silently hydrates updates when `/api/portfolio` responds.

## 6. Environment Variable Enforcement
- Server (`server/.env`):
  - `MONGODB_URI=mongodb+srv://...`
  - `PORT=5000`
  - `CLIENT_ORIGIN=http://localhost:5177`
  - `OWNER_EMAIL=biniyamkibruheramo@gmail.com`
  - `FIREBASE_PROJECT_ID=...`
  - `FIREBASE_CLIENT_EMAIL=...`
  - `FIREBASE_PRIVATE_KEY=...`
- Client (`client/.env`):
  - `VITE_API_BASE_URL=http://localhost:5000/api`
  - `VITE_FIREBASE_API_KEY=...`
  - `VITE_FIREBASE_AUTH_DOMAIN=...`
  - `VITE_FIREBASE_PROJECT_ID=...`
- Rule: NEVER commit production `.env` files or private keys to Git. Always utilize `.env.example` templates.