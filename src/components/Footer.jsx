import { Mail, Phone, MessageSquare, MapPin, Instagram, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Lokaci Pro</h3>
            <p className="text-gray-300 mb-4">
              India's most powerful salon management platform trusted by 3,000+ salons.
            </p>
            <div className="flex items-center text-green-400 mb-2">
              <span className="mr-2 text-orange-600">🇮🇳</span>
              <span>Proudly Made in India with ❤️ for Indian Salons</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-blue-400" />
                <span>hello@lokaci.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-blue-400" />
                <span>+91-9876543210</span>
              </div>
              <div className="flex items-center">
                <MessageSquare className="h-5 w-5 mr-3 text-blue-400" />
                <span>+91-9876543210</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-blue-400" />
                <span>Ahmedabad, Gujarat, India</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  About Lokaci
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Support Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Book Demo
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Success Story</h4>
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-sm text-gray-300 mb-2">
                "Increased revenue by 52% and reduced admin time by 70% in just 2 months with Lokaci Pro. Now I can
                focus on what I love - making customers beautiful."
              </p>
              <p className="text-blue-400 font-semibold">- Neha Gupta, Green Leaf Salon, Pune</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">© 2025 Lokaci Pro. All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-6">
              <span className="text-gray-400">Follow Us:</span>
              <a href="http://instagram.com/lokaciofficial/?hl=en" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <MessageSquare className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/LokaciOfficial/" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-red-600 to-red-800 rounded-xl p-4 text-center">
          <p className="text-lg font-semibold mb-1">⚡ Limited Time: Save ₹2,000 on your first year</p>
          <p className="mb-2">Only 47 spots remaining at launch pricing</p>
          <button className="bg-white text-red-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors cursor-pointer">
            Claim Your Discount Now
          </button>
        </div>
      </div>
    </footer>
  )
}