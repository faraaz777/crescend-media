export function Logo({ withWordmark = true, className = "", invert = false }: { withWordmark?: boolean; className?: string; invert?: boolean }) {
  const text = invert ? "text-ivory" : "text-charcoal";
  const sub = invert ? "text-ivory/60" : "text-muted-foreground";
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden>
        <circle cx="16" cy="16" r="14" stroke={invert ? "#FAF8F5" : "#14161B"} strokeWidth="1.5" />
        <path d="M22 11.5a8 8 0 1 0 0 9" stroke="var(--accent-brand)" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
      {withWordmark && (
        <div className="flex flex-col leading-none">
          <span className={`font-display text-[17px] font-semibold tracking-tight ${text}`}>
            Crescend<span className="text-accent-brand">.</span>
          </span>
          <span className={`mt-1 text-[9px] font-medium tracking-[0.24em] ${sub}`}>
            MEDIA GROUP
          </span>
        </div>
      )}
    </div>
  );
}
