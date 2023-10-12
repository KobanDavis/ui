import { FC } from 'react'
import { FaceSmileIcon } from '@heroicons/react/24/outline'

const App: FC = () => {
	return (
		<div className='bg-slate-100 flex flex-col justify-center items-center w-screen h-screen'>
			<span className='items-center text-3xl mb-2'>Vite Template</span>
			<span className='text-slate-500 flex items-center'>
				<span>
					Edit <code className='bg-slate-200 px-1 py-px'>App.tsx</code> to get started
				</span>
				<FaceSmileIcon className='inline h-6 w-6 ml-1' />
			</span>
		</div>
	)
}

export default App
