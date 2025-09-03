import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";

import { ProductItem } from "@/components/common/product-item";
import { db } from "@/db";
import { categoryTable, productTable } from "@/db/schema";

interface CategoryProps {
  params: Promise<{ slug: string }>;
}

export default async function Category({ params }: CategoryProps) {
  const { slug } = await params;

  const category = await db.query.categoryTable.findFirst({
    where: eq(categoryTable.slug, slug),
  });

  if (!category) {
    return notFound();
  }

  const productsByCategory = await db.query.productTable.findMany({
    where: eq(productTable.categoryId, category.id),
    with: {
      variants: true,
    },
  });

  return (
    <>
      <section className="w-full px-5 py-6 lg:px-11 lg:py-10">
        <h1 className="text-foreground text-lg font-semibold lg:text-2xl">
          {category.name}
        </h1>
      </section>

      <section className="grid w-full grid-cols-2 gap-4 px-5 lg:grid-cols-4 lg:px-11">
        {productsByCategory.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </section>
    </>
  );
}
