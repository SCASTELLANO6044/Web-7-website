import type { StaticImageData } from "next/image";
import goodMealsHero from "@/assets/portfolio/goodmeals/goodmeals-hero.png";

export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string | StaticImageData;
  year: string;
  services: string[];
  technologies: string[];
  challenge: string;
  solution: string;
  results: string[];
  /** Public URL for completed work. Omit this for concept projects. */
  websiteUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "good-meals",
    title: "Good Meals",
    category: "Food & hospitality",
    description: "A memorable home for a fresh way to eat well.",
    image: goodMealsHero,
    year: "2025",
    services: ["Web design", "Development", "Brand integration"],
    technologies: ["Next.js", "TypeScript", "Responsive UI"],
    challenge:
      "Translate a food-first offer into a clear, lively digital experience.",
    solution:
      "We paired expressive visual rhythm with a simple content path that keeps the food—and the call to action—in focus.",
    results: [
      "Distinct online presence",
      "Mobile-first journey",
      "Clearer conversion path",
    ],
    websiteUrl: "https://goodmeals.es",
  },
  {
    slug: "altamar-residences",
    title: "Altamar Residences",
    category: "Real estate",
    description: "Coastal property, presented with quiet confidence.",
    image: "/reference/portfolio-2.jpg",
    year: "Concept",
    services: ["Strategy", "UI/UX", "Frontend"],
    technologies: ["Next.js", "GSAP", "CMS-ready"],
    challenge:
      "Make premium property feel tactile without burying the detail buyers need.",
    solution:
      "An editorial real-estate system that blends calm imagery, considered typography, and practical information layers.",
    results: [
      "Luxury positioning",
      "Intuitive exploration",
      "Lead-ready structure",
    ],
  },
  {
    slug: "siete-studio",
    title: "Siete Studio",
    category: "Architecture",
    description:
      "An architecture practice with a more dimensional digital presence.",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=85",
    year: "Concept",
    services: ["Art direction", "Web design", "Development"],
    technologies: ["Next.js", "Framer Motion", "SEO"],
    challenge:
      "Show the precision of built work while keeping the site as restrained as the studio's approach.",
    solution:
      "A sequence-led portfolio that uses scale, space and material to frame every project.",
    results: ["Editorial clarity", "Faster showcase", "Search-ready pages"],
  },
  {
    slug: "aera-health",
    title: "Aera Health",
    category: "Healthcare",
    description: "A human digital care experience built for confidence.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=85",
    year: "Concept",
    services: ["UX research", "Product design", "Development"],
    technologies: ["React", "Accessibility", "Analytics"],
    challenge:
      "Make a complex care journey feel clear, reassuring and safely accessible.",
    solution:
      "A calm visual system backed by accessible interactions and direct pathways to support.",
    results: ["Accessible by design", "Improved clarity", "Trust-led journey"],
  },
  {
    slug: "form-athletics",
    title: "Form Athletics",
    category: "Fitness",
    description: "High-performance energy for a movement-led community.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=85",
    year: "Concept",
    services: ["Brand integration", "Ecommerce UX", "Build"],
    technologies: ["Next.js", "Stripe-ready", "Performance"],
    challenge:
      "Match the energy of a serious training brand without losing clarity at checkout.",
    solution:
      "A sharp, kinetic storefront with a focused product hierarchy and content that moves at pace.",
    results: ["Stronger identity", "Conversion-led UX", "Fast mobile load"],
  },
  {
    slug: "nido-saas",
    title: "Nido",
    category: "SaaS",
    description:
      "A finance platform designed to make the complicated feel certain.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=85",
    year: "Concept",
    services: ["Product strategy", "UI system", "Frontend"],
    technologies: ["React", "Design tokens", "API-ready"],
    challenge:
      "Explain a technical platform quickly to founders and finance teams.",
    solution:
      "We distilled the product into a confident story, then built a design system ready to scale with it.",
    results: ["Clearer proposition", "Scalable system", "Enterprise-ready UX"],
  },
];

export const services = [
  [
    "01",
    "Websites with a point of view",
    "Custom website design",
    "Strategic, high-impact websites that look unmistakably yours and make the next step clear.",
  ],
  [
    "02",
    "Built to hold up",
    "Frontend & backend development",
    "Robust, maintainable builds from the experience people see to the systems that make it work.",
  ],
  [
    "03",
    "Every screen, considered",
    "Responsive UI/UX",
    "Flexible interfaces that feel intentional across mobile, tablet and desktop—never merely resized.",
  ],
  [
    "04",
    "Made to be found",
    "SEO & performance",
    "Technical foundations that give search engines clarity and users a fast, frictionless first impression.",
  ],
  [
    "05",
    "A partner after launch",
    "Maintenance & consulting",
    "Ongoing improvements, technical care and straight-talking advice as your digital presence grows.",
  ],
  [
    "06",
    "More than a website",
    "Digital business solutions",
    "Brand integration, conversion paths and the connective thinking that turns a website into a working asset.",
  ],
] as const;
