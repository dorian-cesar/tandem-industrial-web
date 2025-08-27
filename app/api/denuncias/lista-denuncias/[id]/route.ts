import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/dbConnect";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number(params.id);
    if (isNaN(id))
      return NextResponse.json({ error: "ID inválido" }, { status: 400 });

    const ticket = await prisma.denuncia.findUnique({ where: { id } });
    if (!ticket)
      return NextResponse.json(
        { error: "Ticket no encontrado" },
        { status: 404 }
      );

    return NextResponse.json(ticket);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number(params.id);
    if (isNaN(id))
      return NextResponse.json({ error: "ID inválido" }, { status: 400 });

    const body = await req.json();
    const updated = await prisma.denuncia.update({
      where: { id },
      data: {
        ...(body.estado && { estado: body.estado }),
        ...(body.respuesta && { respuesta: body.respuesta }),
      },
    });

    return NextResponse.json(updated);
  } catch (error: any) {
    console.error(error);
    if (error.code === "P2025")
      return NextResponse.json(
        { error: "Ticket no encontrado" },
        { status: 404 }
      );
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number(params.id);
    if (isNaN(id))
      return NextResponse.json({ error: "ID inválido" }, { status: 400 });

    await prisma.denuncia.delete({ where: { id } });
    return NextResponse.json({ message: "Ticket eliminado" }, { status: 200 });
  } catch (error: any) {
    console.error(error);
    if (error.code === "P2025")
      return NextResponse.json(
        { error: "Ticket no encontrado" },
        { status: 404 }
      );
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
