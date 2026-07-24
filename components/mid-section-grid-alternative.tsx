import { Reveal } from "@/components/motion";
import { Check } from "lucide-react";

interface Reasons {
    reasons: string[];
}

export function MidSectionGridAlternative({
    reasons = [
        "Strategy before decoration",
        "Senior-level craft",
        "Built for speed and search",
        "A clear, collaborative process",
    ]
}: Reasons) {

    return(
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
    );
}