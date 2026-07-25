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
  /** URL pública para proyectos terminados. Omitir para proyectos conceptuales. */
  websiteUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "good-meals",
    title: "Good Meals",
    category: "Alimentación y hostelería",
    description: "Un hogar digital para una nueva forma de comer bien.",
    image: goodMealsHero,
    year: "2025",
    services: ["Diseño web", "Desarrollo", "Integración de marca"],
    technologies: ["Next.js", "TypeScript", "Responsive UI"],
    challenge:
      "Transformar una propuesta gastronómica en una experiencia digital clara y atractiva.",
    solution:
      "Combinamos un diseño visual con personalidad y una estructura de contenido sencilla que mantiene el producto y la llamada a la acción como protagonistas.",
    results: [
      "Presencia digital diferenciada",
      "Experiencia optimizada para móvil",
      "Camino de conversión más claro",
    ],
    websiteUrl: "https://goodmeals.es",
  },
  {
    slug: "altamar-residences",
    title: "Altamar Residences",
    category: "Inmobiliaria",
    description:
      "Propiedades costeras presentadas con elegancia y confianza.",
    image: "/reference/portfolio-2.jpg",
    year: "Concepto",
    services: ["Estrategia", "UI/UX", "Frontend"],
    technologies: ["Next.js", "GSAP", "CMS-ready"],
    challenge:
      "Hacer que una propiedad premium se sienta cercana sin ocultar la información que los compradores necesitan.",
    solution:
      "Un sistema inmobiliario editorial que combina imágenes cuidadas, tipografía elegante y capas de información práctica.",
    results: [
      "Posicionamiento premium",
      "Exploración intuitiva",
      "Estructura preparada para captar clientes",
    ],
  },
  {
    slug: "siete-studio",
    title: "Siete Studio",
    category: "Arquitectura",
    description:
      "Un estudio de arquitectura con una presencia digital más profunda.",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=85",
    year: "Concepto",
    services: ["Dirección de arte", "Diseño web", "Desarrollo"],
    technologies: ["Next.js", "Framer Motion", "SEO"],
    challenge:
      "Mostrar la precisión del trabajo arquitectónico manteniendo la misma esencia minimalista del estudio.",
    solution:
      "Un portfolio basado en ritmo visual, escala y espacio para dar protagonismo a cada proyecto.",
    results: [
      "Claridad editorial",
      "Presentación más rápida",
      "Páginas optimizadas para búsqueda",
    ],
  },
  {
    slug: "aera-health",
    title: "Aera Health",
    category: "Salud",
    description:
      "Una experiencia digital sanitaria cercana diseñada para generar confianza.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=85",
    year: "Concepto",
    services: ["Investigación UX", "Diseño de producto", "Desarrollo"],
    technologies: ["React", "Accessibility", "Analytics"],
    challenge:
      "Hacer que un proceso sanitario complejo sea claro, seguro y fácil de seguir.",
    solution:
      "Un sistema visual tranquilo con interacciones accesibles y rutas directas hacia la ayuda.",
    results: [
      "Diseño accesible",
      "Mayor claridad",
      "Experiencia basada en confianza",
    ],
  },
  {
    slug: "form-athletics",
    title: "Form Athletics",
    category: "Fitness",
    description:
      "Energía de alto rendimiento para una comunidad enfocada en el movimiento.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=85",
    year: "Concepto",
    services: ["Integración de marca", "UX para ecommerce", "Desarrollo"],
    technologies: ["Next.js", "Stripe-ready", "Performance"],
    challenge:
      "Mantener la energía de una marca deportiva sin perder claridad durante la compra.",
    solution:
      "Una tienda dinámica con una jerarquía de producto clara y contenidos que transmiten velocidad.",
    results: [
      "Identidad más fuerte",
      "UX orientada a conversión",
      "Carga rápida en móvil",
    ],
  },
  {
    slug: "nido-saas",
    title: "Nido",
    category: "SaaS",
    description:
      "Una plataforma financiera diseñada para hacer sencillo lo complejo.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=85",
    year: "Concepto",
    services: ["Estrategia de producto", "Sistema UI", "Frontend"],
    technologies: ["React", "Design tokens", "API-ready"],
    challenge:
      "Explicar una plataforma técnica de forma clara para fundadores y equipos financieros.",
    solution:
      "Convertimos el producto en una narrativa clara y creamos un sistema de diseño preparado para crecer.",
    results: [
      "Propuesta más clara",
      "Sistema escalable",
      "UX preparada para empresas",
    ],
  },
];

export const services = [
  [
    "01",
    "Webs con personalidad",
    "Diseño web personalizado",
    "Sitios web estratégicos y de alto impacto que reflejan tu identidad y guían al usuario hacia la acción.",
  ],
  [
    "02",
    "Construido para durar",
    "Desarrollo frontend y backend",
    "Desarrollos sólidos y mantenibles, desde la experiencia visual hasta los sistemas que la hacen posible.",
  ],
  [
    "03",
    "Cada pantalla, pensada al detalle",
    "UI/UX responsive",
    "Interfaces adaptables que funcionan de forma natural en móvil, tablet y escritorio.",
  ],
  [
    "04",
    "Diseñado para ser encontrado",
    "SEO y rendimiento",
    "Una base técnica optimizada para buscadores y una experiencia rápida para tus usuarios.",
  ],
  [
    "05",
    "Un socio después del lanzamiento",
    "Mantenimiento y consultoría",
    "Mejoras continuas, soporte técnico y asesoramiento para hacer crecer tu presencia digital.",
  ],
  [
    "06",
    "Más que una web",
    "Soluciones digitales para negocios",
    "Integración de marca, estrategias de conversión y una visión global para convertir una web en una herramienta de negocio.",
  ],
] as const;