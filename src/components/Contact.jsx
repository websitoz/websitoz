// // import AnimatedTitle from "./AnimatedTitle";
// // import Button from "./Button";

// // const ImageClipBox = ({ src, clipClass }) => (
// //   <div className={clipClass}>
// //     <img src={src} />
// //   </div>
// // );

// // const Contact = () => {
// //   return (
// //     <div id="contact" className="my-20 min-h-96 w-screen  px-10">
// //       <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
// //         <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
// //           <ImageClipBox
// //             src="/img/contact-1.webp"
// //             clipClass="contact-clip-path-1"
// //           />
// //           <ImageClipBox
// //             src="/img/contact-2.webp"
// //             clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
// //           />
// //         </div>

// //         <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
// //           <ImageClipBox
// //             src="/img/swordman-partial.webp"
// //             clipClass="absolute md:scale-125"
// //           />
// //           <ImageClipBox
// //             src="/img/swordman.webp"
// //             clipClass="sword-man-clip-path md:scale-125"
// //           />
// //         </div>

// //         <div className="flex flex-col items-center text-center">
// //           <p className="mb-10 font-general text-[10px] uppercase">
// //             Join Zentry
// //           </p>

// //           <AnimatedTitle
// //             title="let&#39;s b<b>u</b>ild the <br /> new era of <br /> g<b>a</b>ming t<b>o</b>gether."
// //             className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
// //           />

// //           <Button title="contact us" containerClass="mt-10 cursor-pointer" />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Contact;
// import AnimatedTitle from "./AnimatedTitle";
// import Button from "./Button";

// const Contact = () => {
//   const ImageClipBox = ({ src, clipClass }) => (
//   <div className={clipClass}>
//     <img src={src} />
//   </div>
// );
//   return (
//     <div id="contact" className="my-24 w-screen px-10">
//       <div className="relative overflow-hidden rounded-2xl bg-[#0d0d0f] py-24 text-blue-50">
        
//         {/* Floating Gradient Blobs */}
//         <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 translate-x-[-30%] translate-y-[-30%] rounded-full bg-[#6a5cff] opacity-30 blur-[120px]" />
//         <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 translate-x-[20%] translate-y-[20%] rounded-full bg-[#5c8bff] opacity-30 blur-[120px]" />

//         <div className="relative z-10 flex flex-col items-center text-center">
//           {/* Tagline */}
//           <p className="mb-6 font-general text-xs uppercase tracking-widest text-gray-300">
//             Let's Collaborate
//           </p>
//            <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
//          <ImageClipBox
//            src="/img/contact-1.webp"
//            clipClass="contact-clip-path-1"
//          />
//          <ImageClipBox
//            src="/img/contact-2.webp"
//            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
//          />
//        </div>

//           {/* Animated Heading */}
//           <AnimatedTitle
//             title="b<b>r</b>ing your<br /> id<b>e</b>as to lif<b>e</b>."
//             className="special-font w-full !text-5xl !leading-[0.9] !font-black md:!text-[5.5rem]"
//           />

//           {/* Sub text */}
//           <p className="mt-6 max-w-lg text-center font-light text-gray-300">
//             Whether you're building a brand, designing a product, or launching a startup — 
//             our team can help you create something extraordinary.
//           </p>
//           <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
//            <ImageClipBox
//              src="/img/swordman-partial.webp"
//              clipClass="absolute md:scale-125"
//            />
//            <ImageClipBox
//              src="/img/swordman.webp"
//              clipClass="sword-man-clip-path md:scale-125"
//            />
//          </div>
//           {/* Button */}
//           <Button 
//             title="Get in Touch" 
//             containerClass="mt-10 cursor-pointer"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const Contact = () => {
  return (
    <div id="contact" className="my-24 w-screen px-6 md:px-10">
      <div className="relative overflow-hidden rounded-2xl bg-[#0d0d0f] py-20 md:py-28 text-blue-50">

        {/* Floating Gradient Blobs */}
        <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 -translate-x-1/3 -translate-y-1/3 rounded-full bg-[#6a5cff] opacity-30 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 translate-x-1/4 translate-y-1/4 rounded-full bg-[#5c8bff] opacity-30 blur-[120px]" />

        {/* Main Content */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-16 px-4 md:px-14">

          {/* LEFT — AUTOPLAY VIDEO */}
          <div className="rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.4)]">
            <video
              src="/videos/web.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-[260px] md:h-[380px] lg:h-[420px] object-cover"
            />
          </div>

          {/* RIGHT — TEXT + BUTTON */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <p className="mb-3 font-general text-xs uppercase tracking-[0.2em] text-gray-300 md:mb-4">
              Let's Collaborate
            </p>

            <AnimatedTitle
              title="b<b>r</b>ing your<br /> id<b>e</b>as to lif<b>e</b>."
              className="special-font w-full !text-4xl !leading-[1] !font-black
              sm:!text-5xl md:!text-6xl lg:!text-[4.5rem]"
            />

            <p className="mt-6 max-w-md md:max-w-lg text-gray-300 font-light mx-auto md:mx-0">
              Whether you're building a brand, designing a product, or launching a startup — 
              our team can help you create something extraordinary.
            </p>

            <div className="mt-10 flex justify-center md:justify-start">
              <Button 
                title="Get in Touch"
                containerClass="cursor-pointer"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
