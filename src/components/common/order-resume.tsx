"use client";

import { useCart } from "@/hooks/queries/use-cart";
import { formatToCurrency } from "@/utils/number";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Separator } from "../ui/separator";
import { CheckoutItem } from "./checkout-item";

export function OrderResume() {
  const { data } = useCart();

  return (
    <Card className="w-full lg:max-w-xl">
      <CardHeader>
        <CardTitle className="font-semibold lg:text-2xl">Seu pedido</CardTitle>
      </CardHeader>

      <CardContent className="space-y-2 lg:space-y-3">
        {!!data?.totalPriceInCents && (
          <div className="flex items-center justify-between">
            <p className="text-sm leading-5 font-medium lg:text-base lg:leading-6">
              Subtotal
            </p>

            <span className="text-muted-foreground text-sm font-medium lg:text-base">
              {formatToCurrency(data.totalPriceInCents)}
            </span>
          </div>
        )}

        <div className="flex items-center justify-between">
          <p className="text-sm leading-5 font-medium lg:text-base lg:leading-6">
            Transporte e Manuseio
          </p>

          <span className="text-muted-foreground text-sm font-medium lg:text-base">
            Grátis
          </span>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm leading-5 font-medium lg:text-base lg:leading-6">
            Taxa Estimada
          </p>

          <span className="text-muted-foreground text-sm font-medium lg:text-base">
            -
          </span>
        </div>

        {!!data?.totalPriceInCents && (
          <div className="flex items-center justify-between">
            <p className="text-sm leading-5 font-medium lg:text-base lg:leading-6">
              Total
            </p>

            <span className="text-sm font-semibold lg:text-base">
              {formatToCurrency(data.totalPriceInCents)}
            </span>
          </div>
        )}
      </CardContent>

      <div className="px-6">
        <Separator />
      </div>

      <CardFooter className="flex flex-col gap-4 lg:gap-6">
        {data?.items.map((cartItem, index) => {
          const isTheLast = index === data.items.length - 1;

          return (
            <CheckoutItem
              key={cartItem.id}
              data={cartItem}
              size="sm"
              hideSeparator={isTheLast}
            />
          );
        })}
      </CardFooter>
    </Card>
  );
}
