import React, { useState } from 'react';
import { FaBars, FaBeer, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

function Navbar() {
    const [menu, setMenu] = useState(false)

  return (
    <header className='fixed top-0 left-0 right-0 z-50'>
        <div className="flex flex-col md:flex-row p-5 md:items-center justify-between bg-[#0f1829]">
       
        <div className="flex justify-between">
        <Link className='flex items-center cursor-pointer' to='home' smooth={true} duration={500}>
        <FaBeer className='text-red-500 text-3xl'/>
        <h2 className='text-3xl font-bold text-red-500 ml-2'>M/H</h2>


        </Link>

    
      {menu?   <FaTimes className='text-white text-3xl cursor-pointer md:hidden' onClick={()=>setMenu(!menu)}/>:
        <FaBars className='text-white text-3xl cursor-pointer md:hidden' onClick={()=>setMenu(!menu)}/>}
        </div>
        
        <nav className={`flex flex-col md:flex-row items-center text-white text-xl  md:inline-block text-center ${menu?'':'hidden'}`}>
        <Link className='py-3 md:py-0 md:mr-5 hover:border-b-2 border-red-500' to='home' smooth={true} duration={500}>Home</Link>
                <Link className='py-3 md:py-0 md:mr-5 hover:border-b-2 border-red-500' to='experience' smooth={true} duration={500}>Experience</Link>
        <Link className='py-3 md:py-0 md:mr-5 hover:border-b-2 border-red-500' to='work' smooth={true} duration={500}>Work</Link>
        <Link className='py-3 md:py-0 hover:border-b-2 border-red-500' to='contact' smooth={true} duration={500}>Contact</Link>

        </nav>
        


        </div>
    </header>
  )
}

export default Navbar