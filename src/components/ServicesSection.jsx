import React from "react";
import { 
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  ArrowTrendingUpIcon,
  SwatchIcon,
  MegaphoneIcon,
  CursorArrowRaysIcon
} from "@heroicons/react/24/outline";

// React Icons
import { 
  SiReact, SiNextdotjs, SiTailwindcss, SiWordpress, SiTypescript,
  SiNodedotjs, SiMongodb, SiPostgresql, SiExpress, SiFigma,
  SiGoogleads, SiGoogleanalytics, SiAdobephotoshop, SiAdobexd
} from "react-icons/si";


const techIcons = {
  "React.js": <SiReact className="text-blue-500 text-xl" />,
  "Next.js": <SiNextdotjs className="text-black text-xl" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-500 text-xl" />,
  "WordPress": <SiWordpress className="text-blue-700 text-xl" />,
  "TypeScript": <SiTypescript className="text-blue-600 text-xl" />,
  "React Native": <SiReact className="text-indigo-500 text-xl" />,
  "MongoDB": <SiMongodb className="text-green-600 text-xl" />,
  "Node.js": <SiNodedotjs className="text-green-500 text-xl" />,
  "Express.js": <SiExpress className="text-gray-800 text-xl" />,
  "PostgreSQL": <SiPostgresql className="text-blue-800 text-xl" />,
  "Figma": <SiFigma className="text-pink-500 text-xl" />,
  "Google Ads": <SiGoogleads className="text-blue-600 text-xl" />,
  "UI/UX": <SiAdobexd className="text-pink-600 text-xl" />,
  "SEO": <SiGoogleanalytics className="text-orange-600 text-xl" />,

};

const services = [
  {
    title: "Web Development",
    desc: "Modern, high-performance websites built with latest technologies.",
    icon: <CodeBracketIcon className="w-10 h-10 text-blue-600" />,
    tech: ["React.js", "Next.js", "Tailwind CSS", "WordPress", "TypeScript"],
    img: "https://cdn.dribbble.com/userupload/42991715/file/original-a251c41e2f6eb385428f496aecd4574d.jpg?resize=1504x1175&vertical=center"
  },
  {
    title: "App Development",
    desc: "Custom Android & iOS apps with solid backend architecture.",
    icon: <DevicePhoneMobileIcon className="w-10 h-10 text-purple-600" />,
    tech: ["React Native", "MongoDB", "Express.js", "Node.js", "PostgreSQL"],
    img: "https://cdn.dribbble.com/userupload/45803873/file/d1e9f35f76592e83a0daad4c0c6e3ea1.jpg"
  },
  {
    title: "SEO Optimization",
    desc: "Rank higher, gain traffic & improve domain authority.",
    icon: <ArrowTrendingUpIcon className="w-10 h-10 text-green-600" />,
    tech: ["SEO", "Google Ads", "Speed Optimization"],
    img: "https://cdn.dribbble.com/userupload/42027393/file/original-b69d3436491abc0950beddf044c457ef.jpg?resize=1000x750&vertical=center"
  },
  {
    title: "Graphic Design",
    desc: "Brand identity, creative ads, UI graphics and social creatives.",
    icon: <SwatchIcon className="w-10 h-10 text-pink-500" />,
    tech: ["Figma", "Adobe Photoshop", "UI/UX"],
    img: "https://cdn.dribbble.com/userupload/43704943/file/original-1a3ef971628150c05d02941ba90517ed.jpg?resize=1504x1128&vertical=center"
  },
  {
    title: "Digital Marketing",
    desc: "Grow your audience and conversions with targeted campaigns.",
    icon: <MegaphoneIcon className="w-10 h-10 text-yellow-500" />,
    tech: ["Google Ads", "Meta Ads", "Funnels"],
    img: "https://cdn.dribbble.com/userupload/10942947/file/original-6782beb9d3e46ec9ce6136c81f8231fa.jpg?resize=1504x1128&vertical=center"
  },
  {
    title: "UI/UX Design",
    desc: "Modern, user-centered interface design for better experiences.",
    icon: <CursorArrowRaysIcon className="w-10 h-10 text-red-500" />,
    tech: ["Figma", "UI/UX", "Prototyping"],
    img: "https://cdn.dribbble.com/userupload/12738537/file/original-6951e222642e0ee661de0fece1fd0cd1.jpg?resize=1504x1128&vertical=center"
  },
];

const ServicesSection = () => {
  return (
    <section className="w-full py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">
        
        <h1 className="text-4xl special-font md:text-5xl font-bold text-center mb-14">
          Our <span className="text-blue-600">Services</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 overflow-hidden rounded-t-2xl">
                <img src={service.img} className="h-full w-full object-cover" />
              </div>

              <div className="p-6">
                <div className="mb-4">{service.icon}</div>

                <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>

                <p className="text-gray-600 mb-4">{service.desc}</p>

                {/* Tech Icons Row */}
                <div className="flex flex-wrap gap-3 mt-4">
                  {service.tech.map((t, i) => (
                    <div 
                      key={i}
                      className="flex items-center gap-2 px-3 py-2 bg-gray-50 border border-gray-200 rounded-full"
                    >
                      {techIcons[t] ?? <span className="text-sm">{t}</span>}
                      <span className="text-sm text-gray-700">{t}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
