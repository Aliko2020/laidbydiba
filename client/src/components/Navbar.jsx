import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const getNavLinkClass = (path) => (
    location.pathname === path ? 'border-b-2 border-[#eea239]' : ''
  );

  return (
    <nav className="flex justify-center items-center shadow-lg w-full p-4 bg-white">
      <ul className="flex gap-4">
        <li className={`pb-2 ${getNavLinkClass('/')}`}>
          <Link to="/">Home</Link>
        </li>
        <li className={`pb-2 ${getNavLinkClass('/services')}`}>
          <Link to="/services">Services</Link>
        </li>
        <li className={`pb-2 ${getNavLinkClass('/book')}`}>
          <Link to="/book">Book</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
