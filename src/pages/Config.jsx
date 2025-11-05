import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

export default function Config(){
  const [key, setKey] = useState(localStorage.getItem('sg_config_key')||'')
  const [err, setErr] = useState('')
  const nav = useNavigate()

  useEffect(()=>{
    const cur = localStorage.getItem('sg_current')
    if(!cur) nav('/')
  },[])

  function save(e){
    e.preventDefault()
    setErr('')
    const len = key.length
    if(len < 100) return setErr('Key is too short — minimum 100 characters.')
    if(len > 1000) return setErr('Key is too long — maximum 1000 characters.')
    localStorage.setItem('sg_config_key', key)
    nav('/dashboard')
  }

  function clearAll(){
    localStorage.removeItem('sg_config_key')
    localStorage.removeItem('sg_current')
    nav('/')
  }

  return (
    <div className="card">
      <h2>Configuration</h2>
      <p className="small">Enter a configuration key between 100 and 1000 characters.</p>
      <form onSubmit={save} style={{marginTop:12}}>
        <div className="form-row">
          <label>Configuration Key</label>
          <textarea rows={8} value={key} onChange={e=>setKey(e.target.value)} placeholder="Paste or type your configuration key here" />
          <div className="small" style={{marginTop:6}}>Length: {key.length} characters</div>
        </div>
        {err && <div style={{color:'crimson',marginBottom:10}}>{err}</div>}
        <div style={{display:'flex',gap:8}}>
          <button type="submit">Save & Continue</button>
          <button type="button" className="toggle" onClick={clearAll}>Sign out</button>
        </div>
      </form>
    </div>
  )
}
