import React, { useState, useEffect } from 'react';
import { GYM_INFO } from '../data/gymData';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show polite tooltip after 4 seconds to assist visitors
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {showTooltip && (
        <div className="mb-2 p-3 bg-zinc-900 border border-zinc-700 text-zinc-100 rounded-2xl shadow-2xl text-xs max-w-xs animate-in fade-in slide-in-from-bottom-2 relative">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 text-zinc-400 hover:text-white p-0.5"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="font-bold text-amber-400 mb-0.5">Need help joining Body Fit Gym?</div>
          <p className="text-zinc-300 text-[11px] leading-tight">
            Chat directly with our manager on WhatsApp: {GYM_INFO.whatsappNumber}
          </p>
        </div>
      )}

      <a
        href={`https://wa.me/${GYM_INFO.whatsappRaw}?text=${encodeURIComponent("Hello Body Fit Gym! I want to inquire about membership and gym timings.")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 p-3.5 sm:px-4 sm:py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-[0_8px_30px_rgba(16,185,129,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label="Chat on WhatsApp with Body Fit Gym"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="hidden sm:inline font-bold text-xs uppercase tracking-wider text-zinc-950">
          WhatsApp Us
        </span>
      </a>
    </div>
  );
};
