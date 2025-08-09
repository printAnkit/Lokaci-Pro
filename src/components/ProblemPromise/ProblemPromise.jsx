import { motion } from "motion/react";
import { problems } from "./ProblemPromise";
import { Link } from "react-router-dom";
import { SquareArrowOutUpRight } from "lucide-react";

export default function ProblemPromise() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            Every Day You Don't Have Lokaci Pro,{" "}
            <span className="text-red-600 text-shadow-red-500 text-shadow-xs ">
              You're Bleeding Money
            </span>
          </motion.h2>
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-700 mb-8"
          >
            Your salon could be making 40% more revenue. Here's what's secretly
            killing your profits:
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 mb-16">
          {problems.map((problem, index) => (
            <Link 
              onClick={ () => window.scrollTo({top:0, behavior:'smooth'})}
              to={problem.link}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              key={index}
              className=" p-8 rounded-lg shadow-lg transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 hover:shadow-2xl border-black w-90 cursor-pointer "
            >
              <div className="flex items-center mb-2">
                <problem.icon className="h-5 w-5 text-red-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">
                  {problem.title}
                </h3>
              </div>
              <p className="text-gray-700 text-sm">{problem.description}</p>
              <button className=" text-xs font-semibold flex w-full justify-end cursor-pointer mt-8 hover:translate-x-1 text-red-600 ">Learn more. <SquareArrowOutUpRight className=" h-4"/> </button>
            </motion.div>
            </Link>
            
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-blue-700 rounded-2xl p-6 text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-2">The Promise</h3>
          <p className="text-lg mb-2">
            Lokaci Pro eliminates every single one of these problems in 24
            hours.
          </p>
          <p className="text-xl font-semibold">
            Transform your salon from chaotic to profitable with India's most powerful salon management platform.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}