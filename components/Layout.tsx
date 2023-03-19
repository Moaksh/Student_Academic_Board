import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Back from "@/components/Back";

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer/>
        </div>
    );

}
export default Layout;