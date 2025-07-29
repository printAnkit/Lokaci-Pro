import {
  Calendar,
  Users,
  DollarSign,
  Package,
  MessageSquare,
  Gift,
  Building,
  BarChart3,
} from "lucide-react";

export default function CoreBenefits() {
  const benefits = [
    {
      icon: Calendar,
      title: "Smart Appointment System",
      description:
        "Never lose another booking. Real-time calendar + walk-in management + automatic reminders = 35% fewer no-shows",
    },
    {
      icon: Users,
      title: "Staff Performance Tracking",
      description:
        "Know exactly who's making you money. Automatic commission calculations + performance analytics + leave management",
    },
    {
      icon: DollarSign,
      title: "Revenue-Boosting Billing",
      description:
        "GST-compliant invoices in seconds. Upsell tracking, package deals, split payments - increase average ticket size by 25%",
    },
    {
      icon: Package,
      title: "Smart Inventory Control",
      description:
        "Never run out of products again. Auto-reorder alerts + usage tracking + cost analysis",
    },
    {
      icon: MessageSquare,
      title: "Customer Retention Automation",
      description:
        "Bring customers back automatically. WhatsApp follow-ups + birthday offers + loyalty points that actually work",
    },
    {
      icon: Gift,
      title: "Membership & Loyalty Engine",
      description:
        "Turn one-time visitors into lifetime customers. Prepaid packages + cashback + referral rewards",
    },
    {
      icon: Building,
      title: "Multi-Location Mastery",
      description:
        "Manage 50 salons from one dashboard. Franchise owners save 15+ hours weekly",
    },
    {
      icon: BarChart3,
      title: "Profit Intelligence",
      description:
        "Know your numbers instantly. Which services, staff, and times make you the most money",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-5">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why 3,000+ Salon Owners Choose{" "}
            <span className="text-blue-600">Lokaci Pro</span> Over Everything
            Else
          </h2>
          <p className="text-xl text-gray-600">
            Each feature is designed to directly increase your revenue and
            reduce your stress
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-3xl shadow-lg hover-lift border border-white/50 backdrop-blur-sm fade-in-up overflow-hidden bg-blue-100 flex flex-col justify-between "
            >
              <div className="flex items-start mb-2">
                <div className="bg-blue-600 p-2 rounded-lg mr-3">
                  <benefit.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-800 text-sm">{benefit.description}</p>
                </div>
              </div>
              <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
