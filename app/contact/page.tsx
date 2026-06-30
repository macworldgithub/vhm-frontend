import React from "react";
import Navbar from "@/src/layout/Navbar";
import Footer from "@/src/layout/Footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2">

            {/* Contact Info Section */}
            <div className="bg-[#0b1623] p-10 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Have questions about our financial solutions? We're here to help. Reach out to us and our expert team will get back to you shortly.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center text-gray-300">
                    <Phone className="w-5 h-5 mr-4 text-blue-400" />
                    <span>0400 212 777</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Mail className="w-5 h-5 mr-4 text-blue-400" />
                    <span>asset@vhmpartners.com.au</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="w-5 h-5 mr-4 text-blue-400" />
                    <span>Australia</span>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <p className="text-sm text-gray-500">
                  KREDO Finance Partners Pty Ltd
                </p>
              </div>
            </div>

            {/* Form Section */}
            <div className="p-10">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send us a Message</h3>

              <form action="https://formsubmit.co/asset@vhmpartners.com.au" method="POST" className="space-y-5">
                {/* Honeypot & Configuration for formsubmit */}
                <input type="text" name="_honey" style={{ display: "none" }} />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="New Contact Form Submission - Kredo Website" />
                <input type="hidden" name="_template" value="table" />

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number (Optional)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    placeholder="0400 000 000"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0b1623] hover:bg-gray-800 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center transition-colors"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4 ml-2" />
                </button>
              </form>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
