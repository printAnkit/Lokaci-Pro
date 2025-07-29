import CallToAction from "./components/CallToAction";
import CoreBenefits from "./components/CoreBenefits";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import ProblemPromise from "./components/ProblemPromise";
import Testimonials from "./components/Testimonials";

export default function App() {

  return (
    <div>
      <Header/>
      <Hero />
      <ProblemPromise/>
      <CoreBenefits/>
      <HowItWorks/>
      <Pricing/>
      <Testimonials/>
      <CallToAction/>
      <FAQ/>
      <Footer/>
    </div>
  )
}
