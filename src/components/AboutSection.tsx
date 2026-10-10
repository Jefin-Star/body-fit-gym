import React from 'react';
import { GYM_INFO } from '../data/gymData';
import { Dumbbell, Users, Zap, ShieldCheck, HeartPulse, Trophy, ArrowRight } from 'lucide-react';
import aboutImage from '../assets/images/bodyfit_training_about_1791633165010.jpg';

export const AboutSection: React.FC = () => {
  const highlights = [
    {
      icon: Dumbbell,
      title: 'Heavy Strength & Iron Training',
      description: 'Precision dumbbells, power racks, Olympic barbells, and multi-gym resistance cables calibrated for serious gains.',
    },
    {
      icon: Users,
      title: 'Supportive Unisex Culture',
      description: 'An inclusive, disciplined, and welcoming space where both beginners and advanced lifters thrive without judgment.',
    },
    {
      icon: HeartPulse,
      title: 'Endurance & Cardio Deck',
      description: 'State-of-the-art commercial treadmills, cycling, and stamina equipment to elevate cardiovascular health and fat loss.',
    },
    {
      icon: Trophy,
      title: 'Certified Personal Trainers',
      description: 'Experienced coaches providing form correction, custom workout splits, and dedicated 1-on-1 personal training.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-zinc-950 relative border-t border-zinc-900 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            About Body Fit Gym
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white">
            Built For Results. <span className="text-amber-500">Fueled By Passion.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
            Welcome to <strong className="text-zinc-200">{GYM_INFO.fullName}</strong> — Kattappana&apos;s 
            standard for comprehensive fitness, body sculpting, and lasting health transformations.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image with Stats Overlay */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl group">
              <img
                src={aboutImage}
                alt="Body Fit Gym Strength Training in Action"
                className="w-full h-[440px] sm:h-[500px] object-cover object-center filter contrast-105 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
              
              {/* Badge overlay on image */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-zinc-900/90 backdrop-blur-md border border-zinc-700/80">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-display text-xl font-bold uppercase tracking-wide text-white">
                      Daily Discipline • Real Results
                    </h4>
                    <p className="text-xs text-zinc-400 mt-1">
                      Open 5:00 AM – 11:30 PM (Mon to Sat) • Kattappana
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <Zap className="w-5 h-5 fill-amber-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="hidden sm:flex absolute -top-5 -left-5 bg-gradient-to-br from-zinc-900 to-zinc-950 border border-amber-500/40 rounded-xl p-4 shadow-xl items-center gap-3">
              <div className="font-display text-3xl font-black text-amber-400">#1</div>
              <div className="text-xs font-semibold text-zinc-300 uppercase leading-snug">
                Unisex Multi Gym<br /><span className="text-zinc-500">In Kattappana</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Feature Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div className="prose prose-invert">
              <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-wide text-white">
                More Than Just A Gym. It&apos;s Your Transformation Sanctuary.
              </h3>
              <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
                At <strong>Body Fit Gym</strong>, we believe everyone has the potential to build unstoppable physical 
                strength and mental resilience. Whether your ambition is gaining lean muscle, shedding stubborn weight, 
                enhancing functional mobility, or preparing for athletics, our state-of-the-art facility provides the 
                tools and positive atmosphere you need to succeed.
              </p>
              <p className="text-zinc-400 leading-relaxed text-sm">
                With flexible operating hours from <strong>5:00 AM early mornings until 11:30 PM late nights</strong>, 
                you can always find time to prioritize your health, no matter how demanding your work or study schedule.
              </p>
            </div>

            {/* 4 Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-amber-500/40 transition-colors duration-200"
                  >
                    <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-3">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h4 className="font-semibold text-white text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="#memberships"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-sm uppercase tracking-wider transition-colors shadow-lg shadow-amber-500/10"
              >
                <span>Explore Memberships</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700/80 font-medium text-sm transition-colors"
              >
                <span>Visit Us in Kattappana</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
