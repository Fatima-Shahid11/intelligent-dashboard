import { SWOTCell } from './shared';

export default function SWOTSection() {
  return (
    <div className="section active">
      <div className="section-label">Levo.ai SWOT Analysis · Competitive Context</div>
      <div className="swot-grid" style={{ marginBottom: '24px' }}>
        <SWOTCell label="Strengths" items={[
          'Only platform with native LLM, MCP server, and AI agent security',
          'eBPF-based discovery, uniquely deep, low-overhead API visibility',
          'Privacy-first, <1% resource overhead, structurally competitive',
          'Full SDLC coverage: shift-left CI/CD testing + runtime protection',
          '12+ agentless deployment options. fastest time-to-value',
          'Auto-generated OpenAPI specs and Postman collections from real traffic',
          'Developer-first design. reduces friction for the builder persona',
        ]} />
        <SWOTCell label="Weaknesses" items={[
          'Lower brand awareness vs. Salt ($271M raised), Traceable, Akamai',
          'Not yet in Gartner Magic Quadrant. limits Fortune 500 procurement shortcuts',
          'Smaller sales team → limited outbound reach in enterprise accounts',
          'No dedicated IDE plugin. cedes developer habit-formation to 42Crunch',
          'Early-stage marketing muscle compared to incumbents with large teams',
        ]} />
        <SWOTCell label="Opportunities" items={[
          'AI security is a blue ocean. no major competitor has shipped a real response',
          'Traceable/Harness acquisition created enterprise churner pipeline to target',
          '57% of orgs suffered API breaches. urgency is building, market is expanding',
          'MCP server adoption by enterprises is accelerating → new urgent attack surface',
          'Privacy regulations (GDPR, CCPA, HIPAA) increasingly penalize data-heavy tools',
          'Regulated verticals (finserv, healthcare) actively seeking shift-left compliance',
        ]} />
        <SWOTCell label="Threats" items={[
          'Akamai bundles API security "free" where already the WAF vendor',
          'Salt Security has deep enterprise relationships and massive sales team',
          'Platform consolidation: enterprises may prefer fewer vendors, larger names',
          'Large competitors could accelerate their shift-left capabilities with acquisitions',
          'Open-source alternatives (Akto, StackHawk freemium) erode SMB price points',
        ]} />
      </div>

      <div className="card">
        <div className="card-title">Competitive Position Summary</div>
        <div className="card-sub">AI assessment · Where Levo stands heading into 2026</div>
        <div className="dd-p" style={{ marginTop: '8px' }}>Levo is the strongest technically differentiated player in the API security market, but is under-positioned relative to its capability. The platform has solved problems that competitors haven't addressed (AI/LLM security, MCP coverage, privacy-first eBPF discovery), yet these advantages are not yet fully reflected in market perception, analyst rankings, or enterprise procurement shortlists.</div>
        <div className="dd-p">The competitive window for the AI security opportunity is real but finite. Salt Security will eventually ship a response; Traceable (Harness) already has engineering resources to catch up on runtime. The next 12–18 months are critical for Levo to convert product superiority into brand recognition and category ownership – particularly in the emerging "AI Security" category where it can be the defining voice.</div>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '16px' }}>
          <span className="stat-chip chip-green">✓ Product-Market Fit: Strong</span>
          <span className="stat-chip chip-yellow">△ Brand Awareness: Developing</span>
          <span className="stat-chip chip-green">✓ AI Security Timing: Optimal</span>
          <span className="stat-chip chip-red">✗ Analyst Recognition: Gap</span>
          <span className="stat-chip chip-green">✓ Technical Moat: Defensible</span>
        </div>
      </div>
    </div>
  );
}
