import Image from "next/image";

export function Hero() {
  return (
    <section className="overflow-hidden bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div className="relative order-1 aspect-[4/5] w-full overflow-hidden rounded-3xl lg:order-2 lg:aspect-auto lg:h-[34rem]">
          <Image
            src="/images/hero-pareja.png"
            alt="Pareja feliz conversando cara a cara"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="order-2 text-center lg:order-1 lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-600">
            Encuentro
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
            Donde el amor se encuentra cara a cara.
          </h1>
          <p className="mx-auto mt-6 max-w-md text-lg text-stone-600 lg:mx-0">
            Para personas que buscan una relación sólida y estable.
          </p>
          <p className="mt-6 text-sm font-medium text-stone-500">
            25–34 · 35–49 · 50–65 · Encuentros heterosexuales
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="#proximos-encuentros"
              className="w-full rounded-full bg-rose-600 px-8 py-3.5 text-base font-semibold text-white transition hover:bg-rose-700 sm:w-auto"
            >
              Ver próximos encuentros
            </a>
            <a
              href="#como-funciona"
              className="w-full rounded-full border border-stone-300 px-8 py-3.5 text-base font-semibold text-stone-700 transition hover:border-stone-400 hover:bg-stone-50 sm:w-auto"
            >
              Cómo funciona
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
