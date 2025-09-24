import React, { useState } from 'react'

const Login = ({handleLogin}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email,password)
    setEmail("")
    setPassword("")
  } 
  return (
  <div className='flex h-screen w-screen items-center justify-center p-6'>
        <div className='card-surface w-full max-w-md p-8'>
            <div className='mb-6'>
              <h1 className='text-2xl font-semibold tracking-tight'>Welcome back</h1>
              <p className='text-sm text-slate-400 mt-1'>Admin: admin@me.com</p>
              <p className='text-sm text-slate-400'>Employee: e@e.com</p>
              <p className='text-sm text-slate-400'>Password: 123</p>
            </div>
            <form 
            onSubmit={(e) => {
              submitHandler(e)
            }}
            className='space-y-4'>
                <div>
                  <label className='block text-xs uppercase tracking-wide text-slate-400 mb-1'>Email</label>
                  <input 
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                  required 
                  className='input' 
                  type="email" 
                  placeholder='you@company.com'
                  />
                </div>
                <div>
                  <label className='block text-xs uppercase tracking-wide text-slate-400 mb-1'>Password</label>
                  <input 
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                  required 
                  className='input' 
                  type="password" 
                  placeholder='••••••••'
                  />
                </div>
                <button className='btn btn-primary w-full mt-2'>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login
