// import About from "./components/About";
// import Hero from "./components/Hero";
// import NavBar from "./components/Navbar";
// import Features from "./components/Features";
// import Story from "./components/Story";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import CustomCursor from "./components/CustomCursor";
// import TermsAndConditions from "./components/TermsAndCondition";
// import { Route, Router, Routes } from "react-router-dom";
// import ContactForm from "./pages/ContactForm";
// // something
// function App() {
//   return (
//     <main className="relative min-h-screen w-screen overflow-x-hidden">
//       <CustomCursor/>
//       <NavBar />
//       <Hero />
//       <About />
//       <Features />
//       <Story />
//       {/* <TermsAndConditions/> */}
//       <Contact />
//       <Footer />
//       <Routes>
//         <Route path="/contact" element={<ContactForm/>}/>
//       </Routes>
//     </main>
//   );
// }

// export default App;
// import About from "./components/About";
// import Hero from "./components/Hero";
// import NavBar from "./components/Navbar";
// import Features from "./components/Features";
// import Story from "./components/Story";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import CustomCursor from "./components/CustomCursor";

// import ContactForm from "./pages/ContactForm";

// import { Routes, Route } from "react-router-dom";
// import ServiceShowcase from "./components/serviceShowCase";
// import ServicesSection from "./components/ServicesSection";
// import GymForm from "./other/GymForm";
// import EcommerceForm from "./other/EcommerceForm";
// import TravelForm from "./other/TravelForm";
// import EducationForm from "./other/EducationForm";

// function App() {
//   return (
//     <main className="relative min-h-screen w-screen overflow-x-hidden">
//       <CustomCursor />
//       <NavBar />

//       <Routes>
//         {/* Homepage */}
//         <Route
//           path="/"
//           element={
//             <>
//               <Hero />
//               <About />
//               <Features />
//               {/* <Story /> */}
              
//               <Contact />
//               <GymForm/>
//               <EcommerceForm/>
//               <TravelForm/>
//               <EducationForm/> 
//               <div className="w-full min-h-screen">
//     <ServicesSection />
// </div>

//               <ServiceShowcase />
//               <Footer />
//             </>
//           }
//         />

//         {/* Contact Page */}
//         <Route path="/contact" element={<ContactForm />} />
//       </Routes>
//     </main>
//   );
// }

// export default App;

// import About from "./components/About";
// import Hero from "./components/Hero";
// import NavBar from "./components/Navbar";
// import Features from "./components/Features";
// import Story from "./components/Story";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import CustomCursor from "./components/CustomCursor";

// import ContactForm from "./pages/ContactForm";

// import { Routes, Route } from "react-router-dom";
// import ServiceShowcase from "./components/serviceShowCase";
// import SmoothScroll from "./wrapper/SmoothScroll";



// function App() {
//   return (
//     <main className="relative min-h-screen w-screen overflow-x-hidden">
//       <CustomCursor />
//       <NavBar />

//       <SmoothScroll>
//         <Routes>
//           {/* Homepage */}
//           <Route
//             path="/"
//             element={
//               <>
//                 <Hero />
//                 <About />
//                 <Features />
//                 {/* <Story /> */}
//                 <Contact />
//                 <ServiceShowcase />
//                 <Footer />
//               </>
//             }
//           />

//           {/* Contact Page */}
//           <Route path="/contact" element={<ContactForm />} />
//         </Routes>
//       </SmoothScroll>
//     </main>
//   );
// }

// export default App;
import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
// import { ScrollReveal } from "@/components/scroll-reveal"
import ScrollReveal from "./components/lightswind/scroll-reveal";
import ContactForm from "./pages/ContactForm";
import ImageReveal from './components/lightswind/image-reveal';
import { Routes, Route } from "react-router-dom";

import ServiceShowcase from "./components/Temp";
import ModelViewer from './components/lightswind/3d-model-viewer';

import ServicesSection from "./components/ServicesSection";
import { ScrollTimeline } from "./components/lightswind/scroll-timeline";
import GymForm from "./other/GymForm";
import EcommerceForm from "./other/EcommerceForm";
import TravelForm from "./other/TravelForm";
import EducationForm from "./other/EducationForm";
import TermsAndConditions from "./pages/TermsAndCondition";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <CustomCursor />
      <NavBar />

      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Features />
              <Contact />

              <div className="w-full min-h-screen">
                <ServicesSection />
              </div>
              <ScrollTimeline />

              {/* <ServiceShowcase /> */}
              <ImageReveal />
              <ModelViewer
  url="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/FlightHelmet/glTF/FlightHelmet.gltf"
  autoRotate={true}
  autoRotateSpeed={1.0}
  environmentPreset="studio"
/>
             <ScrollReveal textClassName="px-4 my-10">
  We build fast, modern, and visually captivating websites that leave a lasting
  impression. With smooth scroll-triggered animations, interactive sections, and
  performance-focused design, we transform your digital presence into an engaging
  experience that keeps users scrolling, exploring, and connecting with your brand.
</ScrollReveal>

              <Footer />
            </>
          }
        />

        {/* Contact Page */}
        <Route path="/contact" element={<ContactForm />} />

        {/* These pages WON'T appear on homepage anymore */}
        <Route path="/gym" element={<GymForm />} />
        <Route path="/terms" element={<TermsAndConditions/>} />
        <Route path="/faq" element={<FAQ/>} />
        <Route path="/ecommerce" element={<EcommerceForm />} />
        <Route path="/travel" element={<TravelForm />} />
        <Route path="/education" element={<EducationForm />} />
      </Routes>
    </main>
  );
}

export default App;
