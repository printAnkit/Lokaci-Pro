import {
  MessageSquare,
  FileText,
  Users,
  DollarSign,
  BarChart3,
} from "lucide-react";

export const problems = [
  {
    icon: MessageSquare,
    title: "WhatsApp Booking Chaos",
    description:
      "Missed messages = missed money. That customer who couldn't reach you? They went to your competitor.",
    link: "/whatsapp-chaos",
  },
  {
    icon: FileText,
    title: "Manual Everything",
    description:
      "You're spending 3+ hours daily on paperwork instead of serving customers. That's ₹50,000+ in lost revenue monthly.",
    link: "/manual-everything",
  },
  {
    icon: Users,
    title: "Ghost Customers",
    description:
      "60% of your customers visit once and never return. You have no system to bring them back.",
    link: "/ghost-customer",
  },
  {
    icon: DollarSign,
    title: "Staff Commission Confusion",
    description:
      "Arguments over payments kill team morale. Unhappy staff = unhappy customers = lost revenue.",
    link: "/staff-commission",
  },
  {
    icon: BarChart3,
    title: "Flying Blind",
    description:
      "Which services make money? Which don't? You're guessing instead of knowing.",
    link: "/flying-blind",
  },
];
