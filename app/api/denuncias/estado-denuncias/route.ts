import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Denuncia from "@/models/Denuncia";

export async function POST(req: Request) {
  await dbConnect();
  const { ticketId, password } = await req.json();

  const denuncia = await Denuncia.findOne({ ticketId, password });
  if (!denuncia) {
    return NextResponse.json({ error: "Ticket o contraseña inválidos" }, { status: 404 });
  }

  return NextResponse.json({
    ticketId: denuncia.ticketId,
    estado: denuncia.estado,
    respuesta: denuncia.respuesta
  });
}