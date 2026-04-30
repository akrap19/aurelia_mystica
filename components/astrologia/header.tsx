import Image from 'next/image'

type Language = 'en' | 'it'

const NAV_ITEMS = {
	en: [
		{ label: 'Astrology', href: '#astrologia' },
		{ label: 'Services', href: '#servizi' },
		{ label: 'Zodiac', href: '#zodiaco' },
		{ label: 'Contact', href: '#contatti' }
	],
	it: [
		{ label: 'Astrologia', href: '#astrologia' },
		{ label: 'Servizi', href: '#servizi' },
		{ label: 'Zodiaco', href: '#zodiaco' },
		{ label: 'Contatti', href: '#contatti' }
	]
}

export const Header = ({ lang }: { lang: Language }) => {
	return (
		<header className='relative z-20 mx-auto grid w-full max-w-7xl grid-cols-[1fr_auto] items-center gap-6 px-6 py-6 md:px-10 md:py-8 lg:grid-cols-[1fr_auto_1fr]'>
			<div className='flex items-center gap-3'>
				<span className='font-display text-aurelia-cream text-sm tracking-[0.4em] uppercase md:text-base'>Aurelia</span>
				<span className='bg-aurelia-gold/60 hidden h-px w-8 md:block' />
				<span className='font-display text-aurelia-gold-soft text-sm tracking-[0.4em] uppercase md:text-base'>
					Mystica
				</span>
			</div>

			<nav className='hidden items-center gap-10 lg:flex'>
				{NAV_ITEMS[lang].map(item => (
					<a
						key={item.href}
						href={item.href}
						className='text-aurelia-cream/70 hover:text-aurelia-gold-soft font-sans text-xs tracking-[0.25em] uppercase transition-colors'>
						{item.label}
					</a>
				))}
			</nav>

			<div className='flex items-center justify-end gap-4'>
				<div className='border-aurelia-gold/25 bg-aurelia-navy-deep/35 flex rounded-full border p-1'>
					{(['en', 'it'] as const).map(code => (
						<a
							key={code}
							href={`/astrologia?lang=${code}`}
							aria-current={lang === code ? 'page' : undefined}
							className={`rounded-full px-3 py-1.5 font-sans text-[10px] font-medium tracking-[0.2em] uppercase transition-colors ${
								lang === code
									? 'bg-aurelia-gold text-aurelia-navy-deep'
									: 'text-aurelia-cream/65 hover:text-aurelia-gold-soft'
							}`}>
							{code}
						</a>
					))}
				</div>

				<a href='/astrologia' aria-label='Aurelia Mystica home' className='group relative block size-14 md:size-16'>
					<span className='border-aurelia-gold/30 group-hover:border-aurelia-gold/70 absolute inset-0 rounded-full border transition-colors' />
					<span className='border-aurelia-gold/15 absolute inset-1 rounded-full border' />
					<Image
						src='/aurelia_mystica_no_background.png'
						alt='Aurelia Mystica logo'
						width={120}
						height={120}
						priority
						className='relative size-full object-contain p-1'
					/>
				</a>
			</div>
		</header>
	)
}
