import {
  BarChart3,
  CornerLeftDown,
  CornerRightDown,
  Rocket,
  SquareCheckBig,
  Star,
} from "lucide-react";
import pi from "../../assets/PI.png";

const features = [
  {
    title: "Service-Level Profitability Tracking",
    points: [
      "Track revenue and margins per service",
      "See which services are most profitable",
      "Include costs, discounts, and commissions",
      "Helps prioritize high-margin offerings",
    ],
  },
  {
    title: "Top-Performing Staff Insights",
    points: [
      "Identify staff who generate the most revenue",
      "Track rebooking rates and bill value",
      "Align commissions with profitability",
      "Coach low-performers with real data",
    ],
  },
  {
    title: "Peak Hour & Day Profit Analysis",
    points: [
      "Discover the most profitable times and days",
      "Schedule staff efficiently based on demand",
      "Run promotions during off-peak hours",
      "Maximize your calendar’s potential",
    ],
  },
  {
    title: "Location-Level Revenue Breakdown",
    points: [
      "View profits by outlet or franchise",
      "Compare regional performance",
      "Find and fix underperforming locations",
    ],
  },
  {
    title: "Cost vs Revenue Insights",
    points: [
      "Track all expenses in real-time",
      "Understand your true net profits",
      "Spot unnecessary spend and leakage",
    ],
  },
  {
    title: "Smart Dashboards & KPIs",
    points: [
      "Visual, customizable reports",
      "Track daily/monthly targets with ease",
      "Quick access for owners and managers",
    ],
  },
  {
    title: "Real-Time Alerts & Goals",
    points: [
      "Set and track targets across services, staff, and branches",
      "Receive alerts for performance drops or goal achievements",
      "Gamify KPIs to engage your team",
    ],
  },
];

const reasons = [
  {
    title: "Make Data-Driven Decisions",
    description: "Let real-time insights guide your strategy.",
  },
  {
    title: "Maximize Profits",
    description: "Double down on what’s working best.",
  },
  {
    title: "Motivate Staff",
    description: "Use data to reward and improve performance.",
  },
  {
    title: "Identify Trends Early",
    description: "Anticipate slow seasons and high demand windows.",
  },
  {
    title: "Save Time on Reports",
    description: "All key numbers in one place — no spreadsheets.",
  },
];

export default function AAR() {
  return (
    <div className=" text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col items-center gap-4 mb-10">
          <div>
            <div className="flex flex-col items-center justify-center gap-4 ">
                <BarChart3 className="w-10 h-11 text-black"/>
              <h1 className="text-black text-3xl md:text-5xl font-bold text-center mb-4 md:mb-8">
                Advanced Analytics & Reports
              </h1>
            </div>
            <p className="text-gray-700 text-lg font-semibold text-center mb-10 max-w-5xl mx-auto">
              Know your numbers instantly. Understand which services, staff, and
              time slots make you the most money and use those insights to
              grow your business with confidence.
            </p>
          </div>
          <div className="border-1 rounded-lg md:rounded-3xl overflow-hidden">
            <img src={pi} alt="" className="w-300" />
          </div>
        </div>

        {/* Features Section */}
        <div className="flex flex-row gap-4 items-center justify-center mt-20 md:mb-10 ">
          <h1 className="text-3xl md:text-5xl font-bold text-black ">Features</h1>
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
              Why Choose <span className="text-gray-900">"Lokaci Pro"</span> Profit Intelligence?
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
            See the Bigger Picture, Make Better Decisions
          </h3>
          <p className="text-gray-700 mb-6">
            With Profit Intelligence, you’re not just running your business - you’re growing it with clarity and confidence.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition cursor-pointer">
            Activate Profit Insights
          </button>
        </div>
      </div>
    </div>
  );
}
