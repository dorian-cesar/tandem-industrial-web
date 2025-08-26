"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Search, Loader2 } from "lucide-react";
import { motion, AnimatePresence, easeOut } from "framer-motion";

export default function ConsultaTicketPage() {
  const [ticketId, setTicketId] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [resultado, setResultado] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setResultado(null);

    if (!ticketId.trim() || !password.trim()) {
      setError("Debes ingresar número de ticket y contraseña.");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("/api/denuncias/estado-denuncias", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ticketId, password }),
      });

      const data = await res.json();
      if (!res.ok)
        throw new Error(data.error || "Error al consultar el ticket");

      setResultado(data);
    } catch (err) {
      if (err instanceof Error) setError(err.message);
      else setError("Error desconocido.");
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
      {/* Hero */}
      <section className="relative h-60 flex items-center justify-center">
        <Image
          src="/img/logo-tandem.jpg"
          alt="Logo Tandem"
          width={160}
          height={160}
          className="rounded-full object-cover border-4 border-white shadow-lg mt-8"
          priority
        />
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-blue-600 mb-2">
            Consulta de Ticket
          </h1>
          <p className="text-blue-600 dark:text-gray-300">
            Ingresa el número de ticket y la contraseña que recibiste al enviar
            tu denuncia.
          </p>
        </div>

        {/* Formulario */}
        <div className="max-w-lg mx-auto">
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
                      htmlFor="ticketId"
                      className="text-blue-600 dark:text-gray-300 font-medium"
                    >
                      Número de Ticket *
                    </Label>
                    <Input
                      id="ticketId"
                      value={ticketId}
                      onChange={(e) => setTicketId(e.target.value)}
                      placeholder="Ej: T-123456"
                      className="mt-1 bg-white text-gray-900 dark:bg-gray-200 dark:text-slate-900"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="password"
                      className="text-blue-600 dark:text-gray-300 font-medium"
                    >
                      Contraseña *
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="********"
                      className="mt-1 bg-white text-gray-900 dark:bg-gray-200 dark:text-slate-900"
                    />
                  </div>

                  {/* Mensajes */}
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
                        <Search className="h-5 w-5" />
                        Consultar
                      </Button>
                    </motion.div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Resultado */}
          {resultado && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-6"
            >
              <Card className="bg-green-50 dark:bg-gray-700 shadow-lg">
                <CardContent className="p-6 space-y-3">
                  <h2 className="text-lg font-bold text-green-700">
                    Estado del Ticket {resultado.ticketId}
                  </h2>
                  <p>
                    <strong>Estado:</strong> {resultado.estado}
                  </p>
                  <p>
                    <strong>Respuesta:</strong>{" "}
                    {resultado.respuesta || "Aún no hay respuesta."}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
