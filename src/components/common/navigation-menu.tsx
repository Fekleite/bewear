import Link from "next/link";

import { Category } from "@/_types/category";

interface NavigationMenuProps {
  categories: Category[];
}

export function NavigationMenu({ categories }: NavigationMenuProps) {
  return (
    <div className="flex flex-col lg:w-full lg:flex-row lg:items-center lg:justify-between lg:gap-4 lg:py-2">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/categories/${category.slug}`}
          className="px-4 py-3 lg:p-0"
        >
          <span className="lg:text-muted-foreground hover:text-foreground text-foreground text-sm font-medium lg:text-base">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
}
