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
            <p className="eyebrow">
                {text1}
            </p>
            <h1 className="display mt-4 max-w-6xl text-6xl leading-[.8] md:text-9xl">
                {text2}
                <br />
                <span className="outline-text">{text3}</span>
            </h1>
            <div className="ml-auto mt-12 max-w-lg text-sm leading-7 text-white/60">
                {text4}
            </div>
        </>
    );
}