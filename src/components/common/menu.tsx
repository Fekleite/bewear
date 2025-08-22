"use client";

import { LogInIcon, LogOutIcon, MenuIcon, XIcon } from "lucide-react";
import { useRouter } from "next/navigation";

import { authClient } from "@/lib/auth-client";

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
import { UserProfile } from "./user-profile";

export function Menu() {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  function handleRedirectToLogin() {
    router.push("/auth");
  }

  async function handleLogout() {
    await authClient.signOut();
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="text-muted-foreground">
          <MenuIcon />

          <span className="sr-only">Menu</span>
        </Button>
      </SheetTrigger>

      <SheetContent className="w-[350px]">
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

          {session?.user && (
            <>
              <Separator className="mx-auto max-w-64" />

              <Button
                variant="ghost"
                className="text-muted-foreground justify-start"
                onClick={handleLogout}
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
