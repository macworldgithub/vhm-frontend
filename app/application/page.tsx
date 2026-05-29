"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Search,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Send,
  Briefcase,
  Users,
  CreditCard,
  FileText,
  ShieldCheck,
} from "lucide-react";

export default function Application() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [abn, setAbn] = useState<string>("");
  const [verified, setVerified] = useState<boolean>(false);
  const [background, setBackground] = useState<string>("");
  const [directors, setDirectors] = useState<any[]>([
    {
      id: Date.now(),
      salutation: "Mr",
      firstName: "",
      lastName: "",
      middleName: "",
      dob: "",
      email: "",
      phone: "",
    },
  ]);
  const [loanAmount, setLoanAmount] = useState<string>("");
  const [fundPurpose, setFundPurpose] = useState<string>("");
  const [fundDetails, setFundDetails] = useState<string>("");
  const [contactEmail, setContactEmail] = useState<string>("");
  const [contactPhone, setContactPhone] = useState<string>("");
  const [bankLink, setBankLink] = useState<string>("");
  const [idFileName, setIdFileName] = useState<string>("");
  const [privacyConsent, setPrivacyConsent] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const addDirector = () =>
    setDirectors((d) => [
      ...d,
      {
        id: Date.now(),
        salutation: "",
        firstName: "",
        lastName: "",
        middleName: "",
        dob: "",
        email: "",
        phone: "",
      },
    ]);

  const updateDirector = (id: number, key: string, value: any) =>
    setDirectors((prev) =>
      prev.map((p) => (p.id === id ? { ...p, [key]: value } : p)),
    );

  const removeDirector = (id: number) =>
    setDirectors((prev) => prev.filter((p) => p.id !== id));

  const steps = [
    { id: 1, title: "Business", icon: Briefcase },
    { id: 2, title: "Directors", icon: Users },
    { id: 3, title: "Funding", icon: CreditCard },
    { id: 4, title: "Documents", icon: FileText },
    { id: 5, title: "Privacy", icon: ShieldCheck },
    { id: 6, title: "Submit", icon: Send },
  ];

  const businessData = {
    businessName: "AUSTRALIAN TAXATION OFFICE",
    entityType: "Commonwealth Government Entity",
    status: "Active",
    gst: "Yes",
    registrationDate: "1999-11-01",
    location: "NSW 2640",
  };

  const router = useRouter();

  const handleVerify = () => {
    if (abn.length > 5) setVerified(true);
  };

  const formatCurrency = (val: string) => {
    if (!val) return "-";
    const n = Number(String(val).replace(/[^0-9.-]+/g, ""));
    if (Number.isNaN(n)) return val;
    return `$${n.toLocaleString()}`;
  };

  return (
    <div className="min-h-screen bg-[#f5f7f7]">
      <header className="w-full border-b border-[#e5e7eb] bg-white">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Image
              src="/images/vhm-logo.png"
              alt="VHM Logo"
              width={160}
              height={40}
              className="h-16 w-auto object-contain"
            />
          </div>
          <p className="hidden text-sm text-[#64748b] md:block">
            Unsecured Business Finance Application
          </p>
        </div>
      </header>

      <main className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 overflow-x-auto">
            <div className="flex min-w-175 items-center justify-between">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.id} className="flex flex-1 items-center">
                    <div className="flex flex-col items-center">
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-full border-4 transition-all duration-300 ${step.id === currentStep ? "border-[#02335C] bg-[#02335C] text-white" : "border-[#ececec] bg-[#f3f4f6] text-[#9ca3af]"}`}
                      >
                        <Icon size={22} />
                      </div>
                      <p
                        className={`mt-2 text-sm font-medium ${step.id === currentStep ? "text-[#02335C]" : "text-[#9ca3af]"}`}
                      >
                        {step.title}
                      </p>
                    </div>
                    {index !== steps.length - 1 && (
                      <div className="mx-3 mb-7 h-0.5 flex-1 bg-[#e5e7eb]" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-[28px] border border-[#e5e7eb] bg-white p-5 shadow-sm sm:p-8 lg:p-10">
            {currentStep === 1 && (
              <>
                <div className="mb-8">
                  <h1 className="text-3xl font-bold text-[#0f172a] sm:text-4xl">
                    Business Details
                  </h1>
                  <p className="mt-2 text-sm text-[#64748b] sm:text-base">
                    Enter your ABN to auto-populate your business information.
                  </p>
                </div>

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
                      className="h-12 w-full rounded-xl border border-[#d1d5db] px-4 text-sm text-[#111827] outline-none transition placeholder:text-[#9ca3af] focus:border-[#02335C] focus:ring-4 focus:ring-[#02335C]/10"
                    />
                    <button
                      onClick={handleVerify}
                      className="flex h-12 min-w-30 items-center justify-center gap-2 rounded-xl bg-[#02335C] px-5 text-sm font-semibold text-white transition hover:bg-[#02335C]"
                    >
                      <Search size={18} />
                      Verify
                    </button>
                  </div>
                </div>

                {verified && (
                  <div className="mb-8 rounded-2xl border border-[#b8e0da] bg-[#e2f0f5] p-5 sm:p-6">
                    <div className="mb-5 flex items-center gap-2">
                      <CheckCircle2 size={22} className="text-[#02335C]" />
                      <h3 className="text-xl font-bold text-[#02335C]">
                        ABN Verified
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div>
                        <p className="mb-1 text-sm font-medium text-[#64748b]">
                          Business Name
                        </p>
                        <div className="rounded-xl border border-[#d1d5db] bg-white px-4 py-3 text-sm font-medium text-[#111827]">
                          {businessData.businessName}
                        </div>
                      </div>
                      <div>
                        <p className="mb-1 text-sm font-medium text-[#64748b]">
                          Entity Type
                        </p>
                        <div className="rounded-xl border border-[#d1d5db] bg-white px-4 py-3 text-sm font-medium text-[#111827]">
                          {businessData.entityType}
                        </div>
                      </div>
                      <div>
                        <p className="mb-1 text-sm font-medium text-[#64748b]">
                          Status
                        </p>
                        <div className="rounded-xl border border-[#d1d5db] bg-white px-4 py-3 text-sm font-medium text-[#111827]">
                          {businessData.status}
                        </div>
                      </div>
                      <div>
                        <p className="mb-1 text-sm font-medium text-[#64748b]">
                          GST Registered
                        </p>
                        <div className="rounded-xl border border-[#d1d5db] bg-white px-4 py-3 text-sm font-medium text-[#111827]">
                          {businessData.gst}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#111827]">
                    Craig to supply wording
                  </label>
                  <textarea
                    rows={5}
                    value={background}
                    onChange={(e) => setBackground(e.target.value)}
                    placeholder="Describe your business, industry, and how long you've been operating..."
                    className="w-full rounded-2xl border border-[#d1d5db] px-4 py-3 text-sm text-[#111827] outline-none transition placeholder:text-[#9ca3af] focus:border-[#02335C] focus:ring-4 focus:ring-[#02335C]/10"
                  />
                </div>
              </>
            )}

            {currentStep === 2 && (
              <div className="my-8">
                <h2 className="mb-4 text-xl font-semibold text-[#0f172a]">
                  Director Details
                </h2>
                <div className="space-y-4">
                  {directors.map((doc) => (
                    <div
                      key={doc.id}
                      className="rounded-xl border border-[#e5e7eb] bg-white p-4"
                    >
                      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                        <div>
                          <label className="mb-1 block text-xs font-medium text-[#64748b]">
                            Salutation
                          </label>
                          <select
                            value={doc.salutation}
                            onChange={(e) =>
                              updateDirector(
                                doc.id,
                                "salutation",
                                e.target.value,
                              )
                            }
                            className="w-full rounded-md border border-[#d1d5db] px-3 py-2 text-sm text-[#111827] placeholder:text-[#9ca3af]"
                          >
                            <option value="Mr">Mr</option>
                            <option value="Mrs">Mrs</option>
                            <option value="Ms">Ms</option>
                            <option value="Dr">Dr</option>
                          </select>
                        </div>
                        <div>
                          <label className="mb-1 block text-xs font-medium text-[#64748b]">
                            First Name *
                          </label>
                          <input
                            value={doc.firstName}
                            onChange={(e) =>
                              updateDirector(
                                doc.id,
                                "firstName",
                                e.target.value,
                              )
                            }
                            className="w-full rounded-md border border-[#d1d5db] px-3 py-2 text-sm text-[#111827] placeholder:text-[#9ca3af]"
                            placeholder="First name"
                          />
                        </div>
                        <div>
                          <label className="mb-1 block text-xs font-medium text-[#64748b]">
                            Last Name *
                          </label>
                          <input
                            value={doc.lastName}
                            onChange={(e) =>
                              updateDirector(doc.id, "lastName", e.target.value)
                            }
                            className="w-full rounded-md border border-[#d1d5db] px-3 py-2 text-sm text-[#111827] placeholder:text-[#9ca3af]"
                            placeholder="Last name"
                          />
                        </div>
                      </div>

                      <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-3">
                        <div>
                          <label className="mb-1 block text-xs font-medium text-[#64748b]">
                            Middle Name
                          </label>
                          <input
                            value={doc.middleName}
                            onChange={(e) =>
                              updateDirector(
                                doc.id,
                                "middleName",
                                e.target.value,
                              )
                            }
                            className="w-full rounded-md border border-[#d1d5db] px-3 py-2 text-sm text-[#111827] placeholder:text-[#9ca3af]"
                            placeholder="Middle name"
                          />
                        </div>
                        <div>
                          <label className="mb-1 block text-xs font-medium text-[#64748b]">
                            Date of Birth
                          </label>
                          <input
                            type="date"
                            value={doc.dob}
                            onChange={(e) =>
                              updateDirector(doc.id, "dob", e.target.value)
                            }
                            className="w-full rounded-md border border-[#d1d5db] px-3 py-2 text-sm text-[#111827]"
                          />
                        </div>
                        <div>
                          <label className="mb-1 block text-xs font-medium text-[#64748b]">
                            Email
                          </label>
                          <input
                            value={doc.email}
                            onChange={(e) =>
                              updateDirector(doc.id, "email", e.target.value)
                            }
                            className="w-full rounded-md border border-[#d1d5db] px-3 py-2 text-sm text-[#111827] placeholder:text-[#9ca3af]"
                            placeholder="email@business.com"
                          />
                        </div>
                      </div>

                      <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2 md:items-end">
                        <div>
                          <label className="mb-1 block text-xs font-medium text-[#64748b]">
                            Phone
                          </label>
                          <input
                            value={doc.phone}
                            onChange={(e) =>
                              updateDirector(doc.id, "phone", e.target.value)
                            }
                            className="w-full rounded-md border border-[#d1d5db] px-3 py-2 text-sm text-[#111827]"
                            placeholder="04xx xxx xxx"
                          />
                        </div>
                        <div className="flex gap-2 justify-end">
                          {directors.length > 1 && (
                            <button
                              onClick={() => removeDirector(doc.id)}
                              className="rounded-md border border-red-200 px-3 py-2 text-sm text-red-600"
                            >
                              Remove
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}

                  <div>
                    <button
                      onClick={addDirector}
                      className="w-full rounded-md border border-dashed border-[#d1d5db] px-4 py-3 text-sm text-[#02365c] transition hover:border-[#02365c] hover:bg-[#f0f4f8]"
                    >
                      + Add Another Director
                    </button>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="my-8">
                <h2 className="mb-4 text-xl font-semibold text-[#0f172a]">
                  Funding Requirements
                </h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-[#64748b]">
                      Loan Amount (AUD) *
                    </label>
                    <div className="mt-1 flex items-center gap-2">
                      <span className="text-sm text-[#64748b]">$</span>
                      <input
                        type="number"
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(e.target.value)}
                        className="w-full rounded-xl border border-[#d1d5db] px-4 py-2 text-sm text-[#111827] outline-none placeholder:text-[#9ca3af]"
                        placeholder="50000"
                      />
                    </div>
                    <p className="mt-1 text-xs text-[#9ca3af]">
                      Between $5,000 and $500,000
                    </p>
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-[#64748b]">
                      Funding Purpose *
                    </label>
                    <select
                      value={fundPurpose}
                      onChange={(e) => setFundPurpose(e.target.value)}
                      className="w-full rounded-xl border border-[#d1d5db] px-4 py-2 text-sm text-[#111827] outline-none"
                    >
                      <option value="">Select purpose...</option>
                      <option value="working_capital">Working Capital</option>
                      <option value="equipment">Equipment Purchase</option>
                      <option value="expansion">Business Expansion</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="mb-1 block text-sm font-medium text-[#64748b]">
                      Additional Details
                    </label>
                    <textarea
                      rows={4}
                      value={fundDetails}
                      onChange={(e) => setFundDetails(e.target.value)}
                      className="w-full rounded-2xl border border-[#d1d5db] px-4 py-3 text-sm text-[#111827] outline-none placeholder:text-[#9ca3af]"
                      placeholder="Any additional context about your funding needs..."
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-[#64748b]">
                      Contact Email *
                    </label>
                    <input
                      type="email"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      className="w-full rounded-xl border border-[#d1d5db] px-4 py-2 text-sm text-[#111827] outline-none placeholder:text-[#9ca3af]"
                      placeholder="you@business.com"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-[#64748b]">
                      Contact Phone *
                    </label>
                    <input
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      className="w-full rounded-xl border border-[#d1d5db] px-4 py-2 text-sm text-[#111827] outline-none placeholder:text-[#9ca3af]"
                      placeholder="04xx xxx xxx"
                    />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="my-8">
                <h2 className="mb-4 text-xl font-semibold text-[#0f172a]">
                  Supporting Documents
                </h2>
                <div className="space-y-4">
                  <div className="rounded-md border border-[#e6f2ef] bg-[#e2f0f5] p-4 text-sm text-[#02335C]">
                    <strong>Bank Statement Options</strong>
                    <p className="mt-1 text-xs text-[#02335C]">
                      You can provide read-only access via a bank statement
                      aggregator or upload statements directly.
                    </p>
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-[#64748b]">
                      Bank Statement Link (Optional)
                    </label>
                    <input
                      value={bankLink}
                      onChange={(e) => setBankLink(e.target.value)}
                      placeholder="Paste your bank statement aggregator link here..."
                      className="w-full rounded-xl border border-[#d1d5db] px-4 py-2 text-sm text-[#111827] outline-none placeholder:text-[#9ca3af]"
                    />
                    <p className="mt-1 text-xs text-[#9ca3af]">
                      If using Illion, Credit Sense, or similar services
                    </p>
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-[#64748b]">
                      Identification Document
                    </label>
                    <label className="mt-2 flex h-28 w-full cursor-pointer items-center justify-center rounded-xl border-2 border-dashed border-[#e6e6e6] bg-white text-sm text-[#9ca3af]">
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e) =>
                          setIdFileName(e.target.files?.[0]?.name || "")
                        }
                        className="hidden"
                      />
                      {idFileName
                        ? idFileName
                        : "Click to upload driver's licence or passport (PDF, JPG, PNG)"}
                    </label>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 5 && (
              <div className="my-8">
                <h2 className="mb-4 text-xl font-semibold text-[#0f172a]">
                  Privacy & Consent
                </h2>
                <div className="rounded-md border border-[#e5e7eb] bg-white p-4">
                  <div className="h-40 overflow-y-auto text-sm text-[#374151]">
                    <p className="font-semibold">
                      Privacy Collection Statement
                    </p>
                    <p className="mt-2">
                      VHM Finance Partners Pty Ltd collects your personal
                      information for the purpose of assessing your eligibility
                      for unsecured business finance products from our panel of
                      lenders.
                    </p>
                    <ul className="mt-2 list-disc pl-4">
                      <li>
                        Collecting and verifying your personal and business
                        information
                      </li>
                      <li>
                        Conducting credit checks and identity verification
                      </li>
                      <li>
                        Sharing your application with selected lenders on our
                        panel
                      </li>
                      <li>
                        Receiving communications regarding your application
                        status
                      </li>
                    </ul>
                  </div>
                  <label className="mt-4 flex items-start gap-3 rounded-md border border-[#f1f5f4] bg-[#ffffff] p-4">
                    <input
                      type="checkbox"
                      checked={privacyConsent}
                      onChange={(e) => setPrivacyConsent(e.target.checked)}
                    />
                    <div>
                      <div className="text-sm font-medium text-gray-600">
                        I have read and agree to the Privacy Collection
                        Statement
                      </div>
                      <div className="text-xs text-[#9ca3af]">
                        I consent to VHM Finance Partners collecting, using, and
                        disclosing my personal information as described above.
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            )}

            {submitted ? (
              <div className="my-8">
                <div className="mb-8 text-center">
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#e2f0f5]">
                    <CheckCircle2 size={40} className="text-[#02335C]" />
                  </div>
                  <h2 className="mb-3 text-3xl font-bold text-[#0f172a]">
                    Application Submitted Successfully!
                  </h2>
                  <p className="text-sm text-[#64748b]">
                    Thank you for your application. We'll be in touch soon.
                  </p>
                </div>

                <div className="mb-8 space-y-6">
                  <div className="rounded-xl border border-[#e8eef0] bg-white p-6">
                    <h3 className="mb-4 font-semibold text-[#0f172a]">
                      What Happens Next?
                    </h3>
                    <div className="space-y-4">
                      <div className="flex gap-4">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#02335C] text-white text-sm font-bold">
                          1
                        </div>
                        <div>
                          <p className="font-medium text-[#111827]">
                            Application Review
                          </p>
                          <p className="text-sm text-[#64748b]">
                            Our team will review your application within 24-48
                            hours.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#02335C] text-white text-sm font-bold">
                          2
                        </div>
                        <div>
                          <p className="font-medium text-[#111827]">
                            Lender Matching
                          </p>
                          <p className="text-sm text-[#64748b]">
                            We'll match you with the best lender from our panel
                            based on your needs.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#02335C] text-white text-sm font-bold">
                          3
                        </div>
                        <div>
                          <p className="font-medium text-[#111827]">
                            Offer & Funding
                          </p>
                          <p className="text-sm text-[#64748b]">
                            Receive and accept your offer. Funds can be
                            transferred within 24 hours.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-[#e8eef0] bg-white p-6">
                    <h3 className="mb-4 font-semibold text-[#0f172a]">
                      We'd Love Your Feedback
                    </h3>
                    <p className="mb-4 text-sm text-[#64748b]">
                      If you had a good experience, please consider leaving us a
                      review on Google.
                    </p>
                    <a
                      href="https://www.google.com/maps/place/VHM+Finance+Partners/@-33.8568,151.2153,17z"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-[#4285F4] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#3367D6]"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                      </svg>
                      Leave a Google Review
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              currentStep === 6 && (
                <div className="my-8">
                  <h2 className="mb-4 text-2xl font-bold text-[#0f172a]">
                    Review & Submit
                  </h2>
                  <p className="mb-6 text-sm text-[#64748b]">
                    Review your application details before submitting.
                  </p>
                  <div className="space-y-6">
                    <div className="rounded-xl border border-[#e8eef0] bg-white p-6">
                      <h3 className="font-medium text-sm text-[#374151] mb-3">
                        Business Details
                      </h3>
                      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 text-sm text-[#374151]">
                        <div>
                          <div className="mb-1">
                            <span className="font-medium">ABN:</span>{" "}
                            <span className="font-semibold">{abn || "-"}</span>
                          </div>
                          <div className="mb-1">
                            <span className="font-medium">Entity:</span>{" "}
                            {businessData.entityType}
                          </div>
                        </div>
                        <div className="md:text-right">
                          <div className="mb-1">
                            <span className="font-medium">Business:</span>{" "}
                            <span className="font-semibold">
                              {businessData.businessName}
                            </span>
                          </div>
                          <div className="mb-1">
                            <span className="font-medium">GST:</span>{" "}
                            {businessData.gst}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-xl border border-[#e8eef0] bg-white p-6">
                      <h3 className="font-medium text-sm text-[#374151] mb-3">
                        Directors
                      </h3>
                      <div className="text-sm text-[#374151]">
                        {directors.map((d) => (
                          <div key={d.id} className="mb-2">
                            {`${d.salutation} ${d.firstName} ${d.lastName}`}{" "}
                            {d.email && (
                              <span className="ml-2 text-xs text-[#9ca3af]">
                                ({d.email})
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-xl border border-[#e8eef0] bg-white p-6">
                      <h3 className="font-medium text-sm text-[#374151] mb-3">
                        Funding
                      </h3>
                      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 text-sm text-[#374151]">
                        <div>
                          <div className="mb-1">
                            <span className="font-medium">Amount:</span>{" "}
                            <span className="font-semibold text-[#0f172a]">
                              {formatCurrency(loanAmount)}
                            </span>
                          </div>
                          <div className="mb-1">
                            <span className="font-medium">Email:</span>{" "}
                            {contactEmail || "-"}
                          </div>
                        </div>
                        <div className="md:text-right">
                          <div className="mb-1">
                            <span className="font-medium">Purpose:</span>{" "}
                            <span className="font-semibold">
                              {fundPurpose || "-"}
                            </span>
                          </div>
                          <div className="mb-1">
                            <span className="font-medium">Phone:</span>{" "}
                            {contactPhone || "-"}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-xl border border-[#e8f3ee] bg-[#e2f0f5] p-4 flex items-start gap-4">
                      <div className="mt-0.5 text-[#02335C]">
                        <CheckCircle2 size={20} />
                      </div>
                      <div>
                        <div className="font-medium text-[#02335C]">
                          {privacyConsent
                            ? "Privacy consent provided"
                            : "Privacy consent NOT provided"}
                        </div>
                        <div className="text-sm text-[#6b7280]">
                          Your application will be matched with the best lender
                          on our panel.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}

            <div className="my-8 h-px bg-[#ececec]" />

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              {!submitted &&
                (currentStep === 1 ? (
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#64748b] transition hover:text-[#111827]"
                  >
                    <ArrowLeft size={18} />
                    Back to Home
                  </Link>
                ) : (
                  <button
                    onClick={() => setCurrentStep((s) => Math.max(1, s - 1))}
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#64748b] transition hover:text-[#111827]"
                  >
                    <ArrowLeft size={18} />
                    Back
                  </button>
                ))}

              <button
                onClick={() => {
                  if (currentStep < 6) setCurrentStep((s) => s + 1);
                  else if (!submitted) {
                    console.log("submit form", {
                      abn,
                      background,
                      directors,
                      loanAmount,
                      fundPurpose,
                      fundDetails,
                      contactEmail,
                      contactPhone,
                      bankLink,
                      idFileName,
                      privacyConsent,
                    });
                    setSubmitted(true);
                  } else {
                    router.push("/");
                  }
                }}
                className="flex items-center justify-center gap-2 rounded-xl bg-[#02335C] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#02335C]"
              >
                {submitted ? (
                  "Back to Home"
                ) : currentStep === 6 ? (
                  <>
                    <Send size={16} />
                    Submit Application
                  </>
                ) : (
                  <>
                    Continue
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
