import Hero from "../components/Hero.jsx";
import ProblemPromise from "../components/ProblemPromise.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import Reviews from "../components/Reviews.jsx"
import CallToAction from "../components/CallToAction.jsx";
import FAQ from "../components/FAQ.jsx";
import CoreBenefits from './CoreBenefits.jsx';

export default function Home() {
  return (
    <div>
      <Hero />
      <ProblemPromise />
      <CoreBenefits/>
      <HowItWorks />
      <Reviews/>
      <CallToAction />
      <FAQ title="Everything You need to" subTitle="know." />
    </div>
  );
}