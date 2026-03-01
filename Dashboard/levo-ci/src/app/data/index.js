// Battle Card Data
export const battleData = {
  salt: {
    name: 'Salt Security',
    win: [
      'Prospect is frustrated with alert fatigue. Salt generates excessive noise from full traffic ingestion while Levo surfaces only real, exploitable vulnerabilities with runtime context.',
      'Budget-sensitive accounts. Salt requires expensive cloud infrastructure and data egress fees while Levo runs at under 1% overhead with no egress costs.',
      'DevSecOps-led teams. Salt is built entirely for SOC teams and post-production monitoring while Levo fits the shift-left motion developers actually adopt.',
      'AI or LLM products in the stack. Salt has zero native AI agent or MCP security coverage while Levo is the only platform that protects this surface.',
    ],
    lose: [
      'SOC-led security teams that prioritize behavioral analytics dashboards. Salt has deeper runtime detection maturity and stronger SIEM integrations.',
      'Salt is already deployed. Switching costs and existing SOC workflows make displacement very difficult in the short term.',
      'Gartner-driven procurement. Salt has Magic Quadrant recognition that Levo has not yet earned.',
    ],
    traps: [
      '"Salt has been around longer and is more enterprise-proven" → Agree on track record, then pivot. API attacks have evolved and Salt was not built for AI workloads, shift-left testing, or low-overhead deployment.',
      '"Salt ML catches more attacks" → ML on full traffic ingestion generates ten times the alert volume. Customers care about fixing real vulnerabilities, not triaging theoretical ones.',
    ],
    proof: [
      'Levo saves enterprises an average of $11M in incident response costs annually by catching vulnerabilities before production deployment.',
      'Customers recover 2 to 3 quarters of developer bandwidth compared to manual security testing approaches.',
      'Levo discovers 100% of the API surface using eBPF including internal and shadow APIs that Salt never sees.',
    ],
    objections: [
      { q: 'We already have Salt deployed.', a: 'The question is whether Salt is covering your full SDLC or just your runtime. Most Salt customers have a gap in pre-production APIs, internal microservices, and AI endpoints. Levo can layer in as the shift-left complement while you evaluate full coverage.' },
      { q: 'Salt has more funding and is more established.', a: 'Funding buys marketing, not better coverage. Salt raised $271M to build a sales team while Levo invested in eBPF discovery and AI security that Salt has not shipped. For a technical evaluation we welcome a proof-of-value side by side.' },
    ],
  },
  traceable: {
    name: 'Traceable (Harness)',
    win: [
      'Prospect wants a standalone security tool. Traceable is now sold as part of the Harness DevOps platform which adds procurement overhead and contract complexity.',
      'Privacy-sensitive industries. Traceable stores full API payloads in their cloud while Levo captures minimal data and never requires sensitive information to leave the customer environment.',
      'Teams unhappy post-acquisition. Customers facing new contracts, pricing changes, or forced Harness adoption are actively looking for stable independent alternatives.',
      'Pre-production testing is a priority. Traceable testing is reactive and derived from live traffic while Levo tests before code ever reaches production.',
    ],
    lose: [
      'Prospect is already post-acquisition and uses the integrated Harness DevOps and security stack.',
      'Forensic and post-incident investigation is the primary use case. Traceable full payload capture provides unmatched investigation depth.',
    ],
    traps: [
      '"Traceable is backed by Harness now, that means more stability" → The acquisition adds platform complexity. Security teams post-acquisition want a dedicated security partner, not an upsell inside a CI/CD platform.',
      '"Traceable has better behavioral analytics" → Behavioral analysis requiring full payload storage is a privacy and compliance risk. Levo surfaces the same insights through a privacy-first design that never exports your data.',
    ],
    proof: [
      'Levo shift-left testing catches vulnerabilities that Traceable can only detect after they are already live in production.',
      'Levo minimal data capture passes infosec review in regulated industries where Traceable full-payload model raises data residency concerns.',
    ],
    objections: [
      { q: 'Our contract with Traceable runs until 2027.', a: 'We are not asking you to switch today. A parallel proof-of-value now lets you confirm the pre-production and privacy gaps without any disruption ahead of the 2027 renewal.' },
      { q: 'Traceable has better threat visibility.', a: 'Traceable visibility comes from storing full API payloads, a tradeoff many teams are reconsidering as data residency requirements tighten. Levo surfaces exploitable vulnerabilities without your data ever leaving your environment.' },
    ],
  },
  akamai: {
    name: 'Akamai / Noname',
    win: [
      'Akamai is not the existing WAF or CDN vendor. No bundling leverage means a fair technical evaluation where Levo wins on coverage depth.',
      'Prospect has internal APIs, microservices, or AI workloads. Akamai edge-only architecture misses everything behind the firewall.',
      'Compliance requires shift-left testing evidence. Akamai provides zero CI/CD integration and no pre-production testing capability.',
      'Privacy-sensitive industries. Akamai routes customer traffic through their global network creating data sovereignty concerns that Levo avoids entirely.',
    ],
    lose: [
      'Akamai is already the WAF and CDN vendor. The API security module is pitched as a free add-on and Levo never gets invited to a competitive evaluation.',
      'CISO values single-vendor simplicity over best-of-breed depth.',
    ],
    traps: [
      '"Akamai API security is included in our existing contract" → Included pricing means included limitations. The module does not see internal APIs, cannot test pre-production, and routes your traffic data externally.',
    ],
    proof: [
      'Akamai edge-based model misses internal microservices, partner APIs, and low-traffic endpoints. Levo discovers 100% of the API surface.',
      'Every vulnerability Levo catches pre-production is one Akamai will only catch after it has already been exploited.',
    ],
    objections: [
      { q: 'We already pay for Akamai and the API module is included.', a: 'The coverage gaps are the real cost. Akamai does not see your internal APIs, AI agents, or any endpoint not exposed externally, and one breach from a shadow API costs far more than a standalone security investment.' },
      { q: 'Akamai is a trusted vendor with global infrastructure.', a: 'Trust in the CDN does not extend to API security depth. The architecture remains blind to internal traffic, shift-left testing, and AI security coverage regardless of the Noname acquisition.' },
    ],
  },
  '42crunch': {
    name: '42Crunch',
    win: [
      'Prospect has undocumented or shadow APIs. 42Crunch is entirely dependent on developer-maintained OpenAPI specs and is completely blind if the spec is missing or inaccurate.',
      'Runtime protection is required. 42Crunch cannot see live traffic or detect any attack happening in production.',
      'Teams have experienced documentation drift. 42Crunch coverage degrades rapidly as code outpaces spec updates.',
      'Compliance requires runtime monitoring or incident detection evidence. 42Crunch provides none of this capability.',
    ],
    lose: [
      'Security workflow is purely design-time and the team wants security embedded at the spec writing stage.',
      'Very small budget and spec validation is seen as good enough for the current scale.',
    ],
    traps: [
      '"42Crunch integrates right into my IDE" → IDE integration is great for spec hygiene. But it cannot tell you about the 40% of APIs that never make it into a maintained spec or catch a business logic flaw that does not exist in the definition.',
    ],
    proof: [
      '42Crunch customers typically discover 30 to 40% more APIs when adding Levo because zombie, shadow, and internal endpoints are invisible to spec-only tools.',
      '42Crunch has no response when an API behaves differently in production than its spec defines, which is a daily reality for any team shipping quickly.',
    ],
    objections: [
      { q: '42Crunch is cheaper and fits our developer workflow.', a: 'Cost efficiency only holds if you are getting real coverage. 42Crunch secures your API specs while Levo secures your actual APIs, and the gap between the spec and reality is exactly where attackers operate.' },
      { q: 'Our team is disciplined about maintaining OpenAPI specs.', a: 'Even disciplined teams have undocumented internal services, deprecated endpoints still receiving traffic, and new AI agent integrations that predate any spec. Levo discovers and protects all of these from day one.' },
    ],
  },
  stackhawk: {
    name: 'StackHawk',
    win: [
      'Prospect needs internal API coverage. StackHawk is limited to externally accessible APIs and has no visibility into microservice or internal traffic whatsoever.',
      'AI or LLM security is on the roadmap. StackHawk has zero coverage of this surface and no architectural path to address it.',
      'Runtime protection is required. StackHawk is a testing tool only with no production monitoring or threat detection capability.',
      'Enterprise compliance reporting for PCI, HIPAA, or SOC2 is needed. StackHawk does not generate this evidence and Levo ships it out of the box.',
    ],
    lose: [
      'Very small engineering teams where StackHawk simplicity and low price outweigh the need for coverage depth.',
      'StackHawk is already deeply embedded in pipelines and the team perceives switching cost as high.',
    ],
    traps: [
      '"StackHawk is simpler and our developers already use it" → Simplicity is great until you have a breach from an internal API StackHawk never tested. Levo adds eBPF discovery and runtime protection without replacing the developer CI/CD workflow.',
    ],
    proof: [
      'Levo discovers and tests internal APIs, partner APIs, and AI endpoints that StackHawk external DAST approach cannot reach by design.',
      'Levo generates over 1000 custom payloads per endpoint using real traffic while StackHawk ZAP-based scanning uses generic rules that miss API-specific attack classes.',
    ],
    objections: [
      { q: 'StackHawk is cheaper.', a: 'StackHawk license cost is lower but its coverage cost is higher. For every internal API, AI endpoint, and runtime threat that StackHawk misses you are carrying uninsured risk, and the ROI conversation needs to include incident response costs.' },
      { q: 'Our developers love StackHawk and it is already in our pipelines.', a: 'We are not asking you to remove StackHawk. Levo adds internal API coverage, runtime protection, and compliance reporting that StackHawk cannot provide so your team keeps the workflow they know.' },
    ],
  },
};

// Feature Matrix Capabilities
export const capabilities = [
  { name: 'eBPF-based API Discovery', levo: '●', salt: '○', traceable: '○', akamai: '○', crunch: '○', hawk: '○' },
  { name: 'Shadow / Zombie API Detection', levo: '●', salt: '◑', traceable: '◑', akamai: '◑', crunch: '○', hawk: '○' },
  { name: 'CI/CD Shift-Left Testing', levo: '●', salt: '○', traceable: '◑', akamai: '○', crunch: '●', hawk: '●' },
  { name: 'Runtime Threat Detection', levo: '●', salt: '●', traceable: '●', akamai: '●', crunch: '○', hawk: '○' },
  { name: 'LLM / AI Agent Security', levo: '●', salt: '○', traceable: '○', akamai: '○', crunch: '○', hawk: '○' },
  { name: 'MCP Server Security', levo: '●', salt: '○', traceable: '○', akamai: '○', crunch: '○', hawk: '○' },
  { name: 'OWASP API Top 10 Coverage', levo: '●', salt: '●', traceable: '●', akamai: '◑', crunch: '◑', hawk: '◑' },
  { name: 'Business Logic / BOLA Testing', levo: '●', salt: '◑', traceable: '●', akamai: '◑', crunch: '○', hawk: '○' },
  { name: 'Privacy-First Architecture', levo: '●', salt: '○', traceable: '○', akamai: '○', crunch: '◑', hawk: '◑' },
  { name: 'Auto OpenAPI Spec Generation', levo: '●', salt: '◑', traceable: '◑', akamai: '○', crunch: '●', hawk: '○' },
  { name: 'Compliance Reports (PCI/HIPAA/SOC2)', levo: '●', salt: '●', traceable: '◑', akamai: '◑', crunch: '○', hawk: '○' },
  { name: 'Agentless Deployment (12+ options)', levo: '●', salt: '◑', traceable: '◑', akamai: '◑', crunch: '○', hawk: '◑' },
  { name: 'Windows Environment Support', levo: '●', salt: '◑', traceable: '○', akamai: '◑', crunch: '○', hawk: '○' },
  { name: 'Sensitive Data Flow Mapping', levo: '●', salt: '●', traceable: '●', akamai: '◑', crunch: '○', hawk: '○' },
  { name: 'Low Infrastructure Overhead (<1%)', levo: '●', salt: '○', traceable: '○', akamai: '◑', crunch: '●', hawk: '●' },
];

// Timeline / Recent Competitive Moves
export const timelineData = [
  {
    date: "Jan 2026",
    dotClass: "blue",
    title: "Levo adds Windows PCAP sensor and AI endpoint descriptions",
    body: "Extends coverage to Windows environments and adds GenAI-generated endpoint documentation to support API monetization use cases."
  },
  {
    date: "Mid 2025",
    dotClass: "yellow",
    title: "Traceable acquired by Harness",
    body: "Adds procurement overhead for existing Traceable customers. Opens a window for Levo in mid-market accounts that want a standalone security tool."
  },
  {
    date: "2024",
    dotClass: "red",
    title: "Akamai integrates Noname Security",
    body: "Strengthens the bundling play in large enterprise accounts where Akamai is already the WAF vendor. No change to internal API coverage blind spot."
  },
  {
    date: "2025",
    dotClass: "green",
    title: "Levo launches LLM, Agent, and MCP security",
    body: "First mover in AI workload API security. No major competitor has a native response as of Q1 2026. The window to own this category is open now."
  }
];

// Win and Loss Patterns
export const winLossPatterns = {
  wins: "The buying team is DevSecOps-led, frustrated with alert noise, building AI-native products, or in a regulated industry requiring shift-left compliance evidence. Budget-conscious teams that need strong coverage without expensive infrastructure overhead.",
  losses: "Salt Security is already deployed in a SOC motion, or Akamai is the incumbent WAF vendor running a bundle play. CISO-led procurement using Gartner as a shortcut defaults to more recognized names regardless of technical merit."
};

// Competitor Cards for Overview
export const competitorCards = [
  {
    name: "● Levo.ai",
    isLevo: true,
    desc: "Full lifecycle API and AI security platform",
    tags: ['Shift-Left', 'eBPF', 'AI Security', 'Privacy-First'],
    longDesc: "Founded in 2021 by Buchi Reddy and Harish Nataraj. eBPF-powered discovery finds every API including internal and shadow endpoints with under 1% overhead. The only platform covering shift-left CI/CD testing, runtime protection, and native AI, LLM, and MCP security in a single product.",
    stat1: "Founded",
    stat1Val: "2021",
    stat2: "Stage",
    stat2Val: "Seed",
    badge: "Leader",
    badgeClass: "chip-green"
  },
  {
    name: "Salt Security",
    desc: "Runtime API protection via ML anomaly detection",
    tags: ['Runtime', 'ML', 'SOC'],
    longDesc: "Founded in 2016 by Roey Eliyahu and Michael Nicosia in Israel. Strong runtime detection and SOC integrations with $271M raised at a $1.4B valuation. Entirely post-production with no shift-left capability. Full traffic ingestion creates high data egress costs and raises privacy concerns.",
    stat1: "Founded",
    stat1Val: "2016",
    stat2: "Funding",
    stat2Val: "$271M",
    badge: "Challenger",
    badgeClass: "chip-yellow"
  },
  {
    name: "Traceable (Harness)",
    desc: "Behavioral analytics and API security platform",
    tags: ['Runtime', 'Behavioral', 'Forensics'],
    longDesc: "Founded in 2018 by Jyoti Bansal and Sanjay Nagaraj in San Francisco. Best forensic analytics in the category with $110M raised. Merged with Harness in March 2025, adding procurement complexity and contract uncertainty for existing customers. Full payload storage creates privacy concerns in regulated industries.",
    stat1: "Founded",
    stat1Val: "2018",
    stat2: "Funding",
    stat2Val: "$110M",
    badge: "Challenger",
    badgeClass: "chip-yellow"
  },
  {
    name: "Akamai (Noname)",
    desc: "Edge-based API protection via Noname acquisition",
    tags: ['Edge', 'WAF', 'Enterprise'],
    longDesc: "Noname Security was founded in 2020 and acquired by Akamai for $450M in June 2024. Dangerous in accounts where Akamai is the incumbent WAF vendor due to bundle pricing. Edge-only architecture misses all internal APIs and microservice traffic. No shift-left testing and no AI security coverage.",
    stat1: "Acquired",
    stat1Val: "June 2024",
    stat2: "Deal Size",
    stat2Val: "$450M",
    badge: "Incumbent",
    badgeClass: "chip-orange"
  },
  {
    name: "42Crunch",
    desc: "OpenAPI spec-first API security platform",
    tags: ['Spec-First', 'OpenAPI', 'DevTools'],
    longDesc: "Founded in 2016 by Isabelle Mauny, Jacques Declas, and Philippe Leothaud in London. Best IDE integrations in the category with $17M raised in a 2021 Series A. Entirely spec-dependent and blind to undocumented APIs, live traffic, and runtime attacks. Documentation drift degrades coverage over time.",
    stat1: "Founded",
    stat1Val: "2016",
    stat2: "Funding",
    stat2Val: "$17M",
    badge: "Niche",
    badgeClass: "chip-blue"
  },
  {
    name: "StackHawk",
    desc: "DAST API security testing in CI/CD pipelines",
    tags: ['DAST', 'CI/CD', 'Developer'],
    longDesc: "Founded in 2019 by Joni Klippert in Denver. Fast CI/CD setup and good developer UX built on OWASP ZAP. Raised $47M including a $12M round in May 2025. External APIs only with no internal coverage, no runtime monitoring, and no AI security capability.",
    stat1: "Founded",
    stat1Val: "2019",
    stat2: "Funding",
    stat2Val: "$47M",
    badge: "Niche",
    badgeClass: "chip-blue"
  }
];

// Static Insights Data
export const staticInsights = {
  all: {
    insights: [
      {
        type: 'threat',
        icon: '⚠',
        title: 'Salt Security is aggressively targeting AI-native startups',
        text: 'Salt recently announced an "AI API Security" initiative, though current capabilities remain vapor. They are positioning pre-announce to freeze deals. Levo should accelerate case study publication from AI-native customers to establish proof.',
        recommend: '💡 Recommendation: Publish 2 AI-native customer case studies within 45 days to counter Salt positioning.',
      },
      {
        type: 'opportunity',
        icon: '↑',
        title: 'Traceable post-acquisition churn creates displacement window',
        text: 'G2 reviews from Q4 show Traceable customer satisfaction declining post-Harness acquisition. Procurement complexity and support degradation are cited repeatedly. This is a 6-month window before Harness stabilizes the integration.',
        recommend: '💡 Recommendation: Launch targeted outbound to Traceable customers with contract renewals in 2025.',
      },
      {
        type: 'trend',
        icon: '⟳',
        title: 'Shift-left security becoming a procurement requirement',
        text: 'RFPs from enterprise prospects increasingly list CI/CD integration as mandatory. Salt and Akamai cannot credibly answer this requirement. Levo should ensure shift-left proof points are in every first-call deck.',
        recommend: '💡 Recommendation: Add shift-left testing demo to standard sales deck as a mandatory first-call module.',
      },
      {
        type: 'action',
        icon: '→',
        title: 'Gartner MQ positioning gap requires analyst engagement',
        text: 'Salt and Traceable both appear in Gartner API Security reports. Levo absence creates credibility friction in CISO-led deals. An analyst relations push in Q1 is required to close this gap before 2025 MQ cycle.',
        recommend: '💡 Recommendation: Schedule Gartner and Forrester analyst briefings in Q1 with AI security differentiation focus.',
      },
      {
        type: 'opportunity',
        icon: '↑',
        title: 'Akamai Noname integration struggles create enterprise openings',
        text: 'Post-acquisition integration of Noname into Akamai is incomplete. Field reports indicate sales confusion and product roadmap uncertainty. Levo should target Noname renewal accounts aggressively.',
        recommend: '💡 Recommendation: Build Noname competitive displacement playbook and train sales team by end of Q1.',
      },
      {
        type: 'threat',
        icon: '⚠',
        title: '42Crunch expanding into runtime with new funding',
        text: '42Crunch closed a growth round in late 2024 and announced runtime protection roadmap. While execution is 12+ months away, messaging will muddy the waters in spec-first accounts.',
        recommend: '💡 Recommendation: Prepare competitive response messaging for 42Crunch runtime announcement.',
      },
    ],
    priorities: [
      {
        rank: 1,
        title: 'Publish AI-native customer proof points',
        desc: 'Salt is pre-announcing AI security capabilities they do not have. Concrete customer evidence is the counter.',
        badge: 'URGENT',
        badgeClass: 'chip-red',
      },
      {
        rank: 2,
        title: 'Target Traceable renewal accounts',
        desc: 'Post-acquisition churn window is open for 6 months. Displacement requires proactive outbound now.',
        badge: 'HIGH',
        badgeClass: 'chip-red',
      },
      {
        rank: 3,
        title: 'Engage Gartner and Forrester analysts',
        desc: 'MQ absence is a credibility gap in CISO-led deals. Analyst briefings in Q1 can influence 2025 reports.',
        badge: 'HIGH',
        badgeClass: 'chip-red',
      },
      {
        rank: 4,
        title: 'Build Noname displacement playbook',
        desc: 'Akamai integration confusion is a window. Sales needs competitive enablement materials.',
        badge: 'MEDIUM',
        badgeClass: 'chip-yellow',
      },
      {
        rank: 5,
        title: 'Monitor 42Crunch runtime roadmap',
        desc: 'Execution is 12+ months out but messaging will start soon. Prepare response positioning.',
        badge: 'LONG-TERM',
        badgeClass: 'chip-blue',
      },
    ],
  },

  salt: {
    insights: [
      {
        type: 'threat',
        icon: '⚠',
        title: 'Salt maintains strong Gartner positioning',
        text: 'Salt Security continues to dominate analyst conversations with their $271M funding and enterprise customer base. Their brand recognition in CISO-led deals remains a significant barrier for Levo.',
        recommend: '💡 Recommendation: Accelerate analyst relations program and prepare Gartner briefing materials highlighting AI security differentiation.',
      },
      {
        type: 'opportunity',
        icon: '↑',
        title: 'Salt alert fatigue driving customer frustration',
        text: 'Multiple G2 reviews cite excessive false positives and alert volume from Salt full traffic ingestion. DevSecOps teams are actively seeking alternatives with better signal-to-noise ratio.',
        recommend: '💡 Recommendation: Create "Alert Fatigue ROI Calculator" showing Levo efficiency versus Salt noise.',
      },
      {
        type: 'trend',
        icon: '⟳',
        title: 'Salt lacks any AI/LLM security capability',
        text: 'Despite marketing claims, Salt has zero production capability for AI agent, LLM endpoint, or MCP server security. This gap widens as enterprises adopt AI workloads.',
        recommend: '💡 Recommendation: Position AI security as primary differentiator in every Salt competitive deal.',
      },
      {
        type: 'action',
        icon: '→',
        title: 'Target Salt accounts with AI initiatives',
        text: 'Enterprises building AI products have security requirements Salt cannot address. These accounts represent immediate displacement opportunities.',
        recommend: '💡 Recommendation: Build target account list of Salt customers with public AI/ML initiatives.',
      },
      {
        type: 'opportunity',
        icon: '↑',
        title: 'Salt shift-left gap is a procurement blocker',
        text: 'Salt has no CI/CD integration or pre-production testing. As shift-left becomes an RFP requirement, Salt cannot compete in DevSecOps-led evaluations.',
        recommend: '💡 Recommendation: Emphasize shift-left testing in all competitive positioning against Salt.',
      },
      {
        type: 'threat',
        icon: '⚠',
        title: 'Salt enterprise relationships run deep',
        text: 'Salt has established relationships with Fortune 500 security teams and SOC integrations. Displacement requires proving coverage gaps, not just feature comparison.',
        recommend: '💡 Recommendation: Develop proof-of-value methodology that demonstrates Salt blind spots in customer environment.',
      },
    ],
    priorities: [
      {
        rank: 1,
        title: 'Lead with AI security differentiation',
        desc: 'Salt has zero AI/LLM capability. This is the clearest technical win in every competitive deal.',
        badge: 'URGENT',
        badgeClass: 'chip-red',
      },
      {
        rank: 2,
        title: 'Build alert fatigue ROI calculator',
        desc: 'Quantify the cost of Salt false positives versus Levo precision. DevSecOps buyers respond to efficiency metrics.',
        badge: 'HIGH',
        badgeClass: 'chip-red',
      },
      {
        rank: 3,
        title: 'Target Salt accounts building AI products',
        desc: 'Create account list from public AI announcements. These prospects have unmet security needs.',
        badge: 'HIGH',
        badgeClass: 'chip-red',
      },
      {
        rank: 4,
        title: 'Develop shift-left comparison assets',
        desc: 'Salt cannot answer CI/CD requirements. Create side-by-side comparison for RFP responses.',
        badge: 'MEDIUM',
        badgeClass: 'chip-yellow',
      },
      {
        rank: 5,
        title: 'Prepare Gartner analyst briefing',
        desc: 'Salt Gartner positioning creates credibility friction. Proactive analyst engagement required.',
        badge: 'LONG-TERM',
        badgeClass: 'chip-blue',
      },
    ],
  },

  traceable: {
    insights: [
      {
        type: 'opportunity',
        icon: '↑',
        title: 'Harness acquisition creating customer churn',
        text: 'Post-acquisition G2 reviews show declining satisfaction. Customers cite procurement complexity, support degradation, and forced platform bundling as pain points.',
        recommend: '💡 Recommendation: Launch targeted outbound campaign to Traceable customers with 2025-2026 renewals.',
      },
      {
        type: 'threat',
        icon: '⚠',
        title: 'Traceable forensics remain best-in-class',
        text: 'For SOC teams focused on post-incident investigation, Traceable distributed tracing provides unmatched depth. This use case is difficult to displace.',
        recommend: '💡 Recommendation: Position Levo as shift-left complement rather than SOC replacement in forensics-heavy accounts.',
      },
      {
        type: 'trend',
        icon: '⟳',
        title: 'Privacy concerns with Traceable growing',
        text: 'Traceable full payload capture creates data residency and compliance concerns. Regulated industries are increasingly flagging this architectural choice.',
        recommend: '💡 Recommendation: Develop privacy-first positioning for regulated industry prospects evaluating Traceable.',
      },
      {
        type: 'action',
        icon: '→',
        title: 'Exploit Harness procurement overhead',
        text: 'Buying Traceable now requires engaging Harness enterprise sales. Standalone security buyers find this process frustrating.',
        recommend: '💡 Recommendation: Position Levo simplicity and independence as procurement advantage versus Harness bundle.',
      },
      {
        type: 'opportunity',
        icon: '↑',
        title: 'Traceable shift-left is reactive only',
        text: 'Traceable testing derives from production traffic, not proactive CI/CD integration. They cannot catch vulnerabilities before deployment.',
        recommend: '💡 Recommendation: Demonstrate Levo CI/CD testing in every Traceable competitive evaluation.',
      },
      {
        type: 'threat',
        icon: '⚠',
        title: 'Harness platform creates lock-in',
        text: 'Customers already using Harness CI/CD may default to Traceable bundling despite technical gaps. Breaking this lock-in requires clear ROI evidence.',
        recommend: '💡 Recommendation: Build Harness customer case studies showing Levo value alongside existing Harness investment.',
      },
    ],
    priorities: [
      {
        rank: 1,
        title: 'Target Traceable renewal accounts',
        desc: 'Post-acquisition churn window is 6 months. Build target list from LinkedIn job changes and G2 reviews.',
        badge: 'URGENT',
        badgeClass: 'chip-red',
      },
      {
        rank: 2,
        title: 'Lead with privacy-first architecture',
        desc: 'Traceable payload capture is a compliance risk. Position Levo data minimization as competitive advantage.',
        badge: 'HIGH',
        badgeClass: 'chip-red',
      },
      {
        rank: 3,
        title: 'Demonstrate proactive shift-left testing',
        desc: 'Traceable reactive testing misses pre-production vulnerabilities. Show CI/CD integration in every demo.',
        badge: 'HIGH',
        badgeClass: 'chip-red',
      },
      {
        rank: 4,
        title: 'Position standalone simplicity',
        desc: 'Harness procurement overhead frustrates buyers. Emphasize Levo independence and fast deployment.',
        badge: 'MEDIUM',
        badgeClass: 'chip-yellow',
      },
      {
        rank: 5,
        title: 'Build Harness complement positioning',
        desc: 'For locked-in Harness customers, show Levo value alongside existing investment.',
        badge: 'LONG-TERM',
        badgeClass: 'chip-blue',
      },
    ],
  },

  akamai: {
    insights: [
      {
        type: 'opportunity',
        icon: '↑',
        title: 'Akamai edge architecture misses internal APIs',
        text: 'Akamai API security only sees traffic crossing their edge network. Internal microservices, partner APIs, and AI workloads are completely invisible to their platform.',
        recommend: '💡 Recommendation: Lead with eBPF internal API discovery in every Akamai competitive deal.',
      },
      {
        type: 'threat',
        icon: '⚠',
        title: 'Akamai bundling blocks competitive evaluations',
        text: 'When Akamai is the existing CDN/WAF vendor, API security is positioned as a free add-on. Levo may never get invited to compete.',
        recommend: '💡 Recommendation: Focus on accounts where Akamai is NOT the incumbent CDN vendor.',
      },
      {
        type: 'trend',
        icon: '⟳',
        title: 'Noname integration struggles continue',
        text: 'Post-acquisition integration of Noname into Akamai platform is incomplete. Field reports indicate confused sales motions and roadmap uncertainty.',
        recommend: '💡 Recommendation: Target Noname renewal accounts experiencing integration friction.',
      },
      {
        type: 'action',
        icon: '→',
        title: 'Highlight zero shift-left capability',
        text: 'Akamai provides no CI/CD integration or pre-production testing. This is a disqualifying gap for DevSecOps-led evaluations.',
        recommend: '💡 Recommendation: Ensure shift-left requirements are in every RFP where Akamai is competing.',
      },
      {
        type: 'opportunity',
        icon: '↑',
        title: 'Data sovereignty concerns with Akamai',
        text: 'Akamai routes API traffic through their global network, creating data residency concerns for regulated industries and international enterprises.',
        recommend: '💡 Recommendation: Position Levo in-environment deployment as privacy advantage in regulated verticals.',
      },
      {
        type: 'threat',
        icon: '⚠',
        title: 'Akamai enterprise relationships entrenched',
        text: 'Akamai has deep relationships with Fortune 500 infrastructure teams. Single-vendor preference makes displacement difficult without demonstrated gaps.',
        recommend: '💡 Recommendation: Develop proof-of-value that shows internal API blind spots in Akamai customer environments.',
      },
    ],
    priorities: [
      {
        rank: 1,
        title: 'Lead with internal API discovery',
        desc: 'Akamai sees only edge traffic. eBPF discovery of internal APIs is the clearest competitive win.',
        badge: 'URGENT',
        badgeClass: 'chip-red',
      },
      {
        rank: 2,
        title: 'Build Noname displacement playbook',
        desc: 'Integration struggles create window. Sales needs competitive materials for Noname renewals.',
        badge: 'HIGH',
        badgeClass: 'chip-red',
      },
      {
        rank: 3,
        title: 'Focus on non-Akamai CDN accounts',
        desc: 'Bundling blocks evaluation when Akamai is incumbent. Target accounts with other CDN vendors.',
        badge: 'HIGH',
        badgeClass: 'chip-red',
      },
      {
        rank: 4,
        title: 'Embed shift-left in RFP requirements',
        desc: 'Akamai cannot answer CI/CD requirements. Ensure these are mandatory in competitive evaluations.',
        badge: 'MEDIUM',
        badgeClass: 'chip-yellow',
      },
      {
        rank: 5,
        title: 'Develop data sovereignty positioning',
        desc: 'Akamai traffic routing creates privacy concerns. Build messaging for regulated industries.',
        badge: 'LONG-TERM',
        badgeClass: 'chip-blue',
      },
    ],
  },

  '42crunch': {
    insights: [
      {
        type: 'opportunity',
        icon: '↑',
        title: '42Crunch has zero runtime capability',
        text: '42Crunch is purely design-time spec validation. They cannot detect attacks, monitor production, or provide any runtime protection whatsoever.',
        recommend: '💡 Recommendation: Position runtime protection as mandatory requirement in every 42Crunch competitive deal.',
      },
      {
        type: 'threat',
        icon: '⚠',
        title: '42Crunch IDE integration is genuinely strong',
        text: 'For teams focused on spec-first development, 42Crunch IDE plugins provide excellent developer experience. This use case is difficult to displace.',
        recommend: '💡 Recommendation: Position Levo as runtime complement rather than IDE replacement for spec-focused teams.',
      },
      {
        type: 'trend',
        icon: '⟳',
        title: '42Crunch visibility limited to documented APIs',
        text: '42Crunch is completely blind to shadow APIs, undocumented endpoints, and any API without a maintained OpenAPI spec. Coverage degrades as code outpaces documentation.',
        recommend: '💡 Recommendation: Demonstrate eBPF discovery of undocumented APIs in every competitive evaluation.',
      },
      {
        type: 'action',
        icon: '→',
        title: 'Target teams experiencing documentation drift',
        text: 'Teams shipping quickly have specs that lag reality. 42Crunch coverage gaps grow over time while Levo discovers actual API behavior.',
        recommend: '💡 Recommendation: Build messaging around "spec vs. reality" gap that 42Crunch cannot address.',
      },
      {
        type: 'opportunity',
        icon: '↑',
        title: '42Crunch pricing advantage erodes at scale',
        text: '42Crunch appears cheaper for small teams, but coverage gaps become costly as API surface grows. ROI conversation should include risk of unprotected endpoints.',
        recommend: '💡 Recommendation: Build ROI calculator showing true cost of 42Crunch coverage gaps versus Levo comprehensive protection.',
      },
      {
        type: 'threat',
        icon: '⚠',
        title: '42Crunch runtime roadmap announced',
        text: '42Crunch raised funding and announced runtime protection plans. While execution is 12+ months away, messaging may create evaluation delays.',
        recommend: '💡 Recommendation: Prepare competitive response emphasizing Levo production runtime versus 42Crunch vaporware.',
      },
    ],
    priorities: [
      {
        rank: 1,
        title: 'Lead with runtime protection requirement',
        desc: '42Crunch has zero runtime capability. This is the clearest disqualifying gap in security evaluations.',
        badge: 'URGENT',
        badgeClass: 'chip-red',
      },
      {
        rank: 2,
        title: 'Demonstrate shadow API discovery',
        desc: '42Crunch only sees documented APIs. Show eBPF discovery of undocumented endpoints in every demo.',
        badge: 'HIGH',
        badgeClass: 'chip-red',
      },
      {
        rank: 3,
        title: 'Build spec-vs-reality messaging',
        desc: 'Documentation drift is universal. Position Levo as discovering actual API behavior, not documented intent.',
        badge: 'HIGH',
        badgeClass: 'chip-red',
      },
      {
        rank: 4,
        title: 'Develop coverage gap ROI calculator',
        desc: '42Crunch price advantage disappears when coverage gaps are quantified. Build tool for sales.',
        badge: 'MEDIUM',
        badgeClass: 'chip-yellow',
      },
      {
        rank: 5,
        title: 'Prepare response to runtime announcement',
        desc: '42Crunch runtime is vaporware but messaging may delay deals. Ready competitive positioning.',
        badge: 'LONG-TERM',
        badgeClass: 'chip-blue',
      },
    ],
  },

  stackhawk: {
    insights: [
      {
        type: 'opportunity',
        icon: '↑',
        title: 'StackHawk limited to external APIs only',
        text: 'StackHawk DAST approach can only test externally accessible endpoints. Internal microservices, partner APIs, and service mesh traffic are completely invisible.',
        recommend: '💡 Recommendation: Lead with internal API coverage in every StackHawk competitive evaluation.',
      },
      {
        type: 'threat',
        icon: '⚠',
        title: 'StackHawk developer experience is strong',
        text: 'StackHawk CI/CD integration and developer workflow are genuinely excellent for small teams. Simplicity and fast setup win in early-stage evaluations.',
        recommend: '💡 Recommendation: Position Levo as enterprise upgrade path rather than replacement for developer workflow.',
      },
      {
        type: 'trend',
        icon: '⟳',
        title: 'StackHawk has zero runtime protection',
        text: 'StackHawk is exclusively a testing tool with no production monitoring capability. They cannot detect attacks or provide real-time threat response.',
        recommend: '💡 Recommendation: Ensure runtime protection is positioned as requirement in security evaluations.',
      },
      {
        type: 'action',
        icon: '→',
        title: 'Target StackHawk accounts adding compliance requirements',
        text: 'StackHawk lacks PCI, HIPAA, and SOC2 compliance reporting. Growing enterprises need evidence generation StackHawk cannot provide.',
        recommend: '💡 Recommendation: Build compliance reporting comparison showing Levo out-of-box evidence versus StackHawk gaps.',
      },
      {
        type: 'opportunity',
        icon: '↑',
        title: 'StackHawk generic scanning misses API-specific attacks',
        text: 'StackHawk ZAP-based scanning uses generic rules. Levo generates 1000+ custom payloads per endpoint using real traffic patterns for deeper coverage.',
        recommend: '💡 Recommendation: Demonstrate API-specific testing depth versus generic DAST scanning in competitive demos.',
      },
      {
        type: 'threat',
        icon: '⚠',
        title: 'StackHawk pipeline embedding creates switching friction',
        text: 'Teams with StackHawk deeply integrated in CI/CD perceive high switching costs. Positioning Levo as additive rather than replacement reduces friction.',
        recommend: '💡 Recommendation: Develop "StackHawk + Levo" positioning that adds coverage without removing existing workflow.',
      },
    ],
    priorities: [
      {
        rank: 1,
        title: 'Lead with internal API coverage',
        desc: 'StackHawk sees only external APIs. Internal microservices are the clearest coverage gap.',
        badge: 'URGENT',
        badgeClass: 'chip-red',
      },
      {
        rank: 2,
        title: 'Position runtime protection requirement',
        desc: 'StackHawk has zero production monitoring. Runtime protection is a security requirement they cannot meet.',
        badge: 'HIGH',
        badgeClass: 'chip-red',
      },
      {
        rank: 3,
        title: 'Build compliance comparison assets',
        desc: 'StackHawk lacks compliance reporting. Create side-by-side for enterprise evaluations.',
        badge: 'HIGH',
        badgeClass: 'chip-red',
      },
      {
        rank: 4,
        title: 'Develop additive positioning',
        desc: 'Switching friction is high. Position Levo as adding coverage alongside existing StackHawk workflow.',
        badge: 'MEDIUM',
        badgeClass: 'chip-yellow',
      },
      {
        rank: 5,
        title: 'Show API-specific testing depth',
        desc: 'Generic DAST misses API attack classes. Demonstrate custom payload generation in demos.',
        badge: 'LONG-TERM',
        badgeClass: 'chip-blue',
      },
    ],
  },
};