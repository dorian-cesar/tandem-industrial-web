"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";
import { motion, easeOut } from "framer-motion";

export default function CertificadosPage() {
  const certificados = [
    {
      title: "ISO 9001",
      description:
        "Sistema de gestión de calidad certificado, orientado a la mejora continua y satisfacción de nuestros clientes.",
      file: "/pdf/certificado-iso9001.pdf",
    },
    {
      title: "ISO 14001",
      description:
        "Certificación en gestión ambiental, que garantiza prácticas responsables con el medio ambiente y cumplimiento normativo.",
      file: "/pdf/certificado-iso14001.pdf",
    },
    {
      title: "ISO 45001",
      description:
        "Certificación en seguridad y salud ocupacional, que protege a nuestros trabajadores y promueve ambientes laborales seguros.",
      file: "/pdf/certificado-iso45001.pdf",
    },
    {
      title: "ISO 39001",
      description:
        "Sistema de gestión de la seguridad vial, orientado a reducir riesgos de accidentes de tránsito y mejorar la movilidad segura.",
      file: "/pdf/certificado-iso39001.pdf",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  return (
    <div className="min-h-screen">
      <section className="min-h-screen bg-white dark:bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-8 h-8 text-orange-500" />
            <h1 className="text-2xl font-bold text-blue-600">
              Nuestros Certificados
            </h1>
          </div>

          <p className="text-gray-700 dark:text-gray-300 mb-12">
            En <strong>TANDEM S.A.</strong> contamos con certificaciones que
            respaldan nuestro compromiso con la calidad, seguridad, salud
            ocupacional, medio ambiente y seguridad vial.
          </p>

          {/* Certificados Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:pt-24"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {certificados.map((certificado, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="rounded-lg"
              >
                <Card className="relative dark:bg-slate-800 transition-shadow duration-300 flex flex-col h-full hover:shadow-lg hover:shadow-blue-200/30 dark:hover:shadow-slate-500/20">
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <FileText className="w-12 h-12 text-orange-500 mb-4" />
                    <h3 className="text-xl font-bold text-blue-600 mb-2">
                      {certificado.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                      {certificado.description}
                    </p>

                    <Link
                      href={certificado.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors text-center"
                    >
                      Ver PDF
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
