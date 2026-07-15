// ponytail: dev/demo affordance. "completed_user" mode fills every journey's
// progress in localStorage so the app looks fully completed. Reversible: entering
// snapshots all storage, exiting restores it. No real profile system — YAGNI.

import journeys from './journeys';
import { PASSPORTS } from './data/passport';
import { todayStr } from './progress';

const FLAG = 'completed-user';
const BACKUP = 'completed-user-backup';

export function isCompletedMode() {
  try { return localStorage.getItem(FLAG) === '1'; } catch { return false; }
}

export function enterCompletedMode() {
  // Snapshot current storage once, so exit can restore it exactly.
  if (localStorage.getItem(BACKUP) == null) {
    const snap = {};
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k !== BACKUP) snap[k] = localStorage.getItem(k);
    }
    localStorage.setItem(BACKUP, JSON.stringify(snap));
  }

  for (const [id, pack] of Object.entries(journeys)) {
    const lessonIds = (pack.content || []).flatMap(c => c.lessons.map(l => l.id));
    const cities = (pack.content || []).filter(c => !c.preview);
    const stageIds = (pack.citylife || []).flatMap(loc => loc.stages.map(s => s.id));

    const set = (name, value) => localStorage.setItem(`journey:${id}:${name}`, JSON.stringify(value));
    set('completed', lessonIds);
    set('stamps', Object.fromEntries(cities.map(c => [c.id, todayStr()])));
    set('route', stageIds);
    set('stars', Object.fromEntries(lessonIds.map(lid => [lid, 3])));
    set('xp', 9999);
    set('streak', { count: 30, lastDate: todayStr() });
  }

  localStorage.setItem('onboarded', '1');
  localStorage.setItem('passport-opened', JSON.stringify(Object.keys(PASSPORTS)));
  localStorage.setItem(FLAG, '1');
}

export function exitCompletedMode() {
  const raw = localStorage.getItem(BACKUP);
  if (raw != null) {
    let snap = {};
    try { snap = JSON.parse(raw); } catch { snap = {}; }
    localStorage.clear();
    for (const [k, v] of Object.entries(snap)) localStorage.setItem(k, v);
  }
  localStorage.removeItem(BACKUP);
  localStorage.removeItem(FLAG);
}
