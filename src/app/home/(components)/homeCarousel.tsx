import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function HomeCarousel() {
  return (
    <Carousel
      className="w-full h-full"
      opts={{
        loop: true,
      }}
    >
      <CarouselContent>
        {["aurore", "aurore2", "barrage"].map((img, i) => (
          <CarouselItem key={i} className="flex items-center justify-center">
            <div className="relative w-screen h-screen overflow-hidden rounded-lg">
              <Image
                src={`/images/carousel/${img}.jpg`}
                alt={img}
                fill
                className="object-cover"
                sizes="100vw"
                priority={i === 0}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
