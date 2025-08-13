import {assets} from "../assets/assets"
import { Mail, Phone, MapPin, Locate, PhoneCall, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-10">
          <div>
            <h2 className="text-4xl font-bold mb-4">
              Connect with Our Offices
            </h2>
            <p className="text-gray-700 text-lg">
              Whether you're looking for a demo, need support, or have questios,
              we're here to help.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-18 ">
            <div className="flex flex-col gap-4 mt-8">
              <article className="p-6 md:p-8 bg-white rounded-2xl shadow-md ">
                <h3 class="text-xl font-semibold flex items-center gap-2">
                  <MapPin />
                  Head Office
                </h3>
                <p className="flex mt-2 font-semibold">
                  GT-08, Sector 117, Noida, Uttar Pradesh 201307
                </p>
                <ul class="mt-3 space-y-1 text-sm">
                  <li className="flex items-center gap-2">
                    <Phone className="w-4 text-gray-800 " /> +91 987654321
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail className="w-4 text-gray-800 " />
                    support@loakci.com
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock className="w-4 text-gray-800 " />
                    Mon–Sat: 09:00–17:00
                  </li>
                </ul>
              </article>
              <article className=" p-6 md:p-8 bg-white rounded-2xl shadow-md">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <MapPin />
                  Branch Office
                </h3>
                <p className="mt-2 font-semibold">
                  GT-08, Sector 117, Noida, Uttar Pradesh 201307
                </p>
                <ul class="mt-3 space-y-1 text-sm">
                  <li className="flex items-center gap-2">
                    <Phone className="w-4 text-gray-800 " /> +91 987654321
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail className="w-4 text-gray-800 " />
                    support@loakci.com
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock className="w-4 text-gray-800 " />
                    Mon–Sat: 09:00–17:00
                  </li>
                </ul>
              </article>
            </div>

            <div class="rounded-xl overflow-hidden border shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20618.080579960268!2d77.38320450691832!3d28.569867101632905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b5c46418751aef3%3A0x2d35829dafac334d!2sLokaci%20HQ!5e0!3m2!1sen!2sin!4v1755079251872!5m2!1sen!2sin"
                width="602"
                height="480"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Email Us */}
        <div className="flex flex-col items-center justify-center pt-30 ">
          <img src={assets.logo} alt="" className="w-15 mb-4"/>
          <h1 className=" text-3xl font-bold ">
            Ready To Transform Your Salon Business?
          </h1>
          <p className="text-gray-600 ">
            Join thousands of salon owners who've streamlined their operations with our comprehensive CRM solution
          </p>
          <Link 
            to="/get-started"
            onClick={() => window.scrollTo({top:0, behavior: "smooth" })}
            className=" font-semibold bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-xl mt-4">
            Email us Your requirement.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
