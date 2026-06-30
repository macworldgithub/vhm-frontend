import React from "react";
import Navbar from "@/src/layout/Navbar";
import Footer from "@/src/layout/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0b1623] mb-6">
              About Us
            </h1>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p>
                Kredo Founder, <strong>Craig Hughes</strong>, brings over 20 years of experience working within a major bank. During his banking tenure, Craig built a wealth of expertise across various specialties, including Business Banking, Business Lending Product Management, Commercial Lending, Small Business Lending, Digital Sales, and Broker Support. In many of these roles, he was consistently recognized for his "superior performance."
              </p>

              <p>
                In August 2022, Craig launched his own broking firm. Building on his successful career in the banking industry, he has since been recognized by multiple industry bodies:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-gray-800 bg-white p-6 rounded-lg border border-gray-200">
                <li><strong>2024</strong> – Nominee, Connective Asset Finance Rising Star</li>
                <li><strong>2025</strong> – Winner, Connective Asset Finance Rising Star</li>
                <li><strong>2025</strong> – Nominee, Commercial Asset Finance Association of Australia (CAFBA) Rising Star in Asset Finance</li>
              </ul>

              <blockquote className="border-l-4 border-blue-600 pl-6 italic text-gray-600 my-8 bg-blue-50/50 p-6 rounded-r-lg">
                <p className="mb-4">
                  "If there is an easier way to do something, I will find it. That was always my 'Kredo' during my time at the bank, and it is a philosophy that has brought me great success as a broker today."
                </p>
                <p className="mb-4">
                  "My clients continue to return because I deliver results. I take immense pride in the work I do for them. Nothing brings me more joy than putting together the pieces of a customer's financial puzzle and seeing the perfect solution emerge as everything falls into place."
                </p>
                <p className="font-semibold text-gray-800 not-italic mt-6">
                  "The feeling of delivering for my clients in their time of need is exactly why I love what I do!"
                </p>
                <footer className="mt-4 text-sm font-medium text-gray-500 not-italic">
                  — Craig Hughes, Founder
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
