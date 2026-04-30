import { Cta } from "@/components/astrologia/cta";
import { Footer } from "@/components/astrologia/footer";
import { Header } from "@/components/astrologia/header";
import { Hero } from "@/components/astrologia/hero";
import { Intro } from "@/components/astrologia/intro";
import { Services } from "@/components/astrologia/services";
import { Starfield } from "@/components/astrologia/starfield";
import { Zodiac } from "@/components/astrologia/zodiac";

type Language = "en" | "it";

type PageProps = {
  searchParams: Promise<{
    lang?: string | string[];
  }>;
};

const getLanguage = (value?: string | string[]): Language => {
  const lang = Array.isArray(value) ? value[0] : value;

  return lang === "it" ? "it" : "en";
};

export default async function AstrologiaPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const lang = getLanguage(params.lang);

  return (
    <main className="bg-aurelia-radial relative min-h-screen overflow-hidden">
      <Starfield className="fixed" />

      <div
        aria-hidden
        className="from-aurelia-gold/10 pointer-events-none absolute top-0 left-1/2 -z-0 h-[80vh] w-[80vw] -translate-x-1/2 rounded-full bg-gradient-to-b to-transparent blur-3xl"
      />

      <Header lang={lang} />
      <Hero lang={lang} />
      <Intro lang={lang} />
      <Services lang={lang} />
      <Zodiac lang={lang} />
      <Cta lang={lang} />
      <Footer lang={lang} />
    </main>
  );
}
