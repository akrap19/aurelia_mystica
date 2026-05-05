export type Language = 'en' | 'it'

export const INTRO_COPY = {
	en: {
		label: 'What is Astrology',
		heading: 'An ancient dialogue between',
		accent: 'sky and soul',
		body: 'Astrology is the sacred language of planets, zodiac signs, and astrological houses. More than prediction, it is a tool for awareness that illuminates your innate gifts, your cycles, and the key moments of your path.',
		quote: 'Every soul is born beneath a unique sky. That celestial map is your cosmic signature.',
		pillars: [
			{
				title: 'Sun',
				desc: 'The luminous essence that embodies who you are at the deepest level of your being.'
			},
			{
				title: 'Moon',
				desc: 'Your emotional world, intuition, and the inner rhythms of your soul.'
			},
			{
				title: 'Rising Sign',
				desc: 'The way you meet the world and the first impression your energy creates.'
			}
		]
	},
	it: {
		label: "Cos'è l'Astrologia",
		heading: 'Un dialogo antico tra',
		accent: 'cielo e anima',
		body: "L'astrologia è il linguaggio sacro dei pianeti, dei segni zodiacali e delle case astrologiche. Più di una previsione: è uno strumento di consapevolezza che illumina i tuoi doni innati, i tuoi cicli e i momenti chiave del tuo cammino.",
		quote: 'Ogni anima nasce sotto un cielo unico. Quella mappa celeste è la tua firma cosmica.',
		pillars: [
			{
				title: 'Sole',
				desc: "L'essenza luminosa che incarna chi sei nel profondo del tuo essere."
			},
			{
				title: 'Luna',
				desc: "Il mondo emotivo, l'intuito e i ritmi interiori della tua anima."
			},
			{
				title: 'Ascendente',
				desc: 'La maschera con cui incontri il mondo e il modo in cui appari.'
			}
		]
	}
}

export const SERVICES_COPY = {
	en: {
		label: 'What We Offer',
		titleBefore: 'Our astrology',
		titleAccent: 'services',
		titleAfter: '',
		discover: 'Discover',
		services: [
			{
				title: 'Natal chart',
				duration: '€29.99',
				desc: 'A complete natal chart: planets, signs, and houses woven into one clear reading of your sky at birth.'
			},
			{
				title: 'Comparative horoscope',
				duration: '€19.99',
				desc: 'Synastry for two charts—how your energies meet in love, friendship, or collaboration, mapped with care.'
			},
			{
				title: 'Both in one package',
				duration: '€39.99',
				desc: 'Natal chart plus comparative horoscope together: your personal map and the story between two souls, in one bundle.'
			}
		]
	},
	it: {
		label: 'Cosa Offriamo',
		titleBefore: 'I nostri',
		titleAccent: 'servizi',
		titleAfter: 'astrologici',
		discover: 'Scopri',
		services: [
			{
				title: 'Carta natale',
				duration: '€29.99',
				desc: "Carta natale completa: pianeti, segni e case intrecciati in un'unica lettura chiara del cielo alla nascita."
			},
			{
				title: 'Oroscopo comparato',
				duration: '€19.99',
				desc: 'Sinastria tra due mappe—come le vostre energie si incontrano in amore, amicizia o collaborazione, con attenzione al dettaglio.'
			},
			{
				title: 'Entrambi in pacchetto',
				duration: '€39.99',
				desc: "Carta natale più oroscopo comparato insieme: la tua mappa personale e la dinamica tra due anime, in un'unica offerta."
			}
		]
	}
}
