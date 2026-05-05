'use client'

import { useEffect, useState } from 'react'

import { ASTROLOGIA_HEADER_NAV, type AstrologiaHeaderLang } from '@/components/astrologia/header-nav-data'
import { HeaderMobileMenu } from '@/components/astrologia/header-mobile-menu'
import { cn } from '@/lib/utils'

const SCROLL_THRESHOLD = 64

export const Header = ({ lang }: { lang: AstrologiaHeaderLang }) => {
	const [compact, setCompact] = useState(false)
	const navItems = ASTROLOGIA_HEADER_NAV[lang]

	useEffect(() => {
		const update = () => setCompact(window.scrollY > SCROLL_THRESHOLD)
		update()
		window.addEventListener('scroll', update, { passive: true })
		return () => window.removeEventListener('scroll', update)
	}, [])

	return (
		<header
			className={cn(
				'sticky top-0 z-30 w-full transition-[padding,box-shadow,border-color,background-color] duration-300 ease-out motion-reduce:transition-none',
				compact
					? 'border-aurelia-gold/10 bg-aurelia-navy-deep/90 shadow-[0_12px_40px_-12px_rgba(7,10,31,0.85)] backdrop-blur-md supports-backdrop-filter:bg-aurelia-navy-deep/75 border-b py-3'
					: 'bg-transparent py-6 md:py-8'
			)}>
			<div
				className={cn(
					'mx-auto grid max-w-7xl items-center gap-x-6 px-6 md:px-10',
					'grid-cols-[1fr_auto] lg:grid-cols-[1fr_auto_1fr]'
				)}>
				<div className='flex items-center gap-2 md:gap-3 lg:justify-self-start'>
					<span
						className={cn(
							'font-display text-aurelia-cream uppercase tracking-[0.35em]',
							compact ? 'text-xs md:text-[13px]' : 'text-sm md:text-base'
						)}>
						Aurelia
					</span>
					<span className={cn('bg-aurelia-gold/60 hidden h-px w-8 md:block', compact && 'opacity-75')} />
					<span
						className={cn(
							'font-display text-aurelia-gold-soft uppercase tracking-[0.35em]',
							compact ? 'text-xs md:text-[13px]' : 'text-sm md:text-base'
						)}>
						Mystica
					</span>
				</div>

				<nav
					className='hidden items-center gap-10 lg:col-start-2 lg:row-start-1 lg:flex lg:justify-center'
					aria-label={lang === 'it' ? 'Sezioni della pagina' : 'Page sections'}>
					{navItems.map(item => (
						<a
							key={item.href}
							href={item.href}
							className='text-aurelia-cream/70 hover:text-aurelia-gold-soft font-sans text-xs tracking-[0.25em] uppercase transition-colors'>
							{item.label}
						</a>
					))}
				</nav>

				<div className='flex items-center justify-end gap-2 lg:col-start-3 lg:gap-4 lg:justify-self-end'>
					<HeaderMobileMenu lang={lang} items={navItems} />
					<div className='border-aurelia-gold/25 bg-aurelia-navy-deep/35 hidden rounded-full border p-1 lg:flex'>
						{(['en', 'it'] as const).map(code => (
							<a
								key={code}
								href={`/astrologia?lang=${code}`}
								aria-current={lang === code ? 'page' : undefined}
								className={`rounded-full px-3 py-1.5 font-sans text-[10px] font-medium tracking-[0.2em] uppercase transition-colors ${
									lang === code
										? 'bg-aurelia-gold text-aurelia-navy-deep'
										: 'text-aurelia-cream/65 hover:text-aurelia-gold-soft'
								} ${compact ? 'py-1' : ''}`}>
								{code}
							</a>
						))}
					</div>
				</div>
			</div>
		</header>
	)
}
