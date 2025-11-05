import React from 'react'
export default function Dashboard(){
  const user = JSON.parse(localStorage.getItem('sg_users')||'{}')[localStorage.getItem('sg_current')]
  return (
    <div className="card">
      <h2>Dashboard Page</h2>
      <p className="small">Welcome {user ? user.name : 'user'} — you have successfully completed the authentication + configuration flow.</p>
      <p style={{marginTop:12}}>This dashboard is intentionally minimal per task requirements.</p>
    </div>
  )
}
