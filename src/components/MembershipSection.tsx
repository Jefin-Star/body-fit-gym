import React from 'react';
import { MEMBERSHIP_PLANS, MembershipPlan } from '../data/gymData';
import { Flame, Sparkles, ArrowRight } from 'lucide-react';

interface MembershipSectionProps {
  onSelectPlan?: (planId: string) => void;
}

export const MembershipSection: React.FC<MembershipSectionProps> = ({ onSelectPlan }) => {
  const handleJoinClick = (planId: string) => {
    if (onSelectPlan) {
      onSelectPlan(planId);
    }
    const element = document.getElementById('register');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="memberships" className="py-24 bg-zinc-950 relative border-t border-zinc-900">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-zinc-800/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Clear &amp; Transparent Rates
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white">
            Membership <span className="text-amber-500">Plans</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed">
            World-class multi-gym facilities at accessible rates. Choose the plan that aligns with your fitness journey.
          </p>
        </div>

        {/* Pricing Cards Grid (4 Cards: Monthly, Admission, PT, 1 Year) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {MEMBERSHIP_PLANS.map((plan: MembershipPlan) => {
            const isFeatured = plan.popular;

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between rounded-2xl p-6 transition-all duration-300 ${
                  isFeatured
                    ? 'bg-gradient-to-b from-zinc-900 via-zinc-900/95 to-zinc-950 border-2 border-amber-500 shadow-[0_0_40px_rgba(245,158,11,0.2)] scale-[1.02] lg:-translate-y-2'
                    : 'bg-zinc-900/60 hover:bg-zinc-900/90 border border-zinc-800/80 hover:border-zinc-700 shadow-xl'
                }`}
              >
                {/* Popular or Category Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-md ${
                        isFeatured
                          ? 'bg-amber-500 text-zinc-950'
                          : 'bg-zinc-800 text-amber-400 border border-zinc-700'
                      }`}
                    >
                      {isFeatured && <Flame className="w-3.5 h-3.5 fill-zinc-950" />}
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Tag */}
                  <div className="mt-2 mb-4">
                    <h3 className="font-display text-2xl font-black uppercase tracking-wide text-white">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1.5 min-h-[32px] leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="py-4 my-2 border-y border-zinc-800/80">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-amber-400">₹</span>
                      <span className="font-display text-5xl font-black tracking-tight text-white">
                        {plan.price.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <span className="text-xs text-zinc-400 font-medium block mt-1 uppercase tracking-wider">
                      {plan.period}
                    </span>
                  </div>

                </div>

                {/* Join Now Button */}
                <div className="pt-4 mt-auto">
                  <button
                    onClick={() => handleJoinClick(plan.id)}
                    className={`w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 active:scale-95 cursor-pointer ${
                      isFeatured
                        ? 'bg-amber-500 hover:bg-amber-400 text-zinc-950 shadow-lg shadow-amber-500/25'
                        : 'bg-zinc-800 hover:bg-zinc-700 text-white hover:text-amber-300 border border-zinc-700'
                    }`}
                  >
                    <span>Join Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Joining & Admission */}
        <div className="mt-12 p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 text-center max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <h4 className="font-semibold text-white text-sm">First Time at Body Fit Gym?</h4>
              <p className="text-xs text-zinc-400 mt-0.5">
                New admissions include our ₹500 one-time setup fee. Opt for the 1 Year Membership to unlock maximum savings!
              </p>
            </div>
            <a
              href="#register"
              className="shrink-0 px-5 py-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-amber-300 transition-colors"
            >
              Register Online
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
