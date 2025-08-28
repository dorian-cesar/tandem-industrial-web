import { NextResponse } from "next/server";
import { SignJWT } from "jose";
import prisma from "@/lib/dbConnect";

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) throw new Error("JWT_SECRET no está definido");

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email y contraseña requeridos" },
        { status: 400 }
      );
    }

    const user = await prisma.user.findFirst({ where: { email, password } });

    if (!user) {
      return NextResponse.json(
        { error: "Usuario o contraseña incorrectos" },
        { status: 401 }
      );
    }

    // Crear token JWT con jose
    const secretKey = new TextEncoder().encode(JWT_SECRET);
    const token = await new SignJWT({ id: user.id, email: user.email })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("7d")
      .sign(secretKey);

    // Guardar token en cookie HTTP-only
    const response = NextResponse.json(
      { message: "Login exitoso" },
      { status: 200 }
    );

    response.cookies.set({
      name: "auth_token",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 7 * 24 * 60 * 60,
    });

    return response;
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Error en login" },
      { status: 500 }
    );
  }
}

// ------------------------
// UPDATE user (by id)
// ------------------------
export async function PUT(req: Request) {
  try {
    const { id, email, password } = await req.json();

    if (!id) {
      return NextResponse.json({ error: "ID requerido" }, { status: 400 });
    }

    const updatedData: any = {};
    if (email) updatedData.email = email;
    if (password) updatedData.password = password;

    const user = await prisma.user.update({
      where: { id },
      data: updatedData,
    });

    return NextResponse.json(user, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Error al actualizar usuario" },
      { status: 500 }
    );
  }
}

// ------------------------
// DELETE user (by id)
// ------------------------
export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ error: "ID requerido" }, { status: 400 });
    }

    await prisma.user.delete({ where: { id } });

    return NextResponse.json({ message: "Usuario eliminado" }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Error al eliminar usuario" },
      { status: 500 }
    );
  }
}
