import Image from "next/image";

interface VehicleIconProps {
  className?: string;
}

export function ConventionalBusIcon({ className }: VehicleIconProps) {
  return (
    <div className={className}>
      <Image
        src="/img/flota-bus.png"
        alt="Bus Convencional"
        width={400}
        height={200}
        className="w-full h-full object-contain"
      />
    </div>
  );
}

export function ElectricBusIcon({ className }: VehicleIconProps) {
  return (
    <div className={className}>
      <Image
        src="/img/flota-bus.png"
        alt="Bus Eléctrico"
        width={400}
        height={200}
        className="w-full h-full object-contain"
      />
    </div>
  );
}

export function MiniVanIcon({ className }: VehicleIconProps) {
  return (
    <div className={className}>
      <Image
        src="/img/flota-van.png"
        alt="Mini Bus y Van"
        width={380}
        height={200}
        className="w-full h-full object-contain"
      />
    </div>
  );
}

export function ExecutiveCarIcon({ className }: VehicleIconProps) {
  return (
    <div className={className}>
      <Image
        src="/img/flota-auto.png"
        alt="Vehículos Menores"
        width={380}
        height={200}
        className="w-full h-full object-contain"
      />
    </div>
  );
}
