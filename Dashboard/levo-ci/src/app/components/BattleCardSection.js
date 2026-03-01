'use client';

import { useState, useEffect } from 'react';
import { battleData } from "../data";
import { cacheGet, cacheSet, cacheClear } from '../../lib/cache';

const SCORES_CACHE_KEY = 'levo_ci_scores';

// ─────────────────────────────────────────────────────────────────────
// SCORE VISUALS
// ─────────────────────────────────────────────────────────────────────
const DIMENSIONS = [
  'Shift-Left / CI/CD',
  'Runtime Protection',
  'API Discovery',
  'AI / LLM Security',
  'Privacy & Compliance',
  'Developer Experience',
];

function ScoreRing({ value, color, size = 56 }) {
  const r      = (size - 8) / 2;
  const circ   = 2 * Math.PI * r;
  const filled = (value / 100) * circ;
  return (
    <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="var(--surface2)" strokeWidth={5} />
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={5}
        strokeDasharray={`${filled} ${circ}`} strokeLinecap="round"
        style={{ transition: 'stroke-dasharray 0.6s ease' }} />
      <text x={size/2} y={size/2} textAnchor="middle" dominantBaseline="central"
        fill="var(--text)" fontSize={size * 0.22} fontWeight="700"
        fontFamily="'DM Mono', monospace"
        style={{ transform: `rotate(90deg)`, transformOrigin: `${size/2}px ${size/2}px` }}>
        {value}
      </text>
    </svg>
  );
}

function DimBar({ label, levoVal, compVal, compColor }) {
  return (
    <div style={{ marginBottom: '10px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px',
        fontFamily: "'DM Mono', monospace", color: 'var(--text-dim)', marginBottom: '4px' }}>
        <span>{label}</span>
        <span>
          <span style={{ color: 'var(--levo)' }}>{levoVal}</span>
          {' · '}
          <span style={{ color: compColor }}>{compVal}</span>
        </span>
      </div>
      <div style={{ position: 'relative', height: '6px', background: 'var(--surface2)', borderRadius: '99px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: `${levoVal}%`,
          background: 'rgba(0,229,255,0.15)', borderRadius: '99px' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: `${compVal}%`,
          background: compColor, borderRadius: '99px', opacity: 0.85, transition: 'width 0.5s ease' }} />
      </div>
    </div>
  );
}

function CompetitorCard({ competitor, levo }) {
  const avgComp   = Math.round(competitor.scores.reduce((a, b) => a + b, 0) / competitor.scores.length);
  const avgLevo   = Math.round(levo.scores.reduce((a, b) => a + b, 0) / levo.scores.length);
  const delta     = avgLevo - avgComp;
  const chipColor  = delta >= 40 ? 'var(--green)' : delta >= 20 ? 'var(--levo)' : 'var(--yellow)';
  const chipBg     = delta >= 40 ? 'rgba(34,197,94,0.1)' : delta >= 20 ? 'var(--levo-dim)' : 'rgba(234,179,8,0.1)';
  const chipBorder = delta >= 40 ? 'rgba(34,197,94,0.25)' : delta >= 20 ? 'rgba(0,229,255,0.2)' : 'rgba(234,179,8,0.25)';

  return (
    <div style={{ background: 'var(--surface)', border: '1px solid var(--border)',
      borderRadius: '14px', padding: '18px 20px', transition: 'border-color 0.2s' }}
      onMouseEnter={e => e.currentTarget.style.borderColor = competitor.color + '55'}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
        <div>
          <div style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text)', marginBottom: '3px' }}>
            {competitor.name}
          </div>
          <div style={{ fontSize: '11px', color: 'var(--text-dim)', lineHeight: '1.4', maxWidth: '195px' }}>
            {competitor.summary}
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
          <ScoreRing value={avgComp} color={competitor.color} size={52} />
          <div style={{ fontSize: '9px', fontFamily: "'DM Mono', monospace", color: 'var(--text-dim)' }}>avg score</div>
        </div>
      </div>

      <div style={{ marginBottom: '12px' }}>
        <span style={{ fontSize: '10px', fontFamily: "'DM Mono', monospace",
          color: chipColor, background: chipBg, border: `1px solid ${chipBorder}`,
          padding: '2px 8px', borderRadius: '20px' }}>
          Levo +{delta} avg advantage
        </span>
      </div>

      {DIMENSIONS.map((dim, i) => (
        <DimBar key={dim} label={dim}
          levoVal={levo.scores[i]}
          compVal={competitor.scores[i]}
          compColor={competitor.color} />
      ))}
    </div>
  );
}

function SkeletonCard() {
  return (
    <div style={{ background: 'var(--surface)', border: '1px solid var(--border)',
      borderRadius: '14px', padding: '18px 20px', opacity: 0.4, minHeight: '260px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
        <div style={{ flex: 1 }}>
          <div style={{ height: '13px', width: '55%', background: 'var(--surface2)', borderRadius: '4px', marginBottom: '8px' }} />
          <div style={{ height: '10px', width: '85%', background: 'var(--surface2)', borderRadius: '4px' }} />
        </div>
        <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'var(--surface2)' }} />
      </div>
      {[100, 88, 94, 76, 90, 82].map((w, i) => (
        <div key={i} style={{ marginBottom: '10px' }}>
          <div style={{ height: '9px', width: `${w}%`, background: 'var(--surface2)', borderRadius: '4px', marginBottom: '5px' }} />
          <div style={{ height: '6px', width: '100%', background: 'var(--surface2)', borderRadius: '99px' }} />
        </div>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────
// SCORES TAB
// load from cache → if nothing cached, fetch from API → cache result
// Refresh: clear cache → fetch fresh → cache again
// ─────────────────────────────────────────────────────────────────────
function ScoresTab() {
  const [data, setData]       = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState(null);
  const [source, setSource]   = useState(null); // 'cache' | 'api'

  const fetchFromAPI = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/scores', { method: 'POST' });
      if (!res.ok) { const d = await res.json(); throw new Error(d.error ?? `HTTP ${res.status}`); }
      const d = await res.json();
      cacheSet(SCORES_CACHE_KEY, d);
      setData(d);
      setSource('api');
    } catch (e) {
      setError(e?.message ?? 'Failed to load scores');
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = () => {
    cacheClear(SCORES_CACHE_KEY);
    fetchFromAPI();
  };

  // On mount: try cache first, only call API if nothing cached
  useEffect(() => {
    const cached = cacheGet(SCORES_CACHE_KEY);
    if (cached) {
      setData(cached);
      setSource('cache');
    } else {
      fetchFromAPI();
    }
  }, []);

  return (
    <div>
      <div style={{ background: 'var(--levo-dim)', border: '1px solid rgba(0,229,255,0.2)',
        borderRadius: '12px', padding: '14px 18px', marginBottom: '24px',
        fontSize: '12.5px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
        <strong style={{ color: 'var(--levo)' }}>About these scores:</strong>{' '}
        AI-generated competitive scores across 6 dimensions comparing Levo against each competitor.
        {source === 'cache' && ' Results are cached in your browser.'}
        {' '}Click <strong style={{ color: 'var(--text)' }}>Refresh</strong> to generate fresh AI analysis.
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end',
        flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
        <button onClick={handleRefresh} disabled={loading} className="tab"
          style={{ color: 'var(--levo)', borderColor: 'rgba(0,229,255,0.2)', background: 'var(--levo-dim)', flexShrink: 0 }}>
          {loading ? 'Scoring...' : '↻ Refresh'}
        </button>
      </div>

      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '18px' }}>
        {[['rgba(0,229,255,0.3)', 'Levo.ai (reference)'], ['var(--text-dim)', 'Competitor score']].map(([bg, label]) => (
          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '6px',
            fontSize: '10px', fontFamily: "'DM Mono', monospace", color: 'var(--text-dim)' }}>
            <div style={{ width: '20px', height: '5px', background: bg, borderRadius: '99px' }} />
            {label}
          </div>
        ))}
      </div>

      {error && (
        <div style={{ background: 'var(--red-dim)', border: '1px solid rgba(255,77,106,0.3)',
          borderRadius: '10px', padding: '12px 16px', marginBottom: '16px', fontSize: '12px', color: 'var(--red)' }}>
          ⚠️ {error}
          {error.includes('429') && (
            <span style={{ display: 'block', fontSize: '11px', color: 'var(--text-dim)', marginTop: '3px' }}>
              Groq free tier limit reached (100k tokens/day). Try again tomorrow or upgrade at console.groq.com.
            </span>
          )}
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '14px' }}>
        {loading || !data
          ? Array.from({ length: 5 }).map((_, i) => <SkeletonCard key={i} />)
          : data.competitors.map(comp => (
              <CompetitorCard key={comp.key} competitor={comp} levo={data.levo} />
            ))
        }
      </div>
    </div>
  );
}

function BattleCardsTab({ activeBattle, setActiveBattle }) {
  const current = battleData[activeBattle] ?? battleData.salt;
  return (
    <div className="battlecard">
      <div className="bc-header">
        <div style={{ fontFamily: "'Fraunces', serif", fontSize: '16px', fontWeight: '600' }}>
          Levo.ai vs. <span style={{ color: 'var(--levo)' }}>{current.name}</span>
        </div>
        <div className="bc-competitor-select">
          {Object.entries(battleData).map(([key, d]) => (
            <button key={key} className={`bc-btn${activeBattle === key ? ' active' : ''}`}
              onClick={() => setActiveBattle(key)}>{d.name}</button>
          ))}
        </div>
      </div>
      <div className="bc-body">
        <div className="bc-grid">
          <div className="bc-panel win">
            <div className="bc-panel-title">✓ Win Themes — When to Push Hard</div>
            <ul className="bc-list">{current.win.map((item, i) => <li key={i}>{item}</li>)}</ul>
          </div>
          <div className="bc-panel lose">
            <div className="bc-panel-title">✗ Loss Scenarios — Know When to Walk</div>
            <ul className="bc-list">{current.lose.map((item, i) => <li key={i}>{item}</li>)}</ul>
          </div>
          <div className="bc-panel trap">
            <div className="bc-panel-title">⚠ Trap Questions and Counters</div>
            <ul className="bc-list">{current.traps.map((item, i) => <li key={i}>{item}</li>)}</ul>
          </div>
          <div className="bc-panel proof">
            <div className="bc-panel-title">◎ Social Proof and Evidence</div>
            <ul className="bc-list">{current.proof.map((item, i) => <li key={i}>{item}</li>)}</ul>
          </div>
        </div>
        <div className="bc-objections">
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', letterSpacing: '2px',
            color: 'var(--text-dim)', textTransform: 'uppercase', marginBottom: '14px' }}>
            Objection Handling Scripts
          </div>
          {current.objections.map((obj, i) => (
            <div key={i} className="bc-obj-row">
              <div className="bc-obj-q">💬 "{obj.q}"</div>
              <div className="bc-obj-a">{obj.a}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function BattleCardSection({ activeBattle, setActiveBattle }) {
  const [innerTab, setInnerTab] = useState('scores');
  return (
    <div className="section active">
      <div className="section-label">Per-Competitor Battle Cards · Ready for Sales Calls</div>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        {[['scores', '📊 Competitive Scores'], ['cards', '📋 Battle Cards']].map(([key, label]) => (
          <button key={key} onClick={() => setInnerTab(key)}
            className={`bc-btn${innerTab === key ? ' active' : ''}`}
            style={{ fontSize: '12px', padding: '7px 16px' }}>
            {label}
          </button>
        ))}
      </div>
      {innerTab === 'cards'
        ? <BattleCardsTab activeBattle={activeBattle} setActiveBattle={setActiveBattle} />
        : <ScoresTab />
      }
    </div>
  );
}