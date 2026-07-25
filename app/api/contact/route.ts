import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, budget, message, website } = body as Record<
      string,
      string
    >;
    if (website) return NextResponse.json({ ok: true });
    if (!name?.trim() || !email?.includes("@") || !message?.trim())
      return NextResponse.json(
        { error: "Por favor, completa tu nombre, correo electrónico y mensaje." },
        { status: 400 },
      );
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey)
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
        from: "Sitio web de Web7 <onboarding@resend.dev>",
        to: [process.env.CONTACT_TO_EMAIL || "web7canarias@gmail.com"],
        reply_to: email,
        subject: `Nueva solicitud de proyecto de ${name}`,
        text: content,
      }),
    });
    if (!response.ok) throw new Error("Email provider rejected the request");
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
