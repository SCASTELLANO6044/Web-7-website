import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion";
import { HorizontalTextLoop } from "@/components/horizontal-text-loop";
import { MidSection } from "@/components/mid-section";
import { ProjectsOverview } from "@/components/projects-overview";
import { HeroSection } from "@/components/hero";
import { MidSectionGrid } from "@/components/mid-section-grid";
import { MidSectionGridAlternative } from "@/components/mid-section-grid-alternative";
import { MidSectionReviewFromClient } from "@/components/mid-section-review-from-client";

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

      <section className="px-5 pb-24 md:px-8 md:pb-36">
        <div className="mx-auto max-w-[1540px] overflow-hidden bg-[#ff0000] px-6 py-16 text-[#090909] md:px-14 md:py-24">
          <Reveal>
            <p className="eyebrow text-[#090909]">
              Your next chapter starts here
            </p>
            <h2 className="display mt-4 max-w-5xl text-5xl leading-[.82] md:text-8xl">
              Make your business impossible to ignore.
            </h2>
            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#090909] px-6 py-4 text-xs uppercase tracking-[.13em] text-[#f3efe8] transition-transform hover:scale-95"
              style={{ color: "#ffffff" }}
            >
              Book a discovery call <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
