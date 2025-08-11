import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsappMe from "../components/WhatsappMe";

export default function RootLayout(){
    return(
        <div>
            
            <Header/>
                <Outlet/>
            <WhatsappMe/>
            <Footer/>
            
        </div>
    )
}