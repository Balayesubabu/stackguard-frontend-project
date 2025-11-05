import React from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({children, requireConfig=true}){
  const current = localStorage.getItem('sg_current')
  const key = localStorage.getItem('sg_config_key')
  if(!current) return <Navigate to="/" replace />
  if(requireConfig){
    if(!key) return <Navigate to="/config" replace />
    const len = key.length
    if(len < 100 || len > 1000) return <Navigate to="/config" replace />
  }
  return children
}
