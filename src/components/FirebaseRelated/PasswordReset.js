import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { auth, sendPasswordResetEmail } from '../Firebase';
import './PasswordReset.css'

const PasswordReset = () => {

  const [email, setEmail] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();

  useEffect(() => {
    if (loading) return;
    if (user) history.replace('/dashboard');
  }, [user, loading]);

  return (
    <>
    <div className='passwordReset'>
      <p className='paraPR'>enter your email to receive a new password link</p>
    <input
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='email'
          className='inputReset'
        />
        <button
          className='buttonReset'
          onClick={() => sendPasswordResetEmail(email)}
        >
          send 
        </button>
        <div>
          not yet a member? <Link to='/signup' className='linkFirebase'>sign up here</Link>
        </div>
    </div>
      
    </>
  )
}

export default PasswordReset


