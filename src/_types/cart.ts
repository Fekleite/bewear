import { cartItemTable } from "@/db/schema";

import { ProductType, VariantType } from "./products";

type CartItemType = typeof cartItemTable.$inferSelect;

interface VariantWithProduct extends VariantType {
  product: ProductType;
}

export interface CartItemWithVariant extends CartItemType {
  productVariant: VariantWithProduct;
}
