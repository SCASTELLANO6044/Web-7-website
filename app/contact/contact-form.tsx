"use client";
import { FormEvent, useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import SpecularButton from "@/components/specular-button";
import { ReceiptPrinter } from "@/components/receipt-printer";
const initial = {
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
    website: "",
};
export function ContactForm() {
    const [data, setData] = useState(initial);
    const [state, setState] = useState<"idle" | "sending" | "printing" | "sent" | "error">(
        "idle",
    );
    const [submitted, setSubmitted] = useState(initial);
    const [error, setError] = useState("");
    const update = (key: keyof typeof data, value: string) =>
        setData((prev) => ({ ...prev, [key]: value }));

    useEffect(() => {
        if (state !== "printing") return;

        const duration = window.matchMedia("(prefers-reduced-motion: reduce)").matches
            ? 0
            : 1450;
        const timer = window.setTimeout(() => setState("sent"), duration);
        return () => window.clearTimeout(timer);
    }, [state]);
    async function submit(e: FormEvent) {
        e.preventDefault();
        setState("sending");
        setError("");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            const body = await res.json();
            if (!res.ok) throw new Error(body.error);
            setSubmitted(data);
            setState("printing");
            setData(initial);
        } catch (err) {
            setError(
                err instanceof Error
                    ? err.message
                    : "Ha ocurrido un error. Por favor, escríbenos directamente por correo electrónico.",
            );
            setState("error");
        }
    }
    if (state === "printing" || state === "sent")
        return (
            <div className="border-t border-white/20 pt-6">
                <ReceiptPrinter
                    budget={submitted.budget}
                    company={submitted.company}
                    name={submitted.name}
                    stage={state === "sent" ? "complete" : "printing"}
                />
                <div className="mt-6 text-center">
                    <p className="text-sm leading-6 text-white/60">Tu mensaje está en camino. Nos pondremos en contacto pronto.</p>
                    <button
                        className="mt-5 min-h-11 text-xs uppercase tracking-wider text-[#ff0000] transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff0000]"
                        onClick={() => setState("idle")}
                        type="button"
                    >
                        Enviar otro mensaje
                    </button>
                </div>
            </div>
        );
    return (
        <form aria-busy={state === "sending"} onSubmit={submit} className="border-t border-white/20 pt-6">
            <div className="grid gap-x-6 md:grid-cols-2">
                <Field label="Nombre" required>
                    <input
                        value={data.name}
                        onChange={(e) => update("name", e.target.value)}
                        required
                        autoComplete="name"
                    />
                </Field>
                <Field label="Email" required>
                    <input
                        type="email"
                        value={data.email}
                        onChange={(e) => update("email", e.target.value)}
                        required
                        autoComplete="email"
                    />
                </Field>
                <Field label="Empresa / Organization">
                    <input
                        value={data.company}
                        onChange={(e) => update("company", e.target.value)}
                        autoComplete="organization"
                    />
                </Field>
                <Field label="Presupuesto">
                    <select
                        value={data.budget}
                        onChange={(e) => update("budget", e.target.value)}
                    >
                        <option value="">Selecciona uno</option>
                        <option>€2k – €5k</option>
                        <option>€5k – €10k</option>
                        <option>€10k – €25k</option>
                        <option>€25k+</option>
                        <option>Let&apos;s discuss</option>
                    </select>
                </Field>
            </div>
            <Field label="Cuéntanos tu idea" required>
                <textarea
                    value={data.message}
                    onChange={(e) => update("message", e.target.value)}
                    required
                    rows={5}
                />
            </Field>
            <div className="absolute -left-[10000px]" aria-hidden="true">
                <label htmlFor="website">Sitio web</label>
                <input
                    id="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={data.website}
                    onChange={(e) => update("website", e.target.value)}
                />
            </div>
            {state === "error" && (
                <p role="alert" className="mb-5 text-sm text-[#ff0000]">
                    {error}
                </p>
            )}
            <SpecularButton
                disabled={state === "sending"}
                type="submit"
                size="custom"
                radius={999}
                tint="#ff0000"
                tintOpacity={1}
                textColor="#090909"
                lineColor="#ffffff"
                baseColor="#6b0000"
                style={{ backgroundColor: "#ff0000", border: "none" }}
                className="inline-flex items-center gap-3 rounded-full bg-[#ff0000] px-6 py-4 text-xs uppercase tracking-[.12em] text-[#090909] transition-transform hover:scale-95 disabled:opacity-60"
            >
                {state === "sending" ? "Enviando..." : "Enviar consulta"}
                <ArrowUpRight size={16} />
            </SpecularButton>
        </form>
    );
}
function Field({
    label,
    required,
    children,
}: {
    label: string;
    required?: boolean;
    children: React.ReactNode;
}) {
    return (
        <label className="mb-7 block text-xs uppercase tracking-[.1em] text-white/50">
            {label}
            {required && <span className="text-[#ff0000]"> *</span>}
            <span className="mt-3 block border-b border-white/25 pb-3 text-sm normal-case tracking-normal text-white [&_input]:w-full [&_input]:bg-transparent [&_input]:outline-none [&_select]:w-full [&_select]:bg-[#090909] [&_select]:outline-none [&_textarea]:w-full [&_textarea]:resize-none [&_textarea]:bg-transparent [&_textarea]:outline-none">
                {children}
            </span>
        </label>
    );
}
