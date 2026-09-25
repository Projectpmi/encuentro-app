import { sampleEvents } from "@/lib/sample-events";

export function UpcomingEvents() {
  return (
    <section id="proximos-encuentros" className="scroll-mt-20 bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
            Próximos encuentros
          </h2>
          <p className="mt-4 text-stone-600">
            Cupos limitados. Cada encuentro reúne un grupo pequeño y cuidadosamente
            seleccionado.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {sampleEvents.map((event) => (
            <div key={event.id} className="flex flex-col border-t border-stone-200 pt-6">
              <div className="h-32 rounded-xl bg-gradient-to-br from-rose-100 to-amber-100" />
              <h3 className="mt-5 text-lg font-semibold text-stone-900">{event.title}</h3>
              <p className="mt-1 text-sm text-stone-500">{event.neighborhood}</p>
              <p className="mt-3 text-sm text-stone-700">{event.date}</p>
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="font-semibold text-stone-900">{event.price}</span>
                <span className="text-stone-500">
                  {event.spotsLeft} de {event.capacity} cupos disponibles
                </span>
              </div>
              <button
                type="button"
                className="mt-6 rounded-full bg-rose-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-rose-700"
              >
                Reservar mi cupo
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
