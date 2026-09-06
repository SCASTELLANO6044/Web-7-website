import { MidSection } from "@/components/mid-section";
import { ProjectsOverview } from "@/components/projects-overview";
import { HeroSection } from "@/components/hero";
import { MidSectionGrid } from "@/components/mid-section-grid";
import { MidSectionGridAlternative } from "@/components/mid-section-grid-alternative";
import { MidSectionReviewFromClient } from "@/components/mid-section-review-from-client";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("Home");
  return (
    <>
      <HeroSection />
      
      < MidSection 
        text1={t("projects")}
        text2={t("introTitle")}
        text3={t("introA")}
        text4={t("introB")}
      />
      
      <ProjectsOverview />
      
      <MidSectionGrid />

      <MidSectionGridAlternative />

      <MidSectionReviewFromClient 
        review={t("review")}
        client="Good Meals"
        project={t("reviewProject")}
      />
    </>
  );
}
