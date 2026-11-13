import { encuentroEvent } from "@/lib/event";
import { RegistrationCTA } from "@/components/RegistrationCTA";

export function UpcomingEvents() {
  return (
    <section id="proximos-encuentros" className="scroll-mt-20 bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
            Próximo encuentro
          </h2>
          <p className="mt-4 text-stone-600">
            Primer evento piloto. Cupos limitados, grupo pequeño y cuidadosamente
            seleccionado.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-sm">
          <div className="flex flex-col border-t border-stone-200 pt-6">
            <div className="h-32 rounded-xl bg-gradient-to-br from-rose-100 to-amber-100" />
            <h3 className="mt-5 text-lg font-semibold text-stone-900">
              {encuentroEvent.title}
            </h3>
            <p className="mt-1 text-sm text-stone-500">
              {encuentroEvent.location}
              {!encuentroEvent.locationConfirmed && (
                <span className="text-stone-400"> (pendiente de confirmación)</span>
              )}
            </p>
            <p className="mt-3 text-sm text-stone-700">
              {encuentroEvent.date} · {encuentroEvent.time}
            </p>
            <p className="mt-1 text-xs text-stone-500">{encuentroEvent.ageGroup}</p>
            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="font-semibold text-stone-900">{encuentroEvent.price}</span>
              <span className="text-stone-500">{encuentroEvent.status}</span>
            </div>
            <RegistrationCTA className="mt-6 inline-block rounded-full bg-rose-600 px-5 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-rose-700">
              Reservar mi lugar
            </RegistrationCTA>
          </div>
        </div>
      </div>
    </section>
  );
}
