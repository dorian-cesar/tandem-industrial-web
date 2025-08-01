"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, MapPin, Bus, Award, ArrowRight } from "lucide-react";
import { motion, easeOut, easeInOut } from "framer-motion";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [counters, setCounters] = useState({
    passengers: 0,
    kilometers: 0,
    collaborators: 0,
    vehicles: 0,
    centers: 0,
    experience: 0,
  });

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

  const stats = [
    {
      key: "passengers",
      number: 13000000,
      label: "Pasajeros transportados anualmente",
      icon: Users,
    },
    {
      key: "kilometers",
      number: 40000000,
      label: "Kilómetros recorridos anualmente",
      icon: MapPin,
    },
    { key: "collaborators", number: 2500, label: "Colaboradores", icon: Users },
    { key: "vehicles", number: 300, label: "Equipos (buses - van)", icon: Bus },
    {
      key: "centers",
      number: 10,
      label: "Centros operacionales",
      icon: MapPin,
    },
    {
      key: "experience",
      number: 35,
      label: "Años de experiencia",
      icon: Award,
    },
  ];

  const fleet = [
    {
      title: "Buses Convencionales",
      image: "/img/busConve.png",
      href: "/nuestra-flota",
    },
    {
      title: "Buses Eléctricos",
      image: "/img/busElectrico.png",
      href: "/nuestra-flota",
      badge: "/img/btnVerde.png",
    },
    {
      title: "Mini Buses y Van",
      image: "/img/miniVanBuses.png",
      href: "/nuestra-flota",
    },
    {
      title: "Vehículos menores",
      image: "/img/vehiMenores.png",
      href: "/nuestra-flota",
      badge: "/img/btnVerde.png",
    },
  ];

  const clients = [
    "codelco2",
    "minralsAntofa",
    "angloAmerican",
    "asmar",
    "latam",
    "centinela",
    "las_condes",
    "orbit_garant",
  ];

  // Counter animation effect
  useEffect(() => {
    const animateCounters = () => {
      stats.forEach((stat) => {
        let start = 0;
        const end = stat.number;
        const duration = 4000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(timer);
          }
          setCounters((prev) => ({
            ...prev,
            [stat.key]: Math.floor(start),
          }));
        }, 16);
      });
    };

    const timer = setTimeout(animateCounters, 1000);
    return () => clearTimeout(timer);
  }, []);

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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-gradient-to-br from-blue-500 via-blue-800 to-blue-500 dark:from-gray-900 dark:via-blue-800 dark:to-gray-800 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/img/bannerIndex.png"
            alt="Bus Tandem en paisaje montañoso"
            fill
            className="object-contain"
          />
          {/* Blur superior */}
          <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-blue-800/60 to-transparent backdrop-blur-sm pointer-events-none z-10" />
          {/* Blur inferior */}
          <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-blue-800/60 to-transparent backdrop-blur-sm pointer-events-none z-10" />
          {/* Overlay lateral */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-transparent" />
        </div>

        <motion.div
          className="relative z-10 container mx-auto px-4 pb-[8rem] h-full flex items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="max-w-3xl text-white">
            <motion.div
              className="flex items-center gap-6 mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative">
                <div className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                  35
                </div>
                <motion.div
                  className="absolute -top-2 -right-2 w-4 h-4 bg-orange-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              </div>
              <div className="text-lg font-medium">
                <div className="text-gray-200">años</div>
                <div className="text-orange-400 font-bold">movilidad</div>
                <div className="text-gray-200">sustentable</div>
              </div>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              ¡TRANSPORTANDO A LA GENTE QUE{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                MUEVE CHILE
              </span>
              !
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            ></motion.div>
          </div>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          className="absolute top-20 right-20 w-20 h-20 bg-orange-500/20 rounded-full blur-xl"
          animate={{ y: [-10, 10, -10] }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: easeInOut,
          }}
        />
        <motion.div
          className="absolute bottom-32 left-32 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"
          animate={{ y: [10, -10, 10] }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: easeInOut,
          }}
        />
      </section>
      {/* News Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[1, 2, 3].map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full flex flex-col hover:shadow-2xl transition-all duration-500 group overflow-hidden border-0 shadow-lg bg-white dark:bg-gray-800 dark:border-gray-700">
                  <CardContent className="flex flex-col flex-grow p-0">
                    <div className="relative overflow-hidden">
                      <Image
                        src={`/img/newsC${item}.png`}
                        alt={`Noticia ${item}`}
                        width={592}
                        height={366}
                        className="w-full h-auto object-contain"
                      />
                      <div className="absolute inset-0" />
                    </div>
                    <div className="p-6 mt-auto">
                      <h3 className="text-sm font-semibold text-blue-600">
                        {index === 0 &&
                          "Premiación conductores Tandem Ventanas"}
                        {index === 1 &&
                          "Bus eléctrico Codelco El Salvador logra un éxito en homologación"}
                        {index === 2 &&
                          "Felicitamos a las egresadas de la escuela de conductores Tandem"}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-orange-50/30 dark:from-blue-900/20 dark:to-orange-900/10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-6 leading-tight">
              En Tandem tenemos el servicio de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                transporte de pasajeros
              </span>{" "}
              que requieres,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                conócenos.
              </span>
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-4 gap-8 mt-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Link href={service.href}>
                  <Card className="h-full flex flex-col justify-between cursor-pointer hover:shadow-2xl transition-all duration-500 group border-0 shadow-lg overflow-hidden bg-white dark:bg-gray-800 dark:border-gray-700">
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
                        <Button
                          size="sm"
                          className="mt-auto bg-orange-500 hover:bg-orange-600 text-xs font-semibold px-10 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 relative z-10 group/btn w-max mx-auto"
                        >
                          Conoce más
                          <ArrowRight className="ml-2 w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-6 gap-8 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center group"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
              >
                <motion.div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>

                <div className="text-4xl font-bold mb-3">
                  <span className="text-orange-500">+</span>
                  <span className="text-blue-600">
                    {counters[
                      stat.key as keyof typeof counters
                    ].toLocaleString()}
                  </span>
                </div>
                <p className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Fleet Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Conoce nuestra flota de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              Vehículos
            </span>
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {fleet.map((vehicle, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Link href={vehicle.href}>
                  <Card className="cursor-pointer hover:shadow-2xl transition-all duration-500 relative group border-0 shadow-[0_-4px_12px_rgba(0,0,0,0.15)] overflow-visible bg-white dark:bg-gray-800 dark:border-gray-700 rounded-xl">
                    {vehicle.badge && (
                      <motion.div
                        className="absolute -top-3.5 right-4 z-20 bg-white/70 backdrop-blur-sm rounded-full p-1 shadow-lg"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.5 }}
                      >
                        <Image
                          src={vehicle.badge}
                          alt="Ícono de vehículo eléctrico"
                          width={32}
                          height={32}
                          className="w-9 h-9"
                        />
                      </motion.div>
                    )}
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <Image
                          src={vehicle.image}
                          alt={vehicle.title}
                          width={300}
                          height={200}
                          className="w-full h-48 object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="p-6">
                        <div className="bg-gradient-to-r from-blue-600 to-blue-600 text-white p-4 rounded-xl text-center relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                          <h3 className="font-semibold mb-3 relative z-10">
                            {vehicle.title}
                          </h3>
                          <Button
                            size="sm"
                            className="bg-orange-500 hover:bg-orange-600 font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 relative z-10 group/btn"
                          >
                            Conoce más
                            <ArrowRight className="ml-2 w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Clients Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Nuestros{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              Clientes
            </span>
          </motion.h2>

          <motion.div
            className="flex flex-wrap justify-center items-center gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {clients.map((client, index) => (
              <motion.div
                key={index}
                className="transition-all duration-300 group"
                variants={itemVariants}
              >
                <Image
                  src={`/img/${client}.png`}
                  alt={`Logo ${client}`}
                  width={120}
                  height={60}
                  className="w-auto max-h-[40px] object-contain"
                />
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12 flex justify-center">
            <Link
              href="/nuestros-clientes"
              className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:scale-105 transition-transform duration-300"
              aria-label="Ir a Nuestros Clientes"
            >
              Ver más
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
      ;{/* Bottom Image Section */}
      <section className="relative h-80 overflow-hidden">
        <Image
          src="/img/bannerfooter.png"
          alt="Bus en paisaje desértico"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent" />
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="text-center text-white">
            <h3 className="text-2xl font-bold mb-4">
              ¿Listo para viajar con nosotros?
            </h3>
            <Link href="/contacto" passHref>
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Contacta con nosotros
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
