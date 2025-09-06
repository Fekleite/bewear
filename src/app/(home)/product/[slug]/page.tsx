import { eq } from "drizzle-orm";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ProductsCarousel } from "@/components/common/products-carousel";
import { db } from "@/db";
import { productTable } from "@/db/schema";
import { cn } from "@/lib/utils";
import { formatToCurrency } from "@/utils/number";

import { CTAContainer } from "./cta-container";
import { QuantitySelector } from "./quantity-selector";

interface ProductProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Product({ params, searchParams }: ProductProps) {
  const { slug } = await params;
  const sku = (await searchParams).sku;

  const product = await db.query.productTable.findFirst({
    where: eq(productTable.slug, slug),
    with: {
      variants: true,
    },
  });

  if (!product) {
    return notFound();
  }

  const currentVariant =
    product.variants.find((variant) => variant.slug === sku) ??
    product.variants[0];

  const similarProducts = await db.query.productTable.findMany({
    where: eq(productTable.categoryId, product.categoryId),
    with: {
      variants: true,
    },
  });

  return (
    <>
      <section className="flex w-full flex-col gap-8 px-4 lg:flex-row lg:justify-between lg:px-11 lg:py-8">
        <Image
          src={currentVariant.imageUrl}
          alt={currentVariant.name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-full rounded-3xl lg:max-w-[800px]"
          quality={100}
        />

        <div className="space-y-8 lg:max-w-lg lg:flex-1">
          <div className="flex flex-col gap-8 lg:flex-col-reverse">
            <div className="flex gap-4">
              {product.variants.map((variant) => (
                <Link
                  key={variant.id}
                  href={{ query: { sku: variant.slug } }}
                  className={cn([
                    "opacity-35",
                    variant.slug === sku && "opacity-100",
                  ])}
                >
                  <Image
                    src={variant.imageUrl}
                    alt={variant.name}
                    width={68}
                    height={68}
                    className="rounded-2xl"
                  />
                </Link>
              ))}
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <h1 className="text-lg font-semibold lg:text-3xl">
                  {product.name}
                </h1>
                <p className="text-muted-foreground text-sm font-medium lg:text-base">
                  {currentVariant.name}
                </p>
              </div>

              <span className="text-lg font-semibold lg:text-xl">
                {formatToCurrency(currentVariant.priceInCents)}
              </span>
            </div>
          </div>

          <QuantitySelector variantId={currentVariant.id} />

          <CTAContainer variantId={currentVariant.id} />

          <p className="text-sm leading-5 lg:text-base">
            {product.description}
          </p>
        </div>
      </section>

      <section className="mt-16 flex w-full flex-col gap-6 px-4 lg:mt-8 lg:px-11">
        <h2 className="font-semibold">Você também pode gostar</h2>

        <ProductsCarousel products={similarProducts} />
      </section>
    </>
  );
}
