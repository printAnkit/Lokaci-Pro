import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";

export default function App() {

  return (
    <Router>
    <div>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      <Footer/>
    </div>
    </Router>
  )
}
