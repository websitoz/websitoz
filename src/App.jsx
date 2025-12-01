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
import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

import ContactForm from "./pages/ContactForm";

import { Routes, Route } from "react-router-dom";
import ServiceShowcase from "./components/serviceShowCase";

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
              {/* <Story /> */}
              
              <Contact />
              <ServiceShowcase />
              <Footer />
            </>
          }
        />

        {/* Contact Page */}
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </main>
  );
}

export default App;
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
