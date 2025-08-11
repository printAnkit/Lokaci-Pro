import { useState } from "react";
import { assets } from "../../assets/assets.js";
import {
  Check,
  Gift,
  Calculator,
  IndianRupee,
  BadgeCheck,
  SquareArrowOutUpRight,
  Scissors,
} from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { plans, addOns, features } from "./Pricings.js";
import FAQ from "../../components/FAQ/FAQ.jsx";

export default function pricing() {
  const [selectedPlan, setSelectedPlan] = useState(1);

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

        <section className=" items-center justify-center">
          <div className=" flex items-center text-center justify-center p-10">
            <div className="max-w-7xl w-full items-center">
              {/* Left Side - Pricing Content */}
              <div className="text-black space-y-8">
                {/* Header */}
                <div className="space-y-4">
                  <h1 className="text-6xl font-bold tracking-tight">Pricing</h1>
                  <p className="text-xl text-gray-800">
                    Get your money's worth with Lokaci Pro.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 border-t border-b border-gray-600 ">
                  {/* Pricing */}
                  <div className="space-y-4 py-8 ">
                    <div className="inline-block bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm font-medium border border-red-400/30">
                      Limited period offer
                    </div>
                    <div className="space-y-2 ">
                      <h2 className="text-4xl font-bold flex flex-col items-center justify-center ">
                        Get everything for{" "}
                        <span className="text-blue-600 flex items-center mt-4">
                          <IndianRupee className="w-10 h-10" />
                          5,000
                        </span>
                      </h2>
                    </div>

                    <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors duration-200 mt-6 cursor-pointer ">
                      Start free now
                    </button>
                  </div>

                  {/* Features */}
                  <div className="flex items-center justify-center ">
                    <div className="">
                      <div className="flex items-center m-4 space-x-3">
                        <div className="flex-shrink-0">
                          <BadgeCheck className="w-8 h-8 text-blue-400 bg-blue-400/20 rounded-full p-1" />
                        </div>
                        <span className="text-lg">All features included</span>
                      </div>

                      <div className="flex items-center m-4 space-x-3">
                        <div className="flex-shrink-0">
                          <BadgeCheck className="w-8 h-8 text-blue-400 bg-blue-400/20 rounded-full p-1" />
                        </div>
                        <span className="text-lg">No hidden or extra fees</span>
                      </div>

                      <div className="flex items-center m-4 space-x-3">
                        <div className="flex-shrink-0">
                          <BadgeCheck className="w-8 h-8 text-blue-400 bg-blue-400/20 rounded-full p-1" />
                        </div>
                        <span className="text-lg">No commitment</span>
                      </div>

                      <div className="flex items-center m-4 space-x-3">
                        <div className="flex-shrink-0">
                          <BadgeCheck className="w-8 h-8 text-blue-400 bg-blue-400/20 rounded-full p-1" />
                        </div>
                        <span className="text-lg">Cancel anytime</span>
                      </div>
                    </div>
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
              className="bg-gradient-to-r from-green-700 to-green-800 rounded-xl p-8 text-center flex flex-col items-center text-white"
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

        <section className="flex flex-col justify-center items-center max-w-8xl mx-auto pt-10 ">
          {/* Hero Section */}
          <div className="py-10">
            <h1 className="text-3xl md:text-4xl font-bold text-black">
              We don't charge you
              <span className="text-blue-600"> extra for:</span>
            </h1>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 mb-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className=" flex items-center p-8 rounded-lg shadow-lg transition duration-300 ease-in-out hover:scale-101 hover:shadow-xl w-80 h-30 border-t-4 border-blue-200"
              >
                <div className="flex items-center">
                  <img
                      src={feature.icon}
                      className="w-18 h-18 text-black"
                    />
                  <h3 className="text-lg font-semibold text-gray-900 pl-4">
                    {feature.title}
                  </h3>
                </div>
                
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-8">
            <Link
              to="/features"
              className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg cursor-pointer"
            >
              See all included features
            </Link>
            <p className="text-gray-800 text-sm mt-4 opacity-80">
              (Hint: It's all of them.)
            </p>
          </div>
        </section>
        <FAQ title="Lokaci Pricing FAQs" subTitle="" />
      </section>
    </>
  );
}
