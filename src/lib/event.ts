export type EncuentroEvent = {
  title: string;
  date: string;
  time: string;
  location: string;
  locationConfirmed: boolean;
  ageGroup: string;
  groupAssignment: string;
  price: string;
  status: "Abierto";
};

export const encuentroEvent: EncuentroEvent = {
  title: "Encuentro — Primer evento piloto",
  date: "26 de noviembre de 2026",
  time: "6:30 p. m. – 9:00 p. m.",
  location: "El Poblado, Medellín",
  locationConfirmed: false,
  ageGroup: "Convocatoria abierta a todos los rangos de edad habilitados",
  groupAssignment: "Organización de grupos manual, a cargo del organizador",
  price: "COP $130.000",
  status: "Abierto",
};
