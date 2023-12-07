import Footer from "../components/common/Footer"
import Nav from "../components/common/navbar/Nav"
import { AiOutlineFilePdf } from "react-icons/ai";
import { plusJakarta } from "../layout";

const Registration = () => {
  return (
    <>
            <Nav />
            <div className="registration-hero">
                    <div className="inner-row">
                                <div className="registration-hero-content">
                                          <h1 className={plusJakarta.className}>Registration Forms</h1>
                                          <p className="intro">Find below the student application forms for the language department and TOEFL, fill in the forms and bring them to our school.</p>

                                           <div className="registration-forms">
                                                    <div className="career-option-moja">
                                                            <div className="option-colum">
                                                                      <h4>Language Department Application Form</h4>
                                                            </div>

                                                            <a href={'/assets/docs/Student_Registration_Form.pdf'} download='Student_Application_Form.pdf'><span><AiOutlineFilePdf /></span>Apply</a>
                                                   </div>
                                                   <div className="career-option-moja">
                                                            <div className="option-colum">
                                                                      <h4>TOEFL Registration</h4>
                                                            </div>

                                                            <a href={"/assets/docs/TOFL_Registration_Form.pdf"} download='TOEFL_Application_Form.pdf'><span><AiOutlineFilePdf /></span>Apply</a>
                                                   </div>
                                             </div>       
                                </div>
                    </div>
          </div>
          <Footer />
    </>
  )
}

export default Registration