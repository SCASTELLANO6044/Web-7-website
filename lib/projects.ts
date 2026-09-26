import type { StaticImageData } from "next/image";
import goodMealsHero from "@/assets/portfolio/goodmeals/goodmeals-hero.png";
import joseAcostaHero from "@/assets/portfolio/jose-acosta/jose-acosta-hero.png";
import type { Locale } from "@/lib/locale";

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
    slug: "jose-acosta",
    title: "José Acosta",
    category: "Portfolio personal",
    description:
      "El portfolio de José Acosta, desarrollador de software y miembro de nuestro equipo.",
    image: joseAcostaHero,
    year: "En línea",
    services: ["Diseño web", "Desarrollo", "Portfolio personal"],
    technologies: ["Vercel"],
    challenge:
      "Presentar el trabajo y la identidad de José en un espacio personal dedicado al código, el diseño y la interacción.",
    solution:
      "Una presentación en blanco y negro con tipografía de gran formato, un fondo de formas abstractas y navegación hacia su trabajo, perfil y contacto.",
    results: [
      "Portfolio personal publicado",
      "Identidad visual propia",
      "Acceso directo a sus perfiles profesionales",
    ],
    websiteUrl: "https://joseacostportfolio-l0t2x1xng-jose15-a7aa.vercel.app/",
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

const englishProjects: Record<string, Partial<Project>> = {
  "good-meals": {
    category: "Food & hospitality",
    description: "A digital home for a fresh way to eat well.",
    services: ["Web design", "Development", "Brand integration"],
    challenge: "Turn a food concept into a clear, engaging digital experience.",
    solution: "We combined a distinctive visual design with a simple content structure that keeps the product and call to action front and centre.",
    results: ["A distinctive digital presence", "Mobile-optimised experience", "A clearer conversion path"],
  },
  "jose-acosta": {
    category: "Personal portfolio", description: "The portfolio of José Acosta, software developer and member of our team.", year: "Live",
    services: ["Web design", "Development", "Personal portfolio"], challenge: "Present José’s work and identity in a personal space dedicated to code, design and interaction.",
    solution: "A monochrome presentation with oversized typography, an abstract background and navigation to his work, profile and contact information.",
    results: ["Published personal portfolio", "Distinctive visual identity", "Direct access to his professional profiles"],
  },
  "siete-studio": {
    category: "Architecture", description: "An architecture studio with a more considered digital presence.", year: "Concept",
    services: ["Art direction", "Web design", "Development"], challenge: "Show the precision of the architectural work while retaining the studio’s minimal essence.",
    solution: "A portfolio built around visual rhythm, scale and space, giving each project room to lead.",
    results: ["Editorial clarity", "Faster presentation", "Search-ready pages"],
  },
  "aera-health": {
    category: "Health", description: "A reassuring healthcare experience designed to build trust.", year: "Concept",
    services: ["UX research", "Product design", "Development"], challenge: "Make a complex healthcare process clear, safe and easy to follow.",
    solution: "A calm visual system with accessible interactions and direct routes to help.",
    results: ["Accessible design", "Greater clarity", "A trust-based experience"],
  },
  "form-athletics": {
    category: "Fitness", description: "High-performance energy for a movement-focused community.", year: "Concept",
    services: ["Brand integration", "Ecommerce UX", "Development"], challenge: "Maintain an athletic brand’s energy without losing clarity during purchase.",
    solution: "A dynamic shop with a clear product hierarchy and content that conveys speed.",
    results: ["Stronger identity", "Conversion-focused UX", "Fast mobile loading"],
  },
  "nido-saas": {
    category: "SaaS", description: "A financial platform designed to make the complex simple.", year: "Concept",
    services: ["Product strategy", "UI system", "Frontend"], challenge: "Explain a technical platform clearly to founders and finance teams.",
    solution: "We turned the product into a clear narrative and created a design system ready to grow.",
    results: ["Clearer value proposition", "Scalable system", "Enterprise-ready UX"],
  },
};

const englishServices = [
  ["01", "Websites with personality", "Custom web design", "Strategic, high-impact websites that reflect your identity and guide visitors towards action."],
  ["02", "Built to last", "Frontend and backend development", "Solid, maintainable builds—from the visual experience to the systems that power it."],
  ["03", "Every screen, carefully considered", "Responsive UI/UX", "Flexible interfaces that work naturally on mobile, tablet and desktop."],
  ["04", "Designed to be found", "SEO and performance", "A technical foundation built for search engines and a fast experience for your visitors."],
  ["05", "A partner after launch", "Maintenance and consulting", "Ongoing improvements, technical support and advice to help your digital presence grow."],
  ["06", "More than a website", "Digital solutions for businesses", "Brand integration, conversion strategy and a broader view that turns a website into a business tool."],
] as const;

const frenchProjects: Record<string, Partial<Project>> = {
  "good-meals": {
    category: "Alimentation et hôtellerie", description: "Un foyer digital pour une nouvelle façon de bien manger.",
    services: ["Conception web", "Développement", "Intégration de marque"], challenge: "Transformer un concept gastronomique en une expérience digitale claire et attrayante.",
    solution: "Nous avons associé un design visuel singulier à une structure de contenu simple qui met le produit et l’appel à l’action au premier plan.",
    results: ["Une présence digitale distinctive", "Une expérience optimisée pour mobile", "Un parcours de conversion plus clair"],
  },
  "jose-acosta": {
    category: "Portfolio personnel", description: "Le portfolio de José Acosta, développeur logiciel et membre de notre équipe.", year: "En ligne",
    services: ["Conception web", "Développement", "Portfolio personnel"], challenge: "Présenter le travail et l’identité de José dans un espace personnel consacré au code, au design et à l’interaction.",
    solution: "Une présentation monochrome avec une typographie grand format, un fond abstrait et une navigation vers son travail, son profil et ses coordonnées.",
    results: ["Portfolio personnel publié", "Identité visuelle singulière", "Accès direct à ses profils professionnels"],
  },
  "siete-studio": {
    category: "Architecture", description: "Un studio d’architecture doté d’une présence digitale plus réfléchie.", year: "Concept",
    services: ["Direction artistique", "Conception web", "Développement"], challenge: "Montrer la précision du travail architectural tout en préservant l’essence minimaliste du studio.",
    solution: "Un portfolio construit autour du rythme visuel, de l’échelle et de l’espace, laissant chaque projet prendre sa place.",
    results: ["Clarté éditoriale", "Présentation plus rapide", "Pages prêtes pour le référencement"],
  },
  "aera-health": {
    category: "Santé", description: "Une expérience de santé numérique rassurante, conçue pour inspirer confiance.", year: "Concept",
    services: ["Recherche UX", "Design produit", "Développement"], challenge: "Rendre un parcours de santé complexe clair, sûr et facile à suivre.",
    solution: "Un système visuel apaisé, avec des interactions accessibles et des accès directs à l’aide.",
    results: ["Design accessible", "Plus de clarté", "Une expérience fondée sur la confiance"],
  },
  "form-athletics": {
    category: "Fitness", description: "Une énergie haute performance pour une communauté tournée vers le mouvement.", year: "Concept",
    services: ["Intégration de marque", "UX e-commerce", "Développement"], challenge: "Préserver l’énergie d’une marque sportive sans perdre en clarté au moment de l’achat.",
    solution: "Une boutique dynamique avec une hiérarchie produit claire et un contenu qui transmet la vitesse.",
    results: ["Identité renforcée", "UX orientée conversion", "Chargement rapide sur mobile"],
  },
  "nido-saas": {
    category: "SaaS", description: "Une plateforme financière conçue pour rendre le complexe simple.", year: "Concept",
    services: ["Stratégie produit", "Système UI", "Frontend"], challenge: "Expliquer clairement une plateforme technique à des fondateurs et des équipes financières.",
    solution: "Nous avons transformé le produit en un récit clair et créé un système de design prêt à évoluer.",
    results: ["Proposition de valeur plus claire", "Système évolutif", "UX prête pour les entreprises"],
  },
};

const frenchServices = [
  ["01", "Des sites avec de la personnalité", "Conception web sur mesure", "Des sites stratégiques et à fort impact, qui reflètent votre identité et guident vos visiteurs vers l’action."],
  ["02", "Conçu pour durer", "Développement frontend et backend", "Des réalisations solides et maintenables, de l’expérience visuelle aux systèmes qui la rendent possible."],
  ["03", "Chaque écran, pensé avec soin", "UI/UX responsive", "Des interfaces flexibles qui fonctionnent naturellement sur mobile, tablette et ordinateur."],
  ["04", "Conçu pour être trouvé", "SEO et performance", "Une base technique optimisée pour les moteurs de recherche et une expérience rapide pour vos visiteurs."],
  ["05", "Un partenaire après le lancement", "Maintenance et conseil", "Des améliorations continues, du support technique et des conseils pour développer votre présence digitale."],
  ["06", "Bien plus qu’un site web", "Solutions digitales pour les entreprises", "Intégration de marque, stratégie de conversion et vision d’ensemble pour faire d’un site un véritable outil commercial."],
] as const;

const czechProjects: Record<string, Partial<Project>> = {
  "good-meals": { category: "Gastronomie a pohostinství", description: "Digitální domov pro nový způsob, jak se dobře stravovat.", services: ["Webový design", "Vývoj", "Integrace značky"], challenge: "Proměnit gastronomický koncept v jasný a poutavý digitální zážitek.", solution: "Spojili jsme osobitý vizuální design s jednoduchou strukturou obsahu, která staví produkt a výzvu k akci do popředí.", results: ["Osobitá digitální prezentace", "Zážitek optimalizovaný pro mobil", "Jasnější cesta ke konverzi"] },
  "jose-acosta": { category: "Osobní portfolio", description: "Portfolio Josého Acosty, softwarového vývojáře a člena našeho týmu.", year: "Online", services: ["Webový design", "Vývoj", "Osobní portfolio"], challenge: "Představit Josého práci a osobnost v osobním prostoru věnovaném kódu, designu a interakci.", solution: "Černobílá prezentace s velkoformátovou typografií, abstraktním pozadím a navigací k jeho práci, profilu a kontaktu.", results: ["Zveřejněné osobní portfolio", "Osobitá vizuální identita", "Přímý přístup k profesním profilům"] },
  "siete-studio": { category: "Architektura", description: "Architektonické studio s promyšlenější digitální prezentací.", year: "Koncept", services: ["Umělecké vedení", "Webový design", "Vývoj"], challenge: "Ukázat preciznost architektury a současně zachovat minimalistickou podstatu studia.", solution: "Portfolio postavené na vizuálním rytmu, měřítku a prostoru, které nechává vyniknout každý projekt.", results: ["Redakční jasnost", "Rychlejší prezentace", "Stránky připravené pro vyhledávání"] },
  "aera-health": { category: "Zdraví", description: "Přívětivý digitální zdravotnický zážitek navržený pro budování důvěry.", year: "Koncept", services: ["UX výzkum", "Produktový design", "Vývoj"], challenge: "Učinit složitý zdravotnický proces jasným, bezpečným a snadno sledovatelným.", solution: "Klidný vizuální systém s přístupnými interakcemi a přímými cestami k pomoci.", results: ["Přístupný design", "Větší jasnost", "Zážitek založený na důvěře"] },
  "form-athletics": { category: "Fitness", description: "Výkonná energie pro komunitu zaměřenou na pohyb.", year: "Koncept", services: ["Integrace značky", "E-commerce UX", "Vývoj"], challenge: "Udržet energii sportovní značky, aniž by se při nákupu ztratila jasnost.", solution: "Dynamický obchod s jasnou hierarchií produktů a obsahem, který vyjadřuje rychlost.", results: ["Silnější identita", "UX zaměřené na konverze", "Rychlé načítání na mobilu"] },
  "nido-saas": { category: "SaaS", description: "Finanční platforma navržená tak, aby složité věci zjednodušila.", year: "Koncept", services: ["Produktová strategie", "UI systém", "Frontend"], challenge: "Jasně vysvětlit technickou platformu zakladatelům a finančním týmům.", solution: "Proměnili jsme produkt v srozumitelný příběh a vytvořili designový systém připravený růst.", results: ["Jasnější hodnotová nabídka", "Škálovatelný systém", "UX připravené pro firmy"] },
};

const czechServices = [
  ["01", "Weby s osobitostí", "Webový design na míru", "Strategické weby s velkým dopadem, které odrážejí vaši identitu a vedou návštěvníky k akci."],
  ["02", "Vytvořeno, aby vydrželo", "Frontendový a backendový vývoj", "Solidní a udržitelná řešení – od vizuálního zážitku po systémy, které ho pohánějí."],
  ["03", "Každá obrazovka promyšlená", "Responzivní UI/UX", "Flexibilní rozhraní pro mobil, tablet i desktop."],
  ["04", "Navrženo, aby bylo nalezeno", "SEO a výkon", "Technický základ pro vyhledávače a rychlý zážitek pro návštěvníky."],
  ["05", "Partner i po spuštění", "Údržba a konzultace", "Průběžná vylepšení, technická podpora a rady pro růst digitální prezentace."],
  ["06", "Více než web", "Digitální řešení pro firmy", "Integrace značky, konverzní strategie a širší pohled na web jako obchodní nástroj."],
] as const;

export function getProjects(locale: Locale) {
  if (locale === "es") return projects;
  const translations = locale === "cs" ? czechProjects : locale === "fr" ? frenchProjects : englishProjects;
  return projects.map((project) => ({ ...project, ...translations[project.slug] }));
}

export function getServices(locale: Locale) {
  if (locale === "es") return services;
  return locale === "cs" ? czechServices : locale === "fr" ? frenchServices : englishServices;
}
