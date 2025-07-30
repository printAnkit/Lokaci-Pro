import Hero from "../components/Hero.jsx";
import ProblemPromise from "../components/ProblemPromise.jsx";
import CoreBenefits from "../components/CoreBenefits.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import Testimonials from "../components/Testimonials.jsx";
import CallToAction from "../components/CallToAction.jsx";
import FAQ from "../components/FAQ.jsx";

export default function Home() {
  return (
    <div>
      <Hero />
      <ProblemPromise />
      <CoreBenefits />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
      <FAQ />
    </div>
  );
}
