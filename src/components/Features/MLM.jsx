import {
  Building,
  CornerRightDown,
  Rocket,
  SquareCheckBig,
} from "lucide-react";
import mlm from "../../assets/MLM.png";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Unified Multi-Location Dashboard",
    points: [
      "Manage all branches from one panel",
      "Switch views between outlets instantly",
      "Track real-time data across all operations",
      "One login to rule them all",
    ],
  },
  {
    title: "Branch-Level Access Control",
    points: [
      "Set user permissions by role or outlet",
      "Franchisees only see what they need to",
      "Protect sensitive data",
      "Flexible for any business structure",
    ],
  },
  {
    title: "Cross-Location Reporting & Insights",
    points: [
      "Compare branches by revenue, service, or staff performance",
      "Identify top and low performers",
      "Download insights for audits, payroll, or planning",
      "Data that drives smarter growth",
    ],
  },
  {
    title: "Centralized Service & Pricing Management",
    points: [
      "Manage services, pricing, and taxes from HQ",
      "Push updates to all or selected locations",
      "Keep your brand experience consistent",
    ],
  },
  {
    title: "Franchise & Royalty Tracking",
    points: [
      "Automate franchise fee calculations",
      "Track revenue splits and dues",
      "Generate royalty statements monthly",
    ],
  },
  {
    title: "Inter-Branch Resource Allocation",
    points: [
      "Transfer staff or inventory between locations",
      "Track transfers with audit trails",
      "Optimize resources across branches",
    ],
  },
  {
    title: "Staff Pooling & Shift Management",
    points: [
      "Create shared rosters for multiple outlets",
      "Assign floating staff or roles",
      "Avoid under/over-staffing at any outlet",
    ],
  },
  {
    title: "Real-Time Alerts & Notifications",
    points: [
      "Receive alerts for low stock, poor feedback, or KPI drops",
      "Track staff attendance and missed targets",
      "Stay informed without micromanaging",
    ],
  },
];

const reasons = [
  {
    title: "Save 15+ Hours Weekly",
    description: "No more repeated logins or duplicated reports.",
  },
  {
    title: "Scale Without Chaos",
    description: "Add branches without adding manual work.",
  },
  {
    title: "Central Command, Local Execution",
    description: "Empower branch managers with guardrails.",
  },
  {
    title: "Smarter Growth Decisions",
    description: "Real-time data means better strategies.",
  },
  {
    title: "Franchise-Ready",
    description: "Perfect for regional or franchise businesses.",
  },
];

export default function MultiLocationMastery() {
  return (
    <div className=" text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col items-center gap-4 mb-10">
          <div>
            <div className="flex flex-col items-center justify-center gap-4 ">
              <Building className="w-10 h-11 text-black" />
              <h1 className="text-black text-3xl md:text-5xl font-bold text-center mb-4 md:mb-8">
                Multi Location Mastery
              </h1>
            </div>
            <p className="text-gray-700 text-lg font-semibold text-center mb-10 max-w-5xl mx-auto">
              Manage 1 or 100+ salons from a single dashboard. Save time,
              simplify operations, and scale with confidence - this is
              multi-location control done right.
            </p>
          </div>
          <div className="border-1 rounded-lg md:rounded-3xl  overflow-hidden">
            <img src={mlm} alt="" className="w-300" />
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
              Multi-Location Mastery?
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
            Control Every Location, From Anywhere
          </h3>
          <p className="text-gray-700 mb-6">
            Save hours every week and scale like a pro Multi Location Mastery
            makes it effortless.
          </p>
          <Link
            to="/get-started"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Centralize My Locations
          </Link>
        </div>
      </div>
    </div>
  );
}
