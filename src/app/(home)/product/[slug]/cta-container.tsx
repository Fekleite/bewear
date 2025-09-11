"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Loader2Icon } from "lucide-react";
import { useSearchParams } from "next/navigation";

import { addToCart } from "@/actions/add-to-cart";
import { Button } from "@/components/ui/button";

interface CTAContainerProps {
  variantId: string;
}

export function CTAContainer({ variantId }: CTAContainerProps) {
  const searchParams = useSearchParams();
  const quantity = searchParams.get("qtd");

  const queryClient = useQueryClient();

  const parsedQtd = quantity ? Number(quantity) : 1;

  const { mutate, isPending } = useMutation({
    mutationKey: ["add-to-cart", variantId, parsedQtd],
    mutationFn: addToCart,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-cart"] });
    },
  });

  function handleAddToCart() {
    mutate({ productVariantId: variantId, quantity: parsedQtd });
  }

  return (
    <div className="flex w-full flex-col gap-3 lg:flex-row">
      <Button
        variant="outline"
        className="w-full rounded-full lg:w-1/2"
        size="lg"
        onClick={handleAddToCart}
        disabled={isPending}
      >
        {isPending && <Loader2Icon className="animate-spin" />}
        Adicionar à sacola
      </Button>

      <Button className="w-full rounded-full lg:w-1/2" size="lg">
        Comprar agora
      </Button>
    </div>
  );
}
