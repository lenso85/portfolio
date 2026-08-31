import React, { useEffect } from 'react'
import { useState } from 'react';
import { GoHeartFill } from "react-icons/go";
import { TbMenu2, TbMenu3 } from "react-icons/tb";
import { NavLink } from 'react-router-dom';
const Navbar = () => {

  const [showMenu, setShowMenu] =useState(false);
  const [isScorolled,setIsScrolled] = useState(false);

  const toggleMenu = () =>{
    setShowMenu(!showMenu);
  }

  useEffect  (() =>{
    const handleScroll =() =>{
      setIsScrolled( window.scrollY > 10)
    
    }

    window.addEventListener('scroll' ,handleScroll)



  },[])


  return (
    <header className= {`bg-white fixed top-0 left-0 right-0 z-50  ${ isScorolled ? 'drop-shadow-[0px_4px_25px_rgba(0,0,0,0.08)]' : ''}`}>
    <nav className="max-w-[1200px] mx-auto px-10 md:h-[14vh] h-[12vh] flex  justify-between items-center">
        <a href="#"  className='text-3xl font-bold '>
          Le<span className='text-red-600 uppercase'>N</span>se
        </a>

        <ul className="md:flex item gap-x-15 hidden ml-100">
          <li>
            <NavLink to="/" className='font-semibold tracking-wider text-zinc-800 hover:text-red-600'>Home</NavLink>
          </li>

          <li>
            <NavLink to="/about" className='font-semibold tracking-wider text-zinc-800 hover:text-red-600'>About</NavLink>
          </li>

          <li>
            <NavLink to="/skills" className='font-semibold tracking-wider text-zinc-800 hover:text-red-600'>Skills</NavLink>
          </li>
          <li>
            <NavLink to="/services" className='font-semibold tracking-wider text-zinc-800 hover:text-red-600'>Services</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className='font-semibold tracking-wider text-zinc-800 hover:text-red-600'>Contact</NavLink>
          </li>
        </ul>
        
        <div className='flex items-center gap-5'>

            <a href="#" className='text-zinc-800 text-xl'><GoHeartFill /></a>
             <a href="#" className='text-zinc-800 text-xl md:hidden' onClick={toggleMenu}>
              {showMenu ? <TbMenu3 /> :<TbMenu2 />}
            </a>
        
        </div>
        <ul
           className={`flex flex-col gap-y-12 bg-orange-500/15 w-80 backdrop-blur-xl shadow-xl rounded-xl p-10 items-center gap-x-15 md:hidden absolute top-30 -left-full transform -translate-x-1/2 transition-all duration-500  ${
          showMenu ? "left-1/2" : ""
            }`}
>
          <li>
            <NavLink to="/" className='font-semibold tracking-wider text-zinc-800 hover:text-red-600'>Home</NavLink>
          </li>

          <li>
            <NavLink to="/about" className='font-semibold tracking-wider text-zinc-800 hover:text-red-600'>About</NavLink>
          </li>

          <li>
            <NavLink to="/skills" className='font-semibold tracking-wider text-zinc-800 hover:text-red-600'>Skills</NavLink>
          </li>
          <li>
            <NavLink to="/services" className='font-semibold tracking-wider text-zinc-800 hover:text-red-600'>Services</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className='font-semibold tracking-wider text-zinc-800 hover:text-red-600'>Contact</NavLink>
          </li>
        </ul>

      </nav>
    </header>
  )
}

export default Navbar