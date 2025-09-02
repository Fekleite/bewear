import Link from "next/link";

const menuItems = [
  { label: "Camisetas", href: "/shirts", key: "shirts" },
  { label: "Bermuda & Shorts", href: "/shorts", key: "shorts" },
  { label: "Calças", href: "/pants", key: "pants" },
  { label: "Jaquetas & Moletons", href: "/jackets", key: "jackets" },
  { label: "Tênis", href: "/shoes", key: "shoes" },
  { label: "Acessórios", href: "/accessories", key: "accessories" },
];

export function NavigationMenu() {
  return (
    <div className="flex flex-col lg:w-full lg:flex-row lg:items-center lg:justify-between lg:gap-4 lg:py-2">
      {menuItems.map((item) => (
        <Link key={item.key} href={item.href} className="px-4 py-3 lg:p-0">
          <span className="lg:text-muted-foreground hover:text-foreground text-foreground text-sm font-medium lg:text-base">
            {item.label}
          </span>
        </Link>
      ))}
    </div>
  );
}
