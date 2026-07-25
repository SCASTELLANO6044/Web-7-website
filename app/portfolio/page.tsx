import { PortfolioGrid } from "./portfolio-grid";
import { HeroAlternative } from "@/components/hero-alternative";

export const metadata = { title: "Proyectos" };
export default function Portfolio() {
    return (
        <section className="px-5 pb-28 pt-36 md:px-8 md:pt-48">
            <div className="mx-auto max-w-[1540px]">
                
                <HeroAlternative 
                    text1="Proyectos destacados / 01—06" 
                    text2="Grandes ideas,"
                    text3="hechas realidad."
                    text4="Una selección de proyectos reales y conceptos creativos. Todos comparten un mismo objetivo: ayudar a las empresas a destacar y crecer en el entorno digital."
                />
                
                <div className="mt-20">
                    <PortfolioGrid />
                </div>
            </div>
        </section>
    );
}
