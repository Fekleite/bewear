export default function CheckoutCancel() {
  return (
    <section className="flex flex-col items-center justify-center px-4">
      <div className="mt-16 space-y-6 text-center">
        <h1 className="text-2xl font-semibold">
          Não foi possível completar o pagamento
        </h1>

        <p className="text-muted-foreground text-sm font-medium">
          Infelizmente ocorreu um erro ao processar seu pagamento. Por favor,
          tente novamente ou entre em contato com o suporte para obter
          assistência.
        </p>
      </div>
    </section>
  );
}
