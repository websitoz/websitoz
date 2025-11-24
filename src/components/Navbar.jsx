// import clsx from "clsx";
// import gsap from "gsap";
// import { useWindowScroll } from "react-use";
// import { useEffect, useRef, useState } from "react";
// import { TiLocationArrow } from "react-icons/ti";

// import Button from "./Button";

// const navItems = ["About", "Contact"];

// const NavBar = () => {
//   // State for toggling audio and visual indicator
//   const [isAudioPlaying, setIsAudioPlaying] = useState(false);
//   const [isIndicatorActive, setIsIndicatorActive] = useState(false);

//   // Refs for audio and navigation container
//   const audioElementRef = useRef(null);
//   const navContainerRef = useRef(null);

//   const { y: currentScrollY } = useWindowScroll();
//   const [isNavVisible, setIsNavVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   // Toggle audio and visual indicator
//   const toggleAudioIndicator = () => {
//     setIsAudioPlaying((prev) => !prev);
//     setIsIndicatorActive((prev) => !prev);
//   };

//   // Manage audio playback
//   useEffect(() => {
//     if (isAudioPlaying) {
//       audioElementRef.current.play();
//     } else {
//       audioElementRef.current.pause();
//     }
//   }, [isAudioPlaying]);

//   useEffect(() => {
//     if (currentScrollY === 0) {
//       // Topmost position: show navbar without floating-nav
//       setIsNavVisible(true);
//       navContainerRef.current.classList.remove("floating-nav");
//     } else if (currentScrollY > lastScrollY) {
//       // Scrolling down: hide navbar and apply floating-nav
//       setIsNavVisible(false);
//       navContainerRef.current.classList.add("floating-nav");
//     } else if (currentScrollY < lastScrollY) {
//       // Scrolling up: show navbar with floating-nav
//       setIsNavVisible(true);
//       navContainerRef.current.classList.add("floating-nav");
//     }

//     setLastScrollY(currentScrollY);
//   }, [currentScrollY, lastScrollY]);

//   useEffect(() => {
//     gsap.to(navContainerRef.current, {
//       y: isNavVisible ? 0 : -100,
//       opacity: isNavVisible ? 1 : 0,
//       duration: 0.2,
//     });
//   }, [isNavVisible]);

 
//   return (
//   <div
//     ref={navContainerRef}
//     className="
//       fixed inset-x-0 top-6 z-50 
//       transition-all duration-700
//       sm:inset-x-6
//     "
//   >
//     <header className="
//       absolute top-1/2 w-full -translate-y-1/2
//     ">
//       <nav
//         className="
//           flex items-center justify-between 
//           px-6 py-3 
//           rounded-xl
//           bg-black backdrop-blur-xl
//           border border-white/10
//           shadow-[0_0_30px_rgba(0,0,0,0.2)]
//         "
//       >
//         {/* LEFT — Logo + Product */}
//         <div className="flex items-center gap-6">
//           <img
//             src="/img/websitozlogo.png"
//             alt="logo"
//             className="w-10 opacity-90 hover:opacity-100 transition"
//           />

//           <Button
//             id="product-button"
//             title="Products"
//             rightIcon={<TiLocationArrow />}
//             containerClass="
//               hidden md:flex items-center gap-1 
//               bg-white/10 border border-white/20
//               backdrop-blur-md text-white
//               px-4 py-2 rounded-full
//               hover:bg-white/20 transition
//             "
//           />
//         </div>

//         {/* RIGHT — Nav Items + Audio */}
//         <div className="flex items-center">
//           {/* Links */}
//           <div className="hidden md:flex items-center gap-8">
//             {navItems.map((item, index) => (
//               <a
//                 key={index}
//                 href={`#${item.toLowerCase()}`}
//                 className="
//                   text-white/70 
//                   hover:text-white 
//                   text-sm tracking-wide 
//                   relative
//                   after:absolute after:-bottom-1 after:left-0 
//                   after:h-px after:w-0 after:bg-white 
//                   after:transition-all after:duration-300 
//                   hover:after:w-full
//                 "
//               >
//                 {item}
//               </a>
//             ))}
//           </div>

//           {/* Audio Visualizer */}
//           <button
//             onClick={toggleAudioIndicator}
//             className="ml-8 flex items-center gap-1.5 group"
//           >
//             <audio
//               ref={audioElementRef}
//               className="hidden"
//               src="/audio/loop.mp3"
//               loop
//             />

//             {[1, 2, 3, 4].map((bar) => (
//               <div
//                 key={bar}
//                 className={clsx(
//                   "w-1 h-4 rounded-sm bg-white/40 transition-all",
//                   "group-hover:bg-white",
//                   { "active": isIndicatorActive }
//                 )}
//                 style={{
//                   animationDelay: `${bar * 0.12}s`,
//                 }}
//               />
//             ))}
//           </button>
//         </div>
//       </nav>
//     </header>
//   </div>
// );


// };

// export default NavBar;


import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { HiMenuAlt3, HiX } from "react-icons/hi";

import Button from "./Button";

const navItems = ["About", "Contact"];
const mobileExtraItems = [
  { title: "Terms & Conditions", link: "/terms" },
  { title: "Privacy Policy", link: "/privacy" },
];

const NavBar = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const audioRef = useRef(null);
  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const menuItemsRef = useRef([]);

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Toggle audio
  const toggleAudioIndicator = () => {
    setIsAudioPlaying((p) => !p);
    setIsIndicatorActive((p) => !p);
  };

  // Audio control
  useEffect(() => {
    if (isAudioPlaying) audioRef.current.play();
    else audioRef.current.pause();
  }, [isAudioPlaying]);

  // Scroll hide/show behavior
  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navRef.current.classList.add("floating-nav");
    } else {
      setIsNavVisible(true);
      navRef.current.classList.add("floating-nav");
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  // GSAP nav animation
  useEffect(() => {
    gsap.to(navRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.25,
      ease: "power2.out",
    });
  }, [isNavVisible]);

  // MOBILE MENU — GSAP bottom sheet
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!mobileMenuRef.current) return;

    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";

      gsap.to(mobileMenuRef.current, {
        y: 0,
        duration: 0.4,
        ease: "power3.out",
      });

      gsap.to(menuItemsRef.current, {
        opacity: 1,
        y: 0,
        stagger: 0.12,
        duration: 0.45,
        ease: "power2.out",
      });

    } else {
      document.body.style.overflow = "auto";

      gsap.to(mobileMenuRef.current, {
        y: "100%",
        duration: 0.35,
        ease: "power3.inOut",
      });

      gsap.set(menuItemsRef.current, { opacity: 0, y: 20 });
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* MAIN NAV */}
      <div
        ref={navRef}
        // FIX: Replaced 'inset-x-0 sm:inset-x-6' with 'left-0 right-0 px-4 sm:px-6' 
        // to safely add padding on all screen sizes and prevent horizontal overflow.
        // fixed top-6 z-50 w-full max-w-7xl mx-auto px-4 transition-all duration-700 sm:px-6
        // className="fixed left-0 w-full right-0 top-6 z-50 px-4 transition-all duration-700 sm:px-6"
        className="fixed inset-x-0 -top-2 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
      >
        <header className="absolute top-1/2 w-full -translate-y-1/2">
          <nav
            className="
              flex items-center justify-between 
              px-6 py-3 rounded-xl
              bg-black backdrop-blur-xl
              border border-white/10
              shadow-[0_0_30px_rgba(0,0,0,0.2)]
            "
          >
            {/* LEFT */}
            <div className="flex items-center gap-6">
              <img
                src="/img/websitozlogo.png"
                className="w-10 opacity-90 hover:opacity-100 transition"
                alt="Logo"
              />

              {/* Desktop Product Button */}
              <Button
                title="Get in Touch"
                rightIcon={<TiLocationArrow />}
                containerClass="
                  hidden md:flex items-center gap-1 
                  bg-white/10 border border-white/20
                  backdrop-blur-md text-white
                  px-4 py-2 rounded-full
                  hover:bg-white/20 transition
                "
              />
            </div>

            {/* RIGHT */}
            <div className="flex items-center">

              {/* Desktop Links */}
              <div className="hidden md:flex items-center gap-8">
                {navItems.map((item, idx) => (
                  <a
                    key={idx}
                    href={`#${item.toLowerCase()}`}
                    className="
                      text-white/70 hover:text-white 
                      text-sm tracking-wide relative
                      after:absolute after:-bottom-1 after:left-0 
                      after:h-px after:w-0 after:bg-white 
                      hover:after:w-full transition-all
                    "
                  >
                    {item}
                  </a>
                ))}
              </div>

              {/* Audio */}
              <button onClick={toggleAudioIndicator} className="ml-8 flex gap-1 group">
                <audio ref={audioRef} className="hidden" src="/audio/loop.mp3" loop />
                {[1,2,3,4].map((bar) => (
                  <div
                    key={bar}
                    className={clsx("w-1 h-4 rounded-sm bg-white/40", "group-hover:bg-white", {
                      active: isIndicatorActive,
                    })}
                    style={{ animationDelay: `${bar * 0.12}s` }}
                  />
                ))}
              </button>

              {/* MOBILE MENU BUTTON */}
              <button
                onClick={toggleMobileMenu}
                className="ml-6 md:hidden text-white text-3xl"
              >
                {isMobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
              </button>
            </div>
          </nav>
        </header>
      </div>

      {/* MOBILE BOTTOM SHEET MENU */}
      <div
        ref={mobileMenuRef}
        className="
          fixed bottom-0 left-0 right-0 z-[60]
          bg-black/80 mobile-menu-bg
          border-t border-white/10
          backdrop-blur-3xl
          p-8 pb-14
          rounded-t-3xl
          translate-y-full
        "
      >
        {/* Internal menu items */}
        <div className="flex flex-col gap-6 text-center">
          {["About", "Contact"].map((item, i) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              ref={(el) => (menuItemsRef.current[i] = el)}
              onClick={toggleMobileMenu} // Close menu when item is clicked
              className="menu-item text-white text-lg tracking-wide"
            >
              {item}
            </a>
          ))}

          {mobileExtraItems.map((item, i) => (
            <a
              key={item.title}
              href={item.link}
              ref={(el) => (menuItemsRef.current[i + 3] = el)}
              onClick={toggleMobileMenu} // Close menu when item is clicked
              className="menu-item text-white/70 hover:text-white text-md tracking-wide"
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavBar;


 // return (
  //   <div
  //     ref={navContainerRef}
  //     className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
  //   >
  //     <header className="absolute top-1/2 w-full -translate-y-1/2">
  //       <nav className="flex size-full items-center justify-between p-4">
  //         {/* Logo and Product button */}
  //         <div className="flex items-center gap-7">
  //           <img src="/img/websitozlogo.png" alt="logo" className="w-10" />

  //           <Button
  //             id="product-button"
  //             title="Products"
  //             rightIcon={<TiLocationArrow />}
  //             containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
  //           />
  //         </div>

  //         {/* Navigation Links and Audio Button */}
  //         <div className="flex h-full items-center">
  //           <div className="hidden md:block">
  //             {navItems.map((item, index) => (
  //               <a
  //                 key={index}
  //                 href={`#${item.toLowerCase()}`}
  //                 className="nav-hover-btn"
  //               >
  //                 {item}
  //               </a>
  //             ))}
  //           </div>

  //           <button
  //             onClick={toggleAudioIndicator}
  //             className="ml-10 flex items-center space-x-0.5"
  //           >
  //             <audio
  //               ref={audioElementRef}
  //               className="hidden"
  //               src="/audio/loop.mp3"
  //               loop
  //             />
  //             {[1, 2, 3, 4].map((bar) => (
  //               <div
  //                 key={bar}
  //                 className={clsx("indicator-line", {
  //                   active: isIndicatorActive,
  //                 })}
  //                 style={{
  //                   animationDelay: `${bar * 0.1}s`,
  //                 }}
  //               />
  //             ))}
  //           </button>
  //         </div>
  //       </nav>
  //     </header>
  //   </div>
  // );

