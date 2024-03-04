import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {

    const navigate = useNavigate();

    const RouteToSignUp = () => {
        navigate('/signup')
    }

    const RouteToSignIn = () => {
        navigate('/signin')
    }

    return (
        <div>
            <button onClick={RouteToSignUp}>Signup</button>
            <button onClick={RouteToSignIn}>SignIn</button>
        </div>
    )
}

export default Home