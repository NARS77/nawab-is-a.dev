# Nawab Shaikh — Portfolio Website

> **Full-Stack & AI-Integration Engineer**  
> *Django · Python · OpenAI/Gemini · Celery · Redis · Docker · AWS · React*

A high-performance personal portfolio engineered specifically to present ~5 years of software engineering progression, production LLM integration, distributed worker architectures, and cloud deployments to hiring managers and recruiters.

---

## 🚀 Key Highlights & Architecture

- **Next.js 15 (App Router)** + **React 19** + **TypeScript**
- **Tailwind CSS** with a restrained, high-contrast monochrome design system (WCAG AA/AAA compliant)
- **JSON-LD `Person` Schema** + OpenGraph + Twitter Cards + `robots.txt` + `sitemap.xml` for full search engine indexing
- **Interactive Career Progression** (Apprentice → Intern → SWE Web → AI Engineer & MLOps)
- **3 Deep Engineering Case Studies**: *SentimentSphere*, *SkillSphere*, *RigSmith*
- **Embedded Interactive Contact Form** with server-side validation (`/api/contact`) and optional email/webhook dispatch
- **Integrated CV / Resume Preview Modal** with print support and direct PDF download

---

## 🛠️ Local Development

### 1. Prerequisites
- Node.js `20.x` or later
- npm or pnpm

### 2. Installation
```bash
git clone <your-repo-url> nawab-portfolio
cd nawab-portfolio
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## 🌐 Production Deployment Options

### Option A: Vercel (Recommended — 2 minutes)
1. Push this repository to GitHub or GitLab.
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import this repository.
4. Next.js will be detected automatically. Leave the build settings as default (`npm run build`).
5. (Optional) In **Environment Variables**, add:
   - `RESEND_API_KEY`: *(Optional)* Your Resend key to receive contact emails directly in your inbox.
   - `CONTACT_TO_EMAIL`: `nawabshaikh0518@gmail.com`
6. Click **Deploy**.

---

### Option B: Docker Container (AWS ECS / EC2 / Cloud Run)
A production-ready multi-stage `Dockerfile` with minimal Alpine image and standalone output is included:

```bash
# Build the Docker image
docker build -t nawab-portfolio:latest .

# Run container on port 3000
docker run -p 3000:3000 nawab-portfolio:latest
```

---

## ⚙️ Environment Variables (Optional)

| Variable | Description | Default |
|---|---|---|
| `RESEND_API_KEY` | Resend API key to forward contact form inquiries to email | *None (logs to server)* |
| `CONTACT_TO_EMAIL` | Destination email for contact messages | `nawabshaikh0518@gmail.com` |
| `CONTACT_FROM_EMAIL` | Verified sender email for Resend | `portfolio@nawabshaikh.dev` |
| `CONTACT_WEBHOOK_URL` | Webhook URL (Slack/Discord) for instant inquiry notifications | *None* |

---

## 📄 License
MIT &copy; Nawab Shaikh
