import React, { useState } from 'react'
import auth from '../services/auth'
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");  
    const [confirmPassword,setConfirmPassword] = useState("");

    const navigate = useNavigate()

    const handleSignUp = (e) => {
        e.preventDefault();        
        auth.signup({name,email,password})      
        console.log(name,email,password) 
        navigate('/signin')
    }


    return (
        // <div>
        //     <form onSubmit={handleSignUp} >
        //         <input type='text' name='name' required placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} />
        //         <input type='email' name='email' required placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
        //         <input type='password' name='password' required placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
        //         <button type='submit'>Signup</button>
        //     </form>
        // </div>
        <div className='wrapper d-flex align-items-center justify-content-center w-100' >
            <div className='login rounded' >
                <h2 className='mb-3'>SignUp</h2>
                <form className='needs-validation' onSubmit={handleSignUp} >
                    <div className='form-group was-validated mb-2' >
                        <label htmlFor='name' className='form-label' >Name</label>
                        <input className='form-control' required name='name' placeholder='Enter your name' onChange={(e) => setName(e.target.value)} />
                        <div className='invalid-feedback' >
                            Please Enter your name
                        </div>
                    </div>
                    <div className='form-group was-validated mb-2' >
                        <label htmlFor='email' className='form-label' >Email</label>
                        <input className='form-control' required name='email' placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} />
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
                    <div className='form-group was-validated mb-2'>
                        <label htmlFor='password' className='form-label'>Confirm Password</label>
                        <i class="bi bi-eye-slash-fill"></i>
                        <input className='form-control' required type='password' name='password' placeholder='nter your password' onChange={(e) => setPassword(e.target.value)}  ></input>
                        
                        <div className='invalid-feedback' >
                            Please re-enter your password
                        </div>
                    </div>
                    {/* <div className='form-group form-check mb-2'>
                        <input type='checkbox' className='form-check-input' />
                        <label htmlFor='check' className='form-check-label' >Remember Me</label>
                    </div> */}                    
                    <button className='btn btn-success w-100 mt-2' type='submit' >SignUp</button>
                    
                </form>
                <p>Existing User?<Link to='/signin' >Signin</Link></p>
            </div>
        </div>
    )
}

export default SignUp