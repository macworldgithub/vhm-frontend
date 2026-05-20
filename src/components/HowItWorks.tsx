"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function HowItWorks() {
  const router = useRouter();

  const handleApplyClick = () => {
    router.push("/ApplicationForm");
  };

  const steps = [
    {
      stepNumber: "STEP 01",
      title: "Enter Your ABN",
      description:
        "We auto-verify your business details and pre-populate your application.",
      icon: (
        <svg
          className="w-6 h-6 text-white"
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
      ),
    },
    {
      stepNumber: "STEP 02",
      title: "Complete Application",
      description:
        "Provide director details, funding requirements, and link your bank statements.",
      icon: (
        <svg
          className="w-6 h-6 text-white"
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
      ),
    },
    {
      stepNumber: "STEP 03",
      title: "AI Lender Matching",
      description:
        "Our engine matches your profile to the best lender on our panel and submits automatically.",
      icon: (
        <svg
          className="w-6 h-6 text-white"
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
      ),
    },
    {
      stepNumber: "STEP 04",
      title: "Get Funded",
      description:
        "Receive your approval and funds — often within the same business day.",
      icon: (
        <svg
          className="w-6 h-6 text-white"
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
      ),
    },
  ];

  return (
    <section id="work" className="bg-white py-16 md:py-24 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 max-w-7xl">
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0f2942]">
            How it works
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#526475] font-normal">
            From application to funding in four simple steps.
          </p>
        </div>

        {/* Steps Flex/Grid Container */}
        <div className="relative flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 lg:gap-6 w-full">
          {/* Desktop Horizontal Connecting Line */}
          <div className="absolute top-8 left-[10%] right-[10%] h-[1px] border-t border-dashed border-[#b3d7d2] hidden lg:block z-0" />

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center max-w-xs w-full z-10 group"
            >
              {/* Mobile/Tablet Vertical Connecting Line */}
              {index !== steps.length - 1 && (
                <div className="absolute top-16 bottom-[-48px] w-[1px] border-l border-dashed border-[#b3d7d2] lg:hidden z-0" />
              )}

              {/* Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-[#3a9688] flex items-center justify-center shadow-md mb-4 transform transition-transform duration-300 group-hover:scale-105">
                {step.icon}
              </div>

              {/* Step Label */}
              <span className="text-[11px] sm:text-12px font-bold text-[#3a9688] tracking-widest uppercase mb-2">
                {step.stepNumber}
              </span>

              {/* Step Title */}
              <h3 className="text-lg sm:text-xl font-bold text-[#0f2942] mb-3">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-sm sm:text-base text-[#526475] leading-relaxed font-normal px-2">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="flex justify-center mt-16 md:mt-20">
          <button
            onClick={handleApplyClick}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#3a9688] hover:bg-[#2e7a6e] text-white font-medium text-base md:text-lg shadow-md shadow-teal-900/10 transition-colors duration-200 group"
          >
            Start Your Application
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
