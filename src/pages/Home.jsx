import Hero from "../components/Hero";
import ProblemPromise from "../components/ProblemPromise";
import CoreBenefits from "../components/CoreBenefits";
import HowItWorks from "../components/HowItWorks";
import Pricing from "./Pricing";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";
import FAQ from "../components/FAQ";

export default function Home() {
  return (
    <div>
      <Hero />
      <ProblemPromise />
      <CoreBenefits />
      <HowItWorks />
      {/* <Pricing /> */}
      <Testimonials />
      <CallToAction />
      <FAQ />
    </div>
  );
}
