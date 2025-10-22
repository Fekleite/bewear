"use client";

import { LogOutIcon } from "lucide-react";
import Link from "next/link";

import { authClient, signOut } from "@/lib/auth-client";
import { getInitials } from "@/utils/string";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export function UserDropdown() {
  const { data: session } = authClient.useSession();

  if (!session?.user) {
    return (
      <Link href="/auth" className="font-semibold">
        Olá. Faça seu login!
      </Link>
    );
  }

  const initials = getInitials(session.user.name);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="">
        <Button variant="ghost">
          <Avatar className="h-8 w-8 overflow-hidden rounded-full">
            <AvatarImage src={session.user.image ?? undefined} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>

          <span className="text-foreground text-base font-semibold">
            {session.user.name}
          </span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem disabled>
          <Link href="/profile">Meu Perfil</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/orders">Meus Pedidos</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Button variant="ghost" onClick={signOut}>
            <LogOutIcon />

            <span>Sair da conta</span>
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
