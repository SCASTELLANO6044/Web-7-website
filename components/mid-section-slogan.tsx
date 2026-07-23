import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion";

export function MidSectionSlogan(){
    return(
        <section className="px-5 pb-24 md:px-8 md:pb-36">
        <div className="mx-auto max-w-[1540px] overflow-hidden bg-[#ff0000] px-6 py-16 text-[#090909] md:px-14 md:py-24">
          <Reveal>
            <p className="eyebrowblack">
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
    );
}