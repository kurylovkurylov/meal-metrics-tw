import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import { Header } from '@/components/header'

export const MainLayout: FC = () => {
  return (
    <div className='flex flex-col gap-6'>
      <Header />
      <Outlet />
    </div>
  )
}
