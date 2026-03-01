'use client';
import { useState } from 'react';
import OverviewSection from './components/OverviewSection';
import DesignDocSection from './components/DesignDocSection';
import BattleCardSection from './components/BattleCardSection';
import MatrixSection from './components/MatrixSection';
import InsightsSection from './components/InsightsSection';
import SWOTSection from './components/SWOTSection';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeBattle, setActiveBattle] = useState('salt');

  return (
    <div className="wrapper">
      {/* HEADER */}
      <header>
        <div className="header-left">
          <div className="logo-mark">Levo.ai</div>
          <div>
            <div className="header-title">Levo.ai <span>/</span> Competitive Intelligence</div>
            <div style={{ fontSize: '11px', color: 'var(--text-dim)', fontFamily: "'DM Mono', monospace", marginTop: '3px' }}>
              API & AI Security Platform · Market Analysis 2026
            </div>
          </div>
        </div>
        <div className="header-meta">
          <span className="live-dot"></span>Updated Feb 2026 · AI-Powered
        </div>
      </header>

      {/* TABS */}
      <div className="nav-tabs">
        {['overview', 'design-doc', 'battlecard', 'matrix', 'insights', 'swot'].map(tab => (
          <button
            key={tab}
            className={`tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === 'overview' && 'Overview'}
            {tab === 'design-doc' && 'Design Doc'}
            {tab === 'battlecard' && 'Battle Cards'}
            {tab === 'matrix' && 'Feature Matrix'}
            {tab === 'insights' && 'AI Insights'}
            {tab === 'swot' && 'SWOT'}
          </button>
        ))}
      </div>

      {/* OVERVIEW SECTION */}
      {activeTab === 'overview' && <OverviewSection />}

      {/* DESIGN DOC SECTION */}
      {activeTab === 'design-doc' && <DesignDocSection />}

      {/* BATTLECARD SECTION */}
      {activeTab === 'battlecard' && <BattleCardSection activeBattle={activeBattle} setActiveBattle={setActiveBattle} />}

      {/* MATRIX SECTION */}
      {activeTab === 'matrix' && <MatrixSection />}

      {/* INSIGHTS SECTION */}
      {activeTab === 'insights' && <InsightsSection />}

      {/* SWOT SECTION */}
      {activeTab === 'swot' && <SWOTSection />}

      {/* FOOTER */}
      <div className="dash-footer">
        <div className="dash-footer-text">Levo.ai Competitive Intelligence Dashboard</div>
      </div>
    </div>
  );
}
