import { Moon, Sun, Star } from "lucide-react";

import { INTRO_COPY, type Language } from "./copy";

const PILLAR_ICONS = [Sun, Moon, Star];

export const Intro = ({ lang }: { lang: Language }) => {
  const copy = INTRO_COPY[lang];

  return (
    <section className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-32">
      <div className="grid gap-16 md:grid-cols-12 md:gap-20">
        <div className="md:col-span-5">
          <span className="text-aurelia-gold/80 font-sans text-[10px] tracking-[0.5em] uppercase">
            {copy.label}
          </span>
          <h2 className="font-display text-aurelia-cream mt-6 text-3xl leading-[1.15] font-light tracking-[0.05em] uppercase md:text-4xl">
            {copy.heading}
            <span className="font-serif text-gold-gradient block italic normal-case tracking-normal">
              {copy.accent}
            </span>
          </h2>
          <div className="divider-gold mt-8 h-px w-24" />
          <p className="text-aurelia-cream/70 mt-8 font-sans text-base leading-relaxed font-light md:text-lg">
            {copy.body}
          </p>
          <p className="text-aurelia-cream/60 mt-6 font-serif text-base leading-relaxed italic md:text-lg">
            &ldquo;{copy.quote}&rdquo;
          </p>
        </div>

        <div className="grid gap-6 md:col-span-7">
          {copy.pillars.map((p, index) => {
            const Icon = PILLAR_ICONS[index];

            return (
            <div
              key={p.title}
              className="group border-gold-soft hover:border-aurelia-gold/50 from-aurelia-purple/30 relative overflow-hidden rounded-lg border bg-gradient-to-br to-transparent p-8 transition-colors"
            >
              <div className="flex items-start gap-6">
                <div className="border-aurelia-gold/30 text-aurelia-gold-soft group-hover:border-aurelia-gold flex size-14 shrink-0 items-center justify-center rounded-full border transition-colors">
                  <Icon className="size-6" strokeWidth={1.2} />
                </div>
                <div>
                  <h3 className="font-display text-aurelia-cream text-lg tracking-[0.25em] uppercase">
                    {p.title}
                  </h3>
                  <p className="text-aurelia-cream/65 mt-3 font-sans text-sm leading-relaxed font-light md:text-base">
                    {p.desc}
                  </p>
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
