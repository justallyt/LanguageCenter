"use client"
import { testimonials } from "../data/testimonials"
import { RiDoubleQuotesL } from "react-icons/ri"
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import "swiper/css/navigation"
import { Autoplay } from "swiper/modules"
import Nudge from "./common/Nudge" 
import { Plus_Jakarta_Sans } from "next/font/google"

const jakarta = Plus_Jakarta_Sans({
        weight: ['600','700'],
        subsets: ['latin']
})
const Testimonials = () => {

  return (
               <div className="testimonial-section">
              <div className="inner-row">
                        <div className="testimonial-section-content">
                                 <div className="testimonial-intro">
                                             <h1 className={jakarta.className}>Don&apos;t take Our Word For It. <br /> Read Some of our Testimonials</h1>
                                 </div>
                                 <div className="testimonials-row">
                                           <Swiper
                                                   
                                                    slidesPerView={1}               
                                                    loop={true}
                                                    autoplay={{
                                                          delay: 8000,
                                                          disableOnInteraction: false
                                                     }}
                                                    modules={[Autoplay]}
                                                    breakpoints={{
                                                         1090: {
                                                                 slidesPerView: 3,
                                                                 spaceBetween: 20
                                                           },
                                                          600: {
                                                                 slidesPerView: 2,
                                                                 spaceBetween: 20
                                                          }
                                                      }}
                                             >
                                                  { testimonials.map(item => 
                                                        <SwiperSlide key={item.id}>
                                                                 <div className="testimonial-moja">
                                                                           <span><RiDoubleQuotesL /></span>
                                                                           <p>{item.text}</p>
                                                                           <h4>{item.name} ~ Learnt {item.language}</h4>
                                                                 </div>
                                                        </SwiperSlide>
                                                  )}
                                             </Swiper>
                                 </div>
                                 <Nudge />
                        </div>
              </div>
    </div>
  )
}

export default Testimonials