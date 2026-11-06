# Nawab Shaikh — Portfolio

This is my portfolio site. I built it with **Next.js**, **TypeScript**, and **Tailwind CSS** to show the projects I’ve worked on and how I approach building software.

I usually start by looking for a problem I can fix. The project pages describe what I built and link to the source or demo where available. Work in progress is labeled as such.

## Projects

- **[RigSmith](https://github.com/NARS77/RigSmith)** — A PC builder with component compatibility checks and an interactive SVG view. [Demo](https://rigsmith20.vercel.app/)
- **[SentimentSphere](https://github.com/NARS77/SentimentSphere)** — A Django app for analyzing customer feedback with TextBlob and the OpenAI API.
- **[SkillSphere](https://github.com/NARS77/SkillsSphere)** — A learning platform project, currently in development.
- **EchoTrace** — A meeting transcription and notes prototype.

I also include my experience at Cruxx AI and links to my résumé and contact details.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: TypeScript 5.7 (Strict Mode)
- **Styling**: Tailwind CSS 3.4 (Custom semantic tokens)
- **Page metadata**: OpenGraph, `robots.ts`, and `sitemap.ts`
- **Documents**: Résumé and Cruxx AI internship letter in `public/`

---

## 💻 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Compile optimized production build
npm run build

# 4. Run production server
npm run start
```

---

## 🌐 Deployment Instructions

### Vercel (Recommended)
1. Push this repository to GitHub (`NARS77/Nawab_portfolio5x`).
2. Import the project into [Vercel](https://vercel.com).
3. Framework Preset: **Next.js**.
4. Deploy! (Static pages and dynamic routes pre-render automatically).

### Docker / Standalone Container
```bash
docker build -t nawab-portfolio .
docker run -p 3000:3000 nawab-portfolio
```

---

## 📬 Contact Information

- **Name**: Nawab Shaikh (Nawab Rahim Shaikh)
- **Email**: `nawabshaikh1014@gmail.com`
- **Phone**: `+91 7620436307`
- **Location**: Mira Road, Maharashtra, India (Open to relocation & remote roles)
- **GitHub**: [github.com/NARS77](https://github.com/NARS77)
- **LinkedIn**: [linkedin.com/in/nars77](https://linkedin.com/in/nars77)

## Current experience and updates

Meatndoor: AI Engineer & Full-Stack AI Developer, about six months as of November 2026. Contributions include the iOS and Android app, dashboard work, and generative product images. These are separate from the personal projects shown here.

Edit `content/current.ts` to update the current-role section. Project progress and build notes live in `content/projectNotes.ts`. The RigSmith walkthrough links to a fixed source revision; its interactive example implements only the socket rule.

## Checks

Run `npm run check` for TypeScript and behavior tests, then `npm run build`. The GitHub workflow performs those steps on pushes and pull requests. Tests use fake credentials and mocked storage; they do not contact production email or Redis services.

## Local preview

Run `npm run preview:local` if the original folder path causes bundler errors. It synchronizes the current source into `/tmp/nawab_portfolio_preview`, copies `.env.local` locally with restricted permissions, installs dependencies when the lockfile changes, and starts port 3001. Stop the existing preview first. Rerun this command after editing the original source; the temporary directory is a snapshot, not the source of truth.

Use `npm run check:local` to run tests and a production build from a clean path without loading `.env.local`. This is useful when the original folder name contains `?`, which also affects the TypeScript test loader.

Next.js stays on version 15. The package override updates its nested PostCSS dependency within version 8 to address dependency advisories; review it when upgrading Next.js.
