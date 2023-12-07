import Nudge from "@/app/components/common/Nudge"
import { faqs } from "../../data/faqs"
import Faq from "./Faq"
import { plusJakarta } from "@/app/layout"
const Faqs = () => {
  return (
    <div className="faq-section">
        <div className="inner-row">
               <div className="faq-section-content">
                           <div className="faq-intro">
                                      <h2 className={plusJakarta.className}>Some Questions and Answers</h2>
                                      <p>Have a look at our most Frequently Asked Questions</p>
                           </div>
                           <div className="faqs-wrapper">
                                     { faqs.map(item => 
                                             <Faq key={item.id} data={item} />
                                      )}
                           </div>
               </div>

               <Nudge />
      </div>
</div>
  )
}

export default Faqs