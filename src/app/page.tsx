import Header from "./components/Header/Header"
import NavBar from "./components/NavBar/NavBar"
import About from "./components/About/About"
import Projects from "./components/Projects/Projects"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"

export default function Home() {
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
