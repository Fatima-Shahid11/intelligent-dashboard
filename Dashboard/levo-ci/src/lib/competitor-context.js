// lib/competitor-context.js

export const COMPETITOR_CONTEXT = `
=== LEVO.AI (Our Product) ===
Company: Levo.ai | Founded: 2020 | Stage: Series A | HQ: San Jose, CA
Website: https://levo.ai

CORE PLATFORM:
- Full lifecycle API & AI security — the only platform covering design, build, test, deploy, AND runtime in one
- eBPF-based sensor: discovers 100% of API traffic including internal, shadow, zombie, partner, and legacy APIs with under 1% CPU/memory overhead
- No traffic mirroring required — works without a proxy in the data path
- Auto-generates accurate OpenAPI 3.0 specs directly from live traffic (not from developer docs that go stale)
- Shift-left testing: 1000+ automatically generated security test cases per endpoint injected into CI/CD pipelines
- Runtime protection: real-time anomaly detection, BOLA/BFLA/injection/data exposure detection in production
- Sensitive data flow mapping: automatically identifies PII, PHI, PCI data flowing through APIs
- AI/LLM/Agent/MCP security: ONLY vendor with native security for LLM endpoints, AI agents, and MCP server traffic (launched 2025)
- Privacy-first architecture: minimal payload capture, no sensitive data leaves customer environment
- 12+ deployment options: eBPF, PCAP, mirror, reverse proxy, AWS/GCP/Azure integrations, Kubernetes DaemonSet
- Windows PCAP sensor added Jan 2026 — now covers Windows-based API environments
- PCI DSS, HIPAA, SOC2, GDPR compliance reporting out of the box

GO-TO-MARKET:
- ICP: DevSecOps-led engineering teams at Series B+ startups and mid-market companies building API-first or AI-native products
- Secondary ICP: Security-conscious enterprises in regulated industries (fintech, healthtech, defense)
- Sales motion: bottoms-up developer adoption → security team expansion
- Typical deal size: $50K–$300K ARR
- Key differentiators in deals: shift-left depth, AI security coverage, privacy-first design, low overhead

=== COMPETITOR 1: Salt Security ===
Company: Salt Security | Founded: 2016 | HQ: Palo Alto, CA | Funding: $271M total
Investors: Advent International, Alkeon Capital, Bank of America, S Capital
CEO: Roey Eliyahu | Employees: ~300
Website: https://salt.security

PRODUCT:
- Core offering: API Protection Platform focused on runtime threat detection and API discovery
- Discovery method: Full traffic ingestion via inline proxy, API gateway integration, or network tap — requires sending ALL API traffic to Salt's cloud
- Runtime detection: ML-based behavioral analysis comparing current traffic against learned baseline — detects enumeration, scraping, injection, auth bypass
- API inventory: Builds catalog from traffic analysis — good for external APIs, weaker for internal/microservices
- Posture management: API governance dashboards for security teams and CISOs
- Remediation: Alerts and recommendations but no automated blocking — relies on WAF/API gateway integration to act
- NO CI/CD integration: Security testing happens post-deployment only — zero shift-left capability
- NO native AI/LLM/MCP security: Their platform was designed for REST/GraphQL/SOAP APIs, not AI agent traffic
- Data retention: Full API payloads stored in Salt's cloud — significant privacy and compliance risk for regulated industries

PRICING & DEPLOYMENT:
- Enterprise-only pricing: typically $200K–$500K+ ARR for large deployments
- Requires significant infrastructure: dedicated sensors, cloud data pipeline, high egress costs
- Average deployment time: 4–8 weeks for enterprise
- High false positive rate reported by customers in G2 reviews — alert fatigue is common complaint

STRENGTHS:
- Strongest brand recognition in API security — often the default RFP entry for Fortune 500
- Deep SOC integrations (Splunk, QRadar, CrowdStrike, Palo Alto XSOAR)
- Executive-level relationships at large enterprises from 8+ years of sales
- Gartner API Protection Magic Quadrant recognition — CISOs use this as a procurement shortcut
- Strong behavioral ML for detecting sophisticated runtime attacks (credential stuffing, account takeover via API)
- Excellent API discovery for external/public-facing API estates

WEAKNESSES:
- Zero shift-left capability — every vulnerability Salt finds was already deployed to production
- Full traffic ingestion = massive data egress costs + privacy risk (PHI/PCI data leaves customer environment)
- High false positive rate — security teams report spending hours triaging noise
- Very expensive infrastructure requirement — not viable for mid-market or budget-conscious accounts
- No coverage for internal microservices APIs that don't cross a network boundary
- Completely blind to AI/LLM/Agent/MCP attack surface
- Slow deployment — weeks of professional services work
- SOC-centric UI is not developer-friendly — creates friction with engineering teams

CUSTOMERS: Equifax, Finastra, Telefonica, Mosaic, and other large enterprises
WIN PATTERN: Fortune 500 CISO-led deals where brand/Gartner recognition matters more than technical depth
LOSS PATTERN: Budget-sensitive deals, DevSecOps-led orgs, companies with AI products, privacy-sensitive industries

=== COMPETITOR 2: Traceable AI (acquired by Harness, 2025) ===
Company: Traceable AI | Founded: 2018 | HQ: San Francisco, CA | Funding: $110M+
Acquired by Harness in mid-2025 | Original investors: IVP, Unusual Ventures, Tiger Global
CEO (pre-acquisition): Jyoti Bansal (Harness CEO now oversees)
Website: https://www.traceable.ai

PRODUCT:
- Core offering: API security platform with emphasis on behavioral analytics, forensics, and threat investigation
- Discovery: Traffic-based API discovery — requires agent or network tap, misses internal APIs not on network boundary
- Detection: Deep behavioral analytics using distributed tracing data — excellent for forensic investigation of complex attacks
- Testing: Partial shift-left capability added post-2023 — less mature than Levo's core shift-left offering
- Forensics: Industry-leading attack forensics — full request/response capture for post-incident investigation
- Data model: Stores complete API payloads including request/response bodies — creates significant data residency risk
- Integration: Deep APM/observability integrations (Datadog, Dynatrace, New Relic) — strong in observability-forward orgs
- NO native AI/LLM/MCP security: No coverage for AI agent traffic or MCP server endpoints
- NO Windows sensor: Limited to Linux/container environments

POST-ACQUISITION ISSUES:
- Harness acquired Traceable to add API security to their DevOps platform suite
- Procurement is now bundled through Harness sales — standalone Traceable purchase is harder and more expensive
- Existing Traceable customers face contract renegotiation and potential price increases
- Product roadmap now dictated by Harness priorities — security-specific innovation may slow
- Sales team disruption: many original Traceable sellers left post-acquisition
- Customer success/support quality has declined per recent G2 reviews (post-acquisition period)

STRENGTHS:
- Best forensic analytics in the market — unmatched for post-incident investigation depth
- Deep distributed tracing integration — uniquely powerful for microservices environments using Jaeger/Zipkin
- Strong behavioral baseline modeling for complex multi-step API attack detection
- Good runtime detection accuracy for known attack patterns
- Developer-friendly API (good SDK and CLI tooling)

WEAKNESSES:
- Harness acquisition = procurement complexity, bundling friction, and enterprise buying overhead
- Full payload storage creates serious privacy risk — HIPAA/PCI data stored in Traceable cloud
- Traffic-dependent discovery — misses shadow/internal APIs not traversing monitored network paths
- Post-acquisition product uncertainty — roadmap unclear, support degraded
- High TCO: infrastructure + Harness platform licensing adds up quickly
- No native AI/LLM/Agent security coverage
- Shift-left capability is partial and newer — not core to their product heritage

CUSTOMERS: Pre-acquisition: Priceline, DoorDash, various fintech companies
WIN PATTERN: Observability-forward engineering orgs that already use Harness; forensics-focused security teams
LOSS PATTERN: Privacy-sensitive industries; orgs wanting standalone tool; budget-conscious buyers; companies post-Harness migration friction

=== COMPETITOR 3: Akamai API Security (formerly Noname Security) ===
Company: Noname Security (acquired by Akamai, July 2024) | Noname Founded: 2020
Acquisition price: ~$450M | Akamai Revenue: $3.8B (2024)
Website: https://www.akamai.com/products/api-security

PRODUCT:
- Core offering: API security platform integrated into Akamai's edge network and security portfolio
- Discovery: Traffic mirroring at the edge — discovers APIs that cross Akamai's CDN/edge network; completely blind to internal east-west API traffic
- Detection: Post-production anomaly detection using Akamai's edge traffic data
- Testing: No native shift-left testing — post-production monitoring only
- WAF integration: Bundled with Akamai App & API Protector — some accounts get API security as an add-on to existing WAF
- Data handling: API traffic data routed through Akamai's global network — significant data sovereignty concerns for EU/regulated customers
- NO CI/CD integration: Zero shift-left capability
- NO AI/LLM/Agent/MCP security: No coverage for AI workloads
- NO internal API visibility: Edge-only — completely blind to APIs that don't cross Akamai's network

AKAMAI BUNDLING DYNAMICS (critical competitive context):
- Where Akamai is already the CDN/WAF vendor (common in Fortune 500), the API security module is pitched as a "free" or low-cost add-on
- This means Levo often never gets invited to a competitive evaluation — the deal is done before procurement starts
- However: bundled does NOT mean good coverage — internal APIs, AI endpoints, and microservices are all invisible to Akamai
- Many Akamai API security customers discover significant coverage gaps within 6–12 months

STRENGTHS:
- Massive existing enterprise relationships — Akamai is already in most Fortune 500 companies
- Bundling makes it easy to "check the box" on API security without a new vendor evaluation
- Edge-level detection for externally-facing APIs is strong
- Global CDN infrastructure gives unmatched scale for external API traffic analysis
- Strong brand trust for traditional enterprise security buyers

WEAKNESSES:
- Completely blind to internal APIs, microservices, east-west traffic — the majority of modern API attack surface
- Edge-only architecture = massive coverage blind spot for any API not going through Akamai CDN
- No shift-left testing — can't catch vulnerabilities before production
- No AI/LLM/MCP security — not designed for AI-native architectures
- Data sovereignty issues — routing customer API traffic through Akamai global network
- High false positive rate from traffic mirroring approach
- Post-production only — by the time Akamai detects something, it's already happened in production
- Noname product quality concerns post-acquisition — integration into Akamai is ongoing

CUSTOMERS: Large enterprises already using Akamai CDN — financial services, retail, media
WIN PATTERN: Accounts where Akamai is already the WAF/CDN — bundle play, minimal evaluation
LOSS PATTERN: Internal API coverage requirements; AI workloads; shift-left mandates; privacy-first environments

=== COMPETITOR 4: 42Crunch ===
Company: 42Crunch | Founded: 2017 | HQ: London, UK | Funding: ~$17M
Investors: Notion Capital, Amadeus Capital Partners
CEO: Jacques Declas | Employees: ~80
Website: https://42crunch.com

PRODUCT:
- Core offering: OpenAPI-first API security platform — everything built around OpenAPI specification contracts
- IDE plugins: VS Code and JetBrains plugins for real-time OpenAPI security feedback as developers write specs — this is their key developer habit hook
- Static analysis: Scans OpenAPI specs for security misconfigurations, missing auth, overly permissive schemas
- Dynamic testing: API conformance testing — tests whether live API behavior matches its OpenAPI specification
- CI/CD integration: Strong pipeline integration for spec-based security gates
- Firewall: API firewall that enforces OpenAPI contract — blocks requests that don't match the spec
- NO runtime behavioral detection: Can't detect attacks that conform to the spec (e.g., BOLA, business logic abuse)
- NO traffic-based discovery: Completely dependent on developers maintaining accurate OpenAPI specs
- NO AI/LLM/Agent security: Not designed for AI workloads
- NO sensitive data flow mapping: Doesn't track what data actually flows through APIs

CRITICAL LIMITATION — DOCUMENTATION DRIFT:
- 42Crunch's entire security model depends on developers keeping OpenAPI specs accurate and up-to-date
- In practice, APIs evolve faster than documentation — specs are typically 30–60% incomplete within 6 months of initial creation
- Shadow APIs (undocumented endpoints), zombie APIs (deprecated but still live), and internal APIs never appear in specs
- This means 42Crunch customers have a false sense of coverage — they're securing the spec, not the actual API surface

STRENGTHS:
- Best developer experience in the category — IDE plugins create early habit formation at spec-writing time
- Fast time-to-value for spec-first teams — can be productive in hours
- Low price point — accessible for small teams and startups
- Strong OpenAPI ecosystem integrations (Swagger, Postman, Stoplight)
- Good for enforcing API design standards across engineering teams

WEAKNESSES:
- Spec-dependent — completely blind to undocumented APIs, shadow endpoints, and live traffic reality
- No runtime protection — can't detect or prevent attacks happening in production
- No behavioral analysis — spec-conforming attacks (BOLA, business logic) are invisible
- No sensitive data mapping — doesn't know what PII/PHI actually flows through APIs
- No AI/LLM/Agent security
- Documentation drift makes coverage degrade over time
- Very low ACV limits their ability to invest in enterprise features

CUSTOMERS: Developer-first startups, API-first companies with strong OpenAPI discipline
WIN PATTERN: Greenfield projects where teams adopt OpenAPI-first from day one; very small engineering teams
LOSS PATTERN: Any org with undocumented APIs (most enterprises); runtime security requirements; regulated industries needing real coverage evidence

=== COMPETITOR 5: StackHawk ===
Company: StackHawk | Founded: 2019 | HQ: Denver, CO | Funding: ~$26M
Investors: Costanoa Ventures, Foundry Group, Sapphire
CEO: Joni Klippert | Employees: ~60
Website: https://www.stackhawk.com

PRODUCT:
- Core offering: DAST (Dynamic Application Security Testing) platform for API and application security in CI/CD
- Scanning engine: Built on OWASP ZAP (open source) with proprietary configuration layer and CI/CD integrations
- Testing: Scans externally accessible API endpoints for known vulnerability classes — injection, XSS, auth issues, OWASP API Top 10 (subset)
- CI/CD: Strong GitHub Actions, GitLab CI, CircleCI, Jenkins integrations — easy pipeline insertion
- Coverage: External/public-facing APIs only — requires network access to the target API
- NO internal API coverage: Can't reach internal east-west microservice traffic
- NO runtime monitoring: Testing tool only — goes dark after the CI scan completes
- NO eBPF discovery: No automatic API discovery — engineers must configure which APIs to test
- NO AI/LLM/Agent security: Not designed for AI workloads
- NO sensitive data mapping: Doesn't identify PII/PHI flowing through APIs
- NO compliance reporting: No PCI/HIPAA/SOC2 evidence generation

ZAP DEPENDENCY LIMITATIONS:
- ZAP is a generic scanner not purpose-built for API security — misses API-specific vulnerabilities
- Generic payloads vs Levo's 1000+ API-specific test cases — much shallower coverage depth
- High false positive rate from generic ZAP rules not tuned for API context
- No business logic testing — can't detect BOLA, BFLA, or broken object-level authorization

STRENGTHS:
- Fastest time-to-value for CI/CD API scanning — can be running in under 30 minutes
- Excellent developer experience — designed for engineers, not security teams
- Good GitHub/GitLab ecosystem integrations
- Lower price point — accessible for startups and SMBs
- Freemium tier drives bottoms-up adoption
- Clear, simple UI that developers actually use

WEAKNESSES:
- External APIs only — entire internal API surface is invisible
- DAST-only: no runtime protection, no behavioral detection, no production monitoring
- ZAP engine = shallow, generic scanning — misses API-specific attack classes
- No automatic API discovery — manual configuration required
- No AI/LLM/Agent security
- No sensitive data identification
- No compliance reporting for regulated industries
- Not an enterprise security platform — limited to CI scan use case

CUSTOMERS: Developer-first startups, engineering-led SMBs, teams with simple external API estates
WIN PATTERN: SMB deals where price and simplicity win; teams just starting their API security journey
LOSS PATTERN: Any internal API coverage requirement; runtime security needs; enterprise compliance mandates; AI workloads

=== MARKET CONTEXT 2026 ===
MARKET SIZE & GROWTH:
- API security market: $7.4B in 2026, growing at 28% CAGR
- API attacks increased 137% YoY — now the #1 attack vector for web applications
- 57% of enterprises experienced an API-related security incident in the past 12 months (Gartner)
- Average cost of an API breach: $4.8M (IBM Cost of Data Breach Report 2025)
- 90% of web applications now expose APIs — attack surface has exploded

AI SECURITY EMERGING MARKET:
- LLM/AI Agent adoption growing 400% YoY in enterprise — every AI product creates new API attack surfaces
- MCP (Model Context Protocol) becoming the standard for AI agent-to-tool communication — creates new class of API vulnerabilities
- Prompt injection via API, data exfiltration through LLM APIs, and agent privilege escalation are new attack classes
- No major competitor has shipped a native AI/Agent/MCP security response as of Q1 2026
- Levo is 12–18 months ahead of the field on this — first-mover window is closing

KEY INDUSTRY DYNAMICS:
- Traceable/Harness acquisition (2025): Created 18-month enterprise procurement gap — customers seeking stable standalone alternatives
- Akamai/Noname acquisition (2024): Bundling erodes competitive evaluation in large enterprises but leaves internal API surface uncovered
- Gartner API Protection MQ: Salt Security leads but Levo not yet rated — major perception gap despite superior product
- Privacy regulations tightening: GDPR enforcement increasing, CCPA expanding, HIPAA penalties rising — full payload capture tools (Salt, Traceable) face growing compliance risk
- Developer-first buying motion rising: Engineering teams increasingly drive security tool decisions — Levo's low-overhead, CI/CD-native approach benefits
- Budget pressure: Post-2023 tech spending reset means security teams must justify TCO — Salt's $200K–$500K deals face scrutiny
`;

export const COMPETITOR_NAMES = [
  "all",
  "salt_security",
  "traceable",
  "akamai_noname",
  "42crunch",
  "stackhawk",
];

export const COMPETITOR_LABELS = {
  all:           "All Competitors",
//   salt_security: "Salt Security",
//   traceable:     "Traceable",
//   akamai_noname: "Akamai / Noname",
//   "42crunch":    "42Crunch",
//   stackhawk:     "StackHawk",
};

export const COMPETITOR_FOCUS = {
  all:           "all five competitors: Salt Security, Traceable, Akamai/Noname, 42Crunch, and StackHawk",
  salt_security: "Salt Security specifically — their SOC-centric model, $271M funding, and shift-left blind spot",
  traceable:     "Traceable specifically — focusing on the Harness acquisition fallout and procurement friction",
  akamai_noname: "Akamai/Noname specifically — the bundling threat and internal API coverage blind spot",
  "42crunch":    "42Crunch specifically — the spec-dependency trap and documentation drift problem",
  stackhawk:     "StackHawk specifically — the DAST-only limitation and ZAP engine shallow coverage",
};