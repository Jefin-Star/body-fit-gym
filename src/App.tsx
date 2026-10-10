/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { MembershipSection } from './components/MembershipSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { BmiCalculator } from './components/BmiCalculator';
import { RegistrationForm } from './components/RegistrationForm';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [selectedPlanId, setSelectedPlanId] = useState<string>('monthly');

  const handleSelectPlan = (planId: string) => {
    setSelectedPlanId(planId);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-amber-500 selection:text-black">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Our Gym */}
        <AboutSection />

        {/* 3. Membership Plans & Pricing */}
        <MembershipSection onSelectPlan={handleSelectPlan} />

        {/* Facility Highlights & Equipment */}
        <FacilitiesSection />

        {/* Interactive BMI & Fitness Assessment Tool */}
        <BmiCalculator onSelectPlan={handleSelectPlan} />

        {/* 4. Membership Registration Form */}
        <RegistrationForm selectedPlanId={selectedPlanId} />

        {/* 5. Contact Us & Google Maps Embed */}
        <ContactSection />

        {/* FAQs */}
        <FaqSection />
      </main>

      {/* 6. Footer */}
      <Footer />

      {/* Quick WhatsApp Action Floating Button */}
      <FloatingWhatsApp />
    </div>
  );
}
