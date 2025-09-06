import { MinusIcon, PlusIcon } from "lucide-react";
import Image from "next/image";

import { CartItemWithVariant } from "@/_types/cart";
import { formatToCurrency } from "@/utils/number";

import { Button } from "../ui/button";

interface CartItemProps {
  data: CartItemWithVariant;
}

export function CartItem({ data }: CartItemProps) {
  return (
    <div className="flex items-center justify-between gap-4">
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
            <Button variant="ghost" className="h-full w-10">
              <MinusIcon />

              <span className="sr-only">Decrementar</span>
            </Button>

            <div className="flex h-full w-8 items-center justify-center">
              {data.quantity}
            </div>

            <Button variant="ghost" className="h-full w-10">
              <PlusIcon />

              <span className="sr-only">Incrementar</span>
            </Button>
          </div>

          <span className="text-sm leading-3.5 font-semibold">
            {formatToCurrency(data.productVariant.priceInCents)}
          </span>
        </div>
      </div>
    </div>
  );
}
