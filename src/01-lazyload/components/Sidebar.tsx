import { NavLink } from 'react-router-dom';

import { LazyRoutes } from '@/routes';

export const Sidebar = () => {
  return (
    <nav className="nav">
      <img alt="React Logo" src="/react.svg" width={200} />
      <ul>
        {LazyRoutes.map(({ id, path }) => (
          <li key={id}>
            <NavLink to={path!}>{id}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
