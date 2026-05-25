import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0b1623] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left Section */}
          <div>
            <Image
              src="/images/vhm-logo.png"
              alt="VHM Logo"
              width={160}
              height={40}
              className="h-16 w-auto object-contain mb-4"
              style={{ width: "auto" }}
            />

            <p className="text-sm leading-6 text-gray-400">
              VHM Finance Partners – Not Bigger. Better. Providing expert
              financial advice and fast business lending solutions powered by AI
              technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">QUICK LINKS</h3>

            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Apply for Finance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  VHM Finance Partners
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">CONTACT</h3>

            <div className="space-y-3 text-sm">
              <p>📞 02 9993 7020</p>
              <p>✉️ adviser@vhmfinancepartners.com.au</p>
              <p>🌐 vhmfinancepartners.com.au</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-500 gap-3">
          <p>
            VHM Finance Partners Pty Ltd. Australian Credit Licence holder. All
            rights reserved.
          </p>

          <p>Powered by Bele.ai • 2026</p>
        </div>
      </div>
    </footer>
  );
}
