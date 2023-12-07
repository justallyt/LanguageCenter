import { LiaArrowRightSolid } from "react-icons/lia"
import { Plus_Jakarta_Sans } from "next/font/google"
import Link from "next/link"
import Image from 'next/image'
const jakarta = Plus_Jakarta_Sans({
        weight: ['600','700'],
        subsets: ['latin']
})
const Nudge = () => {
  return (
       <div className="nudge-section">
            <div className="nudge-section-content">
                          <div className="nudge-section-texts">
                                    <h1 className={jakarta.className}>Why Don&apos;t you Start Today?</h1>
                                    <p>If you are looking for a way to  enhance your travel experiences, gain a deeper understanding of other cultures, and enrich your personal life, then begin your learning journey with us today.</p>
                                    <Link href={'/contact-us/'}>Enquire <span><LiaArrowRightSolid /></span></Link>
                          </div>
                          <div className="nudge-section-image">
                                    <Image src='/assets/classroom.jpg' fill sizes="100vw" alt="" />
                          </div>
            </div>
    </div>
  )
}

export default Nudge