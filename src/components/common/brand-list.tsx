import Image from "next/image";

const brands = [
  {
    id: 1,
    name: "Nike",
    logoUrl: "/brands/nike.svg",
  },
  {
    id: 2,
    name: "Adidas",
    logoUrl: "/brands/adidas.svg",
  },
  {
    id: 3,
    name: "Puma",
    logoUrl: "/brands/puma.svg",
  },
  {
    id: 4,
    name: "New Balance",
    logoUrl: "/brands/new-balance.svg",
  },
  {
    id: 5,
    name: "Converse",
    logoUrl: "/brands/converse.svg",
  },
  {
    id: 6,
    name: "Polo",
    logoUrl: "/brands/polo.svg",
  },
  {
    id: 7,
    name: "Zara",
    logoUrl: "/brands/zara.svg",
  },
];

export function BrandList() {
  return (
    <div className="flex w-full gap-6 overflow-x-auto scroll-smooth px-4 [&::-webkit-scrollbar]:hidden">
      {brands.map((brand) => (
        <div
          key={brand.id}
          className="flex flex-col items-center justify-start gap-4"
        >
          <div className="flex h-20 w-20 items-center justify-center rounded-3xl border">
            <Image
              src={brand.logoUrl}
              alt={brand.name}
              width={32}
              height={32}
              unoptimized
            />
          </div>

          <span className="whitespace-nowrap">{brand.name}</span>
        </div>
      ))}
    </div>
  );
}
