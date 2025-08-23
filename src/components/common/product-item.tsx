import Image from "next/image";
import Link from "next/link";

import { Product } from "@/_types/products";
import { formatToCurrency } from "@/utils/number";

interface ProductItemProps {
  product: Product;
}

export function ProductItem({ product }: ProductItemProps) {
  const currentVariant = product.variants[0];

  return (
    <Link
      href={`/product/${product.slug}`}
      className="flex snap-start flex-col gap-6"
      key={product.id}
    >
      <Image
        src={currentVariant.imageUrl}
        alt={currentVariant.name}
        width={200}
        height={200}
        className="rounded-3xl"
      />

      <div className="max-w-[200px] space-y-2">
        <p className="truncate text-sm leading-none font-medium">
          {product.name}
        </p>
        <p className="text-muted-foreground truncate text-xs leading-none font-medium">
          {product.description}
        </p>
      </div>

      <span className="truncate text-sm leading-none font-semibold">
        {formatToCurrency(currentVariant.priceInCents)}
      </span>
    </Link>
  );
}
