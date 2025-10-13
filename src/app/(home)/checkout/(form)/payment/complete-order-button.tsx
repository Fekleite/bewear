"use client";

import { Loader2Icon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useCompleteOrder } from "@/hooks/mutations/use-complete-order";

export function CompleteOrderButton() {
  const { mutate, isPending } = useCompleteOrder();

  function handleCompleteOrder() {
    mutate();
  }

  return (
    <Button
      size="lg"
      className="w-full rounded-full"
      onClick={handleCompleteOrder}
      disabled={isPending}
    >
      {isPending && <Loader2Icon className="animate-spin" />}
      Finalizar a compra
    </Button>
  );
}
