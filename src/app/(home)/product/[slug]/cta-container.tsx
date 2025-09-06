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

  async function handleAddToCart() {
    const parsedQtd = quantity ? Number(quantity) : 1;

    await addToCart({
      productVariantId: variantId,
      quantity: parsedQtd,
    });
  }

  const { mutate, isPending } = useMutation({
    mutationKey: ["add-to-cart"],
    mutationFn: handleAddToCart,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-cart"] });
    },
  });

  return (
    <div className="flex w-full flex-col gap-3 lg:flex-row">
      <Button
        variant="outline"
        className="w-full rounded-full lg:w-1/2"
        size="lg"
        onClick={() => mutate()}
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
