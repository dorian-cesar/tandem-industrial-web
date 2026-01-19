"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Bus,
  Car,
  Users,
  Briefcase,
  MapPin,
  Building2,
  Plane,
  Umbrella,
  GraduationCap,
  Music,
  Church,
  Package,
  Calendar,
  Send,
  CheckCircle2,
  ChevronRight,
  Phone,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";
import { motion } from "framer-motion";

const vehicleTypes = [
  {
    name: "Bus",
    description: "De 1 y 2 pisos",
    capacity: "40-50+ pasajeros",
    icon: Bus,
    image: "/images/vehicle-bus.jpg",
  },
  {
    name: "Vans",
    description: "Ideales para grupos medianos",
    capacity: "15 pasajeros",
    icon: Car,
    image: "/images/vehicle-van.jpg",
  },
  {
    name: "Taxis Ejecutivos",
    description: "Servicio premium",
    capacity: "1-4 pasajeros",
    icon: Car,
    image: "/images/vehicle-taxi.jpg",
  },
];

const mainServices = [
  {
    title: "Transporte de Personal",
    description:
      "Vehículos ideales: Buses (40-50+ pasajeros) para traslados masivos y Minibuses (20-30 pasajeros) para equipos de departamentos específicos.",
    icon: Users,
  },
  {
    title: "Servicios de Shuttle",
    description:
      "Vehículos ideales: Vans (15 pasajeros) por su agilidad en ciudad y facilidad para carga de equipaje.",
    icon: Plane,
  },
  {
    title: "Transporte Ejecutivo",
    description:
      "Vehículos ideales: Taxis y Vans ejecutivas con interiores acondicionados para trabajar durante el trayecto.",
    icon: Briefcase,
  },
  {
    title: "Viajes Corporativos",
    description:
      "Vehículos ideales: Flota Mixta. Desde Taxis para traslados individuales hasta Buses para delegaciones completas.",
    icon: Building2,
  },
  {
    title: "Alquiler de Vehículos",
    description:
      "Vehículos ideales: Toda nuestra flota disponible: Buses de 1 o 2 pisos, Vans y taxis.",
    icon: Car,
  },
  {
    title: "Servicios Puerta a Puerta",
    description:
      "Vehículos ideales: Vans y taxis, ideales para maniobrar en zonas residenciales y ofrecer un servicio íntimo y seguro.",
    icon: MapPin,
  },
];

const detailedServices = [
  {
    title: "Transporte de Personal",
    description:
      "Traslados seguros y eficientes para empleados hacia reuniones, convenciones o eventos, optimizando la productividad y la logística organizacional.",
    icon: Users,
  },
  {
    title: "Servicios de Shuttle",
    description:
      "Rutas programadas y regulares entre puntos clave (aeropuertos, hoteles, oficinas y centros de eventos) para reducir el estrés del tráfico.",
    icon: Plane,
  },
  {
    title: "Transporte Ejecutivo",
    description:
      "Servicio premium, personalizado y discreto para directivos. Enfocado en el confort, la eficiencia y en proyectar una imagen corporativa de alto nivel.",
    icon: Briefcase,
  },
  {
    title: "Logística de Viajes Corporativos",
    description:
      "Gestión integral de itinerarios que incluye reservas, coordinación de transporte multitransporte, control de gastos y asistencia ante imprevistos.",
    icon: Building2,
  },
  {
    title: "Alquiler de Vehículos",
    description:
      "Disponibilidad inmediata de una flota versátil que abarca desde buses y minibuses para grupos grandes, hasta vans y sedanes de lujo.",
    icon: Car,
  },
  {
    title: "Servicios Puerta a Puerta",
    description:
      "Traslados directos desde el domicilio u hotel hasta el destino final, garantizando puntualidad, seguridad y máxima comodidad.",
    icon: MapPin,
  },
  {
    title: "Turismo y Excursiones",
    description:
      "Viajes grupales a playas, montañas o ciudades. Disfruta con amigos y familiares sin depender de varios vehículos.",
    icon: Umbrella,
  },
  {
    title: "Eventos Sociales",
    description:
      "Traslados coordinados para bodas, graduaciones y fiestas. Garantiza que todos tus invitados lleguen cómodos y a tiempo.",
    icon: Calendar,
  },
  {
    title: "Eventos Masivos y Deportes",
    description:
      "Transporte a conciertos, festivales o partidos. Olvídate del tráfico y las complicaciones de estacionamiento.",
    icon: Music,
  },
  {
    title: "Viajes Religiosos",
    description:
      "Traslados especiales para delegaciones y peregrinaciones a santuarios o centros espirituales.",
    icon: Church,
  },
  {
    title: "Instituciones y Colegios",
    description:
      "Salidas pedagógicas, campamentos y actividades recreativas para grupos juveniles y escolares.",
    icon: GraduationCap,
  },
  {
    title: "Mudanzas y Traslados Colectivos",
    description:
      "Soluciones logísticas para cambios de residencia grupales o transporte de pertenencias de gran volumen.",
    icon: Package,
  },
];

const fleetList = [
  "Buses de uno y dos pisos",
  "Buses estándar y de lujo",
  "Minibuses",
  "Vehículos ejecutivos",
  "Vans",
];

function getRecommendedVehicle(passengers: number) {
  if (passengers <= 4) return "Taxi Ejecutivo";
  if (passengers <= 15) return "Van";
  if (passengers <= 25) return "Minibus";
  return "Bus";
}

const fadeInUp = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.6 },
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ViajesATuMedidaPage() {
  const [passengers, setPassengers] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [subscriptionEmail, setSubscriptionEmail] = useState("");
  const [description, setDescription] = useState("");

  const cotizadorRef = useRef<HTMLDivElement>(null);

  const recommendedVehicle = passengers
    ? getRecommendedVehicle(Number.parseInt(passengers))
    : null;

  const scrollToCotizador = () => {
    if (cotizadorRef.current) {
      const elementPosition = cotizadorRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 30;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      {/* Hero Section with Contact Banner - Full Viewport */}
      <section className="relative flex min-h-screen flex-col">
        {/* Contact Banner */}
        <div className="flex min-h-[20vh] items-center bg-card">
          <div className="mx-auto w-full max-w-7xl px-4 py-8">
            <motion.div
              className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:justify-around"
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              {/* Location */}
              <motion.div
                className="flex items-center gap-5"
                variants={fadeInUp}
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg shadow-orange-500/30">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                    Encuéntranos en
                  </p>
                  <p className="mt-1 text-xl font-bold text-primary lg:text-2xl">
                    San Francisco de Borja 1251
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Estación Central - Santiago
                  </p>
                </div>
              </motion.div>

              {/* Divider - hidden on mobile */}
              <div className="hidden h-24 w-px bg-border lg:block" />

              {/* Phone */}
              <motion.div
                className="flex items-center gap-5"
                variants={fadeInUp}
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg shadow-orange-500/30">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                    Llámanos en cualquier momento
                  </p>
                  <a
                    href="tel:+56212345678"
                    className="mt-1 block text-2xl font-bold text-primary hover:text-orange-600 lg:text-3xl"
                  >
                    +562 2520 5119
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative flex min-h-[80vh] items-center bg-primary">
          <div className="absolute inset-0 bg-[url('/images/hero-transport.jpg')] bg-cover bg-center opacity-20" />
          <div className="relative mx-auto w-full max-w-7xl px-4 py-12 text-center">
            <motion.h1
              className="text-balance text-5xl font-bold tracking-tight text-primary-foreground md:text-6xl lg:text-7xl"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
            >
              VIAJES A TU MEDIDA
            </motion.h1>
            <motion.p
              className="mx-auto mt-6 max-w-2xl text-2xl font-medium text-primary-foreground/90"
              variants={fadeIn}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.2 }}
            >
              Cotiza e inicia tu viaje hoy
            </motion.p>
            <motion.p
              className="mx-auto mt-6 max-w-3xl text-lg text-primary-foreground/80 lg:text-xl"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.3 }}
            >
              Arrienda el vehículo que necesitas con flexibilidad en rutas y
              horarios. Con nuestra flota diversa (Buses, Vans y Taxis
              Ejecutivos), movemos a tu equipo o a particulares.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.4 }}
            >
              <Button
                size="lg"
                className="mt-10 h-14 px-8 text-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-lg shadow-orange-500/30"
                onClick={scrollToCotizador}
              >
                Solicitar Cotización
                <ChevronRight className="ml-2 h-6 w-6" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cotizador Dinámico */}
      <section
        className="bg-background py-16 lg:py-24"
        ref={cotizadorRef}
        id="cotizador-form"
      >
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Cotizador Dinámico
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="mx-auto mt-10 max-w-3xl">
              <CardContent className="p-6 lg:p-8">
                <div className="grid gap-6 md:grid-cols-2">
                  {/* Row 1: Pasajeros y Tipo de Servicio */}
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Label htmlFor="passengers">Número de pasajeros</Label>
                    <Input
                      id="passengers"
                      type="number"
                      placeholder="Ej: 25"
                      value={passengers}
                      onChange={(e) => setPassengers(e.target.value)}
                    />
                  </motion.div>

                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Label htmlFor="serviceType">Tipo de servicio</Label>
                    <Select value={serviceType} onValueChange={setServiceType}>
                      <SelectTrigger id="serviceType">
                        <SelectValue placeholder="Selecciona un tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="economico">Económico</SelectItem>
                        <SelectItem value="salon-cama">Salón Cama</SelectItem>
                        <SelectItem value="rapido">Rápido</SelectItem>
                        <SelectItem value="ejecutivo">Ejecutivo</SelectItem>
                      </SelectContent>
                    </Select>
                  </motion.div>

                  {/* Row 2: Origen y Destino */}
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Label htmlFor="origin">Origen</Label>
                    <Input
                      id="origin"
                      placeholder="Ciudad o dirección de inicio"
                      value={origin}
                      onChange={(e) => setOrigin(e.target.value)}
                    />
                  </motion.div>

                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Label htmlFor="destination">Destino</Label>
                    <Input
                      id="destination"
                      placeholder="Ciudad o dirección final"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                    />
                  </motion.div>

                  {/* Row 3: Email y Fecha */}
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Label htmlFor="email">Correo electrónico</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="ejemplo@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </motion.div>

                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <Label htmlFor="date">Fecha del servicio</Label>
                    <Input
                      id="date"
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </motion.div>
                </div>

                {/* Textarea para descripción del transporte (ocupa toda la fila) */}
                <motion.div
                  className="mt-6 space-y-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <Label htmlFor="description">
                    Descripción del servicio requerido
                  </Label>
                  <textarea
                    id="description"
                    className="w-full min-h-[80px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Describe aquí los detalles adicionales como: necesidades especiales, horarios específicos, paradas intermedias, equipaje especial, requerimientos específicos del vehículo, etc."
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </motion.div>

                {recommendedVehicle && (
                  <motion.div
                    className="rounded-lg bg-accent/10 p-6 text-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <p className="text-sm font-medium text-muted-foreground">
                      Opción recomendada
                    </p>
                    <p className="mt-2 text-2xl font-bold text-primary">
                      {recommendedVehicle}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Para {passengers} pasajeros
                    </p>
                  </motion.div>
                )}

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <Button
                    className="mt-6 w-full bg-orange-500 hover:bg-orange-600"
                    size="lg"
                  >
                    Solicitar Cotización
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Tipos de Vehículo */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <motion.h2
            className="text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            Tipos de Vehículo
          </motion.h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {vehicleTypes.map((vehicle, index) => (
              <motion.div
                key={vehicle.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden text-center transition-shadow hover:shadow-lg">
                  <div className="relative h-48 w-full">
                    <img
                      src={vehicle.image || "/placeholder.svg"}
                      alt={vehicle.name}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white">
                        {vehicle.name}
                      </h3>
                    </div>
                  </div>
                  <CardContent className="pt-6">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                      <vehicle.icon className="h-6 w-6 text-orange-500" />
                    </div>
                    <p className="text-muted-foreground">
                      {vehicle.description}
                    </p>
                    <p className="mt-2 font-semibold text-foreground">
                      {vehicle.capacity}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lo que necesitas */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <motion.h2
            className="text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            Lo que necesitas, cuando lo necesitas
          </motion.h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card className="flex h-full flex-col transition-shadow hover:shadow-lg">
                  <CardHeader className="flex-shrink-0">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                        <service.icon className="h-6 w-6 text-orange-500" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg">
                          {index + 1}. {service.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tu transporte a la medida */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            className="grid items-center gap-12 lg:grid-cols-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
                Tu transporte a la medida, listo para operar
              </h2>
              <p className="mt-6 text-lg text-primary-foreground/80">
                Contamos con una flota versátil y lista para operar, diseñada
                para adaptarse a cualquier tipo de actividad o volumen de
                pasajeros. Ofrecemos soluciones de arriendo con disponibilidad
                inmediata para cubrir los requerimientos de movilidad de cada
                cliente, individual o grupal, de forma eficiente.
              </p>
              <div className="mt-8 overflow-hidden rounded-xl">
                <img
                  src="/images/fleet-lineup.jpg"
                  alt="Flota de vehículos Tandem"
                  className="h-64 w-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              className="rounded-lg bg-primary-foreground/10 p-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-primary-foreground">
                Movilidad a tu medida y sin esperas
              </h3>
              <p className="mt-4 text-primary-foreground/80">
                Disponemos de una flota diversa lista para salir a ruta.
                Garantizamos el vehículo ideal para cada necesidad con entrega
                inmediata y total flexibilidad de itinerarios, paradas y
                horarios.
              </p>
              <div className="mt-6">
                <h4 className="font-semibold text-primary-foreground">
                  Nuestra flota
                </h4>
                <ul className="mt-4 space-y-2">
                  {fleetList.map((item, index) => (
                    <motion.li
                      key={item}
                      className="flex items-center gap-2 text-primary-foreground/90"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Servicios Destacados */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <motion.h2
            className="text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            Servicios Destacados
          </motion.h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {detailedServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.03 }}
              >
                <Card className="flex h-full flex-col transition-shadow hover:shadow-lg">
                  <CardHeader className="flex-shrink-0 pb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                      <service.icon className="h-5 w-5 text-orange-500" />
                    </div>
                    <CardTitle className="mt-3 text-base">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent py-16 lg:py-24">
        <motion.div
          className="mx-auto max-w-4xl px-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-accent-foreground md:text-4xl">
            Cotiza tu transporte ideal en minutos
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-accent-foreground/90">
            Somos líderes en transporte especializado con el respaldo de Grupo
            Pullman. Ofrecemos el arriendo inmediato de una amplia flota
            adaptada a cualquier actividad, empresa o particular con una amplia
            cobertura a lo largo del territorio nacional.
          </p>
          <p className="mt-4 text-xl font-semibold text-accent-foreground">
            La solución que buscas, disponible ahora.
          </p>
          <div className="mt-8 inline-block">
            <Button
              size="lg"
              variant="secondary"
              className="bg-orange-500 hover:bg-orange-600 text-white"
              onClick={scrollToCotizador}
            >
              Solicita ahora tu cotización personalizada
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Suscripción */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            className="rounded-2xl bg-card p-8 shadow-lg lg:p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl lg:text-4xl">
                ¿Tienes un compromiso importante y necesitas transporte
                confiable e inmediato?
              </h2>
              <p className="mx-auto mt-4 max-w-4xl text-muted-foreground lg:text-lg">
                Ya sea un evento corporativo, un viaje de estudios o cualquier
                otra actividad, tenemos la solución perfecta para ti. Cotiza con
                nosotros y descubre cómo podemos hacer que tu traslado sea
                perfecto.
              </p>
            </div>

            <div className="mt-10 border-t pt-10">
              <h3 className="text-center text-xl font-semibold text-foreground md:text-2xl">
                Suscríbete y lleva tu transporte al siguiente nivel
              </h3>
              <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-muted-foreground md:text-base">
                Recibe ofertas exclusivas, consejos para planificar viajes,
                análisis de tendencias, atención personalizada y recordatorios
                importantes.
              </p>

              <div className="mx-auto mt-6 flex max-w-lg gap-3 lg:max-w-xl">
                <div className="flex-1">
                  <Input
                    type="email"
                    placeholder="Tu correo electrónico"
                    value={subscriptionEmail}
                    onChange={(e) => setSubscriptionEmail(e.target.value)}
                    className="w-full h-12 text-base"
                  />
                </div>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white h-12 px-6">
                  <Send className="h-5 w-5 mr-2" />
                  Suscribirse
                </Button>
              </div>
            </div>

            <div className="mt-10 grid gap-6 border-t pt-10 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Ofertas exclusivas",
                  description: "Descuentos especiales para suscriptores",
                },
                {
                  title: "Consejos de viaje",
                  description: "Mejores prácticas y recomendaciones",
                },
                {
                  title: "Atención personalizada",
                  description: "Asesoramiento directo de expertos",
                },
                {
                  title: "Recordatorios importantes",
                  description: "No pierdas fechas clave",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col items-start gap-2 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="font-medium text-foreground">
                      {item.title}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground pl-7">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Redes Sociales */}
      <section className="bg-primary pb-16 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            className="flex flex-col items-center justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-medium text-white">
              Síguenos en nuestras redes sociales de Tándem Servicios
            </p>
            <div className="flex gap-6">
              <a
                href="https://www.instagram.com/tandem_servicios/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-500 transition-colors duration-300"
              >
                <Instagram className="h-6 w-6" />
              </a>

              <a
                href="https://www.facebook.com/tandemserv/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-500 transition-colors duration-300"
              >
                <Facebook className="h-6 w-6" />
              </a>

              <a
                href="https://www.linkedin.com/company/110718015/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-500 transition-colors duration-300"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
