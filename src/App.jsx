import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import TermsAndConditions from "./components/TermsAndCondition";
// something
function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <CustomCursor/>
      <NavBar />
      <Hero />
      <About />
      <Features />
      <Story />
      {/* <TermsAndConditions/> */}
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
