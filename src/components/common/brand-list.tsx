import Image from "next/image";

import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

const brands = [
  {
    id: 1,
    name: "Nike",
    logoUrl: "/brands/nike.svg",
  },
  {
    id: 2,
    name: "Adidas",
    logoUrl: "/brands/adidas.svg",
  },
  {
    id: 3,
    name: "Puma",
    logoUrl: "/brands/puma.svg",
  },
  {
    id: 4,
    name: "New Balance",
    logoUrl: "/brands/new-balance.svg",
  },
  {
    id: 5,
    name: "Converse",
    logoUrl: "/brands/converse.svg",
  },
  {
    id: 6,
    name: "Polo",
    logoUrl: "/brands/polo.svg",
  },
  {
    id: 7,
    name: "Zara",
    logoUrl: "/brands/zara.svg",
  },
];

export function BrandList() {
  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-6">
        {brands.map((brand) => (
          <CarouselItem
            key={brand.id}
            className="basis-[104px] pl-6 lg:basis-[196px]"
          >
            <div
              key={brand.id}
              className="flex flex-col items-center justify-start gap-4"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl border lg:h-28 lg:w-full">
                <Image
                  src={brand.logoUrl}
                  alt={brand.name}
                  width={0}
                  height={0}
                  unoptimized
                  className="h-8 w-8 lg:h-12 lg:w-12"
                />
              </div>

              <span className="text-sm font-medium whitespace-nowrap lg:text-base">
                {brand.name}
              </span>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
