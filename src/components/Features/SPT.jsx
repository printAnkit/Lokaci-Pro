import { CornerRightDown, Rocket, SquareCheckBig, Users } from "lucide-react";
import spt from "../../assets/SPT.png";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Performance Analytics",
    points: [
      "See how each team member is performing in real-time",
      "Track services delivered, clients served, and hours worked",
      "Compare performance over days, weeks, or months",
      "Identify top performers and support underperformers",
      "Boost accountability and reward excellence",
    ],
  },
  {
    title: "Automatic Commission Calculations",
    points: [
      "Auto-calculate commissions based on services or sales",
      "Supports percentage, tiered, or fixed structures",
      "Transparent payout reports for staff and admin",
      "Avoid manual errors and save hours",
      "Supports multi-service or shared appointments",
    ],
  },
  {
    title: "Leave & Attendance Management",
    points: [
      "Staff can request leaves directly in the system",
      "Approve/decline with a single click",
      "Track leave history, late arrivals, absentee patterns",
      "Sync with staff schedule to prevent conflicts",
      "Improve reliability and accountability",
    ],
  },
  {
    title: "Revenue Contribution Breakdown",
    points: [
      "See how much revenue each staff member brings in",
      "View detailed service and sales breakdowns",
      "Identify who drives the most business",
      "Optimize staffing during peak/off-peak hours",
    ],
  },
  {
    title: "Custom KPIs & Targets",
    points: [
      "Set sales, appointments, or client goals per staff",
      "Monitor live progress against set targets",
      "Encourage healthy competition",
      "Motivate teams with measurable results",
    ],
  },
  {
    title: "Role-Based Access & Privacy",
    points: [
      "Staff see only what they need to",
      "Admins and managers get full control",
      "Customizable permissions for every role",
      "Data stored securely in the cloud",
    ],
  },
  {
    title: "Integrated with Appointment System",
    points: [
      "Pulls live data from your existing booking system",
      "Tracks appointments and sales automatically",
      "No need for separate tools",
      "One system, full visibility",
    ],
  },
];

const reasons = [
  {
    title: "Data-Driven Decisions",
    description: "Make smart choices about hiring, training, and promotions.",
  },
  {
    title: "Save Time",
    description: "Automate commission calculations and tracking.",
  },
  {
    title: "Motivate Teams",
    description: "Recognize and reward performance transparently.",
  },
  {
    title: "Stay Organized",
    description: "Manage everything from a single platform.",
  },
  {
    title: "Improve Profitability",
    description: "Align staff goals with revenue growth.",
  },
];

export default function SPT() {
  return (
    <div className=" text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col items-center gap-4 mb-10">
          <div>
            <div className="flex flex-col items-center justify-center gap-4 ">
              <Users className="w-10 h-11 text-black" />
              <h1 className="text-black text-3xl md:text-5xl font-bold text-center mb-4 md:mb-8">
                Staff Performance Tracking
              </h1>
            </div>
            <p className="text-gray-700 text-lg font-semibold text-center mb-10 max-w-5xl mx-auto">
              Know exactly who’s making you money. Our Staff Performance
              Tracking tool offers real-time analytics, automatic commission
              calculations, and full leave management, giving you insights that
              drive smarter staffing decisions and business growth.
            </p>
          </div>
          <div className="border-1 rounded-lg md:rounded-3xl overflow-hidden">
            <img src={spt} alt="" className="w-300" />
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
                <SquareCheckBig className="w-5 " />
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
              Why Use <span className="text-gray-900">"Lokaci Pro"</span> Staff
              Performance Tracking?
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
            Empower Your Team with Real-Time Performance Insights
          </h3>
          <p className="text-gray-700 mb-6">
            Reward top performers, fix gaps, and grow faster - All with one
            Lokaci Pro.
          </p>
          <Link
            to="/get-started"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Start Tracking Now
          </Link>
        </div>
      </div>
    </div>
  );
}
