import { NextResponse } from "next/server";
import prisma from "@/lib/dbConnect";

export async function GET() {
  try {
    const tickets = await prisma.denuncia.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(tickets, {
      headers: {
        "Cache-Control":
          "no-store, no-cache, must-revalidate, proxy-revalidate",
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
