import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Componentes/NavBar';
import Home from './Screens/home'
import Productos from './Screens/Productos'

import { Routes, Route } from "react-router-dom";

 
function App() {
  return <div className='flex flex-col'>
    <div>
      <NavBar /> 
      <Routes>
        <Route path="/Products" element={<Productos />} />
        <Route path='/' element={<Home/>} />
      </Routes>
    </div>
  </div>;
}

export default App
