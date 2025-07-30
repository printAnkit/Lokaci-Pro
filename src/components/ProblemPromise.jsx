import {MessageSquare, FileText, Users, DollarSign, BarChart3 } from "lucide-react"

export default function ProblemPromise() {
  const problems = [
    {
      icon: MessageSquare,
      title: "WhatsApp Booking Chaos",
      description:
        "Missed messages = missed money. That customer who couldn't reach you? They went to your competitor.",
    },
    {
      icon: FileText,
      title: "Manual Everything",
      description:
        "You're spending 3+ hours daily on paperwork instead of serving customers. That's ₹50,000+ in lost revenue monthly.",
    },
    {
      icon: Users,
      title: "Ghost Customers",
      description:
        "60% of your customers visit once and never return. You have no system to bring them back.",
    },
    {
      icon: DollarSign,
      title: "Staff Commission Confusion",
      description:
        "Arguments over payments kill team morale. Unhappy staff = unhappy customers = lost revenue.",
    },
    {
      icon: BarChart3,
      title: "Flying Blind",
      description:
        "Which services make money? Which don't? You're guessing instead of knowing.",
    },
  ];

  return (
    <section className="py-20 bg-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Every Day You Don't Have Lokaci Pro,{" "}
            <span className="text-red-600 text-shadow-red-500 text-shadow-xs ">You're Bleeding Money</span>
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Your salon could be making 40% more revenue. Here's what's secretly
            killing your profits:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 hover:shadow-2xl ">
              <div className="flex items-center mb-2">
                <problem.icon className="h-5 w-5 text-red-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">
                  {problem.title}
                </h3>
              </div>
              <p className="text-gray-700 text-sm">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl p-6 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-2">The Promise</h3>
          <p className="text-lg mb-2">
            Lokaci Pro eliminates every single one of these problems in 24
            hours.
          </p>
          <p className="text-xl font-semibold">
            Transform your salon from chaotic to profitable with India's most powerful salon management platform.
          </p>
        </div>
      </div>
    </section>
  );
}