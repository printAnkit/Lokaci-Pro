import { Link } from "react-router-dom";
import { benefits } from "./CoreBenefits";
import { ArrowRight } from "lucide-react";

export default function CoreBenefits() {
  return (
    <section id="features" className="pb-20 mt-20 bg-white">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4 ">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative p-10 rounded-3xl shadow-lg hover-lift border-1 border-gray-200 backdrop-blur-sm fade-in-up overflow-hidden flex flex-col justify-between "
            >
              <div className="flex items-start mb-2">
                <div className="bg-blue-600 p-2 rounded-lg mr-3">
                  <benefit.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl  font-bold text-gray-900 mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-800 text-md">{benefit.description}</p>
                </div>
              </div>
              <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out"></div>
              </div>
              <div className="flex justify-end items-center ">
                <Link to={benefit.navigatePage} onClick={() => {window.scrollTo({ top: 0, behavior: "smooth" });
              }} className=" flex items-center ">
                  <button className=" m-2 cursor-pointer">Learn More</button>
                  <ArrowRight className="hover:translate-x-1 "/>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
