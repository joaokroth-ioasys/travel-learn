import './Onboarding.css';

const CITY_BADGES = [
  { icon: '✈️', name: 'Frankfurt' },
  { icon: '💼', name: 'Stuttgart' },
  { icon: '🍺', name: 'München' },
  { icon: '🏛️', name: 'Berlin' },
];

export default function Onboarding({ onComplete }) {
  return (
    <div className="onboarding-screen">
      <div className="onboarding-card">
        <div className="onboarding-traveler">🧳</div>

        <h1 className="onboarding-title">Deutsch Reise</h1>
        <p className="onboarding-subtitle">Your German journey starts here</p>
        <p className="onboarding-description">
          Travel through Germany, learn the language, collect city stamps.
        </p>

        <div className="onboarding-cities">
          {CITY_BADGES.map((city) => (
            <span key={city.name} className="onboarding-city-badge">
              {city.icon} {city.name}
            </span>
          ))}
        </div>

        <button className="onboarding-start-btn" onClick={onComplete}>
          Start Journey →
        </button>
      </div>
    </div>
  );
}
