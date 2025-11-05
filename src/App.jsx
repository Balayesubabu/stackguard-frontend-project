import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import SignAuth from './pages/SignAuth'
import Config from './pages/Config'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'

export default function App(){
  return (
    <div className="app-shell">
      <header className="header">
        <h1>StackGuard</h1>
        <nav>
          <Link to="/">Auth</Link>
          <Link to="/config">Config</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={<SignAuth/>} />
          <Route path="/config" element={
            <ProtectedRoute requireConfig={false}>
              <Config />
            </ProtectedRoute>
          } />
          <Route path="/dashboard" element={
            <ProtectedRoute requireConfig={true}>
              <Dashboard />
            </ProtectedRoute>
          } />
        </Routes>
      </main>
    </div>
  )
}
