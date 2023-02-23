import { NavLinkList } from '@/01-lazyload/components';
import { Routes } from '@/routes';

export const Sidebar = () => (
  <nav className="nav">
    <img alt="React Logo" src="/react.svg" width={200} />

    <NavLinkList routes={Routes} />
  </nav>
);
