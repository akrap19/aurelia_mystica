type Language = "en" | "it";

const TAGLINE = {
  en: "The stars speak · We translate",
  it: "Le stelle parlano · Noi traduciamo",
};

export const Footer = ({ lang }: { lang: Language }) => {
  return (
    <footer className="border-aurelia-gold/15 relative z-10 mx-auto w-full max-w-7xl border-t px-6 py-12 md:px-10">
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-3">
          <span className="font-display text-aurelia-cream/80 text-xs tracking-[0.4em] uppercase">
            Aurelia
          </span>
          <span className="bg-aurelia-gold/40 h-px w-6" />
          <span className="font-display text-aurelia-gold-soft text-xs tracking-[0.4em] uppercase">
            Mystica
          </span>
        </div>

        <p className="text-aurelia-cream/50 font-serif text-xs tracking-[0.2em] uppercase italic">
          {TAGLINE[lang]}
        </p>

        <p className="text-aurelia-cream/40 font-sans text-[10px] tracking-[0.3em] uppercase">
          © {new Date().getFullYear()} Aurelia Mystica
        </p>
      </div>
    </footer>
  );
};
