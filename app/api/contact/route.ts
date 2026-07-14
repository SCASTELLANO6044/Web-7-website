import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, budget, message, website } = body as Record<string,string>;
    if (website) return NextResponse.json({ ok:true });
    if (!name?.trim() || !email?.includes("@") || !message?.trim()) return NextResponse.json({ error:"Please complete your name, email and message." }, { status:400 });
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) return NextResponse.json({ error:"The contact form is not configured yet. Please email web7canarias@gmail.com directly." }, { status:503 });
    const content = `New Web7 project inquiry\n\nName: ${name}\nEmail: ${email}\nCompany: ${company || "—"}\nBudget: ${budget || "—"}\n\nMessage:\n${message}`;
    const response = await fetch("https://api.resend.com/emails", { method:"POST", headers:{ Authorization:`Bearer ${apiKey}`, "Content-Type":"application/json" }, body:JSON.stringify({ from:"Web7 Website <onboarding@resend.dev>", to:[process.env.CONTACT_TO_EMAIL || "web7canarias@gmail.com"], reply_to:email, subject:`New project inquiry from ${name}`, text:content }) });
    if (!response.ok) throw new Error("Email provider rejected the request");
    return NextResponse.json({ ok:true });
  } catch { return NextResponse.json({ error:"We couldn’t send that just now. Please email web7canarias@gmail.com directly." }, { status:500 }); }
}
