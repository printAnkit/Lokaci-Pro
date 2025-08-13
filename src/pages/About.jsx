import React from 'react';
import {
  Users,
  Target,
  Lightbulb,
  Award,
  ArrowRight,
  CheckCircle,
  Globe,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-600 text-white py-24 px-6 overflow-hidden">
        <div></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
            <Globe className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Trusted by companies worldwide</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white bg-clip-text">
            Revolutionizing Salon Management
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed text-white max-w-3xl mx-auto">
            Empowering beauty professionals with intelligent CRM solutions that streamline operations, 
            enhance client experiences, and drive salon growth.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                  Transforming Salon Operations Since Day One
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Founded with a vision to revolutionize salon management, we've grown from understanding 
                  the unique challenges beauty professionals face to becoming the leading provider of 
                  specialized CRM solutions for the salon industry.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our expertise combines deep industry knowledge with cutting-edge technology to deliver 
                  appointment scheduling, client management, inventory tracking, and staff coordination 
                  tools that help salons thrive.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">1,200+</div>
                  <div className="text-gray-600">Salons Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
                  <div className="text-gray-600">Average Revenue Increase</div>
                </div>
              </div>
            </div>
            
            <div className="relative mt-12 lg:mt-0">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl transform rotate-3 opacity-20"></div>
              <img
                src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern salon interior with professional styling stations"
                className="relative rounded-2xl shadow-2xl object-cover w-full h-96 lg:h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              What Drives Our Salon CRM
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The core principles that shape our salon management solutions and client relationships
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Industry Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                Continuously evolving our platform with the latest features that address real salon challenges and opportunities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Salon Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                Delivering premium software quality that matches the high standards of professional beauty services.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Client Partnership</h3>
              <p className="text-gray-600 leading-relaxed">
                Working closely with salon owners to understand their unique needs and deliver tailored solutions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Trust & Security</h3>
              <p className="text-gray-600 leading-relaxed">
                Protecting sensitive client data and business information with enterprise-grade security and transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/3993456/pexels-photo-3993456.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Salon professional using tablet for appointment management"
                className="rounded-2xl shadow-2xl object-cover w-full h-96"
              />
            </div>
            
            <div className="mt-12 lg:mt-0">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
                Why Salons Choose Our CRM
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-gray-900">Salon-Specific Features</h4>
                    <p className="text-gray-600">Built exclusively for salons with appointment booking, client profiles, service menus, and staff scheduling.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-gray-900">Instant Setup</h4>
                    <p className="text-gray-600">Get your salon running on our platform in minutes, not weeks, with intuitive setup and migration tools.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-2 rounded-lg flex-shrink-0">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-gray-900">Enhanced Client Experience</h4>
                    <p className="text-gray-600">Online booking, automated reminders, and personalized service history improve client satisfaction.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Salon?
          </h2>
          <p className="text-xl mb-10 text-blue-100 leading-relaxed">
            Join thousands of successful salons using our CRM to streamline operations, 
            delight clients, and boost revenue.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
                to="/get-started"
                onClick={() => window.scrollTo({top:0, behavior: "smooth"})}
                className="group bg-white text-blue-600 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 hover:gap-4">
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
          </div>
        </div>
      </section>

    </div>
  );
}