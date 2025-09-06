import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppinsSans = Poppins({
  variable: "--font-poppins-sans",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bewear",
  description: "Bewear, a sua loja de roupas online.",
};

import "./globals.css";

import { NuqsAdapter } from "nuqs/adapters/next/app";

import { Toaster } from "@/components/ui/sonner";

import ReactQueryProvider from "./providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${poppinsSans.variable} relative antialiased`}>
        <NuqsAdapter>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </NuqsAdapter>

        <Toaster position="bottom-center" />
      </body>
    </html>
  );
}
