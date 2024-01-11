import React, { useState } from "react";
import { Link } from "react-router-dom";

const link =[
    {
        link: "/",
        text: "Home",
        id: 1,
    },
    {
        link: "/Productos",
        text: "Productos",
        id: 2,
    },
    {
        link: "/Contact",
        text: "Contact",
        id: 3,
    }
]

const Navbar =() => {
    const [IsMenuOpen, setIsMenuOpen] = useState(false);

    const [windowDimension, setWindowDimension] = useState({
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
 });
    return (
        <div className="flex w-full px-4 bg-slate-500">
            <Link to={'/'} className="text-white font-semibold text-xl p-2" >logo </Link>
            <Link to={'/'} >home </Link>
            <Link to={'/Products'}>Productos</Link>
            <Link to={'/Contact'}>Contact</Link>
        </div>
    )
};

export default Navbar;
