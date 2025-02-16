import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface BannerCarouselProps {
  banners: { banner_name: string; banner_image: string }[];
  isLoading: boolean;
}

export function BannerCarousel({ banners, isLoading }: BannerCarouselProps) {
  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-2 md:-ml-4">
        {isLoading ? (
          <div className="flex items-center justify-center absolute w-full">
            <h1 className="text-4xl">Loading...</h1>
          </div>
        ) : (
          banners.map((banner) => (
            <CarouselItem
              key={banner.banner_name}
              className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <div className="relative overflow-hidden rounded-lg aspect-[16/9]">
                <Image
                  src={banner.banner_image}
                  alt={banner.banner_name}
                  fill
                />
              </div>
            </CarouselItem>
          ))
        )}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
