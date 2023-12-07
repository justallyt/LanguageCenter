import Footer from "./components/common/Footer"
import Nav from "./components/common/navbar/Nav"
import Link from "next/link"
const NotFoundPage = () => {
  return (
    <>
            <Nav />
            <div className="error-section">
                       <div className="inner-row">
                                   <div className="error-section-content">
                                                <h1>404</h1>
                                                <h3>Page not Found</h3>
                                                <p>Sorry, we can&apos;t find the page you are looking for click <Link href={'/'}>here</Link> to go back to the home page. </p>
                                   </div>
                       </div>
           </div>
           <Footer />
     </>
  )
}

export default NotFoundPage