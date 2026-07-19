import { useState, useEffect } from 'react'
import { isConfigured, isLoggedIn, login, signup, logout, pull, fetchLeaderboard } from './sync'

// One tab that does account + leaderboard:
//   - backend not configured → a short note (offline-only build)
//   - logged out → login / signup form
//   - logged in  → leaderboard + logout
export default function AccountTab() {
  const [loggedIn, setLoggedIn] = useState(isLoggedIn())

  if (!isConfigured()) {
    return (
      <div style={S.wrap}>
        <h2 style={S.h2}>Account</h2>
        <p style={S.muted}>Cloud sync isn't configured for this build. Progress is saved on this device only.</p>
      </div>
    )
  }
  return loggedIn
    ? <Board onLogout={() => { logout(); setLoggedIn(false) }} />
    : <AuthForm onDone={() => setLoggedIn(true)} />
}

function AuthForm({ onDone }) {
  const [mode, setMode] = useState('login')       // 'login' | 'signup'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [error, setError] = useState(null)
  const [busy, setBusy] = useState(false)

  async function submit(e) {
    e.preventDefault()
    setError(null); setBusy(true)
    try {
      if (mode === 'signup') await signup(email, password, displayName)
      else await login(email, password)
      await pull()                     // merge server progress into localStorage
      sessionStorage.setItem('synced', '1')
      window.location.reload()         // let the app re-read merged progress
      onDone()
    } catch (err) {
      setError(err.message)
      setBusy(false)
    }
  }

  return (
    <div style={S.wrap}>
      <h2 style={S.h2}>{mode === 'signup' ? 'Create account' : 'Log in'}</h2>
      <p style={S.muted}>Sync your progress across devices and join the leaderboard.</p>
      <form onSubmit={submit} style={S.form}>
        {mode === 'signup' && (
          <input style={S.input} placeholder="Display name" value={displayName}
            onChange={e => setDisplayName(e.target.value)} autoComplete="nickname" />
        )}
        <input style={S.input} type="email" placeholder="Email" value={email}
          onChange={e => setEmail(e.target.value)} autoComplete="email" required />
        <input style={S.input} type="password" placeholder="Password (8+ chars)" value={password}
          onChange={e => setPassword(e.target.value)} autoComplete={mode === 'signup' ? 'new-password' : 'current-password'} required />
        {error && <p style={S.error}>{error}</p>}
        <button style={S.btn} disabled={busy} type="submit">
          {busy ? '…' : mode === 'signup' ? 'Sign up' : 'Log in'}
        </button>
      </form>
      <button style={S.link} onClick={() => { setMode(mode === 'signup' ? 'login' : 'signup'); setError(null) }}>
        {mode === 'signup' ? 'Have an account? Log in' : "New here? Create an account"}
      </button>
    </div>
  )
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
  form: { display: 'flex', flexDirection: 'column', gap: 12 },
  input: { padding: '12px 14px', fontSize: 16, border: '1px solid #ccd', borderRadius: 10 },
  btn: { padding: '12px 14px', fontSize: 16, fontWeight: 600, color: '#fff', background: '#3b82f6', border: 0, borderRadius: 10, cursor: 'pointer' },
  link: { marginTop: 16, background: 'none', border: 0, color: '#3b82f6', fontSize: 14, cursor: 'pointer' },
  error: { color: '#dc2626', fontSize: 14, margin: 0 },
  list: { listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 },
  row: { display: 'flex', alignItems: 'center', gap: 12, padding: '10px 14px', background: '#f4f5fa', borderRadius: 10 },
  rank: { width: 24, fontWeight: 700, color: '#889' },
  name: { flex: 1, fontWeight: 600 },
  xp: { color: '#3b82f6', fontWeight: 600 },
}
