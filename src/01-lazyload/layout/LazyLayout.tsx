import { Route, Routes, Navigate } from 'react-router-dom';

import { LazyRoutes } from '@/01-lazyload/router/LazyRoutes';
import { NavLinkList } from '@/01-lazyload/components/NavLinkList';

export const LazyLayout = () => (
  <div>
    <h1>LazyLayout Page</h1>
    <NavLinkList routes={LazyRoutes} />

    <Routes>
      {LazyRoutes.map(({ path, element }) => (
        <Route key={path} {...{ path, element }} />
      ))}
      <Route element={<Navigate to={LazyRoutes[0].path} />} path="*" />
    </Routes>
  </div>
);
