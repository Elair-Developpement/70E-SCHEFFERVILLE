import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

/**
 * Caroussel d'images pour la page d'accueil.
 * TODO: Pas encore de texte et dimensions weird...
 * @returns JSX.Element
 */
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
            <div className="relative w-full h-[20rem] overflow-hidden rounded-lg">
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
