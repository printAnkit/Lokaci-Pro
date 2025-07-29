import { useState } from "react";
import { Check, Star, Crown, Rocket, Lightbulb, Gift } from "lucide-react";

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState(0);

  const plans = [
    {
      name: "STARTER PLAN",
      icon: Rocket,
      price: "₹7,000",
      period: "/year",
      monthly: "₹583/month",
      description: "Perfect for solo stylists & small salons",
      popular: true,
      features: [
        "Unlimited appointments & walk-ins",
        "GST-ready billing & invoicing",
        "Basic customer database",
        "WhatsApp booking confirmations",
        "Daily/weekly reports",
        "Phone & chat support",
      ],
      note: "Most popular for new salon owners",
    },
    {
      name: "GROWTH PLAN",
      icon: Star,
      price: "₹14,000",
      period: "/year",
      monthly: "₹1,167/month",
      description: "For salons ready to scale (3-10 staff)",
      popular: false,
      features: [
        "Everything in Starter, plus:",
        "Advanced loyalty & membership system",
        "Inventory management with alerts",
        "500 automated WhatsApp messages/month",
        "Staff performance analytics",
        "Customer retention campaigns",
        "Package & combo deals",
      ],
      note: "Recommended for most salons",
    },
    {
      name: "ELITE PLAN",
      icon: Crown,
      price: "₹25,000",
      period: "/year",
      monthly: "₹2,083/month",
      description: "For franchises & multi-location salons",
      popular: false,
      features: [
        "Everything in Growth, plus:",
        "Unlimited locations management",
        "2,000 WhatsApp messages/month",
        "Advanced analytics & profit reports",
        "Priority support (2-hour response)",
        "Custom integrations",
        "Dedicated account manager",
      ],
      note: "Perfect for salon chains",
    },
  ];

  const addOns = [
    "Extra WhatsApp Messages: ₹1,000/1000 messages",
    "White-labeled Customer App: ₹5,000/year",
    "Advanced Franchise Dashboard: ₹10,000/year",
  ];

  const handlePlanSelect = (planIndex) => {
    setSelectedPlan(planIndex);
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple Pricing That{" "}
            <span className="text-blue-600">Pays for Itself</span>
          </h2>
          <p className="text-lg text-gray-600">
            No contracts. No hidden fees. Cancel anytime. But you won't want to.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-xl p-6 relative flex flex-col justify-between transition-all duration-300 border-1 ${
                selectedPlan === index ? "ring-4 ring-blue-600 scale-102" : ""
              }`}
            >
              <div>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-2">
                  <div className="bg-purple-100 p-1 rounded-lg w-fit mx-auto mb-1">
                    <plan.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {plan.name}
                  </h3>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {plan.price}
                    <span className="text-lg text-gray-600">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mb-1">{plan.monthly}</p>
                  <p className="text-gray-700">{plan.description}</p>
                </div>
                <ul className="space-y-1 mb-1">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-blue-600 font-medium mb-1 italic mt-2">
                  {plan.note}
                </p>
              </div>
              <div>
                <button
                  onClick={() => handlePlanSelect(index)}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 cursor-pointer ${
                    selectedPlan === index
                      ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-300"
                  }`}
                >
                  {plan.name}
                  {/* {selectedPlan === index ? "Selected" : `Choose ${plan.name.split(" ")[0]}`} */}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gray-50 rounded-xl p-8 mb-4">
          <div className="flex items-center ">
            <Lightbulb className="h-6 w-6 text-amber-500 fill-yellow-300 mr-3" />
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              Add-Ons Available
            </h3>
          </div>

          <ul className="space-y-2">
            {addOns.map((addon, index) => (
              <li key={index} className="text-gray-700">
                • {addon}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-8 text-center flex flex-col items-center text-white">
          <h3 className="text-2xl font-bold mb-2 flex items-center">
            <Gift className=" w-6 h-6 text-red-600 fill-yellow-400" /> Launch Offer
          </h3>
          <p className="text-lg mb-1">
            Save ₹2,000 - Use code <span className="font-bold">SALON2025</span>
          </p>
          <p className="text-sm">
            Limited time offer for the first 100 signups
          </p>
        </div>
      </div>
    </section>
  );
}
