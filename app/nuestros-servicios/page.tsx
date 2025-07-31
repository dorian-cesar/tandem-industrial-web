import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Bus } from "lucide-react"

export default function NuestrosServiciosPage() {
  const services = [
    {
      title: "Servicio de transporte minero",
      icon: "🚌",
      href: "/nuestros-servicios/transporte-minero",
      active: true,
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
          alt="Trabajadores mineros con equipos de seguridad"
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
              Nuestros Servicios / <span className="text-orange-500">Transporte Minero</span>
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
            <h2 className="text-xl font-bold text-blue-600">Servicio de Transporte Minero</h2>

            <p className="text-gray-700">
              Descubre una solución integral para tus necesidades de transporte en el sector minero. Nos especializamos
              en servicios de transporte para faenas mineras, ofreciendo soluciones confiables y eficientes.
            </p>

            <div>
              <h3 className="font-semibold text-blue-600 mb-2">Servicio Externo:</h3>
              <p className="text-gray-700 mb-4">
                Transportamos pasajeros de empresas mineras y contratistas desde distintas comunas hasta las faenas
                mineras. Ofrecemos una variedad de opciones, incluyendo buses, taxi buses y minibuses, todos estos
                vehículos con y sin acreditación según la necesidad de su requerimiento.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-blue-600 mb-2">Internos:</h3>
              <p className="text-gray-700 mb-4">
                Facilitamos el transporte de pasajeros dentro de las faenas mineras para empresas mineras y
                contratistas. Nuestros buses, taxi buses y minibuses están completamente acreditados para ingresar a la
                faena.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-blue-600 mb-2">Interurbanos:</h3>
              <p className="text-gray-700 mb-6">
                Conectamos ciudades mediante nuestro servicio de transporte para empresas mineras y contratistas.
                Nuestra flota incluye buses de doble piso y un piso para garantizar comodidad y eficiencia en los
                traslados.
              </p>
            </div>

            <p className="text-blue-600 font-medium">¡Optimiza tu logística con nuestros servicios especializados!</p>

            <Button className="bg-orange-500 hover:bg-orange-600 text-white">Contacto Comercial</Button>
          </div>

          <div>
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Bus Tandem en faena minera"
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
