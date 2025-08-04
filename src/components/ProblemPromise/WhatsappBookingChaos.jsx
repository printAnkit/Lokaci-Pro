const sections = [
  {
    title: 'WhatsApp Booking Chaos',
    subtitle: 'Missed messages = missed money.',
    description: `
      WhatsApp is the first place many customers reach out when they want to book, ask questions, or get help. But when your inbox is cluttered, or you rely on a single phone, messages are easy to miss.
      
      A customer might message you at 8:30 AM asking for an appointment at noon. If you see that message hours later, it’s already too late. That customer has moved on to someone who replied faster.
      
      Worse, you have no way to track who messaged, who was replied to, or who was forgotten. It becomes impossible to stay organized as you grow. Without a system, WhatsApp becomes a black hole where money disappears.
    `,
  },
  {
    title: 'Manual Everything',
    subtitle: 'You’re spending 3+ hours daily on paperwork.',
    description: `
      Every day, you manually note down bookings, calculate payments, chase customers for confirmations, and update spreadsheets. It feels productive—but it's not. It’s busywork that steals your most valuable asset: time.
      
      While you're stuck doing paperwork, your customers are waiting, your staff is idle, and your competitors are innovating. The hours you lose each day could be used to upsell, market your services, or simply serve more people.
      
      This inefficiency isn’t just frustrating—it’s expensive. Losing 3 hours a day adds up to ₹50,000+ per month in missed revenue. And the worst part? It’s completely avoidable with the right systems.
    `,
  },
  {
    title: 'Ghost Customers',
    subtitle: '60% of your customers visit once and never return.',
    description: `
      Think about all the first-time customers you served last month. How many came back? For most small businesses, over half never return. Not because they were unhappy—but because you didn’t stay in touch.
      
      You have no automated follow-up. No loyalty program. No way to remind them that it’s time to book again. So they move on, forget your name, or go to someone else who advertised at the right time.
      
      Retaining a customer is 5x cheaper than acquiring a new one. If you’re only focused on getting new customers without re-engaging old ones, you’re constantly running uphill—and burning cash along the way.
    `,
  },
  {
    title: 'Staff Commission Confusion',
    subtitle: 'Arguments over payments kill morale.',
    description: `
      Your staff work hard and expect fair pay. But when commission tracking is done manually—or worse, not at all—it creates confusion and tension. Did they get paid correctly? Were bonuses calculated fairly? Who handled which client?
      
      Without transparency, misunderstandings grow. Staff lose trust. Some feel underpaid, others feel unappreciated, and soon you’re facing resentment, poor service, or even staff leaving altogether.
      
      Your team is your front line. If they’re unhappy, your customers will feel it—and they won’t come back. A reliable, visible system for tracking performance and payouts is essential to keep your people motivated and your business healthy.
    `,
  },
  {
    title: 'Flying Blind',
    subtitle: 'You’re guessing instead of knowing.',
    description: `
      You’re running your business on gut feeling. Which services are profitable? Which promotions worked? How many new vs. returning customers last month? If you’re not tracking this data, you’re making decisions in the dark.
      
      You might think your most popular service is the most profitable—but without actual numbers, that could be completely wrong. You may be undercharging, overstaffing, or spending money where it doesn’t matter.
      
      Successful businesses run on data. When you measure what matters, you can focus, grow faster, and waste less. Without it, you're flying blind—and guessing is a risky way to run a business.
    `,
  },
];
export default function WhatsappBookingChaos() {
  return (
    <div className="min-h-screen bg-white text-black font-sans leading-relaxed">
      <div className="max-w-5xl mx-auto px-6 py-15">
        <h1 className="text-4xl font-bold text-center mb-12 uppercase tracking-wide">
          What’s Holding Your Business Back?
        </h1>

        {sections.map((section, index) => (
          <div key={index} className="mb-16 border-b border-black pb-12">
            <h2 className="text-2xl sm:text-4xl font-semibold mb-4 uppercase">
              {section.title}
            </h2>
            <h3 className="text-lg sm:text-xl italic mb-4 text-gray-700">
              {section.subtitle}
            </h3>
            <p className="whitespace-pre-line text-base text-gray-900">
              {section.description.trim()}
            </p>
          </div>
        ))}

        <div className="text-center mt-20">
          <h2 className="text-xl font-semibold mb-2">
            The good news? All of these can be fixed.
          </h2>
          <p className="text-gray-800 max-w-xl mx-auto">
            With the right system, you can automate your operations, keep your team happy, delight your customers, and grow with confidence. Ready to get started?
          </p>
        </div>
      </div>
    </div>
  );
}
