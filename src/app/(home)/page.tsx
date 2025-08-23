import { desc } from "drizzle-orm";
import Image from "next/image";

import { BrandList } from "@/components/common/brand-list";
import { CategoryList } from "@/components/common/category-list";
import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
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
      <Header />

      <main className="my-[72px] w-full">
        <section className="relative w-full px-4">
          <Image
            src="/banner-01.png"
            alt="Leve uma vida com estilo"
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

        <section className="my-8 flex w-full flex-col gap-6">
          <h2 className="px-4 font-semibold">Marcas parceiras</h2>

          <BrandList />
        </section>

        <section className="flex w-full flex-col gap-6">
          <h2 className="px-4 font-semibold">Mais vendidos</h2>

          <ProductsCarousel products={products} />
        </section>

        <section className="my-8 w-full px-4">
          <CategoryList categories={categories} />
        </section>

        <section className="relative mb-8 w-full px-4">
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

        <section className="flex w-full flex-col gap-6">
          <h2 className="px-4 font-semibold">Novos produtos</h2>

          <ProductsCarousel products={newlyAddedProducts} />
        </section>
      </main>

      <Footer />
    </>
  );
}
