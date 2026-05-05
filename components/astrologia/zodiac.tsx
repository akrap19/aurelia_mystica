import { ZodiacGrid } from "@/components/astrologia/zodiac-grid";
import {
  ZODIAC_SECTION_COPY,
  getZodiacSigns,
  type ZodiacLanguage,
} from "@/lib/zodiac-signs";

export const Zodiac = ({ lang }: { lang: ZodiacLanguage }) => {
  const copy = ZODIAC_SECTION_COPY[lang];
  const signs = getZodiacSigns(lang);

  return (
    <section
      id="zodiaco"
      className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mb-16 flex flex-col items-center text-center md:mb-20">
        <span className="text-aurelia-gold/80 font-sans text-[10px] tracking-[0.5em] uppercase">
          {copy.label}
        </span>
        <h2 className="font-display text-aurelia-cream mt-6 max-w-2xl text-3xl leading-[1.15] font-light tracking-[0.05em] uppercase md:text-5xl">
          {copy.before} <span className="text-gold-gradient">{copy.accent}</span>{" "}
          {copy.after}
        </h2>
        <div className="divider-gold mt-8 h-px w-32" />
        <p className="text-aurelia-cream/65 mt-8 max-w-2xl font-sans text-base leading-relaxed font-light">
          {copy.body}
        </p>
      </div>

      <ZodiacGrid lang={lang} signs={signs} />
    </section>
  );
};
