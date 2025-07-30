import Hero from "../components/Hero";
import ProblemPromise from "../components/ProblemPromise";
import CoreBenefits from "../components/CoreBenefits";
import HowItWorks from "../components/HowItWorks";
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
      <Testimonials />
      <CallToAction />
      <FAQ />
    </div>
  );
}
