import { BsEnvelope } from "react-icons/bs"
import { FiPhoneCall } from "react-icons/fi"
import { CgFacebook } from "react-icons/cg"
import { AiOutlineInstagram } from "react-icons/ai"
import Link from 'next/link'
import Image from 'next/image'
const Footer = () => {
  return (
    <footer>
                 <div className="inner-row">
                           <div className="footer-content">
                                      <div className="footer-column">
                                                <div className="footer-logo">
                                                           <Image src='/assets/logo_white.png' fill sizes="100vw" alt="" />
                                                </div>
                                                <p>Address: Ndemi Close / Ndemi Road off Ngong Road</p>
                                                <p>P.O Box 40661 - 00100</p>
                                                <p>Nairobi, Kenya</p>

                                                <div className="footer-social-links">
                                                            <ul>
                                                                     <li><Link target="_blank" href={'https://www.facebook.com/pages/category/School/The-Language-Center-LTD-193612244027673 '}><CgFacebook /></Link></li>
                                                                     <li><Link target="_blank" href={'https://www.instagram.com/thelanguagecenterltd?igshid=2b4hrx8n5hvd'}><AiOutlineInstagram/></Link></li>
                                                            </ul>
                                                </div>
                                      </div>
                                      <div className="footer-column">
                                                  <h2 className="footer-title">Courses</h2>
                                                  <ul>
                                                             <li><Link href={'/courses/learn-english'}>English</Link></li>
                                                             <li><Link href={'/courses/learn-spanish'}>Spanish</Link></li>
                                                             <li><Link href={'/courses/learn-french'}>French</Link></li>
                                                             <li><Link href={'/courses/learn-kiswahili'}>Kiswahili</Link></li>
                                                             <li><Link href={'/courses/learn-chinese'}>Chinese</Link></li>
                                                             <li><Link href={'/courses'}>View All</Link></li>
                                                  </ul>
                                      </div>
                                      <div className="footer-column">
                                                 <h2 className="footer-title">Resources</h2>
                                                 <ul>
                                                           <li><Link href={'/registration'}>Registration Forms</Link></li>
                                                           <li><Link href={'/calendar'}>School Calendar</Link></li>
                                                           <li><Link href={'/careers'}>Careers</Link></li>
                                                 </ul>
                                      </div>
                                      <div className="footer-column">
                                               <h2 className="footer-title">Contact Us</h2>
                                                <h3><span><BsEnvelope /></span>tlc@language-cntr.com</h3>
                                                <h3><span><FiPhoneCall /></span> +254 721 495 774</h3>
                                                <h3><span><FiPhoneCall /></span> +254 202 641 616</h3>
                                                <h3><span><FiPhoneCall /></span> +254 203 870 610/2</h3>
                                                <h3><span><FiPhoneCall /></span> +254 203 869 531/2</h3>
                                      </div>
                           </div>

                           <div className="copyright-section">
                                      <p> The Language Center &copy; { new Date().getFullYear() } All rights reserved </p>
                           </div>
                 </div>
    </footer>
  )
}

export default Footer