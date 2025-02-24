import type { TNavLink } from '../../type'

export const navList: TNavLink[] = [
  {
    icon: 'suitcase',
    path: '/',
    label: 'All cases',
    title: 'View all cases',
  },
  {
    icon: 'pending',
    path: '/pending',
    label: 'Pending cases',
    title: 'View pending cases',
  },
  {
    icon: 'accepted',
    path: '/accepted',
    label: 'Accepted cases',
    title: 'View accepted cases',
  },
  {
    icon: 'rejected',
    path: '/rejected',
    label: 'Rejected cases',
    title: 'View rejected cases',
  },
]
