import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Handshake } from "lucide-react";

export default function ContactoPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-100">
        <Image
          src="img/bannerContacto.png"
          alt="Equipo de trabajadores industriales"
          width={1920}
          height={480}
          className="w-full h-full object-cover"
          priority={true}
        />
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Handshake className="w-8 h-8 text-orange-500" />
            <h1 className="text-2xl font-bold text-blue-600">Contacto</h1>
          </div>

          <p className="text-blue-600">
            Complete el siguiente formulario y nos comunicaremos con usted lo
            antes posible para abordar cómo podemos colaborar y satisfacer sus
            necesidades.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="bg-blue-50">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label
                      htmlFor="nombre"
                      className="text-blue-600 font-medium"
                    >
                      Nombre(s):
                    </Label>
                    <Input
                      id="nombre"
                      placeholder="Ingresa tu nombre"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="apellido"
                      className="text-blue-600 font-medium"
                    >
                      Apellido(s):
                    </Label>
                    <Input
                      id="apellido"
                      placeholder="Ingresa tu Apellido"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label
                    htmlFor="empresa"
                    className="text-blue-600 font-medium"
                  >
                    Empresa:
                  </Label>
                  <Input
                    id="empresa"
                    placeholder="Ingresa Nombre de la Empresa"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="celular"
                    className="text-blue-600 font-medium"
                  >
                    Celular:
                  </Label>
                  <Input
                    id="celular"
                    placeholder="ej. 9 12345678"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-blue-600 font-medium">
                    Correo Electrónico:
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Ej: example@example.com"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="mensaje"
                    className="text-blue-600 font-medium"
                  >
                    Mensaje:
                  </Label>
                  <Textarea
                    id="mensaje"
                    rows={6}
                    className="mt-1"
                    placeholder="Escribe tu mensaje aquí..."
                  />
                </div>

                <div className="text-center">
                  <Button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                  >
                    Enviar formulario
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
