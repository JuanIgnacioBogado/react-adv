import { lazily } from 'react-lazily';

const { LazyLayout } = lazily(() => import('@/01-lazyload/layout/LazyLayout'));

import { ShoppingPage } from '@/02-component-patterns/pages/ShoppingPage';

export interface Route {
  id: string;
  to?: string;
  path: string;
  element: JSX.Element;
}

export const LazyRoutes: Route[] = [
  {
    id: 'LazyLayout - Dash',
    path: 'lazyload/*',
    to: 'lazyload',
    element: <LazyLayout />
  },
  {
    id: 'No Lazy',
    path: 'no-lazy',
    element: <h1>No Lazy</h1>
  }
];

export const ComponentPatternsRoutes: Route[] = [
  {
    id: 'Shopping',
    path: 'shopping/*',
    to: 'shopping',
    element: <ShoppingPage />
  },
  {
    id: 'About',
    path: 'about',
    element: <h1>About</h1>
  },
  {
    id: 'Users',
    path: 'users',
    element: <h1>Users</h1>
  }
];
