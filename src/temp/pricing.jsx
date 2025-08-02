import { useState } from "react";
import {
  Check,
  Star,
  Crown,
  Rocket,
  Gift,
  Calculator,
  MessageCircleMore,
  Smartphone,
  Building,
  Blocks,
  IndianRupee,
  BadgeCheck,
  SquareArrowOutUpRight,
  Scissors,
} from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import FAQ from "../components/FAQ";

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState(1);

  const plans = [
    {
      name: "STARTER PLAN",
      icon: Rocket,
      price: "₹7,000",
      period: "/year",
      monthly: "₹583/month",
      description: "Perfect for solo stylists & small salons",
      popular: false,
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
      popular: true,
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
    {
      name: "Extra WhatsApp Messages",
      price: "₹1,000",
      unit: "per 1000 messages",
      description:
        "Additional automated WhatsApp messages beyond your plan limit",
      icon: MessageCircleMore,
    },
    {
      name: "White-labeled Customer App",
      price: "₹5,000",
      unit: "per year",
      description:
        "Custom branded mobile app for your customers with your salon's branding",
      icon: Smartphone,
    },
    {
      name: "Advanced Franchise Dashboard",
      price: "₹10,000",
      unit: "per year",
      description:
        "Enhanced multi-location management with advanced analytics and controls",
      icon: Building,
    },
    {
      name: "Custom Integrations",
      price: "₹15,000",
      unit: "one-time setup",
      description:
        "Connect with your existing POS, accounting, or other business software",
      icon: Blocks,
    },
  ];

  const features = [
    { title: "Unlimited bookings", subtitle: "" },
    { title: "Client Appointment", subtitle: "Confirmations & Reminders" },
    { title: "Email Marketing", subtitle: "" },
    { title: "Text Message", subtitle: "Marketing*" },
    { title: "Custom Forms &", subtitle: "Liability Waivers" },
    { title: "Reserve with Google", subtitle: "" },
    { title: "Reporting and", subtitle: "Insights" },
    { title: "Waitlists", subtitle: "" },
    { title: "No-Show Protection", subtitle: "features**" },
    { title: "Online Gift Cards**", subtitle: "" },
    { title: "Memberships and", subtitle: "Packages" },
    { title: "and more!", subtitle: "" },
  ];

  const handlePlanSelect = (planIndex) => {
    setSelectedPlan(planIndex);
  };

  return (
    <>
      <section className="bg-white min-h-screen">
        <section className="relative py-15 overflow-hidden ">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center fade-in-up">
              <div className="inline-flex items-center bg-black backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full   mb-8">
                <Calculator className="h-5 w-5 mr-2 text-blue-600" />
                <span className="font-semibold">Choose Your Perfect Plan</span>
              </div>

              <motion.h1
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                className="text-4xl md:text-6xl font-bold text-black mb-8 text-shadow"
              >
                <p className="md:mb-[-50px] mb-[-20px]">Simple Pricing That</p>{" "}
                <br />
                <span className="text-blue-600 relative">Grows With You</span>
              </motion.h1>

              <motion.p
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl text-black max-w-3xl mx-auto mb-8"
              >
                No contracts. No hidden fees. Cancel anytime. Start with a 7-day
                free trial and see the difference.
              </motion.p>

              {/* Stats */}
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="glass-effect p-6 rounded-2xl border border-black shadow-xl"
                >
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    3,000+
                  </div>
                  <div className="text-black">Happy Salons</div>
                </motion.div>
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="glass-effect p-6 rounded-2xl border border-black shadow-xl"
                >
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    45%
                  </div>
                  <div className="text-black">Average Revenue Increase</div>
                </motion.div>
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  className="glass-effect p-6 rounded-2xl border border-black shadow-xl"
                >
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    24hrs
                  </div>
                  <div className="text-black">Setup Time</div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="min-h-screen bg-gradient-to-br from-gray-900  to-gray-700 flex items-center justify-center p-8">
            <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Side - Pricing Content */}
              <div className="text-white space-y-8">
                {/* Header */}
                <div className="space-y-4">
                  <h1 className="text-6xl font-bold tracking-tight">Pricing</h1>
                  <p className="text-xl text-gray-300">
                    Get your money's worth with Lokaci Pro.
                  </p>
                </div>

                {/* Pricing */}
                <div className="space-y-4 py-8 border-t border-gray-600">
                  <div className="inline-block bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm font-medium border border-orange-400/30">
                    Limited period offer
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-4xl font-bold">
                      Get everything for{" "}
                      <span className="text-orange-400 flex items-center">
                        <IndianRupee className="w-10 h-10" />
                        5,000
                      </span>
                    </h2>
                    <p className="text-gray-400">per year + tax</p>
                  </div>

                  <button className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 mt-6 cursor-pointer ">
                    Start free now
                  </button>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-gray-600">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <BadgeCheck className="w-8 h-8 text-teal-400 bg-teal-400/20 rounded-full p-1" />
                    </div>
                    <span className="text-lg">All features included</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <BadgeCheck className="w-8 h-8 text-teal-400 bg-teal-400/20 rounded-full p-1" />
                    </div>
                    <span className="text-lg">No hidden or extra fees</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <BadgeCheck className="w-8 h-8 text-teal-400 bg-teal-400/20 rounded-full p-1" />
                    </div>
                    <span className="text-lg">No commitment</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <BadgeCheck className="w-8 h-8 text-teal-400 bg-teal-400/20 rounded-full p-1" />
                    </div>
                    <span className="text-lg">Cancel anytime</span>
                  </div>
                </div>
              </div>

              {/* Right Side - Image */}
              <div className="hidden lg:block">
                <div className="relative">
                  <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-br from-teal-400/20 to-orange-400/20 backdrop-blur-sm">
                    <img
                      src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop"
                      alt="Professional portrait"
                      className="w-full h-full object-cover mix-blend-overlay"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-10  ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className=" py-10 md:py-20 flex items-center justify-center ">
              <h1 className="flex items-center justify-center text-center text-3xl md:text-5xl font-bold ">
                Pricing that Fits Your Business
              </h1>
            </div>
            <div className=" grid md:grid-cols-3 gap-8 mb-8 ">
              {plans.map((plan, index) => (
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.2, type: "spring", stiffness: 100 }}
                  key={index}
                  className={`rounded-2xl shadow-xl p-6 relative flex flex-col justify-between transition-all duration-300 border-black bg-white  ${
                    selectedPlan === index
                      ? "ring-1 ring-gray-950 scale-102"
                      : ""
                  }`}
                >
                  <div>
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gray-950 text-white px-5 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    )}
                    <div className="text-center mb-2 ">
                      <div className="bg-black p-1 rounded-lg w-fit mx-auto mb-1">
                        <plan.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-black mb-1">
                        {plan.name}
                      </h3>
                      <div className="text-2xl font-bold text-black mb-1">
                        {plan.price}
                        <span className="text-lg text-black">
                          {plan.period}
                        </span>
                      </div>
                      <p className="text-black mb-1">{plan.monthly}</p>
                      <p className="text-black">{plan.description}</p>
                    </div>
                    <ul className="space-y-1 mb-1">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0 flex-shrink-0" />
                          <span className="text-black text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-md text-red-500 font-medium mb-1 italic mt-2">
                      {plan.note}
                    </p>
                  </div>
                  <div>
                    <button
                      onClick={() => handlePlanSelect(index)}
                      className={`flex items-center justify-center w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 cursor-pointer ${
                        selectedPlan === index
                          ? "bg-gray-950 text-white hover:bg-gray-950 shadow-lg"
                          : "bg-gray-100 text-gray-900 hover:bg-gray-300"
                      }`}
                    >
                      {plan.name}
                      <SquareArrowOutUpRight className="w-4 h-4 ml-3" />
                      {/* {selectedPlan === index ? "Selected" : `Choose ${plan.name.split(" ")[0]}`} */}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
              <div className="text-center fade-in-up">
                <motion.h2
                  initial={{ y: -20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-3xl md:text-5xl font-bold text-black mb-4"
                >
                  Enhance Your Experience
                </motion.h2>
                <motion.p
                  initial={{ y: -20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="text-xl text-black max-w-3xl mx-auto"
                >
                  Optional add-ons to customize your salon management experience
                </motion.p>
              </div>

              <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-center ">
                  {addOns.map((addon, index) => (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 1, duration: 0.8 }}
                      key={index}
                      className="bg-white p-8 rounded-2xl shadow-lg hover-lift border border-gray-200 fade-in-up h-full transition duration-300 ease-in-out hover:-translate-y-2 hover:scale-100 hover:shadow-2xl"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <addon.icon className="h-8 w-8 mb-2" />
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {addon.name}
                      </h3>
                      <div className="text-2xl font-bold text-blue-600 mb-2">
                        {addon.price}
                        <span className="text-sm text-gray-800 font-normal">
                          /{addon.unit}
                        </span>
                      </div>
                      <p className="text-gray-800 text-sm leading-relaxed">
                        {addon.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </section>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="bg-gradient-to-r from-green-800 to-green-900 rounded-xl p-8 text-center flex flex-col items-center text-white"
            >
              <h3 className="text-2xl font-bold mb-2 flex items-center">
                <Gift className=" w-6 h-6 text-red-600 fill-yellow-400" />{" "}
                Launch Offer
              </h3>
              <p className="text-lg mb-1">
                Save ₹2,000 - Use code{" "}
                <span className="font-bold">SALON2025</span>
              </p>
              <p className="text-sm">
                Limited time offer for the first 100 signups
              </p>
              <p className="text-[10px] text-gray-400">
                Not applicable on offers.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900">
          {/* Hero Section */}
          <div className="relative">
            {/* Background image area - using a placeholder gradient */}
            <div className="h-50 bg-gray-950 relative overflow-hidden">
              <div className="relative z-10 flex items-center justify-start h-full px-8 md:px-16 lg:px-24">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-2xl">
                  We don't charge you
                  <br />
                  extra for:
                </h1>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="px-8 md:px-16 lg:px-24 py-16">
            <div className="space-y-10">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
                {features.slice(0, 3).map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <Scissors className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white text-lg md:text-xl font-semibold leading-tight">
                        {feature.title}
                      </h3>
                      {feature.subtitle && (
                        <p className="text-white text-lg md:text-xl font-semibold leading-tight">
                          {feature.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Divider Line */}
              <div className="border-t border-gray-500 opacity-30"></div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
                {features.slice(3, 6).map((feature, index) => (
                  <div key={index + 3} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <Scissors className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white text-lg md:text-xl font-semibold leading-tight">
                        {feature.title}
                      </h3>
                      {feature.subtitle && (
                        <p className="text-white text-lg md:text-xl font-semibold leading-tight">
                          {feature.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Divider Line */}
              <div className="border-t border-gray-500 opacity-30"></div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
                {features.slice(6, 9).map((feature, index) => (
                  <div key={index + 6} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <Scissors className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white text-lg md:text-xl font-semibold leading-tight">
                        {feature.title}
                      </h3>
                      {feature.subtitle && (
                        <p className="text-white text-lg md:text-xl font-semibold leading-tight">
                          {feature.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Divider Line */}
              <div className="border-t border-gray-500 opacity-30"></div>

              {/* Row 4 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
                {features.slice(9, 12).map((feature, index) => (
                  <div key={index + 9} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <Scissors className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white text-lg md:text-xl font-semibold leading-tight">
                        {feature.title}
                      </h3>
                      {feature.subtitle && (
                        <p className="text-white text-lg md:text-xl font-semibold leading-tight">
                          {feature.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <Link
                to="/features"
                className="bg-white text-gray-800 hover:bg-gray-800 hover:text-white  px-8 py-4 rounded-lg font-semibold text-lg shadow-lg cursor-pointer"
              >
                See all included features
              </Link>
              <p className="text-white text-sm mt-4 opacity-80">
                (Hint: It's all of them.)
              </p>
            </div>
          </div>
        </section>
        <FAQ title="Lokaci Pricing FAQs" subTitle=""/>
      </section>
    </>
  );
}
