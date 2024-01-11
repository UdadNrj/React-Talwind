import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { link } from "react-router-dom"; 

const Navbar =() => {
    const [IsMenuOpen, setIsMenuOpen] = useState(false);

    const [windowDimension, setWindowDimension] = useState({
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
 });
    return <div className="flex px-4 justify-center bg-slate-500">
        <Link to={'/'}>home</Link>
        <Link to={'/Products'}>Productos</Link>
    </div>;
};

export default Navbar;
