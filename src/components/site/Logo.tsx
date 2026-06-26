import logo from "@/assets/cm-logo.png";

export function Logo({ withWordmark = true, className = "" }: { withWordmark?: boolean; className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img src={logo} alt="Crescend Media Group" className="h-9 w-auto" width={36} height={36} />
      {withWordmark && (
        <div className="flex flex-col leading-none">
          <span className="text-[15px] font-bold tracking-tight">
            <span className="text-teal">Crescend</span>{" "}
            <span className="text-blue">Media</span>{" "}
            <span className="text-purple">Group</span>
          </span>
          <span className="mt-1 text-[9px] font-medium tracking-[0.22em] text-muted-foreground">
            DEVELOP · SCALE · COLLECT
          </span>
        </div>
      )}
    </div>
  );
}
