"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Megaphone, Loader2, AlertCircle, CheckCircle } from "lucide-react";
import { motion, AnimatePresence, easeOut } from "framer-motion";

export default function CanalDenunciasPage() {
  const [mensaje, setMensaje] = useState("");
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    if (!mensaje.trim()) {
      setError("Debes escribir tu denuncia.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/denuncias", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mensaje }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Error al enviar la denuncia.");
      }

      setSuccess("Tu denuncia fue enviada de manera anónima.");
      setMensaje("");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("No se pudo enviar la denuncia.");
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
      <section className="relative h-60 flex items-center justify-center">
        <Image
          src="/img/logo-tandem.jpg"
          alt="Logo Tandem"
          width={180}
          height={180}
          className="rounded-full object-cover border-4 border-white shadow-lg mt-8"
          priority={true}
        />
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Megaphone className="w-8 h-8 text-red-500" />
            <h1 className="text-2xl font-bold text-blue-600">
              Canal de Denuncias Anónimo
            </h1>
          </div>

          <p className="text-blue-600 dark:text-gray-300">
            Este canal es completamente anónimo. Por favor, describe con el
            mayor detalle posible tu denuncia. Tu identidad no será registrada.
          </p>
        </div>

        {/* Formulario */}
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
            viewport={{ once: true }}
          >
            <Card className="bg-blue-50 dark:bg-gray-800 shadow-lg">
              <CardContent className="p-8">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <Label
                      htmlFor="mensaje"
                      className="text-blue-600 dark:text-gray-300 font-medium"
                    >
                      Denuncia: *
                    </Label>
                    <Textarea
                      id="mensaje"
                      rows={8}
                      value={mensaje}
                      onChange={(e) => setMensaje(e.target.value)}
                      placeholder="Escribe tu denuncia aquí..."
                      className="mt-1 bg-white text-gray-900 placeholder:text-slate-400 dark:bg-gray-200 dark:text-slate-900 dark:placeholder:text-slate-600"
                    />
                  </div>

                  {/* Mensajes de estado */}
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
                        className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 flex items-center justify-center gap-2"
                      >
                        {loading && (
                          <Loader2 className="animate-spin h-5 w-5 text-white" />
                        )}
                        Enviar denuncia
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
