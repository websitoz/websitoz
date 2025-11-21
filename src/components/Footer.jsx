// import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";

// const socialLinks = [
//   { href: "https://discord.com", icon: <FaDiscord /> },
//   { href: "https://twitter.com", icon: <FaTwitter /> },
//   { href: "https://youtube.com", icon: <FaYoutube /> },
//   { href: "https://medium.com", icon: <FaMedium /> },
// ];

// const Footer = () => {
//   return (
//     <footer className="w-screen bg-[#5542ff] py-4 text-black">
//       <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
//         <p className="text-center text-sm font-light md:text-left">
//           ©Nova 2024. All rights reserved
//         </p>

//         <div className="flex justify-center gap-4  md:justify-start">
//           {socialLinks.map((link, index) => (
//             <a
//               key={index}
//               href={link.href}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-black transition-colors duration-500 ease-in-out hover:text-white"
//             >
//               {link.icon}
//             </a>
//           ))}
//         </div>

//         <a
//           href="#privacy-policy"
//           className="text-center text-sm font-light hover:underline md:text-right"
//         >
//           Privacy Policy
//         </a>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaDribbble,
} from "react-icons/fa";

const socialLinks = [
  { href: "https://linkedin.com", icon: <FaLinkedin /> },
  { href: "https://instagram.com", icon: <FaInstagram /> },
  { href: "https://github.com", icon: <FaGithub /> },
  { href: "https://dribbble.com", icon: <FaDribbble /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#0e0e0f] py-6 text-white">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 md:flex-row">
        
        {/* Left Text */}
        <p className="text-center text-sm font-light md:text-left">
          © {new Date().getFullYear()} Websitoz. Crafted with passion & precision.
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-5 md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl transition-all duration-300 hover:text-[#735cff] hover:scale-110"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Privacy Policy */}
        <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:text-[#735cff] hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
