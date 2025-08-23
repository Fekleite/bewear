import { categoryTable } from "@/db/schema";

export type Category = typeof categoryTable.$inferSelect;
