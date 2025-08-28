import Image from "next/image";

import { Button } from "../ui/button";

export function BannerGrid() {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col gap-6">
        <div className="relative">
          <Image
            src="/banner-01-grid.png"
            alt="Nike Therma FIT Headed"
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto w-full max-w-[512px]"
          />

          <Button
            variant="secondary"
            className="absolute right-6 bottom-6 rounded-full font-semibold"
          >
            Comprar
          </Button>
        </div>

        <div className="relative">
          <Image
            src="/banner-02-grid.png"
            alt="Nike Therma FIT Headed"
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto w-full max-w-[512px]"
          />

          <Button
            variant="secondary"
            className="absolute right-6 bottom-6 rounded-full font-semibold"
          >
            Comprar
          </Button>
        </div>
      </div>

      <div className="relative">
        <Image
          src="/banner-03-grid.png"
          alt="Nike Therma FIT Headed"
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-full max-w-[816px]"
        />

        <Button
          variant="secondary"
          className="absolute right-6 bottom-6 rounded-full font-semibold"
        >
          Comprar
        </Button>
      </div>
    </div>
  );
}
