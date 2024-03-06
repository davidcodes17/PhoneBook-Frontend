import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contacts from './pages/Contacts'
import ContactPage from './layouts/log/ContactPage'
import SignIn from './pages/SignIn'
import EditPage from './layouts/log/EditPage'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/contacts' element={<Contacts />}></Route>
      <Route path='/contact' element={<ContactPage />}></Route>
      <Route path='/signin' element={<SignIn />}></Route>
      <Route path='/signup' element={<SignUp />}></Route>
      <Route path='/contact-edit/:id' element={<EditPage />}></Route>
      <Route path='/profile' element={<Profile />}></Route>
    </Routes>
  )
}

export default App