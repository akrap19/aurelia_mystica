import Image from 'next/image'
import { Sparkles } from 'lucide-react'

import { INSTAGRAM_DM_URL } from '@/lib/instagram'

type Language = 'en' | 'it'

const COPY = {
	en: {
		eyebrow: 'Astrology · Stars · Soul Map',
		title: 'Astrology',
		subtitle: 'the cosmic map of your soul',
		body: 'The ancient art of reading the language of the stars. Aurelia Mystica translates the celestial design that shapes your path, revealing your essence, your cycles, and your potential.',
		primary: 'Book a reading',
		secondary: 'Explore the Zodiac',
		tagline: 'The stars speak. We translate.'
	},
	it: {
		eyebrow: "Astrologia · Stelle · Mappa dell'anima",
		title: 'Astrologia',
		subtitle: 'la mappa cosmica della tua anima',
		body: "L'antica arte di leggere il linguaggio delle stelle. Aurelia Mystica traduce il disegno celeste che plasma il tuo cammino, rivelando la tua essenza, i tuoi cicli e il tuo potenziale.",
		primary: 'Prenota una lettura',
		secondary: 'Scopri lo Zodiaco',
		tagline: 'Le stelle parlano. Noi traduciamo.'
	}
}

export const Hero = ({ lang }: { lang: Language }) => {
	const copy = COPY[lang]

	return (
		<section
			id='astrologia'
			className='relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-6 pt-12 pb-24 text-center md:px-10 md:pt-20 md:pb-36'>
			{/* <span className='text-aurelia-gold/80 mb-8 inline-flex items-center gap-3 font-sans text-[10px] tracking-[0.5em] uppercase md:text-xs'>
				<span className='bg-aurelia-gold/40 h-px w-10' />
				{copy.eyebrow}
				<span className='bg-aurelia-gold/40 h-px w-10' />
			</span> */}

			<div className='animate-float-slow relative mb-14 size-32 md:size-40'>
				<div className='border-aurelia-gold/30 absolute inset-0 rounded-full border' />
				<div className='border-aurelia-gold/15 absolute inset-3 rounded-full border' />
				<Image
					src='/aurelia_mystica_no_background.png'
					alt=''
					aria-hidden
					width={240}
					height={240}
					className='size-full object-contain p-2'
					priority
				/>
			</div>

			<h1 className='font-display text-aurelia-cream max-w-4xl text-4xl leading-[1.05] font-light tracking-[0.08em] uppercase md:text-6xl lg:text-7xl'>
				<span className='text-gold-gradient'>{copy.title}</span>
				<span className='mt-3 block font-serif text-2xl tracking-normal italic md:text-3xl lg:text-4xl'>
					{copy.subtitle}
				</span>
			</h1>

			<p className='text-aurelia-cream/70 mt-10 max-w-2xl font-sans text-base leading-relaxed font-light md:text-lg'>
				{copy.body}
			</p>

			<div className='mt-12 flex flex-col items-center gap-4 sm:flex-row'>
				<a
					href={INSTAGRAM_DM_URL}
					target='_blank'
					rel='noopener noreferrer'
					className='group bg-aurelia-gold text-aurelia-navy-deep hover:bg-aurelia-gold-soft inline-flex h-12 items-center gap-2 rounded-full px-7 font-sans text-xs font-medium tracking-[0.25em] uppercase transition-colors md:px-10 lg:px-14'>
					<Sparkles className='size-4' />
					{copy.primary}
				</a>
				{/* <a
					href='#zodiaco'
					className='border-aurelia-gold/40 text-aurelia-cream hover:border-aurelia-gold hover:text-aurelia-gold-soft inline-flex h-12 items-center rounded-full border px-7 font-sans text-xs tracking-[0.25em] uppercase transition-colors'>
					{copy.secondary}
				</a> */}
			</div>

			<p className='text-aurelia-gold/70 mt-16 font-serif text-sm tracking-[0.3em] uppercase italic'>{copy.tagline}</p>
		</section>
	)
}
