'use client';

import { useState, useEffect } from 'react';
import { DotIndicator } from './shared';
import { capabilities as staticCapabilities } from '../data';
import { cacheGet, cacheSet, cacheClear } from '../../lib/cache';

const MATRIX_CACHE_KEY = 'levo_ci_matrix';

export default function MatrixSection() {
  const [capabilities, setCapabilities] = useState(staticCapabilities);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [source, setSource] = useState('static');

  const fetchFromAPI = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/matrix', { method: 'POST' });
      if (!res.ok) { const d = await res.json(); throw new Error(d.error ?? `HTTP ${res.status}`); }
      const d = await res.json();
      cacheSet(MATRIX_CACHE_KEY, d.capabilities);
      setCapabilities(d.capabilities);
      setSource('api');
    } catch (e) {
      setError(e?.message ?? 'Failed to load matrix');
      setCapabilities(staticCapabilities);
      setSource('static');
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = () => {
    cacheClear(MATRIX_CACHE_KEY);
    fetchFromAPI();
  };

  const handleReset = () => {
    cacheClear(MATRIX_CACHE_KEY);
    setCapabilities(staticCapabilities);
    setSource('static');
  };

  useEffect(() => {
    const cached = cacheGet(MATRIX_CACHE_KEY);
    if (cached) {
      setCapabilities(cached);
      setSource('cache');
    }
  }, []);

  return (
    <div className="section active">
      <div className="section-label">Capability Comparison · 15 Dimensions</div>

      <div style={{ background: 'var(--levo-dim)', border: '1px solid rgba(0,229,255,0.2)',
        borderRadius: '12px', padding: '14px 18px', marginBottom: '24px',
        fontSize: '12.5px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
        <strong style={{ color: 'var(--levo)' }}>About this matrix:</strong>{' '}
        Side-by-side capability comparison across 15 dimensions with color-coded indicators.
        {source === 'static' && ' Click '}
        {source === 'static' && <strong style={{ color: 'var(--text)' }}>Generate Through AI</strong>}
        {source === 'static' && ' for AI-powered analysis.'}
        {source === 'cache' && ' Results are cached in your browser. Click '}
        {source === 'cache' && <strong style={{ color: 'var(--text)' }}>Refresh</strong>}
        {source === 'cache' && ' to regenerate.'}
        {source === 'api' && ' Showing fresh AI-generated analysis.'}
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end',
        flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
        {source !== 'static' && !loading && (
          <button onClick={handleReset} className="tab"
            style={{ color: 'var(--text-muted)', borderColor: 'var(--border)', fontSize: '11px' }}>
            Reset
          </button>
        )}
        <button onClick={handleRefresh} disabled={loading} className="tab"
          style={{ color: 'var(--levo)', borderColor: 'rgba(0,229,255,0.2)', background: 'var(--levo-dim)' }}>
          {loading ? 'Analyzing...' : source === 'static' ? '✦ Generate Through AI' : '↻ Refresh'}
        </button>
      </div>

      {error && (
        <div style={{ background: 'var(--red-dim)', border: '1px solid rgba(255,77,106,0.3)',
          borderRadius: '10px', padding: '12px 16px', marginBottom: '16px', fontSize: '12px', color: 'var(--red)' }}>
          ⚠️ {error}
        </div>
      )}

      <div className="card">
        <div style={{ overflowX: 'auto' }}>
          <table className="matrix-table">
            <thead>
              <tr>
                <th>Capability</th>
                <th>Levo.ai</th>
                <th>Salt Security</th>
                <th>Traceable</th>
                <th>Akamai/Noname</th>
                <th>42Crunch</th>
                <th>StackHawk</th>
              </tr>
            </thead>
            <tbody>
              {capabilities.map((cap, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'levo-row-t' : ''}>
                  <td>{cap.name}</td>
                  <td><DotIndicator value={cap.levo} /></td>
                  <td><DotIndicator value={cap.salt} /></td>
                  <td><DotIndicator value={cap.traceable} /></td>
                  <td><DotIndicator value={cap.akamai} /></td>
                  <td><DotIndicator value={cap.crunch} /></td>
                  <td><DotIndicator value={cap.hawk} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ display: 'flex', gap: '20px', marginTop: '16px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--text-dim)', fontFamily: "'DM Mono', monospace" }}><span className="dot-full" style={{ fontSize: '14px' }}>●</span> Full Support</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--text-dim)', fontFamily: "'DM Mono', monospace" }}><span className="dot-half" style={{ fontSize: '14px' }}>◑</span> Partial</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--text-dim)', fontFamily: "'DM Mono', monospace" }}><span className="dot-none" style={{ fontSize: '14px' }}>○</span> Not Available</div>
        </div>
      </div>
    </div>
  );
}
