const { kdUI } = require('./src/lib/tailwindPlugin')

module.exports = {
	content: ['src/**/*.{ts,tsx}']
}

kdUI(module.exports)
