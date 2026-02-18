import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import Icon from '../components/Icon'
import styles from './AuthPage.module.css'

export default function AuthPage() {
  const { login, signup } = useAuth()

  const [mode, setMode]       = useState('login') // 'login' | 'signup'
  const [email, setEmail]     = useState('')
  const [password, setPassword] = useState('')
  const [error, setError]     = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    if (!email || !password) { setError('Please fill in all fields'); return }
    if (password.length < 6) { setError('Password must be at least 6 characters'); return }

    setError('')
    setLoading(true)

    try {
      if (mode === 'login') {
        await login(email, password)
      } else {
        await signup(email, password)
      }
    } catch (err) {
      // Firebase error codes → human-readable messages
      const msgs = {
        'auth/user-not-found':      'No account found with this email.',
        'auth/wrong-password':      'Incorrect password.',
        'auth/email-already-in-use':'An account with this email already exists.',
        'auth/invalid-email':       'Please enter a valid email address.',
        'auth/too-many-requests':   'Too many attempts. Please try again later.',
        'auth/invalid-credential':  'Invalid email or password.',
      }
      setError(msgs[err.code] || 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSubmit()
  }

  return (
    <div className={styles.page}>
      {/* Background blobs */}
      <div className={styles.blob1} aria-hidden="true" />
      <div className={styles.blob2} aria-hidden="true" />

      <div className={styles.card}>
        {/* Logo */}
        <div className={styles.logo}>
          <div className={styles.logoIcon}>
            <Icon name="wallet" size={20} />
          </div>
          <span className={styles.logoText}>FinTrack</span>
        </div>

        <h1 className={styles.title}>
          {mode === 'login' ? 'Welcome back' : 'Create account'}
        </h1>
        <p className={styles.subtitle}>
          {mode === 'login'
            ? 'Sign in to manage your finances'
            : 'Start tracking your money today'}
        </p>

        {/* Error */}
        {error && (
          <div className={styles.errorBox}>
            <Icon name="alertTriangle" size={14} />
            <span>{error}</span>
          </div>
        )}

        {/* Fields */}
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="auth-email">Email</label>
          <input
            id="auth-email"
            className={styles.input}
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            onKeyDown={handleKeyDown}
            autoComplete="email"
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="auth-password">Password</label>
          <input
            id="auth-password"
            className={styles.input}
            type="password"
            placeholder="Minimum 6 characters"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onKeyDown={handleKeyDown}
            autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
          />
        </div>

        {/* Submit */}
        <button
          className={styles.submitBtn}
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading
            ? <span className={styles.spinner} />
            : <Icon name={mode === 'login' ? 'check' : 'user'} size={16} />}
          {loading ? 'Please wait…' : mode === 'login' ? 'Sign In' : 'Create Account'}
        </button>

        {/* Toggle mode */}
        <p className={styles.toggleText}>
          {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
          <button
            className={styles.toggleBtn}
            onClick={() => { setMode(m => m === 'login' ? 'signup' : 'login'); setError('') }}
          >
            {mode === 'login' ? 'Sign up' : 'Sign in'}
          </button>
        </p>
      </div>
    </div>
  )
}
