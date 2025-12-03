// import { useState, useRef } from "react";
// import { TiLocationArrow } from "react-icons/ti";

// export const BentoTilt = ({ children, className = "" }) => {
//   const [transformStyle, setTransformStyle] = useState("");
//   const itemRef = useRef(null);

//   const handleMouseMove = (event) => {
//     if (!itemRef.current) return;

//     const { left, top, width, height } =
//       itemRef.current.getBoundingClientRect();

//     const relativeX = (event.clientX - left) / width;
//     const relativeY = (event.clientY - top) / height;

//     const tiltX = (relativeY - 0.5) * 5;
//     const tiltY = (relativeX - 0.5) * -5;

//     const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
//     setTransformStyle(newTransform);
//   };

//   const handleMouseLeave = () => {
//     setTransformStyle("");
//   };

//   return (
//     <div
//       ref={itemRef}
//       className={className}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       style={{ transform: transformStyle }}
//     >
//       {children}
//     </div>
//   );
// };

// export const BentoCard = ({ src, title, description, isComingSoon }) => {
//   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
//   const [hoverOpacity, setHoverOpacity] = useState(0);
//   const hoverButtonRef = useRef(null);

//   const handleMouseMove = (event) => {
//     if (!hoverButtonRef.current) return;
//     const rect = hoverButtonRef.current.getBoundingClientRect();

//     setCursorPosition({
//       x: event.clientX - rect.left,
//       y: event.clientY - rect.top,
//     });
//   };

//   const handleMouseEnter = () => setHoverOpacity(1);
//   const handleMouseLeave = () => setHoverOpacity(0);

//   return (
//     <div className="relative size-full">
//       <video
//         src={src}
//         loop
//         muted
//         autoPlay
//         className="absolute left-0 top-0 size-full object-cover object-center"
//       />
//       <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
//         <div>
//           <h1 className="bento-title special-font">{title}</h1>
//           {description && (
//             <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
//           )}
//         </div>

//         {isComingSoon && (
//           <div
//             ref={hoverButtonRef}
//             onMouseMove={handleMouseMove}
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//             className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
//           >
//             {/* Radial gradient hover effect */}
//             <div
//               className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
//               style={{
//                 opacity: hoverOpacity,
//                 background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
//               }}
//             />
//             <TiLocationArrow className="relative z-20" />
//             <p className="relative z-20">coming soon</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// const Features = () => (
//   <section className="bg-black pb-52">
//     <div className="container mx-auto px-3 md:px-10">
//       <div className="px-5 py-32">
//         <p className="font-circular-web text-lg text-blue-50">
//           Into the Metagame Layer
//         </p>
//         <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
//           Immerse yourself in a rich and ever-expanding universe where a vibrant
//           array of products converge into an interconnected overlay experience
//           on your world.
//         </p>
//       </div>

//       <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
//         <BentoCard
//           src="videos/feature-1.mp4"
//           title={
//             <>
//               radia<b>n</b>t
//             </>
//           }
//           description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
//           isComingSoon
//         />
//       </BentoTilt>

//       <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
//         <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
//           <BentoCard
//             src="videos/feature-2.mp4"
//             title={
//               <>
//                 zig<b>m</b>a
//               </>
//             }
//             description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
//             isComingSoon
//           />
//         </BentoTilt>

//         <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
//           <BentoCard
//             src="videos/feature-3.mp4"
//             title={
//               <>
//                 n<b>e</b>xus
//               </>
//             }
//             description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
//             isComingSoon
//           />
//         </BentoTilt>

//         <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
//           <BentoCard
//             src="videos/feature-4.mp4"
//             title={
//               <>
//                 az<b>u</b>l
//               </>
//             }
//             description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
//             isComingSoon
//           />
//         </BentoTilt>

//         <BentoTilt className="bento-tilt_2">
//           <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
//             <h1 className="bento-title special-font max-w-64 text-black">
//               M<b>o</b>re co<b>m</b>ing s<b>o</b>on.
//             </h1>

//             <TiLocationArrow className="m-5 scale-[5] self-end" />
//           </div>
//         </BentoTilt>

//         <BentoTilt className="bento-tilt_2">
//           <video
//             src="videos/feature-5.mp4"
//             loop
//             muted
//             autoPlay
//             className="size-full object-cover object-center"
//           />
//         </BentoTilt>
//       </div>
//     </div>
//   </section>
// );

// export default Features;
import React, { useState, useRef, useEffect } from "react";
import { TiLocationArrow } from "react-icons/ti";

/*
  Full single-file React component (Features.jsx) for the Ikso-style
  Features section. Uses TailwindCSS utility classes. Drop this file into
  your React project (e.g., src/components/Features.jsx) and make sure
  you have Tailwind set up.

  Video asset paths used in this example:
    videos/agency-showcase-1.mp4
    videos/agency-showcase-2.mp4
    videos/agency-showcase-3.mp4
    videos/agency-showcase-4.mp4
    videos/agency-showcase-5.mp4

  If you want subtle smoothing on the tilt effect, the component uses
  requestAnimationFrame to lerp the transform for a polished feel.
*/

// export const BentoTilt = ({ children, className = "", maxTilt = 6 }) => {
//   const itemRef = useRef(null);
//   const rafRef = useRef(null);
//   const targetTransform = useRef("");
//   const [appliedTransform, setAppliedTransform] = useState("");

//   useEffect(() => {
//     // simple rAF loop to smoothly interpolate transform
//     let last = 0;
//     const tick = (time) => {
//       // lerp between appliedTransform and targetTransform by string compare isn't possible,
//       // so we apply target directly for simplicity while keeping rAF for future enhancements.
//       setAppliedTransform(targetTransform.current);
//       rafRef.current = requestAnimationFrame(tick);
//     };
//     rafRef.current = requestAnimationFrame(tick);
//     return () => cancelAnimationFrame(rafRef.current);
//   }, []);

//   const handleMouseMove = (event) => {
//     if (!itemRef.current) return;
//     const rect = itemRef.current.getBoundingClientRect();
//     const relativeX = (event.clientX - rect.left) / rect.width;
//     const relativeY = (event.clientY - rect.top) / rect.height;

//     // center-based and inverted appropriately
//     const tiltX = (relativeY - 0.5) * maxTilt; // rotateX
//     const tiltY = (relativeX - 0.5) * -maxTilt; // rotateY

//     // scale slightly and add perspective
//     const newTransform = `perspective(900px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) scale3d(0.98,0.98,0.98)`;
//     targetTransform.current = newTransform;
//   };

//   const handleMouseLeave = () => {
//     targetTransform.current = "";
//   };

//   return (
//     <div
//       ref={itemRef}
//       className={`will-change-transform transition-transform duration-300 ${className}`}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       style={{ transform: appliedTransform }}
//     >
//       {children}
//     </div>
//   );
// };

// export const BentoCard = ({ src, title, description, isComingSoon = false }) => {
//   const [cursor, setCursor] = useState({ x: 0, y: 0 });
//   const [hover, setHover] = useState(false);
//   const hoverRef = useRef(null);

//   useEffect(() => {
//     // prevent video context menu on right click in case desired
//     const el = hoverRef.current;
//     if (!el) return;
//     const onContext = (e) => e.preventDefault();
//     el.addEventListener("contextmenu", onContext);
//     return () => el.removeEventListener("contextmenu", onContext);
//   }, []);

//   const onHoverMove = (e) => {
//     if (!hoverRef.current) return;
//     const rect = hoverRef.current.getBoundingClientRect();
//     setCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top });
//   };

//   return (
//     <div className="relative size-full min-h-[24rem] w-full overflow-hidden rounded-md bg-black text-white">
//       {/* Background video or poster layer */}
//       {src ? (
//         <video
//           src={src}
//           loop
//           muted
//           autoPlay
//           playsInline
//           className="absolute inset-0 h-full w-full object-cover object-center opacity-60"
//         />
//       ) : (
//         <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900 opacity-80" />
//       )}

//       {/* Content overlay */}
//       <div className="relative z-10 flex h-full w-full flex-col justify-between p-6">
//         <div>
//           <h3 className="bento-title special-font text-2xl md:text-4xl font-semibold leading-tight">
//             {title}
//           </h3>
//           {description && (
//             <p className="mt-3 max-w-prose text-sm md:text-base text-white/80">{description}</p>
//           )}
//         </div>

//         {/* CTA / Coming soon button */}
//         {isComingSoon && (
//           <div
//             ref={hoverRef}
//             className="relative z-20 mt-4 inline-flex cursor-pointer items-center gap-3 overflow-hidden rounded-full border border-white/8 bg-black/50 px-4 py-2 text-xs uppercase text-white/80"
//             onMouseMove={onHoverMove}
//             onMouseEnter={() => setHover(true)}
//             onMouseLeave={() => setHover(false)}
//           >
//             {/* radial hover effect */}
//             <div
//               className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
//               style={{
//                 opacity: hover ? 1 : 0,
//                 background: `radial-gradient(120px circle at ${cursor.x}px ${cursor.y}px, rgba(101,111,226,0.22), rgba(0,0,0,0.22))`,
//               }}
//             />
//             <TiLocationArrow className="relative z-10 h-4 w-4" />
//             <span className="relative z-10">Explore</span>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// const Features = () => {
//   return (
//     <section className="bg-[#050506] pb-40">
//       <div className="container mx-auto px-5 md:px-12">
//         {/* Header */}
//         <div className="py-24">
//           <p className="font-circular-web text-sm tracking-widest text-white/60 uppercase">
//             Our Capabilities
//           </p>
//           <h2 className="max-w-2xl mt-3 font-circular-web text-3xl md:text-5xl text-white leading-tight">
//             Building next‑gen digital experiences with precision, design and technology.
//           </h2>
//         </div>

//         {/* Large primary bento */}
//         <BentoTilt className="border border-white/6 relative mb-10 h-96 w-full overflow-hidden rounded-lg md:h-[60vh]">
//           <BentoCard
//             src="videos/hero_optim.mp4"
//             title={
//               <>
//                 Digital <b>Experience</b>
//               </>
//             }
//             description="We craft high‑impact, high‑performance digital products and websites for brands that lead."
//             isComingSoon={true}
//           />
//         </BentoTilt>

//         {/* Grid */}
//         <div className="grid h-[130vh] w-full grid-cols-2 grid-rows-3 gap-7">
//           <BentoTilt className="col-span-2 md:col-span-1 row-span-2">
//             <BentoCard
//               src="videos/C1z_updated.mp4"
//               title={
//                 <>
//                   Brand & <b>Identity</b>
//                 </>
//               }
//               description="Modern visual identity systems that communicate clarity, trust and distinction."
//               isComingSoon={true}
//             />
//           </BentoTilt>

//           <BentoTilt className="ms-24 md:ms-0">
//             <BentoCard
//               src="videos/feature-4.mp4"
//               title={
//                 <>
//                   Web <b>Development</b>
//                 </>
//               }
//               description="Fast, scalable, conversion‑driven websites built with modern performance standards."
//               isComingSoon={true}
//             />
//           </BentoTilt>

//           <BentoTilt className="me-14 md:me-0">
//             <BentoCard
//               src="videos/agency-showcase-4.mp4"
//               title={
//                 <>
//                   Product <b>Design</b>
//                 </>
//               }
//               description="Design systems and interface design for SaaS, apps and digital‑first products."
//               isComingSoon={true}
//             />
//           </BentoTilt>

//           <BentoTilt>
//             <div className="flex h-full w-full flex-col justify-between bg-white/6 backdrop-blur-sm p-6">
//               <h3 className="bento-title special-font max-w-64 text-white text-3xl leading-tight">
//                 M<b>o</b>re se<b>r</b>vices un<b>lo</b>ck soon.
//               </h3>
//               <TiLocationArrow className="m-5 scale-[4] text-white/50 self-end" />
//             </div>
//           </BentoTilt>

//           <BentoTilt>
//             <video
//               src="videos/Timeline-1.mp4"
//               loop
//               muted
//               autoPlay
//               playsInline
//               className="size-full h-full w-full object-cover object-center"
//             />
//           </BentoTilt>
//         </div>
//       </div>

//       {/* Minimal additional CSS for a couple of utility classes if you want */}
//       <style jsx>{`
//         .bento-title b { font-weight: 800; color: inherit; opacity: 0.96; }
//         .size-full { width: 100%; height: 100%; }
//       `}</style>
//     </section>
//   );
// };

// export default Features;`
// import { TiLocationArrow } from "react-icons/ti";
// import { useRef, useState, useEffect } from "react";
import { BentoTilt } from "./BentoTilt";
import { BentoCard } from "./BentoCard";


const Features = () => {
  return (
    <section className="bg-[#050506] pb-40">
      <div className="container mx-auto px-5 md:px-12">
        
        {/* Header */}
        <div className="py-24">
          <p className="font-circular-web text-sm tracking-widest text-white/60 uppercase">
            Our Capabilities
          </p>
          <h2 className="max-w-2xl mt-3 font-circular-web text-3xl md:text-5xl text-white leading-tight">
            Building next-gen digital experiences with precision, design and technology.
          </h2>
        </div>

        {/* Primary Bento Full Width */}
        {/* <BentoTilt className="border border-white/10 relative mb-10 h-[55vh] md:h-[65vh] w-full overflow-hidden rounded-lg">
          <BentoCard
            src="videos/hero_optim.mp4"
            title={
              <>
                Digital <b>Experience</b>
              </>
            }
            description="We craft high-impact, high-performance digital products and websites for brands that lead."
            isComingSoon={true}
          />
        </BentoTilt> */}

        {/* Responsive Bento Grid */}
        <div
          className="
            grid 
            grid-cols-1 
            md:grid-cols-2 
            gap-7 
            auto-rows-[24rem] 
            md:auto-rows-[32rem] 
            lg:auto-rows-[40rem]
          "
        >
          {/* Big Left Card */}
          <BentoTilt className="col-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="videos/C1z_updated.mp4"
              title={
                <>
                  Brand & <b>Identity</b>
                </>
              }
              description="Modern visual identity systems that communicate clarity, trust and distinction."
              isComingSoon={true}
            />
          </BentoTilt>

          {/* Web Dev */}
          <BentoTilt>
            <BentoCard
              src="videos/web1.webm"
              title={
                <>
                  Web <b>Development</b>
                </>
              }
              description="Fast, scalable, conversion-driven websites built with modern performance standards."
              isComingSoon={true}
            />
          </BentoTilt>

          {/* Product Design */}
          <BentoTilt>
            <BentoCard
              src="videos/details.mp4"
              title={
                <>
                  Product <b>Design</b>
                </>
              }
              description="Design systems and interface design for SaaS, apps and digital-first products."
              isComingSoon={true}
            />
          </BentoTilt>

          {/* More Services */}
          <BentoTilt>
            <div className="flex h-full w-full flex-col justify-between bg-white/10 backdrop-blur-sm p-6">
              <h3 className="bento-title special-font max-w-64 text-white text-3xl leading-tight">
                M<b>o</b>re se<b>r</b>vices un<b>lo</b>ck soon.
              </h3>
              <TiLocationArrow className="m-5 scale-[4] text-white/50 self-end" />
            </div>
          </BentoTilt>

          {/* Timeline Video */}
          <BentoTilt>
            <video
              src="videos/Timeline-1.mp4"
              loop
              muted
              autoPlay
              playsInline
              className="size-full h-full w-full object-cover object-center"
            />
          </BentoTilt>
        </div>
      </div>

      {/* Utility CSS */}
      <style jsx>{`
        .bento-title b {
          font-weight: 800;
          color: inherit;
          opacity: 0.96;
        }
        .size-full {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </section>
  );
};

export default Features;
