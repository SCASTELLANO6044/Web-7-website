import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Check } from "lucide-react";
import { Reveal } from "@/components/motion";
import { services } from "@/lib/projects";
import { HorizontalTextLoop } from "@/components/horizontal-text-loop";
import { MidSection } from "@/components/mid-section";
import { ProjectsOverview } from "@/components/projects-overview";

const reasons = [
  "Strategy before decoration",
  "Senior-level craft",
  "Built for speed and search",
  "A clear, collaborative process",
];
export default function Home() {
  return (
    <>
      <section className="relative flex min-h-dvh overflow-hidden px-5 pb-8 pt-32 md:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_18%,rgba(255,184,179,.16),transparent_22%),radial-gradient(circle_at_30%_85%,rgba(255,184,179,.10),transparent_27%)]" />
        <div className="relative mx-auto flex w-full max-w-[1540px] flex-col justify-between">
          <div className="flex justify-between text-[10px] uppercase tracking-[.15em] text-white/55">
            <span>Digital work / 28.00° N</span>
            <span>Canary Islands</span>
          </div>
          <div className="py-14 md:py-20">
            <Reveal>
              <p className="eyebrow mb-6">
                Website dev studio / Est. for what&apos;s next
              </p>
              <h1 className="display max-w-6xl text-[16.4vw] leading-[.78] md:text-[10.7vw]">
                Digital experiences
                <br />
                <span className="outline-text">worth noticing.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.15} className="ml-auto mt-10 max-w-md">
              <p className="text-sm leading-7 text-white/70">
                Web7 designs and develops distinctive websites for businesses
                ready to be seen, trusted and chosen.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/25 px-5 py-3 text-xs uppercase tracking-[.11em] transition-colors hover:border-[#ff0000] hover:bg-[#ff0000] hover:text-[#090909]"
              >
                Start your project <ArrowUpRight size={15} />
              </Link>
            </Reveal>
          </div>
          <div className="flex items-end justify-between">
            <p className="scribble max-w-[190px] text-xl leading-tight text-[#ff0000]">
              Built in the seven islands. Made for everywhere.
            </p>
            <ArrowDownRight className="size-8 text-[#ff0000]" />
          </div>
        </div>
      </section>
      
      < MidSection 
        text1="What we make" 
        text2="Websites with the clarity to convert—and the character to stay with people." 
        text3="From first thought to technical launch, we bring design and development into one intentional process." 
        text4="For local leaders, fast-moving startups and established teams with standards." 
      />

      <ProjectsOverview />
      
      <HorizontalTextLoop text1="DESIGN WITH INTENT" text2="BUILD WITH PURPOSE" />
      <section className="px-5 py-24 md:px-8 md:py-36">
        <div className="mx-auto max-w-[1540px]">
          <Reveal>
            <p className="eyebrow">Capabilities / 01—06</p>
            <h2 className="display mt-3 max-w-3xl text-5xl leading-[.88] md:text-7xl">
              The right combination of thought and technology.
            </h2>
          </Reveal>
          <div className="mt-16 grid border-t border-white/20 md:grid-cols-2">
            {services.map(([number, lead, title, body], i) => (
              <Reveal
                key={number}
                delay={i * 0.04}
                className="border-b border-white/20 py-7 md:px-7 md:odd:border-r"
              >
                <div className="flex gap-6">
                  <span className="text-xs text-[#ff0000]">{number}</span>
                  <div>
                    <p className="scribble text-lg text-[#ff0000]">{lead}</p>
                    <h3 className="mt-2 text-xl">{title}</h3>
                    <p className="mt-3 max-w-md text-xs leading-6 text-white/60">
                      {body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Link
            href="/services"
            className="mt-9 inline-flex items-center gap-2 text-xs uppercase tracking-[.13em] text-[#ff0000]"
          >
            Explore capabilities <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>
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
