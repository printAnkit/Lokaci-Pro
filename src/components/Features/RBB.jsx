import { CornerRightDown, Landmark, Rocket, SquareCheckBig } from "lucide-react";
import rbb from "../../assets/RBB.png";
import { Link } from "react-router-dom";

const features = [
  {
    title: "GST-Compliant Invoicing",
    points: [
      "Generate professional, tax-compliant invoices in seconds",
      "Auto-apply GST based on services or location",
      "Include business tax IDs, client info, and digital signatures",
      "Export invoices easily for accounting or tax filing",
      "Customizable templates with your brand",
    ],
  },
  {
    title: "Upsell & Add-On Tracking",
    points: [
      "Track add-ons and service upgrades at checkout",
      "Identify staff and services that upsell most",
      "Increase average ticket size per client",
      "Upsell suggestions during billing flow",
    ],
  },
  {
    title: "Smart Package Deals",
    points: [
      "Create custom packages (e.g., 5 sessions for price of 4)",
      "Track usage and remaining credits per client",
      "Drive loyalty with prepaid deals",
      "Offer flexible pricing bundles",
    ],
  },
  {
    title: "Split Payments & Partial Billing",
    points: [
      "Accept split payments across cash, card, UPI, wallets",
      "Support partial payments and deposits",
      "Apply remaining balance during future visits",
      "Make billing more convenient for clients",
    ],
  },
  {
    title: "Integrated Product & Service Billing",
    points: [
      "Bill services and retail items together",
      "Track product sales and auto-update inventory",
      "Bundle items with services (e.g., massage + oil)",
      "Boost cart value at checkout",
    ],
  },
  {
    title: "Daily Sales & Revenue Reports",
    points: [
      "Auto-generate daily sales summaries",
      "Track revenue by staff, service, or category",
      "Export to Excel or accounting tools",
      "Monitor business health in real-time",
    ],
  },
  {
    title: "Client Billing History",
    points: [
      "Access full billing history per client",
      "Track past invoices, packages, and spend",
      "Identify top-spending clients",
      "Use data for rewards or loyalty programs",
    ],
  },
  {
    title: "Custom Discounts & Promo Codes",
    points: [
      "Apply discounts based on conditions (first-time, min spend)",
      "Create time-limited or service-specific promos",
      "Track which offers convert best",
      "Drive more sales with targeted pricing",
    ],
  },
];

const reasons = [
  {
    title: "Faster Checkout",
    description: "Speed up billing with automated invoicing and tax handling.",
  },
  {
    title: "100% Compliant",
    description: "Stay GST-ready and error-free with every transaction.",
  },
  {
    title: "Higher Revenue",
    description: "Boost average ticket size with smart upselling and packages.",
  },
  {
    title: "All-in-One Billing",
    description: "One system for services, products, and deals.",
  },
  {
    title: "Insightful Reports",
    description: "Know where your money comes from, daily.",
  },
];

export default function RBB() {
  return (
    <div className=" text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col items-center gap-4 mb-10">
          <div>
            <div className="flex flex-col items-center justify-center gap-4 ">
                <Landmark className="w-10 h-11 text-black"/>
              <h1 className="text-black text-3xl md:text-5xl font-bold text-center mb-4 md:mb-8">
                Revenue Boosting Billing
              </h1>
            </div>
            <p className="text-gray-700 text-lg font-semibold text-center mb-10 max-w-5xl mx-auto">
              GST-compliant invoices in seconds. With upsell tracking, package
              deals, and split payments - our billing system is built to grow
              your revenue and increase average ticket size by up to{" "}
              <strong>25%</strong>.
            </p>
          </div>
          <div className="border-1 rounded-lg md:rounded-3xl overflow-hidden">
            <img src={rbb} alt="" className="w-300" />
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
              Why Choose <span className="text-gray-900">"Lokaci Pro"</span> Revenue-Boosting Billing?
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
            Turn Every Transaction Into a Growth Opportunity
          </h3>
          <p className="text-gray-700 mb-6">
            Upsell more. Sell smarter. Get paid faster all in one system.
          </p>
          <Link 
            to="/get-started"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition cursor-pointer">
            Start Boosting Revenue
          </Link>
        </div>
      </div>
    </div>
  );
}
