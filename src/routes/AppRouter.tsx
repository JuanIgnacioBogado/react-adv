import { Outlet } from 'react-router-dom';

import { Sidebar } from '@/components';

export const AppRouter = () => (
  <div className="main-layout">
    <Sidebar />

    <Outlet />
  </div>
);
