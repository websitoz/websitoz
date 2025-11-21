import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

import Button from "./Button";

const navItems = ["About", "Contact"];

const NavBar = () => {
  // State for toggling audio and visual indicator
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);

  // Refs for audio and navigation container
  const audioElementRef = useRef(null);
  const navContainerRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Toggle audio and visual indicator
  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  // Manage audio playback
  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  useEffect(() => {
    if (currentScrollY === 0) {
      // Topmost position: show navbar without floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down: hide navbar and apply floating-nav
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up: show navbar with floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

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
  return (
  <div
    ref={navContainerRef}
    className="
      fixed inset-x-0 top-6 z-50 
      transition-all duration-700
      sm:inset-x-6
    "
  >
    <header className="
      absolute top-1/2 w-full -translate-y-1/2
    ">
      <nav
        className="
          flex items-center justify-between 
          px-6 py-3 
          rounded-xl
          bg-black backdrop-blur-xl
          border border-white/10
          shadow-[0_0_30px_rgba(0,0,0,0.2)]
        "
      >
        {/* LEFT — Logo + Product */}
        <div className="flex items-center gap-6">
          <img
            src="/img/websitozlogo.png"
            alt="logo"
            className="w-10 opacity-90 hover:opacity-100 transition"
          />

          <Button
            id="product-button"
            title="Products"
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

        {/* RIGHT — Nav Items + Audio */}
        <div className="flex items-center">
          {/* Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="
                  text-white/70 
                  hover:text-white 
                  text-sm tracking-wide 
                  relative
                  after:absolute after:-bottom-1 after:left-0 
                  after:h-px after:w-0 after:bg-white 
                  after:transition-all after:duration-300 
                  hover:after:w-full
                "
              >
                {item}
              </a>
            ))}
          </div>

          {/* Audio Visualizer */}
          <button
            onClick={toggleAudioIndicator}
            className="ml-8 flex items-center gap-1.5 group"
          >
            <audio
              ref={audioElementRef}
              className="hidden"
              src="/audio/loop.mp3"
              loop
            />

            {[1, 2, 3, 4].map((bar) => (
              <div
                key={bar}
                className={clsx(
                  "w-1 h-4 rounded-sm bg-white/40 transition-all",
                  "group-hover:bg-white",
                  { "active": isIndicatorActive }
                )}
                style={{
                  animationDelay: `${bar * 0.12}s`,
                }}
              />
            ))}
          </button>
        </div>
      </nav>
    </header>
  </div>
);


};

export default NavBar;
