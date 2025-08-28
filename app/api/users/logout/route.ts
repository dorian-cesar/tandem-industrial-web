import { NextResponse } from "next/server";

export async function POST() {
  const res = NextResponse.json({ message: "Sesión cerrada" });
  
  // Borrar la cookie correcta
  res.cookies.set({
    name: "auth_token", 
    value: "",
    path: "/",       
    expires: new Date(0),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });

  return res;
}