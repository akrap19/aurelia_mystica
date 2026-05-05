'use client'

import { useState } from 'react'
import { Menu } from 'lucide-react'

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogTitle,
	DialogTrigger
} from '@/components/ui/dialog'
import type { AstrologiaHeaderLang } from '@/components/astrologia/header-nav-data'

type Props = {
	lang: AstrologiaHeaderLang
	items: { label: string; href: string }[]
}

export const HeaderMobileMenu = ({ lang, items }: Props) => {
	const [open, setOpen] = useState(false)

	const ariaOpen = lang === 'it' ? 'Apri il menu di navigazione' : 'Open navigation menu'
	const dialogTitle = lang === 'it' ? 'Menù di navigazione' : 'Navigation menu'

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<button
					type='button'
					aria-label={ariaOpen}
					className='border-aurelia-gold/30 text-aurelia-cream hover:border-aurelia-gold hover:bg-aurelia-gold/10 hover:text-aurelia-gold-soft lg:hidden inline-flex size-9 cursor-pointer items-center justify-center rounded-md border transition-colors'>
					<Menu className='size-5' strokeWidth={1.5} />
				</button>
			</DialogTrigger>
			<DialogContent
				showCloseButton
				variant='drawer'
				className='data-[state=open]:animate-aur-drawer-in-from-right data-[state=closed]:animate-aur-drawer-out-to-right bg-aurelia-navy-deep border-0 border-l border-aurelia-gold/20 text-aurelia-cream top-0 bottom-0 right-0 left-auto flex h-full max-h-[100dvh] w-[min(100%,20rem)] max-w-none translate-x-0 translate-y-0 flex-col gap-0 rounded-none p-0 pt-16 shadow-2xl sm:max-w-none'>
				<DialogTitle className='sr-only'>{dialogTitle}</DialogTitle>
				<DialogDescription className='sr-only'>
					{lang === 'it' ? 'Passa a una sezione della pagina.' : 'Jump to a section on this page.'}
				</DialogDescription>
				<nav aria-label={lang === 'it' ? 'Sezioni della pagina' : 'Page sections'} className='flex min-h-0 flex-1 flex-col overflow-y-auto'>
					{items.map(item => (
						<a
							key={item.href}
							href={item.href}
							onClick={() => setOpen(false)}
							className='border-aurelia-gold/10 font-sans text-sm tracking-[0.28em] uppercase transition-colors hover:bg-aurelia-gold/5 active:bg-aurelia-gold/10 border-b px-8 py-5 text-aurelia-cream/90 hover:text-aurelia-gold-soft'>
							{item.label}
						</a>
					))}
				</nav>
				<nav
					className='border-aurelia-gold/10 shrink-0 border-t px-8 py-6'
					aria-labelledby='mobile-menu-lang-label'>
					<p id='mobile-menu-lang-label' className='text-aurelia-cream/55 mb-3 font-sans text-[10px] tracking-[0.24em] uppercase'>
						{lang === 'it' ? 'Lingua' : 'Language'}
					</p>
					<div className='border-aurelia-gold/25 bg-aurelia-navy-deep/35 inline-flex rounded-full border p-1'>
						{(['en', 'it'] as const).map(code => (
							<a
								key={code}
								href={`/astrologia?lang=${code}`}
								aria-current={lang === code ? 'page' : undefined}
								onClick={() => setOpen(false)}
								className={`rounded-full px-4 py-2 font-sans text-[10px] font-medium tracking-[0.2em] uppercase transition-colors ${
									lang === code
										? 'bg-aurelia-gold text-aurelia-navy-deep'
										: 'text-aurelia-cream/65 hover:text-aurelia-gold-soft'
								}`}>
								{code}
							</a>
						))}
					</div>
				</nav>
			</DialogContent>
		</Dialog>
	)
}
