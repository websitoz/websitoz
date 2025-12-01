// // import { useEffect, useRef } from "react";
// // import LocomotiveScroll from "locomotive-scroll";
// // import "locomotive-scroll/dist/locomotive-scroll.css";

// // const SmoothScroll = ({ children }) => {
// //   const scrollRef = useRef(null);

// //   useEffect(() => {
// //     const scroll = new LocomotiveScroll({
// //       el: scrollRef.current,
// //       smooth: true,
// //       smartphone: { smooth: true },
// //       tablet: { smooth: true },
// //       multiplier: 1,
// //       class: "is-reveal",
// //     });

// //     // refresh on load
// //     setTimeout(() => {
// //       scroll.update();
// //     }, 300);

// //     return () => {
// //       scroll.destroy();
// //     };
// //   }, []);

// //   return (
// //     <div id="smooth-wrapper" data-scroll-container ref={scrollRef}>
// //       {children}
// //     </div>
// //   );
// // };

// // export default SmoothScroll;
// import { useEffect, useRef } from "react";
// import LocomotiveScroll from "locomotive-scroll";
// import "locomotive-scroll/dist/locomotive-scroll.css";
// // GSAP और ScrollTrigger आयात करें
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger"; 

// // सुनिश्चित करें कि ScrollTrigger पंजीकृत है (हालांकि इसे App.jsx में या Hero.jsx में 
// // पंजीकृत किया जा सकता है, इसे यहां भी करना सुरक्षित है)
// gsap.registerPlugin(ScrollTrigger);

// const SmoothScroll = ({ children }) => {
//   const scrollRef = useRef(null);

//   useEffect(() => {
//     // 1. Locomotive Scroll Inıtialization
//     const scroll = new LocomotiveScroll({
//       el: scrollRef.current,
//       smooth: true,
//       smartphone: { smooth: true },
//       tablet: { smooth: true },
//       multiplier: 1,
//       class: "is-reveal",
//     });

//     // 2. ScrollTrigger Integration (Proxy Setup)
//     // Locomotive Scroll को ScrollTrigger का "scroller" बताएं।
//     ScrollTrigger.scrollerProxy(scrollRef.current, {
//         scrollTop(value) {
//             // Getter: वर्तमान स्क्रॉल स्थिति लौटाएँ
//             return arguments.length ? 
//                    scroll.scrollTo(value, { duration: 0, disableLerp: true }) : 
//                    scroll.scroll.instance.scroll.y;
//         },
//         // bounding box की गणना कैसे करें
//         getBoundingClientRect() {
//             return {
//                 top: 0,
//                 left: 0,
//                 width: window.innerWidth,
//                 height: window.innerHeight,
//             };
//         },
//         // Locomotive द्वारा "fixed" स्थिति वाले तत्वों को कैसे संभाला जाए (यदि उपयोग कर रहे हैं)
//         pinType: scrollRef.current.style.transform ? "transform" : "fixed"
//     });

//     // 3. ScrollTrigger Update on Locomotive Scroll Event
//     // Locomotive Scroll के हर स्क्रॉल इवेंट पर ScrollTrigger को अपडेट करें
//     scroll.on("scroll", ScrollTrigger.update);
    
//     // 4. GSAP द्वारा Locomotive Scroll को रीफ़्रेश करने के लिए एक फ़ंक्शन
//     ScrollTrigger.defaults({
//         scroller: scrollRef.current,
//     });
    
//     // 5. Initial Refresh / Update
//     // सुनिश्चित करें कि DOM पूरी तरह से लोड होने के बाद ScrollTrigger और Locomotive दोनों अपडेट हों
//     ScrollTrigger.refresh();


//     // 6. Clean up
//     return () => {
//       // क्लीनअप करते समय ScrollTrigger प्रॉक्सी को हटाएँ
//       ScrollTrigger.removeEventListener("refresh", () => scroll.update());
//       ScrollTrigger.scrollerProxy(scrollRef.current, null);
      
//       scroll.destroy();
//     };
//   }, []);

//   return (
//     <div id="smooth-wrapper" data-scroll-container ref={scrollRef}>
//       {children}
//     </div>
//   );
// };

// export default SmoothScroll;
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
// ✅ GSAP और ScrollTrigger आयात करें
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; 

gsap.registerPlugin(ScrollTrigger);

const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    // 1. Locomotive Scroll Initialization
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      smartphone: { smooth: true },
      tablet: { smooth: true },
      multiplier: 1,
      class: "is-reveal",
    });

    // 2. ScrollTrigger Integration (Proxy Setup)
    // Locomotive Scroll को ScrollTrigger का "scroller" बताएं।
    ScrollTrigger.scrollerProxy(scrollRef.current, {
        scrollTop(value) {
            // Getter: वर्तमान स्क्रॉल स्थिति लौटाएँ
            return arguments.length ? 
                   scroll.scrollTo(value, { duration: 0, disableLerp: true }) : 
                   scroll.scroll.instance.scroll.y;
        },
        // bounding box की गणना कैसे करें
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
            };
        },
        // 'transform' का उपयोग करने के लिए ScrollTrigger को बताएं
        pinType: scrollRef.current.style.transform ? "transform" : "fixed"
    });

    // 3. ScrollTrigger Update on Locomotive Scroll Event
    // Locomotive Scroll के हर स्क्रॉल इवेंट पर ScrollTrigger को अपडेट करें
    scroll.on("scroll", ScrollTrigger.update);
    
    // 4. Initial Refresh / Update
    // यह सुनिश्चित करता है कि सब कुछ शुरू होने पर सिंक हो जाए
    ScrollTrigger.refresh();


    // 5. Clean up
    return () => {
      // क्लीनअप करते समय ScrollTrigger प्रॉक्सी को हटाएँ
      scroll.destroy();
      ScrollTrigger.scrollerProxy(scrollRef.current, null);
    };
  }, []);

  return (
    // 'data-scroll-container' Locomotive Scroll के लिए आवश्यक है
    <div id="smooth-wrapper" data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
};

export default SmoothScroll;