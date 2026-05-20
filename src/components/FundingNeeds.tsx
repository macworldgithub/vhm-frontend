import React from "react";

export default function FundingNeeds() {
  const needs = [
    {
      title: "Business Expansion",
      description:
        "Fund growth initiatives, new locations, or equipment purchases.",
      // Rocket Icon
      icon: (
        <svg
          className="w-6 h-6 text-amber-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.58 8.42a2.25 2.25 0 11-3.18-3.18 2.25 2.25 0 013.18 3.18z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.03 16.52a17.88 17.88 0 005.12 3.14l2.12-2.12a17.9 17.9 0 003.14-5.12l4.47-4.48a1.5 1.5 0 00-2.12-2.12l-4.48 4.47a17.89 17.89 0 00-5.12 3.14l-2.12 2.12a17.9 17.9 0 00-3.14 5.12z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 15l-3 3m0 0l-1.5-1.5M6 18l1.5 1.5"
          />
        </svg>
      ),
    },
    {
      title: "Debt Consolidation",
      description: "Simplify multiple debts into one manageable repayment.",
      // Bar Chart / Graph Icon
      icon: (
        <svg
          className="w-6 h-6 text-emerald-600"
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
      title: "Tax Payments",
      description: "Cover ATO obligations without disrupting your cashflow.",
      // Institution / Bank / Government Icon
      icon: (
        <svg
          className="w-6 h-6 text-gray-700"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 21V10M5 21V10M2 10h20M3 7l9-4 9 4M4 21h16M12 10v11M8 10v11M16 10v11"
          />
        </svg>
      ),
    },
    {
      title: "Cashflow Assistance",
      description: "Bridge gaps between receivables and payables.",
      // Money Sack / Dollar Icon
      icon: (
        <svg
          className="w-6 h-6 text-yellow-600"
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
    {
      title: "Inventory & Stock",
      description: "Purchase inventory to meet seasonal demand.",
      // Box / Package Icon
      icon: (
        <svg
          className="w-6 h-6 text-amber-700"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      ),
    },
    {
      title: "Other Purposes",
      description: "Flexible funding for any legitimate business need.",
      // Sparkles / Stars Icon
      icon: (
        <svg
          className="w-6 h-6 text-indigo-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-[#fafbfc] py-16 md:py-24 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 max-w-7xl">
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0f2942]">
            Funding for every business need
          </h2>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {needs.map((need, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col items-start"
            >
              {/* Icon Container */}
              <div className="w-11 h-11 rounded-xl bg-gray-50 flex items-center justify-center mb-4 border border-gray-100/50">
                {need.icon}
              </div>

              {/* Need Title */}
              <h3 className="text-lg font-bold text-[#0f2942] mb-2">
                {need.title}
              </h3>

              {/* Need Description */}
              <p className="text-sm sm:text-base text-[#526475] leading-relaxed font-normal">
                {need.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
