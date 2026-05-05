'use client'

import Image from 'next/image'
import { useState } from 'react'

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { cn } from '@/lib/utils'
import type { ZodiacLanguage, ZodiacSignRow } from '@/lib/zodiac-signs'

export function ZodiacGrid({ lang, signs }: { lang: ZodiacLanguage; signs: ZodiacSignRow[] }) {
	const [open, setOpen] = useState(false)
	const [selected, setSelected] = useState<ZodiacSignRow | null>(null)

	const openSign = (sign: ZodiacSignRow) => {
		setSelected(sign)
		setOpen(true)
	}

	return (
		<>
			<div className='grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
				{signs.map(sign => (
					<button
						key={sign.id}
						type='button'
						aria-label={lang === 'it' ? `Apri dettagli: ${sign.name}` : `Open details: ${sign.name}`}
						onClick={() => openSign(sign)}
						className={cn(
							'group border-gold-soft hover:border-aurelia-gold/60 from-aurelia-purple/30 cursor-pointer',
							'relative flex flex-col items-center justify-center rounded-lg border bg-gradient-to-b to-transparent p-6 text-center',
							'transition-all hover:-translate-y-1 focus-visible:ring-aurelia-gold/50 focus-visible:ring-2 focus-visible:outline-none'
						)}>
						<span className='relative flex size-14 items-center justify-center transition-transform group-hover:scale-110'>
							<Image
								src={`/zodiac/${sign.id}.svg`}
								alt=''
								width={56}
								height={56}
								className='size-12 object-contain drop-shadow-[0_0_12px_rgba(212,169,84,0.25)]'
								unoptimized
							/>
						</span>
						<h3 className='font-display text-aurelia-cream mt-4 text-sm tracking-[0.2em] uppercase'>{sign.name}</h3>
						<span className='text-aurelia-gold/70 mt-2 font-serif text-[11px] italic'>{sign.dates}</span>
						<span className='border-aurelia-gold/25 text-aurelia-cream/60 mt-3 rounded-full border px-3 py-0.5 font-sans text-[10px] tracking-[0.2em] uppercase'>
							{sign.element}
						</span>
					</button>
				))}
			</div>

			<Dialog
				open={open}
				onOpenChange={next => {
					setOpen(next)
					if (!next) setSelected(null)
				}}>
				<DialogContent
					showCloseButton
					className={cn(
						'bg-aurelia-radial border-gold-soft max-h-[85vh] overflow-y-auto border',
						'text-aurelia-cream',
						'sm:max-w-md'
					)}>
					{selected ? (
						<>
							<DialogHeader className='items-center text-center sm:items-center sm:text-center'>
								<div className='mb-2 mt-2 flex items-center justify-center'>
									<Image
										src={`/zodiac/${selected.id}.svg`}
										alt=''
										width={72}
										height={72}
										className='size-[72px] object-contain drop-shadow-[0_0_20px_rgba(212,169,84,0.35)]'
										unoptimized
									/>
								</div>
								<DialogTitle className='text-gold-gradient font-display text-2xl font-light tracking-[0.2em] uppercase'>
									{selected.name}
								</DialogTitle>
								<DialogDescription className='text-aurelia-gold/80 font-serif text-sm italic'>
									{selected.dates}
									<span className='text-aurelia-cream/50 mx-2 not-italic'>·</span>
									<span className='uppercase tracking-[0.15em] not-italic'>{selected.element}</span>
								</DialogDescription>
							</DialogHeader>
							<p className='text-aurelia-cream/75 font-sans text-sm leading-relaxed font-light'>
								{selected.description}
							</p>
						</>
					) : null}
				</DialogContent>
			</Dialog>
		</>
	)
}
