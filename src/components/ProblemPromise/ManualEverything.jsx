import { FileText, AlarmClock, BarChart4, HandPlatter } from "lucide-react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

export default function ManualWorkChaos() {
  return (
    <div className="bg-white text-gray-900 min-h-screen py-12 px-6">
      <main className="max-w-5xl mx-auto space-y-10">
        {/* Title Section */}
        <section className="flex flex-col md:flex-row items-center gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-2">
              <FileText className="w-15 h-15 text-black" />
              Manual Work Is Costing You More Than You Think
            </h2>
            <p className="text-red-600 font-medium text-lg mb-4">
              You’re spending 3+ hours daily on paperwork.
            </p>
            <p className="mb-4">
              Every day, you’re manually writing down bookings, calculating
              payments, updating spreadsheets, and chasing confirmations. It may
              feel productive but it’s not. It’s busywork that steals your most
              valuable asset: time.
            </p>
            <p className="mb-4">
              While you’re stuck doing paperwork, your customers are waiting,
              your staff is idle, and your competitors are innovating.
            </p>
          </div>
          <div>
            <img
              src={assets.manualEverything}
              alt=""
              className="w-400 rounded-2xl"
            />
          </div>
        </section>

        {/* Why It’s a Problem */}
        <section>
          <h3 className="text-2xl font-semibold mb-4">
            What Makes This So Dangerous?
          </h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <AlarmClock className="w-10 h-10 text-blue-600 mt-1" />
              <div>
                <h4 className="font-semibold">
                  It Steals Time You Can’t Afford
                </h4>
                <p>
                  3 hours a day = 90 hours a month. That's time you could be
                  serving more customers, growing your brand, or simply taking a
                  break.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <HandPlatter className="w-10 h-10 text-blue-600 mt-1" />
              <div>
                <h4 className="font-semibold">
                  It Limits How Much You Can Grow
                </h4>
                <p>
                  Manual work doesn’t scale. The more customers you get, the
                  more time you spend juggling paperwork. Growth starts to feel
                  like a burden instead of progress.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <BarChart4 className="w-10 h-10 text-blue-600 mt-1" />
              <div>
                <h4 className="font-semibold">No Real-Time Business Insight</h4>
                <p>
                  With bookings, payments, and schedules scattered across
                  notebooks and spreadsheets, you have no clear picture of how
                  your business is performing today or where it’s headed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cost of Manual Work */}
        <section>
          <h3 className="text-2xl font-semibold mb-4">
            It’s Not Just Time It’s Money
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>₹50,000+/month lost</strong> due to inefficient systems
            </li>
            <li>
              <strong>Missed follow-ups</strong> because nothing is automated
            </li>
            <li>
              <strong>Staff idle time</strong> while waiting for instructions
            </li>
            <li>
              <strong>Burnout</strong> from handling repetitive, low-value tasks
            </li>
          </ul>
        </section>

        {/* Solution Section */}
        <section className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">
            Imagine a Smarter Workflow
          </h3>
          <p className="mb-3">
            Here’s what happens when you replace manual chaos with automation:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Auto-confirm bookings via WhatsApp or SMS</li>
            <li>Daily reports emailed to you without lifting a finger</li>
            <li>Staff get real-time schedules, no hand-holding needed</li>
            <li>
              Payments, commissions, and reminders all tracked in one place
            </li>
          </ul>
          <p className="font-medium">
            Less work, more results. That’s what a smart system brings you.
          </p>
        </section>

        {/* CTA */}
        <section className="text-center pt-8">
          <p className="text-lg font-medium mb-4">
            Want to free up 90 hours this month?
          </p>
          <Link
            to="/get-started"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Automate Your Workflow →
          </Link>
        </section>
      </main>
    </div>
  );
}
