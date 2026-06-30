import React from "react";
import Image from "next/image";

export default function IndustryMemberships() {
  const memberships = [
    {
      name: "AFCA",
      logo: "/images/afca.png",
      description: "Australian Financial Complaints Authority",
    },
    {
      name: "CAFBA",
      logo: "/images/cafba.png",
      description: "Community and Franchise Business Association",
    },
    {
      name: "Connective+",
      logo: "/images/connective.png",
      description: "Business and Finance Network",
    },
  ];

  return (
    <section className="bg-[#f9fafb] py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0f172a] mb-4">
            Industry Memberships
          </h2>
          <p className="text-lg text-[#64748b] max-w-2xl mx-auto">
            VHM Asset Finance are members of the following associations,
            ensuring compliance, credibility, and commitment to industry best
            practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
          {memberships.map((membership) => (
            <div
              key={membership.name}
              className="flex flex-col items-center justify-center p-4 rounded-xl border border-[#e5e7eb] bg-white hover:shadow-lg transition-shadow duration-300 w-full h-38"
            >
              <div className="flex items-center justify-center mb-4 h-24">
                <Image
                  src={membership.logo}
                  alt={`${membership.name} logo`}
                  width={140}
                  height={100}
                  className="object-contain max-h-20"
                  priority
                />
              </div>
              <p className="text-center text-sm text-[#64748b] font-medium">
                {membership.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
