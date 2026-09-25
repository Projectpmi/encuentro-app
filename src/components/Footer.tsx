export function Footer() {
  return (
    <footer className="bg-stone-900 py-12 text-stone-300">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center sm:px-6">
        <span className="text-lg font-bold tracking-tight text-white">ENCUENTRO</span>
        <p className="max-w-md text-sm text-stone-400">
          Encuentros reales, cara a cara. Medellín, Colombia.
        </p>
        <p className="text-xs text-stone-500">
          © {new Date().getFullYear()} Encuentro. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
