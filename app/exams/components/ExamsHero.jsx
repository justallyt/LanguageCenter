import { plusJakarta } from '@/app/layout'
import Image from 'next/image' 

const ExamsHero = () => {
  return (
        <div className="exams-hero">
              <div className="inner-row">
                         <div className="exams-hero-content">
                                     <div className="exams-hero-intro">
                                               <h3>ExaminationDepartment</h3>
                                               <h1 className={plusJakarta.className}>We offer a Wide Range of Examination & Tutoring Services</h1>
                                               <p>TLC offers preparation for and registration for most examinations required for admission to the United States, Canadian, Uk and Australian Universities.</p>
                                     </div>

                                     <div className="exams-body">
                                               <div className="exams-body-texts">
                                                       <h3>More About The Department</h3>
                                                        <p>Our courses range from about 2&#189; weeks and 2&#189; months to complete depending on the student&apos;s ability and performance on the diagnostic test. Preparation is also determined by the proximity of the official exam date.</p>
                                                        <p>Most of our students come from Asia, Africa, the Middle East, South America and Eastern Europe for TOEFL and IELTS exams. GMAT and GRE are also offered to those aspiring to do a Masters degree or doctorate.</p>
                                                        <p>Our classrom instruction criteria is highly refined and it includes listening lab, computer instruction, and practice. Our materials are up-to-date and come from the official examination bodies.We also have recent past exams, CDs for the TOEFL and IELTS, and plenty of practice questions for all the tests. We administer classroom practice tests very regularly to determine the progress of the students and insist on extra practice by giving them assignments every day.</p>
                                                        <p> Our teachers are very qualified and experienced to handle the preparation for these tests. They also have a proven track record of success, as attested to by their former students who have gone on to become prominent people in society. </p>
                                                        <p>We also provide a University placement/Search Service, whereby they help prospective students look for very competent universities and colleges abroad, help them with the application process, and guide them on visa application requirements.</p> 
                                               </div>
                                               <div className="exams-body-image">
                                                          <Image src='/assets/exam2.jpg' fill sizes='100vw' alt='' />
                                               </div>
                                     </div>
                         </div>
              </div>
    </div>
  )
}

export default ExamsHero