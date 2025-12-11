import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Función para sanitizar datos de entrada
function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>]/g, "");
}

// Función para validar email
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Template HTML mejorado para el email
function createEmailTemplate(data: {
  nombre: string;
  apellido: string;
  empresa: string;
  celular: string;
  email: string;
  mensaje: string;
}): string {
  return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Nuevo Contacto Comercial - Tandem Industrial</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif; background-color: #f8fafc;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">

        <!-- Header -->
        <div style="background: #1e3a8a; padding: 30px 20px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700;">
            📧 Nuevo Contacto Comercial
          </h1>
          <p style="color: #e2e8f0; margin: 8px 0 0 0; font-size: 16px; opacity: 0.9;">
            Tandem Industrial
          </p>
        </div>

        <!-- Content -->
        <div style="padding: 40px 30px;">

          <!-- Contact Info Card -->
          <div style="background-color: #f8fafc; border-radius: 12px; padding: 25px; margin-bottom: 30px;">
            <h2 style="color: #1e293b; margin: 0 0 20px 0; font-size: 20px; font-weight: 600;">
              👤 Información de Contacto
            </h2>

            <table style="width: 100%; border-collapse: separate; border-spacing: 0;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; width: 30%;">
                  <span style="font-weight: 600; color: #475569; font-size: 14px;">
                    🏷️ Nombre:
                  </span>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; padding-left: 15px;">
                  <span style="color: #1e293b; font-size: 15px;">
                    ${data.nombre} ${data.apellido}
                  </span>
                </td>
              </tr>

              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                  <span style="font-weight: 600; color: #475569; font-size: 14px;">
                    🏢 Empresa:
                  </span>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; padding-left: 15px;">
                  <span style="color: #1e293b; font-size: 15px;">
                    ${data.empresa || "No especificada"}
                  </span>
                </td>
              </tr>

              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                  <span style="font-weight: 600; color: #475569; font-size: 14px;">
                    📱 Celular:
                  </span>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; padding-left: 15px;">
                  <span style="color: #1e293b; font-size: 15px;">
                    <a href="tel:${
                      data.celular
                    }" style="color: #1e3a8a; text-decoration: none;">
                      ${data.celular}
                    </a>
                  </span>
                </td>
              </tr>

              <tr>
                <td style="padding: 12px 0;">
                  <span style="font-weight: 600; color: #475569; font-size: 14px;">
                    ✉️ Email:
                  </span>
                </td>
                <td style="padding: 12px 0; padding-left: 15px;">
                  <span style="color: #1e293b; font-size: 15px;">
                    <a href="mailto:${
                      data.email
                    }" style="color: #1e3a8a; text-decoration: none;">
                      ${data.email}
                    </a>
                  </span>
                </td>
              </tr>
            </table>
          </div>

          <!-- Message Card -->
          <div style="background-color: #fefefe; border-radius: 12px; padding: 25px; border: 1px solid #e2e8f0; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);">
            <h3 style="color: #1e293b; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">
              💬 Mensaje
            </h3>
            <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px;">
              <p style="color: #334155; line-height: 1.6; margin: 0; white-space: pre-wrap; font-size: 15px;">
                ${data.mensaje}
              </p>
            </div>
          </div>

          <!-- Action Buttons -->
          <div style="text-align: center; margin-top: 30px;">
            <a href="mailto:${data.email}"
               style="display: inline-block; background: #1e3a8a; color: #ffffff; padding: 12px 25px; text-decoration: none; border-radius: 8px; font-weight: 600; margin: 0 10px; box-shadow: 0 2px 4px rgba(30, 58, 138, 0.3); transition: all 0.3s ease;">
              📧 Responder Email
            </a>
            <a href="tel:${data.celular}"
               style="display: inline-block; background: #334155; color: #ffffff; padding: 12px 25px; text-decoration: none; border-radius: 8px; font-weight: 600; margin: 0 10px; box-shadow: 0 2px 4px rgba(51, 65, 85, 0.3); transition: all 0.3s ease;">
              📞 Llamar
            </a>
          </div>
        </div>

        <!-- Footer -->
        <div style="background-color: #f1f5f9; padding: 20px 30px; text-align: center; border-top: 1px solid #e2e8f0;">
          <p style="color: #64748b; margin: 0; font-size: 13px; line-height: 1.5;">
            📅 Recibido el ${new Date().toLocaleDateString("es-ES", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
          <p style="color: #94a3b8; margin: 8px 0 0 0; font-size: 12px;">
            Este mensaje fue enviado desde el formulario de contacto de tu sitio web
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nombre, apellido, empresa, celular, email, mensaje } = body;

    // Validaciones
    const requiredFields = { nombre, apellido, celular, email, mensaje };
    const missingFields = Object.entries(requiredFields)
      .filter(([_, value]) => !value || value.trim() === "")
      .map(([key, _]) => key);

    if (missingFields.length > 0) {
      return NextResponse.json(
        {
          error: "Faltan campos obligatorios",
          missingFields,
          message: `Los siguientes campos son requeridos: ${missingFields.join(
            ", "
          )}`,
        },
        { status: 400 }
      );
    }

    // Validar formato de email
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "El formato del email no es válido" },
        { status: 400 }
      );
    }

    // Sanitizar datos
    const sanitizedData = {
      nombre: sanitizeInput(nombre),
      apellido: sanitizeInput(apellido),
      empresa: empresa ? sanitizeInput(empresa) : "",
      celular: sanitizeInput(celular),
      email: sanitizeInput(email),
      mensaje: sanitizeInput(mensaje),
    };

    // Validar longitud de campos
    if (sanitizedData.mensaje.length > 2000) {
      return NextResponse.json(
        { error: "El mensaje es demasiado largo (máximo 2000 caracteres)" },
        { status: 400 }
      );
    }

    // Configurar transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_FROM,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
      },
    });

    // Verificar configuración del transporter
    await transporter.verify();

    // Enviar email principal
    await transporter.sendMail({
      from: `"Formulario Web - Tandem Industrial" <${process.env.NEXT_PUBLIC_EMAIL_FROM}>`,
      to: process.env.NEXT_PUBLIC_EMAIL_COMERCIAL,
      subject: `🔔 Nuevo contacto de ${sanitizedData.nombre} ${sanitizedData.apellido}`,
      text: `
        NUEVO CONTACTO DESDE EL FORMULARIO WEB
        =====================================

        Nombre: ${sanitizedData.nombre} ${sanitizedData.apellido}
        Empresa: ${sanitizedData.empresa || "No especificada"}
        Celular: ${sanitizedData.celular}
        Email: ${sanitizedData.email}

        Mensaje:
        ${sanitizedData.mensaje}

        ---
        Recibido el: ${new Date().toLocaleString("es-ES")}
      `,
      html: createEmailTemplate(sanitizedData),
    });

    // Email de confirmación automática (opcional)
    await transporter.sendMail({
      from: `"Tandem Industrial" <${process.env.NEXT_PUBLIC_EMAIL_FROM}>`,
      to: sanitizedData.email,
      subject: "✅ Hemos recibido tu mensaje - Tandem Industrial",
      html: `
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f8fafc; margin: 0; padding: 20px;">
          <div style="max-width: 500px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden;">
            <div style="background: #49a35a; padding: 30px 20px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px;">✅ ¡Mensaje Recibido!</h1>
            </div>
            <div style="padding: 30px 20px; text-align: center;">
              <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                Hola <strong>${sanitizedData.nombre}</strong>,
              </p>
              <p style="color: #6b7280; font-size: 15px; line-height: 1.6; margin: 0 0 20px 0;">
                Hemos recibido tu mensaje y nos pondremos en contacto contigo lo antes posible.
              </p>
              <p style="color: #9ca3af; font-size: 13px; margin: 20px 0 0 0;">
                Gracias por contactarnos.<br>
                <strong>Equipo Tandem Industrial</strong>
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Mensaje enviado correctamente",
    });
  } catch (error) {
    console.error("Error al enviar email:", error);

    // Manejo de errores más específico
    if (error instanceof Error) {
      if (error.message.includes("Invalid login")) {
        return NextResponse.json(
          { error: "Error de configuración del servidor de email" },
          { status: 500 }
        );
      }

      if (error.message.includes("Network")) {
        return NextResponse.json(
          { error: "Error de conexión. Inténtalo de nuevo." },
          { status: 503 }
        );
      }
    }

    return NextResponse.json(
      { error: "No se pudo enviar el mensaje. Inténtalo de nuevo." },
      { status: 500 }
    );
  }
}
