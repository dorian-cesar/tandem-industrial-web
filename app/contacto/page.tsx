"use client";

import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Handshake } from "lucide-react";
import { Loader2 } from "lucide-react";

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    empresa: "",
    celular: "",
    email: "",
    mensaje: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (error || success) {
      const timer = setTimeout(() => {
        setError("");
        setSuccess("");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [error, success]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;

    if (id === "celular") {
      const filtered = value.replace(/[^0-9+\s]/g, "");
      setFormData({ ...formData, [id]: filtered });
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Correo electrónico inválido.");
      setLoading(false);
      return;
    }

    const celularRegex = /^[0-9+\s]*$/;
    if (!celularRegex.test(formData.celular)) {
      setError(
        "Número de celular inválido. Solo números y signo + permitidos."
      );
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Error al enviar");
      }

      setSuccess("Formulario enviado correctamente.");
      setFormData({
        nombre: "",
        apellido: "",
        empresa: "",
        celular: "",
        email: "",
        mensaje: "",
      });
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("No se pudo enviar el mensaje.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-100">
        <Image
          src="/img/bannerContacto.png"
          alt="Equipo de trabajadores industriales"
          width={1920}
          height={480}
          className="w-full h-full object-cover"
          priority={true}
        />
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Handshake className="w-8 h-8 text-orange-500" />
            <h1 className="text-2xl font-bold text-blue-600">Contacto</h1>
          </div>

          <p className="text-blue-600 dark:text-gray-300">
            Complete el siguiente formulario y nos comunicaremos con usted lo
            antes posible para abordar cómo podemos colaborar y satisfacer sus
            necesidades.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="bg-blue-50 dark:bg-gray-800">
            <CardContent className="p-8">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label
                      htmlFor="nombre"
                      className="text-blue-600 dark:text-gray-300 font-medium"
                    >
                      Nombre(s): *
                    </Label>
                    <Input
                      id="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Ingresa tu nombre"
                      className="mt-1 bg-white text-gray-900 placeholder:text-slate-400 dark:bg-gray-200 dark:text-slate-900 dark:placeholder:text-slate-600"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="apellido"
                      className="text-blue-600 dark:text-gray-300 font-medium"
                    >
                      Apellido(s): *
                    </Label>
                    <Input
                      id="apellido"
                      value={formData.apellido}
                      onChange={handleChange}
                      placeholder="Ingresa tu Apellido"
                      className="mt-1 bg-white text-gray-900 placeholder:text-slate-400 dark:bg-gray-200 dark:text-slate-900 dark:placeholder:text-slate-600"
                    />
                  </div>
                </div>

                <div>
                  <Label
                    htmlFor="empresa"
                    className="text-blue-600 dark:text-gray-300 font-medium"
                  >
                    Empresa: *
                  </Label>
                  <Input
                    id="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    placeholder="Ingresa Nombre de la Empresa"
                    className="mt-1 bg-white text-gray-900 placeholder:text-slate-400 dark:bg-gray-200 dark:text-slate-900 dark:placeholder:text-slate-600"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="celular"
                    className="text-blue-600 dark:text-gray-300 font-medium"
                  >
                    Celular: *
                  </Label>
                  <Input
                    id="celular"
                    value={formData.celular}
                    onChange={handleChange}
                    placeholder="ej. +56912345678"
                    className="mt-1 bg-white text-gray-900 placeholder:text-slate-400 dark:bg-gray-200 dark:text-slate-900 dark:placeholder:text-slate-600"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="email"
                    className="text-blue-600 dark:text-gray-300 font-medium"
                  >
                    Correo Electrónico: *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Ej: ejemplo@ejemplo.com"
                    className="mt-1 bg-white text-gray-900 placeholder:text-slate-400 dark:bg-gray-200 dark:text-slate-900 dark:placeholder:text-slate-600"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="mensaje"
                    className="text-blue-600 dark:text-gray-300 font-medium"
                  >
                    Mensaje: *
                  </Label>
                  <Textarea
                    id="mensaje"
                    rows={6}
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Escribe tu mensaje aquí..."
                    className="mt-1 bg-white text-gray-900 placeholder:text-slate-400 dark:bg-gray-200 dark:text-slate-900 dark:placeholder:text-slate-600"
                  />
                </div>

                {error && <p className="text-red-600">{error}</p>}
                {success && <p className="text-green-600">{success}</p>}

                <div className="flex justify-center">
                  <Button
                    type="submit"
                    disabled={loading}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 flex items-center justify-center gap-2"
                  >
                    {loading && (
                      <Loader2 className="animate-spin h-5 w-5 text-white" />
                    )}
                    Enviar formulario
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
