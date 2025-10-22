import { orderItemTable, orderTable } from "@/db/schema";

import { Variant } from "./products";

export type Order = typeof orderTable.$inferSelect;

export type OrderItem = typeof orderItemTable.$inferSelect;

export interface OrderItemWithVariant extends OrderItem {
  productVariant: Variant;
}

export interface OrderWithItems extends Order {
  items: OrderItemWithVariant[];
}
