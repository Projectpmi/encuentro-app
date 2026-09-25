const benefits = [
  {
    title: "Eficiencia",
    description:
      "Conoce varias personas en una sola noche, en lugar de pasar semanas haciendo match y enviando mensajes.",
  },
  {
    title: "Autenticidad",
    description:
      "La conversación cara a cara permite descubrir desde el principio algo que un perfil no puede mostrar: química, energía y conexión.",
  },
  {
    title: "Tranquilidad",
    description:
      "Encuentros en lugares públicos, con moderación profesional, reglas claras y sin obligación de compartir tus datos de contacto.",
  },
  {
    title: "Calidad sobre cantidad",
    description:
      "Participantes agrupados mediante alineación de perfiles, considerando edad, preferencias e intención de construir una relación.",
  },
  {
    title: "Sin presión",
    description:
      "Conversaciones breves, ambiente relajado y libertad total para decidir a quién quieres volver a conocer.",
  },
];

export function WhyEncuentro() {
  return (
    <section id="por-que-encuentro" className="scroll-mt-20 bg-white py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
            Menos tiempo buscando. Más oportunidades de conectar.
          </h2>
        </div>

        <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="border-t border-stone-200 pt-5">
              <h3 className="text-lg font-semibold text-stone-900">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
