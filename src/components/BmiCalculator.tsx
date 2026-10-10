import React, { useState } from 'react';
import { Calculator, Sparkles, Dumbbell, ArrowRight, Activity } from 'lucide-react';

interface BmiCalculatorProps {
  onSelectPlan?: (planId: string) => void;
}

export const BmiCalculator: React.FC<BmiCalculatorProps> = ({ onSelectPlan }) => {
  const [height, setHeight] = useState('175');
  const [weight, setWeight] = useState('72');
  const [age, setAge] = useState('25');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [activity, setActivity] = useState<'moderate' | 'intense' | 'beginner'>('moderate');

  const h = parseFloat(height) / 100;
  const w = parseFloat(weight);

  let bmi = 0;
  let category = '';
  let color = 'text-emerald-400';
  let advice = '';
  let suggestedPlan = 'monthly';
  let suggestedPlanLabel = 'Monthly Fee (₹600)';

  if (h > 0 && w > 0) {
    bmi = parseFloat((w / (h * h)).toFixed(1));
    if (bmi < 18.5) {
      category = 'Underweight (Hypertrophy Recommended)';
      color = 'text-sky-400';
      advice = 'Focus on progressive overload compound lifting and caloric surplus nutrition at Body Fit Gym.';
      suggestedPlan = 'personal_training';
      suggestedPlanLabel = 'Personal Training (₹3,000) for structured mass gain';
    } else if (bmi < 24.9) {
      category = 'Healthy / Normal Weight';
      color = 'text-emerald-400';
      advice = 'Ideal baseline! Maintain tone, optimize muscle-to-fat ratio, and boost strength with regular workouts.';
      suggestedPlan = 'annual';
      suggestedPlanLabel = '1 Year Membership (₹6,500) for consistent progress';
    } else if (bmi < 29.9) {
      category = 'Overweight (Fat Loss & Conditioning)';
      color = 'text-amber-400';
      advice = 'Combine resistance training on our multi-gym machines with our cardio deck for accelerated fat burn.';
      suggestedPlan = 'monthly';
      suggestedPlanLabel = 'Monthly Fee (₹600) + Cardio Deck';
    } else {
      category = 'Obese Range (High Priority Transformation)';
      color = 'text-rose-400';
      advice = 'Personalized 1-on-1 coaching is highly recommended to protect joints and ensure sustainable, healthy fat loss.';
      suggestedPlan = 'personal_training';
      suggestedPlanLabel = 'Personal Training (₹3,000) for dedicated coach support';
    }
  }

  const handleApplyPlan = () => {
    if (onSelectPlan) {
      onSelectPlan(suggestedPlan);
    }
    const element = document.getElementById('register');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-zinc-950/90 relative border-t border-zinc-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-8 pb-8 border-b border-zinc-800">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
                <Activity className="w-3.5 h-3.5" />
                Fitness Assessment Tool
              </div>
              <h3 className="font-display text-3xl sm:text-4xl font-black uppercase text-white">
                Check Your <span className="text-amber-500">BMI &amp; Ideal Plan</span>
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-xl">
                Quickly evaluate your body mass index and discover which Body Fit Gym training program aligns with your goals.
              </p>
            </div>

            <div className="flex items-center gap-2 bg-zinc-950/80 p-1.5 rounded-xl border border-zinc-800">
              <button
                type="button"
                onClick={() => setGender('male')}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase transition-colors cursor-pointer ${gender === 'male' ? 'bg-amber-500 text-zinc-950' : 'text-zinc-400 hover:text-white'}`}
              >
                Male
              </button>
              <button
                type="button"
                onClick={() => setGender('female')}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase transition-colors cursor-pointer ${gender === 'female' ? 'bg-amber-500 text-zinc-950' : 'text-zinc-400 hover:text-white'}`}
              >
                Female
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Input Sliders & Inputs */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex justify-between items-center text-xs font-semibold text-zinc-300 mb-2">
                  <span>Height:</span>
                  <span className="font-mono text-amber-400 text-sm font-bold">{height} cm</span>
                </div>
                <input
                  type="range"
                  min="120"
                  max="220"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-full accent-amber-500 bg-zinc-800 h-2 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between items-center text-xs font-semibold text-zinc-300 mb-2">
                  <span>Weight:</span>
                  <span className="font-mono text-amber-400 text-sm font-bold">{weight} kg</span>
                </div>
                <input
                  type="range"
                  min="35"
                  max="160"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full accent-amber-500 bg-zinc-800 h-2 rounded-lg cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between items-center text-xs font-semibold text-zinc-300 mb-2">
                  <span>Age:</span>
                  <span className="font-mono text-zinc-300 text-sm font-bold">{age} yrs</span>
                </div>
                <input
                  type="range"
                  min="14"
                  max="75"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full accent-amber-500 bg-zinc-800 h-2 rounded-lg cursor-pointer"
                />
              </div>
            </div>

            {/* Calculated Result Card */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-zinc-950 border border-zinc-800/90 text-center flex flex-col justify-between h-full">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">Your Body Mass Index</span>
                <div className="font-display text-6xl font-black text-white my-2 tracking-tight">
                  {bmi || '--'}
                </div>
                <div className={`text-xs sm:text-sm font-bold uppercase tracking-wide ${color}`}>
                  {category}
                </div>
                <p className="text-xs text-zinc-400 mt-3 leading-relaxed">
                  {advice}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-900">
                <span className="text-[11px] font-semibold text-zinc-500 uppercase block mb-1">
                  Recommended For You:
                </span>
                <span className="text-xs font-bold text-amber-400 block mb-3">
                  {suggestedPlanLabel}
                </span>
                <button
                  onClick={handleApplyPlan}
                  className="w-full py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <span>Select &amp; Register</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
