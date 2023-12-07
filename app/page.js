import AboutSection from './components/AboutSection'
import Footer from './components/common/Footer'
import Nav from './components/common/navbar/Nav'
import CoursesSection from './components/CoursesSection'
import HeroSection from './components/HeroSection'
import Testimonials from './components/Testimonials'
import WhySection from './components/WhySection'

export default function Home() {
  return (
    <>
              <Nav /> 
             <HeroSection />
             <WhySection />
             <AboutSection />
             <CoursesSection /> 
             <Testimonials />
             <Footer />
    </>
  )
}
