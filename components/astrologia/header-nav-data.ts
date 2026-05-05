export type AstrologiaHeaderLang = 'en' | 'it'

export const ASTROLOGIA_HEADER_NAV: Record<AstrologiaHeaderLang, { label: string; href: string }[]> = {
	en: [
		{ label: 'Services', href: '#servizi' },
		{ label: 'Zodiac', href: '#zodiaco' },
		{ label: 'Contact', href: '#contatti' }
	],
	it: [
		{ label: 'Servizi', href: '#servizi' },
		{ label: 'Zodiaco', href: '#zodiaco' },
		{ label: 'Contatti', href: '#contatti' }
	]
}
