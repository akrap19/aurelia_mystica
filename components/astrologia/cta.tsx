import Image from 'next/image'
import { Sparkles } from 'lucide-react'

import { INSTAGRAM_DM_URL } from '@/lib/instagram'

type Language = 'en' | 'it'

const COPY = {
	en: {
		heading: 'Your sky is',
		accent: 'waiting for you',
		body: 'Book a personalized reading with Aurelia Mystica and discover what the stars have written for you. An intimate, deep, and luminous path.',
		cta: 'Book now',
		tagline: 'Aurelia Mystica — Your guide. Your truth. Your universe.'
	},
	it: {
		heading: 'Il tuo cielo ti',
		accent: 'sta aspettando',
		body: 'Prenota una lettura personalizzata con Aurelia Mystica e scopri ciò che le stelle hanno scritto per te. Un percorso intimo, profondo e luminoso.',
		cta: 'Prenota ora',
		tagline: 'Aurelia Mystica — La tua guida. La tua verità. Il tuo universo.'
	}
}

export const Cta = ({ lang }: { lang: Language }) => {
	const copy = COPY[lang]

	return (
		<section id='contatti' className='relative z-10 mx-auto w-full max-w-5xl px-6 py-24 md:px-10 md:py-32'>
			<div className='border-gold-soft from-aurelia-purple/40 via-aurelia-navy relative overflow-hidden rounded-2xl border bg-gradient-to-br to-transparent px-8 py-16 text-center md:px-16 md:py-24'>
				<div className='bg-aurelia-gold/10 absolute -top-20 -left-20 size-64 rounded-full blur-3xl' />
				<div className='bg-aurelia-rose/10 absolute -right-20 -bottom-20 size-64 rounded-full blur-3xl' />

				<div className='relative'>
					<div className='animate-float-slow mx-auto mb-8 size-20 md:size-24'>
						<div className='border-aurelia-gold/30 absolute inset-0 rounded-full border' />
						<Image
							src='/aurelia_mystica_no_background.png'
							alt=''
							aria-hidden
							width={160}
							height={160}
							className='size-full object-contain p-2'
						/>
					</div>

					<h2 className='font-display text-aurelia-cream mx-auto max-w-2xl text-3xl leading-[1.2] font-light tracking-[0.05em] uppercase md:text-5xl'>
						{copy.heading}
						<span className='font-serif text-gold-gradient block italic normal-case tracking-normal'>
							{copy.accent}
						</span>
					</h2>

					<p className='text-aurelia-cream/70 mx-auto mt-8 max-w-xl font-sans text-base leading-relaxed font-light md:text-lg'>
						{copy.body}
					</p>

					<div className='mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row'>
						<a
							href={INSTAGRAM_DM_URL}
							target='_blank'
							rel='noopener noreferrer'
							className='bg-aurelia-gold text-aurelia-navy-deep hover:bg-aurelia-gold-soft inline-flex h-12 items-center gap-2 rounded-full px-12 py-2 font-sans text-xs font-medium tracking-[0.25em] uppercase transition-colors'>
							<Sparkles className='size-4' />
							{copy.cta}
						</a>
						{/* <a
							href='#'
							className='border-aurelia-gold/40 text-aurelia-cream hover:border-aurelia-gold hover:text-aurelia-gold-soft inline-flex h-12 items-center rounded-full border px-8 font-sans text-xs tracking-[0.25em] uppercase transition-colors'>
							@aurelia.mystica
						</a> */}
					</div>

					<p className='text-aurelia-gold/70 mt-12 font-serif text-xs tracking-[0.3em] uppercase italic md:text-sm'>
						{copy.tagline}
					</p>
				</div>
			</div>
		</section>
	)
}
