import React from 'react';
import { Dumbbell, Shield, Sparkles, CheckCircle2 } from 'lucide-react';
import cardioImage from '../assets/images/bodyfit_cardio_equipment_1791633211775.jpg';
import heroImage from '../assets/images/bodyfit_gym_hero_1791633145204.jpg';

export const FacilitiesSection: React.FC = () => {
  const facilityList = [
    {
      title: 'Free Weights & Dumbbells Arena',
      desc: 'Extensive dumbbell racks from 2.5kg to 45kg+, Olympic barbells, calibrated iron plates, and adjustable flat/incline benches.',
      tag: 'Strength & Mass',
    },
    {
      title: 'Commercial Cardio Deck',
      desc: 'Top-tier treadmills with speed & incline control, spin cycles, and stamina stations for peak cardiovascular health.',
      tag: 'Endurance & Fat Loss',
    },
    {
      title: 'Multi-Station Gym Machines',
      desc: 'Cable crossovers, lat pulldowns, seated cable rows, leg extension/curls, and chest press machines for isolated hypertrophy.',
      tag: 'Pin-Loaded Machines',
    },
    {
      title: 'Powerlifting & Squat Racks',
      desc: 'Heavy-duty steel power racks, safety spotter arms, deadlift platforms, and pull-up bars built for heavy compound lifts.',
      tag: 'Compound Power',
    },
    {
      title: 'Unisex Multi-Gym & Locker Club',
      desc: 'Clean, respectful, and hygienic training environment with personal locker compartments and dedicated changing spaces.',
      tag: 'Comfort & Hygiene',
    },
    {
      title: '1-on-1 Personal Training Bay',
      desc: 'Dedicated coaching area for biomechanics assessment, form correction, mobility routines, and targeted personal training.',
      tag: 'Personalized Coaching',
    },
  ];

  return (
    <section id="facilities" className="py-24 bg-zinc-950 relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Modern Equipment &amp; Amenities
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white">
            World-Class <span className="text-amber-500">Facilities</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Engineered for high performance. Every piece of equipment at Body Fit Gym is chosen for safety, biomechanics, and results.
          </p>
        </div>

        {/* Visual Showcase: Dual Photography */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl group h-80 sm:h-96">
            <img
              src={cardioImage}
              alt="Body Fit Gym Modern Cardio & Treadmill Zone"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs uppercase font-bold tracking-widest text-amber-400">Cardio &amp; Stamina Deck</span>
              <h3 className="font-display text-2xl font-black uppercase text-white mt-1">High-Performance Treadmills &amp; Cycles</h3>
              <p className="text-xs text-zinc-300 mt-1">Spacious, air-conditioned zone for stamina, calorie burning, and HIIT workouts.</p>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl group h-80 sm:h-96">
            <img
              src={heroImage}
              alt="Body Fit Gym Free Weights & Power Racks"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs uppercase font-bold tracking-widest text-amber-400">Heavy Strength Bay</span>
              <h3 className="font-display text-2xl font-black uppercase text-white mt-1">Heavy Iron, Power Racks &amp; Barbells</h3>
              <p className="text-xs text-zinc-300 mt-1">Solid rubber flooring and industrial strength gear for serious powerlifters &amp; bodybuilders.</p>
            </div>
          </div>
        </div>

        {/* Facility feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilityList.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 hover:border-amber-500/40 hover:bg-zinc-900/80 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-zinc-800 text-amber-400 group-hover:bg-amber-500/20 transition-colors">
                  {item.tag}
                </span>
                <div className="w-8 h-8 rounded-lg bg-zinc-800 text-zinc-400 group-hover:text-amber-400 flex items-center justify-center transition-colors">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>
              <h4 className="font-display text-xl font-bold uppercase tracking-wide text-white mb-2">
                {item.title}
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
