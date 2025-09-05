"use client";

import { MinusIcon, PlusIcon } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

interface ProductActionsProps {
  variantId: string;
}

export function ProductActions({ variantId }: ProductActionsProps) {
  const [quantity, setQuantity] = useState(1);

  function handleDecrement() {
    setQuantity((prevState) => prevState - 1);
  }

  function handleIncrement() {
    setQuantity((prevState) => prevState + 1);
  }

  function handleAddToCart() {
    console.log({ id: variantId, quantity });
  }

  useEffect(() => {
    setQuantity(1);
  }, [variantId]);

  return (
    <>
      <div className="space-y-5">
        <p className="font-medium">Quantidade</p>

        <div className="border-muted flex h-14 w-fit rounded-2xl border">
          <Button
            variant="ghost"
            className="h-full w-14"
            onClick={handleDecrement}
            disabled={quantity === 1}
          >
            <MinusIcon />

            <span className="sr-only">Decrementar</span>
          </Button>

          <div className="flex h-full w-8 items-center justify-center">
            {quantity}
          </div>

          <Button
            variant="ghost"
            className="h-full w-14"
            onClick={handleIncrement}
            disabled={quantity === 99}
          >
            <PlusIcon />

            <span className="sr-only">Incrementar</span>
          </Button>
        </div>
      </div>

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
    </>
  );
}
