import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Academics from "./components/Academics";
import Admissions from "./components/Admissions";
import SchoolLife from "./components/SchoolLife";
import NewsEvents from "./components/NewsEvents";
import Contact from "./components/Contact";
import Footer from "./components/Footer";




function App() {
  AOS.init({
    duration: 800,
    once: true,
  });
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Academics />
      <Admissions />
      <SchoolLife />
      <NewsEvents />
      <Contact />
      <Footer />
    </>
  );
}

export default App;