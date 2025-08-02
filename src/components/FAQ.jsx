import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "motion/react";

export default function FAQ({title, subTitle}) {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Do I need to be tech-savvy to use Lokaci Pro?",
      answer:
        "Not at all. We designed Lokaci Pro for busy salon owners, not software engineers. If you can use WhatsApp, you can use our platform. Plus, we provide complete training and setup support.",
    },
    {
      question: "Can I import my existing customer data?",
      answer:
        "Yes, absolutely. Our team will migrate all your customer data, appointment history, and service records for free. You won't lose any information.",
    },
    {
      question: "What if I have multiple locations?",
      answer:
        "Perfect. Our Elite plan is specifically designed for multi-location salons. Manage all your branches from one dashboard with location-specific reports and controls.",
    },
    {
      question: "Is this suitable for freelance stylists?",
      answer:
        "Definitely. Our Starter plan is perfect for solo professionals. Get professional billing, online bookings, and customer management at an affordable price.",
    },
    {
      question: "What happens after my free demo?",
      answer:
        "No pressure. After your demo, you can choose to upgrade to a paid plan or continue exploring. We never force anyone - our product sells itself.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "Yes. 30-day money-back guarantee, no questions asked. But in 3 years, less than 2% of customers have asked for refunds.",
    },
    {
      question: "How quickly can I start using the platform?",
      answer:
        "Same day. Most salons are fully operational within 4-6 hours of signing up. Our onboarding team ensures you're ready to take bookings immediately.",
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "Comprehensive. Phone support, chat support, video tutorials, and personal onboarding. We don't just sell software - we ensure your success.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="faq"
      className="py-20 bg-white"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title} <span className="text-blue-800">Know</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-500 hover:text-black rounded-lg"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-black flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-black flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
