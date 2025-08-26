"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Megaphone, Loader2, AlertCircle, CheckCircle } from "lucide-react";
import { motion, AnimatePresence, easeOut } from "framer-motion";
import jsPDF from "jspdf";

export default function CanalDenunciasPage() {
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState<JSX.Element | null>(null);
  const [ticketData, setTicketData] = useState<{
    ticketId: string;
    password: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(null);
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

      const data = await res.json();
      setTicketData({ ticketId: data.ticketId, password: data.password });

      setSuccess(
        <div className="space-y-2">
          <p>
            <strong>Denuncia enviada correctamente.</strong>
          </p>
          <p>
            Guarda tu ticket: <strong>{data.ticketId}</strong>
          </p>
          <p>
            Contraseña generada: <strong>{data.password}</strong>
          </p>
          <p>
            Puedes usar estos datos para consultar el estado de tu denuncia.
          </p>
        </div>
      );

      setMensaje("");
    } catch (err) {
      if (err instanceof Error) setError(err.message);
      else setError("No se pudo enviar la denuncia.");
    } finally {
      setLoading(false);
    }
  };

  const descargarPDF = async () => {
    if (!ticketData) return;

    const doc = new jsPDF();

    // Convertir imagen a base64
    const res = await fetch("/img/logo-tandem.jpg");
    const blob = await res.blob();
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64data = reader.result as string;

      // Agregar logo
      doc.addImage(base64data, "JPEG", 15, 10, 40, 40);

      // Título
      doc.setFont("helvetica", "bold");
      doc.setFontSize(18);
      doc.setTextColor("#1E3A8A");
      doc.text("Canal de Denuncias - Tandem Industrial", 60, 25);

      // Separador
      doc.setDrawColor("#1E3A8A");
      doc.setLineWidth(0.5);
      doc.line(15, 55, 195, 55);

      // Ticket info
      doc.setFont("helvetica", "bold");
      doc.setFontSize(14);
      doc.setTextColor("#111827");
      doc.text(`Número de Ticket:`, 15, 70);
      doc.setFont("helvetica", "normal");
      doc.text(ticketData.ticketId, 65, 70);

      doc.setFont("helvetica", "bold");
      doc.text(`Contraseña:`, 15, 80);
      doc.setFont("helvetica", "normal");
      doc.text(ticketData.password, 65, 80);

      // Mensaje de nota
      doc.setFont("helvetica", "italic");
      doc.setTextColor("#374151");
      doc.setFontSize(12);
      doc.text(
        "Guarda estos datos de forma segura. Solo tú podrás consultar el estado de tu denuncia.",
        15,
        100,
        { maxWidth: 180 }
      );

      // Footer
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.setTextColor("#6B7280");
      doc.text(
        `Documento generado el ${new Date().toLocaleString("es-ES")}`,
        15,
        280
      );

      doc.save(`Denuncia_${ticketData.ticketId}.pdf`);
    };

    reader.readAsDataURL(blob);
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
                      disabled={!!ticketData}
                      className="mt-1 bg-white text-gray-900 placeholder:text-slate-400 dark:bg-gray-200 dark:text-slate-900 dark:placeholder:text-slate-600"
                    />
                  </div>

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
                        className="flex flex-col gap-2 text-green-600"
                      >
                        <CheckCircle className="h-5 w-5" />
                        {success}

                        {ticketData && (
                          <Button
                            type="button"
                            onClick={descargarPDF}
                            className="mt-2 bg-gray-800 hover:bg-gray-900 text-white px-6 py-2"
                          >
                            Descargar PDF
                          </Button>
                        )}
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
                        disabled={loading || !!ticketData}
                        className={`bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 flex items-center justify-center gap-2 ${
                          !!ticketData ? "cursor-not-allowed opacity-60" : ""
                        }`}
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

            {/* Botón para consultar denuncias */}
            <div className="flex flex-col items-center mt-6">
              <h2 className="text-md font-semibold mb-3 text-blue-600 dark:text-gray-300 mt-3">
                ¿Quieres revisar el estado de tu denuncia?
              </h2>
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link href="/canal-denuncias/ver-estado">
                  <Button
                    type="button"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 mt-1"
                  >
                    Consultar denuncia
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
