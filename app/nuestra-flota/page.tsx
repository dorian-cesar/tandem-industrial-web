"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Bus, Zap } from "lucide-react";
import { motion, easeOut } from "framer-motion";
import {
  ConventionalBusIcon,
  ElectricBusIcon,
  MiniVanIcon,
  ExecutiveCarIcon,
} from "@/components/vehicle-icons";

export default function NuestraFlotaPage() {
  const fleet = [
    {
      title: "Buses Convencionales",
      description: "Flota de buses tradicionales para transporte de pasajeros",
      icon: ConventionalBusIcon,
      features: [
        "Capacidad 40-50 pasajeros",
        "Aire acondicionado",
        "Asientos cómodos",
      ],
    },
    {
      title: "Buses Eléctricos",
      description: "Tecnología sustentable para el futuro del transporte",
      icon: ElectricBusIcon,
      features: ["Cero emisiones", "Tecnología avanzada", "Silencioso"],
      badge: "ECO",
    },
    {
      title: "Mini Buses y Van",
      description: "Vehículos versátiles para grupos pequeños",
      icon: MiniVanIcon,
      features: ["Capacidad 15-25 pasajeros", "Maniobrabilidad", "Eficiencia"],
    },
    {
      title: "Vehículos Menores",
      description: "Taxis y vehículos ejecutivos para servicios personalizados",
      icon: ExecutiveCarIcon,
      features: [
        "Servicio ejecutivo",
        "Disponibilidad 24/7",
        "Confort premium",
      ],
      badge: "ECO",
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
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: easeOut },
    },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-6">
            <Bus className="w-8 h-8 text-orange-500" />
            <h1 className="text-2xl font-bold text-blue-600">Nuestra Flota</h1>
          </div>

          <p className="text-gray-700 dark:text-gray-300 mb-12">
            Conoce nuestra moderna flota de vehículos, diseñada para brindar el
            mejor servicio de transporte con tecnología de vanguardia y
            compromiso con la sustentabilidad.
          </p>

          {/* Fleet Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {fleet.map((vehicle, index) => {
              const VehicleIcon = vehicle.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="rounded-lg"
                >
                  <Card className="relative dark:bg-slate-800 transition-shadow duration-300 flex flex-col h-full hover:shadow-lg hover:shadow-blue-200/30 dark:hover:shadow-slate-500/20">
                    {vehicle.badge && (
                      <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm z-10 flex items-center gap-1">
                        <Zap className="w-4 h-4" />
                        {vehicle.badge}
                      </div>
                    )}
                    <CardContent className="p-0 flex flex-col flex-grow">
                      <div className="w-full h-40 flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-800 rounded-t-lg flex-shrink-0">
                        <VehicleIcon className="w-full h-full p-4" />
                      </div>
                      <div className="p-4 flex flex-col flex-grow">
                        <h3 className="text-xl font-bold text-blue-600 mb-2">
                          {vehicle.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                          {vehicle.description}
                        </p>

                        <ul className="space-y-2">
                          {vehicle.features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-center text-sm text-gray-700 dark:text-gray-300"
                            >
                              <div className="w-2 h-2 bg-orange-500 rounded-full mr-3" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="mt-16 bg-blue-50 dark:bg-slate-700 rounded-lg p-8"
            variants={statsVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-2xl font-bold text-blue-600 text-center mb-8">
              Nuestra Flota en Números
            </h2>

            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { number: "300+", label: "Vehículos en operación" },
                { number: "95%", label: "Disponibilidad operacional" },
                { number: "2030", label: "Meta flota 100% eléctrica" },
                { number: "35", label: "Años de experiencia" },
              ].map(({ number, label }, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.2 * idx,
                    duration: 0.5,
                    ease: easeOut,
                  }}
                >
                  <div className="text-3xl font-bold text-orange-500 mb-2">
                    {number}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOut }}
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4">
              ¿Necesitas un servicio de transporte?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              Contáctanos para conocer más sobre nuestros servicios y cómo
              podemos ayudarte.
            </p>
            <Link
              href="/contacto-comercial"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md text-sm font-medium transition-colors"
            >
              Contacto Comercial
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
