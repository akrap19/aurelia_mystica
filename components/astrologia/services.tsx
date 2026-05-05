import { Compass, Heart, Orbit, ArrowUpRight } from 'lucide-react'

import { SERVICES_COPY, type Language } from './copy'

const SERVICE_ICONS = [Compass, Heart, Orbit]

export const Services = ({ lang }: { lang: Language }) => {
	const copy = SERVICES_COPY[lang]

	return (
		<section id='servizi' className='relative z-10 mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-32'>
			<div className='mb-16 flex flex-col items-center text-center md:mb-20'>
				<span className='text-aurelia-gold/80 font-sans text-[10px] tracking-[0.5em] uppercase'>{copy.label}</span>
				<h2 className='font-display text-aurelia-cream mt-6 max-w-2xl text-3xl leading-[1.15] font-light tracking-[0.05em] uppercase md:text-5xl'>
					{copy.titleBefore} <span className='text-gold-gradient'>{copy.titleAccent}</span> {copy.titleAfter}
				</h2>
				<div className='divider-gold mt-8 h-px w-32' />
			</div>

			<div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
				{copy.services.map((service, index) => {
					const Icon = SERVICE_ICONS[index]

					return (
						<article
							key={service.title}
							className='group border-gold-soft cursor-pointer hover:border-aurelia-gold/60 from-aurelia-purple/25 relative flex flex-col overflow-hidden rounded-lg border bg-gradient-to-b to-transparent p-8 transition-all hover:-translate-y-1'>
							<span className='bg-aurelia-gold/0 group-hover:bg-aurelia-gold/40 absolute top-0 left-0 h-px w-full transition-colors' />
							<div className='border-aurelia-gold/30 text-aurelia-gold-soft group-hover:border-aurelia-gold mb-8 flex size-12 items-center justify-center rounded-full border transition-colors'>
								<Icon className='size-5' strokeWidth={1.2} />
							</div>
							<h3 className='font-display text-aurelia-cream text-lg leading-tight tracking-[0.2em] uppercase'>
								{service.title}
							</h3>
							<span className='text-aurelia-gold/70 mt-2 font-serif text-sm tracking-[0.2em] uppercase italic'>
								{service.duration}
							</span>
							<p className='text-aurelia-cream/65 mt-5 flex-1 font-sans text-sm leading-relaxed font-light'>
								{service.desc}
							</p>
							<div className='text-aurelia-gold-soft group-hover:text-aurelia-gold mt-8 inline-flex items-center gap-2 font-sans text-xs tracking-[0.25em] uppercase transition-colors'>
								{copy.discover}
								<ArrowUpRight className='size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
							</div>
						</article>
					)
				})}
			</div>
		</section>
	)
}
