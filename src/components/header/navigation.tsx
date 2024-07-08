import { FC } from 'react'
import { NavLink } from 'react-router-dom'

import { cn } from '@/utils/cn'

import { navigationData } from './navigation-data'

export const Navigation: FC = () => {
  return (
    <ul className='flex items-center gap-3'>
      {navigationData.map(({ title, path }) => (
        <li key={path}>
          <NavLink
            to={path}
            className={({ isActive }) =>
              cn('text-blue-500', 'text-xs', 'uppercase', 'font-semibold', {
                'text-blue-600': isActive,
              })
            }
          >
            {title}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}
