import {
  Star,
  Crown,
  Rocket,
  MessageCircleMore,
  Smartphone,
  Building,
  Blocks,
} from "lucide-react";
import { assets } from "../../assets/assets";

export const plans = [
  {
    name: "STARTER PLAN",
    icon: Rocket,
    price: "₹7,000",
    period: "/year",
    monthly: "₹583/month",
    description: "Perfect for small salons getting started",
    popular: false,
    features: [
      "Unlimited appointments & walk-ins",
      "GST-ready billing & invoicing",
      "Basic customer database",
      "WhatsApp booking confirmations",
      "Daily/weekly reports",
      "Phone & chat support",
    ],
    note: "Most popular for new salon owners",
  },
  {
    name: "GROWTH PLAN",
    icon: Star,
    price: "₹14,000",
    period: "/year",
    monthly: "₹1,167/month",
    description: "For salons ready to scale (3-10 staff)",
    popular: true,
    features: [
      "Everything in Starter, plus:",
      "Advanced loyalty & membership system",
      "Inventory management with alerts",
      "500 automated WhatsApp messages/month",
      "Staff performance analytics",
      "Customer retention campaigns",
      "Package & combo deals",
    ],
    note: "Recommended for most salons",
  },
  {
    name: "ELITE PLAN",
    icon: Crown,
    price: "₹25,000",
    period: "/year",
    monthly: "₹2,083/month",
    description: "For franchises & multi-location salons",
    popular: false,
    features: [
      "Everything in Growth, plus:",
      "Unlimited locations management",
      "2,000 WhatsApp messages/month",
      "Advanced analytics & profit reports",
      "Priority support (2-hour response)",
      "Custom integrations",
      "Dedicated account manager",
    ],
    note: "Perfect for salon chains",
  },
];

export const addOns = [
  {
    name: "Extra WhatsApp Messages",
    price: "₹1,000",
    unit: "per 1000 messages",
    description:
      "Additional automated WhatsApp messages beyond your plan limit",
    icon: MessageCircleMore,
  },
  {
    name: "White-labeled Customer App",
    price: "₹5,000",
    unit: "per year",
    description:
      "Custom branded mobile app for your customers with your salon's branding",
    icon: Smartphone,
  },
  {
    name: "Advanced Franchise Dashboard",
    price: "₹10,000",
    unit: "per year",
    description:
      "Enhanced multi-location management with advanced analytics and controls",
    icon: Building,
  },
  {
    name: "Custom Integrations",
    price: "₹15,000",
    unit: "one-time setup",
    description:
      "Connect with your existing POS, accounting, or other business software",
    icon: Blocks,
  },
];

export const features = [
  { title: "Unlimited bookings", icon: assets.appointmentSmall},
  { title: "Client Appointment Confirmations & Reminders", icon: assets.ClientAppointment },
  { title: "Email Marketing", icon : assets.Marketing},
  { title: "Text Message Marketing*", icon : assets.customerSmall},
  { title: "Custom Forms & Liability Waivers" , icon: assets.CustomForms},
  { title: "Reserve with Google", icon: assets.Google},
  { title: "Reporting and Insights", icon: assets.analytic},
  { title: "Waitlists", icon: assets.Waitlist},
  { title: "No-Show Protection features**", icon: assets.customer},
  { title: "Online Gift Cards**", icon : assets.membershipSmall},
  { title: "Memberships and Packages", icon: assets.Member},
  { title: "and more!", icon: assets.Benefits},
];
