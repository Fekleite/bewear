import Link from "next/link";

import { Category } from "@/_types/category";

interface CategoryListProps {
  categories: Category[];
}

export function CategoryList({ categories }: CategoryListProps) {
  return (
    <div className="bg-primary/10 grid grid-cols-2 gap-4 rounded-3xl px-5 py-6">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/categories/${category.slug}`}
          className="bg-background rounded-full py-3 text-center text-xs font-semibold"
        >
          <span>{category.name}</span>
        </Link>
      ))}
    </div>
  );
}
