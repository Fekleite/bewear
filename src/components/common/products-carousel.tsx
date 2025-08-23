import { Product } from "@/_types/products";

import { ProductItem } from "./product-item";

interface ProductsCarouselProps {
  products: Product[];
}

export function ProductsCarousel({ products }: ProductsCarouselProps) {
  return (
    <div className="flex w-full snap-x snap-mandatory scroll-pl-4 gap-4 overflow-x-auto scroll-smooth pl-4 [&::-webkit-scrollbar]:hidden">
      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </div>
  );
}
