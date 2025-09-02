export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted w-full">
      <div className="p-8 lg:mx-auto lg:max-w-[1440px] lg:px-11">
        <span className="text-xs font-medium">
          &copy; {currentYear} Copyright BEWEAR
        </span>
        <span className="text-muted-foreground block text-xs font-medium">
          Todos os direitos reservados.
        </span>
      </div>
    </footer>
  );
}
