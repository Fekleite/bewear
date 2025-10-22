"use client";

import { OrderPlacedModal } from "./order-placed-modal";

export default function CheckoutSuccess() {
  return (
    <section className="h-screen">
      <OrderPlacedModal isOpen={true} onOpenChange={() => {}} />
    </section>
  );
}
