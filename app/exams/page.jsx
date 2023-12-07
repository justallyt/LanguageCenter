import Nav from "../components/common/navbar/Nav"
import Examinations from "./components/Examinations"
import ExamsHero from "./components/ExamsHero"
import Nudge from "../components/common/Nudge"
import Footer from "../components/common/Footer"
const Exams = () => {
  return (
    <>
          <Nav />
          <ExamsHero />
          <Examinations />
          <div className="inner-row" style={{ 'padding-bottom': '100px'}}>
                    <Nudge />
            </div>
            <Footer />
    </>
  )
}

export default Exams