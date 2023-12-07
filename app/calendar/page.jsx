import React from 'react'
import Nav from '../components/common/navbar/Nav'
import Footer from '../components/common/Footer'
import CalendarOptions from './components/CalendarOptions'
import { plusJakarta } from '../layout'

const Calendar = () => {
  return (
    <>
            <Nav />
            <div className="calendar-hero">
                        <div className="inner-row">
                                  <div className="calendar-hero-content">
                                             <h1 className={plusJakarta.className}>Our School Calendar</h1>
                                             <p>Stay up to date with our curriculum schedules and events to help you plan yourself accordingly all across the year.</p>
                                  </div>
                        </div>
            </div>
            <CalendarOptions />
            <Footer />
    </>
  )
}

export default Calendar