import { Star, Quote } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      business: "Glamour Studio, Mumbai",
      rating: 5,
      text: "My revenue increased by 45% in just 3 months. The loyalty system brings customers back automatically, and I finally know which services are actually profitable.",
    },
    {
      name: "Rajesh Kumar",
      business: "Hair & Care Franchise (12 locations), Delhi",
      rating: 5,
      text: "Managing 12 salons was a nightmare. Now I can see everything from one dashboard. My managers love it, and I'm saving 20+ hours every week.",
    },
    {
      name: "Meera Patel",
      business: "Scissors & Style, Ahmedabad",
      rating: 5,
      text: "The WhatsApp automation alone saves me 2 hours daily. Customers love getting automatic reminders, and my no-show rate dropped by 60%.",
    },
    {
      name: "Vikram Singh",
      business: "The Salon Hub, Bangalore",
      rating: 5,
      text: "I was skeptical about salon software, but Lokaci Pro actually increased my profits from day one. The GST billing saves me thousands in accountant fees.",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-black
           mb-4">
            Real Salon Owners,{" "}
            <span className="text-blue-600">Real Results</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow-2xl relative"
            >
              <Quote className="h-5 w-5 text-blue-600 mb-4" />

              <div className="flex items-center mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <p className="text-gray-700 mb-1 text-sm leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="border-t pt-1">
                <p className="font-semibold text-gray-900">
                  {testimonial.name}
                </p>
                <p className="text-blue-900">{testimonial.business}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}