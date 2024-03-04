import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUp from './components/SignUp'
import Home from './components/Home'
import SignIn from './components/SignIn'
import './App.css'
import Sidebar from './sidebar/Sidebar'
import EditProfile from './components/EditProfile'
import ProfilePage from './components/ProfilePage'

function App() {
  return (
   <div>
    <Routes>
      {/* <Route path='/' element={ <Home />} /> */}
      <Route path='/' element={<SignUp />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/sidebar' element={<Sidebar />} />
      <Route path='/edit-profile/:id' element={<EditProfile />} />
      <Route path='/profile' element={<ProfilePage />} />
    </Routes>
   </div>
  )
}

export default App