import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Bus } from "lucide-react"

export default function TransporteIndustrialPage() {
  const services = [
    {
      title: "Servicio de transporte minero",
      icon: "🚌",
      href: "/nuestros-servicios",
      active: false,
    },
    {
      title: "Servicio de transporte Industrial",
      icon: "🚌",
      href: "/nuestros-servicios/servicio-transporte-industrial",
      active: true,
    },
    {
      title: "Servicio de transporte particular",
      icon: "🚌",
      href: "/nuestros-servicios/servicio-transporte-particular",
      active: false,
    },
    {
      title: "Servicio de Radio Taxi",
      icon: "🚗",
      href: "/nuestros-servicios/servicio-radio-taxi",
      active: false,
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-64">
        <Image
          src="/placeholder.svg?height=300&width=1200"
          alt="Trabajadores industriales con chalecos de seguridad"
          fill
          className="object-cover"
        />
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Bus className="w-8 h-8 text-orange-500" />
            <h1 className="text-2xl font-bold text-blue-600">
              Nuestros Servicios / <span className="text-orange-500">Transporte Industrial</span>
            </h1>
          </div>

          <p className="text-gray-700">
            Con más de cuarenta años de experiencia, nos hemos especializado en satisfacer las demandas de clientes
            institucionales, incluyendo empresas de renombre e instituciones gubernamentales.
          </p>
        </div>

        {/* Services Navigation */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Link key={index} href={service.href}>
              <Card
                className={`cursor-pointer hover:shadow-lg transition-all duration-300 ${service.active ? "ring-2 ring-blue-600" : ""}`}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
                    <div className="text-2xl">{service.icon}</div>
                  </div>
                  <div className={`${service.active ? "bg-blue-800" : "bg-blue-600"} text-white p-3 rounded-lg`}>
                    <h3 className="font-medium text-sm">{service.title}</h3>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-blue-600">Servicio de Transporte Industrial</h2>

            <p className="text-gray-700">
              Explora una solución completa para tus requerimientos de transporte de pasajeros. Nos enfocamos en
              servicios de transporte interurbano y urbano para agilizar la logística de los trabajadores.
            </p>

            <div>
              <h3 className="font-semibold text-blue-600 mb-2">Servicios interurbanos:</h3>
              <p className="text-gray-700 mb-4">
                Conectamos ciudades mediante nuestro eficiente servicio de transporte de pasajeros en buses de doble
                piso y de un piso.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-blue-600 mb-2">Servicios urbanos:</h3>
              <p className="text-gray-700 mb-6">
                Simplificamos el desplazamiento de pasajeros dentro de la ciudad con nuestra amplia gama de opciones de
                transporte, que incluyen buses.
              </p>
            </div>

            <p className="text-blue-600 font-medium">
              ¡Contáctanos hoy mismo para comenzar a optimizar tus operaciones!
            </p>

            <Button className="bg-orange-500 hover:bg-orange-600 text-white">Contacto Comercial</Button>
          </div>

          <div>
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Bus industrial Tandem en puerto"
              width={500}
              height={400}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
