import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Sanitizar entrada
function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>]/g, "");
}

// Template email para denuncia
function createDenunciaTemplate(data: { mensaje: string }): string {
  return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8" />
      <title>Nuevo Reporte - Canal de Denuncias</title>
    </head>
    <body style="margin:0;padding:0;font-family:Arial, sans-serif;background:#f9fafb;">
      <div style="max-width:600px;margin:20px auto;background:#fff;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.1);overflow:hidden;">
        <div style="background:#bf2c2c;padding:20px;text-align:center;">
          <h1 style="color:#fff;margin:0;">🚨 Nuevo Reporte</h1>
          <p style="color:#fcd34d;margin:5px 0 0;">Canal de Denuncias (Anónimo)</p>
        </div>
        <div style="padding:30px;">
          <h2 style="font-size:18px;color:#111827;margin-top:0;">📌 Detalles</h2>
          <div style="margin-top:20px;background:#f3f4f6;padding:15px;border-radius:6px;">
            <p style="margin:0;white-space:pre-line;">${data.mensaje}</p>
          </div>
        </div>
        <div style="background:#f9fafb;padding:15px;text-align:center;font-size:12px;color:#6b7280;border-top:1px solid #e5e7eb;">
          📅 Recibido el ${new Date().toLocaleString("es-ES")}
        </div>
      </div>
    </body>
    </html>
  `;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { mensaje } = body;

    // Validar campo requerido
    if (!mensaje || mensaje.trim() === "") {
      return NextResponse.json(
        { error: "El mensaje es obligatorio" },
        { status: 400 }
      );
    }

    // Sanitizar
    const sanitizedData = {
      mensaje: sanitizeInput(mensaje),
    };

    if (sanitizedData.mensaje.length > 3000) {
      return NextResponse.json(
        { error: "El mensaje es demasiado largo (máx. 3000 caracteres)" },
        { status: 400 }
      );
    }

    // Configurar transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.verify();

    // Enviar correo al equipo interno
    await transporter.sendMail({
      from: `"Canal de Denuncias" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      subject: `🚨 Nuevo reporte anónimo en Canal de Denuncias`,
      text: `
        NUEVO REPORTE ANÓNIMO
        =====================

        Mensaje:
        ${sanitizedData.mensaje}

        ---
        Recibido el: ${new Date().toLocaleString("es-ES")}
      `,
      html: createDenunciaTemplate(sanitizedData),
    });

    return NextResponse.json({
      success: true,
      message: "Reporte enviado correctamente (anónimo)",
    });
  } catch (error) {
    console.error("Error al enviar denuncia:", error);
    return NextResponse.json(
      { error: "No se pudo enviar el reporte. Inténtalo de nuevo." },
      { status: 500 }
    );
  }
}

// import { NextResponse } from "next/server";
// import crypto from "crypto";
// import dbConnect from "@/lib/dbConnect";
// import Denuncia from "@/models/Denuncia";

// function generateTicketId() {
//   return "T-" + Math.floor(100000 + Math.random() * 900000); // ej: T-123456
// }

// function generatePassword() {
//   return crypto.randomBytes(4).toString("hex"); // ej: a1b2c3d4
// }

// export async function POST(req: Request) {
//   try {
//     await dbConnect();
//     const { mensaje } = await req.json();

//     if (!mensaje || mensaje.trim() === "") {
//       return NextResponse.json({ error: "El mensaje es obligatorio" }, { status: 400 });
//     }

//     const ticketId = generateTicketId();
//     const password = generatePassword();

//     const denuncia = await Denuncia.create({
//       ticketId,
//       password,
//       mensaje
//     });

//     return NextResponse.json({
//       success: true,
//       message: "Denuncia registrada",
//       ticketId: denuncia.ticketId,
//       password: denuncia.password
//     });
//   } catch (error) {
//     console.error("Error:", error);
//     return NextResponse.json({ error: "Error interno" }, { status: 500 });
//   }
// }
