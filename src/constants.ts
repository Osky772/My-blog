type MapKey<T extends Map<any, any>> = T extends Map<infer K, any> ? K : never

/**
 * Metadata for your site
 */
export const SITE: Record<string, string> = {
	url: 'https://oskarkowalow.pl',
	title: 'Oskar Kowalów',
	titleDefault: 'Oskar Kowalów – Blog o programowaniu i zarządzaniu',
	description: 'Blog Oskara Kowalów o programowaniu, zarządzaniu zespołem i budowaniu produktów.',
	lang: 'pl',
	defaultOgImage: '/og-image.png',
	defaultAuthor: 'Oskar Kowalów',
}

interface Header {
	internal: Array<{ title: string, url: string }>
	external: Array<{ title: string, url: string, props?: Record<string, unknown> }>
}

export const HEADER: Header = {
	internal: [
		{
			title: 'Blog',
			url: '/blog/',
		},
		{
			title: 'O mnie',
			url: '/about/',
		},
	],
	external: [
		{
			title: 'LinkedIn',
			url: 'https://www.linkedin.com/in/oskarkowalow/',
			props: {
				target: '_blank',
			},
		},
		{
			title: 'GitHub',
			url: 'https://github.com/Osky772',
			props: {
				target: '_blank',
			},
		},
	],
}

/**
 * A map of name - slug pairs
 */
export const FRONTMATTER_TAGS = new Map(
	[
		['Git', 'git'] as const,
		['Scrum', 'scrum'] as const,
		['JavaScript', 'javascript'] as const,
		['TypeScript', 'typescript'] as const,
		['Java', 'java'] as const,
		['npm', 'npm'] as const,
		['Narzędzia', 'narzedzia'] as const,
		['Przywództwo', 'przywodztwo'] as const,
		['Ogólne', 'ogolne'] as const,
		['Algorytmika', 'algorytmika'] as const,
	],
)

export type FrontmatterTag = MapKey<typeof FRONTMATTER_TAGS>

export const SKIP_NAV_ID = 'skip-to-content'

export const ASIDE_TYPES = ['note', 'tip', 'caution', 'danger'] as const
export type AsideType = (typeof ASIDE_TYPES)[number]
