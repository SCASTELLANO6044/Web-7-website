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
        <>
            <p className="eyebrow" style={{ color: 'red' }}>
                {text1}
            </p>
            <h1 className="display mt-4 max-w-6xl text-[clamp(3rem,14vw,6rem)] leading-[.8] md:text-[clamp(4rem,10vw,8rem)]">
                {text2}
                <br />
                <span className="outline-text">{text3}</span>
            </h1>
            <div className="ml-auto mt-12 max-w-lg text-sm leading-7 text-white/60 sm:text-base">
                {text4}
            </div>
        </>
    );
}
