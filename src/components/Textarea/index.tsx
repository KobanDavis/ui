import clsx from 'clsx'
import { backgroundPrimaryHover, backgroundSecondaryHover, borderHover } from '../../lib/styles'
import React, { FC } from 'react'
import { ThemeType } from '../../types'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	type?: ThemeType
}

export const inputStyles = {
	DEFAULT: clsx(borderHover, backgroundSecondaryHover),
	primary: clsx('text-theme-secondary', backgroundPrimaryHover),
	secondary: backgroundSecondaryHover
}

const Textarea: FC<TextareaProps> = ({ className, type, ...props }) => {
	return (
		<textarea
			className={clsx(
				'px-2 py-1.5 rounded-sm outline-none placeholder-theme-primary/50',
				'text-xs transition-colors',
				inputStyles[type ?? 'DEFAULT'],
				className
			)}
			{...props}
		/>
	)
}

export default Textarea
