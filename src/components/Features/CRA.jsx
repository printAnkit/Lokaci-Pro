import { CornerRightDown, MessageSquare, Rocket, SquareCheckBig } from "lucide-react";
import cra from "../../assets/CRA.png";

const features = [
  {
    title: "Automated WhatsApp Follow-Ups",
    points: [
      "Send reminders and re-engagement messages automatically",
      "Target based on visit history or inactivity",
      "Personalized, branded messaging",
      "Increase rebooking rates effortlessly",
    ],
  },
  {
    title: "Birthday & Special Occasion Offers",
    points: [
      "Send birthday wishes and rewards automatically",
      "Celebrate anniversaries or custom events",
      "Offer personalized gifts, discounts, or loyalty boosts",
      "Strengthen emotional client bonds",
    ],
  },
  {
    title: "Loyalty Points System",
    points: [
      "Reward points for every visit or purchase",
      "Clients redeem points for free services or discounts",
      "Set up double point days or milestones",
      "Boosts retention and average spend",
    ],
  },
  {
    title: "Client Segmentation & Targeting",
    points: [
      "Group clients by history, spend, or inactivity",
      "Send tailored messages and offers",
      "Reactivate lost clients easily",
      "Make campaigns more effective",
    ],
  },
  {
    title: "Referral Program Integration",
    points: [
      "Let clients refer friends for rewards",
      "Track referral performance in real time",
      "Automated tracking and bonuses",
      "Grow your client base without ads",
    ],
  },
  {
    title: "Custom Campaign Scheduling",
    points: [
      "Schedule follow-ups, reminders, and seasonal promos",
      "Works across WhatsApp, SMS, and email",
      "Create fully automated retention flows",
      "Perfect for reactivating no-shows",
    ],
  },
  {
    title: "Analytics & Performance Tracking",
    points: [
      "Track campaign performance and redemption rates",
      "Identify top-performing offers",
      "Monitor ROI of loyalty programs",
      "Know who your top clients are",
    ],
  },
];

const reasons = [
  {
    title: "Brings Customers Back",
    description:
      "Automated campaigns drive repeat visits without manual effort.",
  },
  {
    title: "Boosts Loyalty",
    description: "Reward returning clients and build strong relationships.",
  },
  {
    title: "Increases Revenue",
    description: "Keep customers spending more over time.",
  },
  {
    title: "Saves Time",
    description: "Set it once — the system takes care of the rest.",
  },
  {
    title: "Improves Relationships",
    description: "Celebrate your clients and keep them engaged.",
  },
];

export default function CRA() {
  return (
    <div className=" text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col items-center gap-4 mb-10">
          <div>
            <div className="flex flex-col items-center justify-center gap-4 ">
                <MessageSquare className="w-10 h-11 text-black"/>
              <h1 className="text-black text-3xl md:text-5xl font-bold text-center mb-4 md:mb-8">
                Customer Retention Automation
              </h1>
            </div>
            <p className="text-gray-700 text-lg font-semibold text-center mb-10 max-w-5xl mx-auto">
              Bring customers back automatically. With smart WhatsApp
              follow-ups, birthday offers, and a loyalty program that actually
              works - retention is now effortless.
            </p>
          </div>
          <div className="border-1 rounded-lg md:rounded-3xl overflow-hidden">
            <img src={cra} alt="" className="w-300" />
          </div>
        </div>

        {/* Features Section */}
        <div className="flex flex-row gap-4 items-center justify-center mt-20 md:mb-10 ">
          <h1 className="text-3xl md:text-5xl font-bold text-black ">Features</h1>
          <CornerRightDown className=" size-8 mt-6" />
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
              Why Choose <span className="text-gray-900">"Lokaci Pro"</span> Customer Retention Automation?
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
            Turn Happy Clients Into Loyal Customers
          </h3>
          <p className="text-gray-700 mb-6">
            Delight, reward, and re-engage your clients automatically.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition cursor-pointer">
            Automate Retention Now
          </button>
        </div>
      </div>
    </div>
  );
}
