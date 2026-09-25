"use client";

import { useState } from "react";

const faqs = [
  {
    question: "¿Qué es Encuentro?",
    answer:
      "Un espacio para conocer en persona a otras personas con intención real de construir una relación, sin la fatiga de las apps de citas.",
  },
  {
    question: "¿Esto es speed dating?",
    answer:
      "No. No hay rotación cronometrada ni presión de tiempo: cada encuentro reúne a un grupo pequeño con perfiles alineados entre sí.",
  },
  {
    question: "¿Garantizan que encontraré pareja?",
    answer:
      "No podemos garantizar resultados, pero sí creamos las condiciones para conocer personas relevantes: perfiles alineados, ambiente cuidado y conversación cara a cara.",
  },
  {
    question: "¿Compartirán mi teléfono con otros participantes?",
    answer:
      "Nunca. Tu información de contacto solo se comparte si tú y la otra persona expresan interés mutuo después del encuentro.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-20 bg-white py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
            Preguntas frecuentes
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="border-t border-stone-200">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-stone-900">{faq.question}</span>
                  <span className="ml-4 text-xl text-stone-400">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && (
                  <p className="pb-5 text-sm text-stone-600">{faq.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
