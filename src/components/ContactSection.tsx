import React from 'react';
import { GYM_INFO, getGymOpenStatus } from '../data/gymData';
import { 
  Phone, MessageCircle, Mail, Instagram, MapPin, 
  Clock, Navigation, ExternalLink, Calendar, Check
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const status = getGymOpenStatus();

  return (
    <section id="contact" className="py-24 bg-zinc-950 relative border-t border-zinc-900">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
            <MapPin className="w-3.5 h-3.5" />
            Connect &amp; Visit Us
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white">
            Contact <span className="text-amber-500">Body Fit Gym</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Have questions about fees, personal training, or workout slots? Reach out to us or drop by our facility in Kattappana.
          </p>
        </div>

        {/* 2-Column Layout: Contact Channels & Google Maps Embed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* WhatsApp Card */}
            <a
              href={`https://wa.me/${GYM_INFO.whatsappRaw}?text=${encodeURIComponent("Hello Body Fit Gym! I'd like to get more information about joining.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-5 rounded-2xl bg-zinc-900/70 border border-zinc-800/80 hover:border-emerald-500/60 hover:bg-zinc-900 transition-all duration-200 group block shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform shrink-0">
                <MessageCircle className="w-6 h-6 fill-emerald-500/20" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">WhatsApp Chat</span>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
                </div>
                <div className="text-lg font-bold text-white mt-0.5 group-hover:text-emerald-300 transition-colors">
                  {GYM_INFO.whatsappNumber}
                </div>
                <p className="text-xs text-zinc-400 mt-1">Instant message for fee inquiries &amp; enrollment.</p>
              </div>
            </a>

            {/* Phone Call Card */}
            <a
              href={`tel:${GYM_INFO.whatsappRaw}`}
              className="flex items-start gap-4 p-5 rounded-2xl bg-zinc-900/70 border border-zinc-800/80 hover:border-amber-500/60 hover:bg-zinc-900 transition-all duration-200 group block shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Direct Phone Call</span>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-amber-400 transition-colors" />
                </div>
                <div className="text-lg font-bold text-white mt-0.5 group-hover:text-amber-300 transition-colors">
                  +91 {GYM_INFO.whatsappNumber}
                </div>
                <p className="text-xs text-zinc-400 mt-1">Speak directly with our gym manager.</p>
              </div>
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${GYM_INFO.email}?subject=${encodeURIComponent("Inquiry about Body Fit Gym Membership")}`}
              className="flex items-start gap-4 p-5 rounded-2xl bg-zinc-900/70 border border-zinc-800/80 hover:border-sky-500/60 hover:bg-zinc-900 transition-all duration-200 group block shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-400">Gmail Address</span>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-sky-400 transition-colors" />
                </div>
                <div className="text-base font-bold text-white mt-0.5 truncate group-hover:text-sky-300 transition-colors">
                  {GYM_INFO.email}
                </div>
                <p className="text-xs text-zinc-400 mt-1">Send official inquiries or registration details.</p>
              </div>
            </a>

            {/* Instagram Card */}
            <a
              href={GYM_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-5 rounded-2xl bg-zinc-900/70 border border-zinc-800/80 hover:border-pink-500/60 hover:bg-zinc-900 transition-all duration-200 group block shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-pink-500/20 to-amber-500/20 border border-pink-500/30 flex items-center justify-center text-pink-400 group-hover:scale-105 transition-transform shrink-0">
                <Instagram className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-pink-400">Instagram Handle</span>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-pink-400 transition-colors" />
                </div>
                <div className="text-base font-bold text-white mt-0.5 group-hover:text-pink-300 transition-colors">
                  {GYM_INFO.instagramHandle}
                </div>
                <p className="text-xs text-zinc-400 mt-1">Follow for daily workout reels, motivation &amp; member transformations.</p>
              </div>
            </a>

            {/* Operating Hours Card */}
            <div className="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                  <Clock className="w-4 h-4" />
                  <span>Gym Working Hours</span>
                </div>
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
                  status.isOpen ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' : 'bg-rose-500/10 text-rose-400 border border-rose-500/30'
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${status.isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-rose-400'}`} />
                  {status.statusText}
                </span>
              </div>
              
              <div className="space-y-2 text-xs text-zinc-300">
                <div className="flex justify-between items-center py-1 border-b border-zinc-800">
                  <span className="font-medium text-white">Monday – Saturday:</span>
                  <span className="font-bold text-amber-400 font-mono text-sm">{GYM_INFO.timings.weekdays}</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="font-medium text-white">Sunday:</span>
                  <span className="font-bold text-rose-400 uppercase tracking-wide">{GYM_INFO.timings.sunday}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Embed Card */}
          <div className="lg:col-span-7 flex flex-col h-full space-y-4">
            <div className="p-6 rounded-3xl bg-zinc-900/70 border border-zinc-800 shadow-2xl flex-1 flex flex-col">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    Physical Location
                  </span>
                  <h3 className="font-display text-2xl font-bold uppercase text-white mt-1">
                    {GYM_INFO.fullName}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Kattappana, Idukki District, Kerala
                  </p>
                </div>

                <a
                  href="https://maps.google.com/?q=BODY+FIT+UNISEX+MULTI+GYM+%26+HEALTH+CLUB+Kattappana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-bold uppercase tracking-wider text-zinc-200 hover:text-white transition-colors shrink-0"
                >
                  <Navigation className="w-3.5 h-3.5 text-amber-400" />
                  <span>Get Directions</span>
                </a>
              </div>

              {/* Map Iframe Container */}
              <div className="w-full flex-1 min-h-[380px] sm:min-h-[420px] rounded-2xl overflow-hidden border border-zinc-800 relative bg-zinc-950">
                <iframe
                  src={GYM_INFO.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Body Fit Unisex Multi Gym & Health Club Location Map"
                  className="w-full h-full min-h-[380px] sm:min-h-[420px]"
                />
              </div>

              <div className="mt-4 pt-4 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-400" />
                  Easy parking &amp; central road accessibility
                </span>
                <span className="text-zinc-500">
                  Landmark: Kattappana, Kerala
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
