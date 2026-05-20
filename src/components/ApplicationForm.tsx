"use client";

import React, { useState } from "react";
import { Search, ArrowRight, ArrowLeft } from "lucide-react";

export default function ApplicationForm() {
  const [abn, setAbn] = useState("51787877234");
  const [background, setBackground] = useState("test");

  // Multi-step tracking state (Default pehla step active hai)
  const steps = [
    { id: "business", label: "Business", active: true, completed: true },
    { id: "directors", label: "Directors", active: false, completed: false },
    { id: "funding", label: "Funding", active: false, completed: false },
    { id: "documents", label: "Documents", active: false, completed: false },
    { id: "privacy", label: "Privacy", active: false, completed: false },
    { id: "submit", label: "Submit", active: false, completed: false },
  ];

  return (
    <section className="bg-[#f4f8f7] min-h-screen py-12 md:py-20 w-full flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl w-full">
        {/* ================= STEPPER PROGRESS TRACKER ================= */}
        <div className="relative w-full max-w-3xl mx-auto mb-10 md:mb-14 overflow-x-auto no-scrollbar">
          <div className="flex items-center justify-between min-w-[600px] px-4 relative">
            {/* Background Connecting Line */}
            <div className="absolute top-5 left-12 right-12 h-[2px] bg-gray-200 z-0" />

            {steps.map((step, index) => (
              <div
                key={step.id}
                className="flex flex-col items-center relative z-10 flex-1"
              >
                {/* Step Circle Icon */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 border-2 ${
                    step.id === "business"
                      ? "bg-[#3a9688] text-white border-[#3a9688] shadow-md shadow-teal-900/10"
                      : "bg-white text-gray-400 border-gray-200"
                  }`}
                >
                  {index === 0 && (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  )}
                  {index === 1 && (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  )}
                  {index === 2 && (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  )}
                  {index === 3 && (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  )}
                  {index === 4 && (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  )}
                  {index === 5 && (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  )}
                </div>

                {/* Step Label */}
                <span
                  className={`text-xs font-semibold mt-2 tracking-wide ${
                    step.id === "business" ? "text-[#3a9688]" : "text-gray-400"
                  }`}
                >
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ================= FORM CARD CONTAINER ================= */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm w-full max-w-3xl mx-auto">
          {/* Card Header */}
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#0f2942]">
              Business Details
            </h1>
            <p className="text-sm sm:text-base text-[#526475] mt-1 font-normal">
              Enter your ABN to auto-populate your business information.
            </p>
          </div>

          {/* Form Fields */}
          <div className="space-y-6">
            {/* Input 1: ABN Number with Verify Button */}
            <div className="flex flex-col gap-2">
              <label className="text-sm sm:text-base font-bold text-[#0f2942]">
                Australian Business Number (ABN)
              </label>

              <div className="flex flex-col sm:flex-row items-stretch gap-3 w-full">
                <input
                  type="text"
                  value={abn}
                  onChange={(e) => setAbn(e.target.value)}
                  className="flex-1 px-4 py-3.5 rounded-xl border border-gray-200 text-gray-800 text-base font-medium focus:outline-none focus:ring-2 focus:ring-[#3a9688]/20 focus:border-[#3a9688] transition-all"
                  placeholder="Enter ABN"
                />
                <button className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#3a9688] hover:bg-[#2e7a6e] text-white font-semibold text-base shadow-sm transition-colors duration-200 whitespace-nowrap">
                  <Search className="w-4 h-4" />
                  Verify
                </button>
              </div>
            </div>

            {/* Input 2: Brief Business Background Textarea */}
            <div className="flex flex-col gap-2">
              <label className="text-sm sm:text-base font-bold text-[#0f2942]">
                Brief Business Background
              </label>
              <textarea
                rows={4}
                value={background}
                onChange={(e) => setBackground(e.target.value)}
                className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-gray-800 text-base font-medium focus:outline-none focus:ring-2 focus:ring-[#3a9688]/20 focus:border-[#3a9688] transition-all resize-y"
                placeholder="Describe your business background..."
              />
            </div>
          </div>

          {/* Card Action Footer Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-10 pt-6 border-t border-gray-100">
            {/* Back Link */}
            <button className="inline-flex items-center justify-center gap-2 text-sm sm:text-base font-semibold text-gray-500 hover:text-gray-700 transition-colors py-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </button>

            {/* Continue Button */}
            <button className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#3a9688] hover:bg-[#2e7a6e] text-white font-semibold text-base shadow-md shadow-teal-900/5 transition-colors duration-200 group">
              Continue
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
