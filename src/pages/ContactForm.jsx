import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import ImprovedFooter from '../ui/formFooter';

const ContactForm = () => {
  // Refs for animation targets
  const headerRef = useRef(null);
  const formRef = useRef(null);
  const fieldsRef = useRef([]);

  // Mock array for form fields
  const fields = [
    { name: 'name', type: 'text', label: 'Name *' },
    { name: 'email', type: 'email', label: 'Email *' },
    { name: 'phone', type: 'tel', label: 'Phone' },
    { name: 'subject', type: 'text', label: 'Subject *' },
  ];

  useEffect(() => {
    // --- GSAP Animation Logic Placeholder ---
    // Target the elements for a subtle entrance animation
    
    // Timeline for coordinated animation
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // 1. Animate the header text
    tl.from(headerRef.current, { 
      opacity: 0, 
      y: 20, 
      duration: 1.2 
    })
    .from('.form-description', { 
      opacity: 0, 
      y: 10, 
      duration: 0.8 
    }, '-=0.5'); // Start description slightly before header ends

    // 2. Animate the form fields
    gsap.from(fieldsRef.current, {
        opacity: 0,
        y: 30,
        stagger: 0.1, // Stagger the animation of each field
        duration: 0.6,
        ease: 'back.out(1.7)',
        delay: 0.8, // Start after the header animation
    });

    // 3. Optional: Animate the CAPTCHA block
    gsap.from('.captcha-block', {
        opacity: 0,
        duration: 1,
        delay: 1.5,
    });
    // ------------------------------------------
  }, []);


    return (
  <div className="mt-20 min-h-screen bg-gray-50 p-4 sm:p-10 lg:p-20 font-sans">

    {/* Header Section */}
    <div className="max-w-4xl mx-auto mb-12">
      <h1 
        ref={headerRef}
        className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight"
      >
        Let's begin your <br />
        journey with 
        <span className="text-orange-600"> Websitoz</span>
      </h1>

      <p className="form-description mt-4 text-lg text-gray-700">
        Interested in our services? Fill out the form below to get in touch with us.
      </p>
    </div>

    {/* Form Section */}
    <form 
      ref={formRef} 
      className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden border border-gray-200"
    >

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {fields.map((field, index) => (
          <div 
            key={field.name}
            ref={el => fieldsRef.current[index] = el}
            className={`p-6 ${
              index % 2 === 0 
                ? 'border-r border-b' 
                : 'border-b'
            } border-gray-200 bg-white`}
          >
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {field.label}
            </label>
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              required={field.label.includes("*")}
              className="w-full bg-gray-50 text-gray-900 placeholder-gray-400 rounded-lg px-3 py-2 border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
        ))}
      </div>

      {/* Textarea */}
      <div 
        ref={el => fieldsRef.current[fields.length] = el}
        className="p-6 border-b border-gray-200 bg-white"
      >
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Messages *
        </label>
        <textarea
          rows="5"
          id="messages"
          required
          className="w-full bg-gray-50 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg px-3 py-3 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none"
        ></textarea>
      </div>

      {/* CAPTCHA Area */}
      {/* <div className="captcha-block p-6 flex items-center justify-between bg-gray-50">
        <div className="flex items-center space-x-3 border border-gray-400 bg-white px-3 py-2 rounded-md">
          <input type="checkbox" className="w-4 h-4" />
          <label className="text-sm text-gray-700">I'm not a robot</label>
        </div>

        <div className="text-xs text-gray-500 text-right">
          <span className="font-bold text-gray-700">reCAPTCHA</span>
          <div className="text-[10px]">Privacy - Terms</div>
        </div>
      </div> */}
      {/* REAL reCAPTCHA Area */}
<div className="captcha-block p-6 flex flex-col items-start gap-4 bg-gray-50">
  <div 
    className="g-recaptcha"
    data-sitekey="YOUR_SITE_KEY_HERE"
  ></div>

  <small className="text-gray-500 text-xs">
    This site is protected by reCAPTCHA and the Google 
    <a className="text-blue-600 ml-1" href="https://policies.google.com/privacy">Privacy Policy</a> 
    and 
    <a className="text-blue-600 ml-1" href="https://policies.google.com/terms">Terms of Service</a> apply.
  </small>
</div>

    </form>
    {/* FOOTER WITH FLAG & QUOTE */}
{/* <ImprovedFooter/> */}

  </div>
);


};

export default ContactForm;