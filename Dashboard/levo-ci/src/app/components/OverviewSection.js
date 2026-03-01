// components/OverviewSection.js
'use client';
import { useState, useEffect } from 'react';
import { CompetitorRow, BarRow, ThreatBar, TimelineItem } from './shared';
import { cacheGet, cacheSet } from '../../lib/cache';
import { timelineData, winLossPatterns, competitorCards } from '../data';

const defaultMarketCoverage = [
  { name: "Levo.ai", value: 87, color: "var(--levo)" },
  { name: "Salt Security", value: 74, color: "var(--yellow)" },
  { name: "Traceable", value: 71, color: "var(--yellow)" },
  { name: "Akamai/Noname", value: 60, color: "var(--accent)" },
  { name: "42Crunch", value: 45, color: "var(--text-dim)" },
  { name: "StackHawk", value: 40, color: "var(--text-dim)" },
];

const defaultCompetitiveThreat = [
  { label: "Salt Security", level: "HIGH", value: 80 },
  { label: "Traceable / Harness", level: "HIGH", value: 75 },
  { label: "Akamai / Noname", level: "MEDIUM", value: 55 },
  { label: "StackHawk", level: "MEDIUM", value: 40 },
  { label: "42Crunch", level: "LOW", value: 25 },
];

export default function OverviewSection() {
  const [marketCoverage, setMarketCoverage] = useState(defaultMarketCoverage);
  const [competitiveThreat, setCompetitiveThreat] = useState(defaultCompetitiveThreat);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [source, setSource] = useState('static');

  const loadScores = async (force = false) => {
    const key = 'overview-scores';
    if (!force) {
      const cached = cacheGet(key);
      if (cached) {
        setMarketCoverage(cached.marketCoverage || defaultMarketCoverage);
        setCompetitiveThreat(cached.competitiveThreat || defaultCompetitiveThreat);
        setSource('cache');
        return;
      }
    }
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/overview-scores', { method: 'POST' });
      if (!res.ok) throw new Error('API failed');
      const data = await res.json();
      if (data.marketCoverage) setMarketCoverage(data.marketCoverage);
      if (data.competitiveThreat) setCompetitiveThreat(data.competitiveThreat);
      cacheSet(key, data);
      setSource('ai');
    } catch (err) {
      setError(err.message);
      setSource('static');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadScores(); }, []);

  return (
    <div className="section active">
      <div className="section-label">Market Snapshot</div>

      <div className="kpi-row">
        <div className="kpi-card kpi-levo">
          <div className="kpi-label">API Security Market (2026)</div>
          <div className="kpi-value">$7.4B</div>
          <div className="kpi-note">28% CAGR — Levo in fastest-growing segment</div>
        </div>
        <div className="kpi-card kpi-green">
          <div className="kpi-label">Levo Competitive Score</div>
          <div className="kpi-value">87/100</div>
          <div className="kpi-note">Strongest shift-left and runtime coverage combo</div>
        </div>
        <div className="kpi-card kpi-yellow">
          <div className="kpi-label">Key Threat Level</div>
          <div className="kpi-value">Medium</div>
          <div className="kpi-note">Salt Security and Traceable consolidating enterprise deals</div>
        </div>
        <div className="kpi-card kpi-red">
          <div className="kpi-label">Competitive Blind Spot</div>
          <div className="kpi-value">Brand</div>
          <div className="kpi-note">Lower awareness vs funded incumbents in Fortune 500</div>
        </div>
      </div>

      <div className="section-label" style={{ marginTop: '12px' }}>Five Primary Competitors</div>
      <div className="comp-cards">
        {competitorCards.map((comp, i) => (
          <CompetitorRow
            key={i}
            name={comp.name}
            isLevo={comp.isLevo}
            desc={comp.desc}
            tags={comp.tags}
            longDesc={comp.longDesc}
            stat1={comp.stat1}
            stat1Val={comp.stat1Val}
            stat2={comp.stat2}
            stat2Val={comp.stat2Val}
            badge={comp.badge}
            badgeClass={comp.badgeClass}
          />
        ))}
      </div>

      <hr className="divider" />

      <div style={{ background: 'var(--levo-dim)', border: '1px solid rgba(0,229,255,0.2)',
        borderRadius: '12px', padding: '14px 18px', marginBottom: '20px',
        fontSize: '12.5px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
        <strong style={{ color: 'var(--levo)' }}>About these scores:</strong>{' '}
        AI-generated market coverage and competitive threat assessments based on real-time analysis of each vendor's capabilities, funding, and market position.
        {source === 'cache' && ' Results are cached in your browser.'}
        {' '}Click <strong style={{ color: 'var(--text)' }}>Refresh</strong> to generate fresh AI analysis.
      </div>

      <div className="grid-2" style={{ marginTop: '4px' }}>
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <div>
              <div className="card-title" style={{ marginBottom: '0' }}>Market Coverage Score</div>
              <div className="card-sub" style={{ marginTop: '4px' }}>Based on shift-left, runtime, and AI coverage depth</div>
            </div>
            <button
              onClick={() => loadScores(true)}
              disabled={loading}
              className="tab"
              style={{
                color: 'var(--levo)',
                borderColor: 'rgba(0,229,255,0.2)',
                background: 'var(--levo-dim)',
                flexShrink: 0
              }}
            >
              {loading ? 'Refreshing...' : '↻ Refresh'}
            </button>
          </div>
          {error && <div style={{ color: 'var(--red)', fontSize: '11px', marginBottom: '8px' }}>{error}</div>}
          <div className="bar-chart">
            {marketCoverage.map((item, i) => (
              <BarRow key={i} name={item.name} value={item.value} color={item.color} />
            ))}
          </div>
        </div>
        <div className="card">
          <div className="card-title">Competitive Threat to Levo</div>
          <div className="card-sub">Deal loss risk based on overlap, funding, and sales motion</div>
          {competitiveThreat.map((item, i) => (
            <ThreatBar key={i} label={item.label} level={item.level} value={item.value} />
          ))}
        </div>
      </div>

      <hr className="divider" />

      <div className="grid-2">
        <div className="card">
          <div className="card-title">Recent Competitive Moves</div>
          <div className="card-sub">Q4 2024 through Q1 2026</div>
          <div className="timeline">
            {timelineData.map((item, i) => (
              <TimelineItem
                key={i}
                date={item.date}
                dotClass={item.dotClass}
                title={item.title}
                body={item.body}
              />
            ))}
          </div>
        </div>
        <div className="card">
          <div className="card-title">Win and Loss Patterns</div>
          <div className="card-sub">Patterns from competitive deals</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '10px', padding: '14px' }}>
              <div style={{ fontSize: '10px', fontFamily: "'DM Mono', monospace", color: 'var(--green)', marginBottom: '6px', letterSpacing: '1px' }}>LEVO WINS WHEN</div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.6' }}>{winLossPatterns.wins}</div>
            </div>
            <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '10px', padding: '14px' }}>
              <div style={{ fontSize: '10px', fontFamily: "'DM Mono', monospace", color: 'var(--red)', marginBottom: '6px', letterSpacing: '1px' }}>LEVO LOSES WHEN</div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.6' }}>{winLossPatterns.losses}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}