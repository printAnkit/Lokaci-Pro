import Hero from "../components/Hero.jsx";
import ProblemPromise from "../components/ProblemPromise/ProblemPromise.jsx";
import HowItWorks from "../components/HowItWorks/HowItWorks.jsx";
import Reviews from "../components/Reviews/Reviews.jsx"
import CallToAction from "../components/CallToAction/CallToAction.jsx";
import FAQ from "../components/FAQ/FAQ.jsx";
import CoreBenefits from './CoreBenefits/CoreBenefits.jsx';

export default function Home() {
  return (
    <div>
      <Hero />
      <ProblemPromise />
      <HowItWorks />
      <Reviews/>
      <CallToAction />
      <FAQ title="Everything You need to" subTitle="know." />
    </div>
  );
}