"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, History } from "lucide-react";
import { motion, easeOut } from "framer-motion";

export default function ConocenosPage() {
  const values = [
    {
      title: "Preocupación y Respeto",
      img: "img/manoCorazon.png",
    },
    {
      title: "Seguridad y Salud",
      img: "img/frecuenciCorazon.png",
    },
    {
      title: "Excelencia Operacional",
      img: "img/medalla.png",
    },
    {
      title: "Sustentabilidad",
      img: "img/manoPlanta.png",
    },
    {
      title: "Innovación",
      img: "img/bombilla.png",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative h-64">
        <Image
          src="/img/bannersuperior.png"
          alt="Conductoras de Tandem"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/60 dark:from-gray-900/90 dark:to-blue-900/70" />
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Quienes Somos */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <motion.div
              className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              <Users className="w-6 h-6 text-white" />
            </motion.div>
            <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              Quienes Somos
            </h2>
          </div>

          <motion.p
            className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Somos Tandem Industrial, empresa líder en el transporte privado de
            pasajeros, somos parte del Grupo de Empresas Pullman, con más de 35
            años de experiencia en el transporte de personas. Nos sentimos
            orgullosos de pertenecer y adherir a Pacto Global Chile, estamos
            comprometidos con el transporte responsable y sustentable impulsando
            con fuerza la inclusión femenina en la industria del transporte.
            Nuestro firme compromiso con la electromovilidad nos impulsa a
            trabajar hacia una flota completamente eléctrica para el año 2030.
            Además, promovemos activamente la inclusión laboral en todas
            nuestras operaciones.
          </motion.p>
        </motion.section>

        {/* Nuestro Propósito */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <motion.div
              className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              <Target className="w-6 h-6 text-white" />
            </motion.div>
            <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              Nuestro Propósito
            </h2>
          </div>

          <motion.div
            className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/20 p-8 rounded-2xl border border-blue-200 dark:border-blue-700/50"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-blue-700 dark:text-blue-300 text-center font-medium text-lg leading-relaxed">
              Proteger la propuesta de valor de nuestros clientes, orientando
              nuestros esfuerzos en la entrega de un servicio de transporte de
              excelencia, brindando así una experiencia de viaje de alto
              estándar centrada en la seguridad de las personas.
            </p>
          </motion.div>
        </motion.section>

        {/* Nuestra Historia */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <motion.div
              className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              <History className="w-6 h-6 text-white" />
            </motion.div>
            <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              Nuestra Historia
            </h2>
          </div>

          <motion.p
            className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Nuestra trayectoria se remonta a 1986 en El Salvador, cuando la
            división industrial de Pullman Bus formalizó sus operaciones,
            marcando el inicio de nuestra especialización en servicios de
            transporte de personal minero. Desde entonces, hemos transportado al
            personal de las principales compañías de la industria de la minería,
            manteniendo estas sólidas colaboraciones hasta el día de hoy. A lo
            largo de los años, hemos consolidado como socios de confianza para
            empresas reconocidas como: AngloAmerican, BHP Billiton, Minera
            Escondida, Antofagasta Minerals, entre otras destacadas
            organizaciones. En el presente, nos distinguimos por nuestro firme
            compromiso con la electromovilidad, aspirando a tener una flota
            completamente eléctrica para el año 2030. Además, impulsamos
            activamente la inclusión laboral, forjando un ambiente donde la
            diversidad es no solo valorada, sino también promovida.
          </motion.p>
        </motion.section>

        {/* Nuestros Valores */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br rounded-xl flex items-center justify-center">
              <Image
                src="img/manosSaludar.png"
                alt="Icono de Valores"
                width={36}
                height={32}
              />
            </div>
            <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              Nuestros Valores
            </h2>
          </div>

          <motion.div
            className="grid md:grid-cols-5 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="text-center hover:shadow-xl transition-all duration-300 group bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                  <CardContent className="p-6">
                    <motion.div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 5 }}
                    >
                      <Image
                        src={value.img}
                        alt={value.title}
                        width={32}
                        height={36}
                      />
                    </motion.div>
                    <h3 className="font-semibold text-sm text-gray-800 dark:text-gray-200">
                      {value.title}
                    </h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}
