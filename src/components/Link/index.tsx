import clsx from 'clsx'
import React, { FC } from 'react'

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

const Link: FC<LinkProps> = ({ children, href, className, ...props }) => {
	return (
		<a href={href} className={clsx('relative cursor-pointer font-semibold w-min whitespace-nowrap group', className)} {...props}>
			{children}
			<div className='absolute h-px -bottom-px left-0 bg-current w-0 group-hover:w-full transition-[width] ease-out duration-300' />
			<div className='absolute h-0 -bottom-px left-0 border-current border-b-[1px] border-dotted w-full' />
		</a>
	)
}

export default Link
