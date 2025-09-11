"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MinusIcon, PlusIcon, TrashIcon } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";

import { CartItemWithVariant } from "@/_types/cart";
import { removeFromCart } from "@/actions/remove-from-cart";
import { updateCartItemQuantity } from "@/actions/update-cart-item-quantity";
import { formatToCurrency } from "@/utils/number";

import { Button } from "../ui/button";

interface CartItemProps {
  data: CartItemWithVariant;
}

export function CartItem({ data }: CartItemProps) {
  const queryClient = useQueryClient();

  const { mutate: removeFromCartMutate } = useMutation({
    mutationKey: ["remove-from-cart", data.id],
    mutationFn: removeFromCart,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-cart"] });
    },
  });

  const { mutate: updateCartItemQuantityMutate, isPending } = useMutation({
    mutationKey: ["update-cart-item-quantity", data.id],
    mutationFn: updateCartItemQuantity,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-cart"] });
    },
  });

  function handleRemoveFromCart() {
    removeFromCartMutate(
      {
        cartItemId: data.id,
      },
      {
        onSuccess: () => {
          toast.success("Produto removido do carrinho.");
        },
        onError: () => {
          toast.error("Erro ao remover produto do carrinho.");
        },
      },
    );
  }

  function handleIncreaseQuantity() {
    updateCartItemQuantityMutate(
      {
        cartItemId: data.id,
        newQuantity: data.quantity + 1,
      },
      {
        onSuccess: () => {
          toast.success("Quantidade do produto aumentada.");
        },
      },
    );
  }

  function handleDecreaseQuantity() {
    updateCartItemQuantityMutate(
      {
        cartItemId: data.id,
        newQuantity: data.quantity - 1,
      },
      {
        onSuccess: () => {
          toast.success("Quantidade do produto diminuída.");
        },
      },
    );
  }

  return (
    <div className="relative flex items-center justify-between gap-4">
      <Image
        src={data.productVariant.imageUrl}
        alt={data.productVariant.product.name}
        width={86}
        height={86}
        className="rounded-2xl"
      />

      <div className="flex-1 space-y-3">
        <div>
          <p className="text-sm leading-3.5 font-semibold">
            {data.productVariant.product.name}
          </p>

          <span className="text-muted-foreground text-xs leading-3 font-medium">
            {data.productVariant.name}
          </span>
        </div>

        <div className="flex items-center justify-between gap-2">
          <div className="border-muted flex h-10 w-fit rounded-lg border">
            <Button
              variant="ghost"
              className="h-full w-10"
              disabled={data.quantity === 1 || isPending}
              onClick={handleDecreaseQuantity}
            >
              <MinusIcon />

              <span className="sr-only">Decrementar</span>
            </Button>

            <div className="flex h-full w-8 items-center justify-center">
              {data.quantity}
            </div>

            <Button
              variant="ghost"
              className="h-full w-10"
              disabled={isPending}
              onClick={handleIncreaseQuantity}
            >
              <PlusIcon />

              <span className="sr-only">Incrementar</span>
            </Button>
          </div>

          <span className="text-sm leading-3.5 font-semibold">
            {formatToCurrency(data.productVariant.priceInCents)}
          </span>
        </div>
      </div>

      <Button
        variant="ghost"
        className="absolute top-0 right-0 h-10 w-10"
        onClick={handleRemoveFromCart}
      >
        <TrashIcon />

        <span className="sr-only">Remover do carrinho</span>
      </Button>
    </div>
  );
}
