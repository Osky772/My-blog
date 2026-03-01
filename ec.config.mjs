import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections'
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'
import { defineEcConfig } from 'astro-expressive-code'

export default defineEcConfig({
	themes: ['github-light', 'github-dark'],
	plugins: [pluginCollapsibleSections(), pluginLineNumbers()],
	defaultProps: {
		showLineNumbers: false,
		collapseStyle: 'collapsible-auto',
	},
	styleOverrides: {
		frames: {
			shadowColor: 'none',
		},
	},
	themeCssSelector: (theme, { styleVariants }) => {
		if (styleVariants.length === 2) {
			const baseTheme = styleVariants[0]?.theme
			const altTheme = styleVariants.find(v => v.theme.type !== baseTheme?.type)?.theme
			if (theme === baseTheme || theme === altTheme)
				return `[data-theme='${theme.type}']`
		}
		return `[data-theme='${theme.name}']`
	},
})
