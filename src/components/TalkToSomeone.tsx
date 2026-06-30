import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { MessageCircle, Phone, Send, X } from "lucide-react";

interface TalkToSomeoneProps {
  phoneNumber?: string;
}

export default function TalkToSomeone({
  phoneNumber = "+61 1234 567 890",
}: TalkToSomeoneProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const handleWhatsApp = () => {
    const message = "Hi, I'd like to discuss my financing options.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleSendMessage = () => {
    router.push("/contact");
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setShowOptions(!showOptions)}
        className="fixed bottom-6 right-6 z-40 bg-[#02335C] hover:bg-[#034a80] text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
        aria-label="Talk to someone"
      >
        <MessageCircle size={24} />
      </button>

      {/* Options Popup */}
      {showOptions && (
        <div className="fixed bottom-24 right-6 z-40 bg-white rounded-xl shadow-xl border border-[#e5e7eb] overflow-hidden w-64">
          <div className="bg-[#02335C] text-white p-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Talk to Someone</h3>
              <button
                onClick={() => setShowOptions(false)}
                className="hover:bg-[#034a80] rounded p-1"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          <div className="p-4 space-y-3">
            <button
              onClick={handleWhatsApp}
              className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-[#f3f4f6] transition text-left"
            >
              <div className="bg-[#25D366] text-white p-2 rounded-lg">
                <MessageCircle size={18} />
              </div>
              <div>
                <p className="font-medium text-[#111827]">WhatsApp</p>
                <p className="text-xs text-[#64748b]">Chat with us</p>
              </div>
            </button>

            <button
              onClick={handleCall}
              className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-[#f3f4f6] transition text-left"
            >
              <div className="bg-[#02335C] text-white p-2 rounded-lg">
                <Phone size={18} />
              </div>
              <div>
                <p className="font-medium text-[#111827]">Call Us</p>
                <p className="text-xs text-[#64748b]">{phoneNumber}</p>
              </div>
            </button>

            <button
              onClick={handleSendMessage}
              className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-[#f3f4f6] transition text-left"
            >
              <div className="bg-[#8B5CF6] text-white p-2 rounded-lg">
                <Send size={18} />
              </div>
              <div>
                <p className="font-medium text-[#111827]">Send Message</p>
                <p className="text-xs text-[#64748b]">Contact form</p>
              </div>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
