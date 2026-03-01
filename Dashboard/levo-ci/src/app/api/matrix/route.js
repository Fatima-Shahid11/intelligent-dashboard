// app/api/matrix/route.js
// AI-generated capability matrix with explanations

import { NextResponse } from 'next/server';
import { ChatGroq } from '@langchain/groq';
import { PromptTemplate } from '@langchain/core/prompts';
import { StringOutputParser } from '@langchain/core/output_parsers';
import { RunnableSequence } from '@langchain/core/runnables';

const model = new ChatGroq({
  apiKey: process.env.GROQ_API_KEY,
  model: 'llama-3.1-8b-instant',
  temperature: 0.2,
  max_tokens: 1200,
});

const prompt = PromptTemplate.fromTemplate(`
Generate a feature comparison matrix for API security vendors. Use these symbols:
● = Full support (native, production-ready)
◑ = Partial support (limited, requires workarounds)
○ = Not available

Vendors: Levo.ai, Salt Security, Traceable, Akamai/Noname, 42Crunch, StackHawk

Known facts:
- Levo.ai: eBPF discovery, 1000+ CI/CD tests, runtime protection, ONLY vendor with AI/LLM/MCP security, privacy-first no egress, <1% overhead
- Salt Security: Runtime ML only, NO shift-left, full payload egress to cloud, SOC-centric, good SIEM integrations
- Traceable: Best forensics, Harness acquisition 2025, full payload storage, partial shift-left added late
- Akamai/Noname: Edge-only (misses internal APIs), WAF bundling, no CI/CD integration, no AI security
- 42Crunch: Spec-first IDE plugins (excellent), OpenAPI generation, ZERO runtime or traffic visibility
- StackHawk: DAST CI/CD tool (ZAP-based), external APIs only, no runtime, no AI security, developer-friendly

Return ONLY valid JSON array with 15 capabilities:
[
  {{
    "name": "Capability name",
    "levo": "●",
    "salt": "○ or ◑ or ●",
    "traceable": "○ or ◑ or ●",
    "akamai": "○ or ◑ or ●",
    "crunch": "○ or ◑ or ●",
    "hawk": "○ or ◑ or ●",
    "insight": "One sentence explaining why Levo leads or key differentiator"
  }}
]

Include these capabilities:
1. eBPF-based API Discovery
2. Shadow/Zombie API Detection
3. CI/CD Shift-Left Testing
4. Runtime Threat Detection
5. LLM/AI Agent Security
6. MCP Server Security
7. OWASP API Top 10 Coverage
8. Business Logic/BOLA Testing
9. Privacy-First Architecture
10. Auto OpenAPI Spec Generation
11. Compliance Reports (PCI/HIPAA/SOC2)
12. Agentless Deployment Options
13. Windows Environment Support
14. Sensitive Data Flow Mapping
15. Low Infrastructure Overhead

JSON:
`);

function extractJSON(raw) {
  let s = raw.trim().replace(/^```[a-z]*\n?/, '').replace(/```$/, '').trim();
  try { return JSON.parse(s); } catch (_) {}
  const a = s.indexOf('['), b = s.lastIndexOf(']');
  if (a !== -1 && b > a) { try { return JSON.parse(s.slice(a, b + 1)); } catch (_) {} }
  throw new Error('JSON parse failed: ' + s.slice(0, 120));
}

export async function POST() {
  try {
    const chain = RunnableSequence.from([prompt, model, new StringOutputParser()]);
    const raw = await chain.invoke({});
    const capabilities = extractJSON(raw);
    return NextResponse.json({ capabilities });
  } catch (err) {
    console.error('[matrix]', err?.message);
    return NextResponse.json({ error: err?.message }, { status: 500 });
  }
}
