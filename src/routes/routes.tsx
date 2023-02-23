import { lazily } from 'react-lazily';
import { RouteObject } from 'react-router-dom';

const { LazyPage1 } = lazily(() => import('@/01-lazyload/pages/LazyPage1'));
const { LazyPage2 } = lazily(() => import('@/01-lazyload/pages/LazyPage2'));
const { LazyPage3 } = lazily(() => import('@/01-lazyload/pages/LazyPage3'));

export const LazyRoutes: RouteObject[] = [
  {
    id: 'Lazy 1',
    path: 'lazy1',
    element: <LazyPage1 />
  },
  {
    id: 'Lazy 2',
    path: 'lazy2',
    element: <LazyPage2 />
  },
  {
    id: 'Lazy 3',
    path: 'lazy3',
    element: <LazyPage3 />
  }
];
