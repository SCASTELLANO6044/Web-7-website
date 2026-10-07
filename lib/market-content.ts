import type { Locale } from "@/lib/locale";
import type { Market } from "@/lib/site";

type MarketContent = {
  name: string; title: string; description: string; intro: string;
  focus: string; needs: string[]; question: string; answer: string;
};
type RegionalContent = {
  heading: string; intro: string; details: string; needsTitle: string;
  processTitle: string; process: [string, string][]; faqTitle: string;
  faqs: [string, string][]; work: string; proof: string; contact: string;
  home: string; markets: Record<Market, MarketContent>;
};

export const regionalContent: Record<Locale, RegionalContent> = {
  es: {
    heading: "Tu negocio, aquí. Tu web, más lejos.",
    intro: "Somos dos programadores: uno en Canarias y otro en Praga. Diseñamos y desarrollamos páginas web a medida para empresas de ambos lugares y del resto de España, con comunicación directa con quienes construyen tu proyecto.",
    details: "Descubre cómo podemos ayudarte", needsTitle: "Una web que responda a tu negocio",
    processTitle: "Del primer mensaje al lanzamiento",
    process: [
      ["Definir", "Cuéntanos qué vendes, a quién te diriges, qué funciona en tu web actual y qué necesitas mejorar. Definimos las páginas, funciones e idiomas del proyecto."],
      ["Diseñar y desarrollar", "Organizamos el contenido y diseñamos una experiencia adaptada a móvil y escritorio. Después desarrollamos la web y revisamos contigo los detalles."],
      ["Revisar y publicar", "Comprobamos navegación, formularios y rendimiento antes de publicar. Acordamos las necesidades de mantenimiento y futuras mejoras."],
    ],
    faqTitle: "Antes de empezar",
    faqs: [
      ["¿Cuánto cuesta una página web a medida?", "El presupuesto depende de las páginas, los idiomas, el contenido y las integraciones. Envíanos tus objetivos y las funciones que necesitas para definir el alcance y preparar una propuesta."],
      ["¿Cuánto tarda el desarrollo?", "El plazo depende del alcance y de la disponibilidad de textos, imágenes y revisiones. Lo acordamos al definir el proyecto; una web corporativa y una aplicación con integraciones requieren tiempos distintos."],
      ["¿Podéis mejorar una web existente?", "Sí. Podemos revisar diseño, navegación, adaptación a móvil y rendimiento para decidir contigo qué conviene conservar, mejorar o reconstruir."],
      ["¿Incluye SEO y mantenimiento?", "Ofrecemos SEO técnico, rendimiento, mantenimiento y consultoría. Acordamos qué se incluye en tu proyecto y el soporte posterior. Ninguna implementación garantiza una posición concreta en Google."],
    ],
    work: "Ver el proyecto Good Meals", proof: "Un proyecto publicado: Good Meals. Consulta su diseño, desarrollo e integración de marca, y visita la web desde el caso de estudio.",
    contact: "Cuéntanos tu proyecto", home: "Inicio",
    markets: {
      canarias: {
        name: "Canarias", title: "Diseño web en Canarias",
        description: "Diseño y desarrollo de páginas web en Canarias con Web7. Un programador del equipo está en las islas. Webs a medida, móviles y con una base SEO técnica.",
        intro: "Una página web debe explicar qué ofreces y facilitar el siguiente paso. Con un programador de Web7 en Canarias, trabajas directamente con el equipo que diseña y desarrolla tu web, desde el contenido hasta el lanzamiento.",
        focus: "Para un negocio de las islas, una web puede atender tanto a residentes como a visitantes. Partimos de tu público real para decidir los idiomas, la información práctica y las acciones que deben estar a mano en un móvil.",
        needs: ["Páginas de servicios con una propuesta clara y una forma sencilla de pedir información.", "Contenido en los idiomas de tu público, con páginas independientes que los buscadores puedan encontrar.", "Información de contacto y ubicación fácil de consultar desde el móvil, con enlaces a reservas o herramientas existentes cuando el proyecto lo requiera."],
        question: "¿Web7 está en Canarias?", answer: "Sí. Uno de nuestros dos programadores está en Canarias y el otro en Praga. Atendemos proyectos de las islas y del resto de España, coordinando directamente el diseño y el desarrollo.",
      },
      prague: {
        name: "Praga", title: "Diseño y desarrollo web en Praga",
        description: "Web7 crea páginas web para empresas en Praga. Trabaja directamente con un equipo de dos programadores, uno basado en la ciudad y otro en Canarias.",
        intro: "Nuestro equipo conecta Praga y Canarias. Si tu negocio está en Praga, puedes trabajar con un estudio que tiene un programador en la ciudad y reúne diseño y desarrollo en un mismo proyecto.",
        focus: "Una empresa en Praga puede dirigirse al público checo, a clientes internacionales o a ambos. Definir esa prioridad antes de diseñar ayuda a elegir los idiomas y a presentar los servicios sin que el visitante tenga que buscar la información esencial.",
        needs: ["Una estructura que distinga los servicios y explique para quién es cada uno.", "Versiones en checo y otros idiomas según el público y el contenido acordados para tu proyecto.", "Formularios, llamadas a la acción y conexiones con tus herramientas de trabajo, definidos según tus necesidades."],
        question: "¿Tenéis un programador en Praga?", answer: "Sí. Uno de los dos programadores de Web7 está basado en Praga. El otro está en Canarias. Puedes contactarnos para acordar cómo colaborar y revisar tu proyecto.",
      },
      spain: {
        name: "España", title: "Diseño de páginas web en España",
        description: "Páginas web a medida para empresas en España: diseño, desarrollo, SEO técnico y mantenimiento. Colabora directamente con los programadores de Web7.",
        intro: "Creamos páginas web para negocios de toda España desde nuestro equipo en Canarias y Praga. La colaboración a distancia te permite trabajar directamente con quienes diseñan y programan tu web.",
        focus: "Si quieres captar consultas fuera de tu ciudad, el contenido debe explicar con precisión qué haces y dónde prestas servicio. Organizamos la web alrededor de tus servicios reales y de las preguntas que necesita resolver un posible cliente.",
        needs: ["Webs corporativas y páginas de servicios que ayuden a entender tu oferta y solicitar presupuesto.", "Rediseños que revisen la estructura, los contenidos y la experiencia móvil antes de cambiar la apariencia.", "Una base técnica para crecer: navegación clara, páginas rastreables, rendimiento y mantenimiento acordado."],
        question: "¿Trabajáis con empresas de cualquier parte de España?", answer: "Sí. Prestamos servicios de diseño y desarrollo web a empresas de toda España. Compartimos el alcance y las revisiones a distancia, y acordamos los plazos antes de comenzar.",
      },
    },
  },
  en: {
    heading: "Your business, here. Your website, further.",
    intro: "We are two programmers, one in the Canary Islands and one in Prague. We design and develop custom websites for businesses in both locations and across Spain, with direct access to the people building your project.",
    details: "Explore how we can help", needsTitle: "A website shaped around your business",
    processTitle: "From first conversation to launch",
    process: [
      ["Define", "Tell us what you sell, who you serve, what works on your current website and what needs to change. Together we define the pages, features and languages."],
      ["Design and develop", "We organise the content and design an experience for mobile and desktop. We then develop the website and review the details with you."],
      ["Review and publish", "We check navigation, forms and performance before launch, and agree on maintenance needs and future improvements."],
    ],
    faqTitle: "Before we start",
    faqs: [
      ["How much does a custom website cost?", "The price depends on pages, languages, content and integrations. Send us your goals and required features so we can define the scope and prepare a proposal."],
      ["How long does development take?", "Timing depends on the scope and the availability of copy, images and feedback. We agree the schedule when defining the project; a company website and an application with integrations need different timelines."],
      ["Can you improve an existing website?", "Yes. We can review the design, navigation, mobile experience and performance, then decide with you what to keep, improve or rebuild."],
      ["Do you offer SEO and maintenance?", "We offer technical SEO, performance work, maintenance and consultancy. We agree what your project includes and what support follows launch. No implementation guarantees a specific Google ranking."],
    ],
    work: "Explore the Good Meals project", proof: "A published project: Good Meals. Explore the design, development and brand integration, then visit the live website from the case study.",
    contact: "Tell us about your project", home: "Home",
    markets: {
      canarias: {
        name: "Canary Islands", title: "Web design in the Canary Islands",
        description: "Custom web design and development in the Canary Islands. Work directly with Web7, with a developer based on the islands, on mobile-friendly websites and technical SEO.",
        intro: "Your website should explain what you offer and make the next step easy. With one Web7 programmer based in the Canary Islands, you work directly with the team designing and developing your website, from content to launch.",
        focus: "An island business may serve residents as well as visitors. We start with your actual audience to choose the languages, practical information and actions that need to be easy to find on a phone.",
        needs: ["Service pages with a clear offer and a straightforward way to enquire.", "Content in your audience’s languages, with separate pages search engines can discover.", "Contact and location details that are easy to find on mobile, with links to bookings or existing tools where your project needs them."],
        question: "Is Web7 based in the Canary Islands?", answer: "Yes. One of our two programmers is based in the Canary Islands and the other in Prague. We work on projects across the islands and the rest of Spain, coordinating design and development directly.",
      },
      prague: {
        name: "Prague", title: "Web design and development in Prague",
        description: "Custom websites for businesses in Prague. Work directly with Web7’s two programmers, one based in Prague and one in the Canary Islands, from design to launch.",
        intro: "Our team connects Prague and the Canary Islands. For a business in Prague, that means working with a studio with a programmer based in the city and design and development handled together.",
        focus: "A Prague business may serve Czech customers, international clients or both. Defining that audience before designing helps choose the right languages and present services without making visitors hunt for essential information.",
        needs: ["A structure that separates your services and explains who each one is for.", "Czech and other language versions according to the audience and content agreed for your project.", "Enquiry forms, calls to action and connections to your business tools, scoped around your needs."],
        question: "Do you have a developer in Prague?", answer: "Yes. One of Web7’s two programmers is based in Prague, and the other is in the Canary Islands. Contact us to agree how to collaborate and review your project.",
      },
      spain: {
        name: "Spain", title: "Website design and development in Spain",
        description: "Custom websites for businesses across Spain: design, development, technical SEO and maintenance. Work directly with the two programmers at Web7.",
        intro: "We build websites for businesses across Spain from our bases in the Canary Islands and Prague. Remote collaboration gives you direct contact with the people designing and coding your website.",
        focus: "To attract enquiries beyond your city, your content needs to explain exactly what you do and where you provide it. We organise the website around your real services and the questions a prospective customer needs answered.",
        needs: ["Company websites and service pages that help visitors understand your offer and request a quote.", "Redesigns that examine structure, content and the mobile experience before changing the appearance.", "A technical foundation for growth: clear navigation, crawlable pages, performance and agreed maintenance."],
        question: "Do you work with businesses throughout Spain?", answer: "Yes. We provide web design and development for businesses throughout Spain. We share the scope and reviews remotely and agree a schedule before starting.",
      },
    },
  },
  cs: {
    heading: "Vaše firma tady. Váš web dál.",
    intro: "Jsme dva programátoři: jeden v Praze a druhý na Kanárských ostrovech. Navrhujeme a vyvíjíme webové stránky na míru pro firmy v obou místech i po celém Španělsku. Jednáte přímo s lidmi, kteří váš web vytvářejí.",
    details: "Zjistěte, jak vám pomůžeme", needsTitle: "Web podle potřeb vaší firmy",
    processTitle: "Od první zprávy ke spuštění",
    process: [
      ["Zadání", "Řekněte nám, co nabízíte, komu, co na současném webu funguje a co chcete změnit. Společně určíme stránky, funkce a jazyky projektu."],
      ["Návrh a vývoj", "Uspořádáme obsah a navrhneme prostředí pro mobil i počítač. Potom web vyvineme a společně projdeme detaily."],
      ["Kontrola a spuštění", "Před zveřejněním ověříme navigaci, formuláře a výkon. Domluvíme se na údržbě a dalších úpravách."],
    ],
    faqTitle: "Než začneme",
    faqs: [
      ["Kolik stojí webové stránky na míru?", "Cena závisí na počtu stránek, jazycích, obsahu a integracích. Pošlete nám své cíle a potřebné funkce, abychom mohli určit rozsah a připravit nabídku."],
      ["Jak dlouho trvá vytvoření webu?", "Termín závisí na rozsahu a dostupnosti textů, obrázků a zpětné vazby. Dohodneme jej při zadání projektu; firemní prezentace a aplikace s integracemi vyžadují jiný čas."],
      ["Můžete upravit stávající web?", "Ano. Můžeme posoudit design, navigaci, zobrazení na mobilu a výkon. Společně pak rozhodneme, co zachovat, vylepšit nebo přestavět."],
      ["Nabízíte SEO a údržbu?", "Nabízíme technické SEO, optimalizaci výkonu, údržbu a konzultace. Rozsah projektu a následné podpory domluvíme předem. Žádná úprava nezaručuje konkrétní pozici v Googlu."],
    ],
    work: "Prohlédnout projekt Good Meals", proof: "Publikovaný projekt: Good Meals. Prohlédněte si návrh, vývoj a začlenění značky a přes případovou studii navštivte výsledný web.",
    contact: "Proberme váš projekt", home: "Úvod",
    markets: {
      canarias: {
        name: "Kanárské ostrovy", title: "Tvorba webových stránek na Kanárských ostrovech",
        description: "Webdesign a vývoj webů na Kanárských ostrovech. Web7 má vývojáře přímo na ostrovech a tvoří weby na míru s mobilním zobrazením a technickým SEO.",
        intro: "Web má vysvětlit vaši nabídku a usnadnit další krok. Jeden z programátorů Web7 působí na Kanárských ostrovech. Od obsahu po spuštění spolupracujete přímo s týmem, který váš web navrhuje a vyvíjí.",
        focus: "Firma na ostrovech může oslovovat místní i návštěvníky. Vycházíme z vašeho skutečného publika, abychom zvolili jazyky, praktické informace a kroky, které mají být snadno dostupné na telefonu.",
        needs: ["Stránky služeb s jasnou nabídkou a jednoduchou možností poptávky.", "Obsah v jazycích vašich zákazníků na samostatných stránkách dostupných vyhledávačům.", "Kontaktní údaje a poloha přehledné na mobilu, případně odkazy na rezervace nebo stávající nástroje podle zadání."],
        question: "Působí Web7 na Kanárských ostrovech?", answer: "Ano. Jeden ze dvou programátorů působí na Kanárských ostrovech a druhý v Praze. Pracujeme na projektech pro ostrovy i zbytek Španělska a přímo koordinujeme návrh a vývoj.",
      },
      prague: {
        name: "Praha", title: "Tvorba webových stránek v Praze",
        description: "Webové stránky na míru pro firmy v Praze. Web7 tvoří dva programátoři, jeden přímo v Praze. Webdesign, vývoj, technické SEO a údržba bez prostředníků.",
        intro: "Náš tým propojuje Prahu a Kanárské ostrovy. Pro firmu v Praze to znamená spolupráci se studiem, které má programátora přímo ve městě a propojuje návrh i vývoj v jednom projektu.",
        focus: "Pražská firma může oslovovat české zákazníky, zahraniční klienty nebo obě skupiny. Když publikum vymezíme před návrhem, snáze zvolíme jazyky a představíme služby tak, aby návštěvník nemusel hledat podstatné informace.",
        needs: ["Struktura, která rozlišuje vaše služby a vysvětluje, komu jsou určeny.", "Česká a další jazyková verze podle publika a obsahu dohodnutého pro váš projekt.", "Poptávkové formuláře, výzvy k akci a propojení s firemními nástroji podle vašich potřeb."],
        question: "Máte vývojáře v Praze?", answer: "Ano. Jeden ze dvou programátorů Web7 působí v Praze, druhý na Kanárských ostrovech. Napište nám a domluvíme způsob spolupráce i konzultaci projektu.",
      },
      spain: {
        name: "Španělsko", title: "Tvorba webových stránek ve Španělsku",
        description: "Weby na míru pro firmy po celém Španělsku: webdesign, vývoj, technické SEO a údržba. Spolupracujte přímo se dvěma programátory Web7.",
        intro: "Z Prahy a Kanárských ostrovů vytváříme weby pro firmy po celém Španělsku. Díky spolupráci na dálku jednáte přímo s lidmi, kteří váš web navrhují a programují.",
        focus: "Pokud chcete získávat poptávky i mimo své město, obsah musí přesně vysvětlit, co děláte a kde služby poskytujete. Web uspořádáme podle vašich skutečných služeb a otázek budoucích zákazníků.",
        needs: ["Firemní weby a stránky služeb, které usnadní pochopení nabídky a odeslání poptávky.", "Redesign s posouzením struktury, obsahu a mobilního zobrazení před změnou vzhledu.", "Technický základ pro růst: jasná navigace, dostupnost vyhledávačům, výkon a dohodnutá údržba."],
        question: "Pracujete s firmami z celého Španělska?", answer: "Ano. Nabízíme webdesign a vývoj firmám v celém Španělsku. Zadání i připomínky sdílíme na dálku a termín dohodneme před zahájením projektu.",
      },
    },
  },
  fr: {
    heading: "Votre entreprise ici. Votre site plus loin.",
    intro: "Nous sommes deux développeurs, l’un aux Canaries et l’autre à Prague. Nous créons des sites sur mesure pour les entreprises de ces deux régions et de toute l’Espagne. Vous échangez directement avec les personnes qui réalisent votre projet.",
    details: "Découvrez comment nous pouvons vous aider", needsTitle: "Un site adapté à votre entreprise",
    processTitle: "Du premier échange à la mise en ligne",
    process: [
      ["Définir", "Présentez votre offre, votre public et ce qui doit changer sur votre site actuel. Nous définissons ensemble les pages, les fonctions et les langues du projet."],
      ["Concevoir et développer", "Nous organisons le contenu et concevons une expérience pour mobile et ordinateur. Puis nous développons le site et examinons les détails avec vous."],
      ["Vérifier et publier", "Nous vérifions la navigation, les formulaires et les performances avant la publication. Nous convenons des besoins de maintenance et des futures améliorations."],
    ],
    faqTitle: "Avant de commencer",
    faqs: [
      ["Combien coûte un site sur mesure ?", "Le tarif dépend des pages, des langues, du contenu et des intégrations. Envoyez vos objectifs et les fonctions nécessaires pour définir le périmètre et préparer une proposition."],
      ["Combien de temps prend le développement ?", "Le délai dépend du périmètre et de la disponibilité des textes, des images et des retours. Nous le convenons au début : un site vitrine et une application avec intégrations ont des besoins différents."],
      ["Pouvez-vous améliorer un site existant ?", "Oui. Nous pouvons examiner le design, la navigation, l’expérience mobile et les performances pour décider ensemble ce qu’il faut conserver, améliorer ou reconstruire."],
      ["Proposez-vous le SEO et la maintenance ?", "Nous proposons le SEO technique, l’optimisation des performances, la maintenance et le conseil. Nous convenons du périmètre et du suivi. Aucune réalisation ne garantit une position précise sur Google."],
    ],
    work: "Découvrir le projet Good Meals", proof: "Un projet publié : Good Meals. Découvrez sa conception, son développement et l’intégration de la marque, puis visitez le site depuis l’étude de cas.",
    contact: "Parlons de votre projet", home: "Accueil",
    markets: {
      canarias: {
        name: "Canaries", title: "Création de sites web aux Canaries",
        description: "Conception et développement web aux Canaries avec Web7. Un développeur sur les îles, des sites sur mesure adaptés au mobile et une base SEO technique.",
        intro: "Votre site doit expliquer votre offre et faciliter la prochaine étape. Avec un développeur Web7 aux Canaries, vous travaillez directement avec l’équipe qui conçoit et développe votre site, du contenu à la publication.",
        focus: "Une entreprise des îles peut servir les résidents comme les visiteurs. Nous partons de votre public réel pour choisir les langues, les informations pratiques et les actions à rendre accessibles sur téléphone.",
        needs: ["Des pages de services avec une offre claire et un moyen simple de vous contacter.", "Du contenu dans les langues de votre public, avec des pages distinctes accessibles aux moteurs de recherche.", "Des coordonnées et une localisation faciles à consulter sur mobile, avec des liens de réservation ou vers vos outils selon le projet."],
        question: "Web7 est-il présent aux Canaries ?", answer: "Oui. L’un de nos deux développeurs est aux Canaries et l’autre à Prague. Nous travaillons sur des projets dans les îles et le reste de l’Espagne en coordonnant directement conception et développement.",
      },
      prague: {
        name: "Prague", title: "Conception et développement web à Prague",
        description: "Des sites sur mesure pour les entreprises à Prague. Travaillez directement avec les deux développeurs Web7, l’un à Prague et l’autre aux Canaries.",
        intro: "Notre équipe relie Prague et les Canaries. Pour une entreprise à Prague, cela signifie travailler avec un studio dont un développeur est dans la ville et qui réunit conception et développement.",
        focus: "Une entreprise à Prague peut viser un public tchèque, international ou les deux. Définir cette priorité avant la conception permet de choisir les langues et de présenter les services sans compliquer l’accès aux informations essentielles.",
        needs: ["Une structure qui distingue vos services et explique à qui ils s’adressent.", "Des versions en tchèque et dans d’autres langues selon le public et le contenu convenus pour votre projet.", "Des formulaires, des appels à l’action et des connexions à vos outils définis selon vos besoins."],
        question: "Avez-vous un développeur à Prague ?", answer: "Oui. L’un des deux développeurs Web7 est basé à Prague et l’autre aux Canaries. Contactez-nous pour convenir du mode de collaboration et examiner votre projet.",
      },
      spain: {
        name: "Espagne", title: "Création de sites web en Espagne",
        description: "Sites sur mesure pour les entreprises en Espagne : conception, développement, SEO technique et maintenance. Échangez directement avec les développeurs Web7.",
        intro: "Nous créons des sites pour les entreprises de toute l’Espagne depuis les Canaries et Prague. La collaboration à distance vous donne un accès direct aux personnes qui conçoivent et développent votre site.",
        focus: "Pour recevoir des demandes au-delà de votre ville, votre contenu doit expliquer précisément vos services et leur zone de disponibilité. Nous organisons le site autour de votre offre réelle et des questions des futurs clients.",
        needs: ["Des sites d’entreprise et des pages de services qui aident à comprendre votre offre et demander un devis.", "Des refontes qui examinent la structure, le contenu et l’expérience mobile avant de modifier l’apparence.", "Une base technique pour évoluer : navigation claire, pages accessibles aux moteurs, performances et maintenance convenue."],
        question: "Travaillez-vous avec des entreprises partout en Espagne ?", answer: "Oui. Nous proposons la conception et le développement web dans toute l’Espagne. Nous partageons le périmètre et les retours à distance et convenons du calendrier avant de commencer.",
      },
    },
  },
};
