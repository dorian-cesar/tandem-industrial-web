"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, easeOut, stagger } from "framer-motion";
import { Bus, ArrowDown } from "lucide-react";
import { usePathname } from "next/navigation";

export default function NuestrosServiciosPage() {
  const pathname = usePathname();

  const services = [
    {
      title: "Servicio de transporte minero",
      images: [
        { src: "img/busChofer.png", width: 80, height: 58 },
        { src: "img/dosFlechas.png", width: 40, height: 40 },
        { src: "img/volteo.png", width: 80, height: 80 },
      ],
      href: "/nuestros-servicios",
      active: false,
      gradient: "from-blue-600 to-blue-600",
    },
    {
      title: "Servicio de transporte Industrial",
      images: [
        { src: "img/busChofer.png", width: 80, height: 58 },
        { src: "img/dosFlechas.png", width: 40, height: 40 },
        { src: "img/industria.png", width: 70, height: 70 },
      ],
      href: "/nuestros-servicios/servicio-transporte-industrial",
      active: false,
      gradient: "from-blue-600 to-blue-600",
    },
    {
      title: "Servicio de transporte particular",
      images: [
        { src: "img/busSolo.png", width: 58, height: 58 },
        { src: "img/ninos.png", width: 50, height: 58 },
        { src: "img/dosFlechas.png", width: 40, height: 40 },
        { src: "img/montain.png", width: 58, height: 58 },
      ],
      href: "/nuestros-servicios/servicio-transporte-particular",
      active: false,
      gradient: "from-blue-600 to-blue-600",
    },
    {
      title: "Servicio de Radio Taxi",
      images: [
        { src: "img/taxi.png", width: 60, height: 60 },
        { src: "img/usuarioMaleta.png", width: 45, height: 40 },
        { src: "img/dosFlechas.png", width: 40, height: 40 },
        { src: "img/house.png", width: 58, height: 58 },
      ],
      href: "/nuestros-servicios/servicio-radio-taxi",
      active: false,
      gradient: "from-blue-600 to-blue-600",
    },
  ];

  // Contenedor con stagger children
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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
    <div className="min-h-screen dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-100">
        <Image
          src="/img/bannerNuestroServiciosMineros.png"
          alt="Trabajadores mineros con equipos de seguridad"
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
            <Bus className="w-8 h-8 text-orange-500" />
            <h1 className="text-2xl font-bold text-blue-600">
              Nuestros Servicios /{" "}
              <span className="text-orange-500">Transporte Minero</span>
            </h1>
          </div>

          <p className="text-gray-700 dark:text-gray-300">
            Con más de cuarenta años de experiencia, nos hemos especializado en
            satisfacer las demandas de clientes institucionales, incluyendo
            empresas de renombre e instituciones gubernamentales.
          </p>
        </div>

        {/* Services Navigation */}
        <motion.div
          className="grid md:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)",
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.95 }}
              className="rounded-lg"
            >
              <Link href={service.href} scroll={false}>
                <Card
                  className={`h-full flex flex-col justify-between cursor-pointer transition-all duration-500 group shadow-lg overflow-hidden bg-white dark:bg-gray-800 dark:border-gray-700 ${
                    pathname === service.href
                      ? "border-2 border-blue-500"
                      : "border-0"
                  }`}
                >
                  <CardContent className="flex flex-col flex-grow p-8 text-center relative">
                    <div className="mx-auto mb-6 inline-flex items-center justify-center gap-2 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-4 transition-transform duration-300 group-hover:scale-105 overflow-hidden">
                      {service.images.map((img, idx) => (
                        <Image
                          key={idx}
                          src={img.src}
                          alt={service.title}
                          width={img.width}
                          height={img.height}
                          className="object-contain max-w-[80px] max-h-[80px]"
                        />
                      ))}
                    </div>

                    <div
                      className={`flex flex-col justify-between flex-grow bg-gradient-to-r ${service.gradient} text-white p-6 rounded-2xl relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      <h3 className="font-semibold mb-4 relative z-10">
                        {service.title}
                      </h3>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="mt-auto w-max mx-auto relative z-10"
                      >
                        <Button
                          size="sm"
                          className="bg-orange-500 hover:bg-orange-600 text-xs font-semibold px-10 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group/btn"
                        >
                          Conoce más
                          <ArrowDown className="ml-2 w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Content */}
        <motion.div
          className="grid md:grid-cols-2 gap-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-blue-600">
              Servicio de Transporte Minero
            </h2>

            <p className="text-gray-700 dark:text-gray-300">
              Descubre una solución integral para tus necesidades de transporte
              en el sector minero. Nos especializamos en servicios de transporte
              para faenas mineras, ofreciendo soluciones confiables y
              eficientes.
            </p>

            <div>
              <h3 className="font-semibold text-blue-600 mb-2">
                Servicio Externo:
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Transportamos pasajeros de empresas mineras y contratistas desde
                distintas comunas hasta las faenas mineras. Ofrecemos una
                variedad de opciones, incluyendo buses, taxi buses y minibuses,
                todos estos vehículos con y sin acreditación según la necesidad
                de su requerimiento.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-blue-600 mb-2">Internos:</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Facilitamos el transporte de pasajeros dentro de las faenas
                mineras para empresas mineras y contratistas. Nuestros buses,
                taxi buses y minibuses están completamente acreditados para
                ingresar a la faena.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-blue-600 mb-2">
                Interurbanos:
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Conectamos ciudades mediante nuestro servicio de transporte para
                empresas mineras y contratistas. Nuestra flota incluye buses de
                doble piso y un piso para garantizar comodidad y eficiencia en
                los traslados.
              </p>
            </div>

            <p className="text-blue-600 font-medium">
              ¡Optimiza tu logística con nuestros servicios especializados!
            </p>

            <div className="flex justify-center mt-6">
              <Link href="/contacto">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-4 rounded-full shadow-lg">
                  Contacto Comercial
                </Button>
              </Link>
            </div>
          </div>

          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.3 }}
          >
            <Image
              src="/img/foto-bus-tandem.png"
              alt="Bus Tandem en faena minera"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
