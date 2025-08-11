import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Users,
  Calendar,
  CreditCard,
  Check,
  Star,
} from "lucide-react";

const pricingPlans = [
  {
    id: "starter",
    name: "STARTER PLAN",
    price: "₹7,000",
    period: "/year",
    description: "Perfect for small salons getting started",
    features: [
      "Unlimited appointments & walk-ins",
      "GST-ready billing & invoicing",
      "Basic customer database",
      "WhatsApp booking confirmations",
      "Daily/weekly reports",
      "Phone & chat support",
    ],
    popular: false,
  },
  {
    id: "professional",
    name: "GROWTH PLAN",
    price: "₹14,000",
    period: "/year",
    description: "For salons ready to scale (3-10 staff)",
    features: [
      "Everything in Starter, plus:",
      "Advanced loyalty & membership system",
      "Inventory management with alerts",
      "500 automated WhatsApp messages/month",
      "Staff performance analytics",
      "Customer retention campaigns",
      "Package & combo deals",
    ],
    popular: true,
  },
  {
    id: "enterprise",
    name: "ELITE PLAN",
    price: "₹25,000",
    period: "/year",
    description: "For franchises & multi-location salons",
    features: [
      "Everything in Growth, plus:",
      "Unlimited locations management",
      "2,000 WhatsApp messages/month",
      "Advanced analytics & profit reports",
      "Priority support (2-hour response)",
      "Custom integrations",
      "Dedicated account manager",
    ],
    popular: false,
  },
];

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    businessName: "",
    businessType: "",
    location: "",
    staffCount: "",
    currentSolution: "",
    pricingPlan: "professional",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (formData.phone.trim().length != 10) newErrors.phone = "Phone number is required";
    if (!formData.businessName.trim())
      newErrors.businessName = "Business name is required";
    if (!formData.location.trim()) newErrors.location = "Location is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  if (validateForm()) {
    console.log("Form submitted:", formData);
    alert("Thank you for your enquiry! We'll get back to you within 24 hours.");

    // Reset form after submission
    setFormData(initialFormData);
    setErrors({});
  }
};


  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-blue-600 p-3 rounded-full">
              <Calendar className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Transform Your Salon Business
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of salon owners who've streamlined their operations
            with our comprehensive CRM solution
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-12">
            {/* Personal Information Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center mb-6">
                <Users className="h-6 w-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900">
                  Personal Information
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                      errors.firstName ? "border-red-300" : "border-gray-200"
                    }`}
                    placeholder="Enter your first name"
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                      errors.lastName ? "border-red-300" : "border-gray-200"
                    }`}
                    placeholder="Enter your last name"
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.lastName}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                        errors.email ? "border-red-300" : "border-gray-200"
                      }`}
                      placeholder="your.email@example.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      min={10}
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                        errors.phone ? "border-red-300" : "border-gray-200"
                      }`}
                      placeholder="+91 9876543210"
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Business Information Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center mb-6">
                <MapPin className="h-6 w-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900">
                  Business Information
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label
                    htmlFor="businessName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Business Name *
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                      errors.businessName ? "border-red-300" : "border-gray-200"
                    }`}
                    placeholder="Your Salon Name"
                  />
                  {errors.businessName && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.businessName}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="businessType"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Business Type
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select business type</option>
                    <option value="hair-salon">Hair Salon</option>
                    <option value="beauty-salon">Beauty Salon</option>
                    <option value="nail-salon">Nail Salon</option>
                    <option value="spa">Spa & Wellness</option>
                    <option value="barbershop">Barbershop</option>
                    <option value="medical-spa">Medical Spa</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="location"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Location *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                      errors.location ? "border-red-300" : "border-gray-200"
                    }`}
                    placeholder="City, State/Country"
                  />
                  {errors.location && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.location}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="staffCount"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Number of Staff Members
                  </label>
                  <select
                    id="staffCount"
                    name="staffCount"
                    value={formData.staffCount}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select staff count</option>
                    <option value="1-3">1-3 staff members</option>
                    <option value="4-10">4-10 staff members</option>
                    <option value="11-25">11-25 staff members</option>
                    <option value="25+">25+ staff members</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="currentSolution"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Current Booking Solution
                  </label>
                  <select
                    id="currentSolution"
                    name="currentSolution"
                    value={formData.currentSolution}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select current solution</option>
                    <option value="none">No current system</option>
                    <option value="paper">Paper booking</option>
                    <option value="basic-software">
                      Basic booking software
                    </option>
                    <option value="competitor">Another CRM system</option>
                    <option value="spreadsheet">Spreadsheets</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Pricing Plans Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center mb-8">
                <CreditCard className="h-6 w-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900">
                  Choose Your Plan
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {pricingPlans.map((plan) => (
                  <div
                    key={plan.id}
                    className={`relative border-2 rounded-xl p-6 cursor-pointer transition-all duration-200 hover:shadow-lg ${
                      formData.pricingPlan === plan.id
                        ? "border-blue-500 bg-purple-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() =>
                      setFormData((prev) => ({ ...prev, pricingPlan: plan.id }))
                    }
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-blue-600 text-white px-4 py-1 text-sm font-medium rounded-full flex items-center">
                          <Star className="h-4 w-4 mr-1" />
                          Most Popular
                        </span>
                      </div>
                    )}

                    <div className="flex items-center mb-4">
                      <input
                        type="radio"
                        id={plan.id}
                        name="pricingPlan"
                        value={plan.id}
                        checked={formData.pricingPlan === plan.id}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <label
                        htmlFor={plan.id}
                        className="ml-3 text-lg font-semibold text-gray-900 cursor-pointer"
                      >
                        {plan.name}
                      </label>
                    </div>

                    <div className="mb-4">
                      <span className="text-3xl font-bold text-gray-900">
                        {plan.price}
                      </span>
                      <span className="text-gray-500">{plan.period}</span>
                    </div>

                    <p className="text-gray-600 mb-6">{plan.description}</p>

                    <ul className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-sm text-gray-600">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Information */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Additional Information
              </h2>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Tell us about your specific needs (optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
                  placeholder="Share any specific requirements, questions, or challenges you'd like us to address..."
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-12 rounded-xl text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer "
              >
                Get Your Free Demo & Quote
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}