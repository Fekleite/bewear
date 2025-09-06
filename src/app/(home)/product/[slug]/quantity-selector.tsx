"use client";

import { MinusIcon, PlusIcon } from "lucide-react";
import { parseAsInteger, useQueryState } from "nuqs";
import { useCallback, useEffect } from "react";

import { Button } from "@/components/ui/button";

interface QuantitySelectorProps {
  variantId: string;
}

export function QuantitySelector({ variantId }: QuantitySelectorProps) {
  const [quantity, setQuantity] = useQueryState(
    "qtd",
    parseAsInteger.withDefault(1).withOptions({
      clearOnDefault: false,
    }),
  );

  function handleDecrement() {
    setQuantity((prevState) => prevState - 1);
  }

  function handleIncrement() {
    setQuantity((prevState) => prevState + 1);
  }

  const resetQuantity = useCallback(() => {
    setQuantity(1);
  }, [setQuantity]);

  useEffect(() => {
    resetQuantity();
  }, [variantId, resetQuantity]);

  return (
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
  );
}
