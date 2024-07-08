import { Routes } from '@/consts/routes'

interface NavigationDataItem {
  title: string
  path: Routes
}

export const navigationData: NavigationDataItem[] = [
  {
    title: 'Plans',
    path: Routes.PLANS,
  },
  {
    title: 'Products',
    path: Routes.PRODUCTS,
  },
  {
    title: 'Profile',
    path: Routes.PROFILE,
  },
]
