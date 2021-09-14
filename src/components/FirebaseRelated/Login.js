import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth, signInWithEmailAndPassword } from '../Firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import './Login.css'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, loading, error] = useAuthState(auth);
    const history = useHistory();


    useEffect(() => {
        if (loading) {
            return;
        }
        if (user) history.replace('/dashboard');
    }, [user, loading]);

    return (
        <>

            <div className='login'>
                
                    <input
                        type='text'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='email'
                        className='inputLogin'
                    />
                    <input
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='password'
                        className='inputLogin'
                    />
               
                <button
                    className='loginButton'
                    onClick={() => signInWithEmailAndPassword(email, password)}>login
                </button>

                <div>
                    <Link to='passwordreset' className='linkFirebase'>forgot password?</Link>
                </div>
                <div>
                    not yet a member? <Link to='/signup' className='linkFirebase'>sign up here</Link>
                </div>

            </div>

        </>
    )
}

export default Login
