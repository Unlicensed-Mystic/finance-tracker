import { Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { AuthProvider, useAuth } from './context/AuthContext'
import Navbar       from './components/Navbar'
import Dashboard    from './pages/Dashboard'
import Transactions from './pages/Transactions'
import AuthPage     from './pages/AuthPage'

function ProtectedLayout() {
  const { user } = useAuth()
  if (!user) return <Navigate to="/auth" replace />
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/"             element={<Dashboard />} />
        <Route path="/transactions" element={<Transactions />} />
      </Routes>
    </>
  )
}

function AuthRoute() {
  const { user } = useAuth()
  if (user) return <Navigate to="/" replace />
  return <AuthPage />
}

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Routes>
          <Route path="/auth" element={<AuthRoute />} />
          <Route path="/*"   element={<ProtectedLayout />} />
        </Routes>
      </AuthProvider>
    </ThemeProvider>
  )
}
