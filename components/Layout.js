import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"

function Layout({children}) {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
