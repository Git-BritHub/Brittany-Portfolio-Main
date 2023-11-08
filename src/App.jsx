// import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './components/NavBar';
import Footer from './components/Footer';

import './App.css'

function App() {
  return (
   <>
   <Navbar />
   <Outlet />
   <Footer />
 </>
   )
 }

export default App
