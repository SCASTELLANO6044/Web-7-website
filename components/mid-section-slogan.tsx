import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion";

interface MidSectionSloganProps {
    text1?: string;
    text2?: string;
    text3?: string;
}

export function MidSectionSlogan({ 
    text1 = "Your next chapter starts here", 
    text2 = "Let's make it remarkable", 
    text3 = "Book a discovery call"
}: MidSectionSloganProps){
    return(
        <section className="px-5 pb-24 md:px-8 md:pb-16">
        <div className="mx-auto max-w-[1540px] overflow-hidden bg-[#ff0000] px-6 py-16 text-[#090909] md:px-14 md:py-24">
          <Reveal>
            <p className="eyebrowblack">
              {text1}
            </p>
            <h2 className="display mt-4 max-w-5xl text-5xl leading-[.82] md:text-8xl">
                {text2}
            </h2>
            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#090909] px-6 py-4 text-xs uppercase tracking-[.13em] text-[#f3efe8] transition-transform hover:scale-95"
              style={{ color: "#ffffff" }}
            >
              {text3} <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    );
}