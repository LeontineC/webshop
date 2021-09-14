import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, useHistory } from 'react-router-dom'
import { auth, registerWithEmailAndPassword } from '../Firebase'
import './Signup.css'

const Signup = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [user, loading, error] = useAuthState(auth)
  const history = useHistory()

  const signup = () => {

    registerWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) history.replace('/dashboard');
  }, [user, loading]);

  return (
    <>
      <div className='signup'>
     
        <input
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='email'
          className='inputSignup'
        />
        <input
          type='password' value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='password'
          className='inputSignup'
        />
        <button className='buttonSignup' onClick={signup}>
          Sign up
        </button>
        <div>
          already a member? <Link to='/login' className='linkFirebase'>login here</Link> 
        </div>

      </div>
    </>
  )
}

export default Signup
