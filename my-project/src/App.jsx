import './App.css'
import { Routes, Route } from "react-router-dom";

import Navbar from './components/NavBar';
import products from './pages/products';
import contact from './pages/contact';
import home from './pages/home';

function App() {
  return (
    <>
      <div>
        <Navbar />   
        <Routes>
          <Route path='/' element={<home/>} />
          <Route path="/Products" element={<productos />} />
          <Route path='/Contact' element={<contact/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
