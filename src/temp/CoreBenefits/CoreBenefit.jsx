import {
  MessageCircleMore,
  CreditCard,
  ReceiptIndianRupee,
  Mail,
  FolderCode,
  Calendar1,
  CircleSmall,
} from "lucide-react";
import { assets } from "../../assets/assets";
import { mainFeatures, additionalFeatures } from "./CoreBenefit";


export default function CoreBenefits() {

  return (
    <div className="min-h-screen md:pt-20">
      {/* Hero Section */}
      <section className="py-20 flex flex-wrap lg:flex-nowrap justify-center ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">
            Features That
            <span className="block md:text-6xl text-blue-600 my-5">
              Actually Make You Money
            </span>
          </h1>
          <p className="text-xl text-gray-800 md:mb-8 max-w-4xl mx-auto">
            Every feature in Lokaci Pro is designed with one goal: increase your
            revenue while reducing your workload. Here's how we make it happen.
          </p>
        </div>
        <img src={assets.businessGrowth} alt="" className="w-140 mr-5" />
      </section>

      {/* Main Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="space-y-20">
            {mainFeatures.map((feature, index) => {
              const Icon = feature.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`flex flex-col justify-evenly ${
                    isEven ? "lg:flex-row " : "lg:flex-row-reverse"
                  } items-center gap-12`}
                >
                  <div>
                    <img src={feature.logo} className="w-70 md:w-100 mb-0 " alt="" />
                  </div>

                  <div>
                    <div>
                      <div>
                        <div
                          className={`inline-flex rounded-2xl text-${feature.color}-400 mb-6`}
                        >
                          <Icon className="h-10 w-10" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                          {feature.title}
                        </h2>
                        <p className="text-lg text-gray-800 mb-6">
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
                      <hr/>
                      <div className=" backdrop-blur-sm p-6 rounded-2xl">
                        <h3 className="text-xl font-semibold text-black mb-6">
                          Key Features:
                        </h3>
                        <div className="flex flex-col gap-1">
                          {feature.features.map((item, itemIndex) => (
                            <div
                              key={itemIndex}
                              className="flex items-start space-x-3"
                            >
                              <CircleSmall className="text-black fill-black w-4 "/>
                              <span className="text-black font-semibold">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Plus Many More Features
            </h2>
            <p className="text-xl text-gray-200">
              Everything you need to run a successful salon business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800 backdrop-blur-sm p-6 rounded-xl border border-gray-600 hover:border-blue-500/50 transition-all duration-300 text-center group"
                >
                  <div className="inline-flex p-3 rounded-lg bg-blue-950 text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
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
                className="  p-8 rounded-xl border-gray-700 hover:border-blue-500 shadow-black shadow-sm transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-102 "
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
      <section className="py-20 bg-gradient-to-r from-gray-950 via-gray-800 to-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            See how Lokaci Pro can transform your salon in just 24 hours
          </p>
          <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-all duration-200 transform hover:scale-105 cursor-pointer">
            Start Your Free Demo
          </button>
        </div>
      </section>
    </div>
  );
}
