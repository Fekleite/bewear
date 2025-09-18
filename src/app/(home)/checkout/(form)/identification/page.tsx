import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { getCart } from "@/actions/get-cart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { db } from "@/db";
import { shippingAddressTable } from "@/db/schema";
import { auth } from "@/lib/auth";

import { ShippingForm } from "./shipping-form";

export default async function Identification() {
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

  const shippingAddresses = await db.query.shippingAddressTable.findMany({
    where: eq(shippingAddressTable.userId, session.user.id),
  });

  return (
    <>
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="font-semibold lg:text-2xl">
            Identificação
          </CardTitle>
        </CardHeader>

        <CardContent>
          <ShippingForm
            shippingAddresses={shippingAddresses}
            defaultShippingAddressId={cart.shippingAddressId}
          />
        </CardContent>
      </Card>
    </>
  );
}
