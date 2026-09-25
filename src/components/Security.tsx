const items = [
  {
    title: "Espacios cuidados",
    description:
      "Cada encuentro sucede en un lugar público, con un anfitrión presente durante toda la noche.",
  },
  {
    title: "Contacto con consentimiento",
    description:
      "Nunca compartimos tu teléfono o redes sociales. Solo lo hacemos si tú y la otra persona expresan interés después del encuentro.",
  },
];

export function Security() {
  return (
    <section id="seguridad" className="scroll-mt-20 bg-stone-50 py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
            Seguridad
          </h2>
          <p className="mt-4 text-stone-600">Tu tranquilidad es parte del diseño.</p>
        </div>

        <div className="mt-14 space-y-8">
          {items.map((item) => (
            <div key={item.title} className="border-t border-stone-200 pt-6">
              <h3 className="font-semibold text-stone-900">{item.title}</h3>
              <p className="mt-1 text-sm text-stone-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
