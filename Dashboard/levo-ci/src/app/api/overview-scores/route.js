import { NextResponse } from 'next/server';
import { ChatGroq } from '@langchain/groq';
import { PromptTemplate } from '@langchain/core/prompts';
import { StringOutputParser } from '@langchain/core/output_parsers';
import { RunnableSequence } from '@langchain/core/runnables';

const model = new ChatGroq({
  apiKey: process.env.GROQ_API_KEY,
  model: 'llama-3.1-8b-instant',
  temperature: 0.2,
  max_tokens: 800,
});

const prompt = PromptTemplate.fromTemplate(`
You are a competitive intelligence analyst evaluating the API security market.

Analyze these vendors and generate scores based on your knowledge of their actual products, capabilities, funding, and market position:

**Vendors to analyze:**
- Levo.ai (API security with shift-left testing, runtime protection, AI/LLM security)
- Salt Security
- Traceable (acquired by Harness)
- Akamai/Noname (Akamai acquired Noname Security)
- 42Crunch
- StackHawk

**Generate two assessments:**

1. MARKET COVERAGE SCORE (0-100): How comprehensively does each vendor cover the API security market? Consider: shift-left testing capabilities, runtime protection, AI/LLM security support, API discovery methods, and breadth of use cases covered.

2. COMPETITIVE THREAT TO LEVO (0-100): How much of a competitive threat is each vendor to Levo.ai? Consider: market overlap, funding levels, enterprise sales presence, product differentiation, and deal win rates. Also assign a threat level (HIGH/MEDIUM/LOW) based on the score.

Use your knowledge of these companies' actual products, recent news, funding rounds, acquisitions, and market positioning to determine realistic scores.

Return ONLY valid JSON:
{{
  "marketCoverage": [
    {{"name": "Levo.ai", "value": <score>, "color": "var(--levo)"}},
    {{"name": "Salt Security", "value": <score>, "color": "var(--yellow)"}},
    {{"name": "Traceable", "value": <score>, "color": "var(--yellow)"}},
    {{"name": "Akamai/Noname", "value": <score>, "color": "var(--accent)"}},
    {{"name": "42Crunch", "value": <score>, "color": "var(--text-dim)"}},
    {{"name": "StackHawk", "value": <score>, "color": "var(--text-dim)"}}
  ],
  "competitiveThreat": [
    {{"label": "Salt Security", "level": "HIGH", "value": <score>}},
    {{"label": "Traceable / Harness", "level": "HIGH", "value": <score>}},
    {{"label": "Akamai / Noname", "level": "MEDIUM", "value": <score>}},
    {{"label": "StackHawk", "level": "MEDIUM", "value": <score>}},
    {{"label": "42Crunch", "level": "LOW", "value": <score>}}
  ],
  "summary": "<one sentence describing overall competitive position>"
}}

Return JSON only:
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
    console.error('[overview-scores]', err?.message);
    return NextResponse.json({ error: err?.message }, { status: 500 });
  }
}
