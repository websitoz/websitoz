
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
