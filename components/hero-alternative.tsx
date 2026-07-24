
interface HeroAlternativeProps {
    text1?: string;
    text2?: string;
    text3?: string;
    text4?: string;
}

export function HeroAlternative({ 
    text1, 
    text2, 
    text3,
    text4,
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