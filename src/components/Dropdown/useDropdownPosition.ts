import { useEffect, useRef, useState } from 'react'

const useDropdownPosition = () => {
	const dropdownRef = useRef<HTMLButtonElement>(null)
	const [position, setPosition] = useState({
		maxHeight: 0,
		margin: 4,
		x: 0,
		y: 0,
		dropdownRef
	})

	useEffect(() => {
		const dropdown = dropdownRef.current
		if (!dropdown) return

		const calc = () => {
			if (dropdown) {
				setPosition((old) => {
					const position = Object.assign({}, old)
					const rect = dropdown.getBoundingClientRect()

					position.maxHeight = window.innerHeight - rect.bottom - position.margin * 2
					position.x = rect.x
					position.y = rect.y
					return position
				})
			}
		}

		calc()
		window.addEventListener('resize', calc)
		return () => window.removeEventListener('resize', calc)
	}, [])

	return position
}

export default useDropdownPosition
