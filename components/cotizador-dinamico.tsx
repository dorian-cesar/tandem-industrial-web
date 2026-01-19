"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
  Users,
  Route,
  MapPin,
  Calendar,
  Send,
  Phone,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  Star,
  Car,
  Bus,
  Truck,
  Zap,
  Clock,
  Shield,
  DollarSign,
  Navigation,
  Briefcase,
  Building2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";

interface CotizadorMejoradoProps {
  className?: string;
}

const vehicleTypes = [
  {
    name: "Bus Premium",
    description: "Comodidad y espacio para grupos grandes",
    capacity: "40-50+ pasajeros",
    icon: Bus,
    features: ["WiFi", "Aire acondicionado", "Asientos reclinables", "TV"],
    priceRange: "$$$",
  },
  {
    name: "Vans Ejecutivas",
    description: "Agilidad y confort para grupos medianos",
    capacity: "15 pasajeros",
    icon: Truck,
    features: ["WiFi", "Refrigerador", "Confort premium", "Privacidad"],
    priceRange: "$$",
  },
  {
    name: "Taxis Ejecutivos",
    description: "Servicio premium y personalizado",
    capacity: "1-4 pasajeros",
    icon: Car,
    features: ["Conductor profesional", "Lujo", "Puntualidad", "Privacidad"],
    priceRange: "$",
  },
];

function getRecommendationText(passengers: number) {
  if (passengers <= 4)
    return "Ideal para viajes ejecutivos o familiares pequeños";
  if (passengers <= 15) return "Perfecto para grupos medianos y eventos";
  if (passengers <= 25) return "Excelente para empresas y tours";
  return "Solución óptima para eventos masivos y corporativos";
}

function getRecommendedVehicle(passengers: number) {
  if (passengers <= 4) return "Taxi Ejecutivo";
  if (passengers <= 15) return "Van Ejecutiva";
  if (passengers <= 25) return "Minibus Premium";
  return "Bus Premium";
}

export default function CotizadorMejorado({
  className = "",
}: CotizadorMejoradoProps) {
  const [passengers, setPassengers] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState([50000]);
  const [formStep, setFormStep] = useState(1);
  const [isCalculating, setIsCalculating] = useState(false);
  const [showRecommendation, setShowRecommendation] = useState(false);

  const recommendedVehicle = passengers
    ? getRecommendedVehicle(Number.parseInt(passengers))
    : null;

  const handleCalculate = () => {
    if (passengers && serviceType && origin && destination) {
      setIsCalculating(true);
      setTimeout(() => {
        setIsCalculating(false);
        setShowRecommendation(true);
        setFormStep(3);
      }, 1500);
    }
  };

  const nextStep = () => {
    if (formStep < 3) {
      setFormStep(formStep + 1);
    }
  };

  const prevStep = () => {
    if (formStep > 1) {
      setFormStep(formStep - 1);
    }
  };

  const handleSubmit = () => {
    // Aquí iría la lógica para enviar la cotización
    console.log({
      passengers,
      serviceType,
      origin,
      destination,
      date,
      email,
      description,
      budget: budget[0],
    });
    alert("¡Cotización enviada con éxito! Te contactaremos pronto.");
  };

  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

      <div className="relative">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-4 bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-2">
            <Zap className="mr-2 h-3 w-3" />
            Cotizador Inteligente
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Calcula tu presupuesto en{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              tiempo real
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Nuestro sistema inteligente analiza tus necesidades y sugiere la
            mejor opción
          </p>
        </motion.div>

        {/* Indicador de progreso */}
        <motion.div
          className="mx-auto mb-8 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-2">
            {["Datos", "Servicio", "Confirmación"].map((step, idx) => (
              <div key={step} className="flex flex-col items-center">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${formStep > idx + 1 ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white border-transparent" : formStep === idx + 1 ? "border-orange-500 bg-white text-orange-500" : "border-border text-muted-foreground"}`}
                >
                  {idx + 1}
                </div>
                <span
                  className={`mt-2 text-sm ${formStep === idx + 1 ? "font-semibold text-orange-600" : "text-muted-foreground"}`}
                >
                  {step}
                </span>
              </div>
            ))}
          </div>
          <Progress value={(formStep / 3) * 100} className="h-2" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-card via-card to-secondary/5 shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-orange-500/10 to-transparent rounded-full -translate-y-32 translate-x-32" />

            <CardContent className="relative p-6 lg:p-8">
              <AnimatePresence mode="wait">
                {formStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          Número de pasajeros
                        </Label>
                        <div className="relative">
                          <Input
                            type="number"
                            placeholder="Ej: 25"
                            value={passengers}
                            onChange={(e) => setPassengers(e.target.value)}
                            className="h-12 text-lg pl-12"
                          />
                          <Users className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        </div>
                        {passengers && (
                          <p className="text-sm text-orange-600">
                            {getRecommendationText(Number.parseInt(passengers))}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label className="flex items-center gap-2">
                          <Route className="h-4 w-4" />
                          Tipo de servicio
                        </Label>
                        <Select
                          value={serviceType}
                          onValueChange={setServiceType}
                        >
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Selecciona un tipo" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem
                              value="economico"
                              className="flex items-center gap-2"
                            >
                              <DollarSign className="h-4 w-4" />
                              Económico
                            </SelectItem>
                            <SelectItem
                              value="salon-cama"
                              className="flex items-center gap-2"
                            >
                              <Bus className="h-4 w-4" />
                              Salón Cama
                            </SelectItem>
                            <SelectItem
                              value="ejecutivo"
                              className="flex items-center gap-2"
                            >
                              <Sparkles className="h-4 w-4" />
                              Ejecutivo Premium
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4" />
                          Presupuesto estimado
                        </Label>
                        <div className="space-y-4">
                          <Slider
                            value={budget}
                            onValueChange={setBudget}
                            max={200000}
                            step={10000}
                            className="w-full"
                          />
                          <div className="flex justify-between text-sm text-muted-foreground">
                            <span>$20.000</span>
                            <span className="font-semibold text-orange-600">
                              ${budget[0].toLocaleString()}
                            </span>
                            <span>$200.000</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          Fecha del servicio
                        </Label>
                        <Input
                          type="date"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button
                        onClick={nextStep}
                        disabled={!passengers || !serviceType}
                        className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                      >
                        Continuar
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </motion.div>
                )}

                {formStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          Origen
                        </Label>
                        <div className="relative">
                          <Input
                            placeholder="Ciudad o dirección de inicio"
                            value={origin}
                            onChange={(e) => setOrigin(e.target.value)}
                            className="h-12 pl-12"
                          />
                          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          Destino
                        </Label>
                        <div className="relative">
                          <Input
                            placeholder="Ciudad o dirección final"
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                            className="h-12 pl-12"
                          />
                          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        </div>
                      </div>

                      <div className="space-y-2 md:col-span-2">
                        <Label className="flex items-center gap-2">
                          <Send className="h-4 w-4" />
                          Correo electrónico
                        </Label>
                        <Input
                          type="email"
                          placeholder="ejemplo@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="h-12"
                        />
                      </div>

                      <div className="space-y-2 md:col-span-2">
                        <Label>Descripción del servicio</Label>
                        <Textarea
                          placeholder="Describe detalles adicionales como horarios específicos, paradas intermedias, equipaje especial, etc."
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          className="min-h-[120px]"
                        />
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <Button variant="outline" onClick={prevStep}>
                        Volver
                      </Button>
                      <Button
                        onClick={handleCalculate}
                        disabled={!origin || !destination || !email}
                        className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                      >
                        {isCalculating ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                              className="mr-2 h-4 w-4 rounded-full border-2 border-white border-t-transparent"
                            />
                            Calculando...
                          </>
                        ) : (
                          <>
                            Calcular Cotización
                            <Sparkles className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </div>
                  </motion.div>
                )}

                {formStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="space-y-6"
                  >
                    <AnimatePresence>
                      {showRecommendation && recommendedVehicle && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="rounded-2xl bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-green-500/10 border border-green-500/20 p-6 mb-6"
                        >
                          <div className="flex items-center gap-3 mb-4">
                            <div className="rounded-full bg-gradient-to-r from-green-500 to-emerald-500 p-2">
                              <CheckCircle2 className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-foreground">
                                ¡Recomendación encontrada!
                              </h3>
                              <p className="text-muted-foreground">
                                Basado en tus necesidades, te recomendamos:
                              </p>
                            </div>
                          </div>

                          <div className="grid gap-4 md:grid-cols-3">
                            {vehicleTypes.map((vehicle) => (
                              <Card
                                key={vehicle.name}
                                className={`relative overflow-hidden transition-all ${vehicle.name.includes(recommendedVehicle) ? "ring-2 ring-orange-500" : "opacity-70"}`}
                              >
                                <CardContent className="p-4">
                                  <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-2">
                                      <vehicle.icon className="h-5 w-5 text-orange-500" />
                                      <span className="font-semibold">
                                        {vehicle.name}
                                      </span>
                                    </div>
                                    {vehicle.name.includes(
                                      recommendedVehicle,
                                    ) && (
                                      <Badge className="bg-gradient-to-r from-orange-500 to-orange-600 text-xs">
                                        <Star className="mr-1 h-2 w-2" />
                                        Recomendado
                                      </Badge>
                                    )}
                                  </div>
                                  <p className="text-xs text-muted-foreground mb-2">
                                    {vehicle.description}
                                  </p>
                                  <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium">
                                      {vehicle.capacity}
                                    </span>
                                    <span className="font-bold text-orange-600 text-sm">
                                      {vehicle.priceRange}
                                    </span>
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="rounded-xl bg-accent/5 p-6">
                      <h4 className="font-semibold text-lg mb-4">
                        Resumen de tu cotización
                      </h4>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Pasajeros:
                            </span>
                            <span className="font-semibold">{passengers}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Origen:
                            </span>
                            <span className="font-semibold">{origin}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Servicio:
                            </span>
                            <span className="font-semibold capitalize">
                              {serviceType}
                            </span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Fecha:
                            </span>
                            <span className="font-semibold">{date}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Destino:
                            </span>
                            <span className="font-semibold">{destination}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Presupuesto:
                            </span>
                            <span className="font-bold text-orange-600">
                              ${budget[0].toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
                      <Button variant="outline" onClick={() => setFormStep(1)}>
                        Editar datos
                      </Button>
                      <div className="flex gap-4">
                        <Button variant="outline" asChild>
                          <a href="tel:+56225205119">
                            <Phone className="mr-2 h-4 w-4" />
                            Llamar ahora
                          </a>
                        </Button>
                        <Button
                          className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                          onClick={handleSubmit}
                        >
                          <Send className="mr-2 h-4 w-4" />
                          Enviar cotización
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </motion.div>

        {/* Stats debajo del cotizador */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {[
            { value: "15 min", label: "Respuesta promedio", icon: Clock },
            { value: "98%", label: "Satisfacción", icon: Star },
            { value: "500+", label: "Clientes activos", icon: Users },
            { value: "24/7", label: "Soporte", icon: Shield },
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="rounded-xl border bg-card p-4 text-center transition-all hover:shadow-lg"
            >
              <stat.icon className="mx-auto h-6 w-6 text-orange-500 mb-2" />
              <div className="text-lg font-bold text-foreground">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

{
  /* <section
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
          <CotizadorMejorado className="mt-10" />
        </div>
      </section> */
}
