import { useState, useEffect } from 'react'
import { isConfigured, logout, fetchLeaderboard } from './sync'

// Login is a required first-page gate (see LoginGate), so anyone reaching this
// tab is already signed in. This tab just shows the leaderboard + logout.
export default function AccountTab() {
  if (!isConfigured()) {
    return (
      <div style={S.wrap}>
        <h2 style={S.h2}>Account</h2>
        <p style={S.muted}>Cloud sync isn't configured for this build. Progress is saved on this device only.</p>
      </div>
    )
  }
  return <Board onLogout={() => { logout(); window.location.reload() }} />
}

function Board({ onLogout }) {
  const [rows, setRows] = useState(null)
  useEffect(() => { fetchLeaderboard().then(setRows) }, [])

  return (
    <div style={S.wrap}>
      <h2 style={S.h2}>🏆 Leaderboard</h2>
      {rows == null ? <p style={S.muted}>Loading…</p>
        : rows.length === 0 ? <p style={S.muted}>No one on the board yet. Earn some XP!</p>
        : (
          <ol style={S.list}>
            {rows.map((r, i) => (
              <li key={i} style={S.row}>
                <span style={S.rank}>{i + 1}</span>
                <span style={S.name}>{r.display_name}</span>
                <span style={S.xp}>{r.xp} XP</span>
              </li>
            ))}
          </ol>
        )}
      <button style={S.link} onClick={onLogout}>Log out</button>
    </div>
  )
}

const S = {
  wrap: { padding: '24px 20px 96px', maxWidth: 480, margin: '0 auto' },
  h2: { fontSize: 24, margin: '0 0 4px' },
  muted: { color: '#667', fontSize: 14, margin: '0 0 20px' },
  link: { marginTop: 16, background: 'none', border: 0, color: '#3b82f6', fontSize: 14, cursor: 'pointer' },
  list: { listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 },
  row: { display: 'flex', alignItems: 'center', gap: 12, padding: '10px 14px', background: '#f4f5fa', borderRadius: 10 },
  rank: { width: 24, fontWeight: 700, color: '#889' },
  name: { flex: 1, fontWeight: 600 },
  xp: { color: '#3b82f6', fontWeight: 600 },
}
