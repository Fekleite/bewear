import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

interface OrderPlacedModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function OrderPlacedModal({
  isOpen,
  onOpenChange,
}: OrderPlacedModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="flex flex-col items-center gap-8 py-8">
        <Image
          src="/illustration.svg"
          alt="Order placed illustration"
          width={250}
          height={234}
          className="mx-auto"
        />

        <div className="space-y-6 text-center">
          <DialogTitle className="text-2xl font-semibold">
            Pedido Efetuado!
          </DialogTitle>

          <DialogDescription className="text-muted-foreground text-sm font-medium">
            Seu pedido foi efetuado com sucesso. Você pode acompanhar o status
            na seção de “Meus Pedidos”.
          </DialogDescription>
        </div>

        <div className="space-y-3">
          <Button size="lg" className="w-full rounded-full">
            Ver meu pedido
          </Button>

          <Button
            variant="outline"
            className="text-foreground w-full rounded-full"
            asChild
          >
            <Link href="/">Página inicial</Link>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
