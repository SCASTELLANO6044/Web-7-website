import { PortfolioGrid } from "./portfolio-grid";
import { HeroAlternative } from "@/components/hero-alternative";

export const metadata = { title: "Selected work" };
export default function Portfolio() {
    return (
        <section className="px-5 pb-28 pt-36 md:px-8 md:pt-48">
            <div className="mx-auto max-w-[1540px]">
                
                <HeroAlternative 
                    text1="Selected work / 01—06" 
                    text2="Big thinking,"
                    text3="made tangible."
                    text4="A mix of live work and imagined futures. Every project is built around
                    one thing: making a business more compelling online."
                />
                
                <div className="mt-20">
                    <PortfolioGrid />
                </div>
            </div>
        </section>
    );
}
