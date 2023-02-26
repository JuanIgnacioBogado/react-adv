import { NavLinkList } from './';

import { /* LazyRoutes,  */ ComponentPatternsRoutes } from '@/routes';

export const Sidebar = () => (
  <nav className="nav">
    <img alt="React Logo" src="/react.svg" width={200} />

    <NavLinkList routes={ComponentPatternsRoutes} />
  </nav>
);
