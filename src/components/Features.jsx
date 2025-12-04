
import { BentoTilt } from "./BentoTilt";
import { BentoCard } from "./BentoCard";
import { TiLocationArrow } from "react-icons/ti";


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
