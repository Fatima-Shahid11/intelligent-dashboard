export function CompetitorRow({ name, desc, tags, longDesc, stat1, stat1Val, stat2, stat2Val, badge, badgeClass, isLevo = false }) {
  return (
    <div className={`comp-row${isLevo ? ' levo-row' : ''}`}>
      <div>
        <div className={`comp-name${isLevo ? ' levo-glow-text' : ''}`}>{name}</div>
        <div className="tag-row">
          {tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
        </div>
      </div>
      <div className="comp-desc">{longDesc}</div>
      <div>
        <div className="comp-stat-label">{stat1}</div>
        <div className="comp-stat-val">{stat1Val}</div>
      </div>
      <div>
        <div className="comp-stat-label">{stat2}</div>
        <div className="comp-stat-val">{stat2Val}</div>
      </div>
      <div><span className={`stat-chip ${badgeClass}`}>{badge}</span></div>
    </div>
  );
}

export function BarRow({ name, value, color }) {
  return (
    <div className="bar-row">
      <div className="bar-name">{name}</div>
      <div className="bar-track">
        <div className="bar-fill" style={{ width: `${value}%`, background: color }} />
      </div>
      <div className="bar-val" style={{ color }}>{value}</div>
    </div>
  );
}

export function ThreatBar({ label, level, value }) {
  const color =
    level === 'HIGH'   ? 'var(--red)'    :
    level === 'MEDIUM' ? 'var(--yellow)' :
    'var(--green)';

  return (
    <div className="threat-bar-wrap">
      <div className="threat-bar-label">
        <span>{label}</span>
        <span style={{ color }}>{level}</span>
      </div>
      <div className="threat-bar-track">
        <div className="threat-bar-fill" style={{ width: `${value}%`, background: color }} />
      </div>
    </div>
  );
}

export function TimelineItem({ date, title, body, dotClass }) {
  return (
    <div className="tl-item">
      <div className={`tl-dot ${dotClass}`} />
      <div className="tl-date">{date}</div>
      <div className="tl-title">{title}</div>
      <div className="tl-body">{body}</div>
    </div>
  );
}

export function DotIndicator({ value }) {
  if (value === '●') return <span className="dot-full">●</span>;
  if (value === '◑') return <span className="dot-half">◑</span>;
  if (value === '○') return <span className="dot-none">○</span>;
  return <span style={{ color: 'var(--green)', fontSize: '12px', fontWeight: '600' }}>{value}</span>;
}

// components/shared.js

export function InsightCard({ insight }) {
  const typeClass =
    insight.type === 'threat'      ? 'threat'      :
    insight.type === 'opportunity' ? 'opportunity' :
    insight.type === 'trend'       ? 'trend'        :
    'action';

  const typeLabel =
    insight.type === 'threat'      ? 'STRATEGIC THREAT'   :
    insight.type === 'opportunity' ? 'MARKET OPPORTUNITY' :
    insight.type === 'trend'       ? 'MARKET TREND'       :
    'TACTICAL ACTION';

  return (
    <div className="insight-card">
      <div className={`insight-type ${typeClass}`}>
        {insight.icon} {typeLabel}
      </div>
      <div className="insight-text">
        <strong>{insight.title}</strong>
      </div>
      <div className="insight-text">{insight.text}</div>
      <div className="insight-recommend">{insight.recommend}</div>
    </div>
  );
}

export function PriorityRow({ rank, title, desc, badge, badgeClass }) {
  const scoreClass =
    rank <= 2 ? 'sb-high' :
    rank <= 4 ? 'sb-med'  :
    'sb-low';

  return (
    <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
      <div className={`score-badge ${scoreClass}`}>{rank}</div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text)', marginBottom: '4px' }}>
          {title}
        </div>
        <div style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: '1.5' }}>
          {desc}
        </div>
      </div>
      <span className={`stat-chip ${badgeClass}`} style={{ flexShrink: 0 }}>
        {badge}
      </span>
    </div>
  );
}

export function SWOTCell({ label, items }) {
  return (
    <div className="swot-cell">
      <div className="swot-label">{label}</div>
      <ul className="swot-list">
        {items.map((item, idx) => <li key={idx}>{item}</li>)}
      </ul>
    </div>
  );
}