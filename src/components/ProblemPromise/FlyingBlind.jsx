import { BarChart3, EyeOff, HelpCircle, TrendingDown } from "lucide-react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

export default function FlyingBlind() {
  return (
    <div className="bg-white text-gray-900 min-h-screen py-12 px-6">
      <main className="max-w-5xl mx-auto space-y-10">
        <section className="flex flex-col md:flex-row items-center gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-2">
              <EyeOff className="w-10 h-10 text-black" />
              Flying Blind
            </h2>
            <p className="text-red-600 font-medium text-lg mb-4">
              You’re guessing instead of knowing.
            </p>
            <p className="mb-4">
              You’re running your business on gut feeling. Which services are
              profitable? Which promotions worked? How many returning customers
              last month?
            </p>
            <p className="mb-4">
              Without data, you’re making decisions in the dark. And that’s
              risky.
            </p>
          </div>
          <div>
            <img
              src={assets.flyingBlind}
              alt=""
              className="w-300 rounded-2xl"
            />
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-4">Why It’s Dangerous</h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <HelpCircle className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h4 className="font-semibold">Assumptions ≠ Accuracy</h4>
                <p>
                  You might think your most popular service is your most
                  profitable. Without numbers, you could be wrong and losing
                  money.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <TrendingDown className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h4 className="font-semibold">Wasted Budget</h4>
                <p>
                  You may be running ads, promotions, or discounts that don’t
                  work but you can’t tell without tracking.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <BarChart3 className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h4 className="font-semibold">No Growth Strategy</h4>
                <p>
                  If you don’t know what’s working, you can’t double down. If
                  you don’t know what’s failing, you can’t fix it.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">How to Fix It</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Automatically track sales, bookings, and customer types</li>
            <li>Know what’s working and what’s not</li>
            <li>Make smarter decisions with real-time insights</li>
            <li>Run your business with confidence, not guesswork</li>
          </ul>
        </section>

        <section className="text-center pt-8">
          <p className="text-lg font-medium mb-4">
            Want to stop guessing and start growing?
          </p>
          <Link
            to="/get-started"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Get Your Dashboard →
          </Link>
        </section>
      </main>
    </div>
  );
}
