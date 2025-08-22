export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-muted p-8">
      <span className="text-xs font-medium">
        &copy; {currentYear} Copyright BEWEAR
      </span>
      <span className="text-muted-foreground block text-xs font-medium">
        Todos os direitos reservados.
      </span>
    </footer>
  );
}
