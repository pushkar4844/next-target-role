# next-target-role

Action plans for two career moves, in order:

1. **Google Cloud: Cloud Architect** (Customer Engineer II, Platform)
2. **NVIDIA: Solutions Architect** (NVIDIA Cloud Partners)

Live site: https://pushkar4844.github.io/next-target-role/

Each plan has one target role, the gaps to close, a week-by-week checklist (progress saved in your browser), exact resume edits, messages to send and interview questions.

## Stack

[Astro](https://astro.build) static site: zero client framework, CSS inlined, one small inline script for the checklist. Pushes to `main` deploy to GitHub Pages through `.github/workflows/deploy.yml`.

```bash
npm install
npm run dev      # http://localhost:4321/next-target-role/
npm run build    # outputs dist/
```

Content lives in `src/pages/` (`index.astro`, `google.astro`, `nvidia.astro`).
