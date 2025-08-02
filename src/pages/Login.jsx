import { useState } from "react";
import { Mail, Lock, User, Eye, EyeOff, MapPin, Store } from "lucide-react";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    salonName: "",
    salonAddress: "",
    contact: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    salonName: "",
    salonAddress: "",
    contact: "",
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      password: "",
      salonName: "",
      salonAddress: "",
      contact: "",
    };
    let isValid = true;

    if (!isLogin && !formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!isLogin && !formData.salonName.trim()) {
      newErrors.salonName = "Salon name is required";
      isValid = false;
    }

    if (!isLogin && !formData.salonAddress.trim()) {
      newErrors.salonAddress = "Salon Address is required";
      isValid = false;
    }

    if (!isLogin && (!formData.contact.trim() < 10)) {
      newErrors.contact = "Contact is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (!isLogin && formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", {
        ...formData,
        action: isLogin ? "login" : "signup",
      });
      // Handle authentication logic here
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setErrors({
      name: "",
      email: "",
      password: "",
      salonName: "",
      salonAddress: "",
      contact: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="px-8 pt-4 pb-4 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {isLogin ? "Welcome to Lokaci" : "Create Account"}
            </h1>
            <p className="text-gray-600">
              {isLogin ? "Sign in to your account" : "Join us today"}
            </p>
          </div>

          {/* Form */}
          <div className="px-8 pb-8">
            <form onSubmit={handleSubmit} className="space-y-2">
              {/* Name field (signup only) */}
              <div
                className={`transition-all duration-300 ${
                  isLogin
                    ? "h-0 opacity-0 overflow-hidden"
                    : "h-auto opacity-100"
                }`}
              >
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                      errors.name
                        ? "border-red-300 bg-red-50"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                    placeholder="Enter your full name"
                  />
                </div>
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              {/* Salon Name field (signup only) */}
              <div
                className={`transition-all duration-300 ${
                  isLogin
                    ? "h-0 opacity-0 overflow-hidden"
                    : "h-auto opacity-100"
                }`}
              >
                <label
                  htmlFor="salonName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Salon Full Name
                </label>
                <div className="relative">
                  <Store className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="salonName"
                    value={formData.salonName}
                    onChange={(e) =>
                      handleInputChange("salonName", e.target.value)
                    }
                    className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                      errors.salonName
                        ? "border-red-300 bg-red-50"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                    placeholder="Enter your salon name"
                  />
                </div>
                {errors.salonName && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.salonName}
                  </p>
                )}
              </div>

              {/* Salon Address field (signup only) */}
              <div
                className={`transition-all duration-300 ${
                  isLogin
                    ? "h-0 opacity-0 overflow-hidden"
                    : "h-auto opacity-100"
                }`}
              >
                <label
                  htmlFor="salonAddress"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Salon Address
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="salonAddress"
                    value={formData.salonAddress}
                    onChange={(e) =>
                      handleInputChange("salonAddress", e.target.value)
                    }
                    className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                      errors.salonAddress
                        ? "border-red-300 bg-red-50"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                    placeholder="Enter your salon address"
                  />
                </div>
                {errors.salonAddress && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.salonAddress}
                  </p>
                )}
              </div>

              {/* Mobile number (signup only) */}
              <div
                className={`transition-all duration-300 ${
                  isLogin
                    ? "h-0 opacity-0 overflow-hidden"
                    : "h-auto opacity-100"
                }`}
              >
                <label
                  htmlFor="contact"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Contact Number
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="number"
                    id="contact"
                    value={formData.contact}
                    onChange={(e) =>
                      handleInputChange("contact", e.target.value)
                    }
                    className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                      errors.contact
                        ? "border-red-300 bg-red-50"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                    placeholder="Enter your contact number"
                  />
                </div>
                {errors.contact && (
                  <p className="mt-1 text-sm text-red-600">{errors.contact}</p>
                )}
              </div>

              {/* Email field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                      errors.email
                        ? "border-red-300 bg-red-50"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                    placeholder="Enter your email"
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              {/* Password field */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={formData.password}
                    onChange={(e) =>
                      handleInputChange("password", e.target.value)
                    }
                    className={`w-full pl-10 pr-12 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                      errors.password
                        ? "border-red-300 bg-red-50"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                    placeholder={
                      isLogin
                        ? "Enter your password"
                        : "Create a password (min. 6 characters)"
                    }
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                )}
              </div>

              {/* Forgot password (login only) */}
              {isLogin && (
                <div className="text-right">
                  <button
                    type="button"
                    className="text-sm text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    Forgot password?
                  </button>
                </div>
              )}

              {/* Submit button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-xl font-medium hover:from-blue-600 hover:to-indigo-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                {isLogin ? "Sign In" : "Create Account"}
              </button>
            </form>

            {/* Divider */}
            <div className="my-6 flex items-center">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="px-4 text-sm text-gray-500">or</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            {/* Toggle mode */}
            <div className="text-center">
              <p className="text-gray-600">
                {isLogin
                  ? "Don't have an account?"
                  : "Already have an account?"}
                <button
                  type="button"
                  onClick={toggleMode}
                  className="ml-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  {isLogin ? "Sign up" : "Sign in"}
                </button>
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            By continuing, you agree to our{" "}
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700 transition-colors"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700 transition-colors"
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
