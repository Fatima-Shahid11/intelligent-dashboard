# Levo.ai Competitive Intelligence Dashboard

An AI-powered competitive intelligence system built for Levo.ai's sales, product, and marketing teams.

---

## What It Does

- Gives sales reps battle-ready competitive content before every call
- Generates AI-powered strategic insights and scoring using Groq and Llama 3.1
- Caches all AI results in the browser so the dashboard loads instantly on every visit

---

## The Five Competitors Covered

| Competitor | Why It's Here |
|---|---|
| **Salt Security** | Highest direct deal-loss risk. $271M raised, Gartner recognition, strong SOC presence |
| **Traceable (Harness)** | Best forensics in category. March 2025 Harness merger created displacement opportunity |
| **Akamai / Noname** | Bundling threat in WAF accounts. Acquired Noname for $450M in June 2024 |
| **42Crunch** | Spec-first IDE competitor. Zero runtime visibility, blind to shadow APIs |
| **StackHawk** | CI/CD DAST tool popular in SMB deals. External APIs only, no runtime protection |

---

## Dashboard Modules

### 1. Market Overview
KPI tiles, competitor landscape cards, threat level bars, win/loss patterns, and a timeline of recent competitive moves. The 30-second briefing before any meeting.

### 2. Battle Cards + Competitive Scores
Per-competitor battle cards with win themes, loss scenarios, trap question counters, objection handling scripts, and social proof. The Competitive Scores tab generates AI scores across six capability dimensions and displays them as visual cards with radial rings and dimension bars.

### 3. Feature Matrix
Side-by-side capability comparison across 15 dimensions with full, partial, or not-available indicators. Built for RFP responses and technical evaluations.

### 4. AI Insights
Groq-powered strategic analysis filterable by competitor. Goes beyond feature comparison to surface actionable recommendations, threats, opportunities, and 90-day priorities. Results are cached per filter and refreshable on demand.

### 5. SWOT Analysis
Levo-specific strengths, weaknesses, opportunities, and threats mapped against the 2026 competitive landscape including the AI and MCP security opportunity.

### 6. Design Doc
The product brief explaining what was built, who it is for, and the reasoning behind key decisions.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 with App Router |
| AI Inference | Groq API with `llama-3.1-8b-instant` |
| Prompt Orchestration | LangChain.js |
| Styling | CSS Variables with inline styles, dark theme |
| Caching | Browser `localStorage` with 24-hour TTL |
| Fonts | Fraunces (headings), DM Mono (labels) |
| Deployment | Vercel |

---

## Getting Started

### Prerequisites

- Node.js 18 or higher
- A free [Groq API key](https://console.groq.com)

### Installation

```bash
git clone https://github.com/your-org/levo-ci-dashboard
cd levo-ci-dashboard
npm install
```

### Environment Setup

Create a `.env.local` file in the root of the project:

```env
GROQ_API_KEY=your_groq_api_key_here
```

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## How Caching Works

All AI-generated content is stored in `localStorage` after the first fetch. The cache expires after 24 hours. Switching tabs or filters after the first load is instant with no API calls.

```
First visit  →  fetch from Groq API  →  store in localStorage
Return visit →  load from localStorage instantly (no API call)
Refresh btn  →  clear cache entry  →  fetch fresh from Groq  →  store again
```

The cache TTL can be adjusted in `lib/cache.js`:

```js
const TTL = 1000 * 60 * 60 * 24  // 24 hours
```

---

## API Routes

| Route | Method | Purpose |
|---|---|---|
| `/api/scores` | POST | Generate AI competitive scores for all 5 competitors |
| `/api/insights` | POST | Generate AI insights and priorities for a given competitor filter |
| `/api/overview-scores` | POST | Generate market coverage and threat scores for the Overview tab |

All routes use `llama-3.1-8b-instant` on Groq. The free tier allows 100,000 tokens per day. Because results are cached, normal dashboard usage consumes no tokens after the first load per session.

---

## Project Structure

```
├── app/
│   ├── api/
│   │   ├── scores/route.js
│   │   ├── insights/route.js
│   │   └── overview-scores/route.js
│   ├── layout.js
│   └── page.js
├── components/
│   ├── OverviewSection.js
│   ├── BattleCardSection.js
│   ├── FeatureMatrix.js
│   ├── AIInsights.js
│   ├── SWOTSection.js
│   ├── DesignDocSection.js
│   └── shared.js
├── data/
│   ├── index.js        # Pre-written static data for different components
├── lib/
│   ├── cache.js            # localStorage utility with TTL
│   └── competitor-context.js  # AI prompt context for each competitor
└── public/
```
