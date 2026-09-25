import Image from "next/image";

const steps = [
  {
    number: "1",
    title: "Completa tu perfil",
    description:
      "Cuéntanos quién eres, qué buscas y qué es importante para ti en una relación.",
  },
  {
    number: "2",
    title: "Alineación de perfiles",
    description:
      "Organizamos los encuentros considerando edad, preferencias, intención de relación y criterios relevantes compartidos.",
  },
  {
    number: "3",
    title: "Conoce en persona",
    description:
      "Participa en una noche agradable y conoce cara a cara a varias personas con perfiles alineados al tuyo.",
  },
  {
    number: "4",
    title: "Tú decides",
    description:
      "Después del encuentro, indícanos de forma privada a quién te gustaría volver a ver. Solo compartimos el contacto cuando el interés es mutuo.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="scroll-mt-20 bg-stone-50 py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl lg:aspect-auto lg:h-[32rem]">
          <Image
            src="/images/social-conversando.png"
            alt="Personas solteras conversando en un ambiente social elegante"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
            Cómo funciona
          </h2>

          <div className="mt-10 space-y-8">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-5">
                <span className="font-display text-lg font-semibold text-rose-600">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-semibold text-stone-900">{step.title}</h3>
                  <p className="mt-1 text-sm text-stone-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
