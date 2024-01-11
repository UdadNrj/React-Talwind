import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar =() => {
    const [IsMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!IsMenuOpen);
    };

    return (
        <div className="flex flex-row w-full px-4 bg-[#e1e1e1] items-center justify-between">
            <div className="flex flex-row items-center justify-around p-2">
                <Link to={'/'} className="text-black font-semibold text-xl p-2" >logo</Link>
                <button className="cursor bg-white rounded-lg hover:border border-slate-900 flex flex-row items-center p-2 mx-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M4.004 6.417L.762 3.174L2.176 1.76l3.243 3.243H20.66a1 1 0 0 1 .958 1.287l-2.4 8a1 1 0 0 1-.958.713H6.004v2h11v2h-12a1 1 0 0 1-1-1zm1.5 16.586a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m12 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"/></svg>
                    <span className="px-4">0</span>
                </button>
            {
                IsMenuOpen && (
                    <div className="bg-white rounded-lg drop-shadow-2xl absolute z-10 top-0 right-0 w-1/6 h-full flex flex-col justify-center items-center transition-all ease-in duration-300">
                        <Link className="m-3 border-b border-black hover:text-xl hover:border-slate-100"  to={'/'} >home </Link>
                        <Link className="m-3 border-b border-black hover:text-xl hover:border-slate-100" to={"/Products"}>Productos</Link>
                        <Link className="m-3 border-b border-black hover:text-xl hover:border-slate-100" to={'/Contact'}>Contact</Link>
                    </div>
                )
            }
            </div>
            <button className="cursor text-black z-50" onClick={toggleMenu}>
                {
                    IsMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M6.535 3h14.464a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6.535a1 1 0 0 1-.833-.445l-5.333-8a1 1 0 0 1 0-1.11l5.333-8A1 1 0 0 1 6.535 3m9.464 8H9v2h7z"/></svg>
                        ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M0 3h20v2H0zm0 6h20v2H0zm0 6h20v2H0z"/></svg>
                    )
                }
            </button>
        </div>
    )
};

export default Navbar;
