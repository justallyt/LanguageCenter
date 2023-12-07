import Testimonials from "../components/Testimonials"
import Footer from "../components/common/Footer"
import Nav from "../components/common/navbar/Nav"
import AboutBody from "./components/AboutBody"
import AboutHero from "./components/AboutHero"
import Values from "./components/Values"

const About = () => {
  return (
    <>
           <Nav />
           <AboutHero /> 
           <AboutBody />
           <Values />
           <Testimonials />
           <Footer />
    </>
  )
}

export default About