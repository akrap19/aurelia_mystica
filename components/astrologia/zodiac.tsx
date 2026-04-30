type Language = "en" | "it";

const SIGNS = {
  en: [
    { glyph: "♈", name: "Aries", dates: "Mar 21 – Apr 19", element: "Fire" },
    { glyph: "♉", name: "Taurus", dates: "Apr 20 – May 20", element: "Earth" },
    { glyph: "♊", name: "Gemini", dates: "May 21 – Jun 20", element: "Air" },
    { glyph: "♋", name: "Cancer", dates: "Jun 21 – Jul 22", element: "Water" },
    { glyph: "♌", name: "Leo", dates: "Jul 23 – Aug 22", element: "Fire" },
    { glyph: "♍", name: "Virgo", dates: "Aug 23 – Sep 22", element: "Earth" },
    { glyph: "♎", name: "Libra", dates: "Sep 23 – Oct 22", element: "Air" },
    { glyph: "♏", name: "Scorpio", dates: "Oct 23 – Nov 21", element: "Water" },
    { glyph: "♐", name: "Sagittarius", dates: "Nov 22 – Dec 21", element: "Fire" },
    { glyph: "♑", name: "Capricorn", dates: "Dec 22 – Jan 19", element: "Earth" },
    { glyph: "♒", name: "Aquarius", dates: "Jan 20 – Feb 18", element: "Air" },
    { glyph: "♓", name: "Pisces", dates: "Feb 19 – Mar 20", element: "Water" },
  ],
  it: [
    { glyph: "♈", name: "Ariete", dates: "21 Mar – 19 Apr", element: "Fuoco" },
    { glyph: "♉", name: "Toro", dates: "20 Apr – 20 Mag", element: "Terra" },
    { glyph: "♊", name: "Gemelli", dates: "21 Mag – 20 Giu", element: "Aria" },
    { glyph: "♋", name: "Cancro", dates: "21 Giu – 22 Lug", element: "Acqua" },
    { glyph: "♌", name: "Leone", dates: "23 Lug – 22 Ago", element: "Fuoco" },
    { glyph: "♍", name: "Vergine", dates: "23 Ago – 22 Set", element: "Terra" },
    { glyph: "♎", name: "Bilancia", dates: "23 Set – 22 Ott", element: "Aria" },
    { glyph: "♏", name: "Scorpione", dates: "23 Ott – 21 Nov", element: "Acqua" },
    { glyph: "♐", name: "Sagittario", dates: "22 Nov – 21 Dic", element: "Fuoco" },
    { glyph: "♑", name: "Capricorno", dates: "22 Dic – 19 Gen", element: "Terra" },
    { glyph: "♒", name: "Acquario", dates: "20 Gen – 18 Feb", element: "Aria" },
    { glyph: "♓", name: "Pesci", dates: "19 Feb – 20 Mar", element: "Acqua" },
  ],
};

const COPY = {
  en: {
    label: "The Wheel of the Sky",
    before: "The twelve",
    accent: "zodiac",
    after: "signs",
    body: "Every sign is an archetype, a chapter in the great cosmic story. Discover yours, and the signs of those you love.",
  },
  it: {
    label: "La Ruota del Cielo",
    before: "I dodici",
    accent: "segni",
    after: "zodiacali",
    body: "Ogni segno è un archetipo, un capitolo della grande storia cosmica. Scopri il tuo, e quello di chi ami.",
  },
};

export const Zodiac = ({ lang }: { lang: Language }) => {
  const copy = COPY[lang];

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

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {SIGNS[lang].map((sign) => (
          <div
            key={sign.name}
            className="group border-gold-soft hover:border-aurelia-gold/60 from-aurelia-purple/30 relative flex flex-col items-center justify-center rounded-lg border bg-gradient-to-b to-transparent p-6 text-center transition-all hover:-translate-y-1"
          >
            <span className="text-gold-gradient font-display text-4xl leading-none transition-transform group-hover:scale-110">
              {sign.glyph}
            </span>
            <h3 className="font-display text-aurelia-cream mt-4 text-sm tracking-[0.2em] uppercase">
              {sign.name}
            </h3>
            <span className="text-aurelia-gold/70 mt-2 font-serif text-[11px] italic">
              {sign.dates}
            </span>
            <span className="border-aurelia-gold/25 text-aurelia-cream/60 mt-3 rounded-full border px-3 py-0.5 font-sans text-[10px] tracking-[0.2em] uppercase">
              {sign.element}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
