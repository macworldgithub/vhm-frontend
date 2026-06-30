"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/src/layout/Navbar";
import Footer from "@/src/layout/Footer";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status === "error") setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch(`https://www.abn.omnisuiteai.com/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.fullName,
          email: form.email,
          phone: form.phone,
          message: form.message,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setForm({ fullName: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
        setErrorMsg(data.message ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg(
        "Could not connect to the server. Please check your connection and try again.",
      );
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* ── Left: Contact Info ── */}
            <div className="bg-[#0b1623] p-10 text-white flex flex-col justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Have questions about our financial solutions? We&apos;re here
                  to help. Reach out and our expert team will get back to you
                  shortly.
                </p>

                <div className="space-y-6">
                  <a
                    href="tel:0400212777"
                    className="flex items-center text-gray-300 hover:text-white transition-colors"
                  >
                    <Phone className="w-5 h-5 mr-4 text-blue-400 shrink-0" />
                    <span>0400 212 777</span>
                  </a>
                  <a
                    href="mailto:asset@vhmpartners.com.au"
                    className="flex items-center text-gray-300 hover:text-white transition-colors"
                  >
                    <Mail className="w-5 h-5 mr-4 text-blue-400 shrink-0" />
                    <span>asset@vhmpartners.com.au</span>
                  </a>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="w-5 h-5 mr-4 text-blue-400 shrink-0" />
                    <span>Australia</span>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <p className="text-sm text-gray-500">
                  Kredo — VHM Asset Finance
                </p>
              </div>
            </div>

            {/* ── Right: Form ── */}
            <div className="p-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Send us a Message
              </h2>

              {/* Success state */}
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center text-center py-10 space-y-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
                    <CheckCircle2 className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Message Sent!
                  </h3>
                  <p className="text-sm text-gray-500 max-w-xs">
                    Thanks for reaching out. We&apos;ll be in touch with you
                    shortly.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 text-sm font-medium text-[#02335C] hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* Error banner */}
                  {status === "error" && errorMsg && (
                    <div className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                      <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={form.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02335C]/20 focus:border-[#02335C] outline-none transition-colors text-black placeholder-gray-500"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02335C]/20 focus:border-[#02335C] outline-none transition-colors text-black"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number{" "}
                      <span className="text-gray-400 font-normal">
                        (Optional)
                      </span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02335C]/20 focus:border-[#02335C] outline-none transition-colors text-black placeholder-gray-500"
                      placeholder="0400 000 000"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={form.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02335C]/20 focus:border-[#02335C] outline-none transition-colors resize-none text-black placeholder-gray-500"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-[#0b1623] hover:bg-gray-800 disabled:opacity-60 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="max-w-4xl mx-auto mt-8">
          <button
            onClick={() => router.push("/")}
            className="bg-[#02335C] hover:bg-[#0B1623] text-white font-medium py-2 px-6 rounded-lg transition-colors"
          >
            Back To Home
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}
