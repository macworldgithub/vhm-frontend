"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function Eligibility() {
  const router = useRouter();

  const handleApplyClick = () => {
    router.push("/application");
  };

  const requirements = [
    "Active ABN (minimum 3 months)",
    "Australian-based business",
    "Minimum $5,000 loan amount",
    "Business bank statements available",
    "Valid identification documents",
    "No current bankruptcy or insolvency",
  ];

  return (
    <section className="bg-white py-16 md:py-24 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 max-w-5xl">
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0f2942]">
            Am I eligible?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#526475] font-normal">
            Basic requirements to get started.
          </p>
        </div>

        {/* Requirements Grid (Responsive 2 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {requirements.map((req, index) => (
            <div
              key={index}
              className="bg-[#f4f8f7] rounded-xl px-5 py-4 flex items-center gap-4 border border-[#e8f2f0]/50 transition-colors duration-200 hover:bg-[#edf5f3]"
            >
              {/* Custom Circular Check Icon Container */}
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#3a9688]/10 border border-[#3a9688]/20 flex items-center justify-center">
                <svg
                  className="w-3.5 h-3.5 text-[#3a9688]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              {/* Requirement Text */}
              <span className="text-sm sm:text-base font-semibold text-[#0f2942]">
                {req}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="flex justify-center mt-12 md:mt-14">
          <button
            onClick={handleApplyClick}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#3a9688] hover:bg-[#2e7a6e] text-white font-medium text-base md:text-lg shadow-md shadow-teal-900/10 transition-colors duration-200 group"
          >
            Check Eligibility & Apply
            <svg
              className="w-5 h-5 transform group-hover:translate-x-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
