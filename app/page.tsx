import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Reveal } from "@/components/motion";
import { services } from "@/lib/projects";
import { HorizontalTextLoop } from "@/components/horizontal-text-loop";
import { MidSection } from "@/components/mid-section";
import { ProjectsOverview } from "@/components/projects-overview";
import { HeroSection } from "@/components/hero";
import { MidSectionGrid } from "@/components/mid-section-grid";

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
      
      <section className="bg-[#191817] px-5 py-24 md:px-8 md:py-36">
        <div className="mx-auto grid max-w-[1540px] gap-16 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="eyebrow">Why Web7</p>
            <h2 className="display mt-3 text-5xl leading-[.9] md:text-7xl">
              No mystery.
              <br />
              No middlemen.
            </h2>
          </Reveal>
          <div className="md:col-span-7 md:col-start-6">
            <Reveal>
              <p className="max-w-xl text-sm leading-7 text-white/70">
                Good digital work is a conversation between your ambition and
                your audience. We bring the creative precision and technical
                restraint to make that conversation count.
              </p>
            </Reveal>
            <div className="mt-10 grid gap-x-8 border-t border-white/15 sm:grid-cols-2">
              {reasons.map((reason, i) => (
                <Reveal
                  key={reason}
                  delay={i * 0.06}
                  className="flex items-center gap-3 border-b border-white/15 py-5 text-sm"
                >
                  <Check size={16} className="text-[#ff0000]" />
                  {reason}
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="px-5 py-24 md:px-8 md:py-36">
        <div className="mx-auto max-w-[1540px]">
          <Reveal>
            <p className="eyebrow">From clients / small words, real weight</p>
          </Reveal>
          <Reveal className="mt-9">
            <blockquote className="display max-w-6xl text-4xl leading-[.95] md:text-7xl">
              “They understood the feeling we wanted to create, then gave it a
              structure that works.”
            </blockquote>
          </Reveal>
          <Reveal className="mt-8 flex items-center gap-3 text-xs uppercase tracking-[.12em] text-white/55">
            <span className="size-2 rounded-full bg-[#ff0000]" /> Good Meals /
            Website project
          </Reveal>
        </div>
      </section>
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
