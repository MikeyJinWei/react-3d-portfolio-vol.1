import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink
        to='/'
        className='w-16 h-10 rounded-lg bg-[#FFFFF5] items-center justify-center flex font-bold shadow-md'
      >
        <p className='blue-gradient_text text-xl font-semibold logo-text'>
          Mikey
        </p>
      </NavLink>
      <nav className='flex md:text-xl sm:text-lg gap-7 font-medium'>
        <NavLink
          to='/about'
          className={({ isActive }) =>
            isActive
              ? 'font-semibold text-indigo-500'
              : 'font-semibold text-[#FDF4E3] hover:text-indigo-300 transition-all ease-in-out duration-300'
          }
        >
          關於我
        </NavLink>
        <NavLink
          to='/projects'
          className={({ isActive }) =>
            isActive
              ? 'font-semibold text-indigo-500'
              : 'font-semibold text-[#FDF4E3] hover:text-indigo-300 transition-all ease-in-out duration-300'
          }
        >
          作品集
        </NavLink>
        <NavLink
          to='/contact'
          className={({ isActive }) =>
            isActive
              ? 'font-semibold text-indigo-500'
              : 'font-semibold text-[#FDF4E3] hover:text-indigo-300 transition-all ease-in-out duration-300'
          }
        >
          聯絡
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
