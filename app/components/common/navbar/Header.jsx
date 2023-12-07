"use client"
import { PiPhoneCall } from "react-icons/pi"
import { CgMenu } from "react-icons/cg"
import Link from "next/link";
import Image from 'next/image'
import { usePathname } from "next/navigation";
import { useContext } from "react"
import { menuContext } from "./menucontext"

const Header = () => {
    const path = usePathname();
    const dynamic = path.slice(1, 8);
    const [ sidebarStatus, setSidebarStatus] = useContext(menuContext)
    const openSidebar = () => setSidebarStatus(!sidebarStatus)
  return (
    <header>
         <div className="inner-row">
              <div className="header-content">
                          <Link href={'/'} className="logo">
                                    <Image src='/assets/logo.png'   sizes="100vw" fill style={{objectFit: 'contain'}}  alt="Language center logo" />
                          </Link>
                          <nav>
                                    <ul>
                                               <li><Link href={'/'} className={path === '/'  ? "active" : ''}>Home</Link></li>
                                              <li><Link href={'/about-us'}   className={path === '/about-us' ? "active" : ''} >About Us</Link></li>
                                              <li><Link href={'/courses'}  className={path === '/courses' || dynamic === 'courses' ? "active" : ''}>Courses</Link></li>
                                              <li><Link href={'/exams'}  className={path === '/exams' ? "active" : ''}>Exams</Link></li>
                                              <li><Link href={'/contact-us'}   className={path === '/contact-us' ? "active" : ''}>Contact Us</Link></li>
                                    </ul>
                          </nav>
                          <div className="action-btns">
                                     <h2><span><PiPhoneCall /></span>+254 721 495774</h2>
                                     <Link href={'/registration'}>Register Today</Link>
                                     <div className="menu-btn" onClick={openSidebar}>
                                              <span><CgMenu /></span>
                                   </div>
                          </div>
                          
              </div>
    </div>
</header>
  )
}

export default Header