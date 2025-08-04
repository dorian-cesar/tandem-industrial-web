"use client";

import { Metadata } from "next";
import { motion } from "framer-motion";

// export const metadata: Metadata = {
//   title: "Política Integrada | Tandem",
//   description:
//     "Compromisos de Tandem en calidad, seguridad, salud ocupacional, medio ambiente y seguridad vial.",
// };

export default function PoliticaIntegradaPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-4xl mx-auto px-4 py-16 bg-background text-foreground"
    >
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        POLÍTICA INTEGRADA DE CALIDAD, SEGURIDAD, SALUD OCUPACIONAL, MEDIO
        AMBIENTE Y SEGURIDAD VIAL
      </h1>

      <p className="mb-6">
        En <strong>TANDEM S.A.</strong>, nos comprometemos a ofrecer un servicio
        de transporte terrestre industrial de pasajeros seguro, confiable,
        eficiente y ambientalmente responsable, guiado por nuestro Sistema de
        Gestión Integrado: Calidad, Seguridad y Salud Ocupacional, Medio
        Ambiente y Seguridad Vial.
      </p>

      <p className="mb-6">
        Asumimos la responsabilidad de satisfacer las expectativas de nuestros
        clientes, trabajadores, propietarios, proveedores, autoridades y
        comunidad, asegurando una experiencia de servicio sobresaliente y
        orientando nuestros esfuerzos a la mejora continua de nuestros procesos.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Nuestros compromisos fundamentales son:
      </h2>
      <ul className="space-y-4 list-disc list-inside mb-6">
        <li>
          <strong>Seguridad y salud como prioridad</strong>, promoviendo un
          entorno de trabajo seguro para nuestros trabajadores y usuarios.
          Implementamos medidas efectivas de control de riesgos con el objetivo
          firme y explícito de alcanzar una accidentabilidad cero, previniendo
          lesiones, enfermedades laborales y accidentes de tránsito.
        </li>
        <li>
          <strong>Enfoque en el pasajero y su experiencia</strong>, asegurando
          altos estándares de calidad en cada viaje, mediante una atención
          proactiva, el uso de tecnología avanzada, y una flota moderna, cómoda
          y adecuada a las necesidades del servicio.
        </li>
        <li>
          <strong>
            Protección del medio ambiente y acción frente al cambio climático
          </strong>
          , mediante el uso eficiente de los recursos, la prevención de la
          contaminación y la evaluación constante de los impactos ambientales.
          Integramos el cambio climático en nuestra planificación y proyectamos
          una transición progresiva hacia la electromovilidad en nuestra flota,
          reduciendo así nuestro impacto al medio ambiente.
        </li>
        <li>
          <strong>Gestión eficiente de contratos y operaciones</strong>,
          garantizando servicios oportunos y flexibles, con infraestructura y
          soporte técnico adecuados, asegurando la continuidad operativa incluso
          ante condiciones adversas o de emergencias.
        </li>
        <li>
          <strong>Mejora continua y cumplimiento normativo</strong>,
          fortaleciendo nuestras competencias, procesos y sistemas para alcanzar
          niveles crecientes de desempeño en calidad, seguridad, salud, medio
          ambiente y seguridad vial.
        </li>
      </ul>

      <p className="mb-12">
        En <strong>TANDEM S.A.</strong>, trabajamos con convicción para ofrecer
        un servicio de excelencia, con responsabilidad social, conciencia
        ambiental y un compromiso real con la vida y la seguridad de todas las
        personas que transportamos.
      </p>

      <div className="text-right">
        <p className="font-semibold">Enrique Araneda González</p>
        <p className="text-sm text-muted-foreground">
          Gerente División Industrial
        </p>
      </div>
    </motion.main>
  );
}
