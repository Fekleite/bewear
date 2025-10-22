import { VariantProps } from "class-variance-authority";

import { getOrders } from "@/actions/get-orders";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge, badgeVariants } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import { OrderItem } from "./order-item";
import { PriceSummary } from "./price-summary";

interface Badge extends VariantProps<typeof badgeVariants> {
  label: string;
}

enum orderStatus {
  paid = "paid",
  pending = "pending",
  canceled = "canceled",
}

const mapStatusToBadge: Record<orderStatus, Badge> = {
  paid: {
    variant: "default",
    label: "Pago",
  },
  pending: { variant: "outline", label: "Pagamento pendente" },
  canceled: { variant: "destructive", label: "Cancelado" },
};

export default async function Orders() {
  const orders = await getOrders();

  return (
    <section className="w-full px-4 lg:px-11 lg:pt-8">
      <h1 className="mb-6 text-lg font-semibold lg:mb-8 lg:text-2xl">
        Meus pedidos
      </h1>

      <div className="space-y-4">
        {orders.map((order) => {
          const badge = mapStatusToBadge[order.status as orderStatus];

          return (
            <Accordion
              key={order.id}
              type="single"
              collapsible
              className="border-muted rounded-md border px-5"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="py-5 lg:py-8">
                  <div className="flex w-full items-center justify-between gap-4">
                    <span>
                      Pedido feito em{" "}
                      {new Date(order.createdAt).toLocaleDateString()}
                    </span>

                    <Badge variant={badge.variant}>{badge.label}</Badge>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="space-y-6 lg:space-y-8">
                  <Separator />

                  <div className="space-y-6">
                    {order.items.map((item) => {
                      return <OrderItem key={item.id} data={item} />;
                    })}
                  </div>

                  <Separator />

                  <PriceSummary totalPriceInCents={order.totalPriceInCents} />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          );
        })}
      </div>
    </section>
  );
}
