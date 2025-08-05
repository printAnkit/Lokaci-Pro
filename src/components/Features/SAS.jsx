import { Calendar1, CornerRightDown, Rocket, SquareCheckBig } from "lucide-react";
import sas from "../../assets/appointmentSAS.png";
const features = [
  {
    title: "Real-Time Calendar Sync",
    points: [
      "Automatically updates across all your devices",
      "Instantly reflects new bookings, cancellations, and changes",
      "Integrates with Google Calendar, Outlook, and more",
      "Prevents double-booking and scheduling conflicts",
    ],
  },
  {
    title: "Walk-In Management",
    points: [
      "Seamlessly handle clients who come in without appointments",
      "Add walk-ins to your system with one click",
      "Track walk-in traffic and patterns over time",
      "Keep your day organized even during peak hours",
    ],
  },
  {
    title: "Automatic Reminders",
    points: [
      "Reduce no-shows by up to 35%",
      "Send customizable SMS, email, or app notifications",
      "Set up reminders for clients and staff",
      "Fully customizable reminder timing",
    ],
  },
  {
    title: "Online Booking Portal",
    points: [
      "Let clients book 24/7 from your website or social media",
      "Mobile-friendly and branded to match your business",
      "Show real-time availability",
      "Accept bookings with or without manual approval",
    ],
  },
  {
    title: "Client Profiles & History",
    points: [
      "Track each client’s appointment history, preferences, and notes",
      "See upcoming and past bookings at a glance",
      "Ideal for personalized service and retention",
    ],
  },
  {
    title: "Smart Rescheduling & Cancellations",
    points: [
      "Allow clients to reschedule easily",
      "Set cancellation policies and waitlist filling",
      "Fill last-minute openings faster",
    ],
  },
  {
    title: "Staff & Resource Management",
    points: [
      "Assign appointments to staff members or rooms",
      "View availability by staff, service, or location",
      "Track performance and workloads",
    ],
  },
  {
    title: "Reporting & Insights",
    points: [
      "Real-time reports on bookings, no-shows, walk-ins, and revenue",
      "Identify peak hours and top services",
      "Make informed business decisions based on data",
    ],
  },
  {
    title: "Payments & Deposits (Optional)",
    points: [
      "Collect deposits or full payments at the time of booking",
      "Reduce no-shows and last-minute cancellations",
      "Integrated with major payment gateways",
    ],
  },
];

const reasons = [
  {
    title: "Easy to Use",
    description: "Intuitive design that requires no technical skills",
  },
  {
    title: "Time-Saving",
    description: "Automates your day-to-day admin work",
  },
  {
    title: "Scalable",
    description: "Works for individuals or teams of any size",
  },
  {
    title: "Customizable",
    description: "Tailor it to match your business flow and branding",
  },
  {
    title: "Reliable",
    description: "Secure, cloud-based system with 24/7 access",
  },
];

export default function SAS() {
  return (
    <div className=" text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col items-center gap-4 mb-10">
          <div>
            <div className="flex flex-col items-center justify-center gap-4 ">
                <Calendar1 className="w-10 h-11 text-black"/>
              <h1 className="text-black text-3xl md:text-5xl font-bold text-center mb-4 md:mb-8">
                Smart Appointment System
              </h1>
            </div>
            <p className="text-gray-700 text-lg font-semibold text-center mb-10 max-w-5xl mx-auto">
              Everything You Need to Manage Bookings - All in One Place. <br />
              Tired of missed appointments, double bookings, and messy
              calendars? Our Smart Appointment System simplifies your
              scheduling, reduces no-shows, and gives you full control, whether
              you're solo or managing a team.
            </p>
          </div>
          <div className="border-1 rounded-lg md:rounded-3xl overflow-hidden">
            <img src={sas} alt="" className="w-300" />
          </div>
        </div>

        {/* Features Section */}
        <div className="flex flex-row gap-4 items-center justify-center mt-20 md:mb-10 ">
          <h1 className="text-3xl md:text-5xl font-bold text-black ">
            Features
          </h1>
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
              Why Choose Our Smart Appointment System?
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
            Let your appointments run on autopilot
          </h3>
          <p className="text-gray-700 mb-6">
            Focus on what matters most: Growing your business and serving your
            clients.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition cursor-pointer">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
}
