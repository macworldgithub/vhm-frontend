import Eligibility from "@/src/components/Eligibility";
import FeaturesSection from "@/src/components/FeaturesSection";
import FundingNeeds from "@/src/components/FundingNeeds";
import Hero from "@/src/components/Hero";
import HowItWorks from "@/src/components/HowItWorks";
import LenderPartners from "@/src/components/LenderPartners";
import Navbar from "@/src/layout/Navbar";
import Footer from "@/src/layout/Footer";
import React from "react";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <Hero />
        <FeaturesSection />
        <HowItWorks />
        <LenderPartners />
        <FundingNeeds />
        <Eligibility />
      </main>
      <Footer />
    </>
  );
}
