"use client";

import { loadStripe } from "@stripe/stripe-js";
import { Loader2Icon } from "lucide-react";
import { useState } from "react";

import { createCheckoutSession } from "@/actions/create-checkout-session";
import { Button } from "@/components/ui/button";
import { useCompleteOrder } from "@/hooks/mutations/use-complete-order";

import { OrderPlacedModal } from "./order-placed-modal";

export function CompleteOrderButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { mutateAsync, isPending } = useCompleteOrder();

  async function handleCompleteOrder() {
    if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
      throw new Error("Stripe publishable key is not set");
    }

    const { orderId } = await mutateAsync();

    const checkoutSession = await createCheckoutSession({
      orderId,
    });

    const stripe = await loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    );

    if (!stripe) {
      throw new Error("Failed to load Stripe");
    }

    await stripe.redirectToCheckout({
      sessionId: checkoutSession.id,
    });
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
