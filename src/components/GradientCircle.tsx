export function GradientCircle({ className }: { className?: string }) {
  return (
    <div
      className={`rounded-full w-screen aspect-square animate-pulse opacity-70 ${className}`}
      style={{
        background: `radial-gradient(50% 50% at 50% 50%, #62536B 0%, transparent 100%)`,
      }}
    ></div>
  );
}
