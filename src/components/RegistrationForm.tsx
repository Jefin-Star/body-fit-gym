import React, { useState, useEffect } from 'react';
import { GYM_INFO, MEMBERSHIP_PLANS } from '../data/gymData';
import { 
  User, Phone, Calendar, Send, CheckCircle2, 
  MessageCircle, Clock, Shield, Sparkles, Copy, Check, Mail
} from 'lucide-react';

interface RegistrationFormProps {
  selectedPlanId?: string;
}

export interface RegistrationData {
  id: string;
  fullName: string;
  phoneNumber: string;
  membershipPlan: string;
  startDate: string;
  fitnessGoals: string;
  timestamp: string;
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({ selectedPlanId }) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [membershipPlan, setMembershipPlan] = useState('monthly');
  const [startDate, setStartDate] = useState('');
  const [fitnessGoals, setFitnessGoals] = useState('');
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<RegistrationData | null>(null);
  const [copied, setCopied] = useState(false);

  // Sync with selectedPlanId prop when changed
  useEffect(() => {
    if (selectedPlanId) {
      setMembershipPlan(selectedPlanId);
    }
  }, [selectedPlanId]);

  // Set default start date to today
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setStartDate(today);
  }, []);

  const goalPresets = [
    'Muscle Building & Bulking',
    'Fat Loss & Conditioning',
    'General Fitness & Stamina',
    'Strength & Powerlifting',
    'Rehabilitation & Posture',
  ];

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    } else if (fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter a valid full name.';
    }

    if (!phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone Number is required.';
    } else if (!/^\+?[0-9\s-]{8,15}$/.test(phoneNumber.trim())) {
      newErrors.phoneNumber = 'Please enter a valid phone number (8-15 digits).';
    }

    if (!membershipPlan) {
      newErrors.membershipPlan = 'Please select a membership plan.';
    }

    if (!startDate) {
      newErrors.startDate = 'Please select your preferred start date.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    const refNumber = `BFG-${Math.floor(1000 + Math.random() * 9000)}`;
    const newRegistration: RegistrationData = {
      id: refNumber,
      fullName: fullName.trim(),
      phoneNumber: phoneNumber.trim(),
      membershipPlan,
      startDate,
      fitnessGoals: fitnessGoals.trim() || 'General strength and fitness improvement',
      timestamp: new Date().toISOString(),
    };

    // Save to local storage
    try {
      const existingRaw = localStorage.getItem('bodyfit_registrations');
      const existing = existingRaw ? JSON.parse(existingRaw) : [];
      localStorage.setItem('bodyfit_registrations', JSON.stringify([newRegistration, ...existing]));
    } catch {
      // ignore storage errors
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData(newRegistration);
    }, 600);
  };

  const getPlanDetails = (planId: string) => {
    const plan = MEMBERSHIP_PLANS.find((p) => p.id === planId);
    if (plan) return `${plan.name} (₹${plan.price.toLocaleString('en-IN')})`;
    if (planId === 'combo') return 'Admission + Monthly (₹1,100)';
    return planId;
  };

  const getWhatsAppMessageUrl = (data: RegistrationData) => {
    const text = `*NEW REGISTRATION - BODY FIT GYM* 🏋️‍♂️\n\n` +
      `📋 *Ref:* ${data.id}\n` +
      `👤 *Name:* ${data.fullName}\n` +
      `📞 *Phone:* ${data.phoneNumber}\n` +
      `💳 *Plan:* ${getPlanDetails(data.membershipPlan)}\n` +
      `📅 *Start Date:* ${data.startDate}\n` +
      `🎯 *Goals:* ${data.fitnessGoals}\n\n` +
      `_I have completed my online registration and would like to confirm my admission!_`;

    return `https://wa.me/${GYM_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;
  };

  const getEmailMailto = (data: RegistrationData) => {
    const subject = `Body Fit Gym Registration - ${data.fullName} (${data.id})`;
    const body = `Hello Body Fit Gym Team,\n\nHere are my membership registration details:\n\nReference ID: ${data.id}\nFull Name: ${data.fullName}\nPhone: ${data.phoneNumber}\nPlan: ${getPlanDetails(data.membershipPlan)}\nPreferred Start Date: ${data.startDate}\nFitness Goals: ${data.fitnessGoals}\n\nPlease confirm my membership onboarding.\n\nThank you!`;

    return `mailto:${GYM_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleCopySummary = (data: RegistrationData) => {
    const text = `Body Fit Gym Registration #${data.id}\nName: ${data.fullName}\nPhone: ${data.phoneNumber}\nPlan: ${getPlanDetails(data.membershipPlan)}\nStart: ${data.startDate}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const resetForm = () => {
    setSubmittedData(null);
    setFullName('');
    setPhoneNumber('');
    setMembershipPlan('monthly');
    setFitnessGoals('');
  };

  return (
    <section id="register" className="py-24 bg-zinc-950 relative border-t border-zinc-900">
      {/* Background glow & accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-amber-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Quick Online Enrollment
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white">
            Membership <span className="text-amber-500">Registration</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            Secure your spot at Body Fit Gym today. Fill in your details below to begin your transformation.
          </p>

          {/* Gym Timings Banner Notice */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 px-5 py-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-medium">
            <span className="flex items-center gap-1.5 font-bold">
              <Clock className="w-4 h-4 text-amber-400" />
              Gym Timing:
            </span>
            <span className="text-white font-semibold">5:00 AM to 11:30 PM</span>
            <span className="text-amber-500/80">·</span>
            <span className="text-rose-400 font-bold uppercase tracking-wider">Sunday Off</span>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          {submittedData ? (
            /* Success State */
            <div className="py-6 text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-20 h-20 rounded-full bg-emerald-500/10 border-2 border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                  Registration Successful
                </span>
                <h3 className="font-display text-3xl sm:text-4xl font-black uppercase text-white mt-1">
                  Welcome To Body Fit Gym!
                </h3>
                <p className="text-zinc-400 text-sm max-w-lg mx-auto mt-2">
                  Thank you, <strong className="text-white">{submittedData.fullName}</strong>. Your membership enrollment request has been registered under Reference ID:
                </p>
                <div className="inline-block mt-3 px-4 py-1.5 rounded-lg bg-zinc-800 border border-zinc-700 font-mono text-base font-bold text-amber-400">
                  {submittedData.id}
                </div>
              </div>

              {/* Summary Card */}
              <div className="max-w-md mx-auto p-5 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 text-left text-xs sm:text-sm space-y-2 text-zinc-300">
                <div className="flex justify-between py-1 border-b border-zinc-900">
                  <span className="text-zinc-500">Selected Plan:</span>
                  <span className="font-semibold text-white">{getPlanDetails(submittedData.membershipPlan)}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-900">
                  <span className="text-zinc-500">Preferred Start:</span>
                  <span className="font-semibold text-white">{submittedData.startDate}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-900">
                  <span className="text-zinc-500">Contact Number:</span>
                  <span className="font-semibold text-white">{submittedData.phoneNumber}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-zinc-500">Fitness Goals:</span>
                  <span className="font-semibold text-amber-400 text-right max-w-[200px] truncate">{submittedData.fitnessGoals}</span>
                </div>
              </div>

              {/* Instant WhatsApp Action Buttons */}
              <div className="max-w-lg mx-auto space-y-3 pt-2">
                <a
                  href={getWhatsAppMessageUrl(submittedData)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-emerald-500/25 transition-all duration-200"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Send Details on WhatsApp (+91 98953 93009)</span>
                </a>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={getEmailMailto(submittedData)}
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-semibold text-xs tracking-wide transition-colors border border-zinc-700"
                  >
                    <Mail className="w-4 h-4 text-sky-400" />
                    <span>Send via Gmail ({GYM_INFO.email})</span>
                  </a>

                  <button
                    onClick={() => handleCopySummary(submittedData)}
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-semibold text-xs tracking-wide transition-colors border border-zinc-700 cursor-pointer"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-zinc-400" />}
                    <span>{copied ? 'Copied Details' : 'Copy Summary'}</span>
                  </button>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={resetForm}
                  className="text-xs text-zinc-400 hover:text-white underline underline-offset-4 cursor-pointer"
                >
                  Submit Another Registration
                </button>
              </div>
            </div>
          ) : (
            /* Registration Form Fields */
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                    Full Name <span className="text-amber-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      id="fullName"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-950/80 border ${
                        errors.fullName ? 'border-rose-500 focus:ring-rose-500' : 'border-zinc-800 focus:border-amber-500'
                      } text-white placeholder-zinc-600 text-sm focus:outline-none focus:ring-1 transition-colors`}
                    />
                  </div>
                  {errors.fullName && <p className="text-xs text-rose-400 mt-1.5">{errors.fullName}</p>}
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phoneNumber" className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                    Phone Number <span className="text-amber-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      id="phoneNumber"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="e.g. 98953 93009"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-950/80 border ${
                        errors.phoneNumber ? 'border-rose-500 focus:ring-rose-500' : 'border-zinc-800 focus:border-amber-500'
                      } text-white placeholder-zinc-600 text-sm focus:outline-none focus:ring-1 transition-colors`}
                    />
                  </div>
                  {errors.phoneNumber && <p className="text-xs text-rose-400 mt-1.5">{errors.phoneNumber}</p>}
                </div>

                {/* Membership Plan Dropdown */}
                <div>
                  <label htmlFor="membershipPlan" className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                    Membership Plan <span className="text-amber-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="membershipPlan"
                      value={membershipPlan}
                      onChange={(e) => setMembershipPlan(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950/80 border border-zinc-800 text-white text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors cursor-pointer appearance-none"
                    >
                      <option value="monthly">Monthly Fee — ₹600 / month</option>
                      <option value="annual">1 Year Membership — ₹6,500 (Best Value)</option>
                      <option value="personal_training">Personal Training — ₹3,000 / month</option>
                      <option value="admission">Admission Fee Only — ₹500 (One-Time)</option>
                      <option value="combo">Admission + 1st Month Combo — ₹1,100</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-400">
                      <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                    </div>
                  </div>
                  {errors.membershipPlan && <p className="text-xs text-rose-400 mt-1.5">{errors.membershipPlan}</p>}
                </div>

                {/* Preferred Start Date */}
                <div>
                  <label htmlFor="startDate" className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                    Preferred Start Date <span className="text-amber-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <input
                      type="date"
                      id="startDate"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-zinc-950/80 border border-zinc-800 text-white text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Message / Fitness Goals */}
              <div>
                <label htmlFor="fitnessGoals" className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                  Message / Fitness Goals
                </label>
                
                {/* Goal quick tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {goalPresets.map((goal, idx) => (
                    <button
                      type="button"
                      key={idx}
                      onClick={() => setFitnessGoals(fitnessGoals ? `${fitnessGoals}, ${goal}` : goal)}
                      className="px-2.5 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-amber-300 text-xs transition-colors cursor-pointer"
                    >
                      + {goal}
                    </button>
                  ))}
                </div>

                <div className="relative">
                  <textarea
                    id="fitnessGoals"
                    rows={3}
                    value={fitnessGoals}
                    onChange={(e) => setFitnessGoals(e.target.value)}
                    placeholder="Tell us about your fitness targets, prior workout experience, or any health conditions you want your trainer to know..."
                    className="w-full p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-zinc-950 font-black text-sm uppercase tracking-wider shadow-[0_10px_30px_rgba(245,158,11,0.3)] transition-all duration-200 active:scale-[0.99] disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-zinc-950" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Processing Enrollment...
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-zinc-950" />
                      <span>Submit Registration</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-zinc-500">
                <Shield className="w-3.5 h-3.5" />
                <span>Your information is safe. We will connect with you immediately to schedule your first workout.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
