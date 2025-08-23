import { Category } from "@/_types/category";

interface CategoryListProps {
  categories: Category[];
}

export function CategoryList({ categories }: CategoryListProps) {
  return (
    <div className="bg-primary/10 grid grid-cols-2 gap-4 rounded-3xl px-5 py-6">
      {categories.map((category) => (
        <span
          key={category.id}
          className="bg-background rounded-full py-3 text-center text-xs font-semibold"
        >
          {category.name}
        </span>
      ))}
    </div>
  );
}
