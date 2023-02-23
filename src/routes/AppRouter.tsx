import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Sidebar } from '@/01-lazyload/components';

export const AppRouter = () => (
  <div className="main-layout">
    <Sidebar />

    <Suspense fallback={<h1>Cargando...</h1>}>
      <Outlet />
    </Suspense>
  </div>
);
