import { Link, useNavigate } from "react-router-dom";
import { mainFeatures } from "./CoreBenefits";
import {
  ArrowRight,
  Calendar1,
  CircleSmall,
  CreditCard,
  FolderCode,
  Mail,
  MessageCircleMore,
  ReceiptIndianRupee,
  Scissors,
} from "lucide-react";
import { assets } from "../../assets/assets";

export default function CoreBenefits() {
  const navigate = useNavigate();
  return (
    <section id="features" className="pb-20 mt-20 md:mt-0">
      <div className="relative flex items-center justify-start overflow-hidden mb-20 md:px-30 lg:px-50 md:py-24 lg:py-60">
        {/* Background image overlay - responsive */}
        <img
          src={assets.bgImage}
          alt="Salon tools background"
          className="hidden md:block absolute inset-0 w-full h-full object-contain object-right z-0"
        />

        {/* Content */}
        <div className="relative z-10 max-w-4xl text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Why 3,000+ Salon Owners Choose{" "}
            <span className="text-blue-600">Lokaci Pro</span> Over Everything
            Else
          </h2>
          <p className="text-lg md:text-2xl text-gray-700">
            Each feature is designed to directly increase your revenue and
            reduce your stress.
          </p>
        </div>
      </div>

      <section>
        <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <h1 className="text-2xl md:text-4xl mb-20 text-black">
            Features That
            <span className="block md:text-4xl font-semibold text-blue-600">
              Actually Make You Money
            </span>
          </h1>
          <div className="max-w-6xl flex mx-auto ">
            <div className="space-y-15 md:space-y-40">
              {mainFeatures.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div key={index} className={`flex flex-col`}>
                    <div className="flex flex-col lg:flex-row items-center justify-between md:gap-20 ">
                      <div>
                        <div
                          className={`inline-flex rounded-2xl text-${feature.color}-400 mb-6`}
                        >
                          <img src={Icon} className="h-15 w-15" />
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                          {feature.title}
                        </h2>
                        <p className="text-xl text-gray-800  mb-6">
                          {feature.description}
                        </p>
                        <div
                          className={`inline-block bg-blue-700 border border-${feature.color}-500/30 px-6 py-2 rounded-full mb-8`}
                        >
                          <span
                            className={`text-${feature.color} font-semibold`}
                          >
                            ✨ {feature.benefit}
                          </span>
                        </div>
                      </div>

                      <div className=" backdrop-blur-sm p-6 rounded-2xl">
                        <h3 className="text-2xl font-semibold text-blue-700 mb-6">
                          Key Features:
                        </h3>
                        <div className="flex flex-col gap-1">
                          {feature.features.map((item, itemIndex) => (
                            <div
                              key={itemIndex}
                              className="flex items-start space-x-3 md:space-y-4"
                            >
                              <Scissors className="text-black fill-black w-5 mt-1 " />
                              <span className="text-black text-lg font-semibold">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center items-center m-4 mt-0 ">
                      <Link
                        to={feature.navigatePage}
                        onClick={() => {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className=" flex items-center border-1 rounded-4xl px-4 hover:bg-black hover:text-white "
                      >
                        <button className=" m-2 cursor-pointer">
                          Learn More
                        </button>
                        <ArrowRight className=" hover:translate-x-1 " />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Integration Section */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-black">
                  Seamless Integrations
                </h2>
                <p className="text-xl text-gray-900 mb-12">
                  Lokaci Pro works with the tools you already use
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "WhatsApp Business API",
                    description:
                      "Send automated messages, confirmations, and campaigns directly through WhatsApp",
                    icon: MessageCircleMore,
                  },
                  {
                    title: "Payment Gateways",
                    description:
                      "Accept payments through Razorpay, PayU, and other popular payment processors",
                    icon: CreditCard,
                  },
                  {
                    title: "GST Compliance",
                    description:
                      "Automatic GST calculations and compliant invoice generation",
                    icon: ReceiptIndianRupee,
                  },
                  {
                    title: "Email Marketing",
                    description:
                      "Integrated email campaigns for customer retention and promotions",
                    icon: Mail,
                  },
                  {
                    title: "Accounting Software",
                    description:
                      "Export data to popular accounting software like Tally and QuickBooks",
                    icon: FolderCode,
                  },
                  {
                    title: "Google Calendar",
                    description:
                      "Sync appointments with Google Calendar for better organization",
                    icon: Calendar1,
                  },
                ].map((integration, index) => (
                  <div
                    key={index}
                    className="p-8 rounded-xl shadow-sm transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-102 "
                  >
                    <integration.icon className="text-4xl mb-4" />
                    <h3 className="text-xl font-semibold text-black mb-3">
                      {integration.title}
                    </h3>
                    <p className="text-gray-950">{integration.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
                Ready to Experience These Features?
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                See how Lokaci Pro can transform your salon in just 24 hours
              </p>
              <button
                onClick={() => {
                  navigate("auth");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 cursor-pointer"
              >
                Start Your Free Demo
              </button>
            </div>
          </section>
        </div>
      </section>
    </section>
  );
}

{
  /*  */
}
