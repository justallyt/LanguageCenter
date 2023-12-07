import { LiaArrowRightSolid } from "react-icons/lia"
import { course_excerpt } from "../data/courses"
import Image from 'next/image'
import Link from "next/link";
import { plusJakarta } from "../layout";
import ExaminationStrip from "./ExaminationStrip";
const CoursesSection = () => {
  return (
    <div className="courses-section">
    <div className="inner-row">
               <div className="courses-section-content">
                          <div className="courses-intro">
                                     <div className="intro-texts">
                                               <h3>Our Courses</h3>
                                               <h1 className={plusJakarta.className}>Our Most Popular Courses</h1>
                                               <p>We help students to learn and improve their language skills in a way that is both challenging and rewarding.</p>
                                     </div>
                                     <div className="courses-btn">
                                               <Link href={'/courses/'}>Explore All Courses <span><LiaArrowRightSolid /></span></Link>
                                     </div>
                               
                          </div>
                          <div className="course-types-row">
                                       { course_excerpt.slice(0,3).map(item => 
                                              <Link href={item.url} className="course-moja" key={item.id}>
                                                        <div className="course-image">
                                                                     {/* <img src={item.image} alt="" /> */}
                                                                     <Image src={item.image} fill sizes="100vw" alt="" /> 
                                                        </div>
                                                        <h2>{item.title}</h2>
                                                        <p>{item.description}</p>  
                                           </Link>
                                         )}
                          </div>
                          <ExaminationStrip />
               </div>
    </div>
</div>
  )
}

export default CoursesSection