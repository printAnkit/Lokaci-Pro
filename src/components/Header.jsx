import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDownIcon } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleHashScroll = () => {
      if (location.hash) {
        const element = document.getElementById(location.hash.replace("#", ""));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
    setTimeout(handleHashScroll, 0);
  }, [location.pathname, location.hash]);

  function handleNavClick() {
    setIsMenuOpen(false);
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-3xl font-bold text-blue-600 cursor-pointer"
              onClick={() => {
                handleNavClick();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Lokaci Pro
            </Link>
          </div>

          <div className="hidden md:flex space-x-8 font-semibold">
            <Link
              to="/features"
              className=" text-gray-700 hover:text-blue-600 "
              onClick={()=>{
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Features
            </Link>

            <div className="relative inline-block text-left">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex justify-center items-center cursor-pointer text-gray-700 hover:text-blue-600"
              >
                Add. Features
                <ChevronDownIcon
                  className={`w-4 h-4 transform transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="absolute z-10 mt-2 w-50 rounded-md bg-white shadow-lg ring-1 ring-gray-500 ring-opacity-5">
                  <div className="py-1 flex flex-col m-2 ">
                    <Link
                      to="/sample1"
                      className="m-2"
                      onClick={() => {
                        setIsOpen(!isOpen);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      Sample Feature1
                    </Link>
                    <Link
                      to="/sample2"
                      className="m-2"
                      onClick={() => {
                        setIsOpen(!isOpen);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      Sample Feature2
                    </Link>
                    <Link
                      to="/pricing1"
                      className="m-2"
                      onClick={() => {
                        setIsOpen(!isOpen);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      Sample Feature3
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/pricing"
              className="text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => {
                handleNavClick();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Pricing
            </Link>
            <Link
              to="/#reviews"
              className="text-gray-700 hover:text-blue-600 transition-colors"
              onClick={handleNavClick}
            >
              Reviews
            </Link>
            <Link
              to="/#faq"
              className="text-gray-700 hover:text-blue-600 transition-colors"
              onClick={handleNavClick}
            >
              FAQ
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-sm text-gray-600">
              <Phone className="h-4 w-4 mr-1" />
              +91-9876543210
            </div>
            <Link
              to="auth"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
            >
              Free Demo
            </Link>
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
              <NavLink
                to="/features"
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={()=>{
                  handleNavClick()
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              >
                Features
              </NavLink>

              <Link
                to="/pricing"
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => {
                  handleNavClick();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Pricing
              </Link>
              <Link
                to="/#reviews"
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={handleNavClick}
              >
                Reviews
              </Link>
              <Link
                to="/#faq"
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={handleNavClick}
              >
                FAQ
              </Link>
              <Link
                to="auth"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg w-full hover:bg-blue-700 transition-colors"
                onClick={() => {
                  handleNavClick();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Free Demo
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
