import React from 'react';
import { BodyFitLogo } from './BodyFitLogo';
import { GYM_INFO } from '../data/gymData';
import { MessageCircle, Instagram, Phone, Mail, MapPin, ArrowUp, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-zinc-900 text-zinc-400 text-xs sm:text-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="inline-block">
              <BodyFitLogo size="sm" showText={true} />
            </a>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              <strong className="text-zinc-200">Body Fit Gym</strong> — "{GYM_INFO.tagline}" Kattappana&apos;s leading unisex multi-gym club dedicated to strength, endurance, muscle hypertrophy, and healthy living.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://wa.me/${GYM_INFO.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-emerald-500 hover:text-emerald-400 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={GYM_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-pink-500 hover:text-pink-400 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`tel:${GYM_INFO.whatsappRaw}`}
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-amber-500 hover:text-amber-400 flex items-center justify-center transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${GYM_INFO.email}`}
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-sky-500 hover:text-sky-400 flex items-center justify-center transition-colors"
                aria-label="Gmail"
                title={GYM_INFO.email}
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-display text-base font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">About Our Gym</a>
              </li>
              <li>
                <a href="#memberships" className="hover:text-amber-400 transition-colors">Membership Plans</a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-amber-400 transition-colors">Gym Facilities</a>
              </li>
              <li>
                <a href="#register" className="hover:text-amber-400 transition-colors">Online Registration</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">Contact &amp; Location</a>
              </li>
            </ul>
          </div>

          {/* Pricing Rates Snapshot */}
          <div className="space-y-3">
            <h4 className="font-display text-base font-bold uppercase tracking-wider text-white">
              Fee Structure
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex justify-between border-b border-zinc-900 pb-1">
                <span>Monthly Fee:</span>
                <span className="font-bold text-amber-400">₹600 / mo</span>
              </li>
              <li className="flex justify-between border-b border-zinc-900 pb-1">
                <span>Admission Fee:</span>
                <span className="font-bold text-zinc-300">₹500 (1-Time)</span>
              </li>
              <li className="flex justify-between border-b border-zinc-900 pb-1">
                <span>Personal Training:</span>
                <span className="font-bold text-amber-400">₹3,000 / mo</span>
              </li>
              <li className="flex justify-between pb-1">
                <span>1 Year Membership:</span>
                <span className="font-bold text-amber-400">₹6,500 / yr</span>
              </li>
            </ul>
          </div>

          {/* Hours & Address */}
          <div className="space-y-3">
            <h4 className="font-display text-base font-bold uppercase tracking-wider text-white">
              Gym Timings
            </h4>
            <div className="text-xs space-y-1.5">
              <p className="text-white font-medium">Monday to Saturday:</p>
              <p className="text-amber-400 font-bold font-mono">5:00 AM – 11:30 PM</p>
              <p className="text-white font-medium pt-1">Sunday:</p>
              <p className="text-rose-400 font-semibold">Closed (Rest &amp; Recovery)</p>
              <div className="pt-2 text-zinc-500 text-[11px]">
                {GYM_INFO.addressLine}
              </div>
              <div className="pt-1 text-[11px]">
                <a href={`mailto:${GYM_INFO.email}`} className="text-zinc-400 hover:text-amber-400 transition-colors">
                  {GYM_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © {currentYear} {GYM_INFO.name}. All rights reserved. {GYM_INFO.fullName}.
          </div>

          <div className="flex items-center gap-6">
            <span>Built for Athletes &amp; Everyday Achievers</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors cursor-pointer border border-zinc-800"
              aria-label="Scroll to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-amber-400" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
