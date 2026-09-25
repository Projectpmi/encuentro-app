import Image from "next/image";

export function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-stone-900 py-24 sm:py-32">
      <Image
        src="/images/conexion-calida.png"
        alt="Conexión cálida entre dos personas"
        fill
        className="object-cover opacity-60"
      />
      <div className="relative mx-auto max-w-2xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Tal vez tu próximo encuentro empiece aquí.
        </h2>
        <p className="mt-4 text-lg text-stone-200">
          Conoce personas que, como tú, están abiertas a construir una relación real.
        </p>
        <a
          href="#proximos-encuentros"
          className="mt-8 inline-block w-full rounded-full bg-rose-600 px-8 py-3.5 text-base font-semibold text-white transition hover:bg-rose-700 sm:w-auto"
        >
          Encontrar mi próximo encuentro
        </a>
        <p className="mt-6 text-sm font-medium text-stone-300">
          25–34 · 35–49 · 50–65 | Medellín
        </p>
      </div>
    </section>
  );
}
