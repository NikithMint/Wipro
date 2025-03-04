import React from 'react'
import Navbar from './Navbar'
import {Routes, Route } from "react-router";
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Logout from './Logout';
import Profile from './Profile';


const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Logout" element={<Logout/>}/>
      <Route path="Profile/:userId" element={<Profile/>} /> 
      </Routes>
    
    </>
  )
}

export default App
