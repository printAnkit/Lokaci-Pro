import {
  MessageCircleWarning,
  AlarmClock,
  Users,
  FolderSearch,
} from "lucide-react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

export default function WhatsAppBookingChaos() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-10">
        {/* Title */}
        <section className="flex flex-col md:flex-row items-center gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-2">
              <MessageCircleWarning className="w-10 h-10 text-black" />
              WhatsApp Booking Chaos
            </h2>

            <p className="text-lg text-red-600 font-medium mb-4">
              Missed messages = missed money.
            </p>
            <p className="mb-4">
              WhatsApp is the first place many customers reach out when they
              want to book, ask questions, or get help. But when your inbox is
              cluttered, or you rely on a single phone, messages are easy to
              miss.
            </p>
            <p className="mb-4">
              A customer might message you at 8:30 AM asking for an appointment
              at noon. If you see that message hours later, it’s already too
              late. That customer has moved on to someone who replied faster.
            </p>
            <p className="mb-4">
              Worse, you have no way to track who messaged, who was replied to,
              or who was forgotten. It becomes impossible to stay organized as
              you grow. Without a system, WhatsApp becomes a black hole where
              money disappears.
            </p>
          </div>
          <div>
            <img src={assets.whatsappChaos} alt="" className="w-400 rounded-2xl" />
          </div>
        </section>
        

        {/* Section: Key Problems */}
        <section>
          <h3 className="text-2xl font-semibold mb-4">Why This Happens</h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <AlarmClock className="w-10 h-10 text-blue-600 mt-1" />
              <div>
                <h4 className="font-semibold">Delayed Responses Cost Sales</h4>
                <p>
                  In service businesses, speed is everything. If you don’t reply
                  within minutes, customers lose interest or find alternatives.
                  Delays aren't just inconvenient they directly impact your
                  revenue.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Users className="w-10 h-10 text-blue-600 mt-1" />
              <div>
                <h4 className="font-semibold">Single Inbox = Chaos</h4>
                <p>
                  Many businesses run WhatsApp from one number, one device, and
                  one person. That means when that person is unavailable on a
                  call, away, or off duty messages pile up and get missed.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FolderSearch className="w-10 h-10 text-blue-600 mt-1" />
              <div>
                <h4 className="font-semibold">
                  No Message Tracking or History
                </h4>
                <p>
                  Without message labels, team assignments, or follow-up
                  reminders, customer messages disappear into the feed. There’s
                  no way to know which chats are pending or who’s waiting on a
                  response.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Impact */}
        <section>
          <h3 className="text-2xl font-semibold mb-4">The Real Cost</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Lost Bookings:</strong> A single missed message can cost
              you a customer for good.
            </li>
            <li>
              <strong>Frustrated Customers:</strong> Waiting too long for a
              reply makes you look unprofessional.
            </li>
            <li>
              <strong>Burnt-out Staff:</strong> One person managing all chats
              quickly gets overwhelmed.
            </li>
            <li>
              <strong>No Accountability:</strong> You don’t know who’s doing
              what or who dropped the ball.
            </li>
          </ul>
        </section>

        {/* Section: Solution Preview */}
        <section className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">How to Fix It</h3>
          <p className="mb-3">
            This chaos is avoidable. Businesses that grow use systems to:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Assign chats to team members</li>
            <li>Automatically send confirmations and follow-ups</li>
            <li>Label and prioritize incoming messages</li>
            <li>Track customer history and booking patterns</li>
            <li>Respond faster with templates or chatbots</li>
          </ul>
          <p className="font-medium">
            By turning WhatsApp into a structured tool instead of a free-for-all
            inbox, you stay responsive, win more bookings, and scale with peace
            of mind.
          </p>
        </section>

        {/* CTA */}
        <section className="text-center pt-8">
          <p className="text-lg font-medium mb-4">
            Want to automate WhatsApp and never miss a booking again?
          </p>
          <Link
            to="/get-started"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            Automate WhatsApp Now →
          </Link>
        </section>
      </main>
    </div>
  );
}
