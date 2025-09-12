"use client";

import { Loader2Icon } from "lucide-react";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { useAddToCart } from "@/hooks/mutations/use-add-to-cart";

interface CTAContainerProps {
  variantId: string;
}

export function CTAContainer({ variantId }: CTAContainerProps) {
  const searchParams = useSearchParams();
  const quantity = searchParams.get("qtd");

  const parsedQtd = quantity ? Number(quantity) : 1;

  const { mutate, isPending } = useAddToCart({
    variantId,
    quantity: parsedQtd,
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
