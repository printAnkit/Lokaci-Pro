import { Settings, Smartphone, TrendingUp,Calendar, DollarSign, Zap } from "lucide-react";
import setupLogo from '../assets/setup.png'
import bookingsLogo from '../assets/bookings.png'
import revenueGrowthLogo from '../assets/revenueGrowth.png'
import { motion } from "motion/react";

const Card = ({ className = "", children, ...props }) => (
  <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`} {...props}>
    {children}
  </div>
)

const CardHeader = ({ className = "", children, ...props }) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props}>
    {children}
  </div>
)

const CardTitle = ({ className = "", children, ...props }) => (
  <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className}`} {...props}>
    {children}
  </h3>
)

const CardDescription = ({ className = "", children, ...props }) => (
  <p className={`text-sm text-muted-foreground ${className}`} {...props}>
    {children}
  </p>
)

const CardContent = ({ className = "", children, ...props }) => (
  <div className={`p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
)

export default function HowItWorks() {

  return (
    <div className="min-h-screen  py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Headline */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            From Chaos to Cash Flow in <span className="text-blue-600">3 Simple Steps</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform your salon business with our streamlined management system
          </p>
        </div>

        {/* Steps Path */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute left-1/2 top-32 bottom-32 w-0.5 bg-gradient-to-b from-red-500 via-yellow-400 to-green-500 transform -translate-x-1/2 z-0"></div>

          {/* Step 1 */}
          <div className="relative mb-12 md:mb-20">
            <div className="flex flex-col md:flex-row items-center gap-18">
              <div className="md:w-1/2 md:pr-8">
                <Card className="shadow-lg border-0 bg-gray-100 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        1
                      </div>
                      <div>
                        <CardTitle className="text-xl text-gray-900">Quick Setup</CardTitle>
                        <CardDescription className="text-red-600 font-medium">(30 Minutes)</CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-red-600">
                      <Zap className="w-5 h-5" />
                      <span className="font-semibold">Add Your Services & Staff</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Upload your service menu with pricing</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Add staff profiles and working hours</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Set up your salon's operating schedule</p>
                    </div>
                    <div className="bg-red-50 p-3 rounded-lg mt-4">
                      <p className="text-red-500 italic text-sm">
                        <em>We handle the technical setup - you focus on your business</em>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="md:w-1/2 md:pl-8">
                <div className="flex items-center justify-center mx-auto">
                  <img src={setupLogo} className="w-75 h-52" alt=""/>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative mb-12 md:mb-20">
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="md:w-1/2 md:pl-8">
                <Card className="shadow-lg border-0 bg-gray-100 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        2
                      </div>
                      <div>
                        <CardTitle className="text-xl text-gray-900">Start Accepting Bookings</CardTitle>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-yellow-600">
                      <Smartphone className="w-5 h-5" />
                      <span className="font-semibold">Customers Book Instantly</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Online bookings through your custom link</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Walk-ins managed on your dashboard</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Automatic confirmations and reminders</p>
                    </div>
                    <div className="bg-yellow-50 p-3 rounded-lg mt-4">
                      <p className="text-yellow-600 italic text-sm">
                        <em>Never miss another appointment</em>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="md:w-1/2 md:pr-8">
                <div className="flex items-center justify-center mx-auto">
                  <img src={bookingsLogo} className="w-75 h-52" alt=""/>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2 md:pr-8">
                <Card className="shadow-lg border-0 bg-gray-100 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        3
                      </div>
                      <div>
                        <CardTitle className="text-xl text-gray-900">Watch Your Revenue Grow</CardTitle>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-green-600">
                      <DollarSign className="w-5 h-5" />
                      <span className="font-semibold">Everything Automated</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Bills generated automatically with GST</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Customer follow-ups sent on autopilot</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Staff commissions calculated instantly</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg mt-4">
                      <p className="text-green-800 italic text-sm">
                        <em>Spend time growing your business, not managing paperwork</em>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="md:w-1/2 md:pl-8">
                <div className="flex items-center justify-center mx-auto">
                  <img src={revenueGrowthLogo} className="w-75 h-52" alt=""/>
                </div>
              </div>
            </div>
          </div>

          {/* Step Number Indicators on the line (Desktop only) */}
          <div className="hidden md:block">
            <div className="absolute left-1/2 top-32 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold transform -translate-x-1/2 z-10">
              1
            </div>
            <div className="absolute left-1/2 top-1/2 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold transform -translate-x-1/2 -translate-y-1/2 z-10">
              2
            </div>
            <div className="absolute left-1/2 bottom-32 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold transform -translate-x-1/2 z-10">
              3
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Salon Business?</h2>
            <p className="text-gray-600 mb-6">
              Join thousands of salon owners who have streamlined their operations and increased their revenue.
            </p>
            <button className="bg-green-600 hover:bg-green-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg cursor-pointer">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
