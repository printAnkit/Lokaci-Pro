import { Clock, Shield, Database, Headphones, CheckCircle } from "lucide-react"

export default function CallToAction() {

  const trustPoints = [
    {
      icon: CheckCircle,
      text: "Zero setup fees - We handle everything",
    },
    {
      icon: Clock,
      text: "24-hour onboarding - Start earning immediately",
    },
    {
      icon: Shield,
      text: "30-day money-back guarantee - Risk-free trial",
    },
    {
      icon: Database,
      text: "Free data migration - Keep all your existing customer data",
    },
    {
      icon: Headphones,
      text: "24/7 support - We're here when you need us",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Join 3,000+ Salon Owners Who Choose{" "}
          <span className="text-yellow-300">Growth Over Chaos</span>
        </h2>

        <p className="text-xl mb-6 max-w-3xl mx-auto">
          Start your free demo today and see your first results tomorrow
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg cursor-pointer ">
            Start My Free Demo - See Results in 24 Hours
          </button>
          <button className="border-2 border-white text-white px-6 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors cursor-pointer ">
            Call Our Salon Expert: +91-9876543210
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 text-white gap-6 mb-8">
          {trustPoints.map((point, index) => (
            <div
              key={index}
              className="flex items-center border-2 bg-opacity-10 p-4 rounded-lg"
            >
              <point.icon className="h-6 w-6 mr-3 text-yellow-300" />
              <span className="font-semibold">{point.text}</span>
            </div>
          ))}
        </div>

        <div className="bg-red-500 rounded-xl p-6 max-w-2xl mx-auto">
          <div className="flex items-center justify-center mb-2">
            <Clock className="h-6 w-6 mr-2" />
            <span className="text-lg font-semibold">
              Special Launch Pricing: Save ₹2,000 expires in 5 days
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
