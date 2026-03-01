export default function DesignDocSection() {
  return (
    <div className="section active">

      {/* Header */}
      <div className="card" style={{ marginBottom: '24px', borderColor: 'rgba(0,229,255,0.2)' }}>
        <div className="card-title" style={{ fontSize: '20px', marginBottom: '6px' }}>Dashboard Design Document</div>
        <div style={{ fontSize: '12px', color: 'var(--text-dim)', fontFamily: "'DM Mono', monospace" }}>
          Competitive Intelligence System · Levo.ai · v2.0
        </div>
      </div>

      {/* 1. The Problem */}
      <div className="dd-section">
        <div className="dd-h">1. <span>The Problem</span></div>
        <div className="dd-p">
          Sales teams need competitive intelligence that is accurate, current, and immediately usable. The API security market has well-funded competitors like Salt Security, established vendors like Akamai bundling their way into deals, and constant changes from acquisitions and product announcements. Relying on scattered documents and outdated one-pagers puts reps at a disadvantage when prospects ask tough questions about how Levo stacks up.
        </div>
        <div className="dd-p">
          This dashboard solves that problem by putting everything in one place. Battle cards, feature comparisons, objection handling, and strategic insights are all available in seconds. AI keeps the analysis fresh so the content reflects the current competitive landscape, not something written six months ago.
        </div>
      </div>

      {/* 2. Who This Is For */}
      <div className="dd-section">
        <div className="dd-h">2. <span>Who This Is For</span></div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '12px' }}>
          {[
            {
              role: 'Sales Reps',
              tag: 'Primary user',
              desc: 'The main audience. Before a call, open the battle card for the competitor in the deal. During an RFP, pull from the feature matrix. When a prospect throws an objection you have not heard before, the objection handling scripts have you covered.',
            },
            {
              role: 'Product Managers',
              tag: 'Regular user',
              desc: 'Use the AI insights to track what competitors are doing and where the market is moving. The SWOT and scoring tabs make it easy to spot gaps in the roadmap that competitors are currently exploiting.',
            },
            {
              role: 'Marketing',
              tag: 'Regular user',
              desc: 'Source consistent, accurate differentiation points for campaigns, analyst briefings, and content. No more asking a sales rep what the current positioning against Salt is supposed to be.',
            },
            {
              role: 'Leadership',
              tag: 'Occasional user',
              desc: 'The Overview tab gives a fast market snapshot. The SWOT is board-ready. No digging through documents to answer "where do we stand against the competition right now."',
            },
          ].map(({ role, tag, desc }) => (
            <div className="card" key={role}>
              <div style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text)', marginBottom: '3px' }}>{role}</div>
              <div style={{ fontSize: '10px', fontFamily: "'DM Mono', monospace", color: 'var(--text-dim)', marginBottom: '10px' }}>{tag}</div>
              <div className="dd-feature-text" style={{ fontSize: '12px' }}>{desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Why These Five Competitors */}
      <div className="dd-section">
        <div className="dd-h">3. <span>Why These Five Competitors</span></div>
        <div className="dd-p">
          These are not just the five biggest names in API security. They were chosen because each one represents a distinct threat pattern that Levo encounters in real deals.
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '12px' }}>
          {[
            { n: '1', name: 'Salt Security', desc: 'The most direct competitor and the highest deal-loss risk. When Levo loses to Salt it is usually a brand and analyst recognition problem, not a product problem. That makes it worth studying closely.' },
            { n: '2', name: 'Traceable (Harness)', desc: 'Strong product that just became harder to buy. The 2025 Harness merger created procurement complexity and account team churn that Levo can turn into an advantage with the right message.' },
            { n: '3', name: 'Akamai / Noname', desc: 'Dangerous not because the product is better but because of bundling. If Akamai is already the WAF vendor, the API module gets positioned as a free add-on and Levo never gets a seat at the table.' },
            { n: '4', name: '42Crunch', desc: 'A different kind of competitor. Developer-first and spec-centric with no runtime visibility. Shows up in deals where the buyer has strong OpenAPI discipline and thinks spec validation is enough.' },
            { n: '5', name: 'StackHawk', desc: 'The CI/CD native DAST tool that shows up in SMB and startup deals. Easy to set up, inexpensive, and beloved by developers. Levo wins on depth but has to earn it.' },
          ].map(({ n, name, desc }) => (
            <div className="dd-feature-row" key={n}>
              <div className="dd-num">{n}</div>
              <div className="dd-feature-text"><strong>{name}.</strong> {desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. What We Built */}
      <div className="dd-section">
        <div className="dd-h">4. <span>What We Built</span></div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', marginTop: '12px' }}>
          {[
            { num: '01', title: 'Market Overview', desc: 'The fast flyover. KPI tiles, competitor landscape cards, threat bars, win/loss patterns, and a timeline of recent competitive moves. Good for a 30-second briefing before a meeting.' },
            { num: '02', title: 'Battle Cards + Scores', desc: 'Per-competitor cards with win themes, loss scenarios, trap question counters, social proof, and full objection handling scripts. Plus an AI-generated score comparison across six capability dimensions.' },
            { num: '03', title: 'Feature Matrix', desc: 'Side-by-side comparison across 15 capabilities. Full, partial, or not available. Built for RFP responses and technical evaluations where you need accurate answers fast.' },
            { num: '04', title: 'AI Insights', desc: 'The most important tab for strategy. Groq-powered analysis that goes beyond feature comparison to answer what Levo should actually do about each competitor. Filterable, cached, and refreshable on demand.' },
            { num: '05', title: 'SWOT Analysis', desc: 'Levo-specific strengths, weaknesses, opportunities, and threats mapped against the current competitive landscape. Updated to reflect 2026 market conditions including the AI security opportunity.' },
            { num: '06', title: 'Design Doc', desc: 'This page. The thinking behind what we built and why.' },
          ].map(({ num, title, desc }) => (
            <div className="card" key={num}>
              <div style={{ fontSize: '10px', fontFamily: "'DM Mono', monospace", color: 'var(--levo)', marginBottom: '10px', letterSpacing: '1px' }}>MODULE {num}</div>
              <div className="card-title" style={{ marginBottom: '8px' }}>{title}</div>
              <div className="dd-feature-text" style={{ fontSize: '12px' }}>{desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. How the AI Works */}
      <div className="dd-section">
        <div className="dd-h">5. <span>How the AI Works</span></div>
        <div className="dd-p">
          The AI features use Llama 3 running on Groq, which is fast enough that the wait does not feel like a wait. The insights and competitive scores are generated by feeding a detailed knowledge base about each competitor into the model and asking it to reason about strategy, not just summarize facts.
        </div>
        <div className="dd-p">
          The first time you open the AI Insights or Competitive Scores tab, the result is fetched and then saved to your browser's local storage. Every visit after that loads instantly from cache with no API call. The Refresh button is there when you want a fresh perspective — maybe after a competitor announcement or a significant market event. Nothing auto-refreshes in the background, which keeps the experience fast and predictable.
        </div>
        <div className="dd-p">
          The battle cards are deliberately static. Sales scripts and objection counters do not need to change daily and reliability matters more than novelty in a live call situation. The AI layer is reserved for the strategic and analytical content where fresh thinking genuinely adds value.
        </div>
      </div>

      {/* 6. Design Decisions */}
      <div className="dd-section">
        <div className="dd-h">6. <span>A Few Design Decisions Worth Explaining</span></div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', marginTop: '12px' }}>
          {[
            { title: 'Static first, AI second', desc: 'Every tab loads instantly with pre-written content. AI results are an upgrade, not a requirement. A sales rep in a conference room with spotty wifi still gets a fully functional tool.' },
            { title: 'Cache before calling the API', desc: 'AI results are stored in localStorage after the first fetch. Subsequent visits are instant and free. This also avoids burning through Groq free tier tokens on every page load.' },
            { title: 'Dark theme by default', desc: 'The dashboard is designed for extended daily use. Dark backgrounds with high contrast text are easier on the eyes during long research sessions and look sharp on external monitors during presentations.' },
            { title: 'No backend database', desc: 'Everything runs as a single Next.js project deployed to Vercel. No separate backend, no database, no infrastructure to manage. The AI context is embedded directly in the prompts.' },
            { title: 'Honest about what is static', desc: 'The UI distinguishes between pre-generated content, cached AI results, and fresh AI analysis. Users always know what they are looking at and whether it has been refreshed recently.' },
            { title: 'One model, smaller and faster', desc: 'Llama 3.1 8B Instant on Groq was chosen over larger models because it is fast enough to feel real-time and uses far fewer of the daily free tier tokens. The quality difference for structured JSON output is negligible.' },
          ].map(({ title, desc }) => (
            <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px', padding: '16px' }} key={title}>
              <div style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text)', marginBottom: '6px' }}>{title}</div>
              <div className="dd-feature-text" style={{ fontSize: '11px' }}>{desc}</div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}