import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const ImprovedFooter = () => {
  const quoteRef = useRef(null);
  const flagRef = useRef(null);

  // GSAP animation for a premium entrance effect
  useEffect(() => {
    // Subtle fade-in and slight scale up for the premium feel
    gsap.from(flagRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power2.out',
    });
    
    // Animate the quote text after the flag
    gsap.from(quoteRef.current, {
      opacity: 0,
      y: 10,
      duration: 1,
      delay: 0.3, // Start after the flag
      ease: 'power3.out',
    });
  }, []);

  return (
    // Outer container: Dark background, padding, full width
    <div className="bg-gray-900 py-16 px-4"> 
      <div className="max-w-4xl mx-auto text-center">

        {/* 1. Flag Image with Premium Styling */}
        <img 
          ref={flagRef}
          src="data:image/png;base64,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"
          alt="India Flag"
          // Adding a subtle circle container and shadow for a premium feel
          className="mx-auto mb-5 drop-shadow-xl border-4 border-gray-700 rounded-full p-1 w-14 h-14 object-cover" 
        />

        {/* 2. Custom Separator (Optional: adds sophistication) */}
        <div className="w-16 h-0.5 bg-orange-500 mx-auto mb-8 opacity-70"></div>

        {/* 3. Agency Quote with Modern Typography */}
        <p 
          ref={quoteRef}
          className="text-white text-xl sm:text-2xl font-light leading-relaxed tracking-wider" // Lighter font-weight and wider tracking for premium
        >
          <span className="text-orange-400 font-serif text-3xl mr-1">“</span>
          Great journeys begin with a single step — let's build something extraordinary together.
          <span className="text-orange-400 font-serif text-3xl ml-1">”</span>
        </p>
        
        {/* 4. Sub-Text (Agency/Location) */}
        <p className="mt-8 text-gray-500 text-sm italic font-medium">
          — Four Fox Digital, New Delhi, India
        </p>

      </div>
    </div>
  );
};

export default ImprovedFooter;