import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/auth'

export default function SignAuth(){
  const [mode, setMode] = useState('signin')
  const [form, setForm] = useState({name:'', email:'', password:''})
  const [err, setErr] = useState('')
  const nav = useNavigate()

  function change(e){
    setForm(prev=>({...prev,[e.target.name]:e.target.value}))
  }

  function submit(e){
    e.preventDefault()
    setErr('')
    try{
      if(mode==='signin'){
        auth.signIn({email:form.email.trim(), password:form.password})
      } else {
        if(form.password.length < 6) throw new Error('Password must be at least 6 chars')
        auth.signUp({email:form.email.trim(), password:form.password, name:form.name.trim()})
      }
      nav('/config')
    }catch(er){
      setErr(er.message || String(er))
    }
  }

  return (
    <div className="card">
      <h2>{mode==='signin' ? 'Sign In' : 'Create an account'}</h2>
      <p className="small">Use the form to sign in or create a demo account (localStorage).</p>
      <form onSubmit={submit} style={{marginTop:12}}>
        {mode==='signup' && (
          <div className="form-row">
            <label>Name</label>
            <input name="name" value={form.name} onChange={change} placeholder="Your name" />
          </div>
        )}
        <div className="form-row">
          <label>Email</label>
          <input name="email" value={form.email} onChange={change} placeholder="you@company.com" type="email"/>
        </div>
        <div className="form-row">
          <label>Password</label>
          <input name="password" value={form.password} onChange={change} placeholder="min 6 chars" type="password"/>
        </div>

        {err && <div style={{color:'crimson',marginBottom:10}}>{err}</div>}

        <div style={{display:'flex',gap:8,alignItems:'center'}}>
          <button type="submit">{mode==='signin' ? 'Sign In' : 'Sign Up'}</button>
          <button type="button" className="toggle" onClick={()=>setMode(mode==='signin'?'signup':'signin')}>
            {mode==='signin' ? 'Create an account' : 'Have an account? Sign in'}
          </button>
        </div>
      </form>
    </div>
  )
}
