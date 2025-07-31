"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, MapPin, Bus, Award, ArrowRight, Play } from "lucide-react"
import { motion, easeOut } from "framer-motion"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [counters, setCounters] = useState({
    passengers: 0,
    kilometers: 0,
    collaborators: 0,
    vehicles: 0,
    centers: 0,
    experience: 0,
  })

  const services = [
    {
      title: "Servicio de transporte minero",
      icon: "🚌",
      href: "/nuestros-servicios",
      active: false,
      gradient: "from-blue-600 to-blue-700",
    },
    {
      title: "Servicio de transporte Industrial",
      icon: "🚌",
      href: "/nuestros-servicios/servicio-transporte-industrial",
      active: false,
      gradient: "from-blue-600 to-blue-700",
    },
    {
      title: "Servicio de transporte particular",
      icon: "🚌",
      href: "/nuestros-servicios/servicio-transporte-particular",
      active: false,
      gradient: "from-blue-600 to-blue-700",
    },
    {
      title: "Servicio de Radio Taxi",
      icon: "🚗",
      href: "/nuestros-servicios/servicio-radio-taxi",
      active: false,
      gradient: "from-blue-600 to-blue-700",
    },
  ]

  const stats = [
    { key: "passengers", number: 13000000, label: "Pasajeros transportados anualmente", icon: Users },
    { key: "kilometers", number: 40000000, label: "Kilómetros recorridos anualmente", icon: MapPin },
    { key: "collaborators", number: 2500, label: "Colaboradores", icon: Users },
    { key: "vehicles", number: 300, label: "Equipos (buses - van)", icon: Bus },
    { key: "centers", number: 10, label: "Centros operacionales", icon: MapPin },
    { key: "experience", number: 35, label: "Años de experiencia", icon: Award },
  ]

  const fleet = [
    {
      title: "Buses Convencionales",
      image: "/placeholder.svg?height=200&width=300",
      href: "/nuestra-flota",
    },
    {
      title: "Buses Eléctricos",
      image: "/placeholder.svg?height=200&width=300",
      href: "/nuestra-flota",
      badge: "ECO",
    },
    {
      title: "Mini Buses y Van",
      image: "/placeholder.svg?height=200&width=300",
      href: "/nuestra-flota",
    },
    {
      title: "Vehículos menores",
      image: "/placeholder.svg?height=200&width=300",
      href: "/nuestra-flota",
      badge: "ECO",
    },
  ]

  const clients = [
    "CODELCO",
    "ANTOFAGASTA MINERALS",
    "ANGLOAMERICAN",
    "ASMAR",
    "LATAM",
    "CENTINELA",
    "ORBIT GARANT",
    "SPENCE BHP",
    "GUANACO",
  ]

  // Counter animation effect
  useEffect(() => {
    const animateCounters = () => {
      stats.forEach((stat) => {
        let start = 0
        const end = stat.number
        const duration = 2000
        const increment = end / (duration / 16)

        const timer = setInterval(() => {
          start += increment
          if (start >= end) {
            start = end
            clearInterval(timer)
          }
          setCounters((prev) => ({
            ...prev,
            [stat.key]: Math.floor(start),
          }))
        }, 16)
      })
    }

    const timer = setTimeout(animateCounters, 1000)
    return () => clearTimeout(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

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
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 dark:from-gray-900 dark:via-blue-900 dark:to-gray-800 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Bus en paisaje montañoso"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent" />
        </div>

        <motion.div
          className="relative z-10 container mx-auto px-4 h-full flex items-center"
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
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Conoce más sobre nosotros
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          className="absolute top-20 right-20 w-20 h-20 bg-orange-500/20 rounded-full blur-xl"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-32 left-32 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
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
                <Card className="cursor-pointer hover:shadow-2xl transition-all duration-500 group overflow-hidden border-0 shadow-lg bg-white dark:bg-gray-800 dark:border-gray-700">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <Image
                        src={`/placeholder.svg?height=200&width=300&query=news-${item}`}
                        alt={`Noticia ${item}`}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <motion.div
                        className="absolute top-4 right-4 bg-orange-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Play className="w-4 h-4" />
                      </motion.div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-sm font-semibold text-blue-600 group-hover:text-orange-500 transition-colors duration-300">
                        {index === 0 && "Premiación conductores Tandem Ventanas"}
                        {index === 1 && "Bus eléctrico Codelco El Salvador logra un éxito en homologación"}
                        {index === 2 && "Felicitamos a las egresadas de la escuela de conductores Tandem"}
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
                  <Card className="cursor-pointer hover:shadow-2xl transition-all duration-500 group border-0 shadow-lg overflow-hidden bg-white dark:bg-gray-800 dark:border-gray-700">
                    <CardContent className="p-8 text-center relative">
                      <motion.div
                        className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                        whileHover={{ rotate: 5 }}
                      >
                        <div className="text-3xl">{service.icon}</div>
                      </motion.div>

                      <div
                        className={`bg-gradient-to-r ${service.gradient} text-white p-6 rounded-2xl relative overflow-hidden`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        <h3 className="font-semibold text-sm mb-4 relative z-10">{service.title}</h3>
                        <Button
                          size="sm"
                          className="bg-orange-500 hover:bg-orange-600 text-xs font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 relative z-10 group/btn"
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
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>

                <div className="text-4xl font-bold mb-3">
                  <span className="text-orange-500">+</span>
                  <span className="text-blue-600">{counters[stat.key as keyof typeof counters].toLocaleString()}</span>
                </div>
                <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
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
                  <Card className="cursor-pointer hover:shadow-2xl transition-all duration-500 relative group border-0 shadow-lg overflow-hidden bg-white dark:bg-gray-800 dark:border-gray-700">
                    {vehicle.badge && (
                      <motion.div
                        className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-full text-xs z-10 font-semibold shadow-lg"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.5 }}
                      >
                        {vehicle.badge}
                      </motion.div>
                    )}
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <Image
                          src={vehicle.image || "/placeholder.svg"}
                          alt={vehicle.title}
                          width={300}
                          height={200}
                          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="p-6">
                        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-xl text-center relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                          <h3 className="font-semibold mb-3 relative z-10">{vehicle.title}</h3>
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
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Image
                  src={`/placeholder.svg?height=60&width=120&query=${client} logo`}
                  alt={`Logo ${client}`}
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bottom Image Section */}
      <section className="relative h-80 overflow-hidden">
        <Image
          src="/placeholder.svg?height=300&width=1200"
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
            <h3 className="text-2xl font-bold mb-4">¿Listo para viajar con nosotros?</h3>
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Contacta con nosotros
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
