import { lazily } from 'react-lazily';
const { LazyLayout } = lazily(() => import('@/01-lazyload/layout/LazyLayout'));

export interface Route {
  id: string;
  to?: string;
  path: string;
  element: JSX.Element;
}

export const Routes: Route[] = [
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
