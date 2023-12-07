import Nav from "@/app/components/common/navbar/Nav"
import SingleCourseBody from "../components/SingleCourseBody"
import Footer from "@/app/components/common/Footer"
const SingleCourse = ({ params}) => {
  return (
    <>
           <Nav />
           <SingleCourseBody param={params.course} />
           <Footer />
    </>
  )
}

export default SingleCourse