import type { ReactNode } from "react";

const REGISTRATION_URL = process.env.NEXT_PUBLIC_REGISTRATION_URL;

export function RegistrationCTA({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  if (!REGISTRATION_URL) {
    return (
      <span aria-disabled="true" className={`${className ?? ""} cursor-not-allowed opacity-60`}>
        Próximamente
      </span>
    );
  }

  return (
    <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}
