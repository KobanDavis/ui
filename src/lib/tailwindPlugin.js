/** @type {import('tailwindcss').Config} */
const preset = {
	theme: {
		extend: {
			colors: {
				theme: {
					primary: 'rgb(var(--theme-primary) / <alpha-value>)',
					'primary-light': 'var(--theme-primary-light)',
					'primary-lighter': 'var(--theme-primary-lighter)',
					secondary: 'rgb(var(--theme-secondary) / <alpha-value>)'
				}
			},
			opacity: {
				15: '0.15'
			}
		}
	}
}

/** @param {import('tailwindcss').Config} config */
export const kdUI = (config) => {
	if (!('presets' in config)) {
		config.presets = [preset]
	} else {
		config.presets.push(preset)
	}

	config.content.push('./node_modules/@kobandavis/ui/dist/index.js')
}
