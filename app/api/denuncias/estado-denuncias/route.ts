import { NextResponse } from "next/server";
import prisma from "@/lib/dbConnect";

export async function POST(req: Request) {
  const { ticketId, password } = await req.json();

  const denuncia = await prisma.denuncia.findFirst({
    where: { ticketId, password },
  });

  if (!denuncia) {
    return NextResponse.json(
      { error: "Ticket o contraseña inválidos" },
      { status: 404 }
    );
  }

  return NextResponse.json({
    ticketId: denuncia.ticketId,
    estado: denuncia.estado,
    respuesta: denuncia.respuesta,
  });
}
