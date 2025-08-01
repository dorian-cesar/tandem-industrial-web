import Image from "next/image";
import Link from "next/link";
import { Users } from "lucide-react";

export default function NuestrosClientesPage() {
  const clients = [
    { name: "CENTINELA", logo: "img/centinela.png" },
    { name: "ZALDIVAR", logo: "img/zaldivar.png" },
    { name: "CODELCO SALVADOR", logo: "img/codelcoSalvador.png" },
    { name: "CODELCO VENTANAS", logo: "img/codelcoVentanas.png" },
    { name: "ANGLOAMERICAN", logo: "img/angloAmerican.png" },
    { name: "SPENCE BHP", logo: "img/spence.png" },
    { name: "GUANACO", logo: "img/guanaco.png" },
    { name: "TECK QB2", logo: "img/teck_qb2.png" },
    { name: "ARRIGONI", logo: "img/arrigoni.png" },
    { name: "LOMAS BAYAS", logo: "img/lomas_bayas.png" },
    { name: "LATAM", logo: "img/latam.png" },
    { name: "SODEXO", logo: "img/sodexo.png" },
    { name: "RESITER", logo: "img/resiter.png" },
    { name: "BOART LONGYEAR", logo: "img/boart_longyear.png" },
    { name: "ASMAR", logo: "img/asmar.png" },
    { name: "LAS CONDES", logo: "img/las_condes.png" },
    { name: "ESO", logo: "img/eso.png" },
    { name: "ORBIT GARANT", logo: "img/orbit_garant2.png" },
    { name: "BREDEN MASTER", logo: "img/breden_master.png" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-8 h-8 text-orange-500" />
            <h1 className="text-2xl font-bold text-blue-600">
              Nuestros Clientes
            </h1>
          </div>

          <p className="text-gray-700 mb-12 max-w-4xl">
            Nuestra amplia cartera de clientes refleja el compromiso constante
            con la excelencia en el servicio. Te invitamos a conocer la
            experiencia Tandem.
          </p>

          {/* Clients Grid */}
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 w-[45%] md:w-[22%] lg:w-[18%]"
              >
                <Image
                  src={client.logo}
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
            <Link
              href="/contacto"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-20 py-3 rounded-2xl text-md font-medium transition-colors"
            >
              Contacto Comercial
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
