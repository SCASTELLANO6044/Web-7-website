import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#f3efe8] px-5 pb-6 pt-20 text-[#090909] md:px-8 md:pt-28">
            <div className="mx-auto max-w-[1540px]">
                <p className="eyebrow text-[#090909]">¿Tienes una buena idea?</p>
                <Link
                    href="/contact"
                    className="group mt-4 flex items-end justify-between border-b border-black/30 pb-8"
                >
                    <span className="display max-w-5xl text-[15vw] leading-[.95] md:text-[10.5vw]">
                        Hagámosla realidad.
                    </span>
                    <ArrowUpRight className="mb-2 size-10 transition-transform group-hover:-translate-y-2 group-hover:translate-x-2 md:size-16" />
                </Link>
                <div className="grid gap-10 py-14 text-xs uppercase tracking-[.1em] md:grid-cols-4">
                    <div>
                        <p className="mb-3 text-black/45">
                            Un estudio creativo que combina diseño,
                            <br />
                            desarrollo y marketing digital.
                        </p>
                        <p>Islas Canarias, España</p>
                    </div>
                    <div>
                        <p className="mb-3 text-black/45">Contacto</p>

                        <div className="space-y-2">
                            <a
                                className="block hover:underline"
                                href="mailto:web7canarias@gmail.com"
                            >
                                web7canarias@gmail.com
                            </a>

                            <a className="block hover:underline" href="tel:+34620463759">
                                Jose +34 620 463 759
                            </a>

                            <a className="block hover:underline" href="tel:+34627187274">
                                Sergio +34 627 187 274
                            </a>
                        </div>
                    </div>

                    <div>
                        <p className="mb-3 text-black/45">Explora</p>

                        <div className="space-y-2">
                            <Link className="block hover:underline" href="/portfolio">
                                Nuestro trabajo
                            </Link>

                            <Link className="block hover:underline" href="/services">
                                Nuestros servicios
                            </Link>

                            <Link className="block hover:underline" href="/about">
                                El estudio
                            </Link>
                        </div>
                    </div>
                    <div className="md:text-right">
                        <p className="mb-3 text-black/45">Web7</p>
                        <p>
                            Nos diferencia la calidad
                            <br />
                            y la atención al detalle.
                        </p>
                    </div>
                </div>
                <div className="flex justify-between border-t border-black/15 pt-4 text-[10px] uppercase tracking-[.1em]">
                    <span>© {new Date().getFullYear()} Web7 Studio</span>
                    <span>Built with care in Canarias</span>
                </div>
            </div>
        </footer>
    );
}
