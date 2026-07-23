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
        text1="What we make" 
        text2="Websites with the clarity to convert—and the character to stay with people." 
        text3="From first thought to technical launch, we bring design and development into one intentional process." 
        text4="For local leaders, fast-moving startups and established teams with standards." 
      />

      <ProjectsOverview />
      
      <HorizontalTextLoop text1="DESIGN WITH INTENT" text2="BUILD WITH PURPOSE" />
      
      <MidSectionGrid />

      <MidSectionGridAlternative reasons={reasons} />

      <MidSectionReviewFromClient 
        review="“They understood the feeling we wanted to create, then gave it a structure that works.”"
        client="Good Meals"
        project="Website project"
      />

      <MidSectionSlogan />
    </>
  );
}
