
interface HorizontalTextLoopProps {
    text1?: string;
    text2?: string;
}

export function HorizontalTextLoop({
    text1 = "DESIGN WITH INTENT",
    text2 = "BUILD WITH PURPOSE",
}: HorizontalTextLoopProps) {
    return (
        <section className="border-y border-white/15 py-4 overflow-hidden">
            <div className="marquee flex w-max gap-8 whitespace-nowrap text-[14vw] leading-none text-white/15">
                <span>{text1}</span>
                <span className="text-[#ff0000]">•</span>
                <span>{text2}</span>
                <span className="text-[#ff0000]">•</span>
                <span>{text1}</span>
                <span className="text-[#ff0000]">•</span>
                <span>{text2}</span>
            </div>
        </section>
    );
}