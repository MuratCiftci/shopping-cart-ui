import Navbar from "./Navbar/Navbar"
import Announcement from './Announcement'
import Footer from "./Footer/Footer"
import Navigation from "./Navigation/Navigation"

function Layout({children}) {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Navigation />
            {children}
            <Footer />
            
        </div>
    )
}

export default Layout
