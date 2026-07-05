# User Journeys — German Travel Learning Game

---

## Passport Tab

### Concept
A dedicated 🛂 Passport tab in the bottom nav. The user's "travel document" — a physical-looking passport that fills with stamps as they complete cities. Visual proof of the journey so far.

---

### Trigger
A city earns its stamp when **all lessons in that city are marked complete** (lessonId exists in `completedLessons` Set for every lesson in the city).

---

### Layout

**Tab icon:** 🛂 Passport (fourth tab in bottom nav, after Daily)

**Header:**
- Looks like a passport cover when empty: dark navy/burgundy background, gold text "DEUTSCHES REISEPASS", subtitle "Language Traveller"
- Character name or level shown (e.g. "Lv.3 Traveller")

**Stamp grid:**
- 2-column grid of stamp slots
- Each slot is a rounded square (~140×140px), styled like a rubber stamp impression
- **Unstamped:** faint dashed border, ghost silhouette of the city icon, greyed out label "???" or city name in muted color
- **Stamped:** full color, ink-stamp aesthetic (slightly rotated ±3°, slight blur edges), city icon large in center, city name below, date earned shown (stored when stamp is awarded)

**Stamp design per city:**
| City | Icon | Stamp color |
|------|------|-------------|
| Frankfurt | ✈️ | Steel blue |
| Stuttgart | 💼 | Deep green |
| Munich | 🍺 | Amber/orange |
| Berlin | 🏛️ | Brick red |

**Footer (progress bar):**
- "X / 4 cities stamped"
- Simple linear fill bar
- When all 4 are stamped: "Journey Complete! 🎉" banner with confetti burst (CSS animation)

---

### State

Store stamp dates in localStorage:
- Key: `german-stamps`
- Value: `{ [cityId]: 'YYYY-MM-DD' }` — date when the last lesson of that city was completed

The stamp date is set inside `handleLessonComplete` in App.jsx: after marking the lesson complete, check if all lessons in that city are now done — if so, write today's date to `german-stamps[cityId]` if not already stamped.

---

### Journey Flow

```
Bottom nav → 🛂 Passport tab
→ See passport with stamped / unstamped city slots
→ Tap a stamped city stamp → small tooltip or modal:
    "Frankfurt — Stamped on June 25, 2026
     ✓ 2/2 lessons complete · ★★☆ avg stars"
→ Tap an unstamped city slot → tooltip:
    "Stuttgart — 1/2 lessons complete
     Finish all lessons to earn this stamp →"
    [Go to Stuttgart →] button → navigates to city page
```

---

### Gamification hook

- Completing a city triggers a **stamp animation**: the stamp "slams" onto the passport slot (CSS scale + rotate keyframe, ink-splat feel)
- Optional: a one-time XP bonus when a city is fully stamped (+50 XP, shown as "+50 XP — City Stamped!")

---

### What NOT to build (yet)

- Physical passport PDF export
- Animated character traveling between cities on stamp
- Sound effects
- Social sharing

Add those when the core stamp mechanic is working and user-tested.

---

## Previously Defined Journeys

### 1. First Visit (Onboarding)
```
Landing → Onboarding screen (🧳 welcome, city previews)
→ "Start Journey →" → Map with Frankfurt glowing
```
**Built:** `Onboarding.jsx`

### 2. Core Lesson Journey
```
Map → Click city → City page
→ Objectives block (vocab + grammar goals)
→ Lesson list → Click lesson → LessonView
→ Vocab cards → Grammar explainer → Exercises
→ Score computed → Stars awarded (1–3 ⭐)
→ Completion screen (city-themed message + stars)
→ Back to city
```
**Built:** `LessonView.jsx` (scoring + stars + city messages)

### 3. Returning User
```
Map loads → Visual progress:
  - 🔥 streak badge
  - Lv.N · XP counter
  - City dots: progress ring (started) / 🛂 stamp (completed) / gold glow (all 3★)
  - Per-city star average shown
→ Pick up where left off or revisit
```
**Built:** `MapScreen.jsx` (XP, streak, stamps, stars)

### 4. Review Journey
```
Bottom nav → 🃏 Review tab
→ SRS flashcard deck (all vocab from all cities)
→ Flip card → Got it / Again → interval updated
→ "All caught up!" when queue is empty
```
**Built:** `ReviewTab.jsx`

### 5. Daily Challenge Journey
```
Bottom nav → 📅 Daily tab
→ Today's word (deterministic by date)
→ Reveal → I knew it (+20 XP) / I didn't
→ Done state — come back tomorrow
```
**Built:** `DailyChallenge.jsx`

### 6. Grammar Cheatsheet Journey
```
City page → scroll to bottom
→ "▸ Grammar Cheatsheet" toggle
→ Expands: all grammar rules from that city's lessons
→ Quick reference, no quiz
```
**Built:** `CityPage.jsx` (collapsible cheatsheet)

### 7. Passport Journey ← THIS ONE
```
Bottom nav → 🛂 Passport tab
→ See passport with city stamps
→ Stamped cities: tap for details
→ Unstamped: tap to navigate to that city
→ All stamped: celebration banner
```
**To build:** `PassportTab.jsx`
