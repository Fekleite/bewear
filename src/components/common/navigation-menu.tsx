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
    <div className="flex w-full items-center justify-between gap-4 py-2">
      {menuItems.map((item) => (
        <Link key={item.key} href={item.href}>
          <span className="text-muted-foreground hover:text-foreground font-medium">
            {item.label}
          </span>
        </Link>
      ))}
    </div>
  );
}
