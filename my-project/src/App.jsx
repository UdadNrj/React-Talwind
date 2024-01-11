import './App.css'
import { Routes, Route } from "react-router-dom";

import Navbar from './components/NavBar';
import ItemList from './pages/ItemList';
// import products from './pages/products';
// import contact from './pages/contact';
// import home from './pages/home';

function App() {
  return (
    <>
      <div>
        <Navbar />   
        <Routes>
          {/* <Route path='/' element={<home/>} /> */}
          <Route path="/Products" element={<ItemList />} />
          {/* <Route path='/Contact' element={<contact/>} /> */}
        </Routes>
      </div>
    </>
  )
}

export default App
