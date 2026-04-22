# Vinay G — Developer Portfolio

A stunning 3D interactive developer portfolio built with React, Three.js, and Framer Motion. Features a live particle field, custom cursor, scroll-triggered animations, and a fully responsive dark UI.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-00D4FF?style=for-the-badge&logo=vercel&logoColor=white)](https://your-live-url.vercel.app)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Three.js](https://img.shields.io/badge/Three.js-0.164-black?style=for-the-badge&logo=threedotjs&logoColor=white)](https://threejs.org)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion)

---

## Features

- **3D Particle Field** — 2,800-particle Three.js scene in the hero with dual-color wave animation and mouse-driven camera parallax
- **Typewriter Hero** — cycles through four roles with a custom hook (no library dependency)
- **Custom Glowing Cursor** — single electric-blue dot that tracks mouse position via `requestAnimationFrame`
- **Animated Loading Screen** — VG logo with spinning rings and a stepped progress bar before the site reveals
- **Scroll-triggered Animations** — every section fades and slides in via Framer Motion `whileInView`
- **Lenis Smooth Scroll** — lazy-initialized after the loading screen, connected to native RAF loop
- **Photo Portrait** — three concentric animated rings (rotating, pulsing, counter-rotating) around the profile photo with floating and edge vignette
- **3D Tilt Project Cards** — CSS perspective tilt on mouse move, gradient glow border on hover, pulsing "In Progress" badge
- **Orbital Skills Rig** — 10 skills in two counter-rotating concentric rings, plus grouped animated skill bars with shimmer
- **Glassmorphism Certificate Card** — animated verified badge, backdrop blur, gradient top bar
- **Contact Form** — floating labels, opens mail client on submit, per-brand social link glow
- **Grain Overlay** — SVG `feTurbulence` noise texture at 3.5% opacity for depth
- **Mobile Responsive** — single-column layout, hamburger nav, photo stacks above text on small screens
- **`prefers-reduced-motion` safe** — all animations disabled via CSS media query

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript 5 |
| Build tool | Vite 5 |
| Styling | Tailwind CSS 3 |
| 3D Graphics | Three.js 0.164 |
| Animations | Framer Motion 11 |
| Scroll | Lenis 1.1 |
| Scroll FX | GSAP 3 (available, used via ScrollTrigger API) |

---

## Local Setup

**Prerequisites:** Node.js 18+

```bash
# 1. Clone the repo
git clone https://github.com/VinayG759/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Add your photo
# Place your photo at:
src/assets/vinay.jpg

# 4. Start the dev server
npm run dev
```

The site opens at `http://localhost:5173` (or the next available port).

```bash
# Production build
npm run build

# Preview the production build locally
npm run preview
```

---

## Folder Structure

```
MyPortfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── vinay.jpg           # Profile photo (add manually)
│   ├── components/
│   │   ├── CustomCursor.tsx    # Glowing dot cursor
│   │   ├── GrainOverlay.tsx    # SVG noise texture
│   │   ├── LoadingScreen.tsx   # Animated intro screen
│   │   └── Navbar.tsx          # Fixed nav with active-link indicator
│   ├── data/
│   │   ├── projects.ts         # Project cards data
│   │   └── skills.ts           # Skill groups + orbit ring data
│   ├── hooks/
│   │   ├── useMousePosition.ts # Ref-based mouse tracker
│   │   └── useTypewriter.ts    # Typewriter effect (no library)
│   ├── sections/
│   │   ├── Hero.tsx            # Full-screen particle hero
│   │   ├── About.tsx           # Bio + animated photo portrait
│   │   ├── Projects.tsx        # Tilt cards grid
│   │   ├── Skills.tsx          # Orbit rig + skill bars
│   │   ├── Certificates.tsx    # Glassmorphism cert card
│   │   └── Contact.tsx         # Form + socials
│   ├── three/
│   │   ├── ParticleField.tsx   # Three.js particle system (hero)
│   │   └── FloatingShape.tsx   # Three.js torus-knot shape (unused after photo)
│   ├── App.tsx                 # Root — loading screen, Lenis init, section order
│   ├── index.css               # Tailwind directives + global utilities
│   ├── main.tsx                # React DOM entry
│   └── vite-env.d.ts           # Asset type declarations
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## Customisation

- **Colors** — edit the `colors` block in `tailwind.config.js` (`navy`, `teal`, `electric`)
- **Projects** — edit `src/data/projects.ts`; each entry maps to one card
- **Skills** — edit `src/data/skills.ts`; `skillGroups` drives the bars, the inline array in `Skills.tsx` drives the orbit ring
- **Resume** — drop `resume.pdf` into `/public/` and the "Download Resume" button will serve it automatically

---

## Credits

- Design inspiration — [Bruno Simon](https://bruno-simon.com), [Brittany Chiang](https://brittanychiang.com), [Saurabh Daware](https://www.saurabhdaware.in)
- 3D rendering — [Three.js](https://threejs.org)
- Animation — [Framer Motion](https://www.framer.com/motion), [GSAP](https://greensock.com/gsap)
- Smooth scroll — [Lenis](https://github.com/darkroomengineering/lenis) by Darkroom Engineering
- Icons & badges — [Shields.io](https://shields.io)

---

Built by **Vinay G** · [GitHub](https://github.com/VinayG759) · [LinkedIn](https://www.linkedin.com/in/-vinay-gowda/)
