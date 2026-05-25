"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleApplyClick = () => {
    router.push("/application");
  };

  // Scroll detect karne ke liye effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/images/vhm-logo.png"
              className="h-16 w-auto object-contain"
              alt="VHM Logo"
              width={144}
              height={56}
              style={{ width: "auto" }}
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 text-gray-400 font-semibold tracking-wide">
            <a
              href="#feature"
              className="hover:text-[#02335C] transition-colors"
            >
              Benefits
            </a>

            <a href="#work" className="hover:text-[#02335C] transition-colors">
              How It Works
            </a>
          </nav>

          {/* Apply Button */}
          <div className="hidden md:block">
            <button
              onClick={handleApplyClick}
              className="inline-flex items-center justify-center gap-2 px-8 py-2 rounded-full bg-[#02335C] hover:bg-[#02335C] text-white font-medium text-base md:text-lg shadow-md shadow-teal-900/10 transition-colors duration-200 group"
            >
              Apply Now <span className="text-lg leading-none">→</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t bg-white px-4 py-4 space-y-4 shadow-xl animate-in fade-in slide-in-from-top-5 duration-200">
          <a
            className="block font-medium text-gray-800 px-2 py-1 hover:text-[#02335C]"
            href="#feature"
          >
            Benefits
          </a>

          <a
            className="block font-medium text-gray-800 px-2 py-1 hover:text-[#02335C]"
            href="#work"
          >
            How It Works
          </a>

          <button
            onClick={handleApplyClick}
            className="w-full bg-[#02335C] text-white py-3 rounded-full font-medium shadow-sm"
          >
            Apply Now
          </button>
        </div>
      )}
    </header>
  );
}
