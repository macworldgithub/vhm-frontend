import React from "react";

export default function FeaturesSection() {
  const features = [
    {
      title: "Instant ABN Verification",
      description:
        "Enter your ABN and we auto-populate your business details from the Australian Business Register in real time.",
      icon: (
        <svg
          className="w-5 h-5 text-[#02335C]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: "Same-Day Decisions",
      description:
        "Our AI matches your profile against our lender panel and submits to the best-fit lender — often with same-day approval.",
      icon: (
        <svg
          className="w-5 h-5 text-[#02335C]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Secure & Compliant",
      description:
        "Bank-grade encryption, privacy consent workflows, and full compliance with Australian lending regulations.",
      icon: (
        <svg
          className="w-5 h-5 text-[#02335C]"
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
      ),
    },
    {
      title: "Panel of Lenders",
      description:
        "Access multiple unsecured lenders through a single application. We find the best match for your business.",
      icon: (
        <svg
          className="w-5 h-5 text-[#02335C]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      title: "Real-Time Tracking",
      description:
        "Track your application status in real time from submission through to approval and funding.",
      icon: (
        <svg
          className="w-5 h-5 text-[#02335C]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z"
          />
        </svg>
      ),
    },
    {
      title: "Fully Digital Process",
      description:
        "No paperwork, no branch visits. Complete your entire application online from any device.",
      icon: (
        <svg
          className="w-5 h-5 text-[#02335C]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9h18"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="feature" className="bg-[#f9fafb] py-16 md:py-24 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 max-w-7xl">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111827] leading-tight">
            Why choose <span className="text-[#02335C]">KREDO</span> for
            business finance?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#6b7280] font-normal leading-relaxed">
            We combine expert financial advice with cutting-edge AI technology
            to deliver faster, smarter lending outcomes.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col items-start"
            >
              {/* Icon Wrapper */}
              <div className="w-10 h-10 rounded-xl bg-[#edf5f3] flex items-center justify-center mb-5">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-[#111827] mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base text-[#6b7280] leading-relaxed font-normal">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
