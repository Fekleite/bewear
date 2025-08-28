import { Product } from "@/_types/products";

import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { ProductItem } from "./product-item";

interface ProductsCarouselProps {
  products: Product[];
}

export function ProductsCarousel({ products }: ProductsCarouselProps) {
  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-3">
        {products.map((product) => (
          <CarouselItem
            key={product.id}
            className="basis-1/2 pl-3 lg:basis-1/4"
          >
            <ProductItem product={product} key={product.id} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
