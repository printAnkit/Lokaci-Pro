import { UserX2, RotateCcw, BellRing, Megaphone } from "lucide-react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

export default function GhostCustomers() {
  return (
    <div className="bg-white text-gray-900 min-h-screen py-12 px-6">
      <main className="max-w-5xl mx-auto space-y-10">
        <section className="flex flex-col md:flex-row items-center gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-2">
              <UserX2 className="w-10 h-10 text-black" />
              Ghost Customers
            </h2>
            <p className="text-red-600 font-medium text-lg mb-4">
              60% of your customers visit once and never return.
            </p>
            <p className="mb-4">
              Think about all the first-time customers you served last month.
              How many came back? For most small businesses, over half never
              return. Not because they were unhappy but because you didn’t stay
              in touch.
            </p>
            <p className="mb-4">
              You have no automated follow-up. No loyalty program. No way to
              remind them that it’s time to book again.
            </p>
          </div>
          <div>
            <img
              src={assets.ghostCustomer}
              alt=""
              className="w-400 rounded-2xl"
            />
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-4">Why It Happens</h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <RotateCcw className="w-10 h-10 md:h-6 md:w-6 text-blue-600 mt-1" />
              <div>
                <h4 className="font-semibold">No Follow-Up Loop</h4>
                <p>
                  Once a customer leaves, there’s no system to bring them back.
                  Life gets busy, they forget your name, or they move on to a
                  competitor who follows up.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <BellRing className="w-10 h-10 md:h-6 md:w-6 text-blue-600 mt-1" />
              <div>
                <h4 className="font-semibold">No Reminders or Re-engagement</h4>
                <p>
                  Without SMS or WhatsApp reminders, your services fall off
                  their radar. You rely on them remembering, which they rarely
                  do.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Megaphone className="w-10 h-10 md:h-6 md:w-6 text-blue-600 mt-1" />
              <div>
                <h4 className="font-semibold">No Loyalty Program</h4>
                <p>
                  You’re focused on attracting new customers, but neglect to
                  reward repeat ones. That’s a lost opportunity to build
                  loyalty.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-4">Why This Matters</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Acquiring a new customer is <strong>5x more expensive</strong>{" "}
              than keeping an existing one.
            </li>
            <li>
              Your happiest customers are most likely to return if you follow
              up.
            </li>
            <li>
              Even one extra visit per month per customer could 2× your revenue.
            </li>
          </ul>
        </section>

        <section className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">How to Fix It</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Send automatic follow-up messages post-visit</li>
            <li>Remind them when it’s time to rebook</li>
            <li>Reward repeat customers with discounts</li>
            <li>Track who hasn’t returned and reach out</li>
          </ul>
        </section>

        <section className="text-center pt-8">
          <p className="text-lg font-medium mb-4">
            Ready to turn one-time visitors into regulars?
          </p>
          <Link
            to="/get-started"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Start Retaining Customers →
          </Link>
        </section>
      </main>
    </div>
  );
}
