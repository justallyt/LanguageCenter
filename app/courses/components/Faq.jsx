"use client"
import { useState } from 'react'
import { FiPlus, FiMinus } from 'react-icons/fi'

const Faq = ({ data }) => {
    const [status, setStatus] = useState(false); 

    const shiftAccordion = () => setStatus(!status);
  return (
        <div className="faq-moja">
               <div className="faq-question" onClick={shiftAccordion}>
                          <h2>{data.question}</h2>
                          <div className="trigger-btn">
                                      <span className={status ? "hide" : 'show'}><FiPlus /></span>
                                      <span className={status ? "show" : 'hide'}><FiMinus /></span>
                          </div>
               </div>
               <div className={ status ? "faq-answer show" : "faq-answer"}>
                       <div className="faq-answer-inner">
                                <p>{data.answer}</p>
                       </div>
               </div>
    </div>
  )
}

export default Faq