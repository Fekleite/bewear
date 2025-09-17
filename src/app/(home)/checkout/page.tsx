import Link from "next/link";

import { getCart } from "@/actions/get-cart";
import { CheckoutItem } from "@/components/common/checkout-item";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { formatToCurrency } from "@/utils/number";

export default async function Checkout() {
  const cart = await getCart();

  return (
    <section className="flex w-full flex-col items-start justify-between gap-6 px-5 lg:flex-row lg:gap-8 lg:px-11 lg:pt-8">
      <Card className="w-full lg:max-w-[812px]">
        <CardHeader>
          <CardTitle className="text-lg lg:text-2xl">Sacola</CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col gap-5 lg:gap-6">
          {cart.items.map((cartItem) => (
            <CheckoutItem key={cartItem.id} data={cartItem} />
          ))}

          <Button className="text-foreground" variant="link" asChild>
            <Link href="/">Continuar comprando</Link>
          </Button>
        </CardContent>
      </Card>

      <Card className="w-full max-w-[504px]">
        <CardHeader>
          <CardTitle className="text-lg lg:text-2xl">Resumo</CardTitle>
        </CardHeader>

        <CardContent className="space-y-2 lg:space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-sm leading-6 font-medium lg:text-base">
              Subtotal
            </p>

            <span className="text-muted-foreground text-sm font-medium lg:text-base">
              {formatToCurrency(cart.totalPriceInCents)}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm leading-6 font-medium lg:text-base">
              Transporte e Manuseio
            </p>

            <span className="text-muted-foreground text-sm font-medium lg:text-base">
              Grátis
            </span>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm leading-6 font-medium lg:text-base">
              Taxa Estimada
            </p>

            <span className="text-muted-foreground text-sm font-medium lg:text-base">
              -
            </span>
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <p className="text-sm leading-6 font-medium lg:text-base">Total</p>

            <span className="font-semibold">
              {formatToCurrency(cart.totalPriceInCents)}
            </span>
          </div>

          <Separator />

          <Button asChild className="w-full rounded-full" size="lg">
            <Link href="/checkout/identification">Continuar</Link>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
