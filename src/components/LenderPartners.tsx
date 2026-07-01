import React from "react";
import Image from "next/image";

export default function LenderPartners() {
  const partners = [
    {
      name: "dyna",
      logo: "/images/dyna.jpg",
    },
    {
      name: "Prospa",
      logo: "/images/prospa.jpg",
    },
    {
      name: "Lumi",
      logo: "/images/lumi.jpg",
    },
    {
      name: "Banjo",
      logo: "/images/banjo.png",
    },
    {
      name: "moneytech",
      logo: "/images/moneytech.jpg",
    },
    {
      name: "shift",
      logo: "/images/shift.jpg",
    },
  ];

  return (
    <section className="bg-white py-4 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0f172a] mb-4">
            Our Lender Partners
          </h2>
          <p className="text-lg text-[#64748b] max-w-2xl mx-auto">
            We work with Australia's leading lenders to bring you the best
            unsecured business financing options tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center p-8 rounded-xl border border-[#e5e7eb] bg-white hover:shadow-lg transition-shadow duration-300 w-full h-40"
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={130}
                height={100}
                className="object-contain max-h-24"
                priority
              />
            </div>
          ))}
        </div>

        <div className="mt-8 bg-[#e2f0f5] border border-[#b8e0da] rounded-xl p-8">
          <p className="text-center text-[#02335C] text-sm leading-relaxed">
            VHM partners with trusted lenders who share our commitment to
            supporting Australian businesses. Each lender has been carefully
            selected based on their competitive rates, flexibility, and customer
            service. Whether you're a startup or an established business, our
            network ensures you get matched with the right lending partner for
            your unique needs.
          </p>
        </div>
      </div>
    </section>
  );
}
