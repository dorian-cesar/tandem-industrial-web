"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Handshake, Loader2, AlertCircle, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
      const res = await fetch("/api/contacto-comercial", {
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

  const fadeInUp = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
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
            <h1 className="text-2xl font-bold text-blue-600">Contacto Comercial</h1>
          </div>

          <p className="text-blue-600 dark:text-gray-300">
            Complete el siguiente formulario y nos comunicaremos con usted lo
            antes posible para abordar cómo podemos colaborar y satisfacer sus
            necesidades.
          </p>
        </div>

        {/* Contact Form with animation */}
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Card className="bg-blue-50 dark:bg-gray-800 shadow-lg">
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
                      Empresa:
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

                  {/* Animated messages */}
                  <AnimatePresence mode="wait">
                    {error && (
                      <motion.div
                        key="error"
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="flex items-center gap-2 text-red-600"
                      >
                        <AlertCircle className="h-5 w-5" />
                        <p>{error}</p>
                      </motion.div>
                    )}
                    {success && (
                      <motion.div
                        key="success"
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="flex items-center gap-2 text-green-600"
                      >
                        <CheckCircle className="h-5 w-5" />
                        <p>{success}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex justify-center">
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
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
                    </motion.div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
