import { CheckoutProgress } from "@/components/common/checkout-progress";
import { OrderResume } from "@/components/common/order-resume";

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="hidden w-full px-4 lg:block lg:px-11 lg:py-8">
        <CheckoutProgress />
      </section>

      <section className="flex w-full flex-col gap-8 px-4 lg:flex-row lg:justify-between lg:px-11">
        <div className="lg:flex-1">{children}</div>

        <OrderResume />
      </section>
    </>
  );
}
