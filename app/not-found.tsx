import Link from "next/link";
import { LogoMark } from "@/components/logo";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div className="pointer-events-none absolute inset-0 mesh-bg" />
      <div className="relative">
        <LogoMark size={64} />
        <h1 className="mt-6 font-display text-6xl font-bold gradient-text">404</h1>
        <p className="mt-3 max-w-sm text-muted">
          Page introuvable. / Page not found.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-brand-gradient px-6 py-3 text-sm font-medium text-white shadow-glow transition-transform hover:scale-105"
        >
          Accueil / Home
        </Link>
      </div>
    </div>
  );
}
