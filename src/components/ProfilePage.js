import React, { useEffect, useState } from 'react'
import userServices from '../services/users'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';

function ProfilePage({ name, email }) {

  const dispatch = useDispatch();

  const navigate = useNavigate()

  const [userName, setUserName] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [disabled, setDisabled] = useState(true)

  let Token = localStorage.getItem('loggedInUser');
  console.log("TOKEN", Token)

  const viewProfile = async (e) => {
    // e.preventDefault()
    const userInfo = await userServices.getProfile(Token);
    console.log(userInfo)
    setUserName(userInfo.name)
    setUserEmail(userInfo.email)
  }

  useEffect(() => {
    viewProfile();
  }, [userName,userEmail])

  const handleSignOut = (e) => {
    e.preventDefault()
    alert("signout?")
    localStorage.clear()
    dispatch({
      type: 'SIGNOUT_SUCCESS',
      payload: null
    })
    window.location.href = "/signin"
    // navigate('/signin')
  }

  const handleDelete = (e) => {
    e.preventDefault()
    alert("Delete profile?");
    const deleteProfile = userServices.deleteProfile(Token);
    window.location.href = "/signin"
    // navigate('/signin')
  }

  const handleEdit = (e) => {
    e.preventDefault();
    // const userInfo =  userServices.getProfile(Token);
    // navigate(`/edit-profile/${userInfo.id}`)
    setDisabled(!disabled)
  }

  const [newName, setNewName] = useState(null);
  const [newEmail, setNewEmail] = useState(null);

  let [state] = useSearchParams()
  const userData = useSelector(state => state.user);
  

  useEffect(() => {
    setNewName(state.get("name"))
    setNewEmail(state.get("email"))
  }, [name, email])

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const userInfo = userServices.editProfile({ name: newName, email: newEmail });
    console.log(userInfo)
    // window.location.href = "/profile"   
  }

  return (
    <>
      {disabled === true ?
        <div className='wrapper d-flex align-items-center justify-content-center w-100' >
          <div className='login rounded' >
            <h2 className='mb-3'>Welcome '{userName}'</h2>
            <form className='needs-validation'>
              <div className='form-group was-validated mb-2' >
                <label htmlFor='name' className='form-label' >Name</label>
                <input className='form-control' required name='name' disabled value={userName} onChange={(e) => setUserName(e.target.value)} />
                <div className='invalid-feedback' >
                  Please Enter your name
                </div>
              </div>
              <div className='form-group was-validated mb-2' >
                <label htmlFor='email' className='form-label' >Email</label>
                <input className='form-control' required name='email' disabled value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
                <div className='invalid-feedback' >
                  Please Enter your email
                </div>
              </div>             
              <button className='btn btn-primary w-100 mt-2' type='submit' onClick={handleEdit} >Edit</button>
              <button className='btn btn-danger w-100 mt-2' type='submit' onClick={handleDelete} >Delete</button>
              <button className='btn btn-secondary w-100 mt-2' type='submit' onClick={handleSignOut} >SignOut</button>
            </form>

          </div>
        </div>
        :
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
              <button className='btn btn-success w-100 mt-2' type='submit' onClick={handleUpdateProfile} >Update</button>
              <button className='btn btn-warning w-100 mt-2' type='submit' onClick={() => navigate('/profile')} >Go Back</button>
            </form>

          </div>
        </div>}


    </>
  )
}

export default ProfilePage