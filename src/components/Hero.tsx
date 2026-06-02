"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Hero() {
  const router = useRouter();

  const handleApplyClick = () => {
    router.push("/application");
  };

  return (
    <section className="relative min-h-[520px] md:min-h-[650px] lg:min-h-[800px] w-full flex items-center pt-20 md:pt-24 pb-10 md:pb-12 lg:pb-0 overflow-hidden bg-[#c3e1fa]">
      {/* Background Image Container with Blur effect */}
      {/* <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/hero3.png"
          alt="Business Cashflow Background"
          fill
          priority
          className="object-cover object-center lg:object-right filter blur-[2px] scale-105"
        />
        <div className="absolute inset-0 bg-white/10 mix-blend-overlay" />
      </div> */}
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/hero3.png"
          alt="Business Cashflow Background"
          fill
          priority
          className="object-cover object-center lg:object-right scale-100 transition-all duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#c3e1fa]/40 via-[#c3e1fa]/30 to-[#c3e1fa]/12" />
      </div>
      {/* Main Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 max-w-7xl relative z-10">
        <div className="max-w-xl lg:max-w-2xl xl:max-w-3xl flex flex-col items-start gap-6 md:gap-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 border border-white/20 text-slate-800 text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
            <svg
              className="w-3.5 h-3.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Fast Business Finance
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.05] sm:leading-[1.05]">
            Business cashflow <br className="hidden sm:inline" />
            finance, <span className="text-[#02335C]">simplified</span>
          </h1>

          {/* Description Paragraph */}
          <p className="text-base sm:text-lg text-slate-900 leading-relaxed max-w-lg md:max-w-xl font-bold">
            Access unsecured business loans from $5,000 to $500,000. Our
            AI-powered platform matches you with the right lender in minutes —
            not days.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mt-2">
            <button
              onClick={handleApplyClick}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-br from-[#04263c] to-[#02335C] hover:from-[#022233] hover:to-[#03435a] text-white font-semibold text-base shadow-lg transition-transform duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[#02335C]/30 group"
            >
              Apply Now
              <svg
                className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform"
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

            <button
              onClick={() => router.push("/#work")}
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white/90 hover:bg-white text-[#02335C] border border-white/80 font-semibold text-base shadow-sm transition-colors duration-200"
            >
              How It Works
            </button>
          </div>

          {/* Feature / Stat Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-6 gap-x-6 md:gap-x-10 lg:gap-x-14 w-full mt-6 md:mt-10 pt-8 border-t border-white/10">
            {/* Stat 1 */}
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                $5K–$500K
              </span>
              <span className="text-xs sm:text-sm text-slate-900 font-bold mt-0.5">
                Loan Range
              </span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                &lt;5 min
              </span>
              <span className="text-xs sm:text-sm text-slate-900 font-bold mt-0.5">
                Application
              </span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Same Day
              </span>
              <span className="text-xs sm:text-sm text-slate-900 font-bold mt-0.5">
                Approval
              </span>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                5+
              </span>
              <span className="text-xs sm:text-sm text-slate-900 font-bold mt-0.5">
                Lender Panel
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
