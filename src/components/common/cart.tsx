"use client";

import { useQuery } from "@tanstack/react-query";
import { ShoppingBagIcon, XIcon } from "lucide-react";
import { useState } from "react";

import { getCart } from "@/actions/get-cart";
import { formatToCurrency } from "@/utils/number";

import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Skeleton } from "../ui/skeleton";
import { CartItem } from "./cart-item";

export function Cart() {
  const [isOpen, setIsOpen] = useState(false);

  const { data, isPending } = useQuery({
    queryKey: ["get-cart"],
    queryFn: getCart,
  });

  function handleCloseCart() {
    setIsOpen(false);
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="text-muted-foreground">
          <ShoppingBagIcon />

          <span className="sr-only">Sacola de compras</span>
        </Button>
      </SheetTrigger>

      <SheetContent className="w-[350px] rounded-tl-3xl rounded-bl-3xl lg:w-[440px]">
        <div className="flex h-full flex-col gap-6 px-5 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBagIcon size={20} className="text-muted-foreground" />

              <SheetTitle className="text-lg font-semibold">Sacola</SheetTitle>
            </div>

            <SheetDescription className="sr-only">
              Navegue pelas opções abaixo para acessar diferentes seções do
              site.
            </SheetDescription>

            <SheetClose asChild>
              <Button
                variant="secondary"
                className="text-foreground rounded-full"
              >
                <XIcon />

                <span className="sr-only">Fechar menu</span>
              </Button>
            </SheetClose>
          </div>

          <div className="flex-1">
            <ScrollArea className="h-full w-full">
              <div className="flex flex-col gap-8">
                {isPending &&
                  Array.from({ length: 3 }).map((_, index) => (
                    <Skeleton
                      key={`cart-item-skeleton-${index}`}
                      className="h-24 w-full rounded-2xl"
                    />
                  ))}

                {data &&
                  data?.items.map((item) => (
                    <CartItem key={item.id} data={item} />
                  ))}
              </div>
            </ScrollArea>
          </div>

          <div className="space-y-6">
            {!!data?.totalPriceInCents && (
              <>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Subtotal</span>

                  <span className="text-sm font-medium">
                    {formatToCurrency(data.totalPriceInCents)}
                  </span>
                </div>

                <Separator />
              </>
            )}

            <div className="flex flex-col gap-2">
              <Button size="lg" className="w-full rounded-full">
                Finalizar a compra
              </Button>

              <Button
                size="lg"
                variant="ghost"
                className="w-full rounded-full"
                onClick={handleCloseCart}
              >
                Continuar comprando
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
