import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="#" className="text-3xl font-bold text-blue-600 cursor-pointer">Lokaci Pro</a>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#features"
              className="text-gray-800 hover:text-blue-600 transition-colors hover:text-lg"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-gray-800 hover:text-blue-600 transition-colors hover:text-lg"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="text-gray-800 hover:text-blue-600 transition-colors hover:text-lg"
            >
              Reviews
            </a>
            <a
              href="#faq"
              className="text-gray-800 hover:text-blue-600 transition-colors hover:text-lg"
            >
              FAQ
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-sm text-gray-600">
              <Phone className="h-4 w-4 mr-1" />
              +91-9876543210
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer ">
              Free Demo
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a
                href="#features"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Reviews
              </a>
              <a
                href="#faq"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                FAQ
              </a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg w-full hover:bg-blue-700 transition-colors">
                Free Demo
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
