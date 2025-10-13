"use client";

import { Loader2Icon } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { useCompleteOrder } from "@/hooks/mutations/use-complete-order";

import { OrderPlacedModal } from "./order-placed-modal";

export function CompleteOrderButton() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const { mutate, isPending } = useCompleteOrder();

  function handleCompleteOrder() {
    mutate();
  }

  return (
    <>
      <Button
        size="lg"
        className="w-full rounded-full"
        onClick={handleCompleteOrder}
        disabled={isPending}
      >
        {isPending && <Loader2Icon className="animate-spin" />}
        Finalizar a compra
      </Button>

      <OrderPlacedModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  );
}
