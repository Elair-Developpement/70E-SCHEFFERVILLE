import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function HomeCarousel() {
  return (
    <Carousel
      className="w-auto h-auto"
      opts={{
        loop: true,
      }}
    >
      <CarouselContent>
        {["aurore", "aurore2", "barrage"].map((img, i) => (
          <CarouselItem key={i} className="flex items-center justify-center">
            <div className="relative w-[80rem] h-[52rem] overflow-hidden rounded-lg">
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
    </Carousel>
  );
}
