import React, { useState } from 'react';
import auth from '../services/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function SignIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

    const dispatch = useDispatch();

    const handleSignIn = async (e) => {
        e.preventDefault();
        const user = await auth.signin({ email, password });

        if(user) {
            dispatch({
                type : 'SIGNIN_SUCCESS',
                payload : user
            })
            navigate('/profile')
        } else {
            alert ("Enter valid credentials")
        }

        
    }

    return (
        // <div>
        //     <form onSubmit={handleSignIn} >
        //         <input type='email' name='email' placeholder='Enter yout email' onChange={(e) => setEmail(e.target.value)} />
        //         <input type='password' name='password' placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} />
        //         <button type='submit'>SignIn</button>
        //     </form>
        // </div>
        <div className='wrapper d-flex align-items-center justify-content-center w-100' >
            <div className='login rounded' >
                <h2 className='mb-3'>SignIn</h2>
                <form className='needs-validation' onSubmit={handleSignIn} >
                    <div className='form-group was-validated mb-2' >
                        <label htmlFor='email' className='form-label' >Email</label>
                        <input className='form-control' required name='email' placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)}  />
                        <div className='invalid-feedback' >
                            Please Enter your email
                        </div>
                    </div>
                    <div className='form-group was-validated mb-2'>
                        <label htmlFor='password' className='form-label'>Password</label>                        
                        <i class="bi bi-eye-slash-fill"></i>
                        <input className='form-control' required type='password' name='password' placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)}  ></input>
                        
                        <div className='invalid-feedback' >
                            Please enter your password
                        </div>
                    </div>
                    <div className='form-group form-check mb-2'>
                        <input type='checkbox' className='form-check-input' />
                        <label htmlFor='check' className='form-check-label' >Remember Me</label>
                    </div>
                    <button className='btn btn-success w-100 mt-2' type='submit' >SignIn</button>
                </form>
                <p>New here?<Link to='/' >SignUp</Link></p>
            </div>
            
        </div>
    )
}

export default SignIn