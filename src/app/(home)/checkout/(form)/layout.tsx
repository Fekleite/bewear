import { OrderResume } from "@/components/common/order-resume";

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex w-full flex-col gap-8 px-4 lg:flex-row lg:justify-between lg:px-11 lg:py-8">
      <div>{children}</div>

      <OrderResume />
    </section>
  );
}
