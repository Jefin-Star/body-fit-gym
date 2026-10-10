import React from 'react';
import { BodyFitLogo } from './BodyFitLogo';
import { GYM_INFO, getGymOpenStatus } from '../data/gymData';
import { ArrowRight, Sparkles, Shield, Clock, Dumbbell, Award, Flame } from 'lucide-react';
import heroBgImage from '../assets/images/bodyfit_gym_hero_1791633145204.jpg';

export const Hero: React.FC = () => {
  const status = getGymOpenStatus();

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background Image with Dark Vignette & Atmospheric Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBgImage}
          alt="Body Fit Gym Interior Strength Training"
          className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-110 scale-105 transform animate-fade-in"
        />
        {/* Deep ambient dark overlays & warm lighting highlights */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/65 to-zinc-950/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-transparent to-zinc-950/90" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Badges / Hours Pill */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-zinc-900/80 backdrop-blur-md border border-zinc-700/60 mb-6 text-xs sm:text-sm text-zinc-300 shadow-xl">
          <span className="flex items-center gap-1.5 text-amber-400 font-semibold uppercase tracking-wider text-xs">
            <Flame className="w-4 h-4 fill-amber-400" />
            Unisex Multi Gym &amp; Health Club
          </span>
          <span className="text-zinc-600">·</span>
          <span className="flex items-center gap-1.5 text-zinc-300">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            5:00 AM – 11:30 PM (Sun Off)
          </span>
        </div>

        {/* Large Logo Emblem Centerpiece */}
        <div className="mb-4">
          <BodyFitLogo size="lg" showText={false} variant="gold" />
        </div>

        {/* Gym Name Heading */}
        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-[0.95] mb-5">
          BODY FIT <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 drop-shadow-[0_4px_25px_rgba(245,158,11,0.4)]">GYM</span>
        </h1>

        {/* Powerful Fitness Tagline */}
        <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-zinc-200 tracking-wide mb-6 max-w-3xl">
          "Build Your Strength. Transform Your Life."
        </p>

        {/* Subtitle / Intro note */}
        <p className="text-zinc-400 text-sm sm:text-base max-w-2xl leading-relaxed mb-9">
          Kattappana&apos;s premier strength and fitness destination. Heavy iron, Olympic barbells, 
          dedicated cardio deck, and personalized coaching designed to push your limits.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-14">
          <a
            href="#register"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-zinc-950 font-extrabold text-base uppercase tracking-wider shadow-[0_10px_35px_rgba(245,158,11,0.35)] transition-all duration-200 hover:scale-[1.02] active:scale-95"
          >
            <span>Join Now</span>
            <ArrowRight className="w-5 h-5 text-zinc-950" />
          </a>

          <a
            href="#memberships"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/80 hover:border-amber-500/50 text-white font-bold text-base tracking-wider transition-all duration-200 hover:text-amber-300 backdrop-blur-md"
          >
            <Dumbbell className="w-4 h-4 text-amber-400" />
            <span>View Membership Plans</span>
          </a>
        </div>

        {/* Bottom Feature Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 w-full max-w-4xl pt-6 border-t border-zinc-800/80">
          <div className="flex flex-col items-center p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/60">
            <span className="font-display text-2xl sm:text-3xl font-extrabold text-amber-400">₹600</span>
            <span className="text-xs text-zinc-400 font-medium">Affordable Monthly Fee</span>
          </div>

          <div className="flex flex-col items-center p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/60">
            <span className="font-display text-2xl sm:text-3xl font-extrabold text-white">5 AM – 11:30 PM</span>
            <span className="text-xs text-zinc-400 font-medium">Flexible Extended Hours</span>
          </div>

          <div className="flex flex-col items-center p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/60">
            <span className="font-display text-2xl sm:text-3xl font-extrabold text-amber-400">1-on-1 PT</span>
            <span className="text-xs text-zinc-400 font-medium">Personal Training (₹3,000)</span>
          </div>

          <div className="flex flex-col items-center p-3 rounded-lg bg-zinc-900/40 border border-zinc-800/60">
            <span className="font-display text-2xl sm:text-3xl font-extrabold text-white">100% Unisex</span>
            <span className="text-xs text-zinc-400 font-medium">Safe &amp; Supportive Club</span>
          </div>
        </div>
      </div>
    </section>
  );
};
