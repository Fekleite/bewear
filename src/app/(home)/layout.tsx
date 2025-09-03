import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />

      <main className="my-[72px] w-full lg:mx-auto lg:mt-[120px] lg:max-w-[1440px]">
        {children}
      </main>

      <Footer />
    </>
  );
}
