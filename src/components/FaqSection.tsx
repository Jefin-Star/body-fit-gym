import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Dumbbell } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What are the gym operating hours at Body Fit Gym?',
      a: `Body Fit Gym is open from 5:00 AM to 11:30 PM, Monday through Saturday. We are closed on Sunday for deep sanitization, equipment maintenance, and muscular rest & recovery.`,
    },
    {
      q: 'Is Body Fit Gym a unisex facility?',
      a: `Yes! Body Fit Gym is an official Unisex Multi Gym & Health Club. We provide a respectful, motivating, and secure workout environment for both male and female fitness enthusiasts of all ages and levels.`,
    },
    {
      q: 'How does the pricing and admission fee work?',
      a: `Our monthly fee is ₹600. For new members joining for the first time, there is a one-time admission fee of ₹500 for onboarding and setup. If you choose our 1 Year Membership at ₹6,500, you save significantly over monthly renewals!`,
    },
    {
      q: 'What does the Personal Training (₹3,000) package include?',
      a: `Personal Training gives you dedicated 1-on-1 coaching with an experienced certified trainer. It includes customized hypertrophy or fat loss workout programming, daily form correction, posture assessment, diet & nutrition counseling, and continuous progress tracking.`,
    },
    {
      q: 'Do I need prior gym experience before joining?',
      a: `Not at all. Our floor coaches and friendly gym community are always ready to guide beginners through machine adjustments, proper lifting mechanics, and safe warmup routines.`,
    },
    {
      q: 'Where is Body Fit Gym located in Kattappana?',
      a: `We are located at BODY FIT UNISEX MULTI GYM & HEALTH CLUB in Kattappana, Kerala. Check the map section above for directions or call us directly at 98953 93009.`,
    },
  ];

  return (
    <section className="py-20 bg-zinc-950 relative border-t border-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            Frequently Asked Questions
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white">
            Common Questions <span className="text-amber-500">Answered</span>
          </h2>
          <p className="mt-2 text-sm text-zinc-400">
            Everything you need to know about joining Body Fit Gym.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-zinc-900/60 border border-zinc-800/80 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-semibold text-white hover:text-amber-400 transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs flex items-center justify-center font-bold">
                      {idx + 1}
                    </span>
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-zinc-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 text-amber-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-400 leading-relaxed border-t border-zinc-800/50">
                    <p className="pl-9">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
