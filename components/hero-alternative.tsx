import { Topography } from "@/components/topography";

interface HeroAlternativeProps {
    text1?: string;
    text2?: string;
    text3?: string;
    text4?: string;
}

export function HeroAlternative({
    text1 = "Estudio de desarrollo web / Mirando al futuro",
    text2 = "Experiencias digitales",
    text3 = "que dejan huella.",
    text4 = "En Web7 diseñamos y desarrollamos sitios web únicos para empresas que quieren destacar, generar confianza y convertirse en la primera opción de sus clientes.",
}: HeroAlternativeProps){
    return (
        <div className="relative isolate min-h-[443px] px-5 py-6 sm:px-8 sm:py-16 md:min-h-[470px] md:px-12">
            <div
                className="pointer-events-none absolute -top-36 bottom-0 left-1/2 -z-10 w-screen -translate-x-1/2 overflow-hidden border-y border-white/10 bg-[#050404] md:-top-48"
                aria-hidden="true"
            >
                <Topography
                    className="opacity-70"
                    lowColor="#7a010c"
                    midColor="#d7c9bd"
                    highColor="#f3efe8"
                    speed={0.16}
                    morphAmount={2.3}
                    morphSpeed={0.04}
                    bands={2.5}
                    thickness={0.012}
                    scale={1.25}
                    glow={0.28}
                    contrast={2.25}
                    brightness={0.82}
                    grainIntensity={0.025}
                    mouseInteraction
                    mouseRadius={0.3}
                    mouseStrength={0.4}
                />
            </div>

            <div className="relative z-10">
                <p className="eyebrow text-[#f3efe8]">
                    {text1}
                </p>
                <h1 className="display mt-4 max-w-6xl text-[clamp(3rem,14vw,6rem)] leading-[.78] md:text-[clamp(4rem,10vw,8rem)] md:leading-[.8]">
                    {text2}
                    <br />
                    <span className="outline-text">{text3}</span>
                </h1>
                {text4 && (
                    <p className="ml-auto mt-6 max-w-lg text-[13px] leading-[1.7] text-white/70 sm:mt-12 sm:text-base sm:leading-7">
                        {text4}
                    </p>
                )}
            </div>
        </div>
    );
}
