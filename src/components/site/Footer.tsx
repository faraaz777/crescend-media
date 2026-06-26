import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <Logo />
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-foreground">Services</a>
            <a href="#work" className="hover:text-foreground">Work</a>
            <a href="#process" className="hover:text-foreground">Process</a>
            <a href="#contact" className="hover:text-foreground">Contact</a>
          </div>
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Crescend Media Group. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
