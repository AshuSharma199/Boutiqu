import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/917868954522" // ✅ your WhatsApp number here (with country code, no + or spaces)
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-50"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsAppButton;
