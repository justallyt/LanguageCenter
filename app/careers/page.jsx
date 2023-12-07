import React from 'react'
import Nav from '../components/common/navbar/Nav'
import { AiOutlineFilePdf } from "react-icons/ai";
import Footer from '../components/common/Footer';
import { plusJakarta } from '../layout';

const Careers = () => {
  return (
    <>
           <Nav />
              <div className="careers-hero">
                        <div className="inner-row">
                                   <div className="careers-hero-content">
                                             <h3>Careers</h3>
                                             <h1 className={plusJakarta.className}>Join our exceptional team of Tutors</h1>
                                             <p>Our philosophy is simple - hire a team of diverse, passionate people and foster a culture that empowers you to do your best work. </p>
                                   </div>
                        </div>
             </div>

             <div className="careers-content">
                        <div className="inner-row">
                                    <div className="positions-content">
                                                <h2>Open Positions</h2>

                                                <div className="career-option-moja">
                                                            <div className="option-colum">
                                                                      <h4>Tutor</h4>
                                                                      <p>We are looking for a language tutor to join our team</p>
                                                            </div>

                                                            <a href={'/assets/docs/Teachers_Application_Form.pdf'} download='Tutor_Application_Form.pdf'><span><AiOutlineFilePdf /></span>Apply</a>
                                                </div>
                                    </div>
                        </div>
             </div>

             <Footer />
    </>
  )
}

export default Careers