import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { getCart } from "@/actions/get-cart";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { auth } from "@/lib/auth";
import { formatToFullAddress } from "@/utils/address";

export default async function Payment() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user.id) {
    redirect("/");
  }

  const cart = await getCart();

  if (!cart || cart?.items.length === 0) {
    redirect("/");
  }

  if (!cart?.shippingAddress) {
    redirect("/checkout/identification");
  }

  return (
    <>
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="font-semibold lg:text-2xl">Pagamento</CardTitle>
        </CardHeader>

        <CardContent className="space-y-8">
          {cart.shippingAddress && (
            <div className="border-muted flex w-full items-center gap-6 rounded-lg border p-6">
              <span className="text-sm font-medium">
                {formatToFullAddress(cart.shippingAddress)}
              </span>
            </div>
          )}

          <Button size="lg" className="w-full rounded-full">
            Finalizar a compra
          </Button>
        </CardContent>
      </Card>
    </>
  );
}
