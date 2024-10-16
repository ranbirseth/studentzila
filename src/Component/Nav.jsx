import { SearchIcon, User } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = ({  }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [SearchHide, setSearchHide] = useState(false)
  const HideSearch = () => {
    if (SearchHide == false) {
      setSearchHide(true)
    }
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className={'bg-sky-600 p-4 flex md:justify-between  z-10'}>
        <div className="container mx-auto flex md:justify-between justify-evenly items-center">
          <div className="md:hidden" onClick={toggleMenu}>
            <button className="text-white focus:outline-none -ml-16">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
          <div className={`text-white text-xl font-bold `}>
            <NavLink to="/">Studentzila</NavLink>
          </div>
        </div>
        <div className='hidden md:block'>
          <ul className="text-white md:flex md:gap-4">
            <li><NavLink className="md:block md:py-2 md:px-4" to="/">Home</NavLink></li>
            <li><NavLink className="md:block md:py-2 md:px-4" to="/Shopping">Shopping</NavLink></li>
            <li><NavLink className="md:block md:py-2 md:px-4" to="/About">About</NavLink></li>
            <li><NavLink className="md:block md:py-2 md:px-4 " to="/Help">Help</NavLink></li>
            <li><NavLink className="md:block md:py-2 md:px-4   " to="/Account">
              <User size={30} />
            </NavLink></li>
          </ul>
        </div>
        <div onClick={HideSearch} className=' block md:hidden invert'>
          <NavLink to="/search"><SearchIcon /></NavLink>
        </div>
      </nav>
      <div className={` float-left w-[40%]  flex md:items-center md:w-auto absolute justify-center z-40  ${isOpen ? "block bg-gray-600 " : "hidden"}`}>
        <ul className="text-white md:flex md:gap-4">
          <li><NavLink className="md:block md:py-2 md:px-4 flex justify-center m-2  " to="/">
            <User size={60} />
          </NavLink></li>
          <li className="md:block md:py-2 md:px-4"></li>
          <hr className='py-3' />
          <li><NavLink className="md:block md:py-2 md:px-4" to="/Dasboard">Dasboard</NavLink></li>
          <hr className='py-3' />
          <li><NavLink className="md:block md:py-2 md:px-4" to="/Shopping">Shopping</NavLink></li>
          <hr className='py-3' />
          <li><NavLink className="md:block md:py-2 md:px-4" to="/About">About</NavLink></li>
          <hr className='py-3' />
          <li><NavLink className="md:block md:py-2 md:px-4 " to="/Help">Help</NavLink></li>
          <div className='flex mt-16 justify-around gap-16 '>
            <li><NavLink className="md:block md:py-2 md:px-4 " to="/login">log in</NavLink></li>
            <li><NavLink className="md:block md:py-2 md:px-4 " to="/logout">log out</NavLink></li>
          </div>
        </ul>
      </div>

    </>
  );
};

export default Navbar;
