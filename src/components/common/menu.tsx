"use client";

import {
  HomeIcon,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  ShoppingBagIcon,
  TruckIcon,
  XIcon,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Category } from "@/_types/category";
import { authClient, signOut } from "@/lib/auth-client";

import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { NavigationMenu } from "./navigation-menu";
import { UserProfile } from "./user-profile";

interface MenuProps {
  categories: Category[];
}

export function Menu({ categories }: MenuProps) {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  function handleRedirectToLogin() {
    router.push("/auth");
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="text-muted-foreground">
          <MenuIcon />

          <span className="sr-only">Menu</span>
        </Button>
      </SheetTrigger>

      <SheetContent className="w-[350px] rounded-tl-3xl rounded-bl-3xl">
        <div className="flex h-full flex-col gap-6 px-5 py-6">
          <div className="flex items-center justify-between">
            <SheetTitle className="text-lg font-semibold">Menu</SheetTitle>

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

          {session?.user ? (
            <UserProfile
              name={session.user.name}
              email={session.user.email}
              imageUrl={session.user.image}
            />
          ) : (
            <div className="flex w-full items-center justify-between">
              <span className="font-semibold">Olá. Faça seu login!</span>

              <Button
                className="w-28 rounded-full"
                onClick={handleRedirectToLogin}
              >
                <span className="text-sm font-semibold">Login</span>

                <LogInIcon />
              </Button>
            </div>
          )}

          <Separator className="mx-auto max-w-64" />

          <div>
            <Link className="flex items-center gap-3 px-4 py-3" href="/">
              <HomeIcon size={16} />
              <span className="text-foreground text-sm font-medium">
                Inicio
              </span>
            </Link>
            <Link className="flex items-center gap-3 px-4 py-3" href="/orders">
              <TruckIcon size={16} />
              <span className="text-foreground text-sm font-medium">
                Meus Pedidos
              </span>
            </Link>
            <Link
              className="flex items-center gap-3 px-4 py-3"
              href="/checkout"
            >
              <ShoppingBagIcon size={16} />
              <span className="text-foreground text-sm font-medium">
                Sacola
              </span>
            </Link>
          </div>

          <Separator className="mx-auto max-w-64" />

          <NavigationMenu categories={categories} />

          {session?.user && (
            <>
              <Separator className="mx-auto max-w-64" />

              <Button
                variant="ghost"
                className="text-muted-foreground justify-start"
                onClick={signOut}
              >
                <LogOutIcon />

                <span className="text-sm font-medium">Sair da conta</span>
              </Button>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
