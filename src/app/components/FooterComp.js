import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-gray-300 py-10 border-t border-gray-700">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="text-center md:text-left flex items-center space-x-4">
            <img 
              src="/logo_saira.png" 
              alt="Recipe Generator AI Logo" 
              className="w-16 h-16 transition-transform duration-300 hover:scale-110" 
            />
            <div>
              <h3 className="text-2xl font-bold text-white">Recipe Generator AI</h3>
              <p className="text-sm text-gray-400">Personalized recipes crafted just for you.</p>
            </div>
          </div>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <a 
              href="#" 
              aria-label="Facebook" 
              className="text-gray-400 hover:text-blue-400 transition duration-300 transform hover:scale-125" 
            >
              <FaFacebookF size={20} />
            </a>
            <a 
              href="#" 
              aria-label="Twitter" 
              className="text-gray-400 hover:text-blue-500 transition duration-300 transform hover:scale-125" 
            >
              <FaTwitter size={20} />
            </a>
            <a 
              href="#" 
              aria-label="Instagram" 
              className="text-gray-400 hover:text-[#ff2b7c] transition duration-300 transform hover:scale-125" 
            >
              <FaInstagram size={20} />
            </a>
            <a 
              href="#" 
              aria-label="LinkedIn" 
              className="text-gray-400 hover:text-blue-700 transition duration-300 transform hover:scale-125" 
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
