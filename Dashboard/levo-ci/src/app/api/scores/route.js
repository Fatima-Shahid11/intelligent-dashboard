
import { NextResponse } from 'next/server';
import { ChatGroq } from '@langchain/groq';
import { PromptTemplate } from '@langchain/core/prompts';
import { StringOutputParser } from '@langchain/core/output_parsers';
import { RunnableSequence } from '@langchain/core/runnables';

const model = new ChatGroq({
  apiKey: process.env.GROQ_API_KEY,
  model: 'llama-3.1-8b-instant',
  temperature: 0.1,
  max_tokens: 700,
});

const prompt = PromptTemplate.fromTemplate(`
Score these 5 API security vendors 0-100 across 6 dimensions. Be specific - no zeros unless capability is truly absent.

Dimensions (in order):
1. Shift-Left / CI/CD
2. Runtime Protection  
3. API Discovery
4. AI / LLM Security
5. Privacy & Compliance
6. Developer Experience

Scoring guide based on known facts:
- Salt Security: NO shift-left (score 5-15), STRONG runtime ML (75-85), good discovery (60-70), NO AI security (5), poor privacy/egress (20-30), SOC-focused not dev-friendly (40-50)
- Traceable: partial shift-left (35-45), strong runtime forensics (75-85), good discovery (55-65), NO AI security (5-10), poor privacy (25-35), decent UX (50-60)
- Akamai/Noname: NO shift-left (5-10), decent edge runtime (55-65), POOR discovery/edge-only (25-35), NO AI security (5), poor privacy (20-30), enterprise overhead (35-45)
- 42Crunch: excellent shift-left IDE (80-90), NO runtime (5-10), NO discovery/spec-only (15-25), NO AI security (5), good privacy (65-75), excellent dev UX (85-95)
- StackHawk: good CI/CD DAST (70-80), NO runtime (5-10), external only (30-40), NO AI security (5), decent privacy (55-65), good dev UX (75-85)

Return ONLY valid JSON:
{{
  "levo": {{"name": "Levo.ai", "scores": [92, 88, 96, 95, 90, 78]}},
  "competitors": [
    {{"key": "salt", "name": "Salt Security", "color": "#f59e0b", "scores": [10, 82, 65, 5, 25, 45], "summary": "Strong runtime ML but no shift-left or AI security, high data egress"}},
    {{"key": "traceable", "name": "Traceable", "color": "#f97316", "scores": [40, 80, 60, 8, 30, 55], "summary": "Best forensics but privacy concerns post-Harness acquisition"}},
    {{"key": "akamai", "name": "Akamai / Noname", "color": "#ef4444", "scores": [8, 60, 30, 5, 25, 40], "summary": "Edge-only misses internal APIs, bundled with WAF"}},
    {{"key": "42crunch", "name": "42Crunch", "color": "#8b5cf6", "scores": [85, 8, 20, 5, 70, 90], "summary": "Excellent spec-first IDE but zero runtime visibility"}},
    {{"key": "stackhawk", "name": "StackHawk", "color": "#06b6d4", "scores": [75, 8, 35, 5, 60, 80], "summary": "Good DAST CI/CD but external APIs only, no runtime"}}
  ]
}}

Adjust scores slightly within the ranges above. JSON:
`);

function extractJSON(raw) {
  let s = raw.trim().replace(/^```[a-z]*\n?/, '').replace(/```$/, '').trim();
  try { return JSON.parse(s); } catch (_) {}
  const a = s.indexOf('{'), b = s.lastIndexOf('}');
  if (a !== -1 && b > a) { try { return JSON.parse(s.slice(a, b + 1)); } catch (_) {} }
  try {
    let f = s.replace(/,\s*([\]}])/g, '$1');
    const o = (f.match(/\{/g)||[]).length - (f.match(/\}/g)||[]).length;
    const r = (f.match(/\[/g)||[]).length - (f.match(/\]/g)||[]).length;
    for (let i = 0; i < r; i++) f += ']';
    for (let i = 0; i < o; i++) f += '}';
    return JSON.parse(f);
  } catch (e) { throw new Error('JSON parse failed: ' + s.slice(0, 120)); }
}

export async function POST() {
  try {
    const chain = RunnableSequence.from([prompt, model, new StringOutputParser()]);
    const raw   = await chain.invoke({});
    return NextResponse.json(extractJSON(raw));
  } catch (err) {
    console.error('[scores]', err?.message);
    return NextResponse.json({ error: err?.message }, { status: 500 });
  }
}