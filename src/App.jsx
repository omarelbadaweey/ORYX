import React from "react";
import Navbar from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Services/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
