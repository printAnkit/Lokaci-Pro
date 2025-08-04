import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Pricing from "./pages/Pricing/Pricing.jsx";
import Login from "./pages/Login.jsx";
import HowItWorks from './temp/HowItWorks.jsx'
import CoreBenefit from "./temp/CoreBenefits/CoreBenefit.jsx"
import Pricings from "./temp/Pricings/Pricings.jsx";
import CoreBenefits from "./pages/CoreBenefits/CoreBenefits.jsx";
import WhatsappBookingChaos from "./components/ProblemPromise/WhatsappBookingChaos.jsx";

export default function App() {

  return (
    <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<CoreBenefits />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/auth" element={<Login />} />
          <Route path="/Sample1" element={<HowItWorks />} />
          <Route path="/sample2" element={<CoreBenefit/>} />
          <Route path="/pricing1" element={<Pricings />}/>
          <Route path="/WhatsappChaos" element={<WhatsappBookingChaos/>}/>
        </Routes>
      <Footer/>
    </Router>
  )
}