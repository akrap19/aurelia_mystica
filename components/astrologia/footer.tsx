import { Facebook, Instagram } from 'lucide-react'

import { INSTAGRAM_PROFILE_URL } from '@/lib/instagram'

type Language = 'en' | 'it'

const TAGLINE = {
	en: 'The stars speak · We translate',
	it: 'Le stelle parlano · Noi traduciamo'
}

const SOCIAL_NAV_LABEL = {
	en: 'Social profiles',
	it: 'Profili social'
}

const SOCIAL_ARIA = {
	en: {
		instagram: 'Follow Aurelia Mystica on Instagram',
		facebook: 'Follow Aurelia Mystica on Facebook'
	},
	it: {
		instagram: 'Segui Aurelia Mystica su Instagram',
		facebook: 'Segui Aurelia Mystica su Facebook'
	}
}

const iconLinkClass =
	'text-aurelia-gold-soft focus-visible:ring-aurelia-gold/50 inline-flex size-11 items-center justify-center rounded-full transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-aurelia-navy-deep focus-visible:outline-none'

export const Footer = ({ lang }: { lang: Language }) => {
	const aria = SOCIAL_ARIA[lang]

	return (
		<footer className='border-aurelia-gold/15 relative z-10 mx-auto w-full max-w-7xl border-t px-6 py-12 md:px-10'>
			<div className='flex w-full flex-col items-center justify-between gap-6 md:flex-row'>
				<div className='flex items-center gap-3'>
					<span className='font-display text-aurelia-cream/80 text-xs tracking-[0.4em] uppercase'>Aurelia</span>
					<span className='bg-aurelia-gold/40 h-px w-6' />
					<span className='font-display text-aurelia-gold-soft text-xs tracking-[0.4em] uppercase'>Mystica</span>
				</div>

				<p className='text-aurelia-cream/50 font-serif text-xs tracking-[0.2em] uppercase italic'>{TAGLINE[lang]}</p>

				<nav
					aria-label={SOCIAL_NAV_LABEL[lang]}
					className='flex items-center -space-x-3 [&_a]:relative [&_a]:z-0 [&_a:focus-visible]:z-10'>
					<a
						href={INSTAGRAM_PROFILE_URL}
						target='_blank'
						rel='noopener noreferrer'
						className={iconLinkClass}
						aria-label={aria.instagram}>
						<Instagram className='size-5.5' aria-hidden />
					</a>
					<a
						href='https://www.facebook.com/profile.php?id=61589172201314'
						target='_blank'
						rel='noopener noreferrer'
						className={iconLinkClass}
						aria-label={aria.facebook}>
						<Facebook className='size-5.5' aria-hidden />
					</a>
				</nav>
			</div>
		</footer>
	)
}
