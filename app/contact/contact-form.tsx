"use client";
import { FormEvent, useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
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
    const [state, setState] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
);
    const [error, setError] = useState("");
    const update = (key: keyof typeof data, value: string) =>
    setData((prev) => ({ ...prev, [key]: value }));
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
    setState("sent");
    setData(initial);
    } catch (err) {
    setError(
        err instanceof Error
        ? err.message
        : "Something went wrong. Please email us directly.",
    );
    setState("error");
    }
}
if (state === "sent")
    return (
    <div className="grid min-h-[480px] place-items-center border border-white/20 p-8 text-center">
        <div>
        <CheckCircle2 className="mx-auto size-10 text-[#ffb8b3]" />
        <h2 className="display mt-5 text-5xl">Thank you.</h2>
        <p className="mt-4 max-w-xs text-sm leading-6 text-white/60">
            Your message is on its way. We&apos;ll be in touch soon.
        </p>
        <button
            onClick={() => setState("idle")}
            className="mt-7 text-xs uppercase tracking-wider text-[#ffb8b3]"
        >
            Send another message
        </button>
        </div>
    </div>
    );
return (
    <form onSubmit={submit} className="border-t border-white/20 pt-6">
    <div className="grid gap-x-6 md:grid-cols-2">
        <Field label="Your name" required>
        <input
            value={data.name}
            onChange={(e) => update("name", e.target.value)}
            required
            autoComplete="name"
        />
        </Field>
        <Field label="Email address" required>
        <input
            type="email"
            value={data.email}
            onChange={(e) => update("email", e.target.value)}
            required
            autoComplete="email"
        />
        </Field>
        <Field label="Company">
        <input
            value={data.company}
            onChange={(e) => update("company", e.target.value)}
            autoComplete="organization"
        />
        </Field>
        <Field label="Investment range">
        <select
            value={data.budget}
            onChange={(e) => update("budget", e.target.value)}
        >
            <option value="">Select one</option>
            <option>€2k – €5k</option>
            <option>€5k – €10k</option>
            <option>€10k – €25k</option>
            <option>€25k+</option>
            <option>Let&apos;s discuss</option>
        </select>
        </Field>
    </div>
    <Field label="Tell us what you're making" required>
        <textarea
        value={data.message}
        onChange={(e) => update("message", e.target.value)}
        required
        rows={5}
        />
    </Field>
    <div className="absolute -left-[10000px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
        id="website"
        tabIndex={-1}
        autoComplete="off"
        value={data.website}
        onChange={(e) => update("website", e.target.value)}
        />
    </div>
    {state === "error" && (
        <p role="alert" className="mb-5 text-sm text-[#ffb8b3]">
        {error}
        </p>
    )}
    <button
        disabled={state === "sending"}
        className="inline-flex items-center gap-3 rounded-full bg-[#ffb8b3] px-6 py-4 text-xs uppercase tracking-[.12em] text-[#090909] transition-transform hover:scale-95 disabled:opacity-60"
    >
        {state === "sending" ? "Sending…" : "Send inquiry"}
        <ArrowUpRight size={16} />
    </button>
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
      {required && <span className="text-[#ffb8b3]"> *</span>}
    <span className="mt-3 block border-b border-white/25 pb-3 text-sm normal-case tracking-normal text-white [&_input]:w-full [&_input]:bg-transparent [&_input]:outline-none [&_select]:w-full [&_select]:bg-[#090909] [&_select]:outline-none [&_textarea]:w-full [&_textarea]:resize-none [&_textarea]:bg-transparent [&_textarea]:outline-none">
        {children}
    </span>
    </label>
);
}
