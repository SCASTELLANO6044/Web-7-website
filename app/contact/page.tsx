import { ContactForm } from "./contact-form";
export const metadata = { title: "Empieza tu proyecto" };
export default function Contact() {
    return (
        <section className="px-5 pb-28 pt-36 md:px-8 md:pt-48">
            <div className="mx-auto max-w-[1540px]">
                <p className="eyebrow">Empieza tu proyecto / el primer paso hacia algo grande</p>
                <h1 className="display mt-4 max-w-5xl text-[clamp(3rem,14vw,6rem)] leading-[.8] md:text-[clamp(4rem,10vw,8rem)]">
                    Cuéntanos
                    <br />
                    <span className="outline-text">
                    tu idea.</span>
                </h1>
                <div className="mt-20 grid gap-16 md:grid-cols-12">
                    <div className="md:col-span-4">
                        <p className="max-w-xs text-sm leading-7 text-white/65">
                            Tanto si vas a empezar desde cero, como si quieres mejorar tu web   actual o afrontar un reto técnico, estaremos encantados de conocer tu proyecto.
                        </p>
                        <div className="mt-12 space-y-6 text-xs leading-6">
                            <div>
                                <p className="mb-1 uppercase tracking-[.12em] text-white/40">
                                    Email
                                </p>
                                <a
                                    className="hover:text-[#ff0000]"
                                    href="mailto:web7canarias@gmail.com"
                                >
                                    web7canarias@gmail.com
                                </a>
                            </div>
                            <div>
                                <p className="mb-1 uppercase tracking-[.12em] text-white/40">
                                    Llámanos
                                </p>
                                <a
                                    className="block hover:text-[#ff0000]"
                                    href="tel:+34620463759"
                                >
                                    Jose / +34 620 463 759
                                </a>
                                <a
                                    className="block hover:text-[#ff0000]"
                                    href="tel:+34627187274"
                                >
                                    Sergio / +34 627 187 274
                                </a>
                            </div>
                            <div>
                                <p className="mb-1 uppercase tracking-[.12em] text-white/40">
                                    Ubicación
                                </p>
                                <p>Canary Islands, Spain</p>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-7 md:col-start-6">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
}
