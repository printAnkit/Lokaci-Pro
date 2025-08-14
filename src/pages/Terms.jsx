import React from 'react';
import { FileText, Users, Shield, AlertTriangle, Scale, CreditCard, MessageSquare, Settings, Phone, Gavel } from 'lucide-react';

function App() {
  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      icon: <FileText className="h-6 w-6" />
    },
    {
      id: 'obligations',
      title: 'Obligations',
      icon: <Users className="h-6 w-6" />
    },
    {
      id: 'rights-limits',
      title: 'Rights and Limits',
      icon: <Shield className="h-6 w-6" />
    },
    {
      id: 'disclaimer',
      title: 'Disclaimer & Liability',
      icon: <AlertTriangle className="h-6 w-6" />
    },
    {
      id: 'termination',
      title: 'Termination',
      icon: <Settings className="h-6 w-6" />
    },
    {
      id: 'fees-payments',
      title: 'Fees & Payments',
      icon: <CreditCard className="h-6 w-6" />
    },
    {
      id: 'dispute-resolution',
      title: 'Dispute Resolution',
      icon: <Gavel className="h-6 w-6" />
    },
    {
      id: 'contact',
      title: 'Contact Us',
      icon: <Phone className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Table of Contents */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200/60 p-6 sticky top-24">
              <h2 className="font-semibold text-slate-800 mb-4">Table of Contents</h2>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="flex items-center space-x-3 p-2 rounded-lg text-sm text-slate-600 hover:bg-slate-50 hover:text-indigo-600 transition-colors duration-200"
                  >
                    <span className="text-slate-400">{section.icon}</span>
                    <span>{section.title}</span>
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200/60 overflow-hidden">
              
              {/* Welcome Section */}
              <section className="p-8 border-b border-slate-100">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-indigo-100 rounded-lg p-2">
                    <Scale className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800">Terms of Use</h2>
                </div>
                
                <div className="prose prose-slate max-w-none">
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    Welcome to LOKACI. This document is an electronic record in terms of the Information Technology Act, 2000 and published in accordance with Rule 3 of the Information Technology (Intermediaries guidelines) Rules, 2011.
                  </p>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <h3 className="font-semibold text-blue-800 mb-2">Agreement to Terms</h3>
                    <p className="text-blue-700 text-sm">
                      Your use of the App/Website and services offered is subject to and governed by the following terms. By accessing or using the platform, you agree to be bound by these terms. Please read them carefully.
                    </p>
                  </div>
                </div>
              </section>

              {/* Introduction */}
              <section id="introduction" className="p-8 border-b border-slate-100">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-green-100 rounded-lg p-2">
                    <FileText className="h-6 w-6 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800">1. Introduction</h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-3">1.1 Translation of the Terms</h3>
                    <p className="text-slate-600">
                      LOKACI may provide translations for convenience, but the English version prevails in case of conflicts.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-3">1.2 Definitions</h3>
                    <div className="bg-slate-50 rounded-lg p-4">
                      <ul className="space-y-2 text-slate-600">
                        <li><strong>"YOU"</strong> or <strong>"employee"</strong> refers to any natural or legal person registered on the App.</li>
                        <li><strong>"We"</strong>, <strong>"Us"</strong>, <strong>"Our"</strong> refer to LOKACI.com.</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-3">1.3 Use of Another's Account</h3>
                    <p className="text-slate-600">
                      You may not impersonate or access the platform via someone else's account unless authorized.
                    </p>
                  </div>
                </div>
              </section>

              {/* Obligations */}
              <section id="obligations" className="p-8 border-b border-slate-100">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-blue-100 rounded-lg p-2">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800">2. Obligations</h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-3">2.1 Membership Eligibility</h3>
                    <p className="text-slate-600">
                      Only legally competent individuals may use the platform. Minors or insolvents are not eligible.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-3">2.2 Worker's Eligibility</h3>
                    <p className="text-slate-600">
                      You declare that your workers are of minimum legal age and you meet all eligibility criteria.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-3">2.3 Responsibility for Your Account</h3>
                    <p className="text-slate-600">
                      You are responsible for all activities under your account, and must maintain its confidentiality.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-3">2.4 Prohibited Content</h3>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <p className="text-red-700 text-sm mb-2">The following content is strictly prohibited:</p>
                      <ul className="text-red-600 text-sm space-y-1">
                        <li>• Nudity or sexually explicit content</li>
                        <li>• Hate speech or discriminatory content</li>
                        <li>• Fake profiles or impersonation</li>
                        <li>• Spam or unsolicited messages</li>
                        <li>• Illegal or harmful activities</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Rights and Limits */}
              <section id="rights-limits" className="p-8 border-b border-slate-100">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-purple-100 rounded-lg p-2">
                    <Shield className="h-6 w-6 text-purple-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800">3. Rights and Limits</h2>
                </div>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800 mb-3">3.1 Intellectual Property Rights</h3>
                      <ul className="text-slate-600 space-y-2">
                        <li>• All rights reserved by LOKACI</li>
                        <li>• Trademarks and logos belong to LOKACI</li>
                        <li>• Unauthorized use is prohibited</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-slate-800 mb-3">3.2 Price Modification Rights</h3>
                      <p className="text-slate-600">
                        LOKACI may change pricing without notice in accordance with applicable laws.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-slate-800 mb-3">3.3 Service Limitations</h3>
                      <p className="text-slate-600">
                        LOKACI can restrict, suspend, or terminate your account for breaches or misuse.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-slate-800 mb-3">3.4 Messaging Limits</h3>
                      <p className="text-slate-600">
                        Sending spam or unsolicited messages to customers is strictly prohibited.
                      </p>
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <h3 className="font-semibold text-amber-800 mb-2">3.5 No Discrimination Policy</h3>
                    <p className="text-amber-700 text-sm">
                      Discrimination based on protected classes is illegal and not tolerated on our platform.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-3">3.7 Relationship</h3>
                    <p className="text-slate-600">
                      You and LOKACI are independent contractors. No employment relationship is created.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-3">3.8 Listing of Services</h3>
                    <p className="text-slate-600">
                      You must be legally allowed to provide listed services and ensure they are accurate and up-to-date.
                    </p>
                  </div>
                </div>
              </section>

              {/* Disclaimer and Liability */}
              <section id="disclaimer" className="p-8 border-b border-slate-100">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-red-100 rounded-lg p-2">
                    <AlertTriangle className="h-6 w-6 text-red-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800">4. Disclaimer and Limit of Liability</h2>
                </div>

                <div className="space-y-6">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h3 className="font-semibold text-red-800 mb-2">4.1 No Warranty</h3>
                    <p className="text-red-700 text-sm">
                      Services are provided "AS IS" without warranties of any kind, express or implied.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-slate-50 rounded-lg p-4">
                      <h4 className="font-medium text-slate-800 mb-2">4.2 Credit/Debit Card Fraud</h4>
                      <p className="text-sm text-slate-600">You bear responsibility for fraudulent transactions on your account.</p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4">
                      <h4 className="font-medium text-slate-800 mb-2">4.3 Product Side-effects</h4>
                      <p className="text-sm text-slate-600">Service providers are responsible for any side-effects caused by their services.</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-3">4.4 Disclosure of Personal Info</h3>
                    <p className="text-slate-600">
                      LOKACI is not liable for data breaches by third parties or unauthorized access to your information.
                    </p>
                  </div>
                </div>
              </section>

              {/* Termination */}
              <section id="termination" className="p-8 border-b border-slate-100">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-orange-100 rounded-lg p-2">
                    <Settings className="h-6 w-6 text-orange-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800">5. Termination</h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-3">5.1 Termination from Services</h3>
                    <p className="text-slate-600">
                      Either party may terminate the agreement at any time with or without cause.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-3">5.2 Suspension of Account</h3>
                    <p className="text-slate-600">
                      Accounts may be suspended immediately for unethical conduct, policy violations, or harmful behavior.
                    </p>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h3 className="font-semibold text-yellow-800 mb-2">5.3 Legal Action</h3>
                    <p className="text-yellow-700 text-sm">
                      Legal actions may be taken for hacking, platform misuse, or defamatory statements against LOKACI.
                    </p>
                  </div>
                </div>
              </section>

              {/* Advertisements */}
              <section className="p-8 border-b border-slate-100">
                <h2 className="text-xl font-bold text-slate-800 mb-4">6. Advertisements</h2>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">6.1 Copyright</h3>
                  <p className="text-slate-600">
                    LOKACI owns all advertising and promotional materials displayed on the platform.
                  </p>
                </div>
              </section>

              {/* Fees and Payments */}
              <section id="fees-payments" className="p-8 border-b border-slate-100">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-green-100 rounded-lg p-2">
                    <CreditCard className="h-6 w-6 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800">7. Fees and Payments</h2>
                </div>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50 rounded-lg p-4">
                      <h3 className="font-semibold text-green-800 mb-2">7.1 Registration Fees</h3>
                      <p className="text-green-700 text-sm">Currently free of charge.</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <h3 className="font-semibold text-green-800 mb-2">7.2 Advertisement Charges</h3>
                      <p className="text-green-700 text-sm">No advertisement fees at this time.</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-3">7.3 Payments</h3>
                    <p className="text-slate-600 mb-3">
                      Detailed cancellation policies and charges are listed in individual service agreements.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-3">7.4 Taxation</h3>
                    <p className="text-slate-600">
                      GST-compliant billing as per Indian laws. All applicable taxes will be added to service charges.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-3">7.5 Pricing</h3>
                    <p className="text-slate-600">
                      Prices are determined by LOKACI. Service providers may not charge extra fees beyond listed prices.
                    </p>
                  </div>
                </div>
              </section>

              {/* Dispute Resolution */}
              <section id="dispute-resolution" className="p-8 border-b border-slate-100">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-indigo-100 rounded-lg p-2">
                    <Gavel className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800">8. Dispute Resolution</h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-3">8.1 Grievance Redressal</h3>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <p className="text-blue-700 text-sm">
                        For any grievances or disputes, please contact: <strong>grievance.officer@lokaci.com</strong>
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-3">8.2 Jurisdiction</h3>
                    <p className="text-slate-600">
                      These terms are governed under Indian law. Courts of New Delhi have exclusive jurisdiction over any disputes.
                    </p>
                  </div>
                </div>
              </section>

              {/* Indemnity */}
              <section className="p-8 border-b border-slate-100">
                <h2 className="text-xl font-bold text-slate-800 mb-4">9. Indemnity</h2>
                <p className="text-slate-600">
                  You agree to indemnify and hold LOKACI harmless against any legal claims, damages, or expenses arising from third parties due to your actions, content, or use of the platform.
                </p>
              </section>

              {/* General Terms */}
              <section className="p-8 border-b border-slate-100">
                <h2 className="text-xl font-bold text-slate-800 mb-4">10. General Terms</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-3">10.1 Important Points</h3>
                    <p className="text-slate-600">This contract supersedes all prior agreements between you and LOKACI.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-3">10.2 Incentive Programs</h3>
                    <p className="text-slate-600">
                      Governed by individual program terms and conditions. Subject to termination upon misuse.
                    </p>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <h3 className="font-semibold text-amber-800 mb-2">10.3 Changes to Terms</h3>
                    <p className="text-amber-700 text-sm">
                      You are responsible for reviewing updates to these terms. Continued use of the platform implies acceptance of any changes.
                    </p>
                  </div>
                </div>
              </section>

              {/* Privacy Policy Reference */}
              <section className="p-8 border-b border-slate-100">
                <h2 className="text-xl font-bold text-slate-800 mb-4">11. Privacy Policy</h2>
                <p className="text-slate-600">
                  Your data is protected under the Information Technology Act, 2000. Personal information may be shared with affiliates only under legitimate business circumstances as outlined in our Privacy Policy.
                </p>
              </section>

              {/* Dos and Don'ts */}
              <section className="p-8 border-b border-slate-100">
                <h2 className="text-xl font-bold text-slate-800 mb-4">12. Lokaci Dos and Don'ts</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-green-800 mb-3">✓ Do</h3>
                    <ul className="space-y-2 text-slate-600">
                      <li>• Maintain data security and confidentiality</li>
                      <li>• Provide honest and neutral reviews</li>
                      <li>• Follow platform conduct guidelines</li>
                      <li>• Report suspicious activities</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-red-800 mb-3">✗ Don't</h3>
                    <ul className="space-y-2 text-slate-600">
                      <li>• Share login credentials</li>
                      <li>• Post fake or misleading content</li>
                      <li>• Engage in discriminatory behavior</li>
                      <li>• Violate intellectual property rights</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Complaints */}
              <section className="p-8 border-b border-slate-100">
                <h2 className="text-xl font-bold text-slate-800 mb-4">13. Complaints</h2>
                <p className="text-slate-600">
                  We reserve the right to investigate any behavior that causes issues with customers or violates our terms of service. Appropriate action will be taken based on our findings.
                </p>
              </section>

              {/* Contact */}
              <section id="contact" className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-blue-100 rounded-lg p-2">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800">14. Contact Us</h2>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
                  <p className="text-slate-600 mb-4">
                    For any questions, concerns, or support regarding these Terms of Use, please contact us:
                  </p>
                  <ul className="space-y-2 text-slate-600">
                    <li>• Use the contact feature on the App/Website</li>
                    <li>• Email us at our support address</li>
                    <li>• Leave a message through our customer service portal</li>
                  </ul>
                </div>

                <div className="mt-6 flex items-center space-x-3 text-sm text-slate-500">
                  <MessageSquare className="h-4 w-4" />
                  <span>These terms are subject to change. Please review regularly for updates.</span>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;