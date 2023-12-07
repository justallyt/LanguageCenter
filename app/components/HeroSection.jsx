import { LiaArrowRightSolid } from "react-icons/lia"
import Link from "next/link";
import Image from 'next/image'
import { plusJakarta } from "../layout";
const HeroSection = () => {
  return (
    <section id="hero">
    <div className="inner-row">
       <div className="hero-content">
                  <div className="hero-texts-column">
                                <div className="inner-texts">
                                           <h1 className={plusJakarta.className}>Transforming Language Learning.</h1>
                                         <p>With a legacy of excellence, The Language Center (TLC) has consistently provided quality services at accessible rates. Our relentless curiosity drives us to explore new frontiers and opportunities. Join us at TLC for an immersive experience in our mission.</p>
                                         <div className="action-part">
                                                    <Link href={'/courses/'}>Explore Courses <span><LiaArrowRightSolid /></span></Link>
                                                    <div className="trust-box">
                                                             <div className="trust-students">
                                                                     <Image src='/assets/trustee1.jpg' width={45} height={45} alt=""/>
                                                                     <Image src='/assets/trustee2.jpg' width={45} height={45} alt=""/>
                                                                     <Image src='/assets/trustee3.jpg' width={45} height={45} alt=""/>
                                                                     <Image src='/assets/trustee4.jpg' width={45} height={45} alt=""/>
                                                                     <Image src='/assets/trustee5.jpg' width={45} height={45} alt=""/>
                                                             </div>
                                                              <h3>Trusted by Thousands of Students</h3>
                                                    </div>
                                         </div>
                                </div>
                  </div>
                  <div className="hero-image-column">
                                <div className="hero-image-wrapper one">
                                       <div className="small-image">
                                                <Image src='/assets/landing5.jpg' sizes="100vw" fill  alt=""/>
                                       </div>
                                       <div className="small-image">
                                                   <Image src='/assets/landing3.jpg' sizes="100vw" fill  alt=""/>
                                       </div>    
                                </div>
                                 <div className="big-image">
                                           <Image src='/assets/landing1.jpg' sizes="100vw" fill alt=""/>
                                 </div>
                                <div className="hero-image-wrapper">
                                              <div className="small-image">
                                                         <Image src='/assets/landing2.jpg' sizes="100vw" fill alt=""/>
                                              </div>
                                              <div className="small-image">
                                                           <Image src='/assets/landing4.jpg' sizes="100vw" fill  alt=""/>
                                              </div>
                                      
                                </div>
                  </div>
       </div>
 </div>
</section>
  )
}

export default HeroSection