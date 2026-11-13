import Image from "next/image";

const team = [
  {
    name: "Gisela Rúa",
    role: "Fundadora y organizadora de Encuentro",
    bio: [
      "Emprendedora y consultora estratégica, Gisela es la impulsora de Encuentro, una iniciativa que busca recuperar el valor de las conexiones personales cara a cara.",
      "Desde la organización y el diseño de la experiencia, trabaja para crear espacios cálidos, auténticos y bien estructurados, donde conocer nuevas personas resulte más natural y significativo.",
    ],
    image: "/images/gisela-rua-portrait.webp",
  },
  {
    name: "Jairo Alonso Mejía Arcila",
    role: "Psicólogo | Facilitador del encuentro",
    bio: [
      "Psicólogo de la Universidad Católica Luis Amigó, con experiencia en acompañamiento individual, de pareja y familiar. Su trayectoria incluye la comunicación asertiva, el fortalecimiento de vínculos y la resolución de conflictos.",
      "En Encuentro, Jairo acompañará y facilitará las dinámicas del evento, contribuyendo a crear un ambiente de confianza, respeto y conexión auténtica entre los participantes.",
    ],
    image: "/images/jairo-mejia-portrait.webp",
  },
];

export function Team() {
  return (
    <section id="equipo-organizador" className="scroll-mt-20 bg-stone-50 py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
            Equipo organizador
          </h2>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2">
          {team.map((member) => (
            <div key={member.name} className="flex flex-col items-center text-center">
              <div className="relative aspect-square w-40 overflow-hidden rounded-full bg-stone-200">
                <Image
                  src={member.image}
                  alt={`Retrato de ${member.name}`}
                  fill
                  sizes="160px"
                  className="object-cover object-top"
                />
              </div>
              <h3 className="mt-5 font-semibold text-stone-900">{member.name}</h3>
              <p className="mt-1 text-sm font-medium text-rose-600">{member.role}</p>
              <div className="mt-4 space-y-3 text-sm text-stone-600">
                {member.bio.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
