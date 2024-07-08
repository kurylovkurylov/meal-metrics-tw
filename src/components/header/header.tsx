import { FC } from 'react'

import { Navigation } from './navigation'

export const Header: FC = () => {
  return (
    <div className='flex h-12 items-center justify-between bg-slate-300 px-4'>
      <h1 className='font-semibold text-slate-600'>Meal Metrics</h1>
      <Navigation />
    </div>
  )
}
