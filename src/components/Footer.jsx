
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { MdOutlineArrowRightAlt } from 'react-icons/md';
import CircularText from '../animation/CircularText';

// Define the primary accent color for a premium look
const accentColor = 'text-[#ceff05]'; // Modern, tech-focused green
const hoverColor = 'hover:text-[#ceff05]';
const buttonHoverBorder = 'hover:border-[#ceff05]';

const Footer = () => {
  return (
    // Outer container with dark background and padding
    <footer className="bg-gray-900 text-white">
      
      {/* Premium CTA Section - Full width, darker background, and distinct padding */}
      <div className="bg-gray-800 py-16 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* CTA Text - Left side */}
          <div className="md:w-3/5">
            <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
              <span className={`${accentColor}`}>Talk to us today</span> and get started with your <span className="text-gray-300">dream project</span>.
            </h2>
          </div>
          
          {/* Contact Us Button - Right side */}
          <div className="md:w-2/5 flex justify-start md:justify-end">
            <a href="#">
              <button className={`relative w-46 h-46 rounded-full border-2 border-[#ceff05] bg-gray-900 flex items-center justify-center text-base font-extrabold text-white transition duration-300 ${buttonHoverBorder} group transform hover:scale-105 shadow-2xl`}>
                
                {/* Inner Circle for effect */}
                <div className="absolute w-28 h-28 rounded-full border border-gray-700 opacity-50"></div>
                
                {/* Button Text */}
                <span className="relative z-10 flex items-center tracking-wider">
                  {/* Contact Us  */}
                  <CircularText
  text="WEB*SIT*TOZ*AGE*NCY*"
  onHover="speedUp"
  spinDuration={20}
  className="custom-class"
/>
                  {/* <MdOutlineArrowRightAlt size={24} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" /> */}
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="pt-16 pb-8 px-4 sm:px-8 lg:px-16">
        {/* Main content grid for the four sections */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
          
          {/* === Column 1: Websitoz Branding and Socials === */}
          <div className="space-y-6 md:col-span-1">
            <h2 className={`text-3xl font-extrabold tracking-wider ${accentColor}`}>Websitoz</h2>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              A digital spectrum where your vision couples with our experience in this tech age.
            </p>
            <p className="text-sm font-semibold tracking-wide mt-4 text-gray-300">
              SKETCH, DEVELOP, AND GROW WITH Websitoz
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-4 pt-2">
              <a href="#" className={`text-white hover:text-[#ceff05] transition duration-300 p-2 rounded-full border border-gray-700 hover:border-[#ceff05]`}>
                <FaFacebookF size={16} />
              </a>
              <a href="https://www.instagram.com/websitoz/" className={`text-white hover:text-[#ceff05] transition duration-300 p-2 rounded-full border border-gray-700 hover:border-[#ceff05]`}>
                <FaInstagram size={16} />
              </a>
              <a href="#" className={`text-white hover:text-[#ceff05] transition duration-300 p-2 rounded-full border border-gray-700 hover:border-[#ceff05]`}>
                <FaLinkedinIn size={16} />
              </a>
            </div>
            
            <a href="mailto:info@four-fox.com" className={`text-sm text-gray-400 ${hoverColor} transition duration-300 block pt-3`}>
              Websitoz@gmail.com
            </a>
          </div>
          
          {/* === Column 2: Information Links === */}
          <div className="space-y-5 md:col-span-1">
            <h3 className="text-xl font-bold border-l-4 border-[#ceff05] pl-3">Information</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className={`${hoverColor} transition duration-300`}>About Websitoz</a></li>
              <li><a href="#" className={`${hoverColor} transition duration-300`}>Careers <span className="text-xs ml-2 px-2 py-0.5 bg-[#ceff05] text-gray-900 rounded-full font-bold">HIRING</span></a></li>
              <li><a href="#" className={`${hoverColor} transition duration-300`}>Our Portfolio</a></li>
              <li><a href="#" className={`${hoverColor} transition duration-300`}>Services</a></li>
              <li><a href="#" className={`${hoverColor} transition duration-300`}>Get In Touch With Us</a></li>
            </ul>
          </div>
          
          {/* === Column 3: Contact Us Details === */}
          <div className="space-y-5 md:col-span-1">
            <h3 className="text-xl font-bold border-l-4 border-[#ceff05] pl-3">Contact Us</h3>
            
            <div className="space-y-4 text-sm text-gray-400">
              <div className="flex items-start space-x-2">
                {/* <span role="img" aria-label="flag">🇺🇸</span> */}
                {/* NOTE: You'll need to make sure 'img/indiagate.png' is accessible or replace it */}
                <img className='w-4 mt-1' src="img/indiagate.png" alt="India Gate Icon" /> 
                <div>
                  <span className="text-white font-semibold block">New Delhi, India</span>
                 
                </div>
              </div>
              
              <div className="pt-3">
                 <p className="text-gray-500 font-medium">Call Us:</p>
                  <a href="tel:+919560615790" className="text-white text-lg font-extrabold hover:text-[#ceff05] transition duration-300 block">
                    +91 9560615790
                  </a>
              </div>
            </div>
          </div>
          
          {/* === Column 4: Working Hours === */}
          <div className="md:col-span-1 space-y-5">
            <h3 className="text-xl font-bold border-l-4 border-[#ceff05] pl-3">Working Hours</h3>
            
            <p className="text-4xl font-extrabold text-white leading-tight">
                10 : 00 AM <br />
                - 
                <span className="text-gray-400 ml-2">07 : 00 PM</span>
            </p>
            <p className="text-sm font-bold text-gray-400 pt-2">
                Monday - Saturday (IST)
            </p>
          </div>
          
        </div>
        
        {/* --- Horizontal Rule and Copyright --- */}
        <hr className="border-gray-700 my-10 max-w-7xl mx-auto" />
        
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
          <p className="order-3 sm:order-1 mt-4 sm:mt-0">© 2019-2025 All Rights Reserved</p>
          <p className="order-2">Designed by <span className={`font-semibold ${accentColor}`}>Websitoz</span></p>
          <div className="order-1 sm:order-3 flex space-x-4">
             <a href="#" className={`${hoverColor}`}>Privacy Policy</a>
             <span className="text-gray-600">|</span>
             <a href="#" className={`${hoverColor}`}>Terms of Use</a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;