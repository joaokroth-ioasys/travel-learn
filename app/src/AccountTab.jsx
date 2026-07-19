import { useState, useEffect, useRef } from 'react'
import { isConfigured, isLoggedIn, googleLogin, logout, pull, fetchLeaderboard } from './sync'

const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID
const GSI_SRC = 'https://accounts.google.com/gsi/client'

// Load the Google Identity Services script once, resolve when window.google is ready.
let gsiPromise = null
function loadGsi() {
  if (gsiPromise) return gsiPromise
  gsiPromise = new Promise((resolve, reject) => {
    if (window.google?.accounts?.id) return resolve()
    const s = document.createElement('script')
    s.src = GSI_SRC; s.async = true
    s.onload = resolve; s.onerror = () => reject(new Error('Could not load Google sign-in'))
    document.head.appendChild(s)
  })
  return gsiPromise
}

// One tab that does account + leaderboard:
//   - backend / Google not configured → a short note (offline-only build)
//   - logged out → "Sign in with Google" button
//   - logged in  → leaderboard + logout
export default function AccountTab() {
  const [loggedIn, setLoggedIn] = useState(isLoggedIn())

  if (!isConfigured() || !CLIENT_ID) {
    return (
      <div style={S.wrap}>
        <h2 style={S.h2}>Account</h2>
        <p style={S.muted}>Cloud sync isn't configured for this build. Progress is saved on this device only.</p>
      </div>
    )
  }
  return loggedIn
    ? <Board onLogout={() => { logout(); setLoggedIn(false) }} />
    : <AuthForm />
}

function AuthForm() {
  const btnRef = useRef(null)
  const [error, setError] = useState(null)

  async function onCredential(response) {
    try {
      await googleLogin(response.credential)
      await pull()                     // merge server progress into localStorage
      sessionStorage.setItem('synced', '1')
      window.location.reload()         // let the app re-read merged progress
    } catch (err) {
      setError(err.message)
    }
  }

  useEffect(() => {
    let cancelled = false
    loadGsi().then(() => {
      if (cancelled) return
      window.google.accounts.id.initialize({ client_id: CLIENT_ID, callback: onCredential })
      window.google.accounts.id.renderButton(btnRef.current, { theme: 'outline', size: 'large', width: 260 })
    }).catch(err => setError(err.message))
    return () => { cancelled = true }
  }, [])

  return (
    <div style={S.wrap}>
      <h2 style={S.h2}>Log in</h2>
      <p style={S.muted}>Sync your progress across devices and join the leaderboard.</p>
      <div ref={btnRef} style={S.gsi} />
      {error && <p style={S.error}>{error}</p>}
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
  gsi: { display: 'flex', justifyContent: 'center' },
  link: { marginTop: 16, background: 'none', border: 0, color: '#3b82f6', fontSize: 14, cursor: 'pointer' },
  error: { color: '#dc2626', fontSize: 14, margin: 0 },
  list: { listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 },
  row: { display: 'flex', alignItems: 'center', gap: 12, padding: '10px 14px', background: '#f4f5fa', borderRadius: 10 },
  rank: { width: 24, fontWeight: 700, color: '#889' },
  name: { flex: 1, fontWeight: 600 },
  xp: { color: '#3b82f6', fontWeight: 600 },
}
