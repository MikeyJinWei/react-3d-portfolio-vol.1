import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink
        to='/'
        className='w-16 h-10 rounded-lg bg-[#F9F6F0] items-center justify-center flex font-bold shadow-md'
      >
        <p className='blue-gradient_text'>Mikey</p>
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink
          to='/about'
          className={({ isActive }) =>
            isActive ? 'text-indigo-600' : 'text-[#F9F6F0] hover:text-cyan-400'
          }
        >
          關於我
        </NavLink>
        <NavLink
          to='/projects'
          className={({ isActive }) =>
            isActive ? 'text-indigo-600' : 'text-[#F9F6F0] hover:text-cyan-400'
          }
        >
          作品集
        </NavLink>
        <NavLink
          to='/contact'
          className={({ isActive }) =>
            isActive ? 'text-indigo-600' : 'text-[#F9F6F0] hover:text-cyan-400'
          }
        >
          聯絡
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
