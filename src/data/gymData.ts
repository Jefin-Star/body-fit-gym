export interface MembershipPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  badge?: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export const GYM_INFO = {
  name: "Body Fit Gym",
  fullName: "BODY FIT UNISEX MULTI GYM & HEALTH CLUB",
  tagline: "Build Your Strength. Transform Your Life.",
  whatsappNumber: "98953 93009",
  whatsappRaw: "919895393009",
  email: "bodyfitgym0912@gmail.com",
  instagramUrl: "https://www.instagram.com/body_fit_kattappana?utm_source=qr&vrfl=cWlud284NGE0OWNo",
  instagramHandle: "@body_fit_kattappana",
  location: "Kattappana, Kerala, India",
  addressLine: "BODY FIT UNISEX MULTI GYM & HEALTH CLUB, Kattappana, Idukki, Kerala",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3747.893943474155!2d77.110478!3d9.747712199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07a9ee40ef2b0d%3A0x2c4f06724abf4a57!2sBODY%20FIT%20UNISEX%20MULTI%20GYM%20%26%20HEALTH%20CLUB!5e1!3m2!1sen!2sin!4v1791632821004!5m2!1sen!2sin",
  timings: {
    weekdays: "5:00 AM – 11:30 PM",
    sunday: "Closed (Rest Day)",
    openHour: 5,
    openMinute: 0,
    closeHour: 23,
    closeMinute: 30,
  }
};

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: "monthly",
    name: "Monthly Fee",
    price: 600,
    period: "per month",
    description: "Ideal for regular gym enthusiasts seeking flexible month-to-month access.",
    features: [
      "Full access to multi-gym equipment",
      "Free weights & cardio training zone",
      "Access from 5:00 AM to 11:30 PM",
      "General workout guidance & floor support",
      "Locker & changing room facilities",
      "Unisex friendly training atmosphere"
    ],
  },
  {
    id: "admission",
    name: "Admission Fee",
    price: 500,
    period: "one-time registration",
    badge: "New Member Setup",
    description: "One-time registration & onboarding fee for first-time joining members.",
    features: [
      "Official gym member registration",
      "Personal fitness baseline assessment",
      "Gym etiquette & equipment walkthrough",
      "Tailored machine setup recommendations",
      "Free locker access on joining day"
    ],
  },
  {
    id: "annual",
    name: "1 Year Membership",
    price: 6500,
    period: "full 12 months",
    badge: "Best Value • Save Big",
    popular: true,
    description: "Our most popular package. Commit to a full year of transformation at the best rate.",
    features: [
      "All-inclusive 365-day gym access",
      "Save over ₹700 compared to monthly renewals",
      "Admission fee discounted / waived",
      "Full access to all zones & cardio deck",
      "Quarterly body composition check-ups",
      "Workout split & diet plan consultation",
      "Priority workout slots during peak hours"
    ],
  },
  {
    id: "personal_training",
    name: "Personal Training",
    price: 3000,
    period: "per month",
    badge: "1-on-1 Coaching",
    description: "Dedicated personal training customized to your body type, goals, and pace.",
    features: [
      "Dedicated 1-on-1 certified trainer",
      "Personalized muscle building or weight loss plan",
      "Form correction & injury prevention",
      "Customized nutritional & meal guidance",
      "Weekly progress & body metric tracking",
      "Includes daily motivation & accountability"
    ],
  },
];

export function getGymOpenStatus(): { isOpen: boolean; statusText: string; subText: string } {
  const now = new Date();
  const day = now.getDay(); // 0 is Sunday, 1 is Monday ... 6 is Saturday
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentTimeInMinutes = hours * 60 + minutes;

  // Sunday is closed
  if (day === 0) {
    return {
      isOpen: false,
      statusText: "Closed Today (Sunday)",
      subText: "Opens Monday at 5:00 AM"
    };
  }

  const openTimeInMinutes = 5 * 60; // 5:00 AM = 300
  const closeTimeInMinutes = 23 * 60 + 30; // 11:30 PM = 1410

  if (currentTimeInMinutes >= openTimeInMinutes && currentTimeInMinutes < closeTimeInMinutes) {
    return {
      isOpen: true,
      statusText: "Open Now",
      subText: "Closes tonight at 11:30 PM"
    };
  } else {
    return {
      isOpen: false,
      statusText: "Closed Now",
      subText: "Opens tomorrow at 5:00 AM"
    };
  }
}
