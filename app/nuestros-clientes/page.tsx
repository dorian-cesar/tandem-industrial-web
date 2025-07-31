import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Users } from "lucide-react"

export default function NuestrosClientesPage() {
  const clients = [
    { name: "CENTINELA", logo: "/placeholder.svg?height=80&width=160" },
    { name: "ZALDIVAR", logo: "/placeholder.svg?height=80&width=160" },
    { name: "CODELCO SALVADOR", logo: "/placeholder.svg?height=80&width=160" },
    { name: "CODELCO VENTANAS", logo: "/placeholder.svg?height=80&width=160" },
    { name: "ANGLOAMERICAN", logo: "/placeholder.svg?height=80&width=160" },
    { name: "SPENCE BHP", logo: "/placeholder.svg?height=80&width=160" },
    { name: "GUANACO", logo: "/placeholder.svg?height=80&width=160" },
    { name: "TECK", logo: "/placeholder.svg?height=80&width=160" },
    { name: "QB2", logo: "/placeholder.svg?height=80&width=160" },
    { name: "ARRIGONI", logo: "/placeholder.svg?height=80&width=160" },
    { name: "LOMAS BAYAS", logo: "/placeholder.svg?height=80&width=160" },
    { name: "LATAM", logo: "/placeholder.svg?height=80&width=160" },
    { name: "SODEXO", logo: "/placeholder.svg?height=80&width=160" },
    { name: "RESITER", logo: "/placeholder.svg?height=80&width=160" },
    { name: "BOART LONGYEAR", logo: "/placeholder.svg?height=80&width=160" },
    { name: "ASMAR", logo: "/placeholder.svg?height=80&width=160" },
    { name: "LOS ANDES", logo: "/placeholder.svg?height=80&width=160" },
    { name: "TEST", logo: "/placeholder.svg?height=80&width=160" },
    { name: "ORBIT GARANT", logo: "/placeholder.svg?height=80&width=160" },
    { name: "BREDEN MASTER", logo: "/placeholder.svg?height=80&width=160" },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-8 h-8 text-orange-500" />
            <h1 className="text-2xl font-bold text-blue-600">Nuestros Clientes</h1>
          </div>

          <p className="text-gray-700 mb-12 max-w-4xl">
            Nuestra amplia cartera de clientes refleja el compromiso constante con la excelencia en el servicio. Te
            invitamos a conocer la experiencia Tandem.
          </p>

          {/* Clients Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={`Logo ${client.name}`}
                  width={160}
                  height={80}
                  className="max-h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">Contacto Comercial</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
