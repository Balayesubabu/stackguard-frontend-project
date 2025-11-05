export const auth = {
  signIn({email, password}){
    if(!email || !password) throw new Error('Email and password are required')
    const users = JSON.parse(localStorage.getItem('sg_users')||'{}')
    if(!users[email]) throw new Error('User not found — please sign up')
    if(users[email].password !== password) throw new Error('Invalid credentials')
    localStorage.setItem('sg_current', email)
    return true
  },
  signUp({email, password, name}){
    if(!email || !password || !name) throw new Error('All fields required')
    const users = JSON.parse(localStorage.getItem('sg_users')||'{}')
    if(users[email]) throw new Error('User already exists — please sign in')
    users[email] = {name, password}
    localStorage.setItem('sg_users', JSON.stringify(users))
    localStorage.setItem('sg_current', email)
    return true
  },
  signOut(){
    localStorage.removeItem('sg_current')
  },
  currentUser(){
    const em = localStorage.getItem('sg_current')
    if(!em) return null
    const users = JSON.parse(localStorage.getItem('sg_users')||'{}')
    return users[em] ? {email:em, name: users[em].name} : null
  }
}
