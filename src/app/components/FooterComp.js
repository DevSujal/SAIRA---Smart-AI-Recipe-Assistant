import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Recipe Generator AI</h3>
            <p className="text-sm text-gray-300">
              Your go-to source for delicious recipes generated just for you!
            </p>
          </div>
          <div className="mb-6 md:mb-0">
            <h4 className="text-md font-semibold mb-2">Quick Links</h4>
            <ul className="text-sm space-y-1">
              <li><a href="#" className="hover:underline hover:text-green-400 transition">Home</a></li>
              <li><a href="#" className="hover:underline hover:text-green-400 transition">About Us</a></li>
              <li><a href="#" className="hover:underline hover:text-green-400 transition">Contact</a></li>
              <li><a href="#" className="hover:underline hover:text-green-400 transition">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4 text-xl">
              <a href="#" aria-label="Facebook" className="hover:text-green-400 transition"><FaFacebookF /></a>
              <a href="#" aria-label="Twitter" className="hover:text-green-400 transition"><FaTwitter /></a>
              <a href="#" aria-label="Instagram" className="hover:text-green-400 transition"><FaInstagram /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-green-400 transition"><FaLinkedin /></a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-sm text-gray-300">&copy; {new Date().getFullYear()} Recipe Generator AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
