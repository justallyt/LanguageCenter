import { plusJakarta } from "@/app/layout"

const AboutHero = () => {
  return (
        <div className="about-hero-section">
             <div className="inner-row">
                         <div className="about-hero-content">
                                     <div className="left-hero-texts">
                                               <h3>About Us</h3>
                                               <h1 className={plusJakarta.className}>We are Committed to Expert Language Learning in Africa</h1>
                                     </div>
                                     <div className="right-hero-texts">
                                              <p>We teach languages to foster friendships between people of different cultural backgrounds. Our experienced teachers are native or near native speakers of the languages they teach and are passionate about helping their students learn and improve their language skills.</p>
                                     </div>
                         </div>
             </div>
    </div>
  )
}

export default AboutHero