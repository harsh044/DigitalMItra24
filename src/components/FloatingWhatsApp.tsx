import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { CONTACT_INFO } from '../data/servicesData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-slate-800 text-xs font-semibold py-2 px-3.5 rounded-xl shadow-lg border border-slate-200">
          <span>Need help with any service?</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 ml-1"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Button */}
      <a
        href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent('Hello Digital Mitra, I need assistance with a digital service.')}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Digital Mitra on WhatsApp"
        className="w-14 h-14 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300"
      >
        <MessageSquare className="w-7 h-7" />
      </a>
    </div>
  );
};
