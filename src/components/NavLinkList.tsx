import { memo } from 'react';
import { NavLink } from 'react-router-dom';

import { Route } from '@/routes';

interface Props {
  routes: Route[];
}

export const NavLinkList = memo(({ routes }: Props) => (
  <ul>
    {routes.map(({ id, to, path }) => (
      <li key={id}>
        <NavLink to={to || path}>{id}</NavLink>
      </li>
    ))}
  </ul>
));

NavLinkList.displayName = 'NavLinkList';
