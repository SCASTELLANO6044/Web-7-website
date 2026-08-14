import { NextResponse } from "next/server";

export const runtime = "nodejs";

const MAX_FIELD_LENGTH = 2_000;

function value(body: Record<string, unknown>, key: string) {
  const field = body[key];
  return typeof field === "string" ? field.trim() : "";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const name = value(body, "name");
    const email = value(body, "email");
    const company = value(body, "company");
    const budget = value(body, "budget");
    const message = value(body, "message");
    const website = value(body, "website");

    // A hidden honeypot for simple automated submissions. Pretend success so bots
    // cannot distinguish it from a delivered form.
    if (website) return NextResponse.json({ ok: true });

    if (!name || !isValidEmail(email) || !message)
      return NextResponse.json(
        { error: "Por favor, completa tu nombre, correo electrónico y mensaje." },
        { status: 400 },
      );

    if ([name, email, company, budget, message].some((field) => field.length > MAX_FIELD_LENGTH))
      return NextResponse.json(
        { error: "Uno de los campos es demasiado largo." },
        { status: 400 },
      );

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;
    if (!apiKey || !to || !from)
      return NextResponse.json(
        {
          error:
            "El formulario de contacto aún no está configurado. Por favor, escríbenos directamente a web7canarias@gmail.com.",
        },
        { status: 503 },
      );

    const content = `Nueva solicitud de proyecto para Web7\n\nNombre: ${name}\nEmail: ${email}\nEmpresa: ${company || "—"}\nPresupuesto: ${budget || "—"}\n\nMensaje:\n${message}`;
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Nueva solicitud de proyecto de ${name}`,
        text: content,
      }),
    });

    if (!response.ok) {
      console.error("Resend rejected contact form email", await response.text());
      throw new Error("Email provider rejected the request");
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      {
        error:
          "No pudimos enviar el mensaje en este momento. Por favor, envíanos un correo electrónico a web7canarias@gmail.com directamente.",
      },
      { status: 500 },
    );
  }
}
