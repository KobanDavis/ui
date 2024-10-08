import React, { FC } from 'react'
import clsx from 'clsx'
import Loading from '../Loading'

interface ModalProps {
	close(): void
	loading?: boolean
	children: () => React.ReactNode
	closeOnOutsideClick?: boolean
}

const Modal: FC<ModalProps> = ({ close, closeOnOutsideClick = true, loading, children }) => {
	const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (closeOnOutsideClick && e.target === e.currentTarget) {
			close()
		}
	}

	return loading ? (
		<div className='flex items-center justify-center h-screen w-full fixed top-0 left-0 backdrop-blur'>
			<Loading size={8} />
		</div>
	) : (
		<div
			onClick={handleOutsideClick}
			className={clsx('flex justify-center h-screen w-full fixed top-0 left-0 backdrop-blur p-4 overflow-y-auto')}
		>
			{children()}
		</div>
	)
}

export default Modal
