import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Screens/home'
import Productos from './Screens/Productos'

import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";

 
function App() {
  return <div className='flex flex-col'>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Productos" element={<Productos />} />
      </Routes>
    </BrowserRouter>
  </div>;
}

export default App
