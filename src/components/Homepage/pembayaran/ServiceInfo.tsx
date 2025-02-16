import Image from "next/image";

interface ServiceInfoProps {
  service: any;
}

export function ServiceInfo({ service }: ServiceInfoProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Pembayaran</h2>
      <div className="flex items-center gap-2 text-lg">
        {service.service_icon && (
          <Image
            src={service.service_icon}
            alt={service.service_name}
            width={32}
            height={32}
          />
        )}
        <span>{service.service_name}</span>
      </div>
    </div>
  );
}
