import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="shadow-lg w-full p-4">
      <div className="flex items-center justify-between">
        <div className="text-lg font-Pacifico text-white">Laidbydiba</div>
        <div className="sm:hidden text-2xl">
          <button onClick={toggleMenu} className="focus:outline-none">
            &#9776;
          </button>
        </div>
        <div className={`sm:flex sm:items-center sm:w-auto bg-Complemetary text-Primary ${isOpen ? 'fixed' : 'hidden'} left-0 top-0 w-1/2 h-full sm:static sm:w-auto`}>
          <ul className="sm:flex sm:justify-between p-4 sm:p-0">
            <div className="sm:hidden ml-2 text-lg mt-2 underline">Laidbydiba</div>
            <li className="font-semibold p-2">
              <a href="#">Home</a>
            </li>
            <li className="font-semibold p-2">
              <a href="#">About</a>
            </li>
            <li className="font-semibold p-2">
              <a href="#">Services</a>
            </li>
            <li className="font-semibold p-2">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

