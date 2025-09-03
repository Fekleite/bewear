import { desc } from "drizzle-orm";
import Image from "next/image";
import Link from "next/link";

import { BannerGrid } from "@/components/common/banner-grid";
import { BrandList } from "@/components/common/brand-list";
import { CategoryList } from "@/components/common/category-list";
import { ProductsCarousel } from "@/components/common/products-carousel";
import { Button } from "@/components/ui/button";
import { db } from "@/db";
import { productTable } from "@/db/schema";

export default async function Home() {
  const products = await db.query.productTable.findMany({
    with: {
      variants: true,
    },
  });

  const newlyAddedProducts = await db.query.productTable.findMany({
    with: {
      variants: true,
    },
    orderBy: [desc(productTable.createdAt)],
    limit: 10,
  });

  const categories = await db.query.categoryTable.findMany();

  return (
    <>
      <section className="relative w-full px-4 lg:px-11 lg:pt-8">
        <Image
          src="/banner-01.png"
          alt="Leve uma vida com estilo"
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-full lg:hidden"
        />

        <Image
          src="/banner-01-desktop.png"
          alt="Leve uma vida com estilo"
          width={0}
          height={0}
          sizes="100vw"
          className="hidden h-auto w-full lg:block"
        />

        <Button
          variant="blurred"
          className="absolute bottom-5 left-1/2 w-28 -translate-x-1/2 rounded-full border px-4 lg:bottom-11 lg:w-auto lg:border-0 lg:px-8 lg:text-lg lg:font-semibold"
          size="lg"
        >
          Comprar
        </Button>
      </section>

      <section className="my-8 flex w-full flex-col gap-6 px-4 lg:my-16 lg:px-11">
        <h2 className="font-semibold lg:text-2xl">Marcas parceiras</h2>

        <BrandList />
      </section>

      <section className="flex w-full flex-col gap-6 px-4 lg:px-11">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold lg:text-2xl">Mais vendidos</h2>

          <Link href="/top-sale" className="hidden font-semibold lg:block">
            Ver todos
          </Link>
        </div>

        <ProductsCarousel products={products} />
      </section>

      <section className="my-8 w-full px-4 lg:hidden lg:px-11">
        <CategoryList categories={categories} />
      </section>

      <section className="relative mb-8 w-full px-4 lg:hidden lg:px-11">
        <Image
          src="/banner-02.png"
          alt="Seja autêntico"
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-full"
        />

        <Button
          variant="blurred"
          className="absolute bottom-5 left-1/2 w-28 -translate-x-1/2 rounded-full border px-4"
        >
          Comprar
        </Button>
      </section>

      <section className="flex w-full flex-col gap-6 px-4 lg:hidden lg:px-11">
        <h2 className="font-semibold">Novos produtos</h2>

        <ProductsCarousel products={newlyAddedProducts} />
      </section>

      <section className="hidden w-full px-4 lg:mt-16 lg:block lg:px-11">
        <BannerGrid />
      </section>
    </>
  );
}
