import { DollarSign, Users2, AlertTriangle, Scale } from "lucide-react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

export default function StaffCommissionConfusion() {
  return (
    <div className="bg-white text-gray-900 min-h-screen py-12 px-6">
      <main className="max-w-5xl mx-auto space-y-10">
        <section className="flex flex-col md:flex-row items-center gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-2">
              <DollarSign className="w-10 h-10 md:w-15 md:h-15 text-black" />
              Staff Commission Confusion
            </h2>
            <p className="text-red-600 font-medium text-lg mb-4">
              Arguments over payments kill morale.
            </p>
            <p className="mb-4">
              Your staff work hard and expect fair pay. But when commissions are
              tracked manually or worse, not at all tension builds fast.
            </p>
            <p className="mb-4">
              Did they get paid correctly? Who handled which client? Were
              bonuses calculated fairly? Without clarity, you lose trust.
            </p>
          </div>
          <div>
            <img
              src={assets.staffCommission}
              alt=""
              className="w-400 rounded-2xl"
            />
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-4">What’s Going Wrong</h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h4 className="font-semibold">Lack of Transparency</h4>
                <p>
                  Staff don’t see how their commission is calculated, leading to
                  disputes and distrust.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Users2 className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h4 className="font-semibold">No Team Accountability</h4>
                <p>
                  It’s unclear who handled which appointment, making it hard to
                  assign earnings fairly.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Scale className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h4 className="font-semibold">Disputes = Low Morale</h4>
                <p>
                  When people feel underpaid or unrecognized, they disengage,
                  underperform, or leave altogether.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-4">The Cost of Confusion</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Lost trust = lost team loyalty</li>
            <li>Staff turnover increases hiring costs</li>
            <li>Morale issues reduce service quality</li>
            <li>Disorganization reflects badly on your brand</li>
          </ul>
        </section>

        <section className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">The Fix Is Simple</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Automatically track who handled each client</li>
            <li>Set commission rates by role or service</li>
            <li>Give staff transparent payout reports</li>
            <li>Build trust with clarity and fairness</li>
          </ul>
        </section>

        <section className="text-center pt-8">
          <p className="text-lg font-medium mb-4">
            Want to eliminate payout confusion forever?
          </p>
          <Link
            to="/get-started"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Automate Staff Payments →
          </Link>
        </section>
      </main>
    </div>
  );
}
