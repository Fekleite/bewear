"use client";

import { UserIcon } from "lucide-react";
import Link from "next/link";

import { authClient, signOut } from "@/lib/auth-client";

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

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-foreground flex items-center gap-2 font-semibold">
        <UserIcon size={24} />

        <span className="font-semibold">{session.user.name}</span>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem disabled>
          <Link href="/profile">Meu Perfil</Link>
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          <Link href="/orders">Meus Pedidos</Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={signOut}>Sair</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
