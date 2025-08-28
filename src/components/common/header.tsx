import { ShoppingBagIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Menu } from "./menu";

export function Header() {
  return (
    <header className="bg-background fixed top-0 z-10 h-[72px] w-full">
      <div className="flex h-full w-full items-center justify-between px-6 py-4 lg:mx-auto lg:max-w-[1440px] lg:px-11">
        <Link href="/">
          <Image src="/bewear-logo.svg" alt="BEWEAR" width={92} height={24} />
        </Link>

        <div className="flex h-full items-center gap-4 lg:hidden">
          <Button variant="ghost" className="text-muted-foreground">
            <ShoppingBagIcon />

            <span className="sr-only">Sacola de compras</span>
          </Button>

          <Separator orientation="vertical" className="max-h-4" />

          <Menu />
        </div>
      </div>
    </header>
  );
}
