import { steps } from "./HowItWorks";

export default function HowItWorks() {

  return (
    <section className="py-10 bg-gradient-to-bl from-blue-950 to-blue-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            From Chaos to Cash Flow in{" "}
            <span className="text-white">3 Simple Steps</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg relative transition duration-300 ease-in-out hover:-translate-y-3 hover:scale-100 hover:shadow-2xl"
            >
              <div className="absolute -top-4 left-8 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                {index + 1}
              </div>

              <div className="bg-blue-100 p-2 rounded-lg w-fit mb-4">
                <step.icon className="h-5 w-5 text-blue-600" />
              </div>

              <h3 className="text-xl font-bold text-gray-900">
                {step.title}
              </h3>
              <h4 className="text-lg font-semibold text-blue-600 mb-2">
                {step.subtitle}
              </h4>

              <ul className="space-y-1 text-sm">
                {step.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}