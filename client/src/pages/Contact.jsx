import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import logo from '../assets/logo.jpeg'

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, like sending data to a server
    console.log('Form submitted:', { name, email, phone, message });
    // Reset the form fields
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <div className="flex items-center justify-center bg-gradient-to-b from-pink-100 to-white">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 text-center sm:mt-10">Contact Us</h1>
        <div className='relative w-20 h-1 bg-[#eea239] mx-auto mb-6'></div>
        <p className="text-gray-700 text-center mb-2">
          Leave us a message, and we will get back to you.
        </p>
        <div className="flex justify-center items-center space-x-4 mb-4">
          <span className="ml-2">Follow us on</span>
          <a href="https://www.instagram.com/laidbydiba?igsh=bXQ3ZXp2cjFsc2w2" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/laidbydiba?igsh=bXQ3ZXp2cjFsc2w2" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/laidbydiba?igsh=bXQ3ZXp2cjFsc2w2" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
            <FaLinkedinIn />
          </a>
        </div>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-8 rounded-lg shadow-sm">
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
                placeholder='Cha Cha'
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
                placeholder='e.g johndoa43@gmail.com'
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
              Phone Number
            </label>
            <div className='flex justify-center items-center gap-1'>
              <label className='border p-1.5 rounded-l-md' htmlFor="">+233</label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                pattern="[0-9]{10}" // Adjust pattern as needed
                className="shadow appearance-none border rounded-r-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
                placeholder='507363607'
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows="5"
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-between mb-4">
            <button
              type="submit"
              className="bg-[#eea239]  hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
