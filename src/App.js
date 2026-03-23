import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import "./App.css";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Skills from "./Components/Skill";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import Loader from "./Components/Loader";
import StickyCTA from "./Components/StickyCTA";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "unset";
    }, 2000); // 2 seconds fake loading

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <AnimatePresence mode="sync">
        {loading && <Loader key="global-loader" />}
      </AnimatePresence>

      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      
      {/* Game Changer Features */}
      <StickyCTA />
    </div>
  );
}

export default App;