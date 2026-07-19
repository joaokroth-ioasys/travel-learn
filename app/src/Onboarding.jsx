import { useState } from 'react';
import './Onboarding.css';

// Country choices map onto the four "world-source" journey packs (SHARED_BASIS
// in App.jsx). City chips are the first three cities (by step) of each pack's map.
const COUNTRIES = [
  { journey: 'd2', name: 'Germany', flag: '🇩🇪', cities: [{ emoji: '✈️', name: 'Frankfurt' }, { emoji: '💼', name: 'Stuttgart' }, { emoji: '🍺', name: 'München' }] },
  { journey: 'f2', name: 'France',  flag: '🇫🇷', cities: [{ emoji: '🥐', name: 'Paris' }, { emoji: '🏰', name: 'Strasbourg' }, { emoji: '🍷', name: 'Lyon' }] },
  { journey: 'j2', name: 'Japan',   flag: '🇯🇵', cities: [{ emoji: '🌸', name: 'Sapporo' }, { emoji: '🗼', name: 'Tokyo' }, { emoji: '⛩️', name: 'Kyoto' }] },
  { journey: 'c2', name: 'Chile',   flag: '🇨🇱', cities: [{ emoji: '🏛️', name: 'Santiago' }, { emoji: '⚓', name: 'Valparaíso' }, { emoji: '🌵', name: 'Atacama' }] },
];

export default function Onboarding({ onComplete }) {
  const [selected, setSelected] = useState(null); // journey id

  const canStart = selected != null;

  return (
    <div className="onboarding-screen">
      <div className="onboarding-card">
        <div className="onboarding-traveler">🧳</div>

        <h1 className="onboarding-title">World Trip</h1>
        <p className="onboarding-subtitle">Learn a language through a real journey</p>
        <p className="onboarding-description">
          Pick a country, travel city by city, and pick up the words you'd actually need to use there.
        </p>

        <p className="onboarding-countries-title">Choose a country to start</p>

        <div className="onboarding-countries">
          {COUNTRIES.map((country) => (
            <button
              key={country.journey}
              type="button"
              className={`onboarding-country${selected === country.journey ? ' selected' : ''}`}
              onClick={() => setSelected(country.journey)}
            >
              <div className="onboarding-country-head">
                <span className="onboarding-country-flag">{country.flag}</span>
                <span className="onboarding-country-name">{country.name}</span>
              </div>
              <div className="onboarding-country-cities">
                {country.cities.map((city) => (
                  <span key={city.name} className="onboarding-city-chip">
                    {city.emoji} {city.name}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>

        <button
          className="onboarding-start-btn"
          disabled={!canStart}
          onClick={() => onComplete(selected)}
        >
          Start Journey →
        </button>
      </div>
    </div>
  );
}
