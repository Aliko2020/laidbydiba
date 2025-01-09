import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const getNavLinkClass = (path) => (
    location.pathname === path ? 'border-b-2 border-[#637373]' : ''
  );

  return (
    <nav className="flex justify-center items-center shadow-lg font-semibold w-full bg-white text-[#637373] sticky top-0 z-50">
      <ul className="flex gap-0.5">
      <li className={`p-4 hover ${getNavLinkClass('/')}`}>
          <Link to="/">Home</Link>
        </li>
        <li className={`p-4 hover ${getNavLinkClass('/contact')}`}>
          <Link to="/contact">Contact</Link>
        </li>
        <li className={`p-4 hover ${getNavLinkClass('/slots')}`}>
          <Link to="/slots">Book</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
