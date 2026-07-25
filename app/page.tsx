import { HorizontalTextLoop } from "@/components/horizontal-text-loop";
import { MidSection } from "@/components/mid-section";
import { ProjectsOverview } from "@/components/projects-overview";
import { HeroSection } from "@/components/hero";
import { MidSectionGrid } from "@/components/mid-section-grid";
import { MidSectionGridAlternative } from "@/components/mid-section-grid-alternative";
import { MidSectionReviewFromClient } from "@/components/mid-section-review-from-client";
import { MidSectionSlogan } from "@/components/mid-section-slogan";

const reasons = [
  "Strategy before decoration",
  "Senior-level craft",
  "Built for speed and search",
  "A clear, collaborative process",
];
export default function Home() {
  return (
    <>
      <HeroSection />
      
      < MidSection 
        text1="Nuestros proyectos" 
        text2="Webs con claridad y carácter para permanecer en tu memoria."
        text3="Desde la idea inicial hasta el lanzamiento, unimos diseño y desarrollo en un único proceso pensado al detalle."
        text4="Para líderes, startups en crecimiento y equipos consolidados."
      />

      <HorizontalTextLoop text1="DISEÑADO CON INTENCIÓN" text2="CONSTRUIDO CON PROPÓSITO  " />
      
      <ProjectsOverview />
      
      <MidSectionGrid />

      <MidSectionGridAlternative reasons={reasons} />

      <MidSectionReviewFromClient 
        review="“Entendieron perfectamente la idea que queríamos crear.”"
        client="Good Meals"
        project="Website project"
      />

      <MidSectionSlogan />
    </>
  );
}
