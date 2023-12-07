"use client"
import { useState } from 'react'
import { menuContext } from './menucontext'
import Header from './Header'
import ScrolledHeader from './ScrolledHeader'
import Sidebar from './Sidebar'
const Nav = () => {
    const [status, setStatus] = useState(false);
  return (
    <menuContext.Provider value={[status, setStatus]}>
            <Header />
            <ScrolledHeader />
             <Sidebar />
    </menuContext.Provider>
  )
}

export default Nav