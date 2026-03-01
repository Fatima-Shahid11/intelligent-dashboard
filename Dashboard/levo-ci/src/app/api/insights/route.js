import { NextResponse } from "next/server";
import { ChatGroq } from "@langchain/groq";
import { PromptTemplate } from "@langchain/core/prompts";
import { JsonOutputParser } from "@langchain/core/output_parsers";
import { RunnableSequence } from "@langchain/core/runnables";
import { COMPETITOR_CONTEXT, COMPETITOR_FOCUS } from "../../../lib/competitor-context";

const model = new ChatGroq({
  apiKey: process.env.GROQ_API_KEY,
  model: "llama-3.1-8b-instant", 
  temperature: 0.3,
  max_tokens: 1024,
});

const prompt = PromptTemplate.fromTemplate(`
You are a senior competitive intelligence analyst at Levo.ai — an API and AI security platform.

Use the detailed competitor knowledge base below to generate sharp, specific strategic insights focused on {competitor_focus}.

===== KNOWLEDGE BASE =====
{context}
==========================

Return ONLY a valid JSON object — no markdown, no code fences, no explanation, just raw JSON.

The object must have exactly two keys: "insights" and "priorities".

"insights": array of exactly 6 objects. Each object:
  - "type": one of exactly: "threat", "opportunity", "trend", "action"
  - "icon": "⚠" if threat | "↑" if opportunity | "⟳" if trend | "→" if action
  - "title": one punchy sentence (max 15 words) naming the specific competitor or dynamic
  - "text": 2-3 sentences of sharp strategic analysis. Must reference specific competitor names, specific product limitations (e.g. "full payload storage", "edge-only", "spec-dependent"), and specific Levo advantages (e.g. "eBPF discovery", "shift-left CI/CD", "MCP security")
  - "recommend": starts with "💡 Recommendation: " then one concrete action Levo sales or marketing should take within 90 days

"priorities": array of exactly 5 objects ranked 1-5 by urgency x impact:
  - "rank": number 1 to 5
  - "title": action-oriented title under 12 words
  - "desc": 2 sentences — why it matters now and what the time window is
  - "badge": exactly one of: "URGENT", "HIGH", "MEDIUM", "LONG-TERM"
  - "badgeClass": "chip-red" for URGENT or HIGH | "chip-yellow" for MEDIUM | "chip-blue" for LONG-TERM

Critical rules:
- Use all 4 insight types — mix them (at least 1 of each, 2 of the most relevant)
- Every insight must name at least one specific competitor by name
- Reference specific technical details from the knowledge base — no generic statements
- Priorities rank 1-2 must be URGENT or HIGH with immediate time pressure
- Priority rank 5 must be LONG-TERM

JSON:
`);

const parser = new JsonOutputParser();
const chain = RunnableSequence.from([prompt, model, parser]);

// ─────────────────────────────────────────────
// POST handler
// ─────────────────────────────────────────────
export async function POST(req) {
  try {
    const body = await req.json();
    const competitor = body.competitor ?? "all";
    const competitor_focus = COMPETITOR_FOCUS[competitor] ?? COMPETITOR_FOCUS.all;

    const result = await chain.invoke({
      context: COMPETITOR_CONTEXT,
      competitor_focus,
    });

    return NextResponse.json(result);
  } catch (err) {
    console.error("[insights route error]", err);
    return NextResponse.json(
      { error: err?.message ?? "Unknown error" },
      { status: 500 }
    );
  }
}