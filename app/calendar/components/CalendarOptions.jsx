"use client"
import { useState } from "react"

const CalendarOptions = () => {
    const [current, setCurrent] = useState(2024)

    const switchCalendarYear = (i) => {
           setCurrent(i)
    }
  return (
        <div className="calendar-options">
             <div className="inner-row">
                       <div className="calendar-options-content">
                                    <div className="year-options">
                                                <ul>
                                                          <li className={ current === 2024 ? "active" : ""} onClick={() => switchCalendarYear(2024)}>2024</li>
                                                          <li className={ current === 2025 ? "active" : ""} onClick={() => switchCalendarYear(2025)}>2025</li>
                                                          <li className={ current === 2026 ? "active" : ""} onClick={() => switchCalendarYear(2026)}>2026</li>
                                                </ul>
                                    </div>

                                  { current === 2024 && 
                                    <div className="year-option-row">
                                                 <div className="option-column">
                                                            <h3>January 3<sup>rd</sup> - January 5<sup>th</sup></h3>
                                                           
                                                            <p>Registration for Term I</p>
                                                 </div>
                                                 <div className="option-column">
                                                            <h3>January 8<sup>th</sup> - March 28<sup>th</sup></h3>
                                                           
                                                            <p>Term I <span>(12 weeks)</span></p>
                                                 </div>
                                                 <div className="option-column">
                                                            <h3>April 1<sup>st</sup> - April 12<sup>th</sup></h3>
                                                           
                                                            <p>2 weeks break</p>
                                                 </div>
                                                 <div className="option-column">
                                                            <h3>April 8<sup>th</sup> - April 12<sup>th</sup></h3>
                                                           
                                                            <p>Registration for Term II</p>
                                                 </div>
                                                 <div className="option-column">
                                                            <h3>April 15<sup>th</sup> - July 5<sup>th</sup></h3>
                                                           
                                                            <p>Term II <span>(12 weeks)</span></p>
                                                 </div>
                                                 <div className="option-column">
                                                            <h3>July 8<sup>th</sup> - July 12<sup>th</sup></h3>
                                                           
                                                            <p>1 week break</p>
                                                 </div>
                                                 <div className="option-column">
                                                            <h3>July 15<sup>th</sup> - August 23<sup>rd</sup></h3>
                                                           
                                                            <p>Summer Term <span>(6 weeks)</span></p>
                                                 </div>
                                                 <div className="option-column">
                                                            <h3>August 26<sup>th</sup> - August 30<sup>th</sup></h3>
                                                           
                                                            <p>Registration for Team III</p>
                                                 </div>
                                                 <div className="option-column">
                                                            <h3>September 2<sup>nd</sup> - December 13<sup>rd</sup></h3>
                                                           
                                                            <p>Term III  - <span>15 weeks (with 1 week mid-term break)</span></p>
                                                 </div>
                                    </div>
                                     }

                                     { current === 2025 && 
                                        <div className="year-option-row">
                                                 <div className="option-column">
                                                            <h3>January 6<sup>th</sup> - January 10<sup>th</sup></h3>
                                                           
                                                            <p>Registration for Term I</p>
                                                 </div>
                                                 <div className="option-column">
                                                            <h3>January 13<sup>th</sup> - April 4<sup>th</sup></h3>
                                                           
                                                            <p>Term I <span>(12 weeks)</span></p>
                                                 </div>
                                                 <div className="option-column">
                                                            <h3>April 7th<sup>st</sup> - April 17<sup>th</sup></h3>
                                                           
                                                            <p>2 weeks break</p>
                                                 </div>
                                                 <div className="option-column">
                                                            <h3>April 14<sup>nd</sup> - April 17<sup>th</sup></h3>
                                                           
                                                            <p>Registration for Term II</p>
                                                 </div>
                                                 <div className="option-column">
                                                            <h3>April 22<sup>nd</sup> - July 11<sup>th</sup></h3>
                                                           
                                                            <p>Term II <span>(12 weeks)</span></p>
                                                 </div>
                                                 <div className="option-column">
                                                            <h3>July 14<sup>th</sup> - July 18<sup>th</sup></h3>
                                                           
                                                            <p>1 week break</p>
                                                 </div>
                                                 <div className="option-column">
                                                            <h3>July 21<sup>st</sup> - August 29<sup>th</sup></h3>
                                                           
                                                            <p>Summer Term <span>(6 weeks)</span></p>
                                                 </div>
                                                 <div className="option-column">
                                                            <h3>September 1<sup>st</sup> - September 5<sup>th</sup></h3>
                                                           
                                                            <p>Registration for Team III</p>
                                                 </div>
                                                 <div className="option-column">
                                                            <h3>September 8<sup>th</sup> - December 19<sup>th</sup></h3>
                                                           
                                                            <p>Term III  - <span>15 weeks (with 1 week mid-term break)</span></p>
                                                 </div>
                                    </div>
                                        }

                                   { current === 2026 && 
                                    <div className="year-option-row">
                                                 <div className="option-column">
                                                            <h3>January 5<sup>th</sup> - January 9<sup>th</sup></h3>
                                                           
                                                            <p>Registration for Term I</p>
                                                 </div>
                                                 <div className="option-column">
                                                            <h3>January 12<sup>th</sup> - April 2<sup>nd</sup></h3>
                                                           
                                                            <p>Term I <span>(12 weeks)</span></p>
                                                 </div>
                                                 <div className="option-column">
                                                            <h3>April 6<sup>th</sup> - April 17<sup>th</sup></h3>
                                                           
                                                            <p>2 weeks break</p>
                                                 </div>
                                                 <div className="option-column">
                                                            <h3>April 13<sup>th</sup> - April 17<sup>th</sup></h3>
                                                           
                                                            <p>Registration for Term II</p>
                                                 </div>
                                                 <div className="option-column">
                                                            <h3>April 20<sup>th</sup> - July 10<sup>th</sup></h3>
                                                           
                                                            <p>Term II <span>(12 weeks)</span></p>
                                                 </div>
                                                 <div className="option-column">
                                                            <h3>July 13<sup>th</sup> - July 17<sup>th</sup></h3>
                                                           
                                                            <p>1 week break</p>
                                                 </div>
                                                 <div className="option-column">
                                                            <h3>July 20<sup>th</sup> - August 28<sup>th</sup></h3>
                                                           
                                                            <p>Summer Term <span>(6 weeks)</span></p>
                                                 </div>
                                                 <div className="option-column">
                                                            <h3>August 31<sup>st</sup> - Sept 4<sup>th</sup></h3>
                                                           
                                                            <p>Registration for Team III</p>
                                                 </div>
                                                 <div className="option-column">
                                                            <h3>September 7<sup>th</sup> - December 18<sup>th</sup></h3>
                                                           
                                                            <p>Term III  - <span>15 weeks (with 1 week mid-term break)</span></p>
                                                 </div>
                                    </div>
                                  }
                       </div>
             </div>
    </div>
  )
}

export default CalendarOptions