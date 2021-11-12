import Navbar from "./Navbar/Navbar"
import Announcement from './Announcement'
import Footer from "./Footer/Footer"
import Navigation from "./Navigation/Navigation"
import Slider from "./Slider"

function Layout({children}) {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Navigation />
            <Slider />
            {children}
            <Footer />
            
        </div>
    )
}

export default Layout
