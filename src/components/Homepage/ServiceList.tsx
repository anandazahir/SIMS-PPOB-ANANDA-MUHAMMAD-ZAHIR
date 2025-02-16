import Link from "next/link";
import Image from "next/image";

interface ServiceListProps {
  services: {
    service_code: string;
    service_name: string;
    service_icon?: string;
  }[];
  isLoading: boolean;
}

export function ServiceList({ services, isLoading }: ServiceListProps) {
  return (
    <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4 relative">
      {isLoading ? (
        <div className="flex items-center justify-center h-[400px] md:h-[256px] lg:h-full w-full absolute">
          <h1 className="text-4xl">Loading...</h1>
        </div>
      ) : (
        services.map((service) => (
          <Link
            href={`/pembayaran/${service.service_code}`}
            key={service.service_code}
            className="flex flex-col items-center space-y-4"
          >
            <Image
              src={service.service_icon || "/images/default.png"}
              width={96}
              height={96}
              className="h-16 w-16 object-cover"
              alt={service.service_name}
            />
            <p className="text-sm font-semibold text-center">
              {service.service_name}
            </p>
          </Link>
        ))
      )}
    </div>
  );
}
