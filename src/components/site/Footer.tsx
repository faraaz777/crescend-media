import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-ivory">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="border-t border-hairline py-12">
          <div className="grid gap-10 sm:grid-cols-12">
            <div className="sm:col-span-5">
              <Logo />
              <p className="mt-5 max-w-xs text-[13px] leading-relaxed text-charcoal/60">
                A premium digital agency for ambitious founders. Brand, web,
                and growth — engineered to compound.
              </p>
            </div>
            <div className="sm:col-span-3">
              <div className="eyebrow mb-4">Studio</div>
              <ul className="space-y-2 text-[13px] text-charcoal/70">
                <li><a href="#services" className="hover:text-charcoal">Services</a></li>
                <li><a href="#work" className="hover:text-charcoal">Work</a></li>
                <li><a href="#process" className="hover:text-charcoal">Process</a></li>
              </ul>
            </div>
            <div className="sm:col-span-4">
              <div className="eyebrow mb-4">Contact</div>
              <ul className="space-y-2 text-[13px] text-charcoal/70">
                <li>hello@crescendmedia.com</li>
                <li>+91 90000 00000</li>
                <li>Mumbai · Dubai · Remote</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-hairline pt-6 text-[12px] text-charcoal/55 sm:flex-row sm:items-center">
            <div>© {new Date().getFullYear()} Crescend Media Group. All rights reserved.</div>
            <div className="flex gap-5">
              <a href="#" className="hover:text-charcoal">Privacy</a>
              <a href="#" className="hover:text-charcoal">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
