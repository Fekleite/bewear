import { productTable, productVariantTable } from "@/db/schema";

export type ProductType = typeof productTable.$inferSelect;
export type VariantType = typeof productVariantTable.$inferSelect;

export interface Product extends ProductType {
  variants: VariantType[];
}
