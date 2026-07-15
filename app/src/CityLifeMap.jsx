import './CityLifeMap.css';

export default function CityLifeMap({ locations, routeDone, perfect, onSelect, mapImage = '/city-life-map.jpg' }) {
  const journeyPoints = locations
    .map((loc) => `${(loc.pos.x / 100) * 360},${(loc.pos.y / 100) * 460}`)
    .join(' ');

  return (
    <div className="cl-map">
      <svg className="cl-map__art" viewBox="0 0 360 460" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <image href={mapImage} x="0" y="0" width="360" height="460" preserveAspectRatio="xMidYMid slice" />
        <polyline
          className="journey-path"
          points={journeyPoints}
          fill="none"
          stroke="rgba(255,255,255,0.7)"
          strokeWidth="1.5"
          strokeDasharray="6 4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {locations.map((loc, i) => {
        const done = loc.stages.every((s) => routeDone?.has(s.id));
        const gold = done && loc.stages.every((s) => perfect?.has(s.id));
        return (
          <button
            key={loc.id}
            className={`cl-pin${done ? ' cl-pin--done' : ''}${gold ? ' cl-pin--gold' : ''}`}
            style={{ left: `${loc.pos.x}%`, top: `${loc.pos.y}%`, '--accent': loc.accent }}
            onClick={() => onSelect(loc.id)}
            aria-label={`${loc.name}${gold ? ', mastered' : done ? ', explored' : ''}`}
          >
            <span className="cl-pin__badge">
              <span className="cl-pin__icon">{loc.icon}</span>
              {done  && <span className="cl-pin__check">{gold ? '★' : '✓'}</span>}
              {!done && <span className="cl-pin__seq">{i + 1}</span>}
            </span>
            <span className="cl-pin__label">{loc.name}</span>
          </button>
        );
      })}
    </div>
  );
}
