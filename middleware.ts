import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) throw new Error("JWT_SECRET no está definido");
const secretKey = new TextEncoder().encode(JWT_SECRET);

export async function middleware(req: NextRequest) {
  console.log("Middleware ejecutándose para:", req.nextUrl.pathname);

  const cookieHeader = req.headers.get("cookie") || "";
  const authTokenMatch = cookieHeader.match(/auth_token=([^;]+)/);
  const token = authTokenMatch ? authTokenMatch[1] : null;

  console.log("Token encontrado:", token ? "Sí" : "No");

  // ✅ RUTAS PÚBLICAS - Acceso libre sin verificación
  if (
    req.nextUrl.pathname.startsWith("/login") ||
    req.nextUrl.pathname.startsWith("/canal-denuncias/ver-estado") ||
    req.nextUrl.pathname.startsWith("/api/users")
  ) {
    console.log("Ruta pública, permitiendo acceso");

    // Solo para /login: si ya tiene token válido, redirigir
    if (req.nextUrl.pathname.startsWith("/login") && token) {
      try {
        await jwtVerify(token, secretKey);
        console.log("Ya autenticado, redirigiendo a lista-denuncias");
        return NextResponse.redirect(
          new URL("/canal-denuncias/lista-denuncias", req.url)
        );
      } catch (error) {
        console.log("Token inválido, permitiendo acceso a login");
        return NextResponse.next();
      }
    }

    return NextResponse.next();
  }

  // ✅ RUTAS PROTEGIDAS - Requieren autenticación
  if (!token) {
    console.log("No hay token, redirigiendo a login");
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
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
    "/login",
    "/canal-denuncias/lista-denuncias",
    "/canal-denuncias/lista-denuncias/:path*",
    "/canal-denuncias/ver-estado",
    "/canal-denuncias/ver-estado/:path*",
    "/api/users/:path*",
  ],
};
