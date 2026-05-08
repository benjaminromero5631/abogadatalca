import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, area, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Campos requeridos faltantes" }, { status: 400 });
    }

    const resendKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!resendKey || !contactEmail) {
      console.warn("Resend no configurado - formulario recibido:", { name, email, area });
      return NextResponse.json({ ok: true });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Abogadas Talca <noreply@abogadastalca.cl>",
        to: [contactEmail],
        subject: `Nueva consulta: ${area || "General"} — ${name}`,
        html: `
          <h2>Nueva consulta desde el sitio web</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Telefono:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Area:</strong> ${area}</p>
          <hr/>
          <p>${message.replace(/\n/g, "<br/>")}</p>
        `,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Resend error:", err);
      return NextResponse.json({ error: "Error enviando email" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
