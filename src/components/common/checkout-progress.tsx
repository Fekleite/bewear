"use client";

import { CheckIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const progressSteps = [
  { id: 1, label: "Sacola", href: "/checkout" },
  { id: 2, label: "Identificação", href: "/checkout/identification" },
  { id: 3, label: "Pagamento", href: "/checkout/payment" },
];

type Step = {
  id: number;
  label: string;
  href: string;
  status: "completed" | "active" | "disabled";
};

export function CheckoutProgress() {
  const pathname = usePathname();

  const steps: Step[] = progressSteps.map((step, idx) => {
    if (pathname === step.href) {
      return { ...step, status: "active" };
    }

    const currentIdx = progressSteps.findIndex((s) => s.href === pathname);

    if (currentIdx > idx) {
      return { ...step, status: "completed" };
    }

    if (currentIdx < idx) {
      return { ...step, status: "disabled" };
    }

    return { ...step, status: "disabled" };
  });

  return (
    <nav className="flex w-full items-center">
      {steps.map((step, idx) => (
        <div key={step.label} className="flex items-center">
          <div
            className={cn([
              "flex size-9 items-center justify-center rounded-full border-2 border-gray-100",
              step.status === "completed" && "border-green-600 bg-green-600",
              step.status === "active" && "border-green-600",
            ])}
          >
            {step.status === "completed" ? (
              <CheckIcon size={20} className="text-white" />
            ) : (
              <span
                className={cn([
                  "font-semibold",
                  step.status === "active" && "text-green-600",
                ])}
              >
                {step.id}
              </span>
            )}
          </div>

          <Link
            href={step.status !== "disabled" ? step.href : "#"}
            className={cn([
              "text-muted-foreground ml-2 font-medium",
              step.status === "disabled" && "cursor-not-allowed",
            ])}
          >
            {step.label}
          </Link>

          {idx < steps.length - 1 && (
            <div
              className={cn([
                "bg-muted-foreground mx-4 h-0.5 w-36",
                step.status === "completed" && "bg-green-600",
              ])}
            />
          )}
        </div>
      ))}
    </nav>
  );
}
