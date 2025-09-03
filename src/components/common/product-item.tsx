import Image from "next/image";
import Link from "next/link";

import { Product } from "@/_types/products";
import { formatToCurrency } from "@/utils/number";

interface ProductItemProps {
  product: Product;
}

export function ProductItem({ product }: ProductItemProps) {
  const currentVariant = product.variants[0];

  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;

  return (
    <Link
      href={`/product/${product.slug}`}
      className="flex flex-col gap-6"
      key={product.id}
    >
      <Image
        src={currentVariant.imageUrl}
        alt={currentVariant.name}
        width={isMobile ? 200 : 400}
        height={isMobile ? 200 : 400}
        className="rounded-3xl"
      />

      <div className="space-y-2">
        <p className="truncate text-sm leading-none font-medium lg:text-base lg:font-semibold">
          {product.name}
        </p>
        <p className="text-muted-foreground truncate text-xs leading-none font-medium lg:text-base">
          {product.description}
        </p>
      </div>

      <span className="truncate text-sm leading-none font-semibold lg:text-base">
        {formatToCurrency(currentVariant.priceInCents)}
      </span>
    </Link>
  );
}
