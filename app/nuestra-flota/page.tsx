import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bus, Zap } from "lucide-react";

export default function NuestraFlotaPage() {
  const fleet = [
    {
      title: "Buses Convencionales",
      description: "Flota de buses tradicionales para transporte de pasajeros",
      image: "img/busConve.png",
      features: [
        "Capacidad 40-50 pasajeros",
        "Aire acondicionado",
        "Asientos cómodos",
      ],
    },
    {
      title: "Buses Eléctricos",
      description: "Tecnología sustentable para el futuro del transporte",
      image: "img/busElectrico.png",
      features: ["Cero emisiones", "Tecnología avanzada", "Silencioso"],
      badge: "ECO",
    },
    {
      title: "Mini Buses y Van",
      description: "Vehículos versátiles para grupos pequeños",
      image: "img/miniVanBuses.png",
      features: ["Capacidad 15-25 pasajeros", "Maniobrabilidad", "Eficiencia"],
    },
    {
      title: "Vehículos Menores",
      description: "Taxis y vehículos ejecutivos para servicios personalizados",
      image: "img/vehiMenores.png",
      features: [
        "Servicio ejecutivo",
        "Disponibilidad 24/7",
        "Confort premium",
      ],
      badge: "ECO",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-6">
            <Bus className="w-8 h-8 text-orange-500" />
            <h1 className="text-2xl font-bold text-blue-600">Nuestra Flota</h1>
          </div>

          <p className="text-gray-700 mb-12 max-w-4xl">
            Conoce nuestra moderna flota de vehículos, diseñada para brindar el
            mejor servicio de transporte con tecnología de vanguardia y
            compromiso con la sustentabilidad.
          </p>

          {/* Fleet Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {fleet.map((vehicle, index) => (
              <Card
                key={index}
                className="cursor-pointer hover:shadow-lg transition-all duration-300 relative"
              >
                {vehicle.badge && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm z-10 flex items-center gap-1">
                    <Zap className="w-4 h-4" />
                    {vehicle.badge}
                  </div>
                )}
                <CardContent className="p-0">
                  <Image
                    src={vehicle.image || "/placeholder.svg"}
                    alt={vehicle.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-blue-600 mb-2">
                      {vehicle.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{vehicle.description}</p>

                    <ul className="space-y-2 mb-6">
                      {vehicle.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-sm text-gray-700"
                        >
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                      Conoce más
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-blue-600 text-center mb-8">
              Nuestra Flota en Números
            </h2>

            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-orange-500 mb-2">
                  300+
                </div>
                <p className="text-gray-600">Vehículos en operación</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-500 mb-2">
                  95%
                </div>
                <p className="text-gray-600">Disponibilidad operacional</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-500 mb-2">
                  2030
                </div>
                <p className="text-gray-600">Meta flota 100% eléctrica</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-500 mb-2">
                  35
                </div>
                <p className="text-gray-600">Años de experiencia</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">
              ¿Necesitas un servicio de transporte?
            </h2>
            <p className="text-gray-700 mb-8">
              Contáctanos para conocer más sobre nuestros servicios y cómo
              podemos ayudarte.
            </p>
            <Link
              href="/contacto"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md text-sm font-medium transition-colors"
            >
              Contacto Comercial
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
