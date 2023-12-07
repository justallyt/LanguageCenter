import Nav from '../components/common/navbar/Nav'
import { HiOutlinePhone, HiOutlineBuildingOffice2 } from "react-icons/hi2"
import { BsEnvelope } from "react-icons/bs"
import ContactBody from './components/ContactBody'
import { plusJakarta } from '../layout'
import Footer from '../components/common/Footer'
const Contact = () => {
  return (
    <>
           <Nav />
           <div className="contact-hero">
                      <div className="inner-row">
                                <div className="contact-hero-section">
                                            <h3>Contact Us</h3>
                                            <h1 className={plusJakarta.className}>Get In Touch</h1>
                                            <p>We are always happy to hear from you! If you have any questions, comments, or suggestions, please feel free to contact us. We will do our best to respond to your inquiry as soon as we possibly can.</p>
                                </div>
                                <div className="contact-details">
                                              <div className="contact-column">
                                                          <div className="contact-icon">
                                                                     <span><HiOutlinePhone /></span>
                                                          </div>
                                                          <div className="contact-texts">
                                                                      <h4>Contact Numbers</h4>
                                                                      <p>+254 721 495 774</p>
                                                                      <p>+254 202 641 616</p>
                                                                      <p>+254 203 870 610/2</p>
                                                                      <p>+ 254 203 869 531/2</p>
                                                          </div>
                                              </div>
                                              <div className="contact-column">
                                                          <div className="contact-icon">
                                                                     <span><BsEnvelope /></span>
                                                          </div>
                                                          <div className="contact-texts">
                                                                      <h4>Email Us</h4>
                                                                      <p>tlc@language-cntr.com</p> 
                                                          </div>
                                              </div>
                                              <div className="contact-column">
                                                             <div className="contact-icon">
                                                                     <span><HiOutlineBuildingOffice2 /></span>
                                                          </div>
                                                          <div className="contact-texts">
                                                                      <h4>School Address</h4>
                                                                      <p>Ndemi Close / Ndemi Road off Ngong Road</p>
                                                          </div>
                                              </div>
                                </div>


                                <ContactBody />

                                {/* <div className="contact-map">
                                              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.795198281003!2d36.77677550000001!3d-1.2975797999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a737babd609%3A0xb7ade9bbbc75b2a!2sThe%20Language%20Center!5e0!3m2!1sen!2ske!4v1696541304287!5m2!1sen!2ske" width="600" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </div> */}
                      </div>
           </div>
           <Footer />
    </>
  )
}

export default Contact