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

            <div className="space-y-2">
              <p className="text-sm font-semibold text-white">
                Kredo – Backing business is our Kredo.
              </p>
              <p className="text-sm leading-6 text-gray-400">
                Providing expert business cashflow solutions powered by over 100 years combined broker experience and supported by the latest AI technology.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">QUICK LINKS</h3>

            <ul className="space-y-2 text-sm">
              <li>
                <a href="/application" className="hover:text-white">
                  Apply for Finance
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">CONTACT</h3>

            <div className="space-y-3 text-sm">
              <p>📞 0400 212 777</p>
              <p>
                ✉️ <a className="hover:text-white hover:underline transition-colors">asset@vhmpartners.com.au</a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-4 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between text-sm text-gray-500 gap-3">
          <p>
            © {new Date().getFullYear()} Kredo. All rights reserved.
          </p>

          <p>Powered by Bele.ai • 2026</p>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 pt-8 text-xs text-gray-500 text-center space-y-3">
          <h3 className="text-white text-bold">Disclaimer</h3>
          <p>VHM Asset Finance ABN 96 661 380 150 trading as Kredo</p>
          <p>VHM Asset Finance Credit Representative 542867 is authorised under Australian Credit Licence 389328.</p>
          <p className="leading-relaxed text-left md:text-center">
            This page provides general information only and has been prepared without taking into account your objectives, financial situation or needs. We recommend that you consider whether it is appropriate for your circumstances and your full financial situation will need to be reviewed prior to acceptance of any offer or product. It does not constitute legal, tax or financial advice and you should always seek professional advice in relation to your individual circumstances.
          </p>
        </div>
      </div>
    </footer>
  );
}
