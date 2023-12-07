import Footer from "../components/common/Footer"
import Nav from "../components/common/navbar/Nav"
import CoursesHero from "./components/CoursesHero"
import Faqs from "./components/Faqs"
import LearnReasons from "./components/LearnReasons"

const Courses = () => {
  return (
         <>
                <Nav />
                <CoursesHero />
                <LearnReasons />
                <Faqs />
                <Footer />
         </>
  )
}

export default Courses