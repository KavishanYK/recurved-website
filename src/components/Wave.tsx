type WaveProps = {
  position: "top" | "bottom";
  color: string;
};

// Decorative curve that sits at a colored section's edge, filled with the neighboring section's color.
export default function Wave({ position, color }: WaveProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 h-8 overflow-hidden sm:h-14 ${
        position === "top" ? "top-0" : "bottom-0 rotate-180"
      }`}
    >
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="h-full w-full">
        <path
          fill={color}
          d="M0,0 L1440,0 L1440,45 C1200,10 960,75 720,40 C480,10 240,80 0,35 Z"
        />
      </svg>
    </div>
  );
}
