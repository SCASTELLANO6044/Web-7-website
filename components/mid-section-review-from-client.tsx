import { Reveal } from "@/components/motion";

interface MidSectionReviewFromClientProps {
    review?: string;
    client?: string;
    project?: string;
}

export function MidSectionReviewFromClient({ 
  review = "“They understood the feeling we wanted to create, then gave it a structure that works.”",
  client = "Good Meals",
  project = "Website project" }: MidSectionReviewFromClientProps){
    return(
        <section className="px-5 py-24 md:px-8 md:py-36">
          <div className="mx-auto max-w-[1540px]">
            <Reveal>
              <p className="eyebrow">From clients / small words, real weight</p>
            </Reveal>
            <Reveal className="mt-9">
              <blockquote className="display max-w-6xl text-4xl leading-[.95] md:text-7xl">
                {review}
              </blockquote>
            </Reveal>
            <Reveal className="mt-8 flex items-center gap-3 text-xs uppercase tracking-[.12em] text-white/55">
              <span className="size-2 rounded-full bg-[#ff0000]" /> {client} /
                {project}
            </Reveal>
          </div>
        </section>
    );
}