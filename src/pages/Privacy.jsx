import { Shield, Eye, Users, Lock, FileText, Mail, RefreshCw } from 'lucide-react';

export default function Privacy() {
  const sections = [
    {
      id: 'overview',
      title: 'Privacy Overview',
      icon: <Shield className="h-6 w-6" />
    },
    {
      id: 'data-collection',
      title: 'Data Collection',
      icon: <FileText className="h-6 w-6" />
    },
    {
      id: 'data-usage',
      title: 'How We Use Data',
      icon: <Eye className="h-6 w-6" />
    },
    {
      id: 'data-sharing',
      title: 'Data Sharing',
      icon: <Users className="h-6 w-6" />
    },
    {
      id: 'security',
      title: 'Security',
      icon: <Lock className="h-6 w-6" />
    },
    {
      id: 'contact',
      title: 'Contact Us',
      icon: <Mail className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
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
                    className="flex items-center space-x-3 p-2 rounded-lg text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-colors duration-200"
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
              
              {/* Privacy Overview */}
              <section id="overview" className="p-8 border-b border-slate-100">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-blue-100 rounded-lg p-2">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800">Privacy Policy</h2>
                </div>
                
                <div className="prose prose-slate max-w-none">
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    We view protection of your privacy as a very important principle. We understand clearly that you and your Personal Information is one of our most important assets. We store and process your Information including any sensitive financial information collected as defined under the Information Technology Act, 2000 and Rules there under.
                  </p>
                  
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                    <h3 className="font-semibold text-amber-800 mb-2">Important Notice</h3>
                    <p className="text-amber-700 text-sm">
                      We may share personal information with our other corporate entities and affiliates. Please note that we may disclose information about you to third parties or government authorities if we believe that such disclosure is reasonably necessary.
                    </p>
                  </div>

                  <p className="text-slate-600 leading-relaxed">
                    We may disclose information to third parties or government authorities if we believe that such disclosure is reasonably necessary to:
                  </p>
                  
                  <ol className="list-decimal list-inside space-y-2 text-slate-600 ml-4">
                    <li>Take actions regarding suspected illegal activities</li>
                    <li>Enforce or apply our Terms and Conditions</li>
                    <li>Comply with legal process or other government inquiry, such as a search warrant, subpoena, statute, judicial proceeding</li>
                    <li>Protect our rights, reputation, and property, or that of our users, affiliates, or the general public</li>
                  </ol>
                </div>
              </section>

              {/* Data Collection */}
              <section id="data-collection" className="p-8 border-b border-slate-100">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-green-100 rounded-lg p-2">
                    <FileText className="h-6 w-6 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800">Data Collection</h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-3">Lokaci collects:</h3>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Data provided by users to Lokaci, such as during account creation, validating account's login/authentication</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Data created during use of our services, such as location, app usage, and device data</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Data from other sources, such as Lokaci partners</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-3">Personal Data We Collect</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-slate-50 rounded-lg p-4">
                        <h4 className="font-medium text-slate-800 mb-2">Personal Details</h4>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• Name and contact details</li>
                          <li>• Residential address</li>
                          <li>• Date of birth</li>
                          <li>• Identity documents (Aadhaar, PAN, etc.)</li>
                        </ul>
                      </div>
                      <div className="bg-slate-50 rounded-lg p-4">
                        <h4 className="font-medium text-slate-800 mb-2">Financial Information</h4>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• Transaction history</li>
                          <li>• Payment details</li>
                          <li>• Income and expenses</li>
                          <li>• Credit history</li>
                        </ul>
                      </div>
                      <div className="bg-slate-50 rounded-lg p-4">
                        <h4 className="font-medium text-slate-800 mb-2">Device Data</h4>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• Device location</li>
                          <li>• Contact list</li>
                          <li>• Call logs</li>
                          <li>• Device information</li>
                        </ul>
                      </div>
                      <div className="bg-slate-50 rounded-lg p-4">
                        <h4 className="font-medium text-slate-800 mb-2">Professional Data</h4>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>• Employment details</li>
                          <li>• Salary information</li>
                          <li>• Voice recordings</li>
                          <li>• Document images</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Data Usage */}
              <section id="data-usage" className="p-8 border-b border-slate-100">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-purple-100 rounded-lg p-2">
                    <Eye className="h-6 w-6 text-purple-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800">How We Use Your Information</h2>
                </div>

                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
                    <h3 className="font-semibold text-slate-800 mb-4">Primary Uses</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-slate-700 mb-2">Service Delivery</h4>
                        <p className="text-sm text-slate-600">Provide, personalise and improve our Products including personalised features and content.</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-700 mb-2">Security & Safety</h4>
                        <p className="text-sm text-slate-600">Verify accounts, combat harmful conduct, detect spam and maintain product integrity.</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-700 mb-2">Communication</h4>
                        <p className="text-sm text-slate-600">Send marketing communications, respond to queries, and notify about policy changes.</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-700 mb-2">Analytics</h4>
                        <p className="text-sm text-slate-600">Provide measurement, analytics and business services to improve our offerings.</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-800 mb-3">Location-Based Services</h3>
                    <p className="text-slate-600 mb-3">We use location-related information to:</p>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        <span>Provide personalised content based on your location</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        <span>Show relevant businesses and services near you</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        <span>Improve our Products and advertising relevance</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Data Sharing */}
              <section id="data-sharing" className="p-8 border-b border-slate-100">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-orange-100 rounded-lg p-2">
                    <Users className="h-6 w-6 text-orange-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800">Data Sharing</h2>
                </div>

                <div className="space-y-6">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h3 className="font-semibold text-red-800 mb-2">Important</h3>
                    <p className="text-red-700 text-sm">
                      Any Personal Data that we have access to shall never be shared without proper authorization. We only share data on a partial and "need-to-know" basis.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-800 mb-4">We share your data only in these cases:</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="bg-blue-100 rounded-full p-1 mt-1">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        </div>
                        <div>
                          <h4 className="font-medium text-slate-800">Service Provision</h4>
                          <p className="text-sm text-slate-600">Only for enabling the provision of products/services availed by you, strictly on a "need to know" basis</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-blue-100 rounded-full p-1 mt-1">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        </div>
                        <div>
                          <h4 className="font-medium text-slate-800">Legal Requirements</h4>
                          <p className="text-sm text-slate-600">When directed or required by legal/regulatory/statutory/governmental authorities under applicable laws</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-blue-100 rounded-full p-1 mt-1">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        </div>
                        <div>
                          <h4 className="font-medium text-slate-800">Fraud Prevention</h4>
                          <p className="text-sm text-slate-600">Required by financial institutions to verify, mitigate or prevent fraud or manage risk</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-lg p-4">
                    <h3 className="font-semibold text-slate-800 mb-2">Third Party Partnerships</h3>
                    <p className="text-sm text-slate-600">
                      At times we may tie-up with third parties, brand owners or other partners. In such instances, your personal information may be shared with such third parties, and they may have their own applicable privacy rules.
                    </p>
                  </div>
                </div>
              </section>

              {/* Security */}
              <section id="security" className="p-8 border-b border-slate-100">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-red-100 rounded-lg p-2">
                    <Lock className="h-6 w-6 text-red-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800">Security Measures</h2>
                </div>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold text-slate-800">Technical Security</h3>
                      <ul className="space-y-3">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-slate-600">Latest secure server layers encryption</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-slate-600">Access control on our systems</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-slate-600">Third party cyber security audits</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-slate-600">Device binding authentication</span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-semibold text-slate-800">App Security Features</h3>
                      <ul className="space-y-3">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-sm text-slate-600">Multiple levels of security</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-sm text-slate-600">Login/Logout option</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-sm text-slate-600">AppLock feature</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-sm text-slate-600">Additional authentication/OTP</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <h3 className="font-semibold text-amber-800 mb-2">Security Reminder</h3>
                    <p className="text-amber-700 text-sm">
                      Please do not share your Lokaci login, password and OTP details with anybody.
                    </p>
                  </div>
                </div>
              </section>

              {/* Cookie Policy */}
              <section className="p-8 border-b border-slate-100">
                <h2 className="text-xl font-bold text-slate-800 mb-4">Cookie Policy</h2>
                <div className="space-y-4">
                  <p className="text-slate-600">
                    Please note that a "cookie" is a small piece of information stored by a web server on a web browser so it can be later read back from that browser.
                  </p>
                  <ul className="space-y-2 text-slate-600">
                    <li>• We may use cookie and tracking technology depending on the features offered</li>
                    <li>• No Personal Data will be collected via cookies and other tracking technology</li>
                    <li>• However, if you previously provided Personal Data, cookies may be tied to such information</li>
                  </ul>
                </div>
              </section>

              {/* Data Retention */}
              <section className="p-8 border-b border-slate-100">
                <h2 className="text-xl font-bold text-slate-800 mb-4">Data Retention & Deletion</h2>
                <div className="space-y-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h3 className="font-semibold text-green-800 mb-2">Account Deletion</h3>
                    <p className="text-green-700 text-sm">
                      You may delete your Lokaci account at any point through the desktop website, mobile WAP site or mobile application.
                    </p>
                  </div>
                  <p className="text-slate-600">
                    We retain your Personal Data as long as the purpose for its usage exists, after which the same is disposed off except for any record retention required as per applicable law.
                  </p>
                </div>
              </section>

              {/* Contact */}
              <section id="contact" className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-blue-100 rounded-lg p-2">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800">Contact Us</h2>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
                  <h3 className="font-semibold text-slate-800 mb-4">Grievance Officer</h3>
                  <div className="space-y-2 text-slate-600">
                    <p className="font-medium">Lokaci Private Ltd.</p>
                    <p>B 61, Sector 2</p>
                    <p>Noida – 201301</p>
                  </div>
                </div>

                <div className="mt-6 flex items-center space-x-3 text-sm text-slate-500">
                  <RefreshCw className="h-4 w-4" />
                  <span>This policy may change at any time. Latest version available at https://lokaci.com/privacy</span>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}