import { twMerge } from 'tailwind-merge'

export const Home = () => {
  return (
    <div className={twMerge(
      'h-screen',
      'w-screen',
      'max-w-screen',
      'min-h-screen',
      'flex',
      'flex-col',
      'bg-gray-50',
      'dark:bg-slate-800',
      'text-black',
      'dark:text-white',
      'justify-center',
      'items-center'
    )}>
      <h1 className={twMerge('text-4xl')}>Hello</h1>
    </div>
  )
}
