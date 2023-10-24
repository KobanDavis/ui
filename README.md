# kdUI

A Tailwind-based UI library for React.

## ✨ Features

-   Built using Tailwind
-   Full TypeScript support
-   Configurable Theme

## 📦 Install

Pick one :)

```bash
bun i @kobandavis/ui
```

```bash
npm i @kobandavis/ui
```

```bash
yarn add @kobandavis/ui
```

```bash
pnpm add @kobandavis/ui
```

## 🔨 Usage

### Tailwind setup

If tailwind hasn't already been set up in your project, [follow these steps to get started](https://tailwindcss.com/docs/installation/framework-guides).

Tailwind needs to know about our new theme configuration, and _also include a content path_. Currently, tailwind doesn't support doing this through a plugin, so we set up kdUI as follows:

```js
// tailwind.config.js
const { kdUI } = require('@kobandavis/ui')

module.exports = {
	/* config */
}

kdUI(module.exports)
```

This function sets up a `preset` and a `content` path.

### Theme provider

Included is a `ThemeProvider` component that allows you to pass through a theme, or later change it with the `useTheme` hook.
Below is an example of how you'd use it:

```tsx
// index.tsx

import { ThemeProvider } from '@kobandavis/ui'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<ThemeProvider initialTheme={{ primary: '#000000', secondary: '#ffffff' }}>
		<App />
	</ThemeProvider>
)
```

```tsx
// app.tsx

import { useTheme } from '@kobandavis/ui'

const App: FC = () => {
	const { theme, setThemeColor } = useTheme()

	useEffect(() => {
		setThemeColor('primary', '#548bea')
	}, [])

	return <>{/* content */}</>
}
```
