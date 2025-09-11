"use server";

import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import { z } from "zod";

import { db } from "@/db";
import { cartItemTable } from "@/db/schema";
import { auth } from "@/lib/auth";

const updateCartItemQuantitySchema = z.object({
  cartItemId: z.uuid(),
  newQuantity: z.number(),
});

type UpdateCartItemQuantityData = z.infer<typeof updateCartItemQuantitySchema>;

export async function updateCartItemQuantity(data: UpdateCartItemQuantityData) {
  updateCartItemQuantitySchema.parse(data);

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    throw new Error("Unauthorized");
  }

  const cartItem = await db.query.cartItemTable.findFirst({
    where: (cartItem, { eq }) => eq(cartItem.id, data.cartItemId),
    with: {
      cart: true,
    },
  });

  if (!cartItem) {
    throw new Error("Cart item not found");
  }
  const cartDoesNotBelongToUser = cartItem.cart.userId !== session.user.id;

  if (cartDoesNotBelongToUser) {
    throw new Error("Unauthorized");
  }

  await db
    .update(cartItemTable)
    .set({ quantity: data.newQuantity })
    .where(eq(cartItemTable.id, cartItem.id));
}
