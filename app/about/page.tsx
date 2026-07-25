import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { HeroAlternative } from "@/components/hero-alternative";

export const metadata = { title: "El estudio" };
export default function About() {
    return (
        <>
            <section className="px-5 pb-20 pt-36 md:px-8 md:pt-48">
                <div className="mx-auto max-w-[1540px]">

                    <HeroAlternative
                        text1="Web7 / Un estudio de las Islas Canarias"
                        text2="Internet necesita"
                        text3="más personalidad."
                        text4="Web7 es un estudio de diseño y desarrollo web para empresas que valoran los detalles. Combinamos creatividad, diseño y tecnología para que el resultado final esté a la altura de la idea con la que empezó todo."
                    />

                </div>
            </section>
            <section className="bg-[#f3efe8] px-5 py-24 text-[#090909] md:px-8 md:py-36">
                <div className="mx-auto grid max-w-[1540px] gap-12 md:grid-cols-12">
                    <p className="eyebrow text-[#090909] md:col-span-3">Cómo pensamos</p>
                    <div className="md:col-span-8">
                        <h2 className="display text-5xl leading-[.9] md:text-7xl">
                            La tecnología debe reforzar la identidad de una marca, no hacer que se parezca al resto.
                        </h2>
                        <div className="mt-12 grid gap-7 border-t border-black/20 pt-5 md:grid-cols-3">
                            {[
                                [
                                    "01",
                                    "Escuchar antes de crear",
                                    "Entendemos tu negocio, tu público y los objetivos que quieres alcanzar antes de empezar a diseñar.",
                                ],
                                [
                                    "02",
                                    "Crear lo que realmente importa",
                                    "Validamos la estrategia y el enfoque visual antes de dedicar tiempo a los detalles.",
                                ],
                                [
                                    "03",
                                    "Desarrollar con precisión",
                                    "Creamos sitios web rápidos, adaptables y preparados para crecer junto a tu negocio.",
                                ],
                            ].map(([n, t, b]) => (
                                <div key={n}>
                                    <span className="text-xs text-black/50">{n}</span>
                                    <h3 className="mt-5 text-lg">{t}</h3>
                                    <p className="mt-3 text-xs leading-6 text-black/65">{b}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="px-5 py-24 md:px-8 md:py-36">
                <div className="mx-auto grid max-w-[1540px] gap-12 md:grid-cols-2">
                    <div>
                        <p className="eyebrow">Nuestras herramientas</p>
                        <h2 className="display mt-3 text-5xl leading-[.88] md:text-7xl">
                            Creativos por naturaleza.
                            <br />
                            Precisos por elección.
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 border-t border-white/15 text-sm">
                        {[
                            "Next.js & React",
                            "TypeScript",
                            "Sistemas de diseño UI/UX",
                            "Fundamentos de SEO",
                            "Rendimiento como prioridad",
                            "Accesibilidad desde el inicio",
                        ].map((x, i) => (
                            <div key={x} className="border-b border-white/15 py-5">
                                <span className="mr-3 text-[#ff0000]">0{i + 1}</span>
                                {x}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="px-5 pb-28 md:px-8">
                <div className="mx-auto max-w-[1540px] border border-white/20 p-7 md:p-12">
                    <p className="scribble text-xl text-[#ff0000]">
                        Una web mejor es posible.
                    </p>
                    <h2 className="display mt-5 max-w-4xl text-5xl leading-[.85] md:text-7xl">
                        Cuéntanos tu mayor reto.
                    </h2>
                    <Link
                        href="/contact"
                        className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#ff0000]"
                    >
                        Hagámoslo realidad <ArrowUpRight size={15} />
                    </Link>
                </div>
            </section>
        </>
    );
}
