import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" bg-[#637373] text-white border-t-2 border-white py-6">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex gap-4 mb-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Laidbydiba. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
