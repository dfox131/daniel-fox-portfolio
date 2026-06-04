<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# Project Overview

Daniel Fox personal portfolio website.

Primary goal:
Someone should leave after 30 seconds thinking:
"This person can build production-ready full-stack apps."

Audience priority:
1. Hiring Managers
2. Recruiters
3. Startup founders
4. Engineers

---

# Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion (minimal usage)
- **Deployment:** Vercel

---

# Architecture Rules

- Prefer Server Components
- Keep client components minimal
- Use data-driven content
- Keep project content in `src/data/`
- Reusable UI primitives belong in `src/components/ui/`
- Page sections belong in `src/components/sections/`
- Avoid unnecessary abstractions
- Avoid introducing state unless required

---

# Design Principles

Visual direction: Clean + Professional with subtle desktop/window inspiration.

**Do:**
- Green accent
- Smooth transitions
- Responsive layouts
- Consistent spacing
- Accessibility-first

**Do NOT:**
- Build a fake operating system
- Add boot animations
- Add sound effects
- Add excessive motion
- Add complex drag systems
- Add decorative features without value

---

# Content Rules

Projects must prioritize:
1. KneeVision
2. AI-Powered Job Application Tracker
3. Macro Tracker Mobile App

Resume:
- Served from `/public/resume.pdf`
- Embedded viewer + download

Contact:
- Email
- GitHub
- LinkedIn
- No contact backend

---

# Performance Rules

- Favor static rendering
- Minimize client-side JavaScript
- Avoid large dependencies
- Preserve SEO
- Optimize images

---

# Workflow Rules

Before major changes:
1. Explain approach
2. Keep changes scoped
3. Run TypeScript validation
4. Preserve existing architecture

Never create `memory/`, `notes/`, or AI artifact directories.

Do not store project state outside the repository structure.
