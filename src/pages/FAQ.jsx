import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import {
  FaCode,
  FaMobileAlt,
  FaSearch,
  FaPaintBrush,
  FaBullhorn,
  FaPlus,
  FaMinus
} from "react-icons/fa";

const faqData = [
  {
    icon: <FaCode className="text-blue-500 text-2xl" />,
    title: "What is the process for Web Development?",
    desc: "We follow a professional workflow including UI/UX design, development, testing, and final deployment. All websites are responsive, secure, and SEO-friendly."
  },
  {
    icon: <FaMobileAlt className="text-green-500 text-2xl" />,
    title: "How long does App Development take?",
    desc: "Basic mobile apps take around 3–5 weeks. Apps with advanced features usually require 6–10 weeks depending on the complexity and requirements."
  },
  {
    icon: <FaSearch className="text-yellow-500 text-2xl" />,
    title: "What are the benefits of SEO services?",
    desc: "SEO helps your website rank higher on Google, increases traffic, improves lead generation, and boosts overall brand visibility online."
  },
  {
    icon: <FaPaintBrush className="text-pink-500 text-2xl" />,
    title: "What do you include in Branding & Graphic Design?",
    desc: "We offer logo design, banners, posters, brand kits, social media creatives, business cards, thumbnails, and complete brand identity packages."
  },
  {
    icon: <FaBullhorn className="text-purple-500 text-2xl" />,
    title: "What is included in the Digital Marketing package?",
    desc: "Our Digital Marketing services include ad campaigns, content creation, social media management, engagement growth, analytics, and performance reporting."
  }
];

const FAQ = () => {
  const headingRef = useRef();
  const itemsRef = useRef([]);
  const [openIndex, setOpenIndex] = useState(null);

  useLayoutEffect(() => {
    gsap.set([headingRef.current, ...itemsRef.current], { opacity: 0, y: 50 });

    gsap.to(headingRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    });

    gsap.to(itemsRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.15,
      delay: 0.3
    });
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-[#0f0f0f] text-white font-[general] px-4 py-20">

      <h1
        ref={headingRef}
        className="text-4xl md:text-6xl font-[zentry] text-center mb-16"
      >
        Frequently Asked Questions
      </h1>

      <div className="max-w-4xl mx-auto space-y-6">

        {faqData.map((faq, i) => (
          <div
            ref={(el) => (itemsRef.current[i] = el)}
            key={i}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="bg-white/10 border border-white/20 backdrop-blur-xl p-6 rounded-2xl shadow-lg
                       hover:bg-white/20 transition-all duration-300 cursor-pointer"
          >
            <div className="flex justify-between items-center">
              <div className="flex gap-4 items-center">
                {faq.icon}
                <h2 className="text-xl font-[robert-medium]">{faq.title}</h2>
              </div>

              {openIndex === i ? (
                <FaMinus className="text-xl text-red-400" />
              ) : (
                <FaPlus className="text-xl text-green-400" />
              )}
            </div>

            <div
              className={`overflow-hidden transition-all duration-500 ${
                openIndex === i ? "max-h-40 mt-3" : "max-h-0"
              }`}
            >
              <p className="text-gray-200 font-[robert-regular] leading-relaxed text-sm md:text-base">
                {faq.desc}
              </p>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default FAQ;
