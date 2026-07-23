import { useEffect, useRef, useState } from 'react'
import { googleLogin, pull, setToken } from './sync'
import { loadGlobal, saveGlobal } from './progress'
import './Onboarding.css'

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

// Required first-page gate: nothing else renders until the user signs in.
export default function LoginGate() {
  const btnRef = useRef(null)
  const [error, setError] = useState(null)

  async function onCredential(response) {
    try {
      await googleLogin(response.credential)
      const rows = await pull()        // merge server progress into localStorage
      if (rows) {                      // authoritative: request succeeded
        // New account (no server progress) → force the journey picker + coach marks.
        // Returning account → skip both and land on a journey they actually have.
        const hasProgress = rows.length > 0
        saveGlobal('onboarded', hasProgress ? '1' : '0')
        saveGlobal('coach-marks', hasProgress ? '1' : '0')
        if (hasProgress && !rows.some(r => r.journey_id === loadGlobal('active-journey'))) {
          saveGlobal('active-journey', rows[0].journey_id)
        }
      }
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
    <div className="onboarding-screen">
      <div className="onboarding-card">
        <div className="onboarding-traveler">🧳</div>
        <h1 className="onboarding-title">World Trip</h1>
        <p className="onboarding-subtitle">Learn a language through a real journey</p>
        <p className="onboarding-description">Sign in to save your progress and join the leaderboard.</p>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 8 }} ref={btnRef} />
        {error && <p style={{ color: '#dc2626', fontSize: 14 }}>{error}</p>}
        <button
          onClick={() => { setToken('guest'); sessionStorage.setItem('synced', '1'); window.location.reload() }}
          style={{ marginTop: 16, background: 'none', border: 'none', color: '#6b7280', fontSize: 14, textDecoration: 'underline', cursor: 'pointer' }}
        >
          Continue without signing in
        </button>
      </div>
    </div>
  )
}
