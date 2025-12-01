// // // src/components/ServiceShowcase.js

// // import React, { useState } from 'react';

// // // import { services } from '../data/ServicesData'; // Data import
// // import {services} from '../utils/serviceData'
// // import { FiArrowRight } from 'react-icons/fi'; // Icon for Read More

// // const ServiceShowcase = () => {
// //   // State to track the currently active service ID (default to 3 based on your screenshot)
// //   const [activeServiceId, setActiveServiceId] = useState(3); 

// //   // Get the data for the currently active service
// //   const activeService = services.find(s => s.id === activeServiceId);

// //   // Determine the index for background positioning (optional visual effect)
// //   const activeIndex = services.findIndex(s => s.id === activeServiceId);

// //   return (
// //     // Outer container: Full width, Black background
// //     <div className="bg-black text-white min-h-screen relative overflow-hidden">
      
// //       {/* Background Effect: Orange strip for the active service */}
// //       {/* NOTE: Adjust the Tailwind 'translate-y' values if you change the service list height/padding */}
// //       <div 
// //         className="hidden lg:block absolute left-0 w-32 bg-orange-500 transition-transform duration-500 ease-in-out"
// //         style={{
// //           height: '20%', // Adjust height as needed
// //           transform: `translateY(${activeIndex * 100}%)`,
// //           top: '20%',
// //         }}
// //       ></div>

// //       {/* Main Content Area */}
// //       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row relative z-10">
        
// //         {/* === Left Side: Vertical Service Menu === */}
// //         <div className="lg:w-1/4 flex-shrink-0 bg-black lg:bg-transparent pt-12 lg:pt-0">
// //           <div className="lg:fixed lg:top-1/2 lg:-translate-y-1/2 flex lg:flex-col justify-between lg:justify-start overflow-x-auto lg:overflow-visible p-4 lg:p-0">
// //             {services.map((service, index) => (
// //               <div
// //                 key={service.id}
// //                 onClick={() => setActiveServiceId(service.id)}
// //                 className={`flex-shrink-0 cursor-pointer p-4 lg:p-0 transition-colors duration-300 transform lg:origin-left lg:rotate-90 
// //                             ${service.id === activeServiceId ? 'text-orange-500' : 'text-white hover:text-gray-400'}`}
// //                 style={{ height: '5rem', width: 'auto' }} // Added fixed height/width for consistent rotation
// //               >
// //                 <div className="flex items-center space-x-2 whitespace-nowrap">
// //                   <span className="text-xl font-bold tracking-wider">{service.number}.</span>
// //                   <span className="text-lg font-normal tracking-wide">{service.title}</span>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* === Right Side: Details and Content === */}
// //         <div className="lg:w-3/4 bg-gray-100 text-gray-900 min-h-screen p-8 sm:p-12 md:p-16 lg:p-24 flex items-center">
          
// //           <div className="max-w-3xl">
// //             <p className="text-sm font-semibold uppercase tracking-widest text-orange-500 mb-4">
// //               {activeService.number}
// //             </p>
            
// //             {/* Main Heading */}
// //             <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight">
// //               {activeService.title}
// //             </h2>
            
// //             {/* Description */}
// //             <p className="text-gray-600 text-lg sm:text-xl leading-relaxed mb-10">
// //               {activeService.description}
// //             </p>

// //             {/* Read More Button/CTA */}
// //             <a href="#" className="inline-block">
// //                 <div className="w-40 h-16 rounded-full border-2 border-gray-400 flex items-center justify-center text-base font-semibold text-gray-800 hover:border-orange-500 hover:text-orange-500 transition duration-300 group">
// //                     <span className="flex items-center">
// //                         Read More 
// //                         <FiArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
// //                     </span>
// //                 </div>
// //             </a>

// //             {/* Image Section (Mockup) */}
// //             <div className="mt-16 flex justify-end">
// //                 {/* This is where you would place the image mockup */}
// //                 <div className="w-full max-w-lg">
// //                     {/* Replace this with an actual image component or tag */}
// //                     <div className="p-8 bg-white rounded-lg shadow-xl border border-gray-200">
// //                         {/*  */}
// //                         <p className="text-center text-sm text-gray-500">Image Mockup for {activeService.title}</p>
// //                         <img src={`/images/${activeService.image}`} alt={`${activeService.title} Mockup`} className="w-full h-auto object-contain mt-4" />
// //                     </div>
// //                 </div>
// //             </div>
            
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ServiceShowcase;

// // import React, { useState, useRef, useEffect } from 'react';
// // import { FiArrowRight } from 'react-icons/fi';

// // // Sample service data
// // const services = [
// //   {
// //     id: 1,
// //     number: '01',
// //     title: 'Web Development',
// //     description: 'Building responsive and modern web applications with cutting-edge technologies. We create seamless user experiences that drive engagement and conversions.',
// //     image: 'web-dev.jpg'
// //   },
// //   {
// //     id: 2,
// //     number: '02',
// //     title: 'Mobile Apps',
// //     description: 'Native and cross-platform mobile applications that deliver exceptional performance. From iOS to Android, we build apps that users love.',
// //     image: 'mobile-apps.jpg'
// //   },
// //   {
// //     id: 3,
// //     number: '03',
// //     title: 'UI/UX Design',
// //     description: 'Creating intuitive and beautiful user interfaces that enhance user satisfaction. Our designs combine aesthetics with functionality.',
// //     image: 'ui-ux.jpg'
// //   },
// //   {
// //     id: 4,
// //     number: '04',
// //     title: 'Digital Marketing',
// //     description: 'Strategic digital marketing solutions to boost your online presence. We help brands connect with their target audience effectively.',
// //     image: 'marketing.jpg'
// //   },
// //   {
// //     id: 5,
// //     number: '05',
// //     title: 'Cloud Solutions',
// //     description: 'Scalable cloud infrastructure and deployment services. We ensure your applications run smoothly with maximum uptime and security.',
// //     image: 'cloud.jpg'
// //   }
// // ];

// // const ServiceShowcase = () => {
// //   const [activeServiceId, setActiveServiceId] = useState(3);
// //   const [stripPosition, setStripPosition] = useState({ top: 0, height: 0 });
// //   const menuRefs = useRef([]);
// //   const containerRef = useRef(null);

// //   const activeService = services.find(s => s.id === activeServiceId);
// //   const activeIndex = services.findIndex(s => s.id === activeServiceId);

// //   // Calculate exact position of orange strip based on active button
// //   useEffect(() => {
// //     if (menuRefs.current[activeIndex] && containerRef.current) {
// //       const button = menuRefs.current[activeIndex];
// //       const container = containerRef.current;
      
// //       const buttonRect = button.getBoundingClientRect();
// //       const containerRect = container.getBoundingClientRect();
      
// //       const top = buttonRect.top - containerRect.top;
// //       const height = buttonRect.height;
      
// //       setStripPosition({ top, height });
// //     }
// //   }, [activeIndex]);

// //   return (
// //     <div className="w-screen h-screen bg-black text-white flex flex-col lg:flex-row overflow-hidden">
      
// //       {/* Mobile Menu */}
// //       <div className="lg:hidden w-full bg-black border-b border-gray-800 flex-shrink-0 overflow-x-auto">
// //         <div className="flex py-4 px-4 gap-3 min-w-max">
// //           {services.map((service) => (
// //             <button
// //               key={service.id}
// //               onClick={() => setActiveServiceId(service.id)}
// //               className={`flex-shrink-0 px-6 py-3 rounded-full transition-colors duration-300 ${
// //                 service.id === activeServiceId
// //                   ? 'bg-orange-500 text-white'
// //                   : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
// //               }`}
// //             >
// //               <div className="flex items-center space-x-2 whitespace-nowrap">
// //                 <span className="font-bold">{service.number}</span>
// //                 <span className="font-medium">{service.title}</span>
// //               </div>
// //             </button>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Left Side: Vertical Service Menu */}
// //       <div className="hidden lg:block w-80 relative flex-shrink-0 bg-black overflow-hidden">
        
// //         {/* Menu Container */}
// //         <div ref={containerRef} className="h-full flex flex-col justify-center pl-12 py-12 relative">
          
// //           {/* Orange Background Strip - Dynamic Positioning */}
// //           <div 
// //             className="absolute left-0 w-[85%] bg-orange-500 transition-all duration-500 ease-out rounded-r-lg"
// //             style={{
// //               top: `${stripPosition.top}px`,
// //               height: `${stripPosition.height}px`,
// //             }}
// //           />
          
// //           {/* Menu Items */}
// //           {services.map((service, index) => {
// //             const isActive = service.id === activeServiceId;
// //             return (
// //               <button
// //                 key={service.id}
// //                 ref={(el) => (menuRefs.current[index] = el)}
// //                 onClick={() => setActiveServiceId(service.id)}
// //                 className={`py-8 flex items-center transition-all duration-300 cursor-pointer relative z-10 ${
// //                   isActive 
// //                     ? 'text-white' 
// //                     : 'text-gray-500 hover:text-gray-300'
// //                 }`}
// //               >
// //                 <div className="flex items-center space-x-3">
// //                   <span className={`text-2xl font-bold transition-all duration-300 ${
// //                     isActive ? 'text-white' : 'text-gray-600'
// //                   }`}>
// //                     {service.number}
// //                   </span>
// //                   <span className="text-xl font-medium tracking-wide whitespace-nowrap">
// //                     {service.title}
// //                   </span>
// //                 </div>
// //               </button>
// //             );
// //           })}
// //         </div>
// //       </div>

// //       {/* Right Side: Content Area */}
// //       <div className="flex-1 bg-gray-100 text-gray-900 overflow-y-auto overflow-x-hidden">
// //         <div className="min-h-full w-full flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
// //           <div className="w-full max-w-5xl">
            
// //             {/* Service Number Badge */}
// //             <div className="mb-6">
// //               <span className="inline-block text-sm font-bold uppercase tracking-widest text-orange-500 bg-orange-50 px-4 py-2 rounded-full">
// //                 {activeService.number}
// //               </span>
// //             </div>
            
// //             {/* Main Heading */}
// //             <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 leading-tight text-gray-900">
// //               {activeService.title}
// //             </h2>
            
// //             {/* Description */}
// //             <p className="text-gray-600 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-10 max-w-3xl">
// //               {activeService.description}
// //             </p>

// //             {/* Read More Button */}
// //             <button className="group mb-12">
// //               <div className="w-40 sm:w-48 h-14 sm:h-16 rounded-full border-2 border-gray-400 flex items-center justify-center text-sm sm:text-base font-semibold text-gray-800 hover:border-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300">
// //                 <span className="flex items-center">
// //                   Read More 
// //                   <FiArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
// //                 </span>
// //               </div>
// //             </button>

// //             {/* Image Section */}
// //             <div className="w-full max-w-2xl lg:ml-auto">
// //               <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
// //                 <div className="w-full aspect-video bg-gradient-to-br from-orange-100 to-gray-100 flex items-center justify-center">
// //                   <div className="text-center p-6 sm:p-8">
// //                     <div className="text-4xl sm:text-5xl md:text-6xl mb-4">🎨</div>
// //                     <p className="text-gray-500 font-medium text-sm sm:text-base">
// //                       {activeService.title} Mockup
// //                     </p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
            
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ServiceShowcase;
// import React, { useState, useRef, useEffect } from 'react';
// import { FiArrowRight } from 'react-icons/fi';

// // Sample service data
// const services = [
//   {
//     id: 1,
//     number: '01',
//     title: 'Web Development',
//     description: 'Building responsive and modern web applications with cutting-edge technologies. We create seamless user experiences that drive engagement and conversions.',
//     image: 'https://cdn.dribbble.com/userupload/29997327/file/original-b44236f2401bd1af577d75116b6683f6.png?resize=1504x1128&vertical=center'
//   },
//   {
//     id: 2,
//     number: '02',
//     title: 'Mobile Apps',
//     description: 'Native and cross-platform mobile applications that deliver exceptional performance. From iOS to Android, we build apps that users love.',
//     image: 'mobile-apps.jpg'
//   },
//   {
//     id: 3,
//     number: '03',
//     title: 'UI/UX Design',
//     description: 'Creating intuitive and beautiful user interfaces that enhance user satisfaction. Our designs combine aesthetics with functionality.',
//     image: 'ui-ux.jpg'
//   },
//   {
//     id: 4,
//     number: '04',
//     title: 'Digital Marketing',
//     description: 'Strategic digital marketing solutions to boost your online presence. We help brands connect with their target audience effectively.',
//     image: 'marketing.jpg'
//   },
//   {
//     id: 5,
//     number: '05',
//     title: 'Graphic Design',
//     description: 'Creative graphic design services that bring your brand to life. From logos to marketing materials, we craft visuals that captivate and communicate.',
//     image: 'graphic-design.jpg'
//   }
// ];

// const ServiceShowcase = () => {
//   const [activeServiceId, setActiveServiceId] = useState(3);
//   const [stripPosition, setStripPosition] = useState({ top: 0, height: 0 });
//   const menuRefs = useRef([]);
//   const containerRef = useRef(null);

//   const activeService = services.find(s => s.id === activeServiceId);
//   const activeIndex = services.findIndex(s => s.id === activeServiceId);

//   // Calculate exact position of orange strip based on active button
//   useEffect(() => {
//     if (menuRefs.current[activeIndex] && containerRef.current) {
//       const button = menuRefs.current[activeIndex];
//       const container = containerRef.current;
      
//       const buttonRect = button.getBoundingClientRect();
//       const containerRect = container.getBoundingClientRect();
      
//       const top = buttonRect.top - containerRect.top;
//       const height = buttonRect.height;
      
//       setStripPosition({ top, height });
//     }
//   }, [activeIndex]);

//   return (
//     <div className="w-full bg-black rounded text-white flex flex-col lg:flex-row mx-auto my-10" style={{ maxWidth: '90vw', overflowX: 'hidden' }}>
      
//       {/* Mobile Menu */}
//       <div className="lg:hidden w-full bg-black border-b border-gray-800 overflow-x-auto">
//         <div className="flex py-3 px-4 gap-2">
//           {services.map((service) => (
//             <button
//               key={service.id}
//               onClick={() => setActiveServiceId(service.id)}
//               className={`flex-shrink-0 px-4 py-2 rounded-full transition-all duration-300 text-sm ${
//                 service.id === activeServiceId
//                   ? 'bg-[#ceff05] text-white'
//                   : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
//               }`}
//             >
//               <span className="font-semibold whitespace-nowrap">
//                 {service.number} {service.title}
//               </span>
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Left Side: Vertical Service Menu */}
//       <div className="hidden lg:flex w-64 relative flex-shrink-0 bg-black">
        
//         {/* Menu Container */}
//         <div ref={containerRef} className="h-full w-full flex flex-col justify-center pl-8 py-8 relative">
          
//           {/* Orange Background Strip */}
//           <div 
//             className="absolute left-0 w-4/5 bg-[#a0c703] transition-all duration-500 ease-out rounded-r-md"
//             style={{
//               top: `${stripPosition.top}px`,
//               height: `${stripPosition.height}px`,
//             }}
//           />
          
//           {/* Menu Items */}
//           {services.map((service, index) => {
//             const isActive = service.id === activeServiceId;
//             return (
//               <button
//                 key={service.id}
//                 ref={(el) => (menuRefs.current[index] = el)}
//                 onClick={() => setActiveServiceId(service.id)}
//                 className={`py-5 flex items-center transition-all duration-300 cursor-pointer relative z-10 ${
//                   isActive 
//                     ? 'text-white' 
//                     : 'text-gray-500 hover:text-gray-300'
//                 }`}
//               >
//                 <div className="flex items-center gap-2">
//                   <span className={`text-lg font-bold ${
//                     isActive ? 'text-white' : 'text-gray-600'
//                   }`}>
//                     {service.number}
//                   </span>
//                   <span className="text-base font-medium tracking-wide whitespace-nowrap">
//                     {service.title}
//                   </span>
//                 </div>
//               </button>
//             );
//           })}
//         </div>
//       </div>

//       {/* Right Side: Content Area */}
//       <div className="flex-1 bg-gray-50 text-gray-900" style={{ maxWidth: '100%', overflowX: 'hidden' }}>
//         <div className="h-full flex items-center justify-center p-6 sm:p-8 lg:p-12 xl:p-16">
//           <div className="w-full max-w-4xl">
            
//             {/* Service Number Badge */}
//             <div className="mb-4">
//               <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#97bd02] bg-[#ceff05] px-3 py-1.5 rounded-full">
//                 {activeService.number}
//               </span>
//             </div>
            
//             {/* Main Heading - Better Typography */}
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-5 leading-tight text-gray-900" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
//               {activeService.title}
//             </h2>
            
//             {/* Description - Compact & Readable */}
//             <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
//               {activeService.description}
//             </p>

//             {/* Read More Button - Smaller */}
//             <button className="group mb-10">
//               <div className="w-36 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center text-sm font-semibold text-gray-700 hover:border-[#ceff05] hover:bg-[#ceff05] hover:text-black transition-all duration-300">
//                 <span className="flex items-center gap-2">
//                   Read More 
//                   <FiArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
//                 </span>
//               </div>
//             </button>

//             {/* Image Section - Compact */}
//             {/* <div className="w-full max-w-xl">
//               <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
//                 <div className="w-full aspect-video bg-gradient-to-br from-orange-50 to-gray-50 flex items-center justify-center">
//                   <div className="text-center p-6">
//                     <div className="text-5xl mb-3">🎨</div>
//                     <p className="text-gray-500 font-medium text-sm">
//                       {activeService.title}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div> */}
            
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceShowcase;
import React, { useState, useRef, useEffect } from 'react';
import { FiArrowRight } from 'react-icons/fi';

// Sample service data
const services = [
  {
    id: 1,
    number: '01',
    title: 'Web Development',
    description:
      'Building responsive and modern web applications with cutting-edge technologies. We create seamless user experiences that drive engagement and conversions.',
    image:
      'https://cdn.dribbble.com/userupload/29997327/file/original-b44236f2401bd1af577d75116b6683f6.png?resize=1504x1128&vertical=center',
  },
  {
    id: 2,
    number: '02',
    title: 'Mobile Apps',
    description:
      'Native and cross-platform mobile applications that deliver exceptional performance. From iOS to Android, we build apps that users love.',
    image: 'mobile-apps.jpg',
  },
  {
    id: 3,
    number: '03',
    title: 'UI/UX Design',
    description:
      'Creating intuitive and beautiful user interfaces that enhance user satisfaction. Our designs combine aesthetics with functionality.',
    image: 'ui-ux.jpg',
  },
  {
    id: 4,
    number: '04',
    title: 'Digital Marketing',
    description:
      'Strategic digital marketing solutions to boost your online presence. We help brands connect with their target audience effectively.',
    image: 'marketing.jpg',
  },
  {
    id: 5,
    number: '05',
    title: 'Graphic Design',
    description:
      'Creative graphic design services that bring your brand to life. From logos to marketing materials, we craft visuals that captivate and communicate.',
    image: 'graphic-design.jpg',
  },
];

const ServiceShowcase = () => {
  const [activeServiceId, setActiveServiceId] = useState(3);
  const [stripPosition, setStripPosition] = useState({ top: 0, height: 0 });
  const menuRefs = useRef([]);
  const containerRef = useRef(null);

  const activeService = services.find((s) => s.id === activeServiceId);
  const activeIndex = services.findIndex((s) => s.id === activeServiceId);

  useEffect(() => {
    if (menuRefs.current[activeIndex] && containerRef.current) {
      const button = menuRefs.current[activeIndex];
      const container = containerRef.current;

      const buttonRect = button.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      const top = buttonRect.top - containerRect.top;
      const height = buttonRect.height;

      setStripPosition({ top, height });
    }
  }, [activeIndex]);

  return (
    <div
      className="w-full bg-black rounded text-white flex flex-col lg:flex-row mx-auto my-10"
      style={{ maxWidth: '90vw', overflowX: 'hidden' }}
    >
      {/* Mobile Menu Improved */}
      <div className="lg:hidden w-full bg-black border-b border-gray-800 overflow-x-auto sticky top-0 z-20 shadow-md">
        <div className="flex py-4 px-4 gap-3 snap-x overflow-x-auto no-scrollbar">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveServiceId(service.id)}
              className={`flex-shrink-0 snap-start px-4 py-3 rounded-full transition-all duration-300 text-sm shadow-md whitespace-nowrap min-w-max ${
                service.id === activeServiceId
                  ? 'bg-[#ceff05] text-black font-semibold'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <span className="font-semibold">{service.number} {service.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Left Side: Desktop Vertical Menu */}
      <div className="hidden lg:flex w-64 relative flex-shrink-0 bg-black">
        <div
          ref={containerRef}
          className="h-full w-full flex flex-col justify-center pl-8 py-8 relative"
        >
          <div
            className="absolute left-0 w-4/5 bg-[#a0c703] transition-all duration-500 ease-out rounded-r-md"
            style={{ top: `${stripPosition.top}px`, height: `${stripPosition.height}px` }}
          />

          {services.map((service, index) => {
            const isActive = service.id === activeServiceId;
            return (
              <button
                key={service.id}
                ref={(el) => (menuRefs.current[index] = el)}
                onClick={() => setActiveServiceId(service.id)}
                className={`py-5 flex items-center transition-all duration-300 cursor-pointer relative z-10 ${
                  isActive ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className={`text-lg font-bold ${isActive ? 'text-white' : 'text-gray-600'}`}>
                    {service.number}
                  </span>
                  <span className="text-base font-medium tracking-wide whitespace-nowrap">
                    {service.title}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Right Side Content */}
      <div
        className="flex-1 bg-gray-50 text-gray-900"
        style={{ maxWidth: '100%', overflowX: 'hidden' }}
      >
        <div className="h-full flex items-center justify-center p-6 sm:p-8 lg:p-12 xl:p-16">
          <div className="w-full max-w-4xl">
            <div className="mb-4">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#97bd02] bg-[#ceff05] px-3 py-1.5 rounded-full">
                {activeService.number}
              </span>
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-5 leading-tight text-gray-900"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              {activeService.title}
            </h2>

            <p
              className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              {activeService.description}
            </p>

            <button className="group mb-10">
              <div className="w-36 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center text-sm font-semibold text-gray-700 hover:border-[#ceff05] hover:bg-[#ceff05] hover:text-black transition-all duration-300">
                <span className="flex items-center gap-2">
                  Read More
                  <FiArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceShowcase;
