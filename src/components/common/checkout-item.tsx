"use client";

import Image from "next/image";

import { CartItemWithVariant } from "@/_types/cart";
import { formatToCurrency } from "@/utils/number";

import { Separator } from "../ui/separator";

interface CheckoutItemProps {
  data: CartItemWithVariant;
}

export function CheckoutItem({ data }: CheckoutItemProps) {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;

  return (
    <>
      <div className="relative flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Image
            src={data.productVariant.imageUrl}
            alt={data.productVariant.product.name}
            width={isMobile ? 86 : 164}
            height={isMobile ? 86 : 164}
            className="rounded-xl lg:rounded-2xl"
          />

          <div>
            <p className="leading-6 font-semibold lg:text-lg">
              {data.productVariant.product.name}
            </p>

            <p className="text-muted-foreground hidden text-sm leading-4 font-medium lg:block lg:text-base">
              {data.productVariant.product.name} {data.productVariant.name}
            </p>

            <span className="text-muted-foreground text-sm leading-4 font-medium lg:text-base">
              {data.productVariant.color}
            </span>

            <p className="text-muted-foreground text-sm leading-4 font-medium lg:hidden">
              Qtd:{" "}
              <strong className="text-foreground font-semibold">
                {data.quantity}
              </strong>
            </p>
          </div>
        </div>

        <p className="text-muted-foreground hidden font-medium lg:block">
          Qtd:{" "}
          <strong className="text-foreground font-semibold">
            {data.quantity}
          </strong>
        </p>

        <span className="leading-5 font-semibold lg:text-lg">
          {formatToCurrency(data.productVariant.priceInCents)}
        </span>
      </div>

      <Separator />
    </>
  );
}
