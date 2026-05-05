export type ZodiacLanguage = "en" | "it";

export type ZodiacSignId =
  | "aries"
  | "taurus"
  | "gemini"
  | "cancer"
  | "leo"
  | "virgo"
  | "libra"
  | "scorpio"
  | "sagittarius"
  | "capricorn"
  | "aquarius"
  | "pisces";

type LocalizedSign = {
  name: string;
  dates: string;
  element: string;
  description: string;
};

export const ZODIAC_SECTION_COPY: Record<
  ZodiacLanguage,
  {
    label: string;
    before: string;
    accent: string;
    after: string;
    body: string;
  }
> = {
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

const ZODIAC_SIGNS: Array<{
  id: ZodiacSignId;
  en: LocalizedSign;
  it: LocalizedSign;
}> = [
  {
    id: "aries",
    en: {
      name: "Aries",
      dates: "Mar 21 – Apr 19",
      element: "Fire",
      description:
        "Aries carries the spark of beginnings: direct courage, honest appetite for life, and the drive to lead the way. It teaches how to act before doubt takes hold, and how to renew itself after every flame burns low.",
    },
    it: {
      name: "Ariete",
      dates: "21 Mar – 19 Apr",
      element: "Fuoco",
      description:
        "L’Ariete porta la scintilla dell’inizio: coraggio schietto, fame di vita e slancio a fare da apripista. Insegna ad agire prima che il dubbio raffreddi l’intuito, e a rinascere dopo ogni fiamma che si spegne.",
    },
  },
  {
    id: "taurus",
    en: {
      name: "Taurus",
      dates: "Apr 20 – May 20",
      element: "Earth",
      description:
        "Taurus is devotion made flesh: loyalty to beauty, rhythm, and the things truly worth keeping. Slow to move but hard to shake, it grounds desire in the senses and builds a life that can actually be inhabited.",
    },
    it: {
      name: "Toro",
      dates: "20 Apr – 20 Mag",
      element: "Terra",
      description:
        "Il Toro è devozione incarnata: fedeltà a ciò che è bello, al ritmo e a ciò che vale la pena custodire. Lento a muoversi ma difficile da smuovere, ancora il desiderio nei sensi e costruisce una vita abitabile.",
    },
  },
  {
    id: "gemini",
    en: {
      name: "Gemini",
      dates: "May 21 – Jun 20",
      element: "Air",
      description:
        "Gemini lives in the space between two truths: curious, humorous, and restless for new language. It honors the mind that can hold contradictions and the conversations that change who you become.",
    },
    it: {
      name: "Gemelli",
      dates: "21 Mag – 20 Giu",
      element: "Aria",
      description:
        "I Gemelli abitano lo spazio fra due verità: curiosi, ironici, inquieti di nuovo linguaggio. Onorano la mente che regge le contraddizioni e i dialoghi che trasformano chi sei.",
    },
  },
  {
    id: "cancer",
    en: {
      name: "Cancer",
      dates: "Jun 21 – Jul 22",
      element: "Water",
      description:
        "Cancer maps the shoreline between self and kin: memory, care, and the courage to nurture. Its gift is belonging without surrender — a shell that keeps the inner tide safe until it is ready to meet the world.",
    },
    it: {
      name: "Cancro",
      dates: "21 Giu – 22 Lug",
      element: "Acqua",
      description:
        "Il Cancro disegna la linea d’onda fra sé e gli altri: memoria, cura, coraggio di nutrire. Il suo dono è appartenere senza annullarsi — un guscio che protegge la marea interiore finché non è pronta per il mondo.",
    },
  },
  {
    id: "leo",
    en: {
      name: "Leo",
      dates: "Jul 23 – Aug 22",
      element: "Fire",
      description:
        "Leo is light offered without apology: warmth, play, and the refusal to shrink. It asks for a stage big enough for the heart — not for vanity alone, but so what is generous in you can be seen and shared.",
    },
    it: {
      name: "Leone",
      dates: "23 Lug – 22 Ago",
      element: "Fuoco",
      description:
        "Il Leone è luce senza scuse: calore, gioco e il rifiuto di rimpicciolirsi. Chiede un palcoscenico degno del cuore — non solo vanità, ma perché ciò che in te è generoso possa essere visto e donato.",
    },
  },
  {
    id: "virgo",
    en: {
      name: "Virgo",
      dates: "Aug 23 – Sep 22",
      element: "Earth",
      description:
        "Virgo is holiness in the small task: discernment, refinement, and service that does not erase itself. It knows that devotion often looks like the quiet craft of making chaos workable, one careful gesture at a time.",
    },
    it: {
      name: "Vergine",
      dates: "23 Ago – 22 Set",
      element: "Terra",
      description:
        "La Vergine è sacralità nel gesto piccolo: discernimento, levigazione, servizio che non si cancella. Sa che la devozione spesso somiglia all’arte silenziosa di rendere il caos gestibile, un passo alla volta.",
    },
  },
  {
    id: "libra",
    en: {
      name: "Libra",
      dates: "Sep 23 – Oct 22",
      element: "Air",
      description:
        "Libra seeks right relationship: balance not as numbness, but as honest measure. It loves harmony that can hold conflict, beauty that includes truth, and the patience to listen until fairness becomes possible.",
    },
    it: {
      name: "Bilancia",
      dates: "23 Set – 22 Ott",
      element: "Aria",
      description:
        "La Bilancia cerca il giusto rapporto: equilibrio non come intorpidimento, ma come misura onesta. Ama l’armonia che regge il conflitto, la bellezza che include il vero, e la pazienza di ascoltare finché la giustizia diventa possibile.",
    },
  },
  {
    id: "scorpio",
    en: {
      name: "Scorpio",
      dates: "Oct 23 – Nov 21",
      element: "Water",
      description:
        "Scorpio walks to the root: intensity, loyalty, and the will to transform rather than pretend. It is intimacy with what hides underneath masks — the kind of love that stays when surfaces shatter.",
    },
    it: {
      name: "Scorpione",
      dates: "23 Ott – 21 Nov",
      element: "Acqua",
      description:
        "Lo Scorpione cammina fino alla radice: intensità, fedeltà, volontà di trasformarsi invece di fingere. È intimità con ciò che sta sotto le maschere — l’amore che resta quando le superfici crollano.",
    },
  },
  {
    id: "sagittarius",
    en: {
      name: "Sagittarius",
      dates: "Nov 22 – Dec 21",
      element: "Fire",
      description:
        "Sagittarius is the road and the horizon: faith, candor, and appetite for meaning wider than one life. It guards the arrow aimed at a farther truth — restless, joking, unwilling to settle for a small story.",
    },
    it: {
      name: "Sagittario",
      dates: "22 Nov – 21 Dic",
      element: "Fuoco",
      description:
        "Il Sagittario è strada e orizzonte: fede, schiettezza, fame di senso più vasto di una sola vita. Custodisce la freccia verso una verità più lontana — irrequieto, ironico, restio a racconti troppo stretti.",
    },
  },
  {
    id: "capricorn",
    en: {
      name: "Capricorn",
      dates: "Dec 22 – Jan 19",
      element: "Earth",
      description:
        "Capricorn climbs with time: discipline, integrity, and ambition tempered by endurance. It honors the long ascent, the quiet promises kept, and the dignity that arrives when effort outlasts the weather.",
    },
    it: {
      name: "Capricorno",
      dates: "22 Dic – 19 Gen",
      element: "Terra",
      description:
        "Il Capricorno sale col tempo: disciplina, integrità, ambizione temprata dalla resistenza. Onora la lunga salita, le promesse silenti mantenute, la dignità che arriva quando lo sforzo dura più del tempo.",
    },
  },
  {
    id: "aquarius",
    en: {
      name: "Aquarius",
      dates: "Jan 20 – Feb 18",
      element: "Air",
      description:
        "Aquarius thinks in systems and kinships beyond blood: originality with a cause, friendship as ethics, future as a place you build together. It breaks frozen rules without forgetting the people downstream.",
    },
    it: {
      name: "Acquario",
      dates: "20 Gen – 18 Feb",
      element: "Aria",
      description:
        "L’Acquario pensa in sistemi e legami oltre il sangue: originalità con una causa, amicizia come etica, futuro come luogo da costruire insieme. Rompe regole gelide senza dimenticare chi sta più in basso sulla discesa.",
    },
  },
  {
    id: "pisces",
    en: {
      name: "Pisces",
      dates: "Feb 19 – Mar 20",
      element: "Water",
      description:
        "Pisces dissolves the wall between self and dream: compassion, imagination, and surrender that can heal or overwhelm. It listens to what the world leaves unspoken and translates it into tenderness — or art.",
    },
    it: {
      name: "Pesci",
      dates: "19 Feb – 20 Mar",
      element: "Acqua",
      description:
        "I Pesci sciolgono il muro fra sé e il sogno: compassione, immaginazione, abbandono che può guarire o travolgere. Ascolta ciò che il mondo tace e lo traduce in tenerezza — o in arte.",
    },
  },
];

export type ZodiacSignRow = {
  id: ZodiacSignId;
  name: string;
  dates: string;
  element: string;
  description: string;
};

export function getZodiacSigns(lang: ZodiacLanguage): ZodiacSignRow[] {
  return ZODIAC_SIGNS.map((row) => ({
    id: row.id,
    ...row[lang],
  }));
}
