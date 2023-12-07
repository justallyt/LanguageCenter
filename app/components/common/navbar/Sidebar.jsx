"use client"
import { IoCloseOutline } from "react-icons/io5"
import { PiPhoneCall } from "react-icons/pi"
import { useContext, useLayoutEffect, useRef } from "react"
import { menuContext } from "./menucontext"
import Link from "next/link";
import Image from 'next/image'
import gsap from "gsap"
import { usePathname } from "next/navigation";

const Sidebar = () => {
    const [sidebarStatus, setSidebarStatus] = useContext(menuContext);
    const wrapper = useRef();
    const overlay = useRef();
    const path = usePathname();
    const dynamic = path.slice(1, 8);
    
    useLayoutEffect(() => {
           if(sidebarStatus){
                  wrapper.current.classList.add("active");
 
                  let tl = gsap.timeline();
 
                  tl.to(overlay.current, {
                        y: 0,
                        duration: 1
                  })
                  tl.to(wrapper.current.querySelector(".sidebar-content"), {
                        x: 0,
                        duration: 1
                  })
                 tl.to(wrapper.current.querySelector('.sidebar-header a'), {
                       x: 0,
                       duration: 0.5
                 })
                 tl.to(wrapper.current.querySelector('.sidebar-header span'), {
                       x: 0,
                       duration: 0.5
                 })
                wrapper.current.querySelectorAll(".sidebar-nav ul li").forEach(item => {
                       tl.to(item, {
                             x: 0,
                             duration: 0.3
                       })
                })
               tl.to(wrapper.current.querySelector('.sidebar-content .action-btns h2'), {
                       scale: 1,
                       duration: 0.5
               })
                tl.to(wrapper.current.querySelector('.sidebar-content .action-btns a'),{
                        scale: 1,
                        duration: 0.7
                })
           }
 
           if(wrapper.current.classList.contains("active") && !sidebarStatus){
              let tl = gsap.timeline();
 
                 tl.to(wrapper.current.querySelector('.sidebar-content .action-btns a'),{
                        scale: 0,
                        duration: 0.4
                })
              tl.to(wrapper.current.querySelector('.sidebar-content .action-btns h2'), {
                     scale: 0,
                    duration: 0.4
              })
             
             wrapper.current.querySelectorAll(".sidebar-nav ul li").forEach(item => {
               tl.to(item, {
                     x: '-100%',
                     duration: 0.3
                  })
              })
 
              tl.to(wrapper.current.querySelector('.sidebar-header span'), {
                      x: '100%',
                      duration: 0.3
                })
                 tl.to(wrapper.current.querySelector('.sidebar-header a'), {
                       x: '-100%',
                       duration: 0.3
                 })
                 tl.to(wrapper.current.querySelector(".sidebar-content"), {
                     x: '-100%',
                    duration: 0.7
                })
                tl.to(overlay.current, {
                    y: '-100%',
                    duration: 1
                })
 
                setTimeout(() => {
                         wrapper.current.classList.remove("active")
                }, 4500)
           }
    }, [sidebarStatus])
 
    const closeSidebar = () => setSidebarStatus(false);
   return (
     <div ref={wrapper} className='sidebar-wrapper'>
                 <div ref={overlay} className="sidebar-overlay"></div>
                 <div className="sidebar-content">
                            <div className="sidebar-inner">
                                      <div className="sidebar-header">
                                                <Link href={'/'}>
                                                         <Image src='/assets/logo.png'   sizes="100vw" fill style={{objectFit: 'contain'}}  alt="Language center logo" />
                                                </Link>
                                                <span className="close-btn" onClick={closeSidebar}><IoCloseOutline /></span>
                                      </div>
                                       <div className="sidebar-nav">
                                               <ul>
                                                         <li><Link href={'/'} className={path === '/' ? "active" : ''}>Home</Link></li>
                                                        <li><Link href={'/about-us'}   className={path === '/about-us' ? "active" : ''} >About Us</Link></li>
                                                        <li><Link href={'/courses'}  className={path === '/courses' || dynamic === 'courses'  ? "active" : ''}>Courses</Link></li>
                                                        <li><Link href={'/exams'}  className={path === '/exams' ? "active" : ''}>Exams</Link></li>
                                                        <li><Link href={'/contact-us'}   className={path === '/contact-us' ? "active" : ''}>Contact Us</Link></li>
                                              </ul>
                                       </div>
                                       <div className="action-btns">
                                                 <h2><span><PiPhoneCall /></span>+254 721 495774</h2>
                                                <Link href={'/registration'}>Register Today</Link>
                                       </div>
                            </div>
                 </div>
     </div>
   )
 }
 
 export default Sidebar