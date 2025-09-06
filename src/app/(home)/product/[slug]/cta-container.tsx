"use client";

import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";

interface CTAContainerProps {
  variantId: string;
}

export function CTAContainer({ variantId }: CTAContainerProps) {
  const searchParams = useSearchParams();
  const quantity = searchParams.get("qtd");

  function handleAddToCart() {
    console.log({ id: variantId, quantity });
  }

  return (
    <div className="flex w-full flex-col gap-3 lg:flex-row">
      <Button
        variant="outline"
        className="w-full rounded-full lg:w-1/2"
        size="lg"
        onClick={handleAddToCart}
      >
        Adicionar à sacola
      </Button>

      <Button className="w-full rounded-full lg:w-1/2" size="lg">
        Comprar agora
      </Button>
    </div>
  );
}
