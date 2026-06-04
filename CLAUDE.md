@AGENTS.md

# CLAUDE.md

This file provides guidance for Claude Code when working in this repository.

## Working Style

Before implementing:

1. Inspect existing files.
2. Explain the approach briefly.
3. Prefer editing existing files over creating new files.
4. Keep changes scoped.

After changes:

- Run TypeScript validation:
  `npx tsc --noEmit`
- Ensure the app still runs:
  `npm run dev`

Do not:

- Create memory/, notes/, or AI artifact folders
- Add dependencies unless justified
- Convert server components into client components unnecessarily
- Rewrite architecture without request

## Debugging

If Next.js/Turbopack behaves unexpectedly:

```bash
rm -rf .next
npm run dev
```

If dependency state seems corrupted:

```bash
rm -rf node_modules package-lock.json
npm install
```

## Portfolio Intent

Optimize for this impression:

"This person can build production-ready full-stack apps."

Favor:

- clarity
- maintainability
- accessibility
- performance

Avoid:

- gimmicks
- excessive animations
- unnecessary abstractions
