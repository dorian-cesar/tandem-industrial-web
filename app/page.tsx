"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, MapPin, Bus, Award, ArrowRight } from "lucide-react";
import { motion, easeOut, easeInOut } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ConventionalBusIcon,
  ElectricBusIcon,
  MiniVanIcon,
  ExecutiveCarIcon,
} from "@/components/vehicle-icons";

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
    { key: "vehicles", number: 300, label: "Equipos (Buses - Van)", icon: Bus },
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
      icon: ConventionalBusIcon,
      href: "/nuestra-flota",
    },
    {
      title: "Buses Eléctricos",
      icon: ElectricBusIcon,
      href: "/nuestra-flota",
      badge: "/img/btnVerde.png",
    },
    {
      title: "Mini Buses y Van",
      icon: MiniVanIcon,
      href: "/nuestra-flota",
    },
    {
      title: "Vehículos menores",
      icon: ExecutiveCarIcon,
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
            [stat.key as keyof typeof counters]: Math.floor(start),
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
      <section className="relative h-[60vh] sm:h-[65vh] md:h-[60vh] lg:h-[65vh] xl:h-[70vh] bg-gradient-to-br from-blue-500 via-blue-800 to-blue-500 dark:from-gray-900 dark:via-blue-800 dark:to-gray-800 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/img/bannerIndex.png"
            alt="Bus Tandem en paisaje montañoso"
            fill
            className="object-cover sm:object-contain lg:object-cover xl:object-contain object-center"
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1280px) 100vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-900/50 to-transparent lg:from-blue-900/70 lg:via-blue-900/40 lg:to-transparent xl:from-blue-900/60 xl:via-blue-900/30 xl:to-transparent" />
        </div>

        <motion.div
          className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 h-full flex items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl text-white">
            <motion.div
              className="flex items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-4 sm:mb-6 md:mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative">
                <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                  35
                </div>
                <motion.div
                  className="absolute -top-1 -right-1 sm:-top-1 sm:-right-1 md:-top-2 md:-right-2 w-3 h-3 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-orange-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              </div>
              <div className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg font-medium">
                <div className="text-gray-200">años</div>
                <div className="text-orange-400 font-bold">movilidad</div>
                <div className="text-gray-200">sustentable</div>
              </div>
            </motion.div>

            <motion.h1
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              ¡TRANSPORTANDO A LA GENTE QUE{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 block sm:inline lg:block xl:inline">
                MUEVE CHILE
              </span>
              !
            </motion.h1>
          </div>
        </motion.div>
      </section>

      {/* News Section */}
      <section className="py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7 lg:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[1, 2, 3].map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full flex flex-col hover:shadow-xl transition-all duration-500 group overflow-hidden border-0 shadow-md bg-white dark:bg-gray-800 dark:border-gray-700">
                  <CardContent className="flex flex-col flex-grow p-0">
                    <div className="relative overflow-hidden aspect-[16/9] sm:aspect-[16/10] lg:aspect-[16/9]">
                      <Image
                        src={`/img/newsC${item}.png`}
                        alt={`Noticia ${item}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 33vw"
                      />
                    </div>
                    <div className="p-4 sm:p-5 md:p-6 lg:p-5 xl:p-6 mt-auto">
                      <h3 className="text-sm sm:text-sm md:text-base lg:text-sm xl:text-base font-semibold text-blue-600 line-clamp-2">
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
      <section className="py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-orange-50/30 dark:from-blue-900/20 dark:to-orange-900/10" />
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-6 leading-tight px-2 sm:px-4">
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6 md:gap-7 lg:gap-6 xl:gap-8 mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="lg:col-span-1"
              >
                <Link href={service.href}>
                  <Card className="h-full flex flex-col cursor-pointer hover:shadow-xl transition-all duration-500 group border-0 shadow-lg overflow-hidden bg-white dark:bg-gray-800 dark:border-gray-700">
                    <CardContent className="flex flex-col flex-grow p-3 sm:p-4 md:p-5 lg:p-4 xl:p-6 text-center relative">
                      <div className="mx-auto mb-3 sm:mb-4 md:mb-5 lg:mb-4 xl:mb-6 inline-flex items-center justify-center gap-1 sm:gap-2 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg sm:rounded-xl lg:rounded-lg xl:rounded-2xl p-2 sm:p-3 md:p-4 transition-transform duration-300 group-hover:scale-105 overflow-hidden">
                        {service.images.map((img, idx) => (
                          <Image
                            key={idx}
                            src={img.src || "/placeholder.svg"}
                            alt={service.title}
                            width={img.width}
                            height={img.height}
                            className="object-contain max-w-[40px] sm:max-w-[50px] md:max-w-[60px] lg:max-w-[50px] xl:max-w-[80px] max-h-[40px] sm:max-h-[50px] md:max-h-[60px] lg:max-h-[50px] xl:max-h-[80px]"
                          />
                        ))}
                      </div>

                      <div
                        className={`flex flex-col justify-between flex-grow bg-gradient-to-r ${service.gradient} text-white p-3 sm:p-4 md:p-5 lg:p-4 xl:p-6 rounded-lg sm:rounded-xl lg:rounded-lg xl:rounded-2xl relative overflow-hidden min-h-[120px] sm:min-h-[140px] lg:min-h-[130px] xl:min-h-[150px]`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        <h3 className="font-semibold mb-2 sm:mb-3 md:mb-4 lg:mb-3 xl:mb-4 text-xs sm:text-sm md:text-base lg:text-sm xl:text-base relative z-10 line-clamp-2">
                          {service.title}
                        </h3>
                        <Button
                          size="sm"
                          className="mt-auto bg-orange-500 hover:bg-orange-600 text-xs font-semibold px-4 sm:px-6 md:px-8 lg:px-6 xl:px-10 py-1.5 sm:py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 relative z-10 group/btn w-max mx-auto"
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
      <section className="py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-5 md:gap-6 lg:gap-5 xl:gap-8 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center group col-span-1"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-12 lg:h-12 xl:w-16 xl:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg sm:rounded-xl lg:rounded-lg xl:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 md:mb-5 lg:mb-4 xl:mb-6 group-hover:shadow-lg transition-shadow duration-300">
                  <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-6 lg:h-6 xl:w-8 xl:h-8 text-white" />
                </motion.div>

                <div className="text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-3xl 2xl:text-4xl font-bold mb-1 sm:mb-2 md:mb-3 lg:mb-2 xl:mb-3">
                  <span className="text-orange-500">+</span>
                  <span className="text-blue-600">
                    {counters[
                      stat.key as keyof typeof counters
                    ].toLocaleString()}
                  </span>
                </div>
                <p className="text-xs sm:text-xs md:text-sm lg:text-xs xl:text-sm 2xl:text-sm text-gray-600 dark:text-white font-medium leading-tight px-1">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-bold text-center text-blue-600 mb-6 sm:mb-8 md:mb-10 lg:mb-8 xl:mb-16 px-2 sm:px-4"
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6 md:gap-7 lg:gap-6 xl:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {fleet.map((vehicle, index) => {
              const VehicleIcon = vehicle.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="lg:col-span-1"
                >
                  <Link href={vehicle.href}>
                    <Card className="cursor-pointer hover:shadow-xl transition-all duration-500 relative group border-0 shadow-md overflow-visible bg-white dark:bg-gray-800 dark:border-gray-700 rounded-lg sm:rounded-xl lg:rounded-lg xl:rounded-xl">
                      {vehicle.badge && (
                        <motion.div
                          className="absolute -top-2 right-2 sm:-top-3 sm:right-3 lg:-top-2 lg:right-2 xl:-top-3 xl:right-4 z-20 bg-white/70 backdrop-blur-sm rounded-full p-0.5 sm:p-1 shadow-lg"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: index * 0.1 + 0.5 }}
                        >
                          <Image
                            src={vehicle.badge || "/placeholder.svg"}
                            alt="Ícono de vehículo eléctrico"
                            width={24}
                            height={24}
                            className="w-7 h-7 sm:w-8 sm:h-8 lg:w-7 lg:h-7 xl:w-9 xl:h-9"
                          />
                        </motion.div>
                      )}
                      <CardContent className="p-0">
                        <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-t-lg sm:rounded-t-xl lg:rounded-t-lg xl:rounded-t-xl h-40 sm:h-44 md:h-48 lg:h-44 xl:h-56 2xl:h-64 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                          <VehicleIcon className="w-full h-full p-3 sm:p-4 lg:p-3 xl:p-4" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <div className="p-3 sm:p-4 md:p-5 lg:p-4 xl:p-6">
                          <div className="bg-gradient-to-r from-blue-600 to-blue-600 text-white p-3 sm:p-4 md:p-5 lg:p-4 xl:p-6 rounded-lg sm:rounded-xl lg:rounded-lg xl:rounded-xl text-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            <h3 className="font-semibold mb-2 sm:mb-3 md:mb-4 lg:mb-3 xl:mb-4 text-sm sm:text-sm md:text-base lg:text-sm xl:text-base relative z-10">
                              {vehicle.title}
                            </h3>
                            <Button
                              size="sm"
                              className="bg-orange-500 hover:bg-orange-600 font-semibold px-3 sm:px-4 md:px-6 lg:px-4 xl:px-6 py-1.5 sm:py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 relative z-10 group/btn"
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
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:bg-gray-400 dark:to-blue-200/20">
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

      {/* Bottom Image Section */}
      <section className="relative h-[120px] sm:h-[140px] md:h-[160px] lg:h-[180px] xl:h-[220px] 2xl:h-[265px] overflow-hidden">
        <Image
          src="/img/bannerfooter.png"
          alt="Bus en paisaje desértico"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent" />
        <motion.div
          className="absolute inset-0 flex items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="text-center text-white max-w-md sm:max-w-lg md:max-w-xl lg:max-w-lg xl:max-w-2xl">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-2xl 2xl:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-3 xl:mb-4">
              ¿Listo para viajar con nosotros?
            </h3>
            <Link href="/contacto" passHref>
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-4 sm:px-5 md:px-8 lg:px-6 xl:px-10 py-2 sm:py-3 md:py-4 lg:py-3 xl:py-4 text-sm sm:text-base md:text-lg lg:text-base xl:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Contacta con nosotros
                <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-4 lg:h-4 xl:w-5 xl:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
