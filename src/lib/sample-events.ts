export type SampleEvent = {
  id: string;
  title: string;
  neighborhood: string;
  date: string;
  price: string;
  spotsLeft: number;
  capacity: number;
};

export const sampleEvents: SampleEvent[] = [
  {
    id: "encuentro-poblado-oct",
    title: "Encuentro El Poblado",
    neighborhood: "El Poblado, Medellín",
    date: "Sábado 18 de octubre · 6:00 PM",
    price: "$120.000 COP",
    spotsLeft: 4,
    capacity: 12,
  },
  {
    id: "encuentro-laureles-nov",
    title: "Encuentro Laureles",
    neighborhood: "Laureles, Medellín",
    date: "Viernes 7 de noviembre · 7:00 PM",
    price: "$120.000 COP",
    spotsLeft: 7,
    capacity: 12,
  },
  {
    id: "encuentro-envigado-nov",
    title: "Encuentro Envigado",
    neighborhood: "Envigado, Medellín",
    date: "Sábado 22 de noviembre · 6:30 PM",
    price: "$120.000 COP",
    spotsLeft: 2,
    capacity: 10,
  },
];
