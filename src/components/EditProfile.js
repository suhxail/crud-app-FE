import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import userServices from '../services/users'

function EditProfile({ name, email }) {

    let [state] = useSearchParams();
    const userData = useSelector(state => state.user)

    const [newName,setNewName] = useState(null);
    const [newEmail,setNewEmail] = useState(null);
   

    useEffect(() => {
        setNewName(state.get("name"))
        setNewEmail(state.get("email"))
    }, [name, email])

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        const userInfo = userServices.editProfile({ name: newName, email: newEmail });
        window.location.href = "/profile"
    }

  return (
      <div className='wrapper d-flex align-items-center justify-content-center w-100' >
          <div className='login rounded' >
              <h2 className='mb-3'>Edit your profile</h2>
              <form className='needs-validation'>
                  <div className='form-group was-validated mb-2' >
                      <label htmlFor='name' className='form-label' >Name</label>
                      <input className='form-control' required name='name' value={newName} onChange={(e) => setNewName(e.target.value)} />
                      <div className='invalid-feedback' >
                          Please Enter your name
                      </div>
                  </div>
                  <div className='form-group was-validated mb-2' >
                      <label htmlFor='email' className='form-label' >Email</label>
                      <input className='form-control' required name='email' value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
                      <div className='invalid-feedback' >
                          Please Enter your email
                      </div>
                  </div>
                  {/* <div className='form-group was-validated mb-2'>
                      <label htmlFor='password' className='form-label'>Password</label>
                      <i class="bi bi-eye-slash-fill"></i>
                      <input className='form-control' required type='password' name='password' value={newPassword} onChange={(e) => setNewPassword(e.target.value)} ></input>

                      <div className='invalid-feedback' >
                          Please enter your password
                      </div>
                  </div>
                  <div className='form-group was-validated mb-2'>
                      <label htmlFor='password' className='form-label'>Confirm Password</label>
                      <i class="bi bi-eye-slash-fill"></i>
                      <input className='form-control' required type='password' name='password' placeholder='nter your password'></input>

                      <div className='invalid-feedback' >
                          Please re-enter your password
                      </div>
                  </div> */}
                  {/* <div className='form-group form-check mb-2'>
                        <input type='checkbox' className='form-check-input' />
                        <label htmlFor='check' className='form-check-label' >Remember Me</label>
                    </div> */}
                  <button className='btn btn-success w-100 mt-2' type='submit' onClick={handleUpdateProfile} >Update</button>
              </form>
              
          </div>
      </div>
  )
}

export default EditProfile