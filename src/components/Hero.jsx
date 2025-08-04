import { Play, Star } from "lucide-react";
import { useState } from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";

export default function Hero() {
  const [playDemoSelect, setPlayDemoSelect] = useState(false);

  function playDemo() {
    setPlayDemoSelect((playDemoSelect) => !playDemoSelect);
  }

  return (
    <div className="flex flex-col items-center justify-center px-4 mt-18 md:mt-30 ">
      <div className="text-center">
        <motion.h1
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="text-4xl md:text-6xl font-bold text-gray-900 mb-8"
        >
          Stop Losing Money to{" "}
          <span className="text-blue-600">Salon Chaos</span>
        </motion.h1>

        <motion.p
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-700 mb-4 max-w-4xl mx-auto"
        >
          The only salon management platform that actually increases your
          revenue while cutting your workload in half. Trusted by{" "}
          <span className="font-semibold text-blue-600">3,000+ salons</span>{" "}
          across India.
        </motion.p>

        <motion.p
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto"
        >
          From missed appointments to manual billing nightmares – we've solved
          every problem that's costing you customers and sleep.
        </motion.p>

        <div className="flex flex-col items-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <motion.button
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg cursor-pointer"
            >
              Get My Salon Organized - ₹7,000/year
            </motion.button>
            <motion.button
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              onClick={playDemo}
              className="flex items-center text-blue-600 border-2 border-blue-600 px-6 py-4 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer"
            >
              <Play className="h-5 w-5 mr-2" />
              Watch 2-Min Demo
            </motion.button>
          </div>
          {playDemoSelect && (
            <video width="320" height="240" controls>
              <source src={assets.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="bg-white rounded-lg p-6 max-w-2xl mx-auto shadow shadow-black/10 mt-6"
        >
          <div className="flex items-center justify-center mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-gray-700 font-medium">
            "Lokaci Pro pays for itself in the first month" - 97% of our
            customers
          </p>
        </motion.div>
      </div>
    </div>
  );
}
