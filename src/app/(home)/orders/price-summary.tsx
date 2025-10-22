import { formatToCurrency } from "@/utils/number";

interface PriceSummaryProps {
  totalPriceInCents?: number;
}

export function PriceSummary({ totalPriceInCents }: PriceSummaryProps) {
  return (
    <div className="space-y-2 lg:space-y-3">
      {totalPriceInCents && (
        <div className="flex items-center justify-between">
          <p className="text-sm leading-5 font-medium lg:text-base lg:leading-6">
            Subtotal
          </p>

          <span className="text-muted-foreground text-sm font-medium lg:text-base">
            {formatToCurrency(totalPriceInCents)}
          </span>
        </div>
      )}

      <div className="flex items-center justify-between">
        <p className="text-sm leading-5 font-medium lg:text-base lg:leading-6">
          Transporte e Manuseio
        </p>

        <span className="text-muted-foreground text-sm font-medium lg:text-base">
          Grátis
        </span>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm leading-5 font-medium lg:text-base lg:leading-6">
          Taxa Estimada
        </p>

        <span className="text-muted-foreground text-sm font-medium lg:text-base">
          -
        </span>
      </div>

      {totalPriceInCents && (
        <div className="flex items-center justify-between">
          <p className="text-sm leading-5 font-medium lg:text-base lg:leading-6">
            Total
          </p>

          <span className="text-sm font-semibold lg:text-base">
            {formatToCurrency(totalPriceInCents)}
          </span>
        </div>
      )}
    </div>
  );
}
