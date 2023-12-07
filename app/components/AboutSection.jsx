import { LiaArrowRightSolid } from "react-icons/lia"
import Image from 'next/image'
import Link from "next/link";
import { plusJakarta } from "../layout";
const AboutSection = () => {
  return (
    <div className="about-section">
             <div className="inner-row">
                         <div className="about-section-content">
                                   <div className="about-section-images">
                                                <div className="about-section-image-moja">
                                                           <Image src='/assets/about_v1.jpg' fill sizes="100vw" alt="" />
                                                </div>
                                                <div className="about-section-image-moja">
                                                           <Image src='/assets/about2.jpg' fill sizes="100vw" alt="" />
                                                </div>
                                   </div>
                                   <div className="about-section-texts">
                                                 <h3>Who We Are</h3>
                                                 <h1 className={plusJakarta.className}>The Best Language School.</h1>
                                                 <p>The Language Center is a leading language school in Nairobi, Kenya. It offers a wide range of language courses for all ages and levels, including English, French, Spanish, Portuguese, Italian, Chinese and Swahili. The school also offers courses in business English, academic English and IELTS preparation.</p>
                                                 <p>​​The School has a team of experienced and qualified native or near native speaking teachers who are passionate about teaching languages. The school uses a variety of teaching methods, including communicative language teaching (CLT) and task-based learning (TBL), to help students learn and practice their language skills in a real-world context.</p>
                                                 <Link href={'/about-us/'}>Read More <span><LiaArrowRightSolid /></span></Link>
                                   </div>
                         </div>
             </div>
    </div>
  )
}

export default AboutSection