import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { nombre, apellido, empresa, celular, email, mensaje } =
    await req.json();

  if (!email || !mensaje || !nombre || !apellido || !celular || !empresa) {
    return NextResponse.json(
      { error: "Faltan campos obligatorios." },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_FROM,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Formulario Web" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      subject: "📩 Nuevo contacto desde el formulario web",
      text: `
        Nombre: ${nombre} ${apellido}
        Empresa: ${empresa}
        Celular: ${celular}
        Email: ${email}

        Mensaje:
        ${mensaje}
          `,
              html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
              <h2 style="color: #2563eb;">Nuevo contacto desde el formulario web</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tbody>
                  <tr>
                    <td style="font-weight: bold; padding: 8px; border: 1px solid #ddd;">Nombre:</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">${nombre} ${apellido}</td>
                  </tr>
                  <tr>
                    <td style="font-weight: bold; padding: 8px; border: 1px solid #ddd;">Empresa:</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">${
                      empresa || "-"
                    }</td>
                  </tr>
                  <tr>
                    <td style="font-weight: bold; padding: 8px; border: 1px solid #ddd;">Celular:</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">${
                      celular || "-"
                    }</td>
                  </tr>
                  <tr>
                    <td style="font-weight: bold; padding: 8px; border: 1px solid #ddd;">Email:</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
                  </tr>
                </tbody>
              </table>

              <h3 style="margin-top: 20px; color: #2563eb;">Mensaje:</h3>
              <p style="white-space: pre-wrap; padding: 10px; background-color: #f3f4f6; border-radius: 5px; border: 1px solid #ddd;">
                ${mensaje}
              </p>

              <footer style="margin-top: 30px; font-size: 12px; color: #888;">
                Este mensaje fue enviado desde el formulario de contacto de tu sitio web.
              </footer>
            </div>
          `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error al enviar email:", error);
    return NextResponse.json(
      { error: "No se pudo enviar el mensaje." },
      { status: 500 }
    );
  }
}
