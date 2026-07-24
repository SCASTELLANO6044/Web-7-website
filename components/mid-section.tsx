import Link from "next/link";
import { Reveal } from "@/components/motion";
import { ArrowUpRight } from "lucide-react";


interface MidSectionProps {
    text1?: string;
    text2?: string;
    text3?: string;
    text4?: string;
}

export function MidSection({
    text1 = "What we make",
    text2 = "Websites with the clarity to convert—and the character to stay with people.",
    text3 = "From first thought to technical launch, we bring design and development into one intentional process.",
    text4 = "For local leaders, fast-moving startups and established teams with standards."
}: MidSectionProps) {
    return (
        <section className="bg-[#f3efe8] px-5 py-24 text-[#090909] md:px-8 md:py-36">
        <div className="mx-auto grid max-w-[1540px] gap-16 md:grid-cols-12">
          <Reveal className="md:col-span-3">
            <p className="eyebrow text-[#090909]">{text1}</p>
          </Reveal>
          <Reveal className="md:col-span-8">
            <h2 className="display text-5xl leading-[.9] sm:text-6xl md:text-8xl">
              {text2}
            </h2>
            <div className="mt-12 grid gap-4 border-t border-black/20 pt-5 sm:grid-cols-3">
              <p className="text-xs leading-5">
                {text3}
              </p>
              <p className="text-xs leading-5">
                {text4}
              </p>
              <Link
                href="/about"
                className="group flex items-start justify-between text-xs uppercase tracking-wider"
              >
                Meet Web7{" "}
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    );
}