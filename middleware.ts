import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) throw new Error("JWT_SECRET no está definido");

// Crear secret key para jose
const secretKey = new TextEncoder().encode(JWT_SECRET);

export async function middleware(req: NextRequest) {
  console.log("Middleware ejecutándose para:", req.nextUrl.pathname);

  const cookieHeader = req.headers.get("cookie") || "";
  const authTokenMatch = cookieHeader.match(/auth_token=([^;]+)/);
  const token = authTokenMatch ? authTokenMatch[1] : null;

  console.log("Token encontrado:", token ? "Sí" : "No");

  // Rutas públicas
  if (
    req.nextUrl.pathname.startsWith("/login") ||
    req.nextUrl.pathname.startsWith("/api/users") ||
    req.nextUrl.pathname.startsWith("/canal-denuncias/ver-estado")
  ) {
    console.log("Ruta pública, permitiendo acceso");
    return NextResponse.next();
  }

  // Rutas protegidas
  if (!token) {
    console.log("No hay token, redirigiendo a login");
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    // Verificar el token con jose (compatible con Edge)
    await jwtVerify(token, secretKey);
    console.log("Token válido, permitiendo acceso");
    return NextResponse.next();
  } catch (error) {
    console.log("Token inválido, redirigiendo a login", error);
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: [
    "/canal-denuncias/lista-denuncias",
    "/canal-denuncias/lista-denuncias/:path*",
  ],
};
