import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Pricing from "./pages/Pricing.jsx";
import CoreBenefits from "./pages/CoreBenefits.jsx";
import Login from "./pages/Login.jsx";

export default function App() {

  return (
    <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/features" element={<CoreBenefits />} /> */}
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/auth" element={<Login />} />
        </Routes>
      <Footer/>
    </Router>
  )
}