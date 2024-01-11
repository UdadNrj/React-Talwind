import React, { useState } from "react";

const Navbar =() => {
    const [IsMenuOpen, setIsMenuOpen] = useState(false);

    const [windowDimension, setWindowDimension] = useState({
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
 });
    return <div className="flex px-4 justify-center bg-slate-500">Navbar</div>;
};

export default Navbar;
