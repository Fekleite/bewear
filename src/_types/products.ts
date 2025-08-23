import { productTable, productVariantTable } from "@/db/schema";

type ProductType = typeof productTable.$inferSelect;
type VariantType = typeof productVariantTable.$inferSelect;

export interface Product extends ProductType {
  variants: VariantType[];
}
