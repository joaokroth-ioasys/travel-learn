import { Component } from 'react'

// Single top-level boundary: any render crash shows a reload prompt instead
// of a blank page. Progress is safe — it lives in localStorage.
export default class ErrorBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (!this.state.hasError) return this.props.children
    return (
      <div style={{ display: 'grid', placeItems: 'center', minHeight: '100vh', textAlign: 'center', padding: 24 }}>
        <div>
          <p style={{ fontSize: 48, margin: 0 }}>🧳</p>
          <h1 style={{ margin: '8px 0' }}>Something went wrong</h1>
          <p>Your progress is saved. Reload to keep travelling.</p>
          <button onClick={() => window.location.reload()} style={{ padding: '10px 24px', fontSize: 16, cursor: 'pointer' }}>
            Reload
          </button>
        </div>
      </div>
    )
  }
}
