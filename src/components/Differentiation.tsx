const columns = [
  {
    title: "Apps de citas",
    highlight: false,
    points: [
      "Muchos perfiles.",
      "Semanas de mensajes.",
      "Intenciones difíciles de conocer.",
      "La química se descubre tarde.",
    ],
  },
  {
    title: "Speed dating tradicional",
    highlight: false,
    points: [
      "Muchas conversaciones al azar.",
      "Poco tiempo por persona.",
      "El foco está en cantidad.",
      "Poca alineación previa.",
    ],
  },
  {
    title: "Encuentro",
    highlight: true,
    points: [
      "Alineación de perfiles.",
      "Intención de relación clara.",
      "Química cara a cara desde el comienzo.",
      "Varias oportunidades reales en una sola noche.",
      "Contacto únicamente cuando existe interés mutuo.",
    ],
  },
];

export function Differentiation() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
            Una forma diferente de conocer a alguien
          </h2>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          {columns.map((column) => (
            <div
              key={column.title}
              className={column.highlight ? "rounded-2xl bg-rose-50 p-6" : "p-6"}
            >
              <h3
                className={
                  column.highlight
                    ? "font-semibold text-rose-600"
                    : "font-semibold text-stone-500"
                }
              >
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-stone-700">
                {column.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
