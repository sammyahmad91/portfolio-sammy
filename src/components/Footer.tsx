import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-border/50 py-8">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js.
        </p>
        <p className="font-mono text-xs text-muted/60">
          signal.layer — ai engineering × ml infrastructure
        </p>
      </div>
    </footer>
  );
}
