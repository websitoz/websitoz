
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { LazyLoadImage } from "react-lazy-load-image-component";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.2,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div data-scroll-section id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">

        {/* ---- UPDATED AGENCY CONTENT ---- */}

        <p className="font-general text-sm uppercase md:text-[10px]">
          Welcome to Websitoz Agency
        </p>

        <AnimatedTitle
          title="We buil<b>d</b> digital expe<b>r</b>iences that push brands forward"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext ">
          {/* <p className="z-50 font-semibold text-2xl">
            We are a full-stack digital agency creating world-class websites,
            apps and digital products with clean UI & stunning interactions.
          </p> */}

          <p className="text-gray-500">
            From startups to enterprises, we help brands grow through modern web 
            design, scalable web apps, mobile apps & high-performing digital solutions.
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          {/* <LazyLoadImage src="/img/about.webp" effect="blur" className="absolute left-0 top-0 size-full object-cover" /> */}
          <img
            src="/img/about.webp"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
