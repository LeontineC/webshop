import React, { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useHistory } from 'react-router'
import { auth, logout } from '../Firebase' // db
import './Dashboard.css'

const Dashboard = () => {

    const [user, loading, error] = useAuthState(auth);

    const history = useHistory();

    useEffect(() => {
        if (loading) return;
        if (!user) return history.replace('/login');


    }, [user, loading]);

    return (
        <>
            <div className='dashboard'>
                <div className='messageDash'>nice to see you!</div>
                <div className='emailDash'>{user?.email}</div>
                <button className='buttonLogout' onClick={logout}>
                    logout
                </button>

            </div>

        </>
    )
}

export default Dashboard
