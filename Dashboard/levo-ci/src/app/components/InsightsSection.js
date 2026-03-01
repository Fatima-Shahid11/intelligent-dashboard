'use client';

import { useState, useEffect } from 'react';
import { InsightCard, PriorityRow } from './shared';
import { COMPETITOR_LABELS } from '../../lib/competitor-context';
import { cacheGet, cacheSet, cacheClear } from '../../lib/cache';
import { staticInsights } from '../data';

const cacheKey = (filter) => `levo_ci_insights_${filter}`;

function SkeletonInsightCard() {
  return (
    <div className="insight-card" style={{ opacity: 0.4 }}>
      <div style={{ height: '10px', width: '130px', background: 'var(--surface2)', borderRadius: '4px', marginBottom: '12px' }} />
      <div style={{ height: '14px', width: '88%', background: 'var(--surface2)', borderRadius: '4px', marginBottom: '10px' }} />
      <div style={{ height: '12px', width: '100%', background: 'var(--surface2)', borderRadius: '4px', marginBottom: '6px' }} />
      <div style={{ height: '12px', width: '80%', background: 'var(--surface2)', borderRadius: '4px', marginBottom: '18px' }} />
      <div style={{ borderTop: '1px solid var(--border)', paddingTop: '10px' }}>
        <div style={{ height: '12px', width: '95%', background: 'var(--surface2)', borderRadius: '4px' }} />
      </div>
    </div>
  );
}

function SkeletonPriorityRow() {
  return (
    <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', opacity: 0.4 }}>
      <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--surface2)', flexShrink: 0 }} />
      <div style={{ flex: 1 }}>
        <div style={{ height: '13px', width: '55%', background: 'var(--surface2)', borderRadius: '4px', marginBottom: '7px' }} />
        <div style={{ height: '11px', width: '88%', background: 'var(--surface2)', borderRadius: '4px' }} />
      </div>
      <div style={{ width: '64px', height: '22px', background: 'var(--surface2)', borderRadius: '20px', flexShrink: 0 }} />
    </div>
  );
}

export default function AIInsights() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [perFilter, setPerFilter]       = useState({});   // { [filterKey]: { insights, priorities, source } }
  const [loading, setLoading]           = useState(false);
  const [error, setError]               = useState(null);

  const current = perFilter[activeFilter];
  const insights   = current?.insights   ?? [];
  const priorities = current?.priorities ?? [];
  const source     = current?.source;     // 'cache' | 'api' | 'static'

  // Fetch from API, cache result, store in state
  const fetchFromAPI = async (filter) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/insights', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ competitor: filter }),
      });
      if (!res.ok) { const d = await res.json(); throw new Error(d.error ?? `HTTP ${res.status}`); }
      const d = await res.json();
      cacheSet(cacheKey(filter), d);
      setPerFilter(prev => ({ ...prev, [filter]: { ...d, source: 'api' } }));
    } catch (e) {
      setError(e?.message ?? 'Failed to load insights');
      // Fall back to static data so the UI is never empty
      const fallback = staticInsights[filter] ?? staticInsights.all;
      setPerFilter(prev => ({ ...prev, [filter]: { ...fallback, source: 'static' } }));
    } finally {
      setLoading(false);
    }
  };

  // Load a filter: cache → API → static fallback
  const loadFilter = (filter) => {
    setActiveFilter(filter);
    setError(null);

    // Already loaded in this session — show instantly
    if (perFilter[filter]) return;

    // Try localStorage cache
    const cached = cacheGet(cacheKey(filter));
    if (cached) {
      setPerFilter(prev => ({ ...prev, [filter]: { ...cached, source: 'cache' } }));
      return;
    }

    // Nothing cached — call the API
    fetchFromAPI(filter);
  };

  // Refresh: clear cache for this filter and re-fetch
  const handleRefresh = () => {
    cacheClear(cacheKey(activeFilter));
    setPerFilter(prev => { const n = { ...prev }; delete n[activeFilter]; return n; });
    fetchFromAPI(activeFilter);
  };

  // Load default filter on mount
  useEffect(() => { loadFilter('all'); }, []);

  const sourceLabel =
    loading          ? '' :
    source === 'cache'  ? '✦ Cached · click Refresh to regenerate' :
    source === 'api'    ? '✦ Fresh AI analysis' :
    source === 'static' ? '⚠ Showing pre-generated data (API unavailable)' :
    '';

  return (
    <div className="section active">
      <div className="section-label">AI-Synthesized Strategic Intelligence</div>

      <div style={{ background: 'var(--levo-dim)', border: '1px solid rgba(0,229,255,0.2)',
        borderRadius: '12px', padding: '14px 18px', marginBottom: '24px',
        fontSize: '12.5px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
        <strong style={{ color: 'var(--levo)' }}>About these insights:</strong>{' '}
        Analysis synthesized from competitor positioning data, market signals, and Levo capability profile.
        Results are cached in your browser.
        Click <strong style={{ color: 'var(--text)' }}>Refresh</strong> to generate fresh AI analysis.
      </div>

      {/* Filter tabs + refresh */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: '12px', marginBottom: '8px' }}>
        <div className="nav-tabs" style={{ marginBottom: 0 }}>
          {Object.entries(COMPETITOR_LABELS).map(([key, label]) => (
            <button key={key}
              className={`tab${activeFilter === key ? ' active' : ''}`}
              onClick={() => loadFilter(key)}>
              {label}
              {/* dot indicator: cached = green, loaded this session = cyan */}
              {perFilter[key] && activeFilter !== key && (
                <span style={{
                  display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%',
                  background: perFilter[key].source === 'cache' ? 'var(--green)' : 'var(--levo)',
                  marginLeft: '5px', verticalAlign: 'middle',
                }} />
              )}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
          <span style={{ fontSize: '10px', fontFamily: "'DM Mono', monospace", color: 'var(--text-dim)' }}>
            {sourceLabel}
          </span>
          <button onClick={handleRefresh} disabled={loading} className="tab"
            style={{ color: 'var(--levo)', borderColor: 'rgba(0,229,255,0.2)', background: 'var(--levo-dim)' }}>
            {loading ? 'Analyzing...' : '↻ Refresh'}
          </button>
        </div>
      </div>

      {error && (
        <div style={{ background: 'var(--red-dim)', border: '1px solid rgba(255,77,106,0.3)',
          borderRadius: '12px', padding: '14px 18px', marginBottom: '20px',
          fontSize: '12.5px', color: 'var(--red)', lineHeight: 1.5 }}>
          ⚠️ {error}
          {error.includes('429') && (
            <span style={{ display: 'block', marginTop: '4px', fontSize: '11px', color: 'var(--text-dim)' }}>
              Groq free tier limit reached (100k tokens/day). Showing pre-generated data. Try again tomorrow.
            </span>
          )}
        </div>
      )}

      {/* Insight cards */}
      <div className="grid-2" style={{ marginBottom: '20px' }}>
        {loading
          ? Array.from({ length: 6 }).map((_, i) => <SkeletonInsightCard key={i} />)
          : insights.map((insight, idx) => <InsightCard key={idx} insight={insight} />)
        }
      </div>

      {/* Priorities */}
      <div className="card">
        <div className="card-title">Strategic Priorities for 2026</div>
        <div className="card-sub">Ranked by urgency × impact · Based on competitive landscape analysis</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '8px' }}>
          {loading
            ? Array.from({ length: 5 }).map((_, i) => <SkeletonPriorityRow key={i} />)
            : priorities.map(p => (
                <PriorityRow key={p.rank} rank={p.rank} title={p.title}
                  desc={p.desc} badge={p.badge} badgeClass={p.badgeClass} />
              ))
          }
        </div>
      </div>
    </div>
  );
}