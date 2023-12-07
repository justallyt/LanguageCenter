import { plusJakarta } from '@/app/layout'
import Image from 'next/image'
const AboutBody = () => {
  return (
        <div className="about-body-section">
              <div className="inner-row">
                         <div className="about-body-content">
                                      <div className="about-body-images">
                                                 <div className="about-body-image-moja">
                                                             <Image src='/assets/about3.jpg' fill sizes='100vw' alt='' />
                                                </div>
                                                <div className="about-body-image-moja">
                                                             <Image src='/assets/about4.jpg' fill sizes='100vw' alt='' />
                                                </div>
                                                <div className="about-body-image-moja">
                                                             <Image src='/assets/about6.jpg' fill sizes='100vw' alt='' />
                                                </div>
                                      </div>
                                      <div className="numbers-row">
                                                  <div className="number-moja">
                                                             <h1 className={plusJakarta.className}>40+</h1>
                                                             <h3>Years of Experience</h3>
                                                  </div>
                                                  <div className="number-moja">
                                                              <h1 className={plusJakarta.className}>7k+</h1>
                                                              <h3>Students Taught</h3>
                                                  </div>
                                                  <div className="number-moja">
                                                             <h1 className={plusJakarta.className}>10+</h1>
                                                             <h3>Language Courses</h3>
                                                  </div>
                                                  <div className="number-moja">
                                                              <h1 className={plusJakarta.className}>50+</h1>
                                                              <h3>Team Members</h3>
                                                  </div>
                                      </div>

                                      <div className="story-section">
                                                    <div className="story-section-column">
                                                                  <h3>Our Founding Story</h3>
                                                                    <h1 className={plusJakarta.className}>We&apos;ve been teaching since 1981.</h1>
                                                    </div>
                                                    <div className="story-section-column">
                                                                   <p>The Language Center was founded in 1981 and has since grown from a small school with 15 students to one of the leading international language schools in the region, with over 20 classrooms and a large number of students. TLC offers a variety of languages, including English, Kiswahili, Spanish, French, Chinese, Portuguese, Italian, and a few local dialects.   The school offers classes for all ages and levels, and its teachers are highly qualified and experienced native or near native speakers.</p>
                                                                    <p>TLC has a long history of providing excellent language education. Our highly qualified and experienced teachers have a deep understanding of the subject matter and use their knowledge effectively to help students reach or exceed their goals. The school provides students with a valuable opportunity  and an enabling environment to learn from experts and each other.</p>
                                                    </div>
                                      </div>

                                      <div className="statements-row">
                                                 <div className="vision">
                                                           <h3>Our Vision</h3>
                                                           <p>Our vision is to create a place where people of all ages and backgrounds can come to learn new languages and cultures, and become more global citizens.</p>
                                                 </div>
                                                 <div className="mission">
                                                            <h3>Our Mission</h3>
                                                            <p>Our mission is to enable students to reach their full potential through personalized learning experiences. We achieve this through flexible, interactive, and engaging courses, activities and tools that are designed to ignite curiosity and push boundaries.</p>
                                                 </div>
                                      </div>
                         </div>
              </div>
    </div>
  )
}

export default AboutBody