// Flip to false once the single Founding Client spot is filled.
const SPOT_OPEN = true;

export default function SpotsIndicator() {
  return (
    <div className="flex items-center justify-center gap-2.5">
      <span
        className={`h-2.5 w-2.5 rounded-full ${SPOT_OPEN ? "bg-accent" : "bg-cream/40"}`}
      />
      <span className="text-sm font-medium text-cream/85">
        {SPOT_OPEN ? "This spot is currently open" : "This spot has been filled"}
      </span>
    </div>
  );
}
