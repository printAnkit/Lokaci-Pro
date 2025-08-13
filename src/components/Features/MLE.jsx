import { CornerRightDown, Gift, Rocket, SquareCheckBig } from "lucide-react";
import mle from "../../assets/MLE.png";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Prepaid Membership Packages",
    points: [
      "Clients pay in advance for bundles of services",
      "Instant cash flow and guaranteed future visits",
      "Track remaining sessions and expiry dates",
      "Perfect for salons, spas, gyms, and clinics",
    ],
  },
  {
    title: "Cashback & Store Credits",
    points: [
      "Offer cashback for every purchase or service",
      "Credits automatically apply to next visit",
      "Boost retention without discounts",
      "Customize by service, spend, or time frame",
    ],
  },
  {
    title: "Referral Rewards Program",
    points: [
      "Clients refer friends for instant bonuses",
      "Reward with credits, discounts, or gifts",
      "Track referrals and redemptions automatically",
      "Grow through word of mouth without marketing spend",
    ],
  },
  {
    title: "Loyalty Points That Actually Work",
    points: [
      "Award points based on visits or spend",
      "Clients redeem for products or services",
      "Set rules for tiers, expiry, and bonuses",
      "Encourage ongoing engagement",
    ],
  },
  {
    title: "Membership Tiers & Upgrades",
    points: [
      "Create tiered memberships (Bronze, Silver, Gold)",
      "Offer benefits like discounts or freebies per tier",
      "Auto-upgrade based on client behavior",
      "Add exclusivity to your brand",
    ],
  },
  {
    title: "Real-Time Wallet & Balance Tracking",
    points: [
      "Clients view their points, cashbacks, and credits live",
      "Improves transparency and trust",
      "Available in-app, on website, or via WhatsApp",
    ],
  },
  {
    title: "Gift Cards & Store Credit Sales",
    points: [
      "Sell digital gift cards to clients or corporate buyers",
      "Attract new visitors and reward loyal ones",
      "Great for promotions and holiday campaigns",
    ],
  },
  {
    title: "Insights & Loyalty ROI Analytics",
    points: [
      "See which clients engage most with loyalty programs",
      "Track redemption rates and ROI",
      "Use data to improve offers and strategies",
    ],
  },
];

const reasons = [
  {
    title: "Upfront Revenue",
    description: "Prepaid memberships help you earn in advance.",
  },
  {
    title: "Repeat Visits",
    description: "Points and cashback bring customers back more often.",
  },
  {
    title: "Word of Mouth Growth",
    description: "Referral rewards attract high-quality new clients.",
  },
  {
    title: "Personalized Loyalty",
    description: "Make each client feel seen and rewarded.",
  },
  {
    title: "Fully Automated",
    description: "Run loyalty programs without lifting a finger.",
  },
];

export default function MLE() {
  return (
    <div className=" text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col items-center gap-4 mb-10">
          <div>
            <div className="flex flex-col items-center justify-center gap-4 ">
              <Gift className="w-10 h-11 text-black" />
              <h1 className="text-black text-3xl md:text-5xl font-bold text-center mb-4 md:mb-8">
                Membership & Loyalty Engine
              </h1>
            </div>
            <p className="text-gray-700 text-lg font-semibold text-center mb-10 max-w-5xl mx-auto">
              Turn one time visitors into lifetime customers. Prepaid packages,
              cashback, and referral rewards - all working together to drive
              loyalty and long-term value.
            </p>
          </div>
          <div className="border-1  rounded-lg md:rounded-3xl  overflow-hidden">
            <img src={mle} alt="" className="w-300 " />
          </div>
        </div>

        {/* Features Section */}
        <div className="flex flex-row gap-4 items-center justify-center mt-20 md:mb-10 ">
          <h1 className="text-3xl md:text-5xl font-bold text-black ">
            Features
          </h1>
          <CornerRightDown className=" size-8 mt-6 text-black " />
        </div>
        <div className="flex flex-wrap justify-center gap-10">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-md w-90">
              <div className="flex gap-4 text-blue-600">
                <SquareCheckBig className="w-5" />
                <h3 className="text-xl font-semibold mb-4 text-black">
                  {feature.title}
                </h3>
              </div>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                {feature.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Why Choose Section */}
        <div className="mt-16 text-center">
          <div className="flex items-center justify-center text-center mb-6">
            <Rocket className="w-15 h-12 text-black" />
            <h2 className="text-3xl font-bold ">
              Why Choose <span className="text-gray-900">"Lokaci Pro"</span>{" "}
              Membership & Loyalty Engine?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-gray-50 p-5 rounded-lg shadow border border-gray-100"
              >
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {reason.title}
                </h4>
                <p className="text-sm text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Build Loyalty That Pays You Back
          </h3>
          <p className="text-gray-700 mb-6">
            Automate memberships, referrals, and cashback and keep clients
            coming back for more.
          </p>
          <Link
            to="/get-started"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Launch Loyalty Engine
          </Link>
        </div>
      </div>
    </div>
  );
}
