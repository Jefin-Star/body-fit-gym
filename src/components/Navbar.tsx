import React, { useState, useEffect } from 'react';
import { BodyFitLogo } from './BodyFitLogo';
import { GYM_INFO, getGymOpenStatus } from '../data/gymData';
import { Phone, MessageCircle, Menu, X, Clock, MapPin } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [status, setStatus] = useState(getGymOpenStatus());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // Update status every minute
    const interval = setInterval(() => {
      setStatus(getGymOpenStatus());
    }, 60000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Plans & Pricing', href: '#memberships' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Register', href: '#register' },
    { name: 'Location & Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 shadow-2xl py-3'
          : 'bg-gradient-to-b from-black/90 via-black/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <BodyFitLogo size="sm" showText={true} />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-300 hover:text-amber-400 transition-colors tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right: Status + WhatsApp CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs">
              <span className={`w-2 h-2 rounded-full ${status.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'}`} />
              <span className="font-medium text-zinc-300">{status.statusText}</span>
              <span className="text-zinc-500">|</span>
              <span className="text-zinc-400">5am - 11:30pm</span>
            </div>

            <a
              href={`https://wa.me/${GYM_INFO.whatsappRaw}?text=${encodeURIComponent("Hello Body Fit Gym! I would like to inquire about gym membership.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-lg shadow-amber-500/20 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-zinc-950" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={`https://wa.me/${GYM_INFO.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-amber-500 text-zinc-950"
              aria-label="WhatsApp Body Fit Gym"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950/98 border-b border-zinc-800 backdrop-blur-xl px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-xs">
            <span className={`w-2 h-2 rounded-full ${status.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'}`} />
            <span className="font-semibold text-zinc-200">{status.statusText}</span>
            <span className="text-zinc-500">·</span>
            <span className="text-zinc-400">{status.subText}</span>
          </div>

          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-zinc-300 hover:text-amber-400 hover:bg-zinc-900/60 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-zinc-900 flex flex-col gap-2">
            <a
              href={`https://wa.me/${GYM_INFO.whatsappRaw}?text=${encodeURIComponent("Hello Body Fit Gym! I'd like to join.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 bg-amber-500 hover:bg-amber-400 text-zinc-950 rounded-lg font-bold text-sm uppercase tracking-wider"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp ({GYM_INFO.whatsappNumber})
            </a>
            <a
              href={`tel:${GYM_INFO.whatsappRaw}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-200 rounded-lg font-medium text-sm"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              Call {GYM_INFO.whatsappNumber}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
