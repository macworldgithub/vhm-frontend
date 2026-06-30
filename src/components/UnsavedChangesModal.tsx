import React from "react";
import { useRouter } from "next/navigation";
import { AlertCircle, Phone, Send, X } from "lucide-react";

interface UnsavedChangesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContinueExit: () => void;
  onTalkToSomeone: () => void;
  phoneNumber?: string;
}

export default function UnsavedChangesModal({
  isOpen,
  onClose,
  onContinueExit,
  onTalkToSomeone,
  phoneNumber = "+61 1234 567 890",
}: UnsavedChangesModalProps) {
  const router = useRouter();

  if (!isOpen) return null;

  const handleWhatsApp = () => {
    const message =
      "Hi, I'd like to discuss my financing options. I had started an application.";
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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#02335C] to-[#034a80] text-white p-6 flex items-start justify-between">
          <div className="flex items-start gap-3">
            <AlertCircle size={24} className="mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-bold">Hold On!</h2>
              <p className="text-sm text-blue-100 mt-1">
                You have unsaved changes
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-[#034a80] rounded p-1"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-[#374151] mb-6">
            Would you like to talk to someone about your financing needs before
            you go?
          </p>

          {/* Contact Options */}
          <div className="space-y-3 mb-6">
            <button
              onClick={handleWhatsApp}
              className="w-full flex items-center gap-3 p-3 rounded-lg border-2 border-[#25D366] hover:bg-[#f0f9f6] transition"
            >
              <div className="bg-[#25D366] text-white p-2 rounded-lg flex-shrink-0">
                <MessageCircle size={18} />
              </div>
              <div className="text-left">
                <p className="font-medium text-[#111827]">
                  Message on WhatsApp
                </p>
                <p className="text-xs text-[#64748b]">Chat with our team</p>
              </div>
            </button>

            <button
              onClick={handleCall}
              className="w-full flex items-center gap-3 p-3 rounded-lg border-2 border-[#02335C] hover:bg-[#f0f3f7] transition"
            >
              <div className="bg-[#02335C] text-white p-2 rounded-lg flex-shrink-0">
                <Phone size={18} />
              </div>
              <div className="text-left">
                <p className="font-medium text-[#111827]">Call Us</p>
                <p className="text-xs text-[#64748b]">{phoneNumber}</p>
              </div>
            </button>

            <button
              onClick={handleSendMessage}
              className="w-full flex items-center gap-3 p-3 rounded-lg border-2 border-[#8B5CF6] hover:bg-[#f5f3ff] transition"
            >
              <div className="bg-[#8B5CF6] text-white p-2 rounded-lg flex-shrink-0">
                <Send size={18} />
              </div>
              <div className="text-left">
                <p className="font-medium text-[#111827]">Send Message</p>
                <p className="text-xs text-[#64748b]">Contact form</p>
              </div>
            </button>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={onContinueExit}
              className="w-full py-2 px-4 border-2 border-[#e5e7eb] text-[#374151] font-medium rounded-lg hover:bg-[#f9fafb] transition"
            >
              Continue Anyway
            </button>
            <button
              onClick={onClose}
              className="w-full py-2 px-4 bg-[#02335C] text-white font-medium rounded-lg hover:bg-[#034a80] transition"
            >
              Go Back to Application
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function MessageCircle({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
    </svg>
  );
}
