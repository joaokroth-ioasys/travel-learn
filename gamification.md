# Gamification — Map Journey Upgrades

Turned the map from a decorated scoreboard into a game board that pulls the player
forward. Four additions, each ships independently:

1. **Path gating & unlocking** — cities unlock one step at a time; only the "current" stop pulses.
2. **Continue CTA** — a compact "Next city: {city}" pill so you always know where to go.
3. **Reward juice** — floating "+XP" on every gain and a confetti card on level-up.
4. **Streak that rewards** — grace-freeze, milestone celebrations, and an at-risk nudge.

All new motion respects `prefers-reduced-motion`. Gating/streak logic is covered by
`app/smoke-test.mjs`.

---

## 1. Path gating & unlocking

**Why:** every city used to be open and clickable from the start, so there was no sense
of a journey. Now the map is a linear path you earn your way along.

**How it works**
- New pure helper `getCityStatus(cities, city, completedLessons)` in `app/src/mapUtil.js`
  returns one of:
  - `done` — every lesson in the city complete
  - `current` — the next unfinished stop (the one to play)
  - `locked` — a later stop whose predecessor isn't done yet
  - `open` — never gated (preview/link dots and map-only cities with no lessons)
- Order comes from each city's existing `step` field (`journeys/*/map.js`); completion is
  derived from `completedLessons`. **No new storage.**

**On the map** (`app/src/MapScreen.jsx` + `MapScreen.css`)
- **Locked** cities render greyed out (`grayscale`, reduced opacity), show a 🔒 in the
  step-number slot, and aren't clickable (no `role="button"`, no hover pop).
- **Current** city is the *only* one that pulses (the `glow-pulse` ring moved from every
  dot to `.city-group--current`), so attention has a single target.
- **Done** cities keep the existing ✓ / 🛂 / gold-star treatment.
- A solid amber overlay polyline (`.journey-path--done`) traces the route travelled so far,
  layered over the faint dashed full-route line.

**Deliberately skipped:** cross-journey gating and non-linear branch paths — journeys are
linear by `step`. Marked with a `ponytail:` comment as the upgrade point if a branch is ever needed.

---

## 2. Continue CTA

**Why:** landing on the map gave no "what do I tap next?" signal.

**How it works** (`app/src/MapScreen.jsx` + `MapScreen.css`)
- A compact pill button reading **"Next city: {city}"** that opens the current stop (reuses
  the existing `onCitySelect` handler).
- When the whole journey is done it becomes a non-interactive **"Journey complete 🎉"**.
- Styling: `position: absolute`, pinned bottom-right over the map (above the progress strip),
  capped at `max-width: 45%`, with ellipsis for long city names.

Rides entirely on Phase 1's `current` computation — near-zero extra logic.

---

## 3. Reward juice (floating +XP & level-up)

**Why:** XP gains silently mutated a counter — no payoff moment. Levels were computed
(`Math.floor(xp/200)+1`) but never celebrated.

**How it works**
- New component `app/src/RewardBurst.jsx` (+ `RewardBurst.css`), mounted once at the app
  root so it shows on any screen (lesson completion screen, daily, city life).
- A single `awardXp(amount, extra)` helper in `app/src/App.jsx` now feeds **all** XP sources
  (lessons, route stages, daily challenge). It:
  - persists XP,
  - detects a 200-XP level crossing (`leveledUp`),
  - fires the burst.
- The burst renders:
  - a floating **"+{amount} XP"** that rises and fades for routine gains,
  - a confetti **"Level N!"** card (confetti reused from the passport completion effect)
    when a level boundary is crossed.
- Auto-clears after ~1.2s (routine) / ~2.2s (level-up).

**Deliberately skipped:** sound, haptics, and per-level content unlocks. A `ponytail:` note
in `RewardBurst.jsx` marks the level-up card as the hook point for an unlock table later.

---

## 4. Streak that rewards, not just threatens

**Why:** the 🔥 streak only counted up and reset silently — high anxiety, zero payoff.

**How it works** (`app/src/progress.js` + `App.jsx` + `MapScreen.jsx`)
- New `advanceStreak(streak, today)` replaces the inline increment:
  - **same day** → unchanged (no double-count),
  - **consecutive day** → +1,
  - **2-day gap with a banked freeze** → streak kept, freeze consumed,
  - **otherwise** → reset to 1.
  - A freeze is banked once you reach a 7-day run (`freezeUsedOn` tracks the last spend);
    stored inside the existing streak object — no schema change.
- Supporting date helper `daysBetween(a, b)` (parses as UTC midnight so DST never shifts the count).
- **Milestone celebrations:** hitting 3 / 7 / 14 / 30 / 60 / 100 days fires the Phase-3
  reward burst with a "🔥 N-day streak!" card.
- **At-risk nudge:** when the streak is alive but today isn't done yet, the header streak
  badge turns amber and shows "keep it alive today!".

**Deliberately skipped:** streak leaderboards, purchasable freezes, calendar view.

---

## Files touched

| File | Change |
|------|--------|
| `app/src/mapUtil.js` | `getCityStatus` gating helper |
| `app/src/MapScreen.jsx` | locked/current rendering, single-target pulse, travelled path, Continue CTA, at-risk nudge |
| `app/src/MapScreen.css` | locked/current styles, travelled polyline, Continue pill, streak nudge |
| `app/src/App.jsx` | `awardXp` helper, level-up detection, streak advance + milestones, RewardBurst mount |
| `app/src/RewardBurst.jsx` *(new)* | floating +XP / level-up / streak-milestone overlay |
| `app/src/RewardBurst.css` *(new)* | burst + confetti styles (reduced-motion aware) |
| `app/src/progress.js` | `advanceStreak` + `daysBetween` |
| `app/smoke-test.mjs` | assertions for gating + streak logic |

<br>

# Gamification — City Life Upgrades

Bringing the City Life tab (🏙️) up to the same "game board" bar as the map. Four
additions, **all built and verified** (`npm test` / `build` / `lint` clean):

1. **Progress + collectibles** — a "N/M places explored" meter and a collectible strip on
   the city map. *(built)*
2. **Stage direction / gating** — lock stages until the previous is solved; only the current
   stage is live; "Next stop" unlocks on solving. *(built)*
3. **Quiz mastery / first-try scoring** — a +5 bonus and a "Perfect! ⭐" burst for answering
   without a wrong guess; banked as a `perfect` set for gold payoff. *(built)*
4. **Useful favorites** — replay favorited phrases from a "Saved phrases" review. *(built)*

XP already flowed here (+10 per stage via `handleStageComplete`) and the app-wide
`RewardBurst` already fires on this screen; the gap was local game feel.

New shared logic lives in `app/src/citylifeUtil.js` (pure, covered by `smoke-test.mjs`).

---

## 1. Progress + collectibles — *built*

**Why:** finishing a place gave only a one-line banner; there was no collection to build and no
aggregate "how far am I" signal. Everything is derived from the existing `routeDone`/`perfect`
Sets — no new storage.

**How it works** (`app/src/CityLife.jsx`, `CityLifeMap.jsx`, `CityLife.css`)
- Header **progress line** "{done} / {total} places explored" + a fill bar.
- A **"Next: {location}"** pill opens the first unexplored place (`firstIncompleteLocation`);
  it flips to **"City explored! 🏆"** when all are done.
- A **collectible strip** under the map — one emoji chip per location, greyed until explored,
  full-colour when done, **gold** when mastered (`locationDone` / `locationMastered`).
- Map **pins go gold** with a ★ when every stage in the place was first-try (`perfect`).

Helpers in `citylifeUtil.js`: `cityLifeProgress`, `firstIncompleteLocation`, `locationDone`,
`locationMastered`.

---

## 2. Stage direction + gating — *built*

**Why:** every stage was open at once, so there was no pull through the sequence. Each
location is now a mini-journey.

**How it works** (`app/src/RouteJourney.jsx` + `RouteJourney.css`)
- New pure helper `stageStatus(places, index, routeDone)` in `citylifeUtil.js` →
  `done` / `current` / `locked` (linear; previously-solved stages stay reachable).
- `RouteJourney` gained a `gated` prop (default `false`). **City Life passes `true`; the
  city-page "places" route stays ungated, so nothing there changes.**
- When gated: **locked** timeline nodes render greyed with a 🔒 and aren't clickable; `go()`
  refuses to jump to a locked stage; the **current** node keeps its glow/scale.
- The **Next** button reads **"Solve to continue"** and is disabled while the current stage's
  quiz is unsolved — solving it unlocks and advances. Clear forward pull.

---

## 3. Quiz mastery / first-try scoring — *built*

**Why:** unlimited silent retries meant knowing the answer earned nothing.

**How it works**
- `app/src/RouteJourney.jsx` tracks a local `missed` set — any wrong guess on a stage forfeits
  its first-try bonus. On the correct pick it calls `onStageComplete(stageId, firstTry)`.
- `app/src/App.jsx` `handleStageComplete(stageId, firstTry)`:
  - awards **+15 XP** on a first-try solve (vs the normal +10),
  - records the stage in a new per-journey **`perfect`** Set (`load`/`save`, no schema change),
  - fires the reward burst with a `perfect` flavour.
- `app/src/RewardBurst.jsx` renders a **"Perfect! ⭐"** tag under the floating "+XP".
- `locationMastered(location, perfect)` (in `citylifeUtil.js`) drives the gold chip/pin in the
  Phase 1 collectible strip and on the map.

**Note:** the city-page "places" route shares `handleStageComplete`, so it earns the bonus
too — harmless. Gating stays **off** there (only City Life passes `gated`).

---

## 4. Useful favorites — *built*

**Why:** the ♥ was a dead-end — stored but never resurfaced.

**How it works** (`app/src/SavedPhrases.jsx` + `CityLife.css`)
- A **"♥ Saved phrases ({n})"** entry on the city map opens a review of every favorited stage's
  phrases as **tap-to-reveal** cards (native → tap → English, with romaji when present).
- Gathered live from the journey's `citylife` locations filtered by the existing `favorites`
  Set — no new storage, no SRS entanglement. (SRS integration deferred as the heavier alternative.)

---

## Files touched (City Life)

| File | Change | Status |
|------|--------|--------|
| `app/src/citylifeUtil.js` *(new)* | `locationDone` / `locationMastered` / `firstIncompleteLocation` / `cityLifeProgress` / `stageStatus` | built |
| `app/src/RouteJourney.jsx` | `gated` prop, locked/current nav, first-try `missed` tracking, `onStageComplete(id, firstTry)` | built |
| `app/src/RouteJourney.css` | `.tl-node--locked` styling | built |
| `app/src/App.jsx` | `perfect` Set load/save, `handleStageComplete(id, firstTry)` +5 bonus | built |
| `app/src/RewardBurst.jsx` / `.css` | "Perfect! ⭐" tag | built |
| `app/src/CityLife.jsx` | progress meter, collectible strip, Next pill, Saved-phrases entry, `gated`/`perfect` wiring | built |
| `app/src/CityLifeMap.jsx` / `CityLifeMap.css` | gold pins for mastered places | built |
| `app/src/CityLife.css` | progress bar, actions, chips, saved-phrase cards | built |
| `app/src/SavedPhrases.jsx` *(new)* | favorited-phrase tap-to-reveal review | built |
| `app/smoke-test.mjs` | assertions for `citylifeUtil` | built |

> **Verification status:** `npm test`, `npm run build`, and `npm run lint` all pass clean.

<br>

# Gamification — Passport Upgrades

Turned the Passport (🛂) from a **read-only trophy shelf** into a rewarding collection.
Four additions, **all built and verified** (`npm test` / `build` / `lint` clean):

1. **Rewards at the source** — earning a stamp fires a burst on the spot, with half/all milestones.
2. **Stamp tiers** — gold / silver / bronze stamps reflecting star mastery.
3. **UX + meta glue** — per-country tab counts, an active-journey marker, a "next stamp" pull, richer modal.
4. **Achievements + World Traveller** — an 8-badge shelf and a cross-journey stamp total.

New pure logic lives in `app/src/passportUtil.js` (covered by `smoke-test.mjs`). New motion
respects `prefers-reduced-motion`. All progress is **derived** from existing storage
(`stamps`, `stars`, `routeDone`, `srs`, `passport-opened`) — no new persisted keys.

---

## 1. Rewards at the source — *built*

**Why:** earning a stamp was silent — `handleLessonComplete` wrote it to storage and the payoff
only surfaced later when you happened to open the passport.

**How it works** (`app/src/App.jsx`, `RewardBurst.jsx` / `.css`)
- When a city's last lesson completes and a fresh stamp is written, the completion folds a
  `{ stamp, stampMilestone }` into the existing reward burst (+20 XP), so it fires on whatever
  screen you're on (the burst is mounted app-wide).
- `RewardBurst` renders **"🛂 {City} stamped!"**; a **"Halfway there!"** tag when stamps cross
  the midpoint; and a confetti **"🌍 Country complete!"** card on the final city.

---

## 2. Stamp tiers (mastery) — *built*

**Why:** a stamp looked identical for a 1-star scrape or a 3-star sweep. Reuses `stars`.

**How it works** (`passportUtil.js`, `PassportTab.jsx` / `.css`)
- `getCityTier(city, stamps, stars)` → `gold` (every lesson 3★) / `silver` (avg ≥2) / `bronze`
  / `null` (unstamped).
- Each stamped tile gets a foil ring (`.pp-stamp--gold/silver/bronze`); gold glows.
- The detail modal shows the tier and a **"Re-practice for gold →"** CTA on sub-gold stamps
  (routes through the existing `onGoToCity`), giving a replay reason.

---

## 3. UX + meta glue — *built*

**Why:** cheap clarity wins that also expose cross-journey progress.

**How it works** (`PassportTab.jsx` / `.css`)
- **Per-tab progress:** each country tab shows "{n}/{total}" or a ✓ when complete.
- **Active-journey marker:** a green dot on the tab matching `activeJourney`, so "viewing" vs
  "your active journey" is unambiguous.
- **Next-stamp pull:** `nextStampCity` finds the unstamped city closest to done; its tile pulses
  with a dashed ring and the footer shows **"Almost there: {City} ({done}/{total})"**.
- **Richer modal:** stamped cities gain a "Review {City} →" action (previously only unstamped
  cities had a CTA).

---

## 4. Achievements + World Traveller — *built*

**Why:** the decorative-stamp slots were dead weight and each passport was an island.

**How it works** (`passportUtil.js`, `PassportTab.jsx` / `.css`)
- A **World Traveller** line up top: "🌍 {stamps} / {totalCities} stamps · {K} countries complete".
- An **8-achievement shelf** (global): `first-stamp`, `city-master`, `explorer`, `reviewer`,
  `globetrotter` (stamps in ≥2 journeys), `collector`, `world-traveller`, `polyglot` — earned
  in colour, locked as greyed silhouettes.
- `worldStats` / `evaluateAchievements` derive everything by loading each view's data once.
  `PASSPORTS.j2` aliases `jp`, so views are **deduped by chrome identity** to avoid
  double-counting Japan.

---

## Files touched (Passport)

| File | Change | Status |
|------|--------|--------|
| `app/src/passportUtil.js` *(new)* | `getCityTier` / `getAvgStars` / `nextStampCity` / `worldStats` / `ACHIEVEMENTS` + `evaluateAchievements` | built |
| `app/src/PassportTab.jsx` | tier rings, switcher counts + active marker, next-stamp highlight + nudge, richer modal, achievements shelf, world line | built |
| `app/src/PassportTab.css` | tier styles, switcher badges, next-pulse, achievements shelf, world line, modal tier | built |
| `app/src/App.jsx` | stamp-earned + half/all milestone bursts on stamp award | built |
| `app/src/RewardBurst.jsx` / `.css` | stamp + milestone flavour | built |
| `app/smoke-test.mjs` | assertions for `getCityTier` / `nextStampCity` / `worldStats` / `evaluateAchievements` | built |

> **Verification status:** `npm test`, `npm run build`, and `npm run lint` all pass clean.
