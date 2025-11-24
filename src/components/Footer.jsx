
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { MdOutlineArrowRightAlt } from 'react-icons/md';

const Footer = () => {
  return (
    // Outer container with dark background and padding
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-4 sm:px-8 lg:px-16">
      
      {/* Main content grid for the four sections */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
        
        {/* === Column 1: Websitoz Branding and Socials === */}
        <div className="space-y-6 md:col-span-1">
          <h2 className="text-3xl font-extrabold tracking-wider">Websitoz</h2>
          <p className="text-gray-400 text-sm max-w-xs">
            A digital spectrum where your vision couples with our experience in this tech age.
          </p>
          <p className="text-sm font-semibold tracking-wide mt-4">
            SKETCH, DEVELOP, AND GROW WITH Websitoz
          </p>
          
          {/* Social Icons */}
          <div className="flex space-x-4 pt-2">
            <a href="#" className="text-white hover:text-[#bdde17] transition duration-300">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="text-white hover:text-[#bdde17] transition duration-300">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="text-white hover:text-[#bdde17] transition duration-300">
              <FaLinkedinIn size={18} />
            </a>
          </div>
          
          <a href="mailto:info@four-fox.com" className="text-sm text-white hover:text-[#bdde17] transition duration-300 block">
            Websitoz@gmail.com
          </a>
        </div>
        
        {/* === Column 2: Information Links === */}
        <div className="space-y-4 md:col-span-1">
          <h3 className="text-lg font-bold">Information</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white transition duration-300">About Websitoz</a></li>
            <li><a href="#" className="hover:text-white transition duration-300">Careers</a></li>
            <li><a href="#" className="hover:text-white transition duration-300">Get In Touch With Us</a></li>
          </ul>
        </div>
        
        {/* === Column 3: Contact Us Details === */}
        <div className="space-y-4 md:col-span-1">
          <h3 className="text-lg font-bold">Contact Us</h3>
          
          <div className="space-y-3 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              {/* <span role="img" aria-label="flag">🇺🇸</span> */}
              <img className='w-3' src="img/indiagate.png" alt="" />
              <span className="text-white font-semibold">New Delhi</span>
            </div>
            <p className="max-w-xs">
              3/27 West Patel Nagar<br />
              {/* Phoenix AZ 85012 */}
            </p>
            {/* The phone number is white/bold in the original image */}
            <a href="tel:+19737378443" className="text-white font-bold hover:text-orange-500 transition duration-300 block pt-1">
              +1 (973)-737-8443
            </a>
          </div>
        </div>
        
        {/* === Column 4: Call to Action and Contact Button === */}
        <div className="md:col-span-1 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight">
              Talk to us today and get started with your project
            </h2>
          </div>
          
          {/* Contact Us Button */}
          <div className="pt-6 md:pt-0 flex flex-col items-start md:items-end">
            <button className="relative w-40 h-40 rounded-full border border-gray-600 flex items-center justify-center text-sm font-bold text-white transition duration-300 hover:border-orange-500 group">
              {/* Inner Circle for effect */}
              <div className="absolute w-24 h-24 rounded-full border border-gray-700"></div>
              
              {/* Button Text */}
              <span className="relative z-10 flex items-center">
                Contact Us 
                <MdOutlineArrowRightAlt size={20} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>
      </div>
      
      {/* --- Horizontal Rule and Copyright --- */}
      <hr className="border-gray-700 my-10 max-w-7xl mx-auto" />
      
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
        <p>© 2019-2025 All Rights Reserved</p>
        <p>by <span className="font-semibold text-white">Websitoz</span></p>
        <p className="mt-4 sm:mt-0 text-sm font-bold text-right text-white">
            09 : 00 AM - 06 : 00 PM <br />
            <span className="text-gray-400 font-normal">Monday - Friday</span>
        </p>
      </div>

    </footer>
  );
};

export default Footer;