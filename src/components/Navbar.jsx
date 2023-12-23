import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink
        to='/'
        className='w-16 h-10 rounded-lg bg-[#eeeeee] items-center justify-center flex font-bold shadow-md'
      >
        <p className='blue-gradient_text'>Mikey</p>
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink
          to='/about'
          className={({ isActive }) =>
            isActive ? 'text-blue-500' : 'text-[#eeeeee]'
          }
        >
          關於我
        </NavLink>
        <NavLink
          to='/projects'
          className={({ isActive }) =>
            isActive ? 'text-blue-500' : 'text-[#eeeeee]'
          }
        >
          作品集
        </NavLink>
        <NavLink
          to='/contact'
          className={({ isActive }) =>
            isActive ? 'text-blue-500' : 'text-[#eeeeee]'
          }
        >
          聯絡
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
