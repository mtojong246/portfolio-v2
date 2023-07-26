'use client';
import Header from "./components/Header/Header"
import NavBar from "./components/NavBar/NavBar"
import About from "./components/About/About"
import Projects from "./components/Projects/Projects"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import { useEffect } from "react";



export default function Home() {
  
  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0,0);
    };
  }, [])


  return (
    <div className='w-full bg-[#001224]'>
      <NavBar />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
