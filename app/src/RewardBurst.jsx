import { useEffect } from 'react';
import './RewardBurst.css';

// Transient celebration overlay for XP / level-up / streak milestones.
// Mounted once at the app root; `burst` (keyed by a fresh id) drives it, and it
// clears itself after a beat via onDone. A plain floating "+XP" for routine
// gains; a centered confetti card when something bigger lands.
export default function RewardBurst({ burst, onDone }) {
  useEffect(() => {
    if (!burst) return;
    const big = burst.leveledUp || burst.streakMilestone || burst.stampMilestone === 'all';
    const t = setTimeout(onDone, big ? 2200 : 1400);
    return () => clearTimeout(t);
  }, [burst, onDone]);

  if (!burst) return null;
  const { xp, leveledUp, level, streakMilestone, perfect, stamp, stampMilestone } = burst;
  const showCard = leveledUp || streakMilestone || stampMilestone === 'all';

  return (
    <div className="reward-burst" aria-live="polite">
      {xp > 0 && (
        <div className="reward-xp">
          +{xp} XP
          {perfect && <span className="reward-xp-tag">Perfect! ⭐</span>}
        </div>
      )}
      {stamp && (
        <div className="reward-stamp">
          🛂 {stamp} stamped!
          {stampMilestone === 'half' && <span className="reward-xp-tag">Halfway there!</span>}
        </div>
      )}
      {showCard && (
        <div className="reward-card">
          <span className="confetti" aria-hidden="true">
            {Array.from({ length: 12 }, (_, i) => (
              <span key={i} className={`confetti-dot confetti-dot--${i % 4}`} style={{ '--i': i }} />
            ))}
          </span>
          {leveledUp && (
            <>
              <p className="reward-card-title">Level {level}! ⭐</p>
              {/* ponytail: levels celebrate but don't gate content yet — hook a
                  reward table in here when a level should unlock something. */}
              <p className="reward-card-sub">Keep going!</p>
            </>
          )}
          {streakMilestone && (
            <>
              <p className="reward-card-title">🔥 {streakMilestone}-day streak!</p>
              <p className="reward-card-sub">On a roll.</p>
            </>
          )}
          {!leveledUp && !streakMilestone && stampMilestone === 'all' && (
            <>
              <p className="reward-card-title">🌍 Country complete!</p>
              <p className="reward-card-sub">Every city stamped.</p>
            </>
          )}
        </div>
      )}
    </div>
  );
}
