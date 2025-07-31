import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Bus } from "lucide-react"

export default function TransporteParticularPage() {
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
      active: false,
    },
    {
      title: "Servicio de transporte particular",
      icon: "🚌",
      href: "/nuestros-servicios/servicio-transporte-particular",
      active: true,
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
          alt="Pasajeros felices en bus cómodo"
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
              Nuestros Servicios / <span className="text-orange-500">Transporte Particular</span>
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
            <h2 className="text-xl font-bold text-blue-600">Servicio de Transporte Particular</h2>

            <p className="text-gray-700">
              Desde un paseo de curso hasta la glamorosa fiesta de gala de los Años medios, pasando por cualquier otra
              ocasión especial, estamos aquí para asegurar que llegues a tu destino con estilo y seguridad.
            </p>

            <p className="text-gray-700">
              Nuestros servicios personalizados se adaptan a una amplia gama de necesidades, desde excursiones
              turísticas hasta eventos escolares, universitarios, empresariales y celebraciones especiales.
            </p>

            <p className="text-gray-700">
              No importa la hora ni la ocasión, nuestro servicio está disponible las 24 horas del día para atender tus
              necesidades de transporte. Confía en nosotros para hacer que cada viaje sea memorable y sin
              complicaciones.
            </p>

            <p className="text-blue-600 font-medium">¡Contáctanos ahora y deja que nos encarguemos del resto!</p>

            <Button className="bg-orange-500 hover:bg-orange-600 text-white">Contacto Comercial</Button>
          </div>

          <div>
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Bus de lujo para transporte particular"
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
