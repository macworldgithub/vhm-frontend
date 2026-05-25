"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Building2,
  Users,
  DollarSign,
  FileText,
  Shield,
  Send,
  Search,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";

const steps = [
  { id: 1, title: "Business", icon: Building2, active: true },
  { id: 2, title: "Directors", icon: Users, active: false },
  { id: 3, title: "Funding", icon: DollarSign, active: false },
  { id: 4, title: "Documents", icon: FileText, active: false },
  { id: 5, title: "Privacy", icon: Shield, active: false },
  { id: 6, title: "Submit", icon: Send, active: false },
];

export default function Application() {
  const [abn, setAbn] = useState("");
  const [background, setBackground] = useState("");
  const [verified, setVerified] = useState(false);

  // Dummy Dynamic Data
  const businessData = {
    businessName: "AUSTRALIAN TAXATION OFFICE",
    entityType: "Commonwealth Government Entity",
    status: "Active",
    gst: "Yes",
    registrationDate: "1999-11-01",
    location: "NSW 2640",
  };

  const handleVerify = () => {
    if (abn.length > 5) {
      setVerified(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f7f7]">
      {/* Header */}
      <header className="w-full border-b border-[#e5e7eb] bg-white">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/images/vhm-logo.png"
              alt="logo"
              className="h-10 w-auto object-contain"
            />
          </div>

          <p className="hidden text-sm text-[#64748b] md:block">
            Unsecured Business Finance Application
          </p>
        </div>
      </header>

      {/* Main */}
      <main className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          {/* Progress Steps */}
          <div className="mb-10 overflow-x-auto">
            <div className="flex min-w-[700px] items-center justify-between">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div key={step.id} className="flex flex-1 items-center">
                    {/* Step */}
                    <div className="flex flex-col items-center">
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-full border-4 transition-all duration-300 ${
                          step.active
                            ? "border-[#9dd9d0] bg-[#49b0a2] text-white"
                            : "border-[#ececec] bg-[#f3f4f6] text-[#9ca3af]"
                        }`}
                      >
                        <Icon size={22} />
                      </div>

                      <p
                        className={`mt-2 text-sm font-medium ${
                          step.active ? "text-[#49b0a2]" : "text-[#9ca3af]"
                        }`}
                      >
                        {step.title}
                      </p>
                    </div>

                    {/* Divider */}
                    {index !== steps.length - 1 && (
                      <div className="mx-3 mb-7 h-[2px] flex-1 bg-[#e5e7eb]" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Card */}
          <div className="rounded-[28px] border border-[#e5e7eb] bg-white p-5 shadow-sm sm:p-8 lg:p-10">
            {/* Heading */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-[#0f172a] sm:text-4xl">
                Business Details
              </h1>

              <p className="mt-2 text-sm text-[#64748b] sm:text-base">
                Enter your ABN to auto-populate your business information.
              </p>
            </div>

            {/* ABN */}
            <div className="mb-7">
              <label className="mb-2 block text-sm font-semibold text-[#111827]">
                Australian Business Number (ABN)
              </label>

              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="text"
                  value={abn}
                  onChange={(e) => setAbn(e.target.value)}
                  placeholder="e.g. 51 824 753 556"
                  className="h-12 w-full rounded-xl border border-[#d1d5db] px-4 text-sm outline-none transition focus:border-[#49b0a2] focus:ring-4 focus:ring-[#49b0a2]/10"
                />

                <button
                  onClick={handleVerify}
                  className="flex h-12 min-w-[120px] items-center justify-center gap-2 rounded-xl bg-[#49b0a2] px-5 text-sm font-semibold text-white transition hover:bg-[#3f9a8d]"
                >
                  <Search size={18} />
                  Verify
                </button>
              </div>
            </div>

            {/* Verified Card */}
            {verified && (
              <div className="mb-8 rounded-2xl border border-[#b8e0da] bg-[#f2fbf9] p-5 sm:p-6">
                {/* Header */}
                <div className="mb-5 flex items-center gap-2">
                  <CheckCircle2 size={22} className="text-[#49b0a2]" />

                  <h3 className="text-xl font-bold text-[#49b0a2]">
                    ABN Verified
                  </h3>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {/* Business Name */}
                  <div>
                    <p className="mb-1 text-sm font-medium text-[#64748b]">
                      Business Name
                    </p>

                    <div className="rounded-xl border border-[#d1d5db] bg-white px-4 py-3 text-sm font-medium text-[#111827]">
                      {businessData.businessName}
                    </div>
                  </div>

                  {/* Entity Type */}
                  <div>
                    <p className="mb-1 text-sm font-medium text-[#64748b]">
                      Entity Type
                    </p>

                    <div className="rounded-xl border border-[#d1d5db] bg-white px-4 py-3 text-sm font-medium text-[#111827]">
                      {businessData.entityType}
                    </div>
                  </div>

                  {/* Status */}
                  <div>
                    <p className="mb-1 text-sm font-medium text-[#64748b]">
                      Status
                    </p>

                    <div className="rounded-xl border border-[#d1d5db] bg-white px-4 py-3 text-sm font-medium text-[#111827]">
                      {businessData.status}
                    </div>
                  </div>

                  {/* GST */}
                  <div>
                    <p className="mb-1 text-sm font-medium text-[#64748b]">
                      GST Registered
                    </p>

                    <div className="rounded-xl border border-[#d1d5db] bg-white px-4 py-3 text-sm font-medium text-[#111827]">
                      {businessData.gst}
                    </div>
                  </div>

                  {/* Date */}
                  <div>
                    <p className="mb-1 text-sm font-medium text-[#64748b]">
                      ABN Registration Date
                    </p>

                    <div className="rounded-xl border border-[#d1d5db] bg-white px-4 py-3 text-sm font-medium text-[#111827]">
                      {businessData.registrationDate}
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                    <p className="mb-1 text-sm font-medium text-[#64748b]">
                      Location
                    </p>

                    <div className="rounded-xl border border-[#d1d5db] bg-white px-4 py-3 text-sm font-medium text-[#111827]">
                      {businessData.location}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Background */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#111827]">
                Brief Business Background
              </label>

              <textarea
                rows={5}
                value={background}
                onChange={(e) => setBackground(e.target.value)}
                placeholder="Describe your business, industry, and how long you've been operating..."
                className="w-full rounded-2xl border border-[#d1d5db] px-4 py-3 text-sm outline-none transition focus:border-[#49b0a2] focus:ring-4 focus:ring-[#49b0a2]/10"
              />
            </div>

            {/* Divider */}
            <div className="my-8 h-px bg-[#ececec]" />

            {/* Footer */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              {/* Back */}
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#64748b] transition hover:text-[#111827]"
              >
                <ArrowLeft size={18} />
                Back to Home
              </Link>

              {/* Continue */}
              <button className="flex items-center justify-center gap-2 rounded-xl bg-[#49b0a2] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#3f9a8d]">
                Continue
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
