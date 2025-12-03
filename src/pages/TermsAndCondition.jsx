import { useEffect, useRef } from "react";
import { FaShieldAlt, FaFileContract, FaCheckCircle } from "react-icons/fa";
import gsap from "gsap";

const TermsAndConditions = () => {
  const headingRef = useRef();
  const sectionsRef = useRef([]);

  useEffect(() => {
    gsap.from(headingRef.current, {
      opacity: 0,
      y: -50,
      duration: 1.2,
      ease: "power3.out",
    });

    gsap.from(sectionsRef.current, {
      opacity: 0,
      y: 40,
      duration: 1.2,
      ease: "power3.out",
      stagger: 0.2,
      delay: 0.4,
    });
  }, []);

  return (
    <div className="relative w-full min-h-screen text-white font-[general] overflow-hidden">

      {/* 🔥 Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        src="/videos/feature-1.mp4"
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-20 md:py-28">

        {/* Heading */}
        <h1
          ref={headingRef}
          className="text-4xl md:text-6xl font-[zentry] text-center tracking-wide mb-14"
        >
          Terms & Conditions
        </h1>

        {/* Content Box */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 md:p-12 shadow-2xl">

          {/* Section */}
          <div
            ref={(el) => (sectionsRef.current[0] = el)}
            className="flex gap-4 items-start mb-8 md:mb-10"
          >
            <FaShieldAlt className="text-3xl text-blue-400 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-[robert-medium] mb-2">User Privacy & Security</h2>
              <p className="text-gray-200 leading-relaxed font-[robert-regular] text-sm md:text-base">
                Your personal data is fully protected. We do not share your information with
                any external parties unless necessary for delivering services.
              </p>
            </div>
          </div>

          {/* Section */}
          <div
            ref={(el) => (sectionsRef.current[1] = el)}
            className="flex gap-4 items-start mb-8 md:mb-10"
          >
            <FaFileContract className="text-3xl text-purple-400 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-[robert-medium] mb-2">Website Usage Agreement</h2>
              <p className="text-gray-200 leading-relaxed font-[robert-regular] text-sm md:text-base">
                All content, design assets, and code on this website are protected. You agree
                not to misuse or replicate them for unauthorized purposes.
              </p>
            </div>
          </div>

          {/* Section */}
          <div
            ref={(el) => (sectionsRef.current[2] = el)}
            className="flex gap-4 items-start"
          >
            <FaCheckCircle className="text-3xl text-green-400 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-[robert-medium] mb-2">Agency Service Policy</h2>
              <p className="text-gray-200 leading-relaxed font-[robert-regular] text-sm md:text-base">
                We maintain high standards while delivering design, development, and branding
                services. Timelines and deliverables will always be communicated clearly.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
