import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-pink-200 text-white py-6">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex gap-4 mb-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaFacebookF />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <FaLinkedinIn />
          </a>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Laidbydiba. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
