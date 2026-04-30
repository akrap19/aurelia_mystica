import { cn } from "@/lib/utils";

type Star = {
  top: string;
  left: string;
  size: number;
  delay: string;
  duration: string;
  opacity: number;
};

const STARS: Star[] = [
  { top: "8%", left: "12%", size: 2, delay: "0s", duration: "3.2s", opacity: 0.7 },
  { top: "14%", left: "78%", size: 1, delay: "0.6s", duration: "4.4s", opacity: 0.6 },
  { top: "22%", left: "32%", size: 3, delay: "1.2s", duration: "5s", opacity: 0.9 },
  { top: "27%", left: "62%", size: 1, delay: "0.3s", duration: "3.8s", opacity: 0.5 },
  { top: "34%", left: "8%", size: 2, delay: "1.8s", duration: "4.2s", opacity: 0.8 },
  { top: "41%", left: "88%", size: 2, delay: "0.9s", duration: "3.5s", opacity: 0.7 },
  { top: "48%", left: "44%", size: 1, delay: "2.1s", duration: "4.8s", opacity: 0.6 },
  { top: "55%", left: "20%", size: 2, delay: "0.4s", duration: "3.9s", opacity: 0.85 },
  { top: "61%", left: "72%", size: 3, delay: "1.5s", duration: "5.2s", opacity: 0.95 },
  { top: "68%", left: "52%", size: 1, delay: "2.4s", duration: "4.1s", opacity: 0.55 },
  { top: "74%", left: "16%", size: 2, delay: "0.7s", duration: "3.6s", opacity: 0.7 },
  { top: "82%", left: "84%", size: 1, delay: "1.9s", duration: "4.6s", opacity: 0.6 },
  { top: "89%", left: "38%", size: 2, delay: "1.1s", duration: "3.4s", opacity: 0.75 },
  { top: "94%", left: "66%", size: 1, delay: "2.6s", duration: "4.9s", opacity: 0.5 },
];

export const Starfield = ({ className }: { className?: string }) => {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      {STARS.map((star, idx) => (
        <span
          key={idx}
          className="animate-twinkle absolute rounded-full bg-aurelia-cream"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDelay: star.delay,
            animationDuration: star.duration,
            boxShadow: "0 0 6px rgba(245, 239, 224, 0.8)",
          }}
        />
      ))}
    </div>
  );
};
